import Navbar from "@/components/Navbar";
import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vision & Mission | Therallen Pharma",
  description:
    "Therallen Pharma's vision to become a transnational pharmaceutical company and mission to deliver innovative, quality healthcare solutions worldwide.",
};

export default function VisionMissionPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-[64px]">
        <AboutUs subPage="vision-mission" />
      </main>
      <Footer />
    </>
  );
}
