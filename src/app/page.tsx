import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProgramSection from "./components/ProgramSection";
import SpeakersSection from "./components/SpeakersSection";
import ValuesSection from "./components/ValuesSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";




export default function Home() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProgramSection />
      <SpeakersSection />
      <ValuesSection />
      <CTASection />
      <Footer />
    </main>
  );
}
