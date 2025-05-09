import React from "react";
import { education } from "../../constants";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-6 md:px-16 lg:px-32 font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white tracking-wide">
          EDUCATION
        </h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-gray-300 mt-4 text-lg font-medium max-w-2xl mx-auto">
          My education has been a journey of growth and exploration. Below are
          the highlights of my academic experience:
        </p>
      </div>

      {/* Education Timeline */}
      <div className="relative">
        {/* Vertical line with gradient */}
        <div className="absolute sm:left-1/2 left-4 sm:transform sm:-translate-x-1/2 w-1 bg-gradient-to-b from-purple-500 via-indigo-500 to-purple-500 h-full"></div>

        {/* Education Entries */}
        {education.map((edu, index) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className={`flex flex-col sm:flex-row items-center mb-20 relative ${
              index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
            }`}
          >
            {/* Timeline Circle */}
            <div className="absolute sm:left-1/2 left-4 transform sm:-translate-x-1/2 z-10">
              <div className="w-16 h-16 bg-white border-4 border-purple-500 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-300">
                <img
                  src={edu.img}
                  alt={`Logo of ${edu.school}`}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>

            {/* Content Section */}
            <div
              className={`relative w-full sm:max-w-lg mt-10 sm:mt-0 p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-300 ${
                index % 2 === 0 ? "sm:ml-12" : "sm:mr-12"
              }`}
            >
              <div className="flex items-center space-x-4">
                {/* School Logo */}
                <div className="w-16 h-16 bg-white rounded-lg overflow-hidden shadow-inner">
                  <img
                    src={edu.img}
                    alt={`Logo of ${edu.school}`}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Degree, School Name, and Date */}
                <div>
                  <h3 className="text-2xl font-semibold text-white leading-snug">
                    {edu.degree}
                  </h3>
                  <h4 className="text-md text-gray-300">{edu.school}</h4>
                  <p className="text-sm text-gray-400 mt-1">{edu.date}</p>
                </div>
              </div>

              <p className="mt-4 text-gray-300 font-semibold">
                Grade: <span className="text-purple-400">{edu.grade}</span>
              </p>
              <p className="mt-4 text-gray-400">{edu.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
