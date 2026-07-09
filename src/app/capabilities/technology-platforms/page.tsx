import Navbar from "@/components/Navbar";
import Capabilities from "@/components/Capabilities";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technology Platforms | Therallen Pharma",
  description:
    "Therallen specializes in advanced formulation technologies including Single Pellet Strategies, MUPS, Extended Release, Enteric Coated, and Patent Non-Infringing products.",
};

export default function TechnologyPlatformsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-[64px]">
        <Capabilities subPage="technology-platforms" />
      </main>
      <Footer />
    </>
  );
}
