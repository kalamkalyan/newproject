import Navbar from "@/components/Navbar";
import CurrentOpenings from "@/components/Careers/CurrentOpenings";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Current Openings | Therallen Pharma",
  description:
    "Explore job opportunities at Therallen Pharma. Apply for career-defining positions in pharmaceutical formulation development, quality control, operations, and regulatory affairs.",
};

export default function CurrentOpeningsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-[64px]">
        <CurrentOpenings />
      </main>
      <Footer />
    </>
  );
}
