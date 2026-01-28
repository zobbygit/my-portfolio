import { useState, useEffect } from 'react';
import { useRef } from 'react';


export default function Hero() {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loop, setLoop] = useState(0);
  const heroRef = useRef(null);
const [tilt, setTilt] = useState({ x: 0, y: 0 });
const [isMobile, setIsMobile] = useState(false);

  const titles = ['Full Stack Developer', 'MERN Developer', 'Creative Coder', 'Tech Enthusiast'];

  useEffect(() => {
    let timeout;
    const currentText = titles[loop % titles.length];

    if (!isDeleting && text !== currentText) {
      timeout = setTimeout(() => setText(currentText.slice(0, text.length + 1)), 100);
    } else if (isDeleting && text !== '') {
      timeout = setTimeout(() => setText(text.slice(0, -1)), 50);
    } else if (text === currentText && !isDeleting) {
      timeout = setTimeout(() => setIsDeleting(true), 1500);
    } else if (text === '' && isDeleting) {
      setIsDeleting(false);
      setLoop(loop + 1);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, loop]);


useEffect(() => {
  const checkMobile = () => setIsMobile(window.innerWidth < 768);
  checkMobile();
  window.addEventListener('resize', checkMobile);
  return () => window.removeEventListener('resize', checkMobile);
}, []);

useEffect(() => {
  if (isMobile) return;

  const handleMove = (e) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX / innerWidth - 0.5) * 20;
    const y = (e.clientY / innerHeight - 0.5) * 20;
    setTilt({ x, y });
  };

  window.addEventListener('mousemove', handleMove);
  return () => window.removeEventListener('mousemove', handleMove);
}, [isMobile]);



  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden">

      {/* Futuristic Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>

      {/* Blob Background */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-blob animation-delay"></div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <span
            key={i}
            className="absolute block w-1 h-1 bg-cyan-400/40 rounded-full animate-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${5 + Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
    <div
  ref={heroRef}
  style={{
    transform: `rotateX(${isMobile ? 0 : -tilt.y}deg) rotateY(${isMobile ? 0 : tilt.x}deg) translateY(${isMobile ? 0 : -5}px)`,
    transition: 'transform 0.15s ease-out'
  }}
  className={`max-w-4xl mx-auto text-center relative z-10 ${
    isMobile ? 'animate-floatHeroMobile' : 'animate-floatHero'
  }`}
>

        <span className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-semibold mb-6">
          ✨ Welcome to my portfolio
        </span>

      <h1 className="text-5xl md:text-7xl pt-12 font-extrabold mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }} > Hi, I'm{' '} <span className="block md:inline gradient-text animate-pulse-glow drop-shadow-[0_0_25px_rgba(34,211,238,0.9)]"> Zohaib Aslam </span> </h1>

        {/* Typing */}
        <div className="text-2xl md:text-4xl font-semibold mb-8 h-16 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent animate-gradient-x">
          {text}<span className="animate-pulse">|</span>
        </div>

        <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto">
          I don’t just build websites — I engineer <span className="text-cyan-400 font-semibold">digital experiences</span>.
          <br />
          A 2026 Computer Science graduate crafting <span className="text-cyan-400 font-semibold">scalable</span>,
          <span className="text-cyan-400 font-semibold"> high-performance</span> applications where
          <span className="text-cyan-400 font-semibold"> technology meets design</span>.
        </p>

        {/* Buttons */}
        <div className="flex flex-col pb-14 sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className=" px-8 py-3 rounded-xl font-semibold text-white 
            bg-gradient-to-r from-cyan-500 to-blue-600 
            hover:shadow-[0_0_40px_rgba(34,211,238,0.8)]
            hover:scale-110 transition-all duration-500 animate-pulse-glow"
          >
            View My Work
          </a>

          <a
            href="#contact"
            className="px-8 py-3 rounded-xl border border-cyan-400 text-cyan-300 
            hover:bg-cyan-500/10 hover:shadow-[0_0_25px_rgba(34,211,238,0.6)]
            transition-all duration-500"
          >
            Get in Touch
          </a>
     
        </div>

        {/* Scroll Indicator */}
        <div className=" absolute bottom-6  left-1/2 -translate-x-1/2 animate-bounce">
     
          <svg className="w-6 h-6 text-cyan-400  " fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        .glass {
          background: rgba(255,255,255,0.05);
          backdrop-filter: blur(10px);
        }

        @keyframes blob {
          0%,100% { transform: translate(0,0) scale(1); }
          33% { transform: translate(30px,-50px) scale(1.1); }
          66% { transform: translate(-20px,20px) scale(0.9); }
        }

        .animate-blob { animation: blob 8s infinite; }
        .animation-delay { animation-delay: 3s; }

        @keyframes particle {
          0% { transform: translateY(0); opacity:0 }
          50% { opacity:1 }
          100% { transform: translateY(-120px); opacity:0 }
        }

        .animate-particle { animation: particle linear infinite; }

        @keyframes gradientX {
          0%{background-position:0%}
          100%{background-position:200%}
        }

        .animate-gradient-x {
          background-size:200%;
          animation: gradientX 3s linear infinite;
        }

        @keyframes floatHero {
  0%,100% { transform: translateY(0); }
  50% { transform: translateY(-14px); }
}

@keyframes floatHeroMobile {
  0%,100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
}

.animate-floatHero {
  animation: floatHero 6s ease-in-out infinite;
}

.animate-floatHeroMobile {
  animation: floatHeroMobile 8s ease-in-out infinite;
}
      `}</style>
    </section>
  );
}
