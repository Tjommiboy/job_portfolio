import React, { useState, useEffect, useRef } from "react";
import NavItem from "./NavItem";

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

      <aside
        ref={sidebarRef}
        className={`bg-[var(--natural-6)] text-[var(--natural-4)] p-4 transition-all duration-300 z-40
        ${isSidebarOpen ? "block" : "hidden"} md:block
        sticky top-0 md:h-screen md:w-[14rem] w-[90%] max-w-[230px] space-y-4`}
      >
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

        <h2 className="text-xl text-[var(--natural-4)] font-bold mb-4">
          My Portfolio
        </h2>
        <nav className="flex flex-col space-y-2">
          <NavItem to="/" label="Home" onClick={closeSidebar} />
          <NavItem to="/About" label="About Me" onClick={closeSidebar} />
          <NavItem to="/Contact" label="Contact" onClick={closeSidebar} />
        </nav>
      </aside>
    </>
  );
};

export default NavBar;
