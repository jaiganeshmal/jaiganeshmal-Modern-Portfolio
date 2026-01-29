import React from 'react';
import { assets } from '../assets/global';

const testimonials = [
  {
    name: 'Ali Khan',
    username: '@ali_dev',
    text: `Working with Ramiz on our e-commerce web app was seamless. His MERN stack expertise and attention to UI/UX details really elevated our platform.`,
    avatar: assets.profileImg,
  },
  {
    name: 'Nadia Sheikh',
    username: '@nadia_ui',
    text: `Ramiz delivered a fully responsive portfolio dashboard for our startup. The clean design and modular code saved us weeks of development.`,
    avatar: assets.profileImg1,
  },
  {
    name: 'Omar Farooq',
    username: '@omar_fullstack',
    text: `His real-time chat application integration was flawless. Highly skilled in React, Node, and database architecture — highly recommended!`,
    avatar: assets.profileImg,
  },
];

const TestimonialGrid = () => {
  return (
    <section className="py-10 max-w-7xl px-6 text-white">
      <div className="text-center mb-8">
        <p className="text-sm text-sky-400 uppercase tracking-widest">Testimonials</p>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">
          What <span className="text-sky-400">Clients Say</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-[#0B1A26] to-[#07131D] rounded-2xl p-6 hover:shadow-lg hover:shadow-sky-500/30 transition-all duration-300 border border-transparent hover:border-sky-500/50"
          >
            {/* Header */}
            <div className="flex items-center gap-4 mb-4">
              <img
                src={item.avatar}
                alt={item.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-sky-400"
              />
              <div>
                <p className="text-sm font-semibold">
                  <span className="text-sky-400">{item.username}</span> {item.name}
                </p>
              </div>
            </div>

            {/* Testimonial Text */}
            <p className="text-sm md:text-base text-gray-300 leading-relaxed">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialGrid;
