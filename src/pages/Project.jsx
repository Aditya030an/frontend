import React from "react";
import { Link } from "react-router-dom"; 
import img1 from "../assets/project1img.png";
import img2 from "../assets/project2img.png";
import img3 from "../assets/project3img.png";
import img4 from "../assets/project4img.png";

const projects = [
  {
    id: 1,
    title: "E-Commerce Store User Side",
    date: "12/2024 - 01/2025",
    desc: "Developed a responsive e-commerce platform using React.js, TailwindCSS, and Vercel. Integrated Stripe for secure payments. User end supports product browsing, seamless shopping, and checkout.",
    link: "https://e-commers-frontend.vercel.app/",
    image: img1,
  },
  {
    id: 2,
    title: "E-Commerce Store Admin Side",
    date: "01/2025 - 02/2025",
    desc: "Admin panel for managing inventory and orders. Built with React.js, TailwindCSS, and Vercel. Secure login for admins to track sales and product listings.",
    link: "https://e-commers-admin-three.vercel.app/",
    image: img2,
  },
  {
    id: 3,
    title: "AI Trip Planner",
    date: "12/2024-12/2024",
    desc: "AI-powered trip planner that generates personalized itineraries based on user preferences. Built using React, Node.js, MongoDB, and Tailwind CSS.",
    link: "https://github.com/Aditya030an/Trip-planner-ai",
    image: img3,
  },
  {
    id: 4,
    title: "Social Service",
    date: "09/2024 - 10/2024",
    desc: "Contributed to web development services and fundraising initiatives. Worked on enhancing website functionality using front-end and back-end technologies.",
    link: "https://main--suvidha-foundation-website.netlify.app/",
    image: img4,
  },
];

const Project = () => {
  return (
    <div className=" py-10 px-4 md:px-10 lg:px-20 bg-primary">
      <div className="text-center mb-10 flex items-center justify-center gap-5">
        <div className=" bg-blue-800 h-5 w-5 "></div>
        <h1 className="text-3xl md:text-4xl font-bold ">
          Projects
        </h1>
      </div>

      <div className="grid grid-cols-1 gap-10">
        {projects.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-lg p-6 flex flex-col md:flex-row items-center gap-6 hover:shadow-xl transition-all duration-300"
          >
            <div className="w-full md:w-2/3">
              <h2 className="text-xl font-bold text-blue-600">{item.id}. {item.title}</h2>
              <p className="text-sm text-gray-500">{item.date}</p>
              <p className="text-gray-700 mt-2">{item.desc}</p>
              <Link
                to={item.link}
                target="_blank"
                className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition"
              >
                View Project
              </Link>
            </div>
            <div className="w-full md:w-1/3">
              <img src={item.image} alt={item.title} className="rounded-md w-full object-cover" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
