"use client";

import { useState, useEffect } from "react";
import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import ProductSection from "@/components/product-section";
import BuiltOnSection from "@/components/built-on-section";
import DataPlatformsSection from "@/components/data-platforms-section";
import SecuritySection from "@/components/security-section";
import CTASection from "@/components/cta-section";
import Footer from "@/components/footer";
import { Loader3D } from "@/components/ui/loader-3d";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate page loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Loader3D 
        isLoading={isLoading} 
        onComplete={() => setIsLoading(false)}
        duration={3000}
      />
      <main
        className="min-h-screen"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <Navigation />
        <Hero />
        <ProductSection />
        <BuiltOnSection />
        <DataPlatformsSection />
        <SecuritySection />
        <CTASection />
        <Footer />
      </main>
    </>
  );
}
