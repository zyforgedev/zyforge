import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ZyForge - Enterprise Web Development Solutions",
  description:
    "Professional freelance web development service delivering modern, responsive, and high-performance websites with no upfront payment required. Enterprise-grade solutions for startups and businesses.",
  keywords:
    "web development, freelance, responsive design, web applications, WordPress, CMS, website optimization, enterprise solutions",
  authors: [{ name: "ZyForge" }],
  creator: "ZyForge",
  publisher: "ZyForge",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zyforge.com",
    siteName: "ZyForge",
    title: "ZyForge - Enterprise Web Development Solutions",
    description:
      "Professional web development service with no upfront payment required. Modern, responsive, and high-performance websites.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ZyForge - Web Development Excellence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZyForge - Enterprise Web Development Solutions",
    description:
      "Professional web development service with no upfront payment required.",
    images: ["/og-image.png"],
    creator: "@zyforge",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: "#FF6B1A",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <meta name="theme-color" content="#FF6B1A" />
        <meta name="msapplication-TileColor" content="#FF6B1A" />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
