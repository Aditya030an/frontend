import React from "react";
import resume from "../assets/Resume.pdf";

const Resume = () => {
  return (
    <div className="bg-primary flex items-center justify-center min-h-screen px-4">
      <div className="container mx-auto px-6 py-8 w-full max-w-4xl bg-white rounded-lg shadow-lg">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 bg-blue-800"></div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">Resume</h1>
          </div>
          <a
            href={resume}
            download="Resume"
            className="px-4 py-2 text-lg font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition w-full md:w-auto text-center"
          >
            DOWNLOAD CV
          </a>
        </div>

        {/* Content Section */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Experience */}
          <div className="p-4 border rounded-lg shadow">
            <h1 className="text-xl md:text-2xl font-semibold mb-2">Experience</h1>
            <div>
              <h2 className="text-lg font-medium">
                Duration: <span className="font-normal">01/09/2024 - 01/10/2024</span>
              </h2>
              <p className="text-lg font-medium">
                Company: <span className="font-normal">Suvidha Foundation</span>
              </p>
              <p className="text-lg font-medium">
                Role: <span className="font-normal">Frontend Developer</span>
              </p>
            </div>
          </div>

          {/* Education */}
          <div className="p-4 border rounded-lg shadow">
            <h1 className="text-xl md:text-2xl font-semibold mb-2">Education</h1>
            <div>
              <h2 className="text-lg font-medium">
                Duration: <span className="font-normal">2021-2025</span>
              </h2>
              <h2 className="text-lg font-medium">
                College: <span className="font-normal">Jabalpur Engineering College</span>
              </h2>
              <h2 className="text-lg font-medium">
                Branch: <span className="font-normal">Electronics & Communication Engineering</span>
              </h2>
            </div>
          </div>

          {/* Technical Stack */}
          <div className="md:col-span-2 p-4 border rounded-lg shadow">
            <h1 className="text-xl md:text-2xl font-semibold mb-2">Technical Stack</h1>
            <div>
              <ol className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 text-lg font-medium list-disc list-outside pl-6">
                <li>CPP</li>
                <li>Data Structures & Algorithms</li>
                <li>OOPs</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React.js</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MongoDB</li>
                <li>Tailwind CSS</li>
                <li>Version Control</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
