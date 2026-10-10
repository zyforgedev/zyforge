import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import { expansionProducts, facebookUrl, products, productUrl, shopUrl } from "../data/products";

export const metadata: Metadata = {
  title: "Practical Digital Tools and Templates | Zyforge",
  description: "Explore Zyforge's print spreadsheets, freelance Notion system, developer application bundle, property marketing kit and Next.js portfolio. Digital products on Gumroad.",
  alternates: { canonical: "/products" },
  openGraph: {
    title: "Practical digital tools from Zyforge",
    description: "Choose a tool for print jobs, client delivery, developer applications, property marketing or your portfolio.",
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
        <h1 className="font-syne">Practical tools and templates.</h1>
        <p className="catalog-lead">Estimate print jobs, organise client work, prepare an application or build your next marketing post and portfolio. Choose the product that matches your task.</p>
        <section className="catalog-free" aria-labelledby="free-title">
          <div><p className="catalog-purpose">Free starting point</p><h2 id="free-title">{freeTool.name}</h2><p>{freeTool.description}</p><p className="catalog-note">{freeTool.note}</p></div>
          <a href={productUrl(freeTool.slug)} className="btn-primary">{freeTool.action}</a>
        </section>
        <section aria-labelledby="paid-title">
          <h2 id="paid-title" className="catalog-section-title">Tools for 3D printing sellers</h2>
          <div className="catalog-tools">
            {paidTools.map(product => (
              <article key={product.slug} className="catalog-row">
                <div><p className="catalog-purpose">{product.task}</p><h3>{product.name}</h3></div>
                <div><p>{product.description}</p><p className="catalog-note">{product.note}</p><a href={productUrl(product.slug)} className="discovery-link">{product.action}</a></div>
              </article>
            ))}
          </div>
        </section>
        <section className="catalog-delivery" aria-labelledby="templates-title">
          <h2 id="templates-title">Templates for work and applications</h2>
          {expansionProducts.map(product => (
            <article key={product.slug} className="catalog-row">
              <div><p className="catalog-purpose">{product.task}</p><h3>{product.name}</h3></div>
              <div><p>{product.description}</p><p className="catalog-note">{product.note}</p><a href={productUrl(product.slug)} className="discovery-link">{product.action}</a></div>
            </article>
          ))}
        </section>
        <section className="catalog-delivery" aria-labelledby="delivery-title">
          <h2 id="delivery-title">Before you download</h2>
          <dl>
            <div><dt>What is included?</dt><dd>Each product page states its file formats, account requirements, examples, setup guide and licence. Check those details and the current price before purchasing.</dd></div>
            <div><dt>Where does checkout happen?</dt><dd>Each product link opens Gumroad, which handles checkout and file delivery. Free Lite has a minimum price of zero; an optional payment adds no extra features.</dd></div>
            <div><dt>Do these products work together?</dt><dd>Each serves a separate task. The Notion system connects its own client and project records; it does not automatically sync with other Zyforge tools. Keep an untouched backup and check your own inputs and completed files.</dd></div>
          </dl>
        </section>
        <footer className="discovery-footer"><Link href="/">Zyforge home</Link><a href={shopUrl}>All Gumroad products</a><a href={facebookUrl}>Zyforge on Facebook</a><Link href="/legal/privacy-policy">Privacy</Link><Link href="/legal/terms-and-conditions">Terms</Link></footer>
      </main>
    </>
  );
}
