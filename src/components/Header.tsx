'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for header background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation items
  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  // Smooth scroll to section
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background-primary/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container-custom section-padding py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 p-2 rounded-lg">
              <span className="text-white font-bold text-lg">H</span>
            </div>
            <span className="text-white font-bold text-xl">Hari</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
                              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
                aria-label={`Navigate to ${item.label} section`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Profile Avatar */}
          <div className="hidden md:block">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-accent-blue/20 hover:border-accent-blue/50 transition-colors">
              <Image
                src="/images/hero-profile.jpg"
                alt="Hari Profile"
                width={40}
                height={40}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-text-primary hover:text-accent-blue transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-primary-light">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-text-secondary hover:text-text-primary transition-colors duration-200 font-medium text-left py-2"
                >
                  {item.label}
                </button>
              ))}
              
              {/* Mobile Profile */}
              <div className="flex items-center space-x-3 pt-4 border-t border-primary-light">
                <div className="w-8 h-8 rounded-full overflow-hidden border border-accent-blue/20">
                  <Image
                    src="/images/hero-profile.jpg"
                    alt="Hari Profile"
                    width={32}
                    height={32}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-text-secondary text-sm">Hari</span>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header; 