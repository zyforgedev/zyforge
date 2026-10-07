"use client";

import Image from "next/image";
import Link from "next/link";

const navigation = [
  { label: "Services", href: "/#services", section: "services" },
  { label: "Products", href: "/products", section: "products" },
  { label: "About", href: "/#about", section: "about" },
  { label: "Projects", href: "/#portfolio", section: "portfolio" },
  { label: "Process", href: "/#process", section: "process" },
  { label: "Contact", href: "/#contact", section: "contact" },
];

export default function SiteHeader({ activeSection, currentPage }: { activeSection?: string; currentPage?: "products" }) {
  return (
    <header className="discovery-header">
      <Link href="/#hero" className="discovery-brand" aria-label="Zyforge home">
        <Image src="/ZyForgeLogo.png" width={44} height={44} alt="" priority />Zyforge
      </Link>
      <nav aria-label="Main navigation">
        {navigation.map(item => (
          <Link key={item.section} href={item.href} aria-current={currentPage === item.section ? "page" : item.section !== "products" && activeSection === item.section ? "location" : undefined}>{item.label}</Link>
        ))}
      </nav>
    </header>
  );
}
