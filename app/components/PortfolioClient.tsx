'use client';

import { useState, useEffect, useRef } from 'react';

interface Project {
  name: string;
  details: string;
  icon: string;
  tags: string[];
  color: string;
  achievements: string[];
}

interface Experience {
  title: string;
  company: string;
  period: string;
  details: string;
  icon: string;
  color: string;
  highlights: string[];
}

interface Achievement {
  name: string;
  icon: string;
  details: string;
  year: string;
  link: string;
}

interface PortfolioClientProps {
  projects: Project[];
  experiences: Experience[];
  achievements?: Achievement[];
}

export default function PortfolioClient({ projects, experiences, achievements = [] }: PortfolioClientProps) {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const hasAnimated = useRef(false);

  useEffect(() => {
    setIsVisible(true);
    hasAnimated.current = true;
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pb-24">
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(30px, -30px) rotate(90deg); }
          50% { transform: translate(-20px, 20px) rotate(180deg); }
          75% { transform: translate(40px, 10px) rotate(270deg); }
        }
        
        @keyframes float-particle {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: 0.3; }
          90% { opacity: 0.3; }
          50% { transform: translateY(-100vh) translateX(50px); }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes pulse-width {
          0%, 100% { width: 12rem; }
          50% { width: 16rem; }
        }
        
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.4; }
        }
        
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        
        .animate-float {
          animation: float linear infinite;
        }
        
        .animate-float-particle {
          animation: float-particle linear infinite;
        }
        
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
        
        .animate-pulse-width {
          animation: pulse-width 2s ease-in-out infinite;
        }
      `}</style>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {/* Animated Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            transform: `translateY(${scrollY * 0.3}px)`
          }}
        ></div>

        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <main className="relative px-4 py-12 max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-20">
          <h1 
            className={`text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent transition-all duration-1000 animate-gradient-x ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
            }`}
          >
            Portfolio
          </h1>
          <div className="h-1 w-48 mx-auto bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-full animate-pulse-width"></div>
        </div>

        {/* Projects Section */}
        <div 
          className={`mb-20 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-black mb-10 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            🚀 Featured Projects
          </h2>
          <div className="space-y-8">
            {projects.map((project, index) => (
              <div
                key={project.name}
                className={`group relative transition-all duration-500 hover:scale-[1.02] ${
                  hasAnimated.current ? 'opacity-100' : 'animate-fade-in'
                }`}
                style={!hasAnimated.current ? {
                  animationDelay: `${index * 0.15}s`,
                } : undefined}
              >
                <div className="relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} rounded-3xl blur-2xl opacity-0 group-hover:opacity-30 transition-all duration-300`}></div>
                  
                  <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-white/20 group-hover:border-white/40 shadow-2xl transition-all duration-300">
                    <div className="flex flex-col md:flex-row items-start gap-6">
                      {/* Icon */}
                      <div className="flex-shrink-0">
                        <div className="relative">
                          <div className={`absolute inset-0 bg-gradient-to-br ${project.color} rounded-2xl blur-lg opacity-50`}></div>
                          <div className={`relative w-20 h-20 bg-gradient-to-br ${project.color} rounded-2xl flex items-center justify-center text-4xl shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                            {project.icon}
                          </div>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1">
                        <h3 className={`text-3xl md:text-4xl font-black mb-3 bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
                          {project.name}
                        </h3>
                        <p className="text-white/80 text-base md:text-lg mb-4 leading-relaxed">
                          {project.details}
                        </p>
                        
                        {/* Achievements */}
                        {project.achievements.length > 0 && (
                          <div className="mb-4 grid grid-cols-1 sm:grid-cols-3 gap-2">
                            {project.achievements.map((achievement) => (
                              <div key={achievement} className="flex items-center gap-2">
                                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.color}`}></div>
                                <span className="text-white/70 text-sm">{achievement}</span>
                              </div>
                            ))}
                          </div>
                        )}
                        
                        {/* Tags */}
                        {project.tags.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-semibold border border-white/20 hover:bg-white/20 transition-colors"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experiences Section */}
        <div 
          className={`mb-20 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-black mb-10 bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
            💼 Work Experience
          </h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-10 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 via-purple-400 to-pink-400 rounded-full hidden md:block"></div>
            
            <div className="space-y-8">
              {experiences.map((experience, index) => (
                <div
                  key={experience.title}
                  className={`group relative transition-all duration-500 ${
                    hasAnimated.current ? 'opacity-100' : 'animate-fade-in'
                  }`}
                  style={!hasAnimated.current ? {
                    animationDelay: `${0.5 + index * 0.15}s`,
                  } : undefined}
                >
                  <div className="relative md:ml-24">
                    {/* Timeline Dot */}
                    <div className="absolute -left-[4.5rem] top-10 hidden md:block">
                      <div className="relative">
                        <div className={`absolute inset-0 bg-gradient-to-br ${experience.color} rounded-full blur-lg opacity-70 animate-pulse`}></div>
                        <div className={`relative w-8 h-8 bg-gradient-to-br ${experience.color} rounded-full border-4 border-slate-900 shadow-xl group-hover:scale-125 transition-transform duration-300`}></div>
                      </div>
                    </div>

                    <div className="relative hover:scale-[1.02] transition-all duration-300">
                      <div className={`absolute inset-0 bg-gradient-to-br ${experience.color} rounded-3xl blur-2xl opacity-0 group-hover:opacity-30 transition-all duration-300`}></div>
                      
                      <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-white/20 group-hover:border-white/40 shadow-2xl transition-all duration-300">
                        <div className="flex flex-col md:flex-row items-start gap-6">
                          {/* Icon */}
                          <div className="flex-shrink-0">
                            <div className="relative">
                              <div className={`absolute inset-0 bg-gradient-to-br ${experience.color} rounded-2xl blur-lg opacity-50`}></div>
                              <div className={`relative w-20 h-20 bg-gradient-to-br ${experience.color} rounded-2xl flex items-center justify-center text-4xl shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                                {experience.icon}
                              </div>
                            </div>
                          </div>
                          
                          {/* Content */}
                          <div className="flex-1">
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3 gap-2">
                              <h3 className={`text-3xl md:text-4xl font-black bg-gradient-to-r ${experience.color} bg-clip-text text-transparent`}>
                                {experience.title}
                              </h3>
                              <span className={`px-4 py-1.5 bg-gradient-to-r ${experience.color} rounded-full text-white text-sm font-bold shadow-lg flex-shrink-0 w-fit`}>
                                {experience.period}
                              </span>
                            </div>
                            <p className="text-white text-xl font-bold mb-3">
                              {experience.company}
                            </p>
                            <p className="text-white/80 text-base md:text-lg mb-4 leading-relaxed">
                              {experience.details}
                            </p>
                            
                            {/* Highlights */}
                            {experience.highlights.length > 0 && (
                              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                                {experience.highlights.map((highlight) => (
                                  <div key={highlight} className="flex items-center gap-2">
                                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${experience.color}`}></div>
                                    <span className="text-white/70 text-sm">{highlight}</span>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        {achievements && achievements.length > 0 && (
          <div 
            className={`mb-20 transition-all duration-1000 delay-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-5xl md:text-6xl font-black mb-10 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              🏆 Achievements
            </h2>
            
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 rounded-3xl blur-2xl opacity-20 transition-all duration-300"></div>
              
              <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
                {/* Scrollable Container */}
                <div className="max-h-[600px] overflow-y-auto pr-4 space-y-4 custom-scrollbar">
                  {achievements.map((achievement, index) => (
                    <div
                      key={achievement.name}
                      className="group/item relative"
                    >
                      <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 transition-all duration-300 hover:bg-gradient-to-r hover:from-yellow-500/20 hover:to-orange-500/20 hover:border-yellow-400/40 hover:shadow-lg hover:shadow-yellow-500/20">
                        <div className="flex items-start gap-6">
                          {/* Icon & Year */}
                          <div className="flex-shrink-0 flex flex-col items-center gap-2">
                            <div className="relative">
                              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl blur-md opacity-50"></div>
                              <div className="relative w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center text-3xl shadow-lg transition-transform duration-300 group-hover/item:scale-110">
                                {achievement.icon}
                              </div>
                            </div>
                            <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full text-slate-900 text-xs font-bold shadow-lg">
                              {achievement.year}
                            </span>
                          </div>
                          
                          {/* Content */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-3">
                              <h3 className="text-2xl md:text-3xl font-black bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                                {achievement.name}
                              </h3>
                              {achievement.link && (
                                <a
                                  href={achievement.link.startsWith('http') ? achievement.link : `https://${achievement.link}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center text-slate-900 hover:scale-110 hover:rotate-12 transition-all duration-300 shadow-lg hover:shadow-yellow-500/50"
                                  title="View Certificate"
                                >
                                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                  </svg>
                                </a>
                              )}
                            </div>
                            <p className="text-white/80 text-base leading-relaxed mt-2">
                              {achievement.details}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div 
          className={`transition-all duration-1000 delay-900 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-all duration-300"></div>
            
            <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-12 border border-white/20 shadow-2xl text-center max-w-3xl mx-auto">
              <div className="text-6xl mb-6 animate-bounce">🚀</div>
              <h3 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Let's Build Something Amazing
              </h3>
              <p className="text-white/80 text-lg md:text-xl mb-8 leading-relaxed">
                Ready to collaborate on exciting projects? Let's connect and create something extraordinary together!
              </p>
              <button className="group/btn relative px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-full blur-lg opacity-70 group-hover/btn:opacity-100 transition-opacity"></div>
                <a href="mailto:bombbomb925@gmail.com" className="relative bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-full px-8 py-4 text-slate-900 font-black shadow-xl flex items-center gap-3">
                  Get In Touch
                  <span className="text-2xl group-hover/btn:translate-x-1 transition-transform">📧</span>
                </a>
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Custom animations styles */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fadeInUp 0.6s ease-out both;
          animation-play-state: running;
        }
        
        .animate-fade-in:hover {
          animation-play-state: paused;
        }

        /* Custom Scrollbar */
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #fbbf24, #f97316);
          border-radius: 10px;
          transition: all 0.3s ease;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #fcd34d, #fb923c);
          box-shadow: 0 0 10px rgba(251, 191, 36, 0.5);
        }

        /* For Firefox */
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #f97316 rgba(255, 255, 255, 0.05);
        }
      `}</style>
    </div>
  );
}