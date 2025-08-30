import { 
  FaReact, 
  FaJs, 
  FaNode, 
  FaDatabase, 
  FaGitAlt, 
  FaHtml5, 
  FaCss3Alt,
  FaBootstrap,
  FaPython,
  FaJava,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaFire
} from 'react-icons/fa';
import { 
  SiTailwindcss, 
  SiMongodb, 
  SiExpress, 
  SiNextdotjs, 
  SiTypescript,
  SiVite
} from 'react-icons/si';

export const personalInfo = {
  name: "Apoorva",
  title: "Web Developer",
  bio: "Hi, I’m Apoorva a tech enthusiast who loves bringing ideas to life through clean, creative, and impactful code. I specialize in building modern web applications with React and designing beautiful mobile experiences with Flutter, always focused on creating smooth and meaningful user interactions. I’m also deeply passionate about AI, Machine Learning, and Data Analytics, and enjoy using tools like Power BI to uncover insights and solve real-world problems. Outside of tech, I contribute to Kannada Wikipedia, working with a vibrant community to make knowledge accessible in my native language.",
  achievements: [
    "🎓 Computer Science Graduate",
    "🚀 2+ Years of Development Experience",
    "💼 Successfully delivered 4+ projects",
    "🏆 Top performer in coding challenges"
  ],
  email: "apoorvapoojary0601@gmail.com",
  resume: "/resume.pdf", // Replace with actual resume link
  image: "/profile.jpg" // Replace with actual image
};

export const skills = [
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
//   { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Node.js", icon: FaNode, color: "#339933" },
  { name: "Express", icon: SiExpress, color: "#000000" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Firebase", icon: FaFire, color: "#FFCA28" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
//   { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "Framer Motion", icon: FaReact, color: "#0055FF" },
  { name: "Vite", icon: SiVite, color: "#646CFF" },
  { name: "Git", icon: FaGitAlt, color: "#F05032" },
  { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
  { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
  { name: "Python", icon: FaPython, color: "#3776AB" },
  { name: "Java", icon: FaJava, color: "#007396" }
];

export const projects = [
  {
    id: 1,
    title: "Real-Time Chat App",
    description: "A sleek MERN Chat App with a clean, responsive UI and real-time messaging powered by Socket.io. It allows users to create accounts, join chat rooms, and exchange messages instantly. Built using React and Node.js, it features JWT authentication and uses MongoDB for efficient data storage and retrieval.",
    image: "/project1.jpg", // Replace with actual project image
    techStack: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS", "Socket.io"],
    liveDemo: "https://chat-app-psi-pink.vercel.app/login",
    github: "https://github.com/Anvithshetty17/chat-app",
    featured: true
  },
  {
    id: 2,
    title: "Fitness Tracker",
    description: "A sleek MERN Fitness Tracker app with a clean, responsive UI and modern design. It allows users to log daily workouts like running, yoga, or gym, along with duration and date. Built using React and Node.js, it also integrates Axios and MongoDB for efficient data handling and real-time updates.",
    image: "/project2.jpg", // Replace with actual project image
    techStack: ["React",  "Node.js", "MongoDB", "Express"],
    liveDemo: "https://fitness-tracker-olive-rho.vercel.app/",
    github: "https://github.com/Apoorva0601/fitness_tracker.git",
    featured: true
  },
  {
    id: 3,
    title: "Digital Student ID Card",
    description: "A sleek Flutter Student ID Card app with a responsive UI and modern gradient design. It features an animated profile image, institutional branding, and neatly displays key student details such as name, course, and USN. Additionally, it generates a barcode for the USN to simulate real-world ID scanning functionality.",
    image: "/project3.jpg", // Replace with actual project image
    techStack: ["Flutter","Dart"],
    liveDemo: "https://github.com/Apoorva0601/ID_CARD.git",
    github: "https://github.com/Apoorva0601/ID_CARD.git",
    featured: false
  },
  {
    id: 4,
    title: "Women's Safety Analyzer",
    description: "This Python project analyzes Instagram comments on women's safety in India using Natural Language Processing (NLP). It features a Tkinter-based GUI that allows users to load CSV files, clean the data, and perform sentiment analysis using the TextBlob library. Results are shown using Matplotlib charts for clear public opinion insights.",
    image: "/project4.jpg", // Replace with actual project image
    techStack: [],
    liveDemo: "https://github.com/Apoorva0601/women_safety",
    github: "https://github.com/Apoorva0601/women_safety",
    featured: false
  },
  {
    id: 5,
    title: "Interactive Quiz App",
    description: "The Quiz App is a responsive web application built using HTML, CSS, and JavaScript. It offers a smooth and engaging interface for users to test their knowledge through multiple-choice questions. The app features dynamic question rendering, real-time score tracking, and instant feedback, making it ideal for learning and self-assessment",
    image: "/project5.jpg", // Replace with actual project image
    techStack: ["HTML", "CSS", "JavaScript"],
    liveDemo: "https://apoorvapoojary-quiz-app.vercel.app/",
    github: "https://github.com/Apoorva0601/Quiz_app",
    featured: false
  },
  {
    id: 6,
    title: "Weather App",
    description: "A simple and interactive weather application built using HTML, CSS, and JavaScript. It fetches real-time weather data based on user input and displays temperature, conditions, and location info with a clean and responsive UI. Perfect for learning API integration and frontend development basics.",
    image: "/project6.jpg", // Replace with actual project image
    techStack: ["HTML", "CSS", "JavaScript","Weather API"],
    liveDemo: "https://apoorvapoojary-weather-app.vercel.app/",
    github: "https://github.com/Apoorva0601/Weather_app",
    featured: false
  }
];

export const courses = [
  {
    id: 1,
    name: "Complete React Developer Course",
    platform: "Udemy",
    duration: "40 hours",
    completedDate: "2023",
    certificateLink: "https://certificate-link.com",
    image: "/course1.jpg" // Replace with actual course image
  },
  {
    id: 2,
    name: "Computer Architecture & Organization",
    platform: "Udemy",
    duration: "35 hours",
    completedDate: "2023",
    certificateLink: "https://certificate-link.com",
    image: "/course2.jpg" // Replace with actual course image
  },
  {
    id: 3,
    name: "Advanced CSS and Sass",
    platform: "Udemy",
    duration: "28 hours",
    completedDate: "2022",
    certificateLink: "https://certificate-link.com",
    image: "/course3.jpg" // Replace with actual course image
  },
  {
    id: 4,
    name: "JavaScript Algorithms and Data Structures",
    platform: "freeCodeCamp",
    duration: "300 hours",
    completedDate: "2022",
    certificateLink: "https://certificate-link.com",
    image: "/course4.jpg" // Replace with actual course image
  },
  {
    id: 5,
    name: "MongoDB Developer Path",
    platform: "MongoDB University",
    duration: "20 hours",
    completedDate: "2023",
    certificateLink: "https://certificate-link.com",
    image: "/course5.jpg" // Replace with actual course image
  }
];

export const socialLinks = [
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/apoorva-poojary-445b86292/",
    color: "#0077B5"
  },
  {
    name: "GitHub",
    icon: FaGithub,
    url: "https://github.com/Apoorva0601",
    color: "#333"
  },
  {
    name: "Email",
    icon: FaEnvelope,
    url: "mailto:apoorvapoojary0601@gmail.com",
    color: "#EA4335"
  }
];

export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Courses", href: "#courses" },
  { name: "Contact", href: "#contact" }
];
