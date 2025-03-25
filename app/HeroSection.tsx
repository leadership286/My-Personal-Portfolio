import Image from "next/image";
import Link from "next/link";
import { Mail, Github, Linkedin, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="bg-gradient-to-r from-blue-400 to-green-500 flex flex-col items-center justify-center min-h-screen text-gray-900 px-6">
      {/* Hero Section */}
      <section className="text-center max-w-2xl flex flex-col items-center">
        <Image 
          src="/profile.png" 
          alt="Rimsha Ansari" 
          width={250} 
          height={250} 
          className="rounded-full shadow-lg mb-4"
        />
        <h1 className="text-3xl md:text-6xl font-bold">
          Hi, I am <span className="text-white">Rimsha Ansari</span>
        </h1>
        <p className="mt-4 text-xl text-white">
          Frontend Developer | Web Designer | Passionate Coder
        </p>
        
        {/* Call to Action Buttons */}
        <div className="mt-6 flex justify-center gap-4">
          <Link href="/projects" className="bg-white hover:bg-gray-100 px-6 py-2 rounded-full flex items-center gap-2 text-lg font-medium text-blue-700 shadow-md">
            View My Work <ArrowRight size={20} />
          </Link>
          <Link href="/contact" className="border border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-blue-700 text-lg font-medium shadow-md">
            Contact Me
          </Link>
        </div>
      </section>
      
      {/* Social Links */}
      <div className="mt-8 flex gap-6">
        <Link href="https://github.com/leadership286" target="_blank" className="hover:text-white shadow-sm">
          <Github size={28} />
        </Link>
        <Link href="https://linkedin.com/in/rimsha-ansari-leadership" target="_blank" className="hover:text-white shadow-sm">
          <Linkedin size={28} />
        </Link>
        <Link href="#contact" className="hover:text-white shadow-sm">
          <Mail size={28} />
        </Link>
      </div>
    </main>
  );
}
