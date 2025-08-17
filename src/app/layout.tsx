import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zyforge.com"),
  title: "ZyForge - Web Development for Startups and Small Businesses",
  description:
    "Affordable and professional web development services in the Philippines for startups, small businesses, and individuals. Get a modern, responsive, and high-performance website without breaking the bank.",
  keywords:
    "web development philippines, freelance, responsive design, web applications, small business websites, startup websites, affordable web design",
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
    locale: "en_PH",
    url: "https://zyforge.com",
    siteName: "ZyForge",
    title: "ZyForge - Web Development for Startups and Small Businesses",
    description:
      "Affordable and professional web development services for startups, small businesses, and individuals.",
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
    title: "ZyForge - Web Development for Startups and Small Businesses",
    description:
      "Affordable and professional web development services for startups, small businesses, and individuals.",
    images: ["/og-image.png"],
    creator: "@zyforge",
  },
};

export const viewport: Viewport = {
  themeColor: "#FF6B1A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <meta name="msapplication-TileColor" content="#FF6B1A" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "ZyForge",
              url: "https://zyforge.com",
              logo: "https://zyforge.com/og-image.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+63-917-555-1234",
                contactType: "customer service",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${inter.className} antialiased`}
        style={{ overflowX: "hidden" }}
      >
        <div style={{ width: "100%", maxWidth: "100vw", overflowX: "hidden" }}>
          {children}
        </div>
      </body>
    </html>
  );
}
