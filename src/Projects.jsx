import './Project.css';
import { FaGithub, FaExternalLinkAlt, FaRegFileAlt } from 'react-icons/fa';
import IDcardImage from './assets/project1.png';
import AnalysisImage from './assets/project2.png';
import QuizImage from './assets/project3.png';
import WeatherImage from './assets/project4.png';

export default function Projects() {
  const projects = [
    {
      title: 'Digital Student ID Card',
      description: 'A sleek Flutter Student ID Card app with a responsive UI and modern gradient design. It features an animated profile image, institutional branding, and neatly displays key student details such as name, course, and USN. Additionally, it generates a barcode for the USN to simulate real-world ID scanning functionality.',
      image: IDcardImage,
      github: 'https://github.com/Apoorva0601/ID_CARD.git',
      link: 'https://github.com/Apoorva0601/ID_CARD.git'
    },
    {
      title: "Women's Safety Analyzer",
      description: "This Python project analyzes Instagram comments on women's safety in India using Natural Language Processing (NLP). It features a Tkinter-based GUI that allows users to load CSV files, clean the data, and perform sentiment analysis using the TextBlob library. Results are shown using Matplotlib charts for clear public opinion insights.",
      image: AnalysisImage,
      github: 'https://github.com/Apoorva0601/women_safety.git',
      link: 'https://github.com/Apoorva0601/women_safety.git'
    },
    {
      title: 'Interactive Quiz App',
      description: 'The Quiz App is a responsive web application built using HTML, CSS, and JavaScript. It offers a smooth and engaging interface for users to test their knowledge through multiple-choice questions. The app features dynamic question rendering, real-time score tracking, and instant feedback, making it ideal for learning and self-assessment',
      image: QuizImage,
      github: 'https://github.com/Apoorva0601/Quiz_app.git',
      link: 'https://apoorvapoojary-quiz-app.vercel.app/'
    },
    {
      title: 'Weather App',
      description: 'A simple and interactive weather application built using HTML, CSS, and JavaScript. It fetches real-time weather data based on user input and displays temperature, conditions, and location info with a clean and responsive UI. Perfect for learning API integration and frontend development basics.',
      image: WeatherImage,
      github: 'https://github.com/Apoorva0601/Weather_App.git',
      link: 'https://apoorvapoojary-weather-app.vercel.app/'
    }
  ];

  return (
    <>
      <h2 id="projects-title" className="section-title">Projects</h2>
      <section className="projects-section" id="projects">
        <div className="project-grid">
          {projects.map((proj, idx) => (
            <div className="project-card glass-card" key={idx}>
              <div className="project-header">
                <div className="project-title">
                  <FaRegFileAlt className="file-icon" />
                  <h3>{proj.title}</h3>
                </div>
                <div className="project-links">
                  <a href={proj.github} target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                  <a href={proj.link} target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt /></a>
                </div>
              </div>
              <img src={proj.image} alt={proj.title} className="project-img" />
              <p className="project-description">{proj.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
