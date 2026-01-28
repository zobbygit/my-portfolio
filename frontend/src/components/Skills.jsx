

import { useState } from 'react';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaJava,
  FaGitAlt, FaGithub, FaNpm
} from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiMysql, SiPostman, SiVercel, SiRender } from 'react-icons/si';
import { SiNextdotjs } from 'react-icons/si';
import { SiExpress } from 'react-icons/si';

import {   FaLayerGroup } from 'react-icons/fa';
import {  SiPostgresql, SiApollographql } from 'react-icons/si';


export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('frontend');

const skillIcons = {
  HTML: <FaHtml5 className="text-orange-500" />,
  CSS: <FaCss3Alt className="text-blue-500" />,
  JavaScript: <FaJs className="text-yellow-400" />,
  'React.js': <FaReact className="text-cyan-400" />,
  'Tailwind CSS': <SiTailwindcss className="text-sky-400" />,
  'Node.js': <FaNodeJs className="text-green-500" />,
  Python: <FaPython className="text-yellow-300" />,
  Java: <FaJava className="text-red-500" />,
  MongoDB: <SiMongodb className="text-green-600" />,
  MySQL: <SiMysql className="text-blue-600" />,
  Git: <FaGitAlt className="text-orange-600" />,
  GitHub: <FaGithub className="text-gray-400" />,
  Postman: <SiPostman className="text-orange-400" />,
  Vercel: <SiVercel className="text-black dark:text-white" />,
  Render: <SiRender className="text-indigo-400" />,
  NPM: <FaNpm className="text-red-600" />,
  'Next.js': <SiNextdotjs className="text-slate-900 dark:text-white" />,
'Express.js': <SiExpress className="text-gray-300 dark:text-white" />,

  // Tech Stacks
'MERN Stack': (
  <div className="flex justify-center gap-1 text-cyan-400 text-2xl">
    <FaReact />
    <FaNodeJs className="text-green-500" />
    <SiMongodb className="text-green-600" />
  </div>
),

'PERN Stack': (
  <div className="flex justify-center gap-1 text-blue-500 text-2xl">
    <FaReact />
    <FaNodeJs className="text-green-500" />
    <SiPostgresql className="text-blue-600" />
  </div>
),

'Full Stack Development': (
  <FaLayerGroup className="text-purple-500 text-3xl" />
),

'REST API Design': (
  <SiApollographql className="text-pink-500 text-3xl" />
),

'Web Architecture': (
  <FaLayerGroup className="text-indigo-500 text-3xl" />
),


};
const skillLevels = {
  HTML: 90,
  CSS: 85,
'Next.js': 90,
  JavaScript: 90,
  'React.js': 85,
  'Tailwind CSS': 90,
  'Node.js': 80,
  'Express.js': 85,
  Python: 75,
  Java: 70,
  MongoDB: 80,
  MySQL: 75,
  Git: 85,
  GitHub: 85,
  Postman: 75,
  Vercel: 70,
  Render: 65,
  NPM: 80,
  'MERN Stack': 90,
'PERN Stack': 85,
'Full Stack Development': 90,
'REST API Design': 85,
'Web Architecture': 80,
};



  const skillCategories = {
    frontend: {
      title: 'Frontend',
      icon: '🎨',
      skills: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Tailwind CSS', 'Next.js']
    },
    backend: {
      title: 'Backend',
      icon: '⚙️',
      skills: ['Node.js', 'Express.js', 'Python', 'Java', 'REST APIs', 'Server Architecture']
    },
    database: {
      title: 'Database',
      icon: '🗄️',
      skills: ['MongoDB', 'MySQL', 'Data Modeling', 'Indexing', 'Query Optimization', 'MongoDB Atlas']
    },
    tools: {
      title: 'Tools & Deployment',
      icon: '🛠️',
      skills: ['Git', 'GitHub', 'Postman', 'Vercel', 'Render', 'GitHub Pages', 'NPM']
    },
    stacks: {
      title: 'Tech Stacks',
      icon: '📚',
      skills: ['MERN Stack', 'PERN Stack', 'Full Stack Development', 'REST API Design', 'Web Architecture','System Design']
    }
  };

  const categories = Object.keys(skillCategories);

  return (

<>
<style>{`
@keyframes floatFast {
  0% { transform: translateY(0px); }
  25% { transform: translateY(-25px); }
  50% { transform: translateY(0px); }
  75% { transform: translateY(15px); }
  100% { transform: translateY(0px); }
}
`}</style>


    <section id="skills" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-down">


   <h2 className="text-4xl md:text-5xl font-extrabold mb-4 relative inline-block">
  <span className="gradient-text drop-shadow-[0_0_15px_rgba(34,211,238,0.6)] animate-pulse-glow">
Technical Skills
  </span>
  <span className="absolute left-0 -bottom-2 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-fade-in-up"></span>
</h2>



          <p className="text-gray-400 text-lg">Technologies and tools I work with</p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/50'
                  : 'bg-slate-800/50 text-gray-300 border border-slate-700 hover:border-cyan-500/50'
              }`}
            >
              {skillCategories[category].icon} {skillCategories[category].title}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {skillCategories[activeCategory].skills.map((skill, index) => (


<div
  key={index}
  className="card p-6 text-center cursor-pointer group relative hover:scale-105 transition-all duration-300 hover:shadow-[0_0_25px_rgba(34,211,238,0.35)]"
>
  {/* Tooltip */}
  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition pointer-events-none">
    {skill}
  </div>

  {/* Icon */}
  <div className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-300">
    {skillIcons[skill] || '⚡'}
  </div>

  {/* Name */}
  <h3 className="text-lg font-semibold text-cyan-400 group-hover:text-white transition-colors duration-300 mb-2">
    {skill}
  </h3>

  {/* Progress Bar */}
  <div className="w-full bg-slate-700/40 rounded-full h-2 overflow-hidden">
    <div
      className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-700"
      style={{ width: `${skillLevels[skill] || 70}%` }}
    ></div>
  </div>
</div>






            ))}
          </div>
        </div>

        {/* Proficiency Info */}
<div
  className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in-up"
  style={{ animationDelay: '0.4s' }}
>
  {[
    {
      title: '⚡ Primary Skills',
      color: 'cyan',
      border: 'border-cyan-500',
      shadow: 'rgba(34,211,238,0.45)',
      text: 'MERN Stack, PERN Stack, scalable full-stack systems using modern JavaScript & Python.'
    },
    {
      title: '📈 Learning & Growing',
      color: 'blue',
      border: 'border-blue-500',
      shadow: 'rgba(59,130,246,0.45)',
      text: 'Advanced system design, cloud-native deployment, performance tuning, and backend optimization.'
    },
    {
      title: '🧠 Engineering Mindset',
      color: 'purple',
      border: 'border-purple-500',
      shadow: 'rgba(168,85,247,0.45)',
      text: 'Writing clean, maintainable code with strong architecture, design patterns, and scalability in mind.'
    },
    {
      title: '🧩 Problem Solving',
      color: 'emerald',
      border: 'border-emerald-500',
      shadow: 'rgba(16,185,129,0.45)',
      text: 'Strong foundation in data structures, algorithms, debugging, and building efficient real-world solutions.'
    }
  ].map((card, index) => (
    <div
      key={index}
      style={{
        animation: `floatFast ${2 + index * 0.25}s linear infinite`,
        animationDelay: `${index * 0.15}s`
      }}
      className={`
        card p-6 relative overflow-hidden group h-full
        border-l-4 ${card.border}
        transition-all duration-300
        hover:scale-[1.07]
        hover:-rotate-1
        --tw-shadow: 0 35px 90px rgba(34,211,238,0.35);
      `}
    >
      {/* Glow layer */}
      <div
        className={`
          absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100
          transition duration-500 pointer-events-none blur-xl
          bg-gradient-to-r from-${card.color}-400/30 via-${card.color}-500/30 to-${card.color}-400/30
        `}
      ></div>

      {/* Shimmer layer */}
      <div className="
        absolute inset-0
        bg-gradient-to-r from-transparent via-white/10 to-transparent
        translate-x-[-100%] group-hover:translate-x-[100%]
        transition-transform duration-700 pointer-events-none
      "></div>

      {/* Content */}
      <h4 className={`text-lg font-semibold text-${card.color}-400 mb-2`}>
        {card.title}
      </h4>

      <p className="text-gray-300 text-sm leading-relaxed">
        {card.text}
      </p>
    </div>
  ))}
</div>



        
      </div>
    </section>
    </>
  );
}
