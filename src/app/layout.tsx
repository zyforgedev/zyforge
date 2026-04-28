import type { Metadata, Viewport } from "next";
import { Inter, Syne, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zyforge.com"),
  title: "ZyForge | Premium Web Development Cebu & Philippines",
  description:
    "ZyForge is a Cebu-based digital agency specializing in high-performance websites for startups and small businesses in the Philippines. Premium web design with zero upfront cost.",
  keywords:
    "web development cebu, web design philippines, startup websites cebu, affordable web developer philippines, ecommerce development cebu, zyforge, cebu tech agency",
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
    title: "ZyForge | Premium Web Development Cebu & Philippines",
    description:
      "Cebu's leading agency for startup and small business web development. High-performance, luxury-tech websites with accessible pricing.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ZyForge - Premium Web Development Cebu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZyForge | Web Development Cebu",
    description:
      "Forging digital excellence for startups and businesses in Cebu and throughout the Philippines.",
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
    <html lang="en" className={`${inter.variable} ${syne.variable} ${outfit.variable}`}>
      <head>
        <meta name="msapplication-TileColor" content="#FF6B1A" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "ZyForge",
              alternateName: "ZyForge Web Development",
              url: "https://zyforge.com",
              logo: "https://zyforge.com/og-image.png",
              image: "https://zyforge.com/og-image.png",
              description: "Premium web development and design agency based in Cebu, Philippines, specializing in startups and small business solutions.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Cebu City",
                addressRegion: "Cebu",
                addressCountry: "PH"
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "10.3157",
                longitude: "123.8854"
              },
              priceRange: "$$",
              openingHours: "Mo-Fr 09:00-18:00",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+63-917-000-0000",
                contactType: "customer service",
                areaServed: "PH",
                availableLanguage: "English"
              },
              sameAs: [
                "https://twitter.com/zyforge",
                "https://facebook.com/zyforge",
                "https://instagram.com/zyforge"
              ]
            }),
          }}
        />
      </head>
      <body
        className={`${outfit.className} antialiased`}
        style={{ overflowX: "hidden" }}
      >
        <div style={{ width: "100%", maxWidth: "100vw", overflowX: "hidden" }}>
          {children}
        </div>
      </body>
    </html>
  );
}
