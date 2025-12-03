import React, { useState } from 'react';
import { Menu, X, Hexagon } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: 'Home', href: '#homepage' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="header" role="banner">
      <div className="container nav-container">
        {/* Logo */}
        <a href="#homepage" className="logo" aria-label="HR Consultec - Home">
          <Hexagon aria-hidden="true" />
          HR Consultec
        </a>

        {/* Desktop Nav */}
        <nav className="nav-links" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href}>
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="mobile-toggle"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}
        id="mobile-menu"
        role="navigation"
        aria-label="Mobile navigation"
      >
        <div className="mobile-links">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;