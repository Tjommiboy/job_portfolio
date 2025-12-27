import React, { useState, useEffect, useRef } from "react";
import NavItem from "./NavItem";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Calender from "./Calender";

const NavBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarOpen(false);
      }
    };

    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      {/* Toggle Button (Mobile Only) */}
      {!isSidebarOpen && (
        <div className="md:hidden p-1 z-50 sticky top-0">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="bg-gray-700 text-[var(--natural-4)] px-3 py-1 rounded"
          >
            ☰
          </button>
        </div>
      )}

      {/* Overlay (Mobile Only) */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        ref={sidebarRef}
        className={`text-[var(--natural-4)] p-4 transition-all duration-300 z-40
          ${isSidebarOpen ? "block" : "hidden"} md:block
          fixed md:static top-0 left-0 h-full md:h-screen md:w-[14rem] w-[90%] max-w-[230px]
          bg-gray-900 md:bg-gray-900/60 space-y-4
        `}
      >
        {/* Close Button (Mobile Only) */}
        {isSidebarOpen && (
          <div className="md:hidden flex">
            <button
              onClick={closeSidebar}
              className="bg-gray-700 text-[var(--natural-4)] px-3 py-1 rounded"
            >
              ✕
            </button>
          </div>
        )}

        <nav className="flex flex-col justify-between h-full">
          <div className="space-y-2">
            <h2 className="text-xl text-[var(--natural-4)] font-bold mb-4">
              My Portfolio
            </h2>

            <NavItem to="/" label="Home" onClick={closeSidebar} />
            <NavItem to="/Projects" label="Projects" onClick={closeSidebar} />

            <NavItem to="/Contact" label="Contact" onClick={closeSidebar} />
          </div>
          <div className="">
            <a
              href="https://www.linkedin.com/in/anand-chetty-0666a8106/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeSidebar}
              className="w-[90%] mb-1 flex items-center gap-2  px-2 py-2 bg-sky-400/10 rounded text-amber-50/50 hover:text-blue-700 hover:bg-amber-50/80"
            >
              <FaLinkedin className="text-xl" />
              LinkedIn
            </a>
            <a
              href="https://github.com/Tjommiboy"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeSidebar}
              className="w-[90%] flex items-center gap-2  px-2 py-2 bg-sky-400/10 rounded text-amber-50/50 hover:text-zinc-800
              hover:bg-amber-50/80"
            >
              <FaGithub className="text-xl" />
              Github
            </a>
            <Calender />
          </div>
        </nav>
      </aside>
    </>
  );
};

export default NavBar;
