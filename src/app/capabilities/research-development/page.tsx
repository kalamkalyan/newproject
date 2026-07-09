import Navbar from "@/components/Navbar";
import Capabilities from "@/components/Capabilities";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research & Development | Therallen Pharma",
  description:
    "Therallen's R&D division focuses on innovative formulation technologies, process optimization, and product lifecycle management for global pharmaceutical markets.",
};

export default function ResearchDevelopmentPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-[64px]">
        <Capabilities subPage="research-development" />
      </main>
      <Footer />
    </>
  );
}
