import { InventoryHero } from "@/components/inventory/InventoryHero";
import { InventoryGridSection } from "@/components/inventory/InventoryGridSection";
import { VehiclesSection } from "@/components/inventory/VehiclesSection";
import { NewItemsSection } from "@/components/inventory/NewItemsSection";
import { BonusEventSection } from "@/components/inventory/BonusEventSection";
import { StartAndAuthSection } from "@/components/home/StartAndAuthSection";

export default function InventoryPage() {
  return (
    <main className="min-h-screen bg-[#050505]">

      { }
      <InventoryHero />

      { }
      <InventoryGridSection /> { }



      <VehiclesSection />

      <NewItemsSection /> { }

      <BonusEventSection />

      <StartAndAuthSection />
    </main>
  );
}

