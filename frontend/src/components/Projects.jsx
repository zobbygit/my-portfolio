import { useState } from 'react';



export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Zoh AI',
      description: 'A modern full-stack SaaS AI platform offering real-time tools for content generation,image creation,background removal and more Built with React + Vite and Tailwind on the frontend, Node.js & Express backend,Postgres database,Clerk,& Cloudinary.',
      technologies: ['React', 'Node.js', 'MongoDB','Express','Clerk' ,'Prebuild-Ui'],
      image: '🤖',
      link: 'https://github.com/zobbygit/Zoh_Ai',
      features: ['Product catalog', 'User authentication', 'Payment processing', 'Ai Features']
    },

{
  id: 2,
  title: 'StayCation – Hotel Booking Platform',
  description: 'Full-stack hotel booking platform with secure payments, authentication, media uploads, and real-time booking management for guests and property owners.',
  technologies: [
    'React',
    'Node.js',
    'Express',
    'MongoDB',
    'Stripe',
    'Clerk Auth',
    'Cloudinary',
    'Nodemailer'
  ],
  image: '🏨',
  link: 'https://github.com/zobbygit/StayCation',
  features: [
    'Secure hotel booking & availability system',
    'Stripe payment gateway integration',
    'Authentication & user management with Clerk',
    'Cloudinary image upload for property listings',
    'Automated booking confirmation emails',
    'Guest dashboard for booking history & status',
    'Owner dashboard for room & reservation management',
    'Real-time booking updates',
    'Role-based access control',
    'Responsive UI for mobile & desktop'
  ]
},

    {
      id: 3,
      title: 'Bank Management System',
      description: 'A Java-based desktop banking application built with Swing and MySQL, featuring secure login/signup, account management, balance inquiry, deposits, withdrawals, fund transfers, transaction history, and admin controls.',
      technologies: ['Java', 'Swing', 'JDBC', 'MySql'],
      image: '🏢',
      link: 'https://github.com/zobbygit/Bank_management_system',
      features: ['Real-time updates', 'Team collaboration', 'Task scheduling', 'Progress tracking']
    },
    {
      id: 4,
      title: 'Jarvis',
      description: 'A smart virtual assistant built with Python that can execute tasks, respond to voice commands, and provide real-time information. Features include automation of daily tasks, voice interaction, and integration with system applications.',
      technologies: ['Python', 'Voice Ai', 'Automation'],
      image: '👾',
      link: 'https://github.com/zobbygit/JARVIS',
      features: ['Clean Codebase', 'Messaging', 'Voice Control and Automation', 'Weather Features']
    },
    {
      id: 5,
      title: 'Expense Tracker App',
      description: 'A MERN stack application that helps users efficiently track and manage their expenses. Features a clean React frontend, secure Node.js/Express backend, and MongoDB database to store and categorize transactions.',
      technologies: ['React', 'Mongo Db', 'Express', 'Node js'],
      image: '💸',
      link: 'https://github.com/zobbygit/Expense-Tracker',
      features: ['Real-time expense monitoring', 'Clean data storage', 'Sign up/in authentication', 'Expense Alerts']
    },


