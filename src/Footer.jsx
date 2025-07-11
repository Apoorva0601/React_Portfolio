import './Footer.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Apoorva</h3>
        <p className="footer-quote">"Set your heart upon your work, but never on its reward."</p>
        <p>Crafted with 💛 using React • Styled with CSS</p>

        <div className="social-icons">
          <a href="https://github.com/Apoorva0601" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/apoorva-poojary-445b86292/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://x.com/poojary_ap1021" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="mailto:apoorvaspoojary06@gmail.com">
            <FaEnvelope />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Apoorva. All rights reserved.</p>
      </div>
    </footer>
  );
}
