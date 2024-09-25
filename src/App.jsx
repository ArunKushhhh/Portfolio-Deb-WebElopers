import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const teamMembers = [
  {
    githubUsername: 'ArunKushhhh',
    githubLink: 'https://github.com/ArunKushhhh',
    linkedinName: 'Arun Kushwaha',
    linkedinLink: 'https://www.linkedin.com/in/arun-kumar-kushwaha-b26085286/',
  },
  {
    githubUsername: 'NishantSinghhhhh',
    githubLink: 'https://github.com/NishantSinghhhhh',
    linkedinName: 'Nishant Singh',
    linkedinLink: 'https://www.linkedin.com/in/nishant-singh-8a5a00282/',
  },
  {
    githubUsername: 'Sriijannn',
    githubLink: 'https://github.com/Sriijannn',
    linkedinName: 'Srijan Tripathi',
    linkedinLink: 'https://www.linkedin.com/in/srijantripathii/',
  },
  {
    githubUsername: 'ujjuishere',
    githubLink: 'https://github.com/ujjuishere',
    linkedinName: 'Ujjwal Gupta',
    linkedinLink: 'https://www.linkedin.com/in/ujjwal--gupta/',
  },
];

const email = '3ans.connect@gmail.com';

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
        <Footer teamMembers={teamMembers} email={email} />
      </div>
    </div>
  );
};

export default App;
