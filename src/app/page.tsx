import HomePageClient from "./components/HomePageClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Zyforge | Web Development in Cebu and Practical Digital Tools",
  description:
    "Explore custom web development, original design concepts and Excel and Google Sheets tools for small businesses and 3D printing sellers.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return <HomePageClient />;
}
