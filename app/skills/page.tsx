'use client';

import { useState, useEffect, useRef } from 'react';

export default function Skills() {
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

  const programmingSkills = [
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', level: 'Expert', color: 'from-yellow-400 to-blue-500' },
    { name: 'C', icon: 'https://img.icons8.com/?size=512&id=40670&format=png', level: 'Advanced', color: 'from-blue-400 to-purple-500' },
    { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg', level: 'Expert', color: 'from-blue-500 to-pink-500' },
    { name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg', level: 'Intermediate', color: 'from-purple-400 to-pink-500' },
    { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', level: 'Expert', color: 'from-orange-400 to-red-500' },
    { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg', level: 'Expert', color: 'from-purple-400 to-blue-500' },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', level: 'Intermediate', color: 'from-blue-400 to-cyan-500' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', level: 'Intermediate', color: 'from-yellow-400 to-orange-500' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', level: 'Intermediate', color: 'from-blue-500 to-cyan-500' },
    { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', level: 'Basic', color: 'from-red-400 to-orange-500' },
    { name: 'Dart', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg', level: 'Beginner', color: 'from-cyan-400 to-blue-500' },
  ];

  const frameworksTools = [
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', level: 'Intermediate', color: 'from-cyan-400 to-blue-500' },
    { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', level: 'Intermediate', color: 'from-slate-400 to-slate-600' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', level: 'Intermediate', color: 'from-green-400 to-emerald-500' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', level: 'Intermediate', color: 'from-orange-400 to-red-500' },
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', level: 'Beginner', color: 'from-blue-400 to-cyan-500' },
    { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg', level: 'Advanced', color: 'from-yellow-400 to-orange-500' },
    { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', level: 'Expert', color: 'from-blue-500 to-purple-500' },
    { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg', level: 'Beginner', color: 'from-cyan-400 to-blue-500' },
    { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg', level: 'Advanced', color: 'from-purple-500 to-pink-500' },
    { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', level: 'Intermediate', color: 'from-cyan-400 to-blue-500' },
  ];

  const hardwareSkills = [
    { name: 'Circuit Design', icon: '🔌', level: 'Intermediate', color: 'from-yellow-400 to-orange-500' },
    { name: 'Arduino', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg', level: 'Intermediate', color: 'from-cyan-400 to-teal-500' },
    { name: 'Raspberry Pi', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg', level: 'Intermediate', color: 'from-red-400 to-pink-500' },
    { name: 'PCB Design', icon: '🖨️', level: 'Basic', color: 'from-green-400 to-emerald-500' },
    { name: 'Embedded Systems', icon: '⚙️', level: 'Intermediate', color: 'from-slate-400 to-slate-600' },
    { name: 'IoT', icon: '📡', level: 'Advanced', color: 'from-purple-400 to-pink-500' },
  ];

  const engineeringConcepts = [
    { name: 'Data Structures', level: 'Intermediate', icon: '🗂️' },
    { name: 'Algorithms', level: 'Advanced', icon: '🧮' },
    { name: 'Operating Systems', level: 'Advanced', icon: '💻' },
    { name: 'Computer Networks', level: 'Basic', icon: '🌐' },
    { name: 'Database Systems', level: 'Advanced', icon: '🗄️' },
    { name: 'Software Engineering', level: 'Advanced', icon: '⚡' },
    { name: 'Digital Logic Design', level: 'Advanced', icon: '🔢' },
    { name: 'Computer Architecture', level: 'Intermediate', icon: '🏗️' },
  ];

  const softSkills = [
    { name: 'Teamwork', icon: '🤝', description: 'Collaborating effectively with team members', color: 'from-blue-500 to-cyan-500' },
    { name: 'Problem Solving', icon: '🧩', description: 'Finding creative solutions to challenges', color: 'from-purple-500 to-pink-500' },
    { name: 'Team Leading', icon: '👑', description: 'Guiding and motivating teams to success', color: 'from-yellow-500 to-orange-500' },
    { name: 'Communication', icon: '💬', description: 'Clear and effective communication', color: 'from-green-500 to-emerald-500' },
    { name: 'Time Management', icon: '⏰', description: 'Efficiently organizing tasks and priorities', color: 'from-red-500 to-pink-500' },
    { name: 'Adaptability', icon: '🔄', description: 'Quickly adjusting to new situations', color: 'from-cyan-500 to-blue-500' },
  ];

  const getLevelColor = (level: string) => {
    switch(level) {
      case 'Expert': return 'bg-emerald-400';
      case 'Advanced': return 'bg-blue-400';
      case 'Intermediate': return 'bg-amber-400';
      case 'Basic': return 'bg-orange-400';
      case 'Beginner': return 'bg-yellow-400';
      default: return 'bg-gray-400';
    }
  };

  const getLevelGradient = (level: string) => {
    switch(level) {
      case 'Expert': return 'from-emerald-400 to-green-500';
      case 'Advanced': return 'from-blue-400 to-cyan-500';
      case 'Intermediate': return 'from-amber-400 to-orange-500';
      case 'Basic': return 'from-orange-400 to-red-500';
      case 'Beginner': return 'from-yellow-400 to-amber-500';
      default: return 'from-gray-400 to-gray-500';
    }
  };

  const getLevelWidth = (level: string) => {
    switch(level) {
      case 'Expert': return '100%';
      case 'Advanced': return '80%';
      case 'Intermediate': return '60%';
      case 'Basic': return '50%';
      case 'Beginner': return '30%';
      default: return '0%';
    }
  };

  type Skill = {
    name: string;
    icon: string;
    level?: string;
    color?: string;
  };

  interface SkillCardProps {
    skill: Skill;
    index: number;
    showLevel?: boolean;
  }

  const SkillCard = ({ skill, index, showLevel = false }: SkillCardProps) => (
    <div
      className={`group relative transition-all duration-500 hover:scale-110 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      style={{
        animation: !hasAnimated.current ? `fadeInUp 0.6s ease-out ${index * 0.05}s both` : 'none',
      }}
    >
      <div className="relative h-full">
        <div className={`absolute inset-0 bg-gradient-to-br ${skill.color || 'from-purple-500 to-pink-500'} rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-all duration-300`}></div>
        
        <div className="relative bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/20 group-hover:border-white/40 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center justify-center gap-3 h-full">
          <div className="relative">
            {skill.icon.startsWith('http') ? (
              <>
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color || 'from-purple-500 to-pink-500'} rounded-full blur-md opacity-0 group-hover:opacity-30 transition-opacity`}></div>
                <img src={skill.icon} alt={skill.name} className="w-16 h-16 object-contain relative z-10 group-hover:scale-110 transition-transform" />
              </>
            ) : (
              <span className="text-5xl group-hover:scale-110 transition-transform">{skill.icon}</span>
            )}
          </div>
          <p className={`font-bold text-sm text-center bg-gradient-to-r ${skill.color || 'from-white to-purple-200'} bg-clip-text text-transparent`}>
            {skill.name}
          </p>
          {showLevel && skill.level && (
            <div className="w-full mt-2">
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <div 
                  className={`h-full bg-gradient-to-r ${getLevelGradient(skill.level)} rounded-full transition-all duration-1000 ease-out shadow-lg`}
                  style={{
                    width: isVisible ? getLevelWidth(skill.level) : '0%',
                    transitionDelay: `${500 + index * 50}ms`,
                    boxShadow: '0 0 10px currentColor'
                  }}
                ></div>
              </div>
              <p className={`font-bold text-xs text-center mt-1 bg-gradient-to-r ${getLevelGradient(skill.level)} bg-clip-text text-transparent`}>
                {skill.level}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pb-24">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20 -top-48 -left-48 animate-pulse"
          style={{ 
            animationDuration: '4s',
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
          }}
        ></div>
        <div 
          className="absolute w-96 h-96 bg-pink-500 rounded-full blur-3xl opacity-20 top-1/2 -right-48 animate-pulse"
          style={{ 
            animationDuration: '6s', 
            animationDelay: '1s',
            transform: `translate(${-mousePosition.x}px, ${mousePosition.y}px)`
          }}
        ></div>
        <div 
          className="absolute w-96 h-96 bg-cyan-500 rounded-full blur-3xl opacity-20 -bottom-48 left-1/4 animate-pulse"
          style={{ 
            animationDuration: '5s', 
            animationDelay: '2s',
            transform: `translate(${mousePosition.x}px, ${-mousePosition.y}px)`
          }}
        ></div>
        
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
        {/* Title */}
        <div className="text-center mb-20">
          <h1 
            className={`text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
            }`}
            style={{
              textShadow: '0 0 80px rgba(139, 92, 246, 0.5)',
            }}
          >
            Technical Skills
          </h1>
          <div className="h-1 w-48 mx-auto bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-full"></div>
        </div>

        {/* Programming Languages Section */}
        <div 
          className={`mb-20 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-black mb-10 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            💻 Programming Languages
          </h2>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-3xl blur-2xl opacity-10 pointer-events-none"></div>
            <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                {programmingSkills.map((skill, index) => (
                  <SkillCard key={skill.name} skill={skill} index={index} showLevel={true} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Frameworks & Tools Section */}
        <div 
          className={`mb-20 transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-black mb-10 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            🛠️ Frameworks & Tools
          </h2>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl blur-2xl opacity-10 pointer-events-none"></div>
            <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {frameworksTools.map((skill, index) => (
                  <SkillCard key={skill.name} skill={skill} index={index} showLevel={true} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Hardware & Embedded Systems Section */}
        <div 
          className={`mb-20 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-black mb-10 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
            ⚡ Hardware & Embedded Systems
          </h2>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl blur-2xl opacity-10 pointer-events-none"></div>
            <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {hardwareSkills.map((skill, index) => (
                  <SkillCard key={skill.name} skill={skill} index={index} showLevel={true} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Engineering Concepts Section */}
        <div 
          className={`mb-20 transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-black mb-10 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            🎓 Computer Engineering Concepts
          </h2>
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-10 pointer-events-none"></div>
            <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {engineeringConcepts.map((item, index) => (
                  <div 
                    key={item.name} 
                    className={`group/item relative ${hasAnimated.current ? 'opacity-100' : 'animate-fade-in'}`}
                    style={!hasAnimated.current ? {
                      animationDelay: `${index * 0.1}s`,
                    } : undefined}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${getLevelGradient(item.level)} rounded-2xl blur-xl opacity-0 group-hover/item:opacity-20 transition-opacity`}></div>
                    <div className="relative bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 group-hover/item:border-white/30 transition-all duration-300">
                      <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center gap-3">
                          <span className="text-3xl">{item.icon}</span>
                          <span className={`font-bold text-lg bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent`}>
                            {item.name}
                          </span>
                        </div>
                        <span className={`px-4 py-1.5 rounded-full text-xs font-bold bg-gradient-to-r ${getLevelGradient(item.level)} text-white shadow-lg`}>
                          {item.level}
                        </span>
                      </div>
                      <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${getLevelGradient(item.level)} rounded-full transition-all duration-1000 ease-out shadow-lg`}
                          style={{
                            width: isVisible ? getLevelWidth(item.level ?? '') : '0%',
                            transitionDelay: `${700 + index * 100}ms`,
                            boxShadow: '0 0 15px currentColor'
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Soft Skills Section */}
        <div 
          className={`transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-black mb-10 bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
            ✨ Soft Skills
          </h2>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-rose-500 rounded-3xl blur-2xl opacity-10 pointer-events-none"></div>
            <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {softSkills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className={`group/soft relative transition-all duration-500 hover:scale-105 ${hasAnimated.current ? 'opacity-100' : 'animate-fade-in'}`}
                    style={!hasAnimated.current ? {
                      animationDelay: `${index * 0.1}s`,
                    } : undefined}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} rounded-2xl blur-xl opacity-0 group-hover/soft:opacity-30 transition-all duration-300`}></div>
                    
                    <div className="relative bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/20 group-hover/soft:border-white/40 shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                      <div className="flex flex-col items-center text-center gap-4">
                        <div className="relative">
                          <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} rounded-full blur-lg opacity-30`}></div>
                          <div className="relative text-6xl group-hover/soft:scale-110 transition-transform duration-300">
                            {skill.icon}
                          </div>
                        </div>
                        <h3 className={`text-2xl font-black bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}>
                          {skill.name}
                        </h3>
                        <p className="text-white/70 text-sm leading-relaxed">
                          {skill.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
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
      `}</style>
    </div>
  );
}