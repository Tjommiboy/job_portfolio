import ProjectCard from "./ProjectCards";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2
        className="text-3xl font-bold mb-6 text-center text-[var(--natural-6)]"
        style={{ textShadow: "2px 7px 7px rgba(0, 0, 0, 0.3)" }}
      >
        Project Evolution
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        <ProjectCard
          title="JavaScript Frameworks"
          description="Responsive eCommerce store using the Noroff Online Shop API"
          image="/images/JF_HP.jpeg"
          technologies="React, Tailwind, Vite, CSS, GitHub, REST API, JSON,Netlify,Figma"
          link="javascript_frameworks"
        />

        <ProjectCard
          title="Exam Project 2"
          description="Final exam,where we display all our skills summed up."
          image="images/exam3.jpg"
          technologies="React, Tailwind, Vite, CSS, GitHub, REST API, JSON,Netlify,Figma"
          link="Exam_Project"
        />
        <ProjectCard
          title="React Course"
          description="This is a react course I took initially to learn the basics of React."
          image="images/reactProject2.jpeg"
          technologies="React, Tailwind, Vite, CSS, GitHub,JSON,Render,Netlify"
          link="ReactCourse"
        />
      </div>
    </div>
  );
};

export default Projects;
