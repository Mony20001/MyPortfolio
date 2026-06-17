import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/", icon: "🏠" },
    { name: "Skills", href: "/skill", icon: "🛠️" },
    { name: "Projects", href: "/project", icon: "🎨" },
    { name: "Certificates", href: "/certificate", icon: "📜" },
    { name: "Contact", href: "/contact", icon: "📧" },
    { name: "About", href: "/about", icon: "🎀" },
  ];

  return (
    <nav className="relative w-full z-10 shadow-xl">
      {/* Background Image Layer with Hello Kitty theme */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90"
        style={{ 
          backgroundImage: "url('https://i.pinimg.com/originals/8c/4f/3b/8c4f3b2c5e6a7b8c9d0e1f2a3b4c5d6e.jpg')"
        }}
      />
      
      {/* Overlay gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-200/80 via-white/70 to-pink-100/80" />
      
      {/* Navbar Content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">
          
          {/* Logo / Brand - Now using Link */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="text-3xl filter drop-shadow-md">
              🎀
            </div>
            <div>
              <span className="text-2xl md:text-3xl font-bold tracking-tight bg-gradient-to-r from-pink-600 to-rose-500 bg-clip-text text-transparent drop-shadow-sm">
                RA MONY
              </span>
              <span className="text-xs ml-1 text-pink-500 font-medium">Portfolio</span>
            </div>
          </Link>
          
          {/* Desktop Navigation Links - Now using NavLink */}
          <div className="hidden md:flex space-x-1 lg:space-x-2">
            {navLinks.map((link, idx) => (
              <NavLink
                key={idx}
                to={link.href}
                className={({ isActive }) =>
                  `nav-link group relative px-4 py-2 rounded-full font-medium transition-all duration-300 flex items-center gap-2 backdrop-blur-sm ${
                    isActive
                      ? 'bg-white/60 text-pink-600 shadow-md'
                      : 'text-gray-700 hover:text-pink-600 hover:bg-white/50'
                  }`
                }
              >
                <span className="text-pink-400 group-hover:text-pink-500 transition">
                  {link.icon}
                </span>
                <span>{link.name}</span>
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-pink-400 transition-all duration-300 group-hover:w-5/12"></span>
              </NavLink>
            ))}
          </div>
          
          {/* CTA Button */}
          <div className="hidden md:block">
            <Link to="https://t.me/Ramony19">
              <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-5 rounded-full shadow-md transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                <span>👑</span>
                <span>Contact Us</span>
              </button>
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-full bg-white/40 backdrop-blur-sm text-pink-600 hover:bg-pink-100 transition"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden relative bg-white/95 backdrop-blur-md mt-2 mx-4 rounded-2xl shadow-lg overflow-hidden">
          <div className="flex flex-col py-3">
            {navLinks.map((link, idx) => (
              <NavLink
                key={idx}
                to={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `px-6 py-3 flex items-center gap-3 transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-pink-100 to-rose-100 text-pink-600 font-semibold'
                      : 'text-gray-700 hover:bg-pink-50 hover:text-pink-600'
                  }`
                }
              >
                <span className="text-xl">{link.icon}</span>
                <span className="font-medium">{link.name}</span>
              </NavLink>
            ))}
            <div className="border-t border-pink-100 mt-2 pt-2">
              <Link 
                to="/contact" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="mx-4 mt-2 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-5 rounded-full transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>👑</span>
                <span>Say Hi</span>
              </Link>
            </div>
          </div>
        </div>
      )}
      
      {/* Decorative bow accent */}
      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
        <div className="flex space-x-1">
          <div className="w-4 h-4 bg-pink-300 rounded-full opacity-70"></div>
          <div className="w-4 h-4 bg-pink-400 rounded-full opacity-80"></div>
          <div className="w-4 h-4 bg-pink-300 rounded-full opacity-70"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;