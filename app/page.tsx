import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import ProductSection from "@/components/product-section";
import BuiltOnSection from "@/components/built-on-section";
import DataPlatformsSection from "@/components/data-platforms-section";
import SecuritySection from "@/components/security-section";
import CTASection from "@/components/cta-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
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
  );
}
