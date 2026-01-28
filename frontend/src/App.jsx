import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import './index.css';

function AppContent() {
  const { isDark } = useTheme();

  return (
    <div className={`min-h-screen w-full transition-colors duration-300 ${isDark ? 'dark-mode' : 'light-mode'}`}>
      {/* Full Page Solar System Background */}
      <div className="fixed top-0 left-0 w-full h-screen z-0 pointer-events-none overflow-hidden">
        <SolarSystemBackground isDark={isDark} />
      </div>

      {/* Semi-transparent overlay for light mode to improve text visibility */}
      {!isDark && (
        <div className="fixed top-0 left-0 w-full h-full z-5 pointer-events-none bg-black/30"></div>
      )}

      {/* Content on top of solar system */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

function SolarSystemBackground({ isDark }) {
  return (
    <div className={`w-full h-screen flex items-center justify-center ${isDark ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' : 'bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-50'}`}>
      {/* Stars */}
      <div className="absolute inset-0 opacity-50">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 rounded-full animate-pulse ${isDark ? 'bg-white' : 'bg-slate-400'}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Solar System Container */}
      <div className="relative w-96 h-96 mx-auto">
        {/* Sun */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
          <div className="w-16 h-16 bg-gradient-to-br from-yellow-300 via-yellow-400 to-orange-500 rounded-full shadow-lg" 
            style={{
              boxShadow: '0 0 40px rgba(255, 200, 0, 0.8), 0 0 80px rgba(255, 150, 0, 0.4)'
            }}>
            <div className="absolute inset-0 rounded-full animate-pulse"
              style={{
                boxShadow: '0 0 50px rgba(255, 200, 0, 1), 0 0 100px rgba(255, 150, 0, 0.6)'
              }}
            ></div>
          </div>
        </div>

        {/* Orbit 1 - React */}
        <div className="absolute top-1/2 left-1/2 border border-cyan-500/30 rounded-full -translate-x-1/2 -translate-y-1/2" 
          style={{ width: '120px', height: '120px', animation: 'rotate 8s linear infinite' }}>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full shadow-lg hover:scale-125 transition-transform"
              style={{ boxShadow: '0 0 15px rgba(97, 218, 251, 0.6)' }}>
              <span className="text-xs font-bold text-slate-900 flex items-center justify-center h-full">R</span>
            </div>
          </div>
        </div>

        {/* Orbit 2 - Node.js */}
        <div className="absolute top-1/2 left-1/2 border border-green-500/30 rounded-full -translate-x-1/2 -translate-y-1/2" 
          style={{ width: '180px', height: '180px', animation: 'rotate 12s linear infinite reverse' }}>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-7 h-7 bg-gradient-to-br from-green-500 to-green-600 rounded-full shadow-lg hover:scale-125 transition-transform"
              style={{ boxShadow: '0 0 15px rgba(104, 160, 99, 0.6)' }}>
              <span className="text-xs font-bold text-white flex items-center justify-center h-full">N</span>
            </div>
          </div>
        </div>

        {/* Orbit 3 - MongoDB */}
        <div className="absolute top-1/2 left-1/2 border border-emerald-500/30 rounded-full -translate-x-1/2 -translate-y-1/2" 
          style={{ width: '240px', height: '240px', animation: 'rotate 16s linear infinite' }}>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-7 h-7 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full shadow-lg hover:scale-125 transition-transform"
              style={{ boxShadow: '0 0 15px rgba(19, 170, 82, 0.6)' }}>
              <span className="text-xs font-bold text-white flex items-center justify-center h-full">M</span>
            </div>
          </div>
        </div>

        {/* Orbit 4 - Tailwind */}
        <div className="absolute top-1/2 left-1/2 border border-cyan-500/30 rounded-full -translate-x-1/2 -translate-y-1/2" 
          style={{ width: '300px', height: '300px', animation: 'rotate 20s linear infinite reverse' }}>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-6 h-6 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full shadow-lg hover:scale-125 transition-transform"
              style={{ boxShadow: '0 0 15px rgba(6, 182, 212, 0.8)' }}>
              <span className="text-xs font-bold text-slate-900 flex items-center justify-center h-full">T</span>
            </div>
          </div>
        </div>

        {/* Orbit 5 - Express */}
        <div className="absolute top-1/2 left-1/2 border border-gray-500/30 rounded-full -translate-x-1/2 -translate-y-1/2" 
          style={{ width: '360px', height: '360px', animation: 'rotate 24s linear infinite' }}>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-6 h-6 bg-gradient-to-br from-gray-300 to-gray-500 rounded-full shadow-lg hover:scale-125 transition-transform"
              style={{ boxShadow: '0 0 15px rgba(229, 231, 235, 0.5)' }}>
              <span className="text-xs font-bold text-slate-900 flex items-center justify-center h-full">E</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes rotate {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;