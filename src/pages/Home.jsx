import React from "react";
import Hero from "../components/Hero";

import ChatBot from "../components/ChatBot";

const Home = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="container mx-auto px-4 ">
          <h1
            className="text-3xl font-bold mb-6 text-center text-[var(--natural-7)]"
            style={{ textShadow: "2px 7px 7px rgba(0, 0, 0, 0.3)" }}
          >
            Hi, I'm Anand Chetty, Frontend Developer
          </h1>

          <Hero />
        </div>
      </div>
    </>
  );
};

export default Home;
