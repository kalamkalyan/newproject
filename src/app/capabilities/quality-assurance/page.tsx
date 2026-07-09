import Navbar from "@/components/Navbar";
import Capabilities from "@/components/Capabilities";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quality Assurance | Therallen Pharma",
  description:
    "Therallen's Quality Assurance team ensures compliance with international regulatory guidelines through rigorous QC systems, documentation, and validation processes.",
};

export default function QualityAssurancePage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-[64px]">
        <Capabilities subPage="quality-assurance" />
      </main>
      <Footer />
    </>
  );
}
