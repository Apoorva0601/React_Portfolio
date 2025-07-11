import './Header.css';
import { FaDownload } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="glass-header">
      <div className="brand-name">APOORVA</div>

      <nav className="nav-buttons">
        <a href="#about-title" className="nav-btn">About</a>
<a href="#projects-title" className="nav-btn">Projects</a>
<a href="#course-title" className="nav-btn">Course</a>
<a href="#contact-title" className="nav-btn">Contact</a>

      </nav>

      <div className="resume-section">
  <a
    href="/Apoorva_Resume.pdf"
    download="Apoorva_Resume.pdf"
    className="nav-btn resume-btn"
  >
    <FaDownload style={{ marginRight: '6px' }} />
    Resume
  </a>
</div>
    </header>
  );
}
