import Navbar from "@/components/Navbar";
import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Milestones | Therallen Pharma",
  description:
    "Explore Therallen Pharma's key milestones from our founding in 2017 to today, reflecting our commitment to innovation, quality, and global reach.",
};

export default function MilestonesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-[64px]">
        <AboutUs subPage="milestones" />
      </main>
      <Footer />
    </>
  );
}
