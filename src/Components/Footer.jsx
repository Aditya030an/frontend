import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-7 px-6 sm:px-12 py-5 sm:py-7 text-sm sm:text-base font-normal text-gray-500 opacity-95">
      <a href="tel:9602772307" className="underline hover:text-gray-700 transition">
        9602772307
      </a>
      <a href="mailto:adityaagrawalq@gmail.com" className="underline hover:text-gray-700 transition">
        adityaagrawalq@gmail.com
      </a>
    </div>
  );
};

export default Footer;
