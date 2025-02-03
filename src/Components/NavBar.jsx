import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const NavBar = ({ title }) => {
  const [active, setActive] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setActive(location.pathname);
  }, [location]);

  return (
    <div className="w-full px-6 md:px-16 py-5 flex flex-col md:flex-row items-center justify-between bg-white shadow-md">
      {/* Logo & Title Section */}
      <div className="flex gap-2 items-center justify-center mb-4 md:mb-0">
        <div className="h-5 w-5 bg-blue-800"></div>
        <h1
          className="font-bold text-2xl md:text-3xl text-black opacity-85 cursor-pointer"
          onClick={() => {
            setActive("/");
            navigate("/");
          }}
        >
          Aditya Agrawal
        </h1>
        <p className="text-gray-500 hidden md:block">/</p>
        {/* Animated Title */}
        <h2 className="text-lg font-semibold text-gray-600 transition-all duration-500 ease-in-out opacity-100 hidden md:block">
          {title}
        </h2>
      </div>

      {/* Navigation Links */}
      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-7">
        <NavLink to="/" onClick={() => setActive("/")}> 
          <h1 className={`transition-colors duration-300 ${active === "/" ? "text-blue-600" : "text-black"}`}>
            ABOUT
          </h1>
        </NavLink>
        <NavLink to="/resume" onClick={() => setActive("/resume")}> 
          <h1 className={`transition-colors duration-300 ${active === "/resume" ? "text-blue-600" : "text-black"}`}>
            RESUME
          </h1>
        </NavLink>
        <NavLink to="/project" onClick={() => setActive("/project")}> 
          <h1 className={`transition-colors duration-300 ${active === "/project" ? "text-blue-600" : "text-black"}`}>
            PROJECT
          </h1>
        </NavLink>
        <NavLink to="/contact" onClick={() => setActive("/contact")}> 
          <h1 className={`transition-colors duration-300 ${active === "/contact" ? "text-blue-600" : "text-black"}`}>
            CONTACT
          </h1>
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
