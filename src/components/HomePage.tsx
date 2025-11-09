import { Header } from "./Header";
import { Navigation } from "./Navigation";
import { HeroSection } from "./HeroSection";
import { CraftedBikeSection } from "./CraftedBikeSection";
import { EconomicalBikeSection } from "./EconomicalBikeSection";
import { BannerSection } from "./BannerSection";
import { Footer } from "./Footer";

interface HomePageProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export function HomePage({ onNavigate, currentPage }: HomePageProps) {
  return (
    <div className="min-h-screen">
      <Header />
      <Navigation onNavigate={onNavigate} currentPage={currentPage} />
      <HeroSection onNavigate={onNavigate} />
      <CraftedBikeSection />
      <EconomicalBikeSection />
      <BannerSection />
      <Footer />
    </div>
  );
}
