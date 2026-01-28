// import { useState } from 'react';
// import { Link } from 'react-router-dom';

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const navLinks = [
//     { name: 'Home', href: '#home' },
//     { name: 'Experience', href: '#experience' },
//     { name: 'Skills', href: '#skills' },
//     { name: 'Projects', href: '#projects' },
//     { name: 'Contact', href: '#contact' },
//   ];


// const scrollToContact = () => {
//   const el = document.getElementById('contact');
//   if (el) el.scrollIntoView({ behavior: 'smooth' });
// };

//   return (
//     <nav className="fixed top-0 w-full z-50 glass border-b border-cyan-500/20">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
          
//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <a href="#" className="text-2xl font-bold gradient-text animate-glow">
//               Portfolio
//             </a>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex space-x-8">
//             {navLinks.map((link, idx) => (
//               <a
//                 key={idx}
//                 href={link.href}
//                 className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 relative group"
//               >
//                 {link.name}
//                 <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-500 group-hover:w-full transition-all duration-300"></span>
//               </a>
//             ))}
//           </div>

//           {/* CTA Button */}
//           <div className="hidden md:block">
//             <button  onClick={scrollToContact} className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300">
//               Get in Touch
//             </button>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="md:hidden text-gray-300 hover:text-cyan-400"
//           >
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
//             </svg>
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         {isOpen && (
//           <div className="md:hidden pb-4 space-y-2 animate-fade-in-down">
//             {navLinks.map((link, idx) => (
//               <a
//                 key={idx}
//                 href={link.href}
//                 onClick={() => setIsOpen(false)}
//                 className="block px-4 py-2 text-gray-300 hover:text-cyan-400 hover:bg-slate-700/50 rounded-lg transition-all duration-300"
//               >
//                 {link.name}
//               </a>
//             ))}
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// }












import { useState } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark } = useTheme();

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];
 const scrollToContact = () => {
  const el = document.getElementById('contact');
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};
 const scrollToCosmos = () => {
  const el = document.getElementById('cosmos');
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};
  return (
   <nav className={`fixed top-0 w-full z-50 transition-colors duration-300 
${isDark ? 'bg-slate-900/80 border-cyan-500/20' : 'bg-slate-200/90 border-slate-300'} 
border-b backdrop-blur-md`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className={`text-2xl font-bold animate-glow ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>
              Portfolio
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className={`transition-colors duration-300 relative group ${isDark ? 'text-gray-300 hover:text-cyan-400' : 'text-slate-700 hover:text-cyan-600'}`}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* CTA Button & Theme Toggle */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <button onClick={scrollToContact} className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300">
              Get in Touch
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden transition-colors ${isDark ? 'text-gray-300 hover:text-cyan-400' : 'text-slate-700 hover:text-cyan-600'}`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className={`md:hidden pb-4 space-y-2 animate-fade-in-down ${isDark ? 'bg-slate-800/50' : 'bg-blue-100/50'}`}>
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2 rounded-lg transition-all duration-300 ${isDark ? 'text-gray-300 hover:text-cyan-400 hover:bg-slate-700/50' : 'text-slate-700 hover:text-cyan-600 hover:bg-blue-200/50'}`}
              >
                {link.name}
              </a>
            ))}
            <div className="px-4 py-2 flex items-center gap-2">
              <span className={isDark ? 'text-gray-300' : 'text-slate-700'}></span>
              <ThemeToggle /> <span className='text-blue-400'>Light</span>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}