import React, { useState } from 'react';
import { assets } from '../assets/global';
import { FiArrowUpRight, FiExternalLink, FiGithub } from 'react-icons/fi';

const portfolioItems = [
  {
    img: assets.project1,
    title: 'MyPaperlessOffice',
    category: 'Web Design & Development',
    skills: ['React', 'Tailwind CSS', 'Node.js'],
    description:
      'A paperless document management system designed to simplify office workflows and improve productivity.',
  },
  {
    img: assets.project2,
    title: 'InnovateNow',
    category: 'Full-Stack MERN',
    skills: ['MongoDB', 'Express', 'React', 'Node.js'],
    description:
      'A MERN stack application built for startups to collaborate, innovate, and manage projects efficiently.',
  },
  {
    img: assets.project3,
    title: 'Noteit',
    category: 'React.js / UI/UX',
    skills: ['React', 'Tailwind', 'UX Design'],
    description:
      'A modern note-taking application focused on clean UI, usability, and fast performance.',
  },
  {
    img: assets.project4,
    title: 'Spotify Clone',
    category: 'React.js Admin Panel',
    skills: ['React', 'API Integration', 'Responsive Design'],
    description:
      'A responsive Spotify admin panel clone designed for desktop with smooth UI interactions.',
  },
];

const PortfolioSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="py-10 px-6 max-w-7xl text-white mx-auto">
      
      {/* Heading */}
      <div className="text-center mb-10 max-w-3xl mx-auto">
        <p className="text-sm text-sky-400 uppercase tracking-widest">
          My Work
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mt-3">
          Transforming Ideas into{' '}
          <span className="text-sky-400">Web Solutions</span>
        </h2>
        <p className="text-gray-400 mt-4 text-sm md:text-base leading-relaxed">
          A curated collection of web development projects showcasing modern UI/UX design,
          full-stack development with MERN, and scalable applications.
        </p>
      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {portfolioItems.map((item, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedProject(item)}
            className="cursor-pointer bg-gradient-to-br from-[#0B1A26] to-[#07131D] rounded-2xl p-4 group border border-transparent hover:border-sky-500/50 hover:shadow-lg hover:shadow-sky-500/30 transition-all duration-300"
          >
            {/* Image */}
            <div className="rounded-xl overflow-hidden mb-4 relative">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Content */}
            <div className="flex justify-between items-start">
              <div>
                <p className="text-lg font-semibold mb-1">{item.title}</p>
                <p className="text-sm text-gray-400">{item.category}</p>
              </div>
              <div className="p-3 bg-sky-500/20 rounded-full text-sky-400 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300">
                <FiArrowUpRight size={18} />
              </div>
            </div>
          </div>
        ))}
      </div>

       {/* ===== PREMIUM MODAL ===== */}
      {selectedProject && (
        <div
          onClick={() => setSelectedProject(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm md:px-4 px-6 py-10"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-3xl w-full bg-gradient-to-br from-[#0B1A26]/90 to-[#07131D]/90 border border-white/10 rounded-3xl overflow-hidden shadow-2xl animate-[scaleIn_0.3s_ease]"
          >
            {/* Image */}
            <div className="relative">
              <img
                src={selectedProject.img}
                alt={selectedProject.title}
                className="w-full h-72 object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 text-white hover:bg-sky-500 transition"
              >
                ✕
              </button>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-1">
                {selectedProject.title}
              </h3>
              <p className="text-sky-400 text-sm mb-4">
                {selectedProject.category}
              </p>

              <p className="text-gray-300 leading-relaxed mb-6">
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

              {/* Buttons */}
              <div className="flex flex-wrap gap-4">
                <a
                  href={selectedProject.live}
                  target="_blank"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-sky-500 text-white hover:bg-sky-600 transition"
                >
                  Live Demo <FiExternalLink />
                </a>
                
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PortfolioSection;
