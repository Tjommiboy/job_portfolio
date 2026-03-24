import { useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

export default function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex flex-col md:flex-row min-h-screen relative">
      <NavBar />

      <main className="flex-grow p-6">
        <Outlet />
      </main>
    </div>
  );
}
