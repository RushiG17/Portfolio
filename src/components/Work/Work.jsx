import React, { useState } from "react";
import { projects } from "../../constants";
import { motion, AnimatePresence } from "framer-motion";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id="work"
      className="py-24 px-[10vw] md:px-[7vw] lg:px-[15vw] font-sans relative"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold text-white tracking-tight">
          PROJECTS
        </h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4 rounded"></div>
        <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => handleOpenModal(project)}
            className="border border-gray-700 bg-gray-900 rounded-2xl shadow-xl cursor-pointer overflow-hidden hover:shadow-purple-500/50 transition duration-300 ease-in-out"
          >
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-fit rounded-t-2xl transform hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-white mb-3">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4 line-clamp-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-[#251f38] text-xs font-medium text-purple-400 rounded-full px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-gray-900 rounded-2xl shadow-2xl w-full max-w-3xl overflow-hidden relative max-h-[90vh] overflow-y-auto"
            >
              <div className="flex justify-end p-4">
                <button
                  onClick={handleCloseModal}
                  aria-label="Close project details"
                  className="text-white text-3xl font-bold hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 rounded"
                >
                  &times;
                </button>
              </div>
              <div className="flex flex-col items-center px-6 pb-6">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full max-h-80 object-contain rounded-xl shadow-lg mb-6"
                />
                <h3 className="text-3xl font-bold text-white mb-4 text-center">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-400 mb-6 text-center">
                  {selectedProject.description}
                </p>
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-[#251f38] text-xs font-medium text-purple-400 rounded-full px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 w-full">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-800 hover:bg-purple-700 text-gray-300 text-center py-3 rounded-xl text-lg font-semibold transition"
                  >
                    View Code
                  </a>
                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-purple-600 hover:bg-purple-700 text-white text-center py-3 rounded-xl text-lg font-semibold transition"
                  >
                    View Live
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Work;
