"use client";

import { useState } from "react";

import Link from "next/link";
import { Menu, X, User, Briefcase, Code, Mail, Github, Linkedin,  } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);



  return (
    <nav className="bg-gray-300 dark:bg-gray-900 text-gray-900 dark:text-white p-4 shadow-md fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold flex items-center gap-2">
          <Code size={30} className="text-blue-900 dark:text-blue-400" /> Rimsha Ansari
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link href="/about" className="flex items-center gap-1 hover:text-blue-900 dark:hover:text-blue-400">
            <User size={25} /> About
          </Link>
          <Link href="/projects" className="flex items-center gap-1 hover:text-blue-900 dark:hover:text-blue-400">
            <Briefcase size={25} /> Projects
          </Link>
          <Link href="/skills" className="flex items-center gap-1 hover:text-blue-900 dark:hover:text-blue-400">
            <Code size={25} /> Skills
          </Link>
          <Link href="/contact" className="flex items-center gap-1 hover:text-blue-900 dark:hover:text-blue-400">
            <Mail size={25} /> Contact
          </Link>
        </div>

        {/* Social Icons & Theme Toggle */}
        <div className="hidden md:flex space-x-4 items-center">
          <Link href="https://github.com/leadership286" target="_blank" className="hover:text-blue-900 dark:hover:text-blue-400">
            <Github size={30} />
          </Link>
          <Link href="https://linkedin.com/in/rimsha-ansari-leadership" target="_blank" className="hover:text-blue-900 dark:hover:text-blue-400">
            <Linkedin size={30} />
          </Link>

      
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-900 dark:text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-gray-200 dark:bg-gray-800 flex flex-col items-center py-4 space-y-4">
          <Link href="/about" className="flex items-center gap-1 hover:text-blue-900 dark:hover:text-blue-400" onClick={() => setIsOpen(false)}>
            <User size={20} /> About
          </Link>
          <Link href="/projects" className="flex items-center gap-1 hover:text-blue-900 dark:hover:text-blue-400" onClick={() => setIsOpen(false)}>
            <Briefcase size={20} /> Projects
          </Link>
          <Link href="/skills" className="flex items-center gap-1 hover:text-blue-900 dark:hover:text-blue-400" onClick={() => setIsOpen(false)}>
            <Code size={20} /> Skills
          </Link>
          <Link href="/contact" className="flex items-center gap-1 hover:text-blue-900 dark:hover:text-blue-400" onClick={() => setIsOpen(false)}>
            <Mail size={20} /> Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
