import React from 'react';

const ContactSection = () => {
  return (
    <section className="max-w-7xl relative py-10 px-6 text-white">
      {/* Floating blur background */}
      <div className="absolute -top-20 right-10 w-72 h-72 bg-sky-500/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative mx-auto bg-gradient-to-br from-[#0B1A26] to-[#07131D] p-10 md:p-16 rounded-2xl shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Text Content */}
          <div>
            <p className="text-sm text-sky-400 uppercase tracking-widest mb-2">Contact Me</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let's Build Something <span className="text-sky-400">Amazing Together</span>
            </h2>
            <p className="text-sm md:text-base text-gray-400 leading-relaxed">
              Whether you have a project idea, a collaboration in mind, or just want to chat about technology, feel free to reach out. I’m always excited to connect with new people and opportunities.
            </p>
          </div>

          {/* Right Form */}
          <form className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="bg-[#0F1A26] border border-gray-700 text-sm p-3 rounded-lg text-white outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="bg-[#0F1A26] border border-gray-700 text-sm p-3 rounded-lg text-white outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Your Email"
                className="bg-[#0F1A26] border border-gray-700 text-sm p-3 rounded-lg text-white outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition"
              />
              <input
                type="text"
                placeholder="Project / Subject"
                className="bg-[#0F1A26] border border-gray-700 text-sm p-3 rounded-lg text-white outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition"
              />
            </div>

            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full bg-[#0F1A26] resize-none border border-gray-700 text-sm p-3 rounded-lg text-white outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition"
            ></textarea>

            <button
              type="submit"
              className="mt-2 bg-gradient-to-r from-sky-500 to-blue-600 text-white px-6 py-3 rounded-full text-sm font-medium hover:scale-105 hover:shadow-lg transition-all flex items-center justify-center gap-2"
            >
              Send Message →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
