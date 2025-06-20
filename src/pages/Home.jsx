import React from "react";
import Hero from "../components/Hero";
import Projects from "../components/Projects";

const Home = () => {
  return (
    <>
      <div className="container mx-auto">
        <h1 className="flex text-amber-50 justify-center font-bold ">
          Hi im Anand Chetty, Frontend Developer
        </h1>
        <Hero />
      </div>
    </>
  );
};

export default Home;
