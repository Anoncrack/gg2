import { HeroSection } from "@/components/home/HeroSection";
import { ChoosePathSection } from "@/components/home/ChoosePathSection";
import { FeaturesGallerySection } from "@/components/home/FeaturesGallerySection";
import { StartAndAuthSection } from "@/components/home/StartAndAuthSection";
import { FAQSection } from "@/components/home/FAQSection";
import { PatchesSection } from "@/components/home/PatchesSection";

export default function Home() {
  return (
    <main className="flex flex-col w-full min-h-screen bg-[#050505]">

      <HeroSection />

      <ChoosePathSection />

      <FeaturesGallerySection />



      <StartAndAuthSection />

      <FAQSection />

      <PatchesSection />

    </main>
  );
}