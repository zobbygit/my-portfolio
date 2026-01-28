import { useState } from 'react';
import emailjs from '@emailjs/browser';


export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
    
//     // Simulate form submission
//     setTimeout(() => {
//       setSubmitMessage('Thanks for your message! I\'ll get back to you soon.');
//       setFormData({ name: '', email: '', subject: '', message: '' });
//       setLoading(false);
      
//       setTimeout(() => setSubmitMessage(''), 5000);
//     }, 1000);
//   };


const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setSubmitMessage('');

  try {
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    setSubmitMessage("✅ Message sent successfully! I'll get back to you soon.");
    setFormData({ name: '', email: '', subject: '', message: '' });

  } catch (error) {
    console.error("EmailJS Error:", error);
    setSubmitMessage("❌ Failed to send message. Please try again later.");
  }

  setLoading(false);

  setTimeout(() => setSubmitMessage(''), 5000);
};



  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-down">


<h2 className="text-4xl md:text-5xl font-extrabold mb-4 relative inline-block">
  <span className="gradient-text drop-shadow-[0_0_15px_rgba(34,211,238,0.6)] animate-pulse-glow">
    Get In Touch
  </span>
  <span className="absolute left-0 -bottom-2 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-fade-in-up"></span>
</h2>




          <p className="text-gray-400 text-lg">Let's discuss your next project ! Send your message to me</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Contact Info */}
          <div className="space-y-6 animate-fade-in-left" style={{ animationDelay: '0.2s' }}>
            
            <div className="card p-6">
              <div className="flex items-start gap-4">
                <div className="text-3xl mt-1">✉️</div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                  <a href="mailto:your.email@example.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                    iamzohaib777@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="card p-6">
              <div className="flex items-start gap-4">
                <div className="text-3xl mt-1">📱</div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Phone</h3>
                  <a href="tel:+1234567890" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                    +91 7003026496
                  </a>
                </div>
              </div>
            </div>

            <div className="card p-6">
              <div className="flex items-start gap-4">
                <div className="text-3xl mt-1">📍</div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Location</h3>
                  <p className="text-gray-300">Kolkata, West Bengal, India</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="card p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Connect With Me</h3>
              <div className="flex gap-4">
                <a href="https://github.com/zobbygit" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors text-2xl">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/zohaib-aslam-245a40253" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors text-2xl">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.81 0-9.728h3.554v1.375c.427-.659 1.191-1.597 2.897-1.597 2.117 0 3.704 1.385 3.704 4.362v5.588zM5.337 8.855c-1.144 0-1.915-.759-1.915-1.71 0-.956.771-1.71 1.958-1.71 1.187 0 1.914.754 1.942 1.71 0 .951-.755 1.71-1.985 1.71zm1.582 11.597H3.635V9.724h3.284v10.728zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/ig_zohaib_25" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 transition-colors text-2xl">
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.688.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>



                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="animate-fade-in-right" style={{ animationDelay: '0.4s' }}>
            <div className="space-y-4">
              
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 text-white transition-colors duration-300"
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 text-white transition-colors duration-300"
                  placeholder="john@example.com"
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 text-white transition-colors duration-300"
                  placeholder="Project Inquiry"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 text-white transition-colors duration-300 resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>

              {/* Success Message */}
              {submitMessage && (
                <div className="p-4 bg-green-500/10 border border-green-500/50 rounded-lg text-green-400 text-sm animate-fade-in-up">
                  {submitMessage}
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}