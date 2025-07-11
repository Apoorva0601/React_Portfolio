import './About.css';
import aboutImg from './assets/portfolio.png';

export default function About() {
  return (
    <section id="about" className="about-section">
      <h2 id="about-title" className="about-title">About Me</h2>
      <div className="about-content">
        <div className="about-left glass-card">
          <p>
            Hey there! I’m Apoorva, a tech enthusiast who loves bringing ideas to life through clean, creative, and impactful code. I enjoy building modern web apps with React & JavaScript and designing beautiful mobile experiences using Flutter, always aiming to create smooth, responsive, and meaningful user interactions.
            But my passion for technology doesn’t stop at development. I’m deeply curious about how AI, Machine Learning, and Data Analytics can solve real-world challenges. Whether it's visualizing data insights with Power BI or experimenting with new AI tools, I love exploring what’s possible with technology.
            When I’m not coding, you’ll often find me contributing to Kannada Wikipedia, sharing knowledge and collaborating with an amazing community to make learning accessible in my native language.
          </p>
        </div>

        <div className="about-right">
          <img src={aboutImg} alt="Apoorva working" className="profile-img" />
        </div>
      </div>
    </section>
  );
}
