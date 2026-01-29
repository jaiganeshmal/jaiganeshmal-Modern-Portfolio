import React from "react";

const skills = {
  frontend: [
    { name: "HTML5 / CSS3 / Tailwind CSS", value: 95 },
    { name: "JavaScript (ES6+)", value: 90 },
    { name: "React.js", value: 92 },
    { name: "Next.js", value: 65 },
  ],
  backend: [
    { name: "Node.js", value: 85 },
    { name: "Express.js", value: 88 },
    { name: "RESTful APIs", value: 90 },
    { name: "PHP", value: 75 },
  ],
  database: [
    { name: "MongoDB", value: 90 },
    { name: "MySQL", value: 80 },
  ],
  tools: [
    { name: "Git & GitHub", value: 90 },
    { name: "Postman", value: 85 },
    { name: "VS Code", value: 95 },
    { name: "XAMPP", value: 85 },
  ],
};


const SkillBlock = ({ title, data }) => (
  <div className="bg-gradient-to-b from-[#0b1a26] to-[#07131d] rounded-2xl p-8 border border-white/5">
    <h2 className="text-xl font-semibold mb-6 text-white">{title}</h2>

    <div className="space-y-5">
      {data.map((skill, index) => (
        <div key={index}>
          <div className="flex justify-between items-center text-sm text-gray-300 mb-2">
            <span>{skill.name}</span>
            <span className="text-sky-400">{skill.value}%</span>
          </div>

          <div className="w-full h-2.5 bg-[#0a1420] rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-cyan-400 to-sky-600 rounded-full transition-all duration-700"
              style={{ width: `${skill.value}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  </div>
);

const SkillsSection = () => {
  return (
    <section className=" py-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            My <span className="text-sky-400">Skills</span>
          </h2>
          <p className="text-gray-400 text-sm mt-3 max-w-xl mx-auto">
            A complete MERN stack skillset to build secure, scalable, and
            high-performance web applications.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <SkillBlock title="Frontend Skills" data={skills.frontend} />
          <SkillBlock title="Backend Skills" data={skills.backend} />
          <SkillBlock title="Database Skills" data={skills.database} />
          <SkillBlock title="Tools & Deployment" data={skills.tools} />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