{
  id: 6,
  title: 'Portfolio ',
  description: 'Full-stack newsletter subscription and contact email system integrated into my portfolio with secure email delivery and database storage.',
  technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'EmailJS'],
  image: '📩',
  link: 'https://github.com/my-portfolio',
  features: [
    'Newsletter subscription system',
    'Contact form email delivery',
    'MongoDB subscriber storage',
    'Spam protection & validation',
    'Environment variable security',
    'Admin-ready email templates'
  ]
}

  ];

  return (


<>
<style>{`
@keyframes floatFast {
  0%   { transform: translateY(0px); }
  25%  { transform: translateY(-20px); }
  50%  { transform: translateY(0px); }
  75%  { transform: translateY(10px); }
  100% { transform: translateY(0px); }
}
`}</style>

    <section id="projects" className="py-20 px-4 bg-gradient-to-b from-transparent to-slate-900/30">
      <div className="max-w-6xl mx-auto">
    

        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-down">


       <h2 className="text-4xl md:text-5xl font-extrabold mb-4 relative inline-block">
  <span className="gradient-text drop-shadow-[0_0_15px_rgba(34,211,238,0.6)] animate-pulse-glow">
   Featured Projects
  </span>
  <span className="absolute left-0 -bottom-2 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-fade-in-up"></span>
</h2>



          <p className="text-gray-400 text-lg">Showcase of my latest work and accomplishments</p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (



<div
  key={project.id}
  onClick={() => setSelectedProject(project)}
  style={{
    animation: `floatFast ${2 + index * 0.2}s linear infinite`,
    animationDelay: `${index * 0.1}s`
  }}
  className="
    animate-fade-in-up
    card p-6 cursor-pointer group h-full
    relative overflow-hidden
    transition-all duration-300
    hover:scale-[1.07]
    hover:-rotate-2
    hover:shadow-[0_35px_90px_rgba(34,211,238,0.45)]
  "







  
>
  

 <div className="
    absolute inset-0 rounded-xl
    opacity-0 group-hover:opacity-100
    transition duration-500 pointer-events-none
    bg-gradient-to-r from-cyan-400/30 via-blue-500/30 to-cyan-400/30
    blur-xl
  "></div>

  {/* ===== SHIMMER LAYER ===== */}
  <div className="
    absolute inset-0
    bg-gradient-to-r from-transparent via-white/10 to-transparent
    translate-x-[-100%] group-hover:translate-x-[100%]
    transition-transform duration-700 pointer-events-none
  "></div>

{/* Glow effect */}





              {/* Image/Icon */}
<div className="text-6xl mb-4 transition-transform duration-700
group-hover:scale-125 group-hover:-rotate-12">
                {project.image}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.slice(0, 2).map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2 py-1 bg-cyan-500/20 text-cyan-300 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 2 && (
                  <span className="text-xs px-2 py-1 bg-slate-700/50 text-gray-400 rounded-md">
                    +{project.technologies.length - 2} more
                  </span>
                )}
              </div>

              {/* Links */}
              <div className="flex gap-3 pt-4 border-t border-slate-700/50">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-3 py-2 bg-slate-700/50 hover:bg-cyan-500/20 text-cyan-400 text-sm font-semibold rounded-md transition-colors duration-300 text-center"
                >
                  Code
                </a>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProject(project);
                  }}
                  className="flex-1 px-3 py-2 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 text-sm font-semibold rounded-md transition-colors duration-300"
                >
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
            <div className="glass rounded-lg max-w-lg w-full p-8 max-h-96 overflow-y-auto animate-slide-up">
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>

              {/* Content */}
              <div className="text-5xl mb-4">{selectedProject.image}</div>
              <h3 className="text-2xl font-bold text-white mb-2">{selectedProject.title}</h3>
              <p className="text-gray-300 mb-4">{selectedProject.description}</p>

              {/* Features */}
              <h4 className="text-lg font-semibold text-cyan-400 mb-2">Key Features</h4>
              <ul className="space-y-1 mb-6 text-gray-300 text-sm">
                {selectedProject.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="text-cyan-400">✓</span> {feature}
                  </li>
                ))}
              </ul>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-md text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all text-center"
                >
                  View Code
                </a>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 border border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500/10 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
    </>
  );
}




// import React, { useEffect, useState } from "react";

// export default function Projects() {
//   const [visibleCards, setVisibleCards] = useState([]);
//   const [hoveredCard, setHoveredCard] = useState(null);

//   const projectData = [
//     {
//       title: "AI-Powered Portfolio",
//       description:
//         "The very site you're visiting! This MERN stack application features a fully interactive personal AI assistant built using the Google Gemini API, interact, and experience AI-powered responses seamlessly",
//       repoLink: "https://github.com/zobbygit/Mern-Portfolio",
//       tech: ["React", "Node.js", "MongoDB", "Gemini API"],
//     },
//     {
//   title: "Zoh AI",
//   description: "A modern full-stack SaaS AI platform offering real-time tools for content generation,image creation,background removal and more Built with React + Vite and Tailwind on the frontend, Node.js & Express backend,Postgres database,Clerk,& Cloudinary.",
//   repoLink: "https://github.com/zobbygit/Zoh_Ai", // change if different
//   tech: [
//     "React",
//     "Mongo db",
//     "Node.js",
//     "Express",
    
