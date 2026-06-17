import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Innovation from "@/components/Innovation";
import Partnerships from "@/components/Partnerships";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <SmoothScroll>
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Innovation />
        <Partnerships />
      </main>
      <Footer />
    </SmoothScroll>
  );
}

