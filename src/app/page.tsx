import HomePageClient from "./components/HomePageClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "ZyForge - Custom Web Development for Startups and Businesses in the Philippines",
  description:
    "ZyForge specializes in building high-performance, responsive websites for startups and small businesses in the Philippines. Let us forge your digital presence.",
};

export default function Home() {
  return <HomePageClient />;
}
