import React from "react";
import Link from "next/link";

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <header className="py-4 px-8 border-b border-gray-700">
        <Link href="/">
          <h1 className="text-2xl font-bold gradient-text">ZyForge</h1>
        </Link>
      </header>
      <main className="container mx-auto px-4 py-8">{children}</main>
      <footer className="text-center py-4 mt-8 border-t border-gray-700">
        <div className="text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} ZyForge. All rights reserved.</p>
          <div className="mt-2">
            <Link
              href="/legal/privacy-policy"
              className="hover:text-primary-cyan transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <span className="mx-2">|</span>
            <Link
              href="/legal/terms-and-conditions"
              className="hover:text-primary-cyan transition-colors duration-300"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
