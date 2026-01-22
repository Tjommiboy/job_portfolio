import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <>
      <div className="container flex flex-col md:flex-col lg:flex-row justify-center items-stretch p-2 rounded gap-3">
        <div className="lg:w-1/3 md:w-1/2 bg-amber-100/80 p-2 rounded flex items-center justify-center">
          <img
            className="rounded object-cover w-full h-full"
            src="/images/Portrett.jpg"
            alt="picture of Anand Chetty"
          />
        </div>
        <div className="lg:w-1/2 flex">
          <p className="bg-amber-100/80 p-4 text-xl text-[var(--generic-8)] rounded w-full">
            Hi 😀 <br />
            I’m a recent Higher Professional Degree graduate in Front-end
            Development from Noroff Vocational School. I mainly work with HTML,
            CSS, JavaScript, and React, and I enjoy building clean, responsive
            interfaces that feel good to use.
            <br />
            <br />
            I’m highly motivated to work, learn, and improve my skills through
            real projects, and I enjoy collaborating with others to turn ideas
            into working products. Feel free to check out my work. .
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
