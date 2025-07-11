import './Course.css';
import cert1 from './assets/image.png';
import cert2 from './assets/image2.jpg';
import cert3 from './assets/image1.png';

const courseData = [
  {
    image: cert1,
    title: "MongoDB - The Complete Guide",
    description: `Learned core MongoDB concepts like CRUD, schema design, and aggregation. Integrated MongoDB with Node.js and optimized queries for real-world applications.`,
  },
  {
    image: cert2,
    title: 'Wiki E-Learning',
    description: `Gained hands-on experience in creating and editing Wikipedia articles, learned wiki markup language, and contributed to open knowledge platforms as part of the Karavali Wikimedians initiative.`,
  },
  {
    image: cert3,
    title: 'Computer Architecture & Organization',
    description: `Explored CPU design, memory hierarchy, and instruction cycles. Understood how hardware components coordinate to execute programs efficiently.`,
  }
];

export default function CourseSection() {
  return (
    <>
      <h2 id="course-title" className="main-title">Courses & Certifications</h2> {/* Corrected */}
      
      <section className="course-section">
        <div className="course-carousel">
          {courseData.map((course, index) => (
            <div className="course-card" key={index}>
              <img src={course.image} alt={course.title} className="course-img" />
              <div className="course-content">
                <h3 className="course-title">{course.title}</h3>
                <p className="course-desc">{course.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
