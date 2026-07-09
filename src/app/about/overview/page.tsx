import Navbar from "@/components/Navbar";
import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Company Overview | Therallen Pharma",
  description:
    "Therallen Pharma Pvt. Ltd. is a research-driven pharmaceutical company established in June 2017, developing innovative generic formulations and advanced drug delivery systems.",
};

export default function CompanyOverviewPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-[64px]">
        <AboutUs subPage="overview" />
      </main>
      <Footer />
    </>
  );
}
