import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { InfraSection } from "@/components/sections/InfraSection";
import {ProductsShowcase } from "@/components/sections/ProductsShowcase";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesGrid />
      <ProductsShowcase />
      {/* <InfraSection /> */}
    </>
  );
}
