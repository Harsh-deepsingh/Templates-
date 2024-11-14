import Card from "@/components/Card";
import data from "../../data";
import Button from "../components/Button";
import Iframe from "@/components/Iframe";

const Projects = () => {
  return (
    <div className="">
      <p className=" text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
        My Projects
      </p>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.projectData.map((project, index) => (
          <Card key={index}>
            <p className="text-xl sm:text-2xl font-semibold mb-2">
              {project.title}
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {project.description}
            </p>
            <div className="flex gap-4">
              {project.liveLink.length > 0 && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button> Link</Button>
                </a>
              )}
              {project.codeLink.length > 0 && (
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button>Code</Button>
                </a>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;
