import { useState } from "react";
import Webdev from "./Webdev";
import UIUX from "./UIUX";
import FlutterProjects from "./FlutterProjects";
import GraphicDesign from "./GraphicDesign"; 
import BlockchainProjects from "./BlockchainProjects";

const Projects = () => {
  const [activeButton, setActiveButton] = useState("Web Development");

  const buttons = [
    "Web Development",
    "UI/UX",
    "Flutter",
    "Graphic Design",
    "Blockchain",
  ];

  const handleButtonClick = (label) => {
    setActiveButton(label);
  };

  const renderProjects = () => {
    switch (activeButton) {
      case "Web Development":
        return <Webdev />;
      case "UI/UX":
        return <UIUX />;
      case "Flutter":
        return <FlutterProjects />;
      case "Graphic Design":
        return <GraphicDesign />;
      case "Blockchain":
        return <BlockchainProjects />;
      default:
        return <Webdev />;
    }
  };

  return (
    <div id="projects" className="w-[100%] flex flex-col items-center justify-center gap-8">
      <div className="flex flex-col gap-2 justify-center items-center">
        <h3 className="about-us text-5xl">Projects</h3>
        <h4 className="bg-gradient-to-r from-[#4FC3F7] to-white bg-clip-text text-transparent font-semibold">
          Some of Our Works
        </h4>
      </div>

      {/* Buttons */}
      <div className="w-[90%] flex flex-wrap gap-4 sm:justify-center">
        {buttons.map((label) => (
          <button
            key={label}
            onClick={() => handleButtonClick(label)}
            className={`text-white text-xs px-6 py-3 border border-[#484E53] rounded-full ${
              activeButton === label ? "bg-[#484E53]" : "bg-transparent"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="w-[90%] flex flex-wrap gap-4 justify-center">
        {renderProjects()}
      </div>

      <div className="flex justify-center items-center px-8 py-2 border border-[#4FC3F7] rounded-full">
        <button className="flex justify-center items-center">View All</button>
      </div>
    </div>
  );
};

export default Projects;
