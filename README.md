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
Real provider delivery and production hosting still require verification.

## Deployment

See [deployment and indexing](docs/DEPLOYMENT.md) and [design direction](DESIGN.md).
Do not commit environment files or keys. The existing Vercel account was observed
on Hobby, whose commercial-use restriction requires a different eligible host
under the current zero-upfront-cost decision. The prepared changes are local;
they have not been pushed, deployed or submitted to Search Console.