//   ],
// },




//     {
//       title: "Expense Tracker",
//       description:
//         "A MERN stack application that helps users efficiently track and manage their expenses. Features a clean React frontend, secure Node.js/Express backend, and MongoDB database to store and categorize transactions.",
//       repoLink: "https://github.com/zobbygit/Expense-Tracker",
//       tech: ["React", "Express", "MongoDB", "Charts"],
//     },
//     {
//       title: "Event Planner",
//       description: "A MERN stack application that enables users to plan, organize, and manage events seamlessly.It features a user-friendly React frontend, a robust Node.js/Express backend, and MongoDB for storing event details and helping users manage event efficiently.",
//       repoLink: "https://github.com/zobbygit/Event-Planning",
//       tech: ["MERN", "MongoDB", "Express"],
//     },
//     {
//       title: "Jarvis",
//       description: "A smart virtual assistant built with Python that can execute tasks, respond to voice commands, and provide real-time information. Features include automation of daily tasks, voice interaction, and integration with system applications.",
//       repoLink: "https://github.com/zobbygit/JARVIS",
//       tech: ["Python", "Voice AI", "Automation"],
//     },
//  {
//   title: "Bank Management System",
//   description:
//     "A Java-based desktop banking application built with Swing and MySQL, featuring secure login/signup, account management, balance inquiry, deposits, withdrawals, fund transfers, transaction history, and admin controls.",
//   repoLink: "https://github.com/zobbygit/Bank_management_system", // change if needed
//   tech: ["Java", "Swing", "JDBC", "MySQL"],
// }

//   ];

//   // Stagger card animations on load
//   useEffect(() => {
//     const timers = projectData.map((_, index) =>
//       setTimeout(() => {
//         setVisibleCards(prev => [...prev, index]);
//       }, index * 200)
//     );

//     return () => timers.forEach(clearTimeout);
//   }, []);

