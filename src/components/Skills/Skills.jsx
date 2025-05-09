// src/components/Skills/Skills.jsx
import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => (
  <section
    id="skills"
    className="py-24 px-[5vw] lg:px-[15vw] bg-skills-gradient font-sans clip-path-custom"
  >
    {/* Section Header */}
    <div className="text-center mb-12">
      <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
        Skills
      </h2>
      <div className="w-20 h-1 bg-[#8245ec] mx-auto mt-3 rounded-full"></div>
      <p className="text-gray-400 mt-5 text-lg sm:text-xl max-w-2xl mx-auto">
        A collection of my technical skills honed through projects and
        real-world experience.
      </p>
    </div>

    {/* Skill Categories */}
    <div className="flex flex-wrap gap-6  lg:gap-5 py-8 justify-center ">
      {SkillsInfo.map((category) => (
        <div
          key={category.title}
          className="bg-gray-900/70 backdrop-blur-md border border-white/10 shadow-[0_4px_20px_rgba(130,69,236,0.3)] rounded-2xl p-6 sm:p-8 w-full sm:w-[48%] lg:w-[30%] transition-transform hover:scale-[1.02]"
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-300 mb-6 text-center">
            {category.title}
          </h3>

          <Tilt
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            scale={1.02}
            transitionSpeed={800}
            gyroscope
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center justify-center bg-gray-800/50 border border-gray-700 
                  hover:border-[#8245ec] rounded-xl p-3 transition-all duration-300"
                >
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="w-8 h-8 mb-2"
                  />
                  <span className="text-sm text-gray-200 text-center">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </Tilt>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
