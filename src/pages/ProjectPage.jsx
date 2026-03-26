import { useParams } from "react-router-dom";
import { projectData } from "../projectData/projectData";
import { useState } from "react";

const ProjectPage = () => {
  const { projectId } = useParams();
  const [showReflections, setShowReflections] = useState(false);

  function toggleReflections() {
    setShowReflections((prev) => !prev);
  }
  const project = projectData.find((p) => p.id === projectId);

  if (!project) {
    return <div className="text-center p-4">Project not found.</div>;
  }

  return (
    <div className="container mx-auto p-4 bg-[rgb(var(--color-bg)/0.6)] rounded text-[var(--generic-2)]">
      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2 gap-2 justify-between">
        <h1 className="text-3xl font-bold">{project.title}</h1>
        <div className="flex gap-2 mb-2">
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-lime-500/60 to-lime-600/60 text-white font-semibold rounded-lg px-4 py-2 shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:bg-gradient-to-r hover:from-lime-500/90 hover:to-lime-600/90"
          >
            View Website
          </a>

          {/* Repo button: more serious / professional */}
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-lime-500/60 to-lime-600/60 text-white font-semibold rounded-lg px-4 py-2 shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:bg-gradient-to-r hover:from-lime-500/90 hover:to-lime-600/90"
          >
            View Repo
          </a>
        </div>
      </div>
      <div className="flex flex-col xl:flex-row gap-4">
        <div className="flex-1">
          <p className="mb-2">{project.description}</p>

          <ul className="flex flex-wrap gap-2">
            {project.features.map((feature, index) => (
              <li key={index}>
                <span className="bg-yellow-200/20 backdrop-blur px-3 py-1 rounded-full text-sm font-medium">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid bg-amber-100/20 grid-cols-2 gap-4 xl:w-1/2 self-start shadow-2xl  p-2 rounded-lg ">
          {project.images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`${project.title} Screenshot ${index + 1}`}
              className="w-full h-auto aspect-[4/3] object-fit rounded shadow-2xl bg-amber-50"
            />
          ))}
        </div>
      </div>

      <div className="flex justify-end flex-wrap gap-2 mt-3">
        {/* Reflections button: neutral */}
        <button
          onClick={toggleReflections}
          className="bg-gradient-to-r from-gray-300/70 to-gray-400/70 text-gray-800 font-semibold rounded-lg px-4 py-2 shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 hover:bg-gradient-to-r hover:from-gray-300/90 hover:to-gray-400/90 hover:text-gray-900 "
        >
          {showReflections ? "Hide Reflections" : "Project Reflections"}
        </button>
      </div>

      {showReflections && (
        <div className="mt-4">
          {project.reflections.split("\n\n").map((para, idx) => (
            <p key={idx} className="mb-4">
              {para}
            </p>
          ))}
        </div>
      )}

      <h2 className="mt-6 text-xl font-semibold">Built with:</h2>
      <section className="flex mt-2">
        <ul className="flex bg-yellow-200/20 p-2 rounded-lg flex-wrap gap-4 p-0 list-none">
          {project.techStack.map((tech) => (
            <li
              key={tech.name}
              className="flex items-center gap-2 bg-gray-600 px-2 py-1 rounded"
            >
              {tech.logo && (
                <img
                  src={tech.logo}
                  alt={`${tech.name} logo`}
                  width="24"
                  height="24"
                />
              )}
              <span>{tech.name}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default ProjectPage;
