import { Header } from "./Header";
import { Navigation } from "./Navigation";
import { AboutUsBanner } from "./AboutUsBanner";
import { AboutUs } from "./AboutUs";
import { Footer } from "./Footer";

interface AboutUsPageProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export function AboutUsPage({ onNavigate, currentPage }: AboutUsPageProps) {
  return (
    <div className="min-h-screen">
      <Header />
      <Navigation onNavigate={onNavigate} currentPage={currentPage} />
      <AboutUsBanner />
      <AboutUs />
      <Footer />
    </div>
  );
}
