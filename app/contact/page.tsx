'use client';

import { FormEvent, useState } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-400 p-6">
      <div className="max-w-4xl w-full bg-white bg-opacity-20 backdrop-blur-lg shadow-lg rounded-2xl p-8 text-center border border-white border-opacity-30">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Contact Me</h1>

        {submitted ? (
          <p className="text-lg text-gray-600">
            Thank you, {name}, for reaching out! I will get back to you soon.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <textarea
                name="message"
                rows={4}
                placeholder="Your Message"
                required
                className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-2 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600 transition duration-300"
            >
              Send Message
            </button>
          </form>
        )}

        {/* Social Links Section */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-800">Hire Me</h2>
          <div className="flex justify-center gap-6 mt-4 text-2xl">
            <a
              href="https://www.linkedin.com/in/rimsha-ansari-leadership"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/leadership286"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-gray-900 transition duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="mailto:mmmumtazansari@gmail.com"
              className="text-red-500 hover:text-red-700 transition duration-300"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
