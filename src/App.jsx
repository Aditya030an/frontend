import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Project from "./pages/Project";
import Contect from "./pages/Contect"; // Fixed spelling
import Footer from "./Components/Footer";

const App = () => {
  const title = [
    "Web Developer",
    "React.js",
    "MERN",
    "Full Stack",
    "JavaScript",
    "Node.js",
    "Express.js",
    "MongoDB",
  ];

  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => (prevCount + 1) % title.length);
    }, 3000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="">
      <div className="sticky top-0 left-0 w-full bg-white">
        <NavBar title={title[count]} />
      </div>
      <Routes>
        <Route path="/" element={<About title={title[count]} />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contect />} />
      </Routes>
      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default App;
