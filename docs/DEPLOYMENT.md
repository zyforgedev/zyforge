# Deployment and indexing

Updated 7 October 2026. PR #1 is merged into `main` as
`bddf4341902183a5f3539954b024994c44031ce8`. Netlify production deploy
`6ac6225e8a98eb3a06ea3f8a` is Published from that commit, with public production
and private previews. The owner completed account/access consent and entered the
Production-only secret; the agent did not create or read the key. Two approved
internal inquiries show both the form's success state and Resend's Delivered event
at the business inbox. The received public-logo attachment matches the original
file's SHA256. These tests are not customer leads.

Porkbun's four Netlify nameservers were saved and confirmed by reopening its
editor. A public Google DNS lookup sees the four assigned nameservers, and the
apex A records match the Netlify subdomain's A records. Netlify's first manual
verification passed; a later check still reported that the custom domain was not
served by Netlify. The browser still displays the old Vercel site. Custom-domain
propagation, TLS and live crawl-file checks remain open; preserve the previous
deployment until these pass. No paid plan, trial or domain transfer was used.
Search Console domain ownership is verified under Zyforge's Google account using
an additional TXT record. Sitemap submission and indexing of the update remain open.

## Host

The signed-in Zyforge Vercel team currently shows Hobby. Vercel's official Hobby
documentation limits it to personal, non-commercial use. Do not push these
business changes while that integration could deploy them to an ineligible plan.
Do not upgrade under the owner's zero-upfront-cost constraint.

Netlify is the selected free host. Its current official guide permits
commercial projects on Free. Pricing lists $0 and 300 credits per month; production
deploys use 15 credits, with requests, bandwidth and compute also consuming credits.
When a project reaches its limit, all projects on that account pause until the next
billing cycle. Use a Free account without paid add-ons or automatic paid top-ups.
This is a capped starting host, not a promise of unlimited hosting.

Official Next.js documentation lists App Router, Server Actions and image
optimization support through the OpenNext adapter. Retain the inquiry server
action. A static-only export would lose that functionality.

Functions have a 6MB buffered payload limit. The form now permits up to eight
attachments and 3MiB combined file bytes, leaving headroom for file Base64, request
encoding and field metadata. The visible copy calls this 3MB. Larger assets can be
discussed through the existing email contact route. The deployed no-file and
704072-byte PNG attachment paths passed the approved internal delivery checks.
The maximum payload was not exercised with a real email.

The owner must complete any future Netlify account terms and GitHub access grant.
For a GitHub connection, select only zyforgedev/zyforge where the UI allows it.
The agent must not accept these binding/access steps on the owner's behalf.

## Release and rollback checks

The initial account, source-publication, Next.js deployment and email-delivery
steps below are complete. Keep them as an operational checklist for future moves.
The current eleven-record DNS zone contains root/www Netlify routing, the existing
Google TXT plus the new Zyforge Search Console TXT, the existing Vercel wildcard,
three CAA permissions and three verified Resend sending records. Root email
forwarding was not enabled. Registrar ownership,
domain lock, privacy and DNSSEC settings were not changed.

Assigned nameservers: `dns1.p07.nsone.net`, `dns2.p07.nsone.net`,
`dns3.p07.nsone.net`, `dns4.p07.nsone.net`. Previous nameservers for rollback:
`ns1.vercel-dns.com`, `ns2.vercel-dns.com`. Preserve the Vercel project, its previous
deployment and the separate HyUI project. Remove only the main site's Vercel
domain attachment after Netlify's custom-domain HTTPS and redirects pass.

HyUI's existing HTTPS page and assets load, but the observed app renders blank
with a JavaScript initialization error. Its source, deployment and DNS target were
not modified in this migration. No pre-migration runtime comparison is available;
do not describe its app as verified healthy.

1. Confirm an eligible Free Netlify account and complete the required owner access
   steps. Check the actual account plan before importing the project.
2. Prevent the existing Hobby integration from deploying the business update before
   publishing the new source branch. Preserve the existing deployment for rollback.
3. Publish the reviewed source through the in-app browser. Keep environment files,
   local screenshots and private keys out of the repository upload.
4. Import the repository in Netlify. Use the detected Next.js configuration and
   `npm run build`; retain Server Actions through the normal adapter. Review build
   logs and the assigned preview URL before any domain change.
5. The owner enters the existing email provider key as server-only `RESEND_API_KEY`
   and a verified sender as `RESEND_FROM_EMAIL`. No key has been read or copied by
   the agent. The legacy key alias remains for compatibility but should not be used
   for new configuration. Verify recipient/sender eligibility in the provider.
6. Verify home, catalogue, all four concept details/demos, 404, legal routes and a
   legitimate inquiry on the actual host. Check no-file and small-file delivery;
   capture the sender's success state and owner's receipt without retaining customer
   data. Local provider-stub checks do not prove this delivery.
7. After the preview passes, review the exact DNS change required for zyforge.com.
   Domain ownership verification, DNS/account permissions or access expansion must
   be handled with action-time confirmation. Preserve mail records and rollback
   values. Do not move unrelated projects or hyui.zyforge.com.
8. Verify the canonical HTTPS domain, redirect behaviour, brand/share metadata,
   sitemap and crawl rules on the live site. Update the existing privacy notice to
   reflect the actual selected hosting and email processing before release if needed;
   its inherited wording is not a new compliance verification.

## Google indexing

The prepared sitemap lists eight canonical URLs: home, products, four concept
details and two existing legal pages. It omits the inquiry and four illustrative
previews, which have noindex/follow metadata. Unknown concept slugs return a 404.
The local robots source allows crawling and references the canonical sitemap.
The browser blocked opening local robots.txt, so live crawl-file retrieval remains
unverified. Do not retry that blocked target through another tool.

After the intended site is live:

1. Open Google Search Console under the Zyforge Google identity. Select an existing
   verified zyforge.com property or have the owner complete verification if absent.
2. Confirm the actual site's sitemap can be fetched and submit
   `https://zyforge.com/sitemap.xml` using the Sitemaps report. Record its actual
   status and processing errors, not merely a successful form click.
3. Inspect the canonical home and products URLs. Check crawl/index permissions and
   rendered content; request indexing where available. A request is not proof that
   Google indexed or ranked the page.
4. Record subsequent Search Console impressions/clicks and qualified inquiries by
   observation window. Do not infer leads from owner checks or link previews.

## Sources checked in the in-app browser

- [Vercel Hobby](https://vercel.com/docs/plans/hobby)
- [Netlify commercial eligibility](https://www.netlify.com/guides/netlify-vs-vercel/)
- [Netlify pricing and credit limits](https://www.netlify.com/pricing/)
- [Next.js on Netlify](https://docs.netlify.com/build/frameworks/framework-setup-guides/nextjs/overview/)
- [Function payload limits](https://docs.netlify.com/build/functions/configuration/)
- [Google sitemap purpose](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview)
- [Google sitemap submission](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
