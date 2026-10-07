// Run locally with: node scripts/check-inquiry.cjs
// The provider is stubbed. This check cannot send email.
const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");
const ts = require("typescript");

const source = fs.readFileSync("src/app/actions/email.ts", "utf8");
const compiled = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
}).outputText;
const calls = [];
let providerResult = { data: { id: "local-check" }, error: null };
const environment = { RESEND_API_KEY: "local-stub", RESEND_FROM_EMAIL: "Zyforge <inquiry@example.com>" };
const moduleExports = {};
vm.runInNewContext(compiled, {
  exports: moduleExports,
  Buffer,
  process: { env: environment },
  require: (name) => {
    assert.equal(name, "resend", "Unexpected dependency in the isolated check");
    return { Resend: class {
      emails = { send: async (request) => { calls.push(request); return providerResult; } };
    } };
  },
});

const valid = {
  name: "Example visitor", email: "visitor@example.com", company: "",
  projectType: "Business Website", customProjectType: "", hasLogo: "yes",
  description: "A small business website", budget: "", timeline: "", message: "", files: [],
};

async function check() {
  for (const invalid of [
    null, {}, { ...valid, email: "invalid" }, { ...valid, name: " " },
    { ...valid, projectType: "Custom", customProjectType: " " },
    { ...valid, hasLogo: "" }, { ...valid, description: " " },
    { ...valid, description: "x".repeat(5001) }, { ...valid, files: "invalid" },
    { ...valid, files: [{ name: "../file.pdf", content: "data:application/pdf;base64,YQ==" }] },
    { ...valid, files: [{ name: "file.exe", content: "data:application/octet-stream;base64,YQ==" }] },
    { ...valid, files: Array.from({ length: 9 }, () => ({ name: "small.pdf", content: "data:application/pdf;base64,YQ==" })) },
    { ...valid, files: [{ name: "large.pdf", content: "data:application/pdf;base64," + Buffer.alloc(3 * 1024 * 1024 + 1).toString("base64") }] },
    { ...valid, files: [1, 2].map(index => ({ name: `part-${index}.pdf`, content: "data:application/pdf;base64," + Buffer.alloc(2 * 1024 * 1024).toString("base64") })) },
  ]) {
    const before = calls.length;
    assert.equal((await moduleExports.sendOnboardingEmail(invalid)).success, false);
    assert.equal(calls.length, before, "Invalid input must not reach the email provider");
  }
  assert.equal((await moduleExports.sendOnboardingEmail({
    ...valid, name: "Visitor\r\nInjected", description: '<script>alert("example")</script>',
    files: [{ name: "sample.pdf", content: "data:application/pdf;base64,YQ==" }],
  })).success, true);
  const sent = calls.at(-1);
  assert.equal(sent.to[0], "zyforge.dev@gmail.com");
  assert.equal(sent.replyTo, "visitor@example.com");
  assert.ok(!/[\r\n]/.test(sent.subject));
  assert.ok(!sent.html.includes("<script>"));
  assert.ok(sent.html.includes("&lt;script&gt;"));
  assert.equal(sent.attachments[0].content.toString(), "a");
  providerResult = { data: null, error: { message: "private-provider-detail" } };
  const failure = await moduleExports.sendOnboardingEmail(valid);
  assert.equal(failure.success, false);
  assert.ok(!failure.error.includes("private-provider-detail"));
  delete environment.RESEND_API_KEY;
  const before = calls.length;
  assert.equal((await moduleExports.sendOnboardingEmail(valid)).success, false);
  assert.equal(calls.length, before);
  console.log("Inquiry validation checks passed; zero emails sent.");
}

check().catch((error) => { console.error(error); process.exitCode = 1; });
