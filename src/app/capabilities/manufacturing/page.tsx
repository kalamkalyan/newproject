import Navbar from "@/components/Navbar";
import Capabilities from "@/components/Capabilities";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manufacturing | Therallen Pharma",
  description:
    "Therallen operates a modern cGMP-compliant manufacturing facility for high-quality pharmaceutical formulations, adhering to international quality standards.",
};

export default function ManufacturingPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-[64px]">
        <Capabilities subPage="manufacturing" />
      </main>
      <Footer />
    </>
  );
}
