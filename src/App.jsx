import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "../src/pages/Home";
import About from "./pages/AboutMe";
import ContactMe from "./pages/ContactMe";
import ProjectPage from "./pages/ProjectPage";
import Projects from "./components/Projects";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="Contact" element={<ContactMe />} />
          <Route path="Projects" element={<Projects />} />
          <Route path="/projects/:projectId" element={<ProjectPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
