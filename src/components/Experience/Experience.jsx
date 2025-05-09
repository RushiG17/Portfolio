import React from "react";
import { experiences } from "../../constants";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 px-6 md:px-16 lg:px-32 font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-gray-400 mt-4 text-lg font-medium max-w-2xl mx-auto">
          A collection of my work experience and the roles I have taken in
          various organizations
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="relative">
        {/* Vertical line with gradient */}
        <div className="absolute sm:left-1/2 left-4 sm:transform sm:-translate-x-1/2 w-1 bg-gradient-to-b from-purple-500 via-indigo-500 to-purple-500 h-full"></div>

        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`flex flex-col sm:flex-row items-center mb-20 relative ${
              index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
            }`}
          >
            {/* Timeline Circle */}
            <div className="absolute sm:left-1/2 left-4 transform sm:-translate-x-1/2 z-10">
              <div className="w-16 h-16 bg-white border-4 border-purple-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <img
                  src={experience.img}
                  alt={experience.company}
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
            </div>

            {/* Content Section */}
            <div
              className={`relative w-full sm:max-w-lg mt-10 sm:mt-0 p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-[0_0_30px_rgba(130,69,236,0.4)] hover:shadow-[0_0_40px_rgba(130,69,236,0.6)] transition-all duration-300 ${
                index % 2 === 0 ? "sm:ml-12" : "sm:mr-12"
              }`}
            >
              <div className="flex items-center space-x-4">
                {/* Company Logo */}
                <div className="w-16 h-16 bg-white rounded-lg overflow-hidden shadow-inner">
                  <img
                    src={experience.img}
                    alt={experience.company}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-2xl font-semibold text-white">
                    {experience.role}
                  </h3>
                  <h4 className="text-md text-gray-300">
                    {experience.company}
                  </h4>
                  <p className="text-sm text-gray-500 mt-1">
                    {experience.date}
                  </p>
                </div>
              </div>

              <p className="mt-4 text-gray-400">{experience.desc}</p>
              <div className="mt-4">
                <h5 className="font-medium text-white">Skills:</h5>
                <ul className="flex flex-wrap mt-2">
                  {experience.skills.map((skill, index) => (
                    <li
                      key={index}
                      className="bg-purple-600/70 text-gray-100 px-3 py-1 text-xs sm:text-sm rounded-full mr-2 mb-2 border border-purple-400 hover:bg-purple-700 transition"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
