import { useState } from 'react';
import { newsletterAPI } from '../services/api';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      await newsletterAPI.subscribe(email);
      setSuccess(true);
      setMessage('Successfully subscribed to newsletter! 🎉');
      setEmail('');
      setTimeout(() => {
        setSuccess(false);
        setMessage('');
      }, 5000);
    } catch (error) {
      const errorMsg = error.response?.data?.message || 'Failed to subscribe. Please try again.';
      setMessage(errorMsg);
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900/50 border-t border-cyan-500/20 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Newsletter Section */}

<div className="mb-16 animate-fade-in-up flex justify-center" style={{ animationDelay: '0.1s' }}>

  <div className="relative w-full max-w-xl glass p-8 rounded-2xl border border-cyan-500/20 shadow-[0_0_40px_rgba(34,211,238,0.15)]">

    {/* Glow ring */}
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 blur-xl"></div>

    {/* Title */}
    <h3 className="text-2xl md:text-3xl font-extrabold mb-3 relative text-center">
      <span className="gradient-text drop-shadow-[0_0_15px_rgba(34,211,238,0.6)] animate-pulse-glow inline-block">
        Subscribe to Newsletter
      </span>
      <span className="absolute left-1/2 -bottom-2 h-1 -translate-x-1/2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-fade-in-up"></span>
    </h3>

    {/* Subtitle */}
    <p className="text-gray-400 text-center mb-6 max-w-md mx-auto relative">
      Stay ahead with exclusive updates on my projects, skills, and career journey 🚀
    </p>

    {/* Form */}
    <form onSubmit={handleSubscribe} className="relative">
      <div className="flex flex-col sm:flex-row gap-3">

        <input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1 px-4 py-3 bg-slate-900/80 border border-cyan-500/30 rounded-xl focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(34,211,238,0.4)] text-white transition-all duration-300"
        />

        <button
          type="submit"
          disabled={loading}
          className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold
          hover:shadow-[0_0_25px_rgba(34,211,238,0.7)]
          hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Subscribing...' : 'Subscribe'}
        </button>

      </div>

      {message && (
        <p
          className={`mt-4 text-center text-sm transition-all duration-500 ${
            success ? 'text-green-400 animate-fade-in-up' : 'text-red-400 animate-fade-in-up'
          }`}
        >
          {message}
        </p>
      )}
    </form>

  </div>
</div>





        {/* Divider */}
        <div className="border-t border-slate-700/50 my-8"></div>









        {/* Footer Content */}
     <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

  {/* About */}
  <div className="animate-fade-in-left space-y-3" style={{ animationDelay: '0.2s' }}>
    <h4 className="text-lg font-semibold text-cyan-400 mb-2">About Me</h4>

    <p className="text-gray-400 text-sm leading-relaxed">
      I’m a passionate full-stack developer focused on building modern, high-performance web applications with clean design and scalable architecture.
    </p>

    <p className="text-gray-500 text-xs">
      Turning ideas into digital experiences ✨
    </p>

    <div className="h-1 w-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mt-2"></div>
  </div>

  {/* Quick Links */}
  <div className="animate-fade-in-up space-y-3" style={{ animationDelay: '0.3s' }}>
    <h4 className="text-lg font-semibold text-cyan-400 mb-2">Explore</h4>

    <ul className="space-y-2 text-sm">
      {['Home', 'Experience', 'Skills', 'Projects', 'Contact'].map((item) => (
        <li key={item}>
          <a
            href={`#${item.toLowerCase()}`}
            className="text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:translate-x-1 inline-block"
          >
            → {item}
          </a>
        </li>
      ))}
    </ul>
  </div>

  {/* Social Links */}
  <div className="animate-fade-in-right space-y-4" style={{ animationDelay: '0.4s' }}>
    <h4 className="text-lg font-semibold text-cyan-400 mb-2">Let’s Connect</h4>

    <p className="text-gray-400 text-sm">
      Feel free to reach out for collaboration, freelance work, or just a friendly chat.
    </p>
 <div className="flex space-x-4 pt-2">

    {/* GitHub */}
    <a href="https://github.com/zobbygit" target="_blank" rel="noopener noreferrer" className="group">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800/70 border border-slate-700 text-gray-400
  transition-all duration-300
  group-hover:text-cyan-400
  group-hover:border-cyan-400
  group-hover:shadow-[0_0_15px_rgba(34,211,238,0.6)]
  group-hover:-translate-y-1">
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
        </svg>
      </div>
    </a>

    {/* LinkedIn */}
    <a href="https://www.linkedin.com/in/zohaib-aslam-245a40253" target="_blank" rel="noopener noreferrer" className="group">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800/70 border border-slate-700 text-gray-400
  transition-all duration-300
  group-hover:text-cyan-400
  group-hover:border-cyan-400
  group-hover:shadow-[0_0_15px_rgba(34,211,238,0.6)]
  group-hover:-translate-y-1">
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.81 0-9.728h3.554v1.375c.427-.659 1.191-1.597 2.897-1.597 2.117 0 3.704 1.385 3.704 4.362v5.588zM5.337 8.855c-1.144 0-1.915-.759-1.915-1.71 0-.956.771-1.71 1.958-1.71 1.187 0 1.914.754 1.942 1.71 0 .951-.755 1.71-1.985 1.71zm1.582 11.597H3.635V9.724h3.284v10.728z"/>
        </svg>
      </div>
    </a>

    {/* Instagram */}
    <a href="https://www.instagram.com/ig_zohaib_25" target="_blank" rel="noopener noreferrer" className="group">
      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800/70 border border-slate-700 text-gray-400
  transition-all duration-300
  group-hover:text-cyan-400
  group-hover:border-cyan-400
  group-hover:shadow-[0_0_15px_rgba(34,211,238,0.6)]
  group-hover:-translate-y-1">
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.688.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
      </div>
    </a>

  </div>


  </div>

</div>




        {/* Copyright */}
        <div className="border-t border-slate-700/50 pt-8 text-center text-gray-500 text-sm">
      <p>
  &copy; {new Date().toDateString()} | Zohaib| All rights reserved. | Designed & Developed with ❤️
</p>

        </div>
      </div>
    </footer>
  );
}