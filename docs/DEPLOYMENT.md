# Deployment and indexing

Updated 7 October 2026. PR #1 is merged into `main` as
`bddf4341902183a5f3539954b024994c44031ce8`. Before this verification-note update,
source head `43a86639783ae5850691a5a662ce536c74c626b3` was deployed as Published
Netlify production `6ac626dce0a0980008fb6d96`, with public production
and private previews. The owner completed account/access consent and entered the
Production-only secret; the agent did not create or read the key. Two approved
internal inquiries show both the form's success state and Resend's Delivered event
at the business inbox. The received public-logo attachment matches the original
file's SHA256. These tests are not customer leads.

Porkbun's four Netlify nameservers were saved and confirmed by reopening its
editor. A public Google DNS lookup sees the four assigned nameservers, and the
apex A records match the Netlify subdomain's A records. Netlify issued a Let's
Encrypt certificate for `*.zyforge.com` and `zyforge.com` at 7:21 PM Manila time.
The in-app browser now loads the updated HTTPS homepage, catalogue and inquiry
form on the custom domain; `https://www.zyforge.com/` redirects to the primary
`https://zyforge.com/`. Vercel's main project currently has no attached domains;
the preserved zone lists only HyUI as a connected project. The agent did not
perform a further domain removal in this check. Keep the previous deployment and
zone for rollback. No paid plan, trial or registrar transfer was used.
Search Console domain ownership is verified under Zyforge's Google account using
an additional TXT record. The sitemap was submitted on 7 October and Google reports
Success, last read 7 October, with eight discovered pages. Both homepage and products
live tests report that the URL is available to Google and can be indexed. Indexing
requests for those two URLs are confirmed in the priority crawl queue. These
requests do not confirm indexing, rankings, traffic growth or customer inquiries.

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
deployment and the separate HyUI project. The main site's Vercel domain attachment
is now absent, confirmed after Netlify's custom-domain HTTPS and redirects passed.

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
The browser blocked opening local robots.txt and, separately, the custom-domain
sitemap.xml. Neither blocked target was retried through another tool. Search
Console's normal sitemap submission succeeded and discovered all eight URLs. Its
live homepage and products tests passed; the prior index report also shows crawling
and indexing allowed for the homepage. Direct browser crawl-file retrieval remains
unverified.

For subsequent checks:

1. Open Google Search Console under the Zyforge Google identity. Select an existing
   verified zyforge.com property. Preserve both Google TXT verification records.
2. Confirm the actual site's sitemap can be fetched and submit
   `https://zyforge.com/sitemap.xml` using the Sitemaps report. Record its actual
   status and processing errors, not merely a successful form click. The current
   submission is Success with eight discovered pages; do not submit duplicates.
3. Inspect the canonical home and products URLs. Check crawl/index permissions and
   rendered content; request indexing where available. A request is not proof that
   Google indexed or ranked the page. Both requests are queued. The prior homepage
   index record selected `www` as a different canonical; the current redirect and
   apex canonical are verified, so reassess Google's canonical after recrawling.
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
