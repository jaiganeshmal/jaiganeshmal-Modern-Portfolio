import React, { useState } from "react";
import { assets } from "../assets/global";
import { FiArrowUpRight, FiExternalLink } from "react-icons/fi";

/* ===================== DATA ===================== */
const portfolioItems = [
  {
    title: "MyPaperlessOffice",
    category: "Web Design & Development",
    images: [
      assets.project1,
      assets.project2,
      assets.project3,
    ],
    skills: ["React", "Tailwind CSS", "Node.js"],
    description:
      "A paperless document management system designed to simplify office workflows and improve productivity.",
    live: "#",
  },
  {
    title: "InnovateNow",
    category: "Full-Stack MERN",
    images: [
      assets.project2,
      assets.project1,
      assets.project3,
    ],
    skills: ["MongoDB", "Express", "React", "Node.js"],
    description:
      "A MERN stack application built for startups to collaborate, innovate, and manage projects efficiently.",
    live: "#",
  },
  {
    title: "Noteit",
    category: "React.js / UI UX",
    images: [
      assets.project3,
      assets.project2,
      assets.project3,
    ],
    skills: ["React", "Tailwind", "UX Design"],
    description:
      "A modern note-taking application focused on clean UI, usability, and fast performance.",
    live: "#",
  },
  {
    title: "Spotify Clone",
    category: "React.js Admin Panel",
    images: [
      assets.project4,
      assets.project1,
      assets.project3,
    ],
    skills: ["React", "API Integration", "Responsive Design"],
    description:
      "A responsive Spotify admin panel clone designed for desktop with smooth UI interactions.",
    live: "#",
  },
];

/* ===================== COMPONENT ===================== */
const PortfolioSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeImage, setActiveImage] = useState(null);

  return (
    <section className="bg-[#050b12] py-20 px-6">
      <div className="max-w-7xl mx-auto text-white">

        {/* Heading */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-sm text-sky-400 uppercase tracking-widest">
            My Work
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            Transforming Ideas into{" "}
            <span className="text-sky-400">Web Solutions</span>
          </h2>
          <p className="text-gray-400 mt-4 text-sm md:text-base leading-relaxed">
            A curated collection of web development projects showcasing modern
            UI/UX, full-stack MERN development, and scalable applications.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {portfolioItems.map((item, idx) => (
            <div
              key={idx}
              onClick={() => {
                setSelectedProject(item);
                setActiveImage(item.images[0]); // default image
              }}
              className="cursor-pointer bg-gradient-to-br from-[#0B1A26] to-[#07131D]
              rounded-2xl p-4 group border border-transparent
              hover:border-sky-500/50 hover:shadow-lg hover:shadow-sky-500/20 transition-all"
            >
              {/* Image */}
              <div className="rounded-xl overflow-hidden mb-4 relative">
                <img
                  src={item.images[0]}
                  alt={item.title}
                  className="w-full h-60 object-fill group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
              </div>

              {/* Content */}
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-lg font-semibold">{item.title}</p>
                  <p className="text-sm text-gray-400">{item.category}</p>
                </div>
                <div className="p-3 bg-sky-500/20 rounded-full text-sky-400
                group-hover:bg-sky-500 group-hover:text-white transition">
                  <FiArrowUpRight size={18} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ===================== MODAL ===================== */}
        {selectedProject && (
          <div
            onClick={() => {
              setSelectedProject(null);
              setActiveImage(null);
            }}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center px-6 py-10"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="max-w-3xl w-full max-h-[95vh] bg-gradient-to-br from-[#0B1A26]/90 to-[#07131D]/90
              border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
            >
              {/* Main Image */}
              <div className="relative">
                <img
                  src={activeImage}
                  alt="Project Preview"
                  className="w-full h-72 object-fill transition"
                />

                <button
                  onClick={() => {
                    setSelectedProject(null);
                    setActiveImage(null);
                  }}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full
                  bg-black/60 text-white hover:bg-sky-500 transition"
                >
                  ✕
                </button>
              </div>

              {/* Thumbnails */}
              <div className="flex gap-3 px-6 pt-2">
                {selectedProject.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    onClick={() => setActiveImage(img)}
                    className={`w-20 h-14 object-fill rounded-lg cursor-pointer border-2 transition
                      ${
                        activeImage === img
                          ? "border-sky-500"
                          : "border-transparent opacity-70 hover:opacity-100"
                      }`}
                    alt="thumb"
                  />
                ))}
              </div>

              {/* Content */}
              <div className="px-6 py-4 ">
                <h3 className="text-2xl md:text-3xl font-bold mb-1">
                  {selectedProject.title}
                </h3>
                <p className="text-sky-400 text-sm mb-2">
                  {selectedProject.category}
                </p>

                <p className="text-gray-300 leading-relaxed mb-3">
                  {selectedProject.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-full bg-sky-500/20 text-sky-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Button */}
                <a
                  href={selectedProject.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full
                  bg-sky-500 text-white hover:bg-sky-600 transition"
                >
                  Live Demo <FiExternalLink />
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default PortfolioSection;
