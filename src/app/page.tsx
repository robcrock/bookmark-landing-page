"use client";

import { useState } from "react";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Download from "@/components/Download";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Header from "@/components/Header";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="min-h-screen">
      <section className="container mx-auto flex min-h-screen flex-col px-8 md:h-[768px] md:px-0">
        <Header
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />
        <Hero />
      </section>
      <Features />
      <Download />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
