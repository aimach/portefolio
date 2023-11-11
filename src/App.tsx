import "./App.scss";
import AboutSection from "./components/about/AboutSection";
import HeroSection from "./components/hero/HeroSection";
import Navbar from "./components/navbar/Navbar";
import SkillSection from "./components/skill/SkillSection";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillSection />
    </div>
  );
}

export default App;
