import React from "react";
import profileImg from "../assets/profile_img.png";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { SiGeeksforgeeks } from "react-icons/si";
import { TbBrandLeetcode } from "react-icons/tb";
import { useNavigate } from "react-router";

const About = ({ title }) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-4 min-h-screen p-6 lg:p-0">
      {/* Left Section */}
      <div className="w-full lg:w-5/12 bg-primary min-h-[50vh] lg:min-h-screen flex flex-col items-center lg:items-end justify-center">
        <div className="bg-secondary flex flex-col items-center justify-between p-6 shadow-2xl shadow-gray-600 w-11/12 lg:w-7/12">
          <div className="mt-5 w-full flex flex-col items-center justify-center">
            <img
              src={profileImg}
              alt=""
              className="object-cover rounded-full h-40 w-40 lg:h-48 lg:w-48 shadow-lg shadow-gray-500"
            />
            <p className="text-2xl lg:text-3xl font-bold text-gray-800 mt-8 lg:mt-12">
              Aditya Agrawal
            </p>
            <div className="bg-blue-600 w-20 lg:w-28 h-[0.8px] mt-4 lg:mt-6"></div>
            <p className="text-xl lg:text-3xl font-thin text-gray-700 mt-4 lg:mt-6 transition-all ease-in-out duration-500 delay-150">
              {title}
            </p>
          </div>
          {/* Social Links */}
          <div className="bg-white flex gap-4 items-center justify-center py-3 w-full">
            <a href="https://www.linkedin.com/in/aditya-agrawal-65b81331b/" target="_blank">
              <FaLinkedinIn size={24} lg:size={30} />
            </a>
            <a href="https://github.com/Aditya030an" target="_blank">
              <FaGithub size={24} lg:size={30} />
            </a>
            <a href="https://www.geeksforgeeks.org/user/aditya_agrawalzzz/?ref=header_profile" target="_blank">
              <SiGeeksforgeeks size={24} lg:size={30} />
            </a>
            <a href="https://leetcode.com/u/Aditya0803/" target="_blank">
              <TbBrandLeetcode size={24} lg:size={30} />
            </a>
            <a href="https://www.instagram.com/_aditya_agrawal08/" target="_blank">
              <FaInstagram size={24} lg:size={30} />
            </a>
          </div>
        </div>
      </div>
      {/* Right Section */}
      <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start gap-4">
        <div className="w-11/12 lg:w-7/12 flex flex-col items-center lg:items-start gap-4 text-center lg:text-left">
          <h1 className="text-6xl lg:text-9xl font-bold text-gray-800">Hello</h1>
          <p className="text-xl lg:text-3xl font-semibold text-gray-600">
            Here's who I am & what I do
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              className="px-7 lg:px-9 py-2 text-base font-semibold text-white bg-blue-600 border-2 border-solid hover:text-black hover:bg-white hover:border-blue-600 transition-all ease-in-out duration-700 rounded-3xl cursor-pointer"
              onClick={() => {
                navigate("/resume");
              }}
            >
              Resume
            </button>
            <button
              className="px-6 lg:px-7 py-2 text-base font-semibold text-black bg-white rounded-3xl border-2 border-black hover:text-white hover:bg-blue-600 hover:border-blue-500 transition-all ease-in-out duration-700 cursor-pointer"
              onClick={() => {
                navigate("/project");
              }}
            >
              Projects
            </button>
          </div>
          <div className="text-lg font-thin text-gray-500 leading-loose">
            Hi, I'm Aditya, a Full Stack Developer skilled in the MERN stack.
          </div>
          <div className="text-lg font-thin text-gray-500 leading-relaxed">
            I build user-friendly web apps, dynamic UIs, and REST APIs, using
            Redux and Tailwind CSS for enhanced functionality and design. 🚀
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;