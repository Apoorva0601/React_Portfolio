import './About.css';
import aboutImg from './assets/portfolio.png';

export default function About() {
  return (
    <section id="about" className="about-section">
      <h2 id="about-title" className="about-title">ABOUT ME</h2>
      <div className="about-content">
        <div className="about-left glass-card">
          <p>
           Hi, I’m Apoorva a tech enthusiast who loves bringing ideas to life through clean, creative, and impactful code. I specialize in building modern web applications with React and designing beautiful mobile experiences with Flutter, always focused on creating smooth and meaningful user interactions. I’m also deeply passionate about AI, Machine Learning, and Data Analytics, and enjoy using tools like Power BI to uncover insights and solve real-world problems. Outside of tech, I contribute to Kannada Wikipedia, working with a vibrant community to make knowledge accessible in my native language.
          </p>
        </div>

        <div className="about-right">
          <img src={aboutImg} alt="Apoorva working" className="profile-img" />
        </div>
      </div>
    </section>
  );
}
