import Link from "next/link";
import { productUrl } from "../data/products";

export default function Products() {
  return (
    <section id="products" className="product-intro">
      <div className="discovery-width product-intro-layout">
        <div>
          <h2 className="font-syne">Practical tools for the work behind a sale.</h2>
          <p>Price a print job, review completed-order profit and keep track of filament. Editable spreadsheets for Excel and Google Sheets.</p>
          <Link href="/products" className="discovery-link">Browse the spreadsheet tools</Link>
        </div>
        <div className="free-tool-summary">
          <h3>Try the free pricing calculator</h3>
          <p>Have a total batch cost already? Start with quantity, selling fees and your target margin. No payment is required.</p>
          <a href={productUrl("free-lite-pricing")} className="btn-primary">Get Free Lite on Gumroad</a>
        </div>
      </div>
    </section>
  );
}
