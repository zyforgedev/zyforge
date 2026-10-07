import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import { facebookUrl, products, productUrl, shopUrl } from "../data/products";

export const metadata: Metadata = {
  title: "3D Printing Spreadsheets for Excel and Google Sheets | Zyforge",
  description: "Explore Zyforge's free after-fee pricing calculator, FDM print pricing calculator, job profit log and filament inventory tracker. Digital downloads on Gumroad.",
  alternates: { canonical: "/products" },
  openGraph: {
    title: "Practical spreadsheet tools from Zyforge",
    description: "Estimate print prices, review completed jobs and reconcile filament stock. Start with the free Lite calculator.",
    url: "https://zyforge.com/products",
    siteName: "Zyforge",
    type: "website",
    images: [{ url: "/ZyForgeLogo.png", width: 1254, height: 1254, alt: "Zyforge flame and anvil logo" }],
  },
};

export default function ProductsPage() {
  const [freeTool, ...paidTools] = products;
  return (
    <>
      <SiteHeader currentPage="products" />
      <main className="discovery-width catalog-main">
        <h1 className="font-syne">Tools for 3D printing sellers.</h1>
        <p className="catalog-lead">Estimate a job before accepting it. Record the result after delivery. Reconcile the material used. Choose the worksheet that matches your next task.</p>
        <section className="catalog-free" aria-labelledby="free-title">
          <div><p className="catalog-purpose">Free starting point</p><h2 id="free-title">{freeTool.name}</h2><p>{freeTool.description}</p><p className="catalog-note">{freeTool.note}</p></div>
          <a href={productUrl(freeTool.slug)} className="btn-primary">{freeTool.action}</a>
        </section>
        <section aria-labelledby="paid-title">
          <h2 id="paid-title" className="catalog-section-title">Choose an individual tool or the bundle</h2>
          <div className="catalog-tools">
            {paidTools.map(product => (
              <article key={product.slug} className="catalog-row">
                <div><p className="catalog-purpose">{product.task}</p><h3>{product.name}</h3></div>
                <div><p>{product.description}</p><p className="catalog-note">{product.note}</p><a href={productUrl(product.slug)} className="discovery-link">{product.action}</a></div>
              </article>
            ))}
          </div>
        </section>
        <section className="catalog-delivery" aria-labelledby="delivery-title">
          <h2 id="delivery-title">Before you download</h2>
          <dl>
            <div><dt>What is included?</dt><dd>Editable XLSX files, fictional example files, guides and Google Sheets copy instructions. The full details, licence and current price are on each Gumroad product page.</dd></div>
            <div><dt>Where does checkout happen?</dt><dd>Each product link opens Gumroad, which handles checkout and file delivery. Free Lite has a minimum price of zero; an optional payment adds no extra features.</dd></div>
            <div><dt>Are these a connected system?</dt><dd>No. These are separate desktop worksheets. They do not sync orders or stock, calculate tax or guarantee a marketplace payout. Keep an untouched backup and check assumptions against your own work.</dd></div>
          </dl>
        </section>
        <footer className="discovery-footer"><Link href="/">Zyforge home</Link><a href={shopUrl}>All Gumroad products</a><a href={facebookUrl}>Zyforge on Facebook</a><Link href="/legal/privacy-policy">Privacy</Link><Link href="/legal/terms-and-conditions">Terms</Link></footer>
      </main>
    </>
  );
}
