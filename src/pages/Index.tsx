import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AnnouncementTicker from "@/components/AnnouncementTicker";
import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeaturesSection";
import NewsSection from "@/components/NewsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <AnnouncementTicker />
      <AboutSection />
      <FeaturesSection />
      <NewsSection />
      <Footer />
    </div>
  );
};

export default Index;
