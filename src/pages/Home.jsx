import React from "react";
import Hero from "../components/Hero";
import Projects from "../components/Projects";

const Home = () => {
  return (
    <>
      <div className="container mx-auto">
        <Hero />
        <Projects />
      </div>
    </>
  );
};

export default Home;
