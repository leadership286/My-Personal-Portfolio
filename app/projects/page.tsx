import React from "react";
import Image from "next/image";
import calculator from "@/public/calculator.jpg";
import gallery from "@/public/gallery.jpg";
import music from "@/public/music.jpg";
import atm from "@/public/atm.jpg";
import counter from "@/public/wordc.jpg";
import game from "@/public/adventure.jpg";
import converter from "@/public/currency.jpg";
import timer from "@/public/stopwatch.jpg";
import image from "@/public/image.jpg";
import gratitude from "@/public/gratitude.jpg"
import blog from "@/public/blog.jpg"
import bulb from "@/public/bulb.jpg"

const projects = [
  { image: calculator,
     title: "Calculator", 
     description: "A simple web-based calculator with basic arithmetic operations.", 
     link: "https://simple-calculator-zeta-olive.vercel.app"
     },
  { image: gallery,
     title: "Image Gallery",
      description: "A responsive image gallery showcasing various images.",
       link: "https://project-image-gallery.vercel.app" 
      },
  { image: music,
     title: "Music Player",
      description: "An interactive music player with playlist support.",
       link: "https://music-player-gules-alpha.vercel.app" 
      },
  { image: bulb, 
    title: "Glowing Bulb", 
    description: "Engaging glowing bubble effects that add a dynamic and futuristic touch to the UI, enhancing user experience with smooth animations.",
     link: "https://glowing-bulb-bay.vercel.app"
     },
  { image: image,
     title: "Image Downloader",
      description: "A web app that allows users to search and download high-quality images seamlessly.",
       link: "https://image-search-website-gilt.vercel.app"
       },
  {
    image: gratitude,
    title: "Gratitude for Teachers of Governor House",
    description: "A heartfelt tribute showcasing an image gallery dedicated to honoring the teachers of Governor House.",
    link: "https://teachers-gratitude-q2.vercel.app/"
  },
  {
    image: blog,
    title: "Blogs",
    description: "A dynamic and interactive blogging platform for sharing thoughts, insights, and stories.",
    link: "https://dynamic-blog-website-gamma.vercel.app/"
  },
  
  { image: atm,
     title: "ATM Machine CLI based",
      description: "A CLI-based ATM simulation for basic banking operations.", 
      link: "https://github.com/leadership286/CLI-based-ATM-Machine.git" 
    },
  { image: counter,
     title: "Word Counter CLI based",
      description: "A tool to count words and characters in a text input.", 
      link: "https://github.com/leadership286/Word-Counter.git"
     },
  { image: game, 
    title: "Adventure Game CLI based",
     description: "A simple adventure game built with JavaScript.",
      link: "https://github.com/leadership286/Adventure-Game.git" 
    },
  { image: converter
    , title: "Currency Converter CLI based",
     description: "A currency conversion tool using real-time exchange rates.", 
     link: "https://github.com/leadership286/Currncy-Converter.git" 
    },
  { image: timer, title: "Countdown Timer", description: "A countdown timer that lets you set a time limit.", link: "https://github.com/leadership286/Countdown-Timer.git" },
];

export default function Projects() {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-green-400 min-h-screen pt-20">
      <div className="container mx-auto px-6 lg:px-16 py-12">
        <h1 className="text-5xl lg:text-6xl font-bold text-center text-black mb-12">My Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div key={index} className="bg-white border rounded-3xl shadow-lg p-6 transform hover:scale-105 hover:shadow-2xl transition duration-300">
              <div className="w-full h-70 relative rounded-xl overflow-hidden">
                <Image src={project.image} alt={project.title} layout="fill" objectFit="cover" />
              </div>
              <h2 className="text-3xl font-bold text-blue-600 mt-4">{project.title}</h2>
              <p className="text-gray-700 text-lg mt-2">{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 bg-blue-600 text-white py-2 px-4 rounded-xl shadow-md hover:bg-blue-700 transition">
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
