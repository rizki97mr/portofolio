import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import BG_GRADIENT from "./assets/rylan-hill.jpg";
import Education from "./components/Education";

const App = () => {
  return (
    <div className="bg-background">
      <div
        style={{
          backgroundImage: `url(${BG_GRADIENT})`,
          backgroundPosition: `50% 50%`,
        }}
      >
        <Navbar />
        <Hero />
        <Skills />
        <Education />
        <About />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default App;
