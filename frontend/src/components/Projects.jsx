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
  link: 'https://github.com/zobbygit/my-portfolio',
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