//   const styles = {
//     section: {
//       padding: "80px 20px",
//       background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)",
//       color: "#ffffff",
//       fontFamily: "'Inter', 'Segoe UI', sans-serif",
//       position: "relative",
//       overflow: "hidden",
//     },
//     backgroundPattern: {
//       position: "absolute",
//       top: 0,
//       left: 0,
//       width: "100%",
//       height: "100%",
//       backgroundImage: `
//         radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.1) 0%, transparent 50%),
//         radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.1) 0%, transparent 50%),
//         radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.1) 0%, transparent 50%)
//       `,
//       zIndex: 0,
//     },
//     container: {
//       maxWidth: "1200px",
//       margin: "0 auto",
//       position: "relative",
//       zIndex: 1,
//     },
//     heading: {
//       fontSize: "3.5rem",
//       fontWeight: 800,
//       textAlign: "center",
//       marginBottom: "60px",
//       background: "linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%)",
//       WebkitBackgroundClip: "text",
//       WebkitTextFillColor: "transparent",
//       backgroundSize: "300% 300%",
//       animation: "gradientShift 6s ease infinite",
//       position: "relative",
//       letterSpacing: "2px",
//     },
//     projectsGrid: {
//       display: "grid",
//       gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
//       gap: "40px",
//       perspective: "1000px"
//     },
//     projectCard: (index, isVisible, isHovered) => ({
//       backgroundColor: "rgba(22, 27, 34, 0.8)",
//       backdropFilter: "blur(10px)",
//       borderRadius: "20px",
//       padding: "30px",
//       border: "1px solid rgba(255, 255, 255, 0.1)",
//       boxShadow: isHovered 
//         ? "0 25px 50px rgba(102, 126, 234, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
//         : "0 15px 35px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
//       transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
//       transform: isVisible 
//         ? isHovered 
//           ? "translateY(-15px) scale(1.03) rotateX(5deg)"
//           : "translateY(0) scale(1)"
//         : "translateY(50px) scale(0.8)",
//       opacity: isVisible ? 1 : 0,
//       animation: isVisible 
//         ? `heartbeat 4s ease-in-out infinite ${index * 0.5}s, subtleFloat 6s ease-in-out infinite ${index * 0.3}s`
//         : "none",
//       position: "relative",
//       overflow: "hidden",
//     }),
//     cardGlow: {
//       position: "absolute",
//       top: 0,
//       left: 0,
//       right: 0,
//       bottom: 0,
//       background: "linear-gradient(45deg, transparent, rgba(102, 126, 234, 0.1), transparent)",
//       borderRadius: "20px",
//       opacity: 0,
//       transition: "opacity 0.3s ease",
//       pointerEvents: "none",
//     },
//     projectNumber: {
//       position: "absolute",
//       top: "20px",
//       right: "20px",
//       width: "40px",
//       height: "40px",
//       borderRadius: "50%",
//       background: "linear-gradient(135deg, #667eea, #764ba2)",
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//       fontSize: "1.2rem",
//       fontWeight: "bold",
//       boxShadow: "0 0 20px rgba(102, 126, 234, 0.5)",
//       animation: "pulse 2s ease-in-out infinite",
//     },
//     projectTitle: {
//       fontSize: "1.8rem",
//       marginBottom: "15px",
//       fontWeight: 700,
//       background: "linear-gradient(135deg, #f093fb, #f5576c, #4facfe)",
//       WebkitBackgroundClip: "text",
//       WebkitTextFillColor: "transparent",
//       backgroundSize: "200% 200%",
//       animation: "titleShimmer 3s ease-in-out infinite",
//       lineHeight: "1.3",
//     },
//     projectDesc: {
//       fontSize: "1.05rem",
//       lineHeight: "1.7",
//       marginBottom: "25px",
//       color: "rgba(255, 255, 255, 0.85)",
//       textAlign: "justify",
//     },
//     techStack: {
//       display: "flex",
//       flexWrap: "wrap",
//       gap: "8px",
//       marginBottom: "25px",
//     },
//     techBadge: {
//       padding: "6px 12px",
//       backgroundColor: "rgba(102, 126, 234, 0.2)",
//       border: "1px solid rgba(102, 126, 234, 0.3)",
//       borderRadius: "15px",
//       fontSize: "0.85rem",
//       color: "#a8b2d1",
//       fontWeight: "500",
//       transition: "all 0.3s ease",
//     },
//     githubButton: (isHovered) => ({
//       textDecoration: "none",
//       color: "#ffffff",
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//       gap: "10px",
//       padding: "15px 25px",
//       borderRadius: "12px",
//       background: isHovered 
//         ? "linear-gradient(135deg, #667eea, #764ba2)"
//         : "linear-gradient(135deg, rgba(102, 126, 234, 0.8), rgba(118, 75, 162, 0.8))",
//       fontWeight: 600,
//       fontSize: "1rem",
//       transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
//       border: "1px solid rgba(255, 255, 255, 0.2)",
//       boxShadow: isHovered 
//         ? "0 10px 30px rgba(102, 126, 234, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)"
//         : "0 5px 15px rgba(0,0,0,0.3)",
//       transform: isHovered ? "translateY(-2px) scale(1.02)" : "translateY(0) scale(1)",
//       backdropFilter: "blur(10px)",
//     }),
//     pulsingDot: {
//       position: "absolute",
//       top: "-5px",
//       right: "-5px",
//       width: "10px",
//       height: "10px",
//       borderRadius: "50%",
//       background: "#00ff88",
//       animation: "dotPulse 2s ease-in-out infinite",
//       boxShadow: "0 0 10px #00ff88",
//     }
//   };

//   const handleCardHover = (index, isHovering) => {
//     setHoveredCard(isHovering ? index : null);
//   };

//   return (
//     <section id="projects" style={styles.section}>
//       <div style={styles.backgroundPattern} />
      
