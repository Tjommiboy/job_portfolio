import ProjectCard from "./ProjectCards";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2
        className="text-4xl font-bold mb-6 text-center text-[var(--natural-7)]"
        style={{ textShadow: "2px 7px 7px rgba(0, 0, 0, 0.3)" }}
      >
        Project Evolution
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        <ProjectCard
          title="Gimmi Bid N´Sell"
          description="Responsive eCommerce store using the Noroff Online Shop API"
          image="/images/JF_HP.jpeg"
          technologies="React, Tailwind, Vite, CSS, GitHub, REST API, JSON,Netlify,Figma"
          link="javascript_frameworks"
        />

        <ProjectCard
          title="Holidaze"
          description="Holidayz is an accommodation platform."
          image="images/exam3.jpg"
          technologies="React, Tailwind, Vite, CSS, GitHub, REST API, JSON,Netlify,Figma"
          link="Exam_Project"
        />
        <ProjectCard
          title="Job Finder"
          description="This is a react course I took initially to learn the basics of React."
          image="images/reactProject2.jpeg"
          technologies="React, Tailwind, Vite, CSS, GitHub,JSON,Render,Netlify"
          link="ReactCourse"
        />
        <ProjectCard
          title="Endgame"
          description="Scrimba course where i build the Endgame:Hangman"
          image="images/Endgame 5.png"
          technologies="React, Vite, CSS, GitHub,JSON,Render,Netlify"
          link="Endgame"
        />
      </div>
    </div>
  );
};

export default Projects;
