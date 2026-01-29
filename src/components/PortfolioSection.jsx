import React from 'react';
import { assets } from '../assets/global';
import { FiArrowUpRight } from 'react-icons/fi';

const portfolioItems = [
  {
    img: assets.project1,
    title: 'Real Estate Website',
    category: 'Web Design & Development',
    link: 'https://jk-estate.netlify.app/',
  },
  {
    img: assets.project2,
    title: 'De Solutions Company Website',
    category: 'Full-Stack MERN',
    link: 'https://desolutions.netlify.app/',
  },
  {
    img: assets.project3,
    title: 'Event Management Website',
    category: 'React.js / UI/UX',
    link: 'https://event-managmen.netlify.app/',
  },
  {
    img: assets.project4,
    title: 'Techzone Manageent System',
    category: 'React.js Admin Panel responsive for desktop ',
    link: 'https://techzone-adminpanel.netlify.app/',
  },
];

const PortfolioSection = () => {
  return (
    <section className="py-10 px-6 max-w-7xl text-white">
      {/* Heading Section */}
      <div className="text-center mb-8 max-w-3xl mx-auto">
        <p className="text-sm text-sky-400 uppercase tracking-widest">My Work</p>
        <h2 className="text-3xl md:text-4xl font-bold mt-3">
          Transforming Ideas into <span className="text-sky-400">Web Solutions</span>
        </h2>
        <p className="text-gray-400 mt-4 text-sm md:text-base leading-relaxed">
          A curated collection of web development projects showcasing modern UI/UX design,
          full-stack development with MERN, and scalable, high-performance applications.
        </p>
      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {portfolioItems.map((item, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-br from-[#0B1A26] to-[#07131D] rounded-2xl p-4 hover:shadow-lg hover:shadow-sky-500/30 transition-all duration-300 group border border-transparent hover:border-sky-500/50"
          >
            {/* Image */}
            <div className="rounded-xl overflow-hidden mb-4 relative">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-60 md:h-64 object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
              />
              {/* subtle overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
            </div>

            {/* Content */}
            <div className="flex justify-between items-start">
              <div>
                <p className="text-lg font-semibold mb-1">{item.title}</p>
                <p className="text-sm text-gray-400">{item.category}</p>
              </div>
              <a href={item.link} target='_blank' className="p-3 bg-sky-500/20 rounded-full text-sky-400 hover:bg-sky-500 hover:text-white transition-all duration-300">
                <FiArrowUpRight size={18} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
