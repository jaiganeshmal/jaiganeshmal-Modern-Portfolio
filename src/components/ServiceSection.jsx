import React from "react";
import { assets } from "../assets/global";

const infoCards = [
  {
    number: "01.",
    title: "Creative Web Development",
    description:
      "Building modern, responsive, and user-friendly web applications using the MERN stack for scalable and efficient solutions.",
  },
  {
    number: "02.",
    title: "Innovative UI/UX Design",
    description:
      "Crafting visually appealing and intuitive interfaces that enhance user experience and bring client ideas to life.",
  },
  {
    number: "03.",
    title: "Project Showcase",
    description:
      "A curated selection of my web development projects demonstrating full-stack capabilities, performance optimization, and clean code practices.",
  },
];



const ServiceSection = () => {
  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-8">
          <p className="text-sm text-sky-400 uppercase tracking-widest">
            Latest Service
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
            Crafting Modern Web <br className="hidden sm:block" /> Applications
          </h2>
          <p className="text-gray-400 mt-5 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            I specialize in building full-stack web applications using MERN stack and PHP,
            creating intuitive UI/UX, and delivering projects that meet client expectations with high performance and scalability.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* Left Cards */}
          <div className="space-y-6">
            {infoCards.map((card, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-b from-[#0b1a26] to-[#07131d]
                rounded-2xl p-6 border border-white/5 transition-all duration-300
                hover:border-sky-500/50"
              >
                <span className="absolute -top-4 -left-4 text-6xl font-bold text-white/5 group-hover:text-sky-500/10 transition">
                  {card.number}
                </span>

                <p className="text-sky-400 font-semibold mb-2">
                  {card.number}
                </p>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right Image */}
          <div className="flex justify-center h-full relative">
            <div className="absolute w-72 h-72 bg-sky-500/20 blur-[120px]" />

            <div className="relative p-[2px] rounded-2xl bg-gradient-to-br from-sky-400 to-blue-600">
              <img
                src={assets.serviceImg}
                alt="Service"
                className="rounded-2xl object-cover w-full md:w-[480px] lg:w-[460px] h-full"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
