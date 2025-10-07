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
    { icon: "💻", text: "Coding & Programming", color: "from-cyan-400 to-blue-500" },
    { icon: "🌐", text: "Web Development", color: "from-green-400 to-emerald-500" },
    { icon: "🎮", text: "Game Development", color: "from-purple-400 to-pink-500" },
    { icon: "🤖", text: "AI & Machine Learning", color: "from-orange-400 to-red-500" },
    { icon: "🔒", text: "Cybersecurity", color: "from-red-400 to-rose-500" },
    { icon: "☁️", text: "Cloud Computing", color: "from-blue-400 to-indigo-500" },
    { icon: "🧩", text: "Problem Solving", color: "from-yellow-400 to-orange-500" },
    { icon: "📚", text: "Learning New Technologies", color: "from-teal-400 to-cyan-500" }
  ];

  const skills = [
    { name: "JavaScript/TypeScript", level: 90, color: "bg-yellow-400" },
    { name: "React & Next.js", level: 85, color: "bg-cyan-400" },
    { name: "Node.js", level: 80, color: "bg-green-400" },
    { name: "Tailwind CSS", level: 95, color: "bg-blue-400" }
  ];

  const strengths = [
    { icon: "⚡", text: "Fast Learner", bg: "from-yellow-500/20 to-orange-500/20" },
    { icon: "🤝", text: "Team Collaboration", bg: "from-blue-500/20 to-purple-500/20" },
    { icon: "🎨", text: "Creative Thinking", bg: "from-pink-500/20 to-rose-500/20" },
    { icon: "🎯", text: "Attention to Detail", bg: "from-green-500/20 to-teal-500/20" }
  ];

  const targets = [
    "Build Impactful Products",
    "Become a Full-Stack Developer",
    "Master System Design",
    "Contribute to Open Source"
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20 -top-48 -left-48 animate-pulse"
          style={{ animationDuration: '4s' }}
        ></div>
        <div 
          className="absolute w-96 h-96 bg-pink-500 rounded-full blur-3xl opacity-20 top-1/4 right-0 animate-pulse"
          style={{ animationDuration: '5s', animationDelay: '0.5s' }}
        ></div>
        <div 
          className="absolute w-96 h-96 bg-cyan-500 rounded-full blur-3xl opacity-20 -bottom-48 -right-48 animate-pulse"
          style={{ animationDuration: '6s', animationDelay: '1s' }}
        ></div>
        
        {/* Animated Grid */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            transform: `translateY(${scrollY * 0.3}px)`
          }}
        ></div>
      </div>

      {/* Main Content */}
      <main className="relative px-4 py-12 max-w-7xl mx-auto">

        {/* Hero Section with Avatar */}
        <div 
          className={`mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-12">
            <h1 className="text-7xl md:text-8xl font-black mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse" style={{ animationDuration: '3s' }}>
              Hello! I'm Bomb 👋
            </h1>
            <div className="h-1 w-32 mx-auto bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-full"></div>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Avatar with Floating Effect */}
            <div className="flex-shrink-0">
              <div className="relative" style={{ animation: 'float 3s ease-in-out infinite' }}>
                <div className="absolute inset-0 w-72 h-72 lg:w-80 lg:h-80 rounded-full bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 opacity-30 blur-3xl animate-pulse"></div>
                <div className="relative w-72 h-72 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-cyan-400 via-purple-400 to-pink-400 p-1.5 shadow-2xl shadow-purple-500/50">
                  <div className="w-full h-full rounded-full bg-slate-900 overflow-hidden relative border-4 border-white/10">
                    <img 
                      src="/images/me.jpeg" 
                      alt="Avatar" 
                      className="object-cover w-full h-full hover:scale-110 transition-transform duration-500" 
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Introduction */}
            <div className="flex-1 max-w-2xl">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl rounded-3xl p-10 border border-white/20 shadow-2xl">
                  <p className="text-3xl md:text-4xl leading-relaxed mb-6">
                    <span className="bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent font-light">
                      I'm{' '}
                    </span>
                    <span className="font-black text-4xl md:text-5xl bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                      Puntakant Roojang
                    </span>
                  </p>
                  <p className="text-xl md:text-2xl text-white/80 leading-relaxed mb-4">
                    A Computer Engineering student passionate about building{' '}
                    <span className="font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                      innovative tech solutions
                    </span>
                  </p>
                  <p className="text-lg md:text-xl text-white/70 leading-relaxed">
                    I love exploring new technologies and solving real-world problems through{' '}
                    <span className="font-semibold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                      creative thinking
                    </span>{' '}
                    and cutting-edge development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interests - Bento Grid Style */}
        <div 
          className={`mb-20 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-black text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            💡 Interests
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {interests.map((interest, index) => (
              <div 
                key={index}
                className="group relative bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105 hover:bg-white/10"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity" style={{ background: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }}></div>
                <div className="text-4xl mb-3">{interest.icon}</div>
                <p className={`text-sm md:text-base font-semibold bg-gradient-to-r ${interest.color} bg-clip-text text-transparent`}>
                  {interest.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills with Progress Bars */}
        <div 
          className={`mb-20 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-black text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            🚀 Main Skills
          </h2>
          <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl">
            {skills.map((skill, index) => (
              <div key={index} className="mb-8 last:mb-0">
                <div className="flex justify-between mb-3">
                  <span className="text-xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                    {skill.name}
                  </span>
                  <span className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out shadow-lg`}
                    style={{ 
                      width: isVisible ? `${skill.level}%` : '0%',
                      boxShadow: '0 0 20px currentColor'
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Strengths - Card Layout */}
        <div 
          className={`mb-20 transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-black text-center mb-12 bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">
            💪 Strengths
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {strengths.map((strength, index) => (
              <div 
                key={index}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${strength.bg} rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity`}></div>
                <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105">
                  <div className="text-5xl mb-4">{strength.icon}</div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                    {strength.text}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Targets - Creative Layout */}
        <div 
          className={`mb-20 transition-all duration-1000 delay-900 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-black text-center mb-12 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
            🎯 Targets
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {targets.map((target, index) => (
              <div 
                key={index}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative flex items-center gap-4 bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-102">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-purple-400 flex items-center justify-center text-xl font-black text-white shadow-lg">
                    {index + 1}
                  </div>
                  <p className="text-xl font-semibold bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
                    {target}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Timeline */}
        <div 
          className={`mb-20 transition-all duration-1000 delay-1100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-black text-center mb-16 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            🎓 Education
          </h2>
          <div className="flex flex-col items-center gap-8 max-w-2xl mx-auto">
            {/* High School */}
            <div className="relative group w-full">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center text-2xl shadow-lg">
                    🏫
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                      HIGH SCHOOL
                    </h3>
                    <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent mb-2">
                      Suratpittaya School
                    </h2>
                    <p className="text-lg text-white/60">2018 - 2021</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Arrow */}
            <div className="flex flex-col items-center">
              <div className="w-1 h-16 bg-gradient-to-b from-purple-400 to-cyan-400 rounded-full"></div>
              <div className="w-4 h-4 bg-gradient-to-br from-purple-400 to-cyan-400 rounded-full shadow-lg"></div>
            </div>

            {/* University */}
            <div className="relative group w-full">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 to-purple-400 flex items-center justify-center text-2xl shadow-lg">
                    🎓
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
                      UNIVERSITY
                    </h3>
                    <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent mb-2">
                      King Mongkut's University of Technology Thonburi
                    </h2>
                    <p className="text-lg text-white/60">2021 - Present</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div 
          className={`transition-all duration-1000 delay-1200 mb-25 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-black text-center mb-12 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            📫 Contact
          </h2>
          <div className="max-w-2xl mx-auto relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
              <div className="space-y-6">
                <a href="mailto:puntakantroojang2547@gmail.com" className="group/item flex items-center gap-6 p-6 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-red-400 to-pink-400 flex items-center justify-center text-2xl shadow-lg">
                    📧
                  </div>
                  <div>
                    <p className="text-sm font-semibold bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent mb-1">
                      EMAIL
                    </p>
                    <p className="text-lg md:text-xl font-medium text-white group-hover/item:bg-gradient-to-r group-hover/item:from-white group-hover/item:to-pink-200 group-hover/item:bg-clip-text group-hover/item:text-transparent transition-all">
                      puntakantroojang2547@gmail.com
                    </p>
                  </div>
                </a>
                
                <a href="https://www.linkedin.com/in/puntakant-roojang-4457192ab/" target="_blank" rel="noopener noreferrer" className="group/item flex items-center gap-6 p-6 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center text-2xl shadow-lg">
                    💼
                  </div>
                  <div>
                    <p className="text-sm font-semibold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-1">
                      LINKEDIN
                    </p>
                    <p className="text-lg md:text-xl font-medium text-white group-hover/item:bg-gradient-to-r group-hover/item:from-white group-hover/item:to-cyan-200 group-hover/item:bg-clip-text group-hover/item:text-transparent transition-all">
                      puntakant-roojang
                    </p>
                  </div>
                </a>
                
                <a href="https://github.com/Punbomz" target="_blank" rel="noopener noreferrer" className="group/item flex items-center gap-6 p-6 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-2xl shadow-lg">
                    🐱
                  </div>
                  <div>
                    <p className="text-sm font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-1">
                      GITHUB
                    </p>
                    <p className="text-lg md:text-xl font-medium text-white group-hover/item:bg-gradient-to-r group-hover/item:from-white group-hover/item:to-purple-200 group-hover/item:bg-clip-text group-hover/item:text-transparent transition-all">
                      Punbomz
                    </p>
                  </div>
                </a>
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