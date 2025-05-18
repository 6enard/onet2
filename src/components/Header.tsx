// Header.tsx
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from './logo.jpeg'; // Make sure the path is correct

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Programs', href: '#programs' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Instructors', href: '#instructors' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container flex items-center justify-between px-4">
        {/* Logo with Gradient Text */}
        <a href="#home" className="flex items-center space-x-2">
          <span className="font-bold text-xl sm:text-2xl bg-gradient-to-r from-black via-red-600 to-green-600 bg-clip-text text-transparent">
            ONE
          </span>
          <img src={logo} alt="One Tribe Logo" className="h-10 sm:h-12 mx-2" />
          <span className="font-bold text-xl sm:text-2xl bg-gradient-to-r from-black via-red-600 to-green-600 bg-clip-text text-transparent">
            TRIBE
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              className={`font-medium transition-colors ${
                isScrolled 
                  ? 'text-slate-800 hover:text-red-600' 
                  : 'text-white hover:text-red-400'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className={`btn ${
              isScrolled 
                ? 'bg-red-600 text-white hover:bg-red-500' 
                : 'bg-white text-red-600 hover:bg-red-100'
            }`}
          >
            Join Now
          </a>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className={isScrolled ? 'text-slate-800' : 'text-white'} size={24} />
          ) : (
            <Menu className={isScrolled ? 'text-slate-800' : 'text-white'} size={24} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-xl absolute top-full left-0 right-0 transition-all duration-300">
          <nav className="container py-4 flex flex-col space-y-4 items-center">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                className="text-slate-800 font-medium py-2 hover:text-red-600"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="btn btn-primary w-full text-center bg-red-600 hover:bg-red-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Join Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
