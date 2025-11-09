import { Header } from "./Header";
import { Navigation } from "./Navigation";
import { ContactUs } from "./ContactUs";
import { Footer } from "./Footer";

interface ContactUsPageProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export function ContactUsPage({ onNavigate, currentPage }: ContactUsPageProps) {
  return (
    <div className="min-h-screen">
      <Header />
      <Navigation onNavigate={onNavigate} currentPage={currentPage} />
      <ContactUs />
      <Footer />
    </div>
  );
}
