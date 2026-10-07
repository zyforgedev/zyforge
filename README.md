# Zyforge

Freelance web development from Cebu, Philippines, and practical digital tools.
Project scope, price and timing are agreed separately for each custom inquiry.
The public identity is Zyforge; the supplied anvil-and-flame logo is retained.

## Website

The Next.js site contains services, a catalogue of five published spreadsheet
offers, four original design concepts, the project inquiry form and existing
legal pages. Concept previews are explicitly illustrative and excluded from
indexing. The four expansion products under development are not advertised as
available products.

The catalogue links to the existing Zyforge Gumroad listings. Gumroad handles
checkout and digital delivery; this website does not collect payment details.

## Local checks

```sh
npm run build
node scripts/check-inquiry.cjs
npm run start -- --hostname 127.0.0.1 --port 4184
```

The inquiry check uses a stubbed email provider and sends no email. Native browser
checks cover catalogue destinations, project routes, mobile layout, keyboard
navigation, required fields, attachment selection/removal and the review step.
Netlify production is deployed from `main`. Two approved internal inquiries were
delivered through Resend on 7 October 2026: one without files and one with the
public logo. The downloaded received logo matches the original SHA256. These
tests are excluded from customer leads and sales.

## Deployment

See [deployment and indexing](docs/DEPLOYMENT.md) and [design direction](DESIGN.md).
Do not commit environment files or keys. Netlify Free hosts this business site,
with public production and private deploy previews. The owner entered the
Production-only `RESEND_API_KEY`; the agent did not read it. The verified sender is
configured through `RESEND_FROM_EMAIL`.

Porkbun's nameservers now delegate `zyforge.com` to Netlify. Its DNS zone preserves
Google ownership verification and the Vercel wildcard used by HyUI. The previous
Vercel deployment remains available while custom-domain propagation and TLS are
checked. Search Console domain ownership is verified under Zyforge's Google
account. Sitemap submission and Google indexing of the updated site remain open.
See the deployment document for the current release gates and rollback.
