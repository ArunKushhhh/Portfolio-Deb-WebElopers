import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div>
      <div className="w-full fixed top-0 left-0">
        <Navbar />
      </div>
      <div className="flex flex-col items-center justify-center w-full gap-[120px]">
        <Hero />
        <About />
        <Services />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default App;
