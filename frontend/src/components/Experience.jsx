export default function Experience() {
  const experiences = [
   
{
  id: 1,
  title: 'Secondary & Higher Secondary Education (10 & 12)',
  company: 'Ling Liang High School, Kolkata',
  duration: '10 th - 2020 , 12th - 2022',
  description: 'Completed Class 10 (ICSE) in 2020 and Class 12 (ISC) in 2022 with Physics, Chemistry, Mathematics, and Biology (PCMB). Built a strong academic foundation in science and problem-solving.',
  skills: ['Physics', 'Chemistry', 'Mathematics', 'Biology','English and Hindi','Problem Solving']
},

   
    {

      id: 2,
      title: 'Btech Information Technology Graduate',
      company: 'Narula Institute of Technology',
      duration: 'Graduation : June 2022-June 2026',
      description: 'Completed comprehensive coursework in web development, data structures, algorithms, and software engineering.',
      skills: ['DSA', 'Web Development', 'Databases', 'Software Engineering','Software Development','OOP',
'Operating Systems',
'Computer Networks',]
    },
    // {
    //   id: 2,
    //   title: 'Junior Full Stack Developer',
    //   company: 'Tech Company (Intern)',
    //   duration: 'Jan 2024 - Present',
    //   description: 'Developed and maintained full-stack applications using MERN stack. Collaborated with cross-functional teams to deliver high-quality solutions.',
    //   skills: ['React', 'Node.js', 'MongoDB', 'REST APIs']
    // },
    {
      id: 3,
      title: 'Web Development Freelancer',
      company: 'Free-Lancing',
      duration: 'Jan 2023 - Present',
      description: 'Built custom websites and web applications for various clients. Focused on creating responsive, fast, and beautiful user interfaces.',
      skills: ['MERN and PERN Stack', 'Responsive Design', 'Performance Optimization','React', 'Node.js', 'MongoDB', 'REST APIs','HTML5', 'CSS3', 'JavaScript']
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-gradient-to-b from-transparent to-slate-900/30">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-down">

<h2 className="text-4xl md:text-5xl font-extrabold mb-4 relative inline-block">
  <span className="gradient-text drop-shadow-[0_0_15px_rgba(34,211,238,0.6)] animate-pulse-glow">
 Experience & Education
  </span>
  <span className="absolute left-0 -bottom-2 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-fade-in-up"></span>
</h2>


          
          <p className="text-gray-400 text-lg">My professional journey and background</p>
        </div>

        {/* Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="animate-fade-in-up card p-6 md:p-8 border-l-4 border-cyan-500 hover:border-l-8 transition-all duration-300"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                  <p className="text-cyan-400 font-semibold text-lg">{exp.company}</p>
                </div>
                <span className="inline-block px-3 py-1 bg-cyan-500/20 border border-cyan-500/50 rounded-full text-cyan-300 text-sm font-semibold whitespace-nowrap">
                  {exp.duration}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-300 mb-4 leading-relaxed">
                {exp.description}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-slate-700/50 border border-slate-600 rounded-md text-sm text-gray-300 hover:border-cyan-500 hover:text-cyan-400 transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom accent */}
        <div className="mt-12 text-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <p className="text-gray-400 text-sm">
            Currently available for  All kinds of full-time opportunities and Exciting projects
          </p>
        </div>
      </div>
    </section>
  );
}