import './Contact.css';
import { FaPaperPlane } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSubmitted(false);

    emailjs.sendForm(
      'YOUR_SERVICE_ID',    // 👉 Replace with your EmailJS Service ID
      'YOUR_TEMPLATE_ID',   // 👉 Replace with your EmailJS Template ID
      e.target,
      'YOUR_PUBLIC_KEY'     // 👉 Replace with your EmailJS Public Key
    ).then(() => {
      console.log('SUCCESS!');
      setSubmitted(true);
      e.target.reset();  // Reset the form
      setTimeout(() => setSubmitted(false), 3000);
    }).catch((error) => {
      console.error('FAILED...', error);
      setError('Something went wrong. Please try again.');
    });
  };

  return (
    <section id="contact" className="contact-section">
      <h2 id="contact-title" className="contact-title">Contact Me</h2>

      {submitted && <p className="success-message">Successfully Submitted!!</p>}
      {error && <p className="error-message">{error}</p>}

      <div className="contact-container">
        <form onSubmit={handleSubmit} className={`contact-form ${animate ? 'slide-down' : ''}`}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" name="from_name" id="name" placeholder="Your full name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="from_email" id="email" placeholder="your.email@example.com" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows="5" placeholder="Write your message here..." required />
          </div>

          <button type="submit" className="submit-button">
            Send <FaPaperPlane className="plane-icon" />
          </button>
        </form>
      </div>
    </section>
  );
}
