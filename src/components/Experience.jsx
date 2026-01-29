import React from "react";

const experiences = [
  {
    title: "Web Developer Instructor",
    years: "2023 – 2024",
    description:
      "Guided students in building web applications using HTML, CSS, JavaScript, and React. Provided hands-on mentorship in full-stack development projects and real-world coding practices.",
  },
  {
    title: "MERN Stack Developer Intern",
    years: "2023 – 2024",
    description:
      "Worked on full-stack projects, integrating MongoDB, Express, React, and Node.js to deliver performant web solutions.",
  },
  {
    title: "Freelance Web Developer",
    years: "2025 – Present",
    description:
      "Delivered multiple client projects, focusing on clean code, UI/UX design, and optimized performance for modern web applications.",
  },
  {
    title: "Open-Source Contributor",
    years: "2025 – Present",
    description:
      "Contributed to React and Node.js open-source projects, improving features and fixing bugs while following best practices.",
  },
];


const Experience = () => {
  return (
    <section className=" py-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-8">
          <p className="text-sm text-sky-400 uppercase tracking-widest">
            Experience & Projects
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
            Showcasing My Web Development Journey
          </h2>
          <p className="text-gray-400 mt-3 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            A curated timeline of my hands-on experience in building modern web applications,
            collaborating with clients, and contributing to open-source projects..
          </p>
        </div>

        {/* Experience Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((item, idx) => (
            <div
              key={idx}
              className="relative bg-gradient-to-b from-[#0b1a26] to-[#07131d]
              rounded-2xl p-7 border border-white/5 transition-all duration-300
              hover:border-sky-500/50 group"
            >
              {/* Glow dot */}
              <span className="absolute -left-2 top-8 w-3 h-3 rounded-full bg-sky-500 shadow-[0_0_15px_rgba(56,189,248,0.8)] hidden md:block" />

              <h3 className="text-lg font-semibold text-white mb-1">
                {item.title}
              </h3>
              <p className="text-sm text-sky-400 font-medium mb-3">
                {item.years}
              </p>
              <p className="text-sm text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
