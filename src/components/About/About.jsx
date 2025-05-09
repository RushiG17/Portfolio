import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/Images/RushiProfile.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="py-12 px-[5vw] md:px-[7vw] lg:px-[15vw] font-sans mt-16 md:mt-24 lg:mt-32 bg-skills-gradient"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Rushikesh Gawande
          </h2>
          {/* Skills heading with typing effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 leading-tight text-gray-200">
            <span className="text-white">I am a </span>
            <span className="text-[#8245ec]">
              <Typewriter
                words={[
                  "Web Developer",
                  "Full Stack Developer",
                  "MERN Stack Developer",
                  "UI/UX Designer",
                  "Coder",
                ]}
                loop={0} // 0 = infinite loop
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h3>

          {/* About me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-300 mb-10 mt-8 leading-relaxed max-w-2xl mx-auto">
            I am a passionate web developer with a strong foundation in both
            front-end and back-end technologies. I love creating dynamic and
            responsive web applications that provide an excellent user
            experience. My expertise lies in the MERN stack, and I am always
            eager to learn new technologies and improve my skills.
          </p>

          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1CRDGKXuK3DOwxbi99Ba-ZhenGWEYCtXh/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-4 px-10 rounded-full mt-5 text-lg font-bold transition-all 
            duration-300 transform hover:scale-105 hover:bg-[#a855f7] focus:ring-4 focus:ring-[#8245ec] shadow-lg hover:shadow-xl"
            style={{
              background: "linear-gradient(90deg, #8245ec , #a855f7)",
              boxShadow: "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
            }}
          >
            DOWNLOAD CV
          </a>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end mt-10 md:mt-0">
          <Tilt
            className="w-48 h-48 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full transition-transform hover:scale-105"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Rushikesh Gawande"
              className="w-full h-full rounded-full object-fill drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
