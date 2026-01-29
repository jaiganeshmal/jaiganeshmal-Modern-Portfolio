import { Link } from "react-scroll"; // <-- react-scroll import
import { assets } from "../assets/global";
import { FaGithub, FaLinkedinIn, FaTwitter, FaFacebookF } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 z-50 bg-gradient-to-b from-black to-[#050b12] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-0">
          <img src={assets.logo} alt="logo" className="w-12 h-12 object-contain" />
          <span className="text-white text-lg font-semibold tracking-wide">
            Ramiz Hassan
          </span>
        </div>

        {/* Menu */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          {["Home", "Services", "About", "Portfolio", "Contact"].map((item) => (
            <li key={item}>
              <Link
                to={item.toLowerCase()}   // <-- Section name
                className="cursor-pointer text-gray-300 hover:text-white transition"
                activeClass="text-white bg-sky-600/20 px-3 py-1 rounded-md"
                spy={true}                // sets active class on scroll
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="flex items-center gap-3">
          {[FaGithub, FaLinkedinIn, FaTwitter, FaFacebookF].map((Icon, i) => (
            <div
              key={i}
              className="w-9 h-9 rounded-full bg-sky-600/10 flex items-center justify-center
              text-sky-400 hover:bg-sky-600 hover:text-white transition cursor-pointer"
            >
              <Icon size={14} />
            </div>
          ))}
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
