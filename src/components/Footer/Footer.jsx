import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-10 px-6 md:px-16 lg:px-32 border-t border-gray-700">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold text-purple-500">Rushikesh Gawande</h2>
        <p className="text-gray-400 text-lg mt-2">Full Stack Developer & Lifelong Learner</p>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-4 mt-6">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Project", id: "work" },
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="hover:text-purple-500 text-sm sm:text-base transition-colors"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Media icons */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {[
            {
              icon: <FaFacebook />,
              link: "https://www.facebook.com/share/16TVs7HKR9/",
            },
            { icon: <FaTwitter />, link: "https://twitter.com/" },
            {
              icon: <FaLinkedin />,
              link: "https://www.linkedin.com/in/rushikesh-gawande-560423bb",
            },
            {
              icon: <FaInstagram />,
              link: "https://www.instagram.com/rushi__gawande",
            },
            { icon: <FaYoutube />, link: "https://youtube.com/" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-purple-500 transition-transform transform hover:scale-110 p-3 rounded-full bg-gray-800 hover:bg-purple-600"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-500 mt-8">
          &copy; {new Date().getFullYear()} Rushikesh Gawande. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
