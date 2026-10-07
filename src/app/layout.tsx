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
  title: "Zyforge | Web Development and Digital Tools",
  description:
    "Freelance web development in Cebu, Philippines, plus practical spreadsheet tools for small businesses and 3D printing sellers.",
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
    title: "Zyforge | Web Development and Digital Tools",
    description:
      "Custom websites, original design studies and practical digital tools from Zyforge in Cebu, Philippines.",
    images: [
      {
        url: "/ZyForgeLogo.png",
        width: 1254,
        height: 1254,
        alt: "Zyforge flame and anvil logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zyforge | Web Development and Digital Tools",
    description:
      "Forging digital excellence for startups and businesses in Cebu and throughout the Philippines.",
    images: ["/ZyForgeLogo.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#FF6B1A",
  width: "device-width",
  initialScale: 1,
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
              logo: "https://zyforge.com/ZyForgeLogo.png",
              image: "https://zyforge.com/ZyForgeLogo.png",
              description: "Freelance web development and practical digital tools for small businesses.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Cebu City",
                addressRegion: "Cebu",
                addressCountry: "PH"
              },
              priceRange: "$$",
              contactPoint: {
                "@type": "ContactPoint",
                email: "zyforge.dev@gmail.com",
                contactType: "customer service",
                areaServed: "PH",
                availableLanguage: "English"
              },
              sameAs: [
                "https://www.facebook.com/profile.php?id=61579057059331",
                "https://github.com/zyforgedev"
              ]
            }),
          }}
        />
      </head>
      <body
        className={`${outfit.className} antialiased`}
      >
        <a href="#main-content" className="skip-link">Skip to content</a>
        <div id="main-content" tabIndex={-1} style={{ width: "100%", maxWidth: "100vw" }}>
          {children}
        </div>
      </body>
    </html>
  );
}
