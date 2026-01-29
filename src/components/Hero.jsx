import { assets } from "../assets/global";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-[#050b12] overflow-hidden">

      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:70px_70px]" />

      {/* Blue Light */}
      <div className="absolute right-0 top-0 w-[400px] h-[400px] bg-sky-500/20 blur-[120px]" />

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-6 lg:pt-18 pt-24 grid grid-cols-1 lg:grid-cols-2 items-center lg:gap-16">

        {/* LEFT */}
        <div>
          <span className="text-gray-400 tracking-[0.3em] text-sm uppercase">
            Hello
          </span>

          <h1 className="mt-2 text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            I'm Ramiz Hassan <br />
            <span className="text-sky-400">A MERN Stack Developer</span>
          </h1>

          <p className="mt-6 max-w-md text-gray-400 text-sm leading-relaxed">
            I specialize in building scalable and secure full-stack web applications using the MERN stack.
            Focused on delivering high-quality, maintainable, and performance-driven solutions.
          </p>

          <button
            className="mt-6 inline-flex items-center gap-2 px-7 py-3 rounded-full
            border border-white/30 text-white text-sm
            hover:bg-sky-500 hover:border-sky-500 transition-all duration-300"
          >
            View Portfolio →
          </button>
        </div>

        {/* RIGHT */}
        <div className="relative flex justify-center">
          <img
            src={assets.heroImg}
            alt="Hero"
            className="w-[60%] max-w-md object-contain z-10"
          />

          {/* Image Glow */}
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-sky-500/30 blur-[100px] rounded-full -z-0" />
        </div>
      </div>

      {/* BIG TEXT OVERLAYS */}
      <h2 className="absolute right-10 top-1/2 -translate-y-1/2 text-white/80 text-7xl font-extrabold hidden lg:block">
        WEB DESIGNER
      </h2>

      <h2 className="absolute bottom-12 right-12 text-white/10 text-6xl font-extrabold hidden lg:block">
        WEB Developer
      </h2>

    </section>
  );
};

export default Hero;