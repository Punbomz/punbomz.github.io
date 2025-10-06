'use client';

import { useState, useEffect } from 'react';

export default function Skills() {
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

  const programmingSkills = [
    { name: 'Python', icon: '🐍', color: 'from-blue-400 to-yellow-400' },
    { name: 'C++', icon: '⚙️', color: 'from-blue-500 to-blue-700' },
    { name: 'C', icon: '©️', color: 'from-blue-600 to-blue-800' },
    { name: 'C#', icon: '🎯', color: 'from-purple-500 to-purple-700' },
    { name: 'HTML5', icon: '🌐', color: 'from-orange-500 to-orange-700' },
    { name: 'PHP', icon: '🐘', color: 'from-purple-400 to-indigo-600' },
    { name: 'JavaScript', icon: '⚡', color: 'from-yellow-400 to-yellow-600' },
    { name: 'MySQL', icon: '🗄️', color: 'from-blue-400 to-cyan-600' },
  ];

  const softSkills = [
    { name: 'Teamwork', icon: '🤝', description: 'Collaborating effectively with team members' },
    { name: 'Problem Solving', icon: '🧩', description: 'Finding creative solutions to challenges' },
    { name: 'Team Leading', icon: '👑', description: 'Guiding and motivating teams to success' },
    { name: 'Communication', icon: '💬', description: 'Clear and effective communication' },
    { name: 'Time Management', icon: '⏰', description: 'Efficiently organizing tasks and priorities' },
    { name: 'Adaptability', icon: '🔄', description: 'Quickly adjusting to new situations' },
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
          className="absolute w-96 h-96 bg-rose-400 rounded-full blur-3xl opacity-20 top-1/2 -right-48 animate-pulse"
          style={{ animationDuration: '6s', animationDelay: '1s' }}
        ></div>
        <div 
          className="absolute w-96 h-96 bg-red-400 rounded-full blur-3xl opacity-20 -bottom-48 left-1/4 animate-pulse"
          style={{ animationDuration: '5s', animationDelay: '2s' }}
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
      <main className="relative px-4 py-12 max-w-7xl mx-auto">
        {/* Title */}
        <h1 
          className={`text-white text-5xl md:text-6xl font-bold text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}
          style={{
            textShadow: '0 0 40px rgba(255, 255, 255, 0.3)',
          }}
        >
          "Skills"
        </h1>

        {/* Programming Section */}
        <div 
          className={`mb-16 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-8"
            style={{ textShadow: '0 0 30px rgba(255, 255, 255, 0.2)' }}
          >
            Programming
          </h2>
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {programmingSkills.map((skill, index) => (
                <div
                  key={skill.name}
                  className={`group relative transition-all duration-500 hover:scale-110`}
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                  }}
                >
                  <div className="relative">
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                    
                    {/* Skill card */}
                    <div className={`relative bg-gradient-to-br ${skill.color} p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center justify-center gap-3 h-32`}>
                      <span className="text-5xl">{skill.icon}</span>
                      <p className="text-white font-bold text-sm text-center">{skill.name}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Soft Skills Section */}
        <div 
          className={`transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-8"
            style={{ textShadow: '0 0 30px rgba(255, 255, 255, 0.2)' }}
          >
            Soft Skills
          </h2>
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {softSkills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="group relative transition-all duration-500 hover:scale-105"
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                  }}
                >
                  <div className="relative">
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-white/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                    
                    {/* Skill card */}
                    <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/20 shadow-lg hover:shadow-2xl hover:bg-white/15 transition-all duration-300 h-full">
                      <div className="flex flex-col items-center text-center gap-3">
                        <div className="text-5xl mb-2 group-hover:scale-110 transition-transform duration-300">
                          {skill.icon}
                        </div>
                        <h3 className="text-white text-xl font-bold">
                          {skill.name}
                        </h3>
                        <p className="text-white/80 text-sm">
                          {skill.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skill Progress Bars */}
        <div 
          className={`mt-16 transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-8 text-center"
            style={{ textShadow: '0 0 30px rgba(255, 255, 255, 0.2)' }}
          >
            Proficiency Level
          </h2>
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                { skill: 'Web Development', level: 85 },
                { skill: 'Problem Solving', level: 90 },
                { skill: 'Team Collaboration', level: 95 },
                { skill: 'Backend Development', level: 75 },
                { skill: 'Database Management', level: 80 },
              ].map((item, index) => (
                <div key={item.skill} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-white font-semibold text-lg">{item.skill}</span>
                    <span className="text-white/80 font-bold">{item.level}%</span>
                  </div>
                  <div className="h-3 bg-white/20 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-white to-rose-200 rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: isVisible ? `${item.level}%` : '0%',
                        transitionDelay: `${800 + index * 100}ms`,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
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
      `}</style>
    </div>
  );
}