import { useState } from "react";
import { HomePage } from "./components/HomePage";
import { ContactUsPage } from "./components/ContactUsPage";
import { AboutUsPage } from "./components/AboutUsPage";
import { Boxer150Page } from "./components/Boxer150Page";

export default function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    // Scroll to top when navigating
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (currentPage === 'Contact Us') {
    return <ContactUsPage onNavigate={handleNavigate} currentPage={currentPage} />;
  }

  if (currentPage === 'About Us') {
    return <AboutUsPage onNavigate={handleNavigate} currentPage={currentPage} />;
  }

  if (currentPage === 'Request Quote') {
    return <Boxer150Page onNavigate={handleNavigate} currentPage={currentPage} />;
  }

  return <HomePage onNavigate={handleNavigate} currentPage={currentPage} />;
}