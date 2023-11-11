import "./App.scss";
import AboutSection from "./components/about/AboutSection";
import HeroSection from "./components/hero/HeroSection";
import LinkSection from "./components/link/LinkSection";
import Navbar from "./components/navbar/Navbar";
import PortefolioSection from "./components/portefolio/PortefolioSection";
import SkillSection from "./components/skill/SkillSection";
import { useState, useEffect } from "react";

function App() {
  const [scrollTop, setScrollTop] = useState<number>(0);

  useEffect(() => {
    const handleScroll = (event) => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Navbar scrollTop={scrollTop} />
      <HeroSection />
      <AboutSection />
      <SkillSection />
      <PortefolioSection />
      <LinkSection />
    </div>
  );
}

export default App;
