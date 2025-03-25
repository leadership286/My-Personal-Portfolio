'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function About() {
  const [glow, setGlow] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-green-400 to-blue-400 p-6">
      <div className={`max-w-4xl bg-gradient-to-r from-blue-400 to-green-300 bg-white bg-opacity-20 backdrop-blur-lg shadow-lg rounded-2xl p-8 text-center relative animate-fade-in border border-white border-opacity-30 transition-all duration-300 ${glow ? 'shadow-2xl border-white border-opacity-60 scale-105' : ''}`}>
        <div 
          className="w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden border-5 border-gray-300 bg-white bg-opacity-30 backdrop-blur-lg shadow-lg transition-all duration-300 cursor-pointer hover:shadow-lg hover:border-white hover:border-opacity-80"
          onClick={() => setGlow(!glow)}
        >
          <Image
            src="/profile.png"
            alt="Profile Picture"
            width={150}
            height={150}
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-3xl font-bold text-gray-800">Rimsha Ansari</h1>
        <p className="text-gray-800 text-lg">Frontend Developer | Web Developer</p>
        
        <div className="mt-6 text-left">
          <h2 className="text-2xl font-serif text-gray-800 mb-2">About Me</h2>
          <p className="text-gray-800 leading-relaxed  font-medium">
            I am a passionate Frontend Developer with expertise in building responsive and optimized web applications.
            I specialize in HTML, CSS, JavaScript, and React.js. My goal is to create user-friendly and accessible digital experiences.
          </p>
        </div>
      </div>
    </div>
  );
}
