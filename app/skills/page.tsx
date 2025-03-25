import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGithub } from 'react-icons/fa';

const skills = [
  { name: 'HTML', icon: <FaHtml5 />, color: 'text-orange-500', description: 'Markup language for structuring web content.' },
  { name: 'CSS', icon: <FaCss3Alt />, color: 'text-blue-500', description: 'Stylesheet language for designing web pages.' },
  { name: 'JavaScript', icon: <FaJsSquare />, color: 'text-yellow-500', description: 'Programming language for web development.' },
  { name: 'React', icon: <FaReact />, color: 'text-blue-400', description: 'JavaScript library for building user interfaces.' },
  { name: 'Node.js', icon: <FaNodeJs />, color: 'text-green-500', description: 'JavaScript runtime for server-side development.' },
  { name: 'GitHub', icon: <FaGithub />, color: 'text-gray-800', description: 'Platform for version control and collaboration.' },
];

export default function Skills() {
  return (
    <div className='bg-gradient-to-r from-blue-400 to-green-400 min-h-screen flex items-center justify-center'>
      <div className="container mx-auto p-8">
        <h1 className="text-5xl font-bold text-center mb-8 text-black">My Skills</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="skill-card border p-6 rounded-lg shadow-lg hover:scale-110 hover:shadow-xl transition-transform duration-300 bg-white bg-opacity-20 backdrop-blur-lg"
            >
              <div className="flex items-center mb-4">
                <div className={`text-4xl mr-4 ${skill.color}`}>
                  {skill.icon}
                </div>
                <h2 className="text-2xl font-semibold text-pink-600">{skill.name}</h2>
              </div>
              <p className="text-black">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
