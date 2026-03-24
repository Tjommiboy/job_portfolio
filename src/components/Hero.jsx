import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="container flex flex-col lg:flex-row justify-center items-stretch p-2 rounded gap-3">
      {/* TEXT COLUMN */}
      <div className="lg:w-1/2 flex flex-col">
        {/* H1 */}
        <h1 className="mb-2 text-5xl md:text-6xl lg:text-7xl text-white [text-shadow:0px_3px_8px_rgba(255,255,255,0.2)]">
          Hi, I'm{" "}
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
            Anand Chetty,
          </span>
          Frontend Developer
        </h1>

        {/* IMAGE (only visible on small screens here) */}
        <div className="block lg:hidden bg-[rgb(var(--color-bg)/0.4)] p-2 rounded my-2">
          <img
            className="rounded object-cover w-full h-full"
            src="/images/Portrett.jpg"
            alt="picture of Anand Chetty"
          />
        </div>

        {/* PARAGRAPH */}
        <p className="bg-[rgb(var(--color-bg)/0.6)] p-4 text-xl text-[var(--generic-2)] rounded w-full">
          I’m a recent Higher Professional Degree graduate in Front-end
          Development from Noroff Vocational School. I mainly work with React,
          HTML, CSS, and JavaScript, and I enjoy building clean, responsive
          interfaces that feel good to use.
          <br />
          <br />
          I’m highly motivated to work, learn, and improve my skills through
          real projects, and I enjoy collaborating with others to turn ideas
          into working products. Feel free to check out my work.
        </p>
      </div>

      {/* IMAGE (desktop only) */}
      <div className="hidden lg:flex lg:w-1/3 bg-[rgb(var(--color-bg)/0.4)] p-2 rounded items-center justify-center">
        <img
          className="rounded object-cover w-full h-full"
          src="/images/Portrett.jpg"
          alt="picture of Anand Chetty"
        />
      </div>
    </div>
  );
};

export default Hero;
