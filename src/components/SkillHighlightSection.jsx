import React from 'react';
import { FiLayers, FiGrid, FiCamera } from 'react-icons/fi';

const skills = [
  {
    title: 'UI/Visual Design',
    completed: '5 Projects Done',
    description:
      'Crafted modern and intuitive UI designs, focusing on user experience and responsive layouts for web and mobile applications.',
    icon: <FiLayers size={24} />,
  },
  {
    title: 'Web & App Development',
    completed: '5 Projects Done',
    description:
      'Built full-stack web applications using MERN stack and modern frontend frameworks, ensuring scalable and high-performance solutions.',
    icon: <FiGrid size={24} />,
  },
  {
    title: 'Motion Design',
    completed: '5 Projects Done',
    description:
      'Created engaging animations and micro-interactions to enhance user experience and interface interactivity.',
    icon: <FiCamera size={24} />,
  },
];

const SkillHighlightSection = () => {
  return (
    <section className="py-10 px-6 max-w-7xl text-white">
      {/* Section Header */}
      <div className="mb-8 text-center md:text-left max-w-3xl mx-auto md:mx-0">
        <p className="text-sm text-sky-400 uppercase tracking-widest mb-2">My Skills</p>
        <h2 className="text-3xl md:text-4xl font-bold">
          Elevating <span className="text-sky-400">Web & App Experiences</span> with Design & Code
        </h2>
      </div>

      {/* Skill Items */}
      <div className="space-y-6 max-w-7xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-start md:items-center gap-4 p-6 rounded-2xl 
                       bg-[#0B1A26] border border-transparent
                       transition-all duration-300 
                       hover:scale-[1.02] hover:shadow-lg 
                       hover:bg-gradient-to-r hover:from-sky-500/20 hover:to-blue-600/20 
                       hover:border-l-4 hover:border-sky-400"
          >
            {/* Icon */}
            <div className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center text-white text-xl
                            bg-sky-500/10 text-sky-400
                            hover:bg-white hover:text-sky-500 transition-colors duration-300">
              {skill.icon}
            </div>

            {/* Title & Completed */}
            <div className="flex-1">
              <h3 className="text-lg md:text-xl font-semibold mb-1">{skill.title}</h3>
              <p className="text-sm text-gray-400">{skill.completed}</p>
            </div>

            {/* Description */}
            <div className="flex-[2] text-sm text-gray-300 mt-2 md:mt-0">
              {skill.description}
            </div>

            {/* Read More */}
            <div className="mt-2 md:mt-0">
              <button className="text-sm text-sky-400 font-medium hover:underline">
                READ MORE
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillHighlightSection;
