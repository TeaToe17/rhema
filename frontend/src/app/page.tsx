import EntranceDesign from "@/components/EntranceDesign";
import HeroCarousel from "@/components/HeroCarousel";
import Programmes from "@/components/Programmes";
import TitheAndOffering from "@/components/TitheAndOffering";
import Ministers from "@/components/Ministers";
import Jokes from "@/components/Jokes";
import Declaration from "@/components/Declaration";

export default function Home() {
  return (
    <div>
      <EntranceDesign />
      {/* <HeroCarousel /> */}
      <Programmes />
      <TitheAndOffering />
      <Ministers />
      <Declaration/>
      <Jokes/>
    </div>
  );
}
