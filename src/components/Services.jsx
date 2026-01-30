import {
  FaLaptopCode,
  FaLayerGroup,
  FaRocket,
  FaShieldAlt,
} from "react-icons/fa";

const services = [
  {
    icon: <FaLaptopCode size={28} />,
    title: "Custom Web Applications",
    count: "Client-Based Projects",
  },
  {
    icon: <FaLayerGroup size={28} />,
    title: "REST API Development",
    count: "Secure & Scalable",
  },
  {
    icon: <FaRocket size={28} />,
    title: "Performance Optimization",
    count: "Fast & Efficient",
  },
  {
    icon: <FaShieldAlt size={28} />,
    title: "Authentication & Security",
    count: "JWT / OAuth",
  },
];

const stats = [
  { value: "5+", label: "Completed Projects" },
  { value: "2+", label: "Years of Experience" },
  { value: "6+", label: "Technologies Mastered" },
  { value: "100%", label: "Client Satisfaction" },
];

const Services = () => {
  return (
    <section className="py-10 px-6 ">
      <div className="max-w-7xl mx-auto space-y-14">

        {/* TOP SERVICES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item, i) => (
            <div
              key={i}
              className="bg-[#0B1A26] rounded-2xl p-8 text-center border border-white/5
                         transition-all duration-300 transform hover:scale-[1.03] hover:shadow-lg
                         hover:bg-gradient-to-b hover:from-sky-500/20 hover:to-blue-600/20
                         hover:border-sky-500/50"
            >
              <div className="text-sky-400 flex justify-center mb-4 transition-colors duration-300
                              group-hover:text-white">
                {item.icon}
              </div>
              <h3 className="text-white font-semibold">{item.title}</h3>
              <p className="text-gray-400 text-sm mt-1">{item.count}</p>
            </div>
          ))}
        </div>

        {/* BOTTOM GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Experience Box */}
          <div className="lg:col-span-1 bg-[#0B1A26] rounded-2xl p-10 border border-white/5
                          transition-all duration-300 hover:scale-[1.02] hover:shadow-lg
                          hover:bg-gradient-to-b hover:from-sky-500/20 hover:to-blue-600/20
                          hover:border-sky-500/50">
            <h2 className="text-sky-400 text-7xl font-bold">2+</h2>
            <h3 className="text-white text-2xl font-semibold mt-2">
              Years Of Experience
            </h3>
            <p className="text-gray-400 text-sm mt-4 leading-relaxed">
              Hands-on experience in building full-stack web applications using the
              MERN stack, focusing on performance, scalability, and clean architecture.
            </p>
          </div>

          {/* Stats */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {stats.map((item, i) => (
              <div
                key={i}
                className="rounded-2xl p-8 text-center border border-white/5
                           bg-[#0B1A26]
                           transition-all duration-300 transform hover:scale-[1.03] hover:shadow-lg
                           hover:bg-gradient-to-b hover:from-sky-500/20 hover:to-blue-600/20
                           hover:border-sky-500/50"
              >
                <h3 className="text-white text-3xl font-bold">{item.value}</h3>
                <p className="text-gray-400 text-sm mt-2">{item.label}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;
