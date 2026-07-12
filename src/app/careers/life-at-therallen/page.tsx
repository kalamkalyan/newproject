import Navbar from "@/components/Navbar";
import LifeAtTherallen from "@/components/Careers/LifeAtTherallen";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Life at Therallen | Therallen Pharma",
  description:
    "Explore our collaborative culture, growth pathways, work-life balance, and employee perks at Therallen Pharma. Learn how we foster formulation innovation together.",
};

export default function LifeAtTherallenPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-[64px]">
        <LifeAtTherallen />
      </main>
      <Footer />
    </>
  );
}
