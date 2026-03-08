import React from "react";
import Hero from "../components/Hero";

import ChatBot from "../components/ChatBot";

const Home = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="container mx-auto px-4 ">
          <h1 className="text-3xl font-bold mb-6 text-center text-[var(--generic-2)] [text-shadow:3px_3px_8px_rgba(255,255,255,0.3)] ">
            Hi, I'm Anand Chetty, Frontend Developer
          </h1>

          <Hero />
        </div>
      </div>
    </>
  );
};

export default Home;
