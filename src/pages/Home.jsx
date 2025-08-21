import React from "react";
import Hero from "../components/Hero";
import Projects from "../components/Projects";

const Home = () => {
  return (
    <>
      <div className="container mx-auto">
        <h1 className="flex text-3xl font-bold mb-6 justify-center text-[var(--natural-7)]">
          Hi, Im Anand Chetty, Frontend Developer
        </h1>
        <Hero />
      </div>
    </>
  );
};

export default Home;