//       <div style={styles.container}>
//        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 relative inline-block text-center">
//   <span className="gradient-text drop-shadow-[0_0_15px_rgba(34,211,238,0.6)] animate-pulse-glow">
//    Featured Projects
//    </span>
//    <span className="absolute left-0 -bottom-2 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-fade-in-up"></span>
//  </h2>

// <br /> <br />
//         <div style={styles.projectsGrid}>
//           {projectData.map((project, index) => {
//             const isVisible = visibleCards.includes(index);
//             const isHovered = hoveredCard === index;
            
//             return (
//               <div
//                 key={index}
//                 style={styles.projectCard(index, isVisible, isHovered)}
//                 onMouseEnter={() => handleCardHover(index, true)}
//                 onMouseLeave={() => handleCardHover(index, false)}
//               >
//                 {/* Card Glow Effect */}
//                 <div 
//                   style={{
//                     ...styles.cardGlow,
//                     opacity: isHovered ? 1 : 0
//                   }} 
//                 />
                
//                 {/* Project Number */}
//                 <div style={styles.projectNumber}>
//                   {index + 1}
//                 </div>
                
//                 {/* Pulsing Dot */}
//                 <div style={styles.pulsingDot} />
                
//                 <h3 style={styles.projectTitle}>{project.title}</h3>
                
//                 <div style={styles.techStack}>
//                   {project.tech.map((tech, techIndex) => (
//                     <span 
//                       key={techIndex} 
//                       style={{
//                         ...styles.techBadge,
//                         transform: isHovered ? 'scale(1.05)' : 'scale(1)',
//                         backgroundColor: isHovered ? 'rgba(102, 126, 234, 0.3)' : 'rgba(102, 126, 234, 0.2)'
//                       }}
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
                
//                 <p style={styles.projectDesc}>{project.description}</p>
                
//                 <a
//                   href={project.repoLink}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   style={styles.githubButton(isHovered)}
//                 >
//                   <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
//                     <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
//                   </svg>
//                   View Repository
//                 </a>
//               </div>
//             );
//           })}
//         </div>
//       </div>
      
//       <style>
//         {`
//           @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
          
//           @keyframes heartbeat {
//             0%, 100% { transform: scale(1); }
//             14% { transform: scale(1.02); }
//             28% { transform: scale(1); }
//             42% { transform: scale(1.02); }
//             70% { transform: scale(1); }
//           }
          
//           @keyframes subtleFloat {
//             0%, 100% { transform: translateY(0px); }
//             50% { transform: translateY(-8px); }
//           }
          
//           @keyframes gradientShift {
//             0%, 100% { background-position: 0% 50%; }
//             50% { background-position: 100% 50%; }
//           }
          
//           @keyframes titleShimmer {
//             0%, 100% { background-position: 0% 50%; }
//             50% { background-position: 100% 50%; }
//           }
          
//           @keyframes pulse {
//             0%, 100% { 
//               box-shadow: 0 0 20px rgba(102, 126, 234, 0.5);
//               transform: scale(1);
//             }
//             50% { 
//               box-shadow: 0 0 30px rgba(102, 126, 234, 0.8);
//               transform: scale(1.1);
//             }
//           }
          
//           @keyframes dotPulse {
//             0%, 100% { 
//               opacity: 1;
//               transform: scale(1);
//               box-shadow: 0 0 10px #00ff88;
//             }
//             50% { 
//               opacity: 0.7;
//               transform: scale(1.3);
//               box-shadow: 0 0 20px #00ff88;
//             }
//           }
          
//           @keyframes underlineGlow {
//             0%, 100% { opacity: 0.5; transform: translateX(-50%) scaleX(1); }
//             50% { opacity: 1; transform: translateX(-50%) scaleX(1.2); }
//           }
          
//           /* Smooth scroll behavior */
//           html {
//             scroll-behavior: smooth;
//           }
          
//           /* Enhanced focus states */
//           a:focus-visible {
//             outline: 2px solid #667eea;
//             outline-offset: 2px;
//           }
//         `}
//       </style>
//     </section>
//   );
// };

