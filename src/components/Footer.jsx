import React from 'react';
import {
  FiMail,
  FiMapPin,
  FiPhone,
  FiSend,
  FiFacebook,
  FiTwitter,
  FiLinkedin,
} from 'react-icons/fi';
import { Link } from 'react-scroll';

const FooterSection = () => {
  return (
    <footer className="relative bg-[#06131B] text-white py-10 px-6 ">
      {/* Glow Background */}
      <div className="absolute left-10 bottom-20 w-72 h-72 bg-sky-500/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Top Grid */}
        <div className="grid md:grid-cols-3 gap-12 border-b border-white/10 pb-12">

          {/* Left Section */}
          <div>
            <h2 className="text-3xl font-bold leading-tight mb-6">
              <span className="text-sky-400">Ramiz Hassan</span> <br />
              Let's Build <br />
              <span className="text-gray-300">Awesome Projects</span>
            </h2>

            {/* Newsletter */}
            <div className="flex items-center bg-[#0B1A26] border border-white/10 rounded-full overflow-hidden max-w-xs">
              <input
                type="email"
                placeholder="Email Address"
                className="bg-transparent px-4 py-3 w-full text-sm text-white placeholder:text-gray-400 focus:outline-none"
              />
              <button className="px-4 text-sky-400 hover:text-white transition">
                <FiSend size={18} />
              </button>
            </div>
          </div>

          {/* Middle Section */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Quick Links</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              {["Home", "Services", "About", "Portfolio", "Contact"].map((item, i) => (
                <li key={i}>
                  <Link
                    to={item.toLowerCase()}   // Section name
                    className="cursor-pointer hover:text-sky-400 transition"
                    spy={true}                // Sets active class on scroll
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Section */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Contact</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-center gap-3">
                <FiMail className="text-sky-400" /> rameezalib7to4@gmail.com
              </li>
              <li className="flex items-center gap-3">
                <FiMapPin className="text-sky-400" /> Pakistan
              </li>
              <li className="flex items-center gap-3">
                <FiPhone className="text-sky-400" /> +92 3204992165
              </li>

              {/* Social Icons */}
              <li className="flex items-center gap-4 mt-4">
                {[FiFacebook, FiTwitter, FiLinkedin].map((Icon, i) => (
                  <span
                    key={i}
                    className="w-9 h-9 flex items-center justify-center rounded-full bg-[#0B1A26] text-sky-400 hover:bg-sky-500 hover:text-white transition cursor-pointer"
                  >
                    <Icon size={16} />
                  </span>
                ))}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-3">
          <p>© 2024 Ramiz Hassan. All rights reserved</p>
          <div className="flex gap-5">
            {['Terms & Condition', 'Privacy Policy', 'Contact Us'].map(
              (item, i) => (
                <a
                  key={i}
                  href="#"
                  className="hover:text-sky-400 transition"
                >
                  {item}
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
