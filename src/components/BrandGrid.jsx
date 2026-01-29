import React from 'react';
import { assets } from '../assets/global'; // adjust the path if needed

const brands = [
  { name: 'Linear', logo: assets.linear },
  { name: 'Framer', logo: assets.framer },
  { name: 'Notion', logo: assets.notion },
  { name: 'Slack', logo: assets.slack },
  { name: 'Medium', logo: assets.medium },
  { name: 'Upwork', logo: assets.upwork },
  { name: 'Amazon', logo: assets.amazon },
  { name: 'Asana', logo: assets.asana },
];

const BrandGrid = () => {
  return (
    <section className="py-10 px-6 max-w-7xl">
      <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
        Trusted by Top <span className="text-sky-400">Tech & Startup Brands</span>
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {brands.map((brand, index) => (
          <div
            key={index}
            className="flex items-center justify-center h-28 bg-gradient-to-br from-[#0B1A26] to-[#07131D] 
                       rounded-2xl shadow-lg hover:scale-105 hover:shadow-sky-500/50 transition-transform duration-300"
          >
            <img
              src={brand.logo}
              alt={brand.name}
              className="h-10 sm:h-12 object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrandGrid;
