import Project from "../assets/project.png";
import Navigate from "../assets/navigate.svg";

const GraphicDesign = ({ projects }) => {
  const defaultProjects = [
    {
      name: "Project 1",
      link: "https://example.com/project1",
      technology: "React, Node.js",
      image: Project,
    },
    {
      name: "Project 2",
      link: "https://example.com/project2",
      technology: "Angular, Firebase",
      image: Project,
    },
  ];

  const projectsToDisplay = projects || defaultProjects;

  return (
    <div className="w-[90%] flex flex-col gap-12">
      {projectsToDisplay.map((project, index) => (
        <a key={index} href={project.link} className="flex flex-col gap-6">
          <img src={project.image} alt={`Image of ${project.name}`} />
          <div>
            <h3 className="font-semibold">{project.name}</h3>
            <div className="flex justify-between items-center">
              <p className="text-xs text-[#A9A9A9]">{project.technology}</p>
              <img
                src={Navigate}
                alt="Navigate"
                className="bg-blue-500 px-2 py-2 rounded-full"
              />
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default GraphicDesign;
