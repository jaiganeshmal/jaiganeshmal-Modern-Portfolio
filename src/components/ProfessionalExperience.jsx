import React from "react";
import { assets } from "../assets/global";

const experienceList = [
    {
        label: "experience",
        company: "Soft Tech",
        duration: "2 Years",
        role: "UI/UX Designer",
        description:
            "Designed modern, responsive interfaces and user flows for web applications, ensuring optimal user experience and engagement across devices.",
    },
    {
        label: "experience",
        company: "ModernTech",
        duration: "2 Years",
        role: "Full-Stack Web Developer",
        description:
            "Built full-stack web applications using the MERN stack, integrating frontend React components with Node.js/Express backend and MongoDB database for scalable solutions.",
    },
];


const ProfessionalExperience = () => {
    return (
        <section className=" py-10">
            <div className="max-w-7xl mx-auto px-6">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

                    {/* LEFT CONTENT */}
                    <div className="space-y-10">
                        <div>
                            <p className="text-sm text-sky-400 uppercase tracking-widest">
                                Career Path
                            </p>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
                                Professional <span className="text-sky-400">Experience</span>
                            </h2>
                        </div>

                        {experienceList.map((exp, index) => (
                            <div
                                key={index}
                                className="relative bg-gradient-to-b from-[#0b1a26] to-[#07131d] rounded-2xl p-6 border border-white/5 transition-all duration-300 hover:border-sky-500/50" >
                                {/* Label */}
                                <span className="absolute -top-3 left-6 px-3 py-1 text-xs uppercase bg-sky-500/10 text-sky-400 rounded-full">
                                    {exp.label}
                                </span>

                                <h3 className="text-lg font-semibold text-white mt-4">
                                    {exp.company}
                                    <span className="text-sm font-normal text-gray-400">
                                        {" "}
                                        ({exp.duration})
                                    </span>
                                </h3>

                                <p className="text-sm text-sky-400 mb-2">{exp.role}</p>

                                <p className="text-sm text-gray-400 leading-relaxed">
                                    {exp.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="relative flex justify-center h-full">
                        {/* Blur background */}
                        <div className="absolute inset-0 bg-sky-500/20 blur-[120px] rounded-2xl" />

                        {/* Image container */}
                        <div className="relative p-[2px] rounded-2xl bg-gradient-to-br from-sky-400 to-blue-600 h-full">
                            <img
                                src={assets.experienceImg}
                                alt="Experience"
                                className="rounded-2xl object-cover w-full h-full"
                            />
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
};

export default ProfessionalExperience;
