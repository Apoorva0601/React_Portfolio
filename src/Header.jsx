import './Header.css';
import { FaDownload, FaBars, FaTimes } from 'react-icons/fa';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if screen is mobile size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="glass-header">
      <div className="brand-name">APOORVA</div>
      
      {/* Desktop Navigation */}
      <nav className="nav-buttons desktop-nav">
        <a href="#about-title" className="nav-btn">About</a>
        <a href="#projects-title" className="nav-btn">Projects</a>
        <a href="#course-title" className="nav-btn">Course</a>
        <a href="#contact-title" className="nav-btn">Contact</a>
      </nav>

      {/* Desktop Resume Button */}
      <div className="resume-section desktop-resume">
        <a
          href="/Apoorva_Resume.pdf"
          download="Apoorva_Resume.pdf"
          className="nav-btn resume-btn"
        >
          <FaDownload style={{ marginRight: '6px' }} />
          Resume
        </a>
      </div>

      {/* Mobile Menu Toggle */}
      {isMobile && (
        <button className="mobile-menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      )}

      {/* Mobile Navigation Menu */}
      {isMobile && (
        <div className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
          <nav className="mobile-nav-buttons">
            <a href="#about-title" className="nav-btn mobile-nav-btn" onClick={closeMenu}>About</a>
            <a href="#projects-title" className="nav-btn mobile-nav-btn" onClick={closeMenu}>Projects</a>
            <a href="#course-title" className="nav-btn mobile-nav-btn" onClick={closeMenu}>Course</a>
            <a href="#contact-title" className="nav-btn mobile-nav-btn" onClick={closeMenu}>Contact</a>
            <a
              href="/Apoorva_Resume.pdf"
              download="Apoorva_Resume.pdf"
              className="nav-btn resume-btn mobile-resume-btn"
              onClick={closeMenu}
            >
              <FaDownload style={{ marginRight: '6px' }} />
              Resume
            </a>
          </nav>
        </div>
      )}

      {/* Mobile Overlay */}
      {isMobile && isMenuOpen && <div className="mobile-overlay" onClick={closeMenu}></div>}
    </header>
  );
}