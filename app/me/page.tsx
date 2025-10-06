'use client';

import { useState, useEffect } from 'react';

export default function AboutMe() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const interests = [
    "Coding & Programming",
    "Web Development",
    "Problem Solving",
    "Learning New Technologies"
  ];

  const skills = [
    "JavaScript/TypeScript",
    "React & Next.js",
    "Node.js",
    "Tailwind CSS"
  ];

  const strengths = [
    "Fast Learner",
    "Team Collaboration",
    "Creative Thinking",
    "Attention to Detail"
  ];

  const targets = [
    "Become a Full-Stack Developer",
    "Master System Design",
    "Contribute to Open Source",
    "Build Impactful Products"
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-red-600 via-red-700 to-rose-900 pb-24">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-red-500 rounded-full blur-3xl opacity-20 -top-48 -left-48 animate-pulse"
          style={{ animationDuration: '4s' }}
        ></div>
        <div 
          className="absolute w-96 h-96 bg-rose-400 rounded-full blur-3xl opacity-20 -bottom-48 -right-48 animate-pulse"
          style={{ animationDuration: '6s', animationDelay: '1s' }}
        ></div>
        
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            transform: `translateY(${scrollY * 0.3}px)`
          }}
        ></div>
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        ></div>
      </div>

      {/* Main Content */}
      <main className="relative px-4 py-12 max-w-6xl mx-auto">
        {/* Title */}
        <h1 
          className={`text-white text-5xl md:text-6xl font-bold text-center mb-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}
          style={{
            textShadow: '0 0 40px rgba(255, 255, 255, 0.3)',
          }}
        >
          "About Me"
        </h1>

        {/* Avatar */}
        <div 
          className={`flex justify-center mb-8 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
          }`}
        >
          <div className="relative" style={{ animation: 'float 3s ease-in-out infinite' }}>
            <div className="absolute inset-0 w-40 h-40 md:w-48 md:h-48 rounded-full bg-white opacity-20 blur-2xl animate-pulse"></div>
            <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-white via-sky-200 to-blue-300 p-2 shadow-2xl">
              <div className="w-full h-full rounded-full bg-sky-200 overflow-hidden relative border-4 border-white/30">
                <img 
                  src="/images/me.jpeg" 
                  alt="Avatar" 
                  className="object-cover w-full h-full hover:scale-110 transition-transform duration-500" 
                />
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div 
          className={`text-center mb-12 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-white text-lg md:text-xl max-w-3xl mx-auto leading-relaxed bg-black/20 backdrop-blur-sm px-8 py-4 rounded-2xl border border-white/20 shadow-xl">
            Hi! I'm Puntakant Roojang (BOMB), an aspiring engineer passionate about creating beautiful and functional web experiences. I love turning ideas into reality through code.
          </p>
        </div>

        {/* Grid Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Interests */}
          <div 
            className={`transition-all duration-1000 delay-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-2xl hover:bg-white/15 transition-all duration-300 hover:scale-105 h-full">
              <h2 className="text-white text-3xl font-bold mb-6 flex items-center gap-3">
                <span className="text-4xl">💡</span>
                Interests
              </h2>
              <ul className="space-y-3">
                {interests.map((interest, index) => (
                  <li key={index} className="text-white/90 text-lg flex items-center gap-2">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    {interest}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Main Skills */}
          <div 
            className={`transition-all duration-1000 delay-800 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-2xl hover:bg-white/15 transition-all duration-300 hover:scale-105 h-full">
              <h2 className="text-white text-3xl font-bold mb-6 flex items-center gap-3">
                <span className="text-4xl">🚀</span>
                Main Skills
              </h2>
              <ul className="space-y-3">
                {skills.map((skill, index) => (
                  <li key={index} className="text-white/90 text-lg flex items-center gap-2">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Strengths */}
          <div 
            className={`transition-all duration-1000 delay-900 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-2xl hover:bg-white/15 transition-all duration-300 hover:scale-105 h-full">
              <h2 className="text-white text-3xl font-bold mb-6 flex items-center gap-3">
                <span className="text-4xl">💪</span>
                Strengths
              </h2>
              <ul className="space-y-3">
                {strengths.map((strength, index) => (
                  <li key={index} className="text-white/90 text-lg flex items-center gap-2">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    {strength}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Targets */}
          <div 
            className={`transition-all duration-1000 delay-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-2xl hover:bg-white/15 transition-all duration-300 hover:scale-105 h-full">
              <h2 className="text-white text-3xl font-bold mb-6 flex items-center gap-3">
                <span className="text-4xl">🎯</span>
                Targets
              </h2>
              <ul className="space-y-3">
                {targets.map((target, index) => (
                  <li key={index} className="text-white/90 text-lg flex items-center gap-2">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    {target}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Education Timeline */}
        <div 
          className={`mb-12 transition-all duration-1000 delay-1100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-white text-4xl md:text-5xl font-bold text-center mb-10"
            style={{ textShadow: '0 0 40px rgba(255, 255, 255, 0.3)' }}
          >
            Education
          </h2>
          <div className="flex flex-col items-center gap-6">
            {/* High School */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl w-full max-w-lg hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <h3 className="text-white text-2xl font-bold mb-2">High School</h3>
              <h2 className="text-white text-xl">Suratpittaya School</h2>
              <p className="text-white/80 text-lg">Year: 2018 - 2021</p>
            </div>

            {/* Arrow */}
            <div className="flex flex-col items-center">
              <div className="w-1 h-12 bg-white/30"></div>
              <svg className="w-8 h-8 text-white/50" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7 10l5 5 5-5z"/>
              </svg>
            </div>

            {/* University */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl w-full max-w-lg hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <h3 className="text-white text-2xl font-bold mb-2">University</h3>
              <h2 className="text-white text-xl">King Mongkut’s University of Technology Thonburi</h2>
              <p className="text-white/80 text-lg">Year: 2021 - Now</p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div 
          className={`transition-all duration-1000 delay-1200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-white text-4xl md:text-5xl font-bold text-center mb-8"
            style={{ textShadow: '0 0 40px rgba(255, 255, 255, 0.3)' }}
          >
            Contact
          </h2>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl max-w-2xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-center gap-4 hover:bg-white/10 p-4 rounded-xl transition-all">
                <span className="text-3xl">📧</span>
                <div>
                  <p className="text-white font-semibold text-lg">Email</p>
                  <a href="mailto:bombbomb925@gmail.com" className="text-white/80 hover:text-white transition-colors">
                    bombbomb925@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 hover:bg-white/10 p-4 rounded-xl transition-all">
                <span className="text-3xl">💼</span>
                <div>
                  <p className="text-white font-semibold text-lg">LinkedIn</p>
                  <a href="https://www.linkedin.com/in/puntakant-roojang-4457192ab/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
                    linkedin.com/in/puntakant-roojang-4457192ab/
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 hover:bg-white/10 p-4 rounded-xl transition-all">
                <span className="text-3xl">🐱</span>
                <div>
                  <p className="text-white font-semibold text-lg">GitHub</p>
                  <a href="https://github.com/Punbomz" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
                    github.com/Punbomz
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Custom animations styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
      `}</style>
    </div>
  );
}