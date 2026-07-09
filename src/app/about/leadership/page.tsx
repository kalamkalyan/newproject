import Navbar from "@/components/Navbar";
import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leadership & Team | Therallen Pharma",
  description:
    "Meet Therallen Pharma's experienced leadership team with expertise in formulation development, regulatory affairs, manufacturing, quality assurance, and global business development.",
};

export default function LeadershipPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-[64px]">
        <AboutUs subPage="leadership" />
      </main>
      <Footer />
    </>
  );
}
