'use client';

import { useState, useEffect, useRef } from 'react';

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const [sectionsVisible, setSectionsVisible] = useState({
    programming: false,
    frameworks: false,
    hardware: false,
    concepts: false,
    soft: false
  });
  
  const sectionRefs = {
    programming: useRef<HTMLDivElement>(null),
    frameworks: useRef<HTMLDivElement>(null),
    hardware: useRef<HTMLDivElement>(null),
    concepts: useRef<HTMLDivElement>(null),
    soft: useRef<HTMLDivElement>(null)
  };

  useEffect(() => {
    setIsVisible(true);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionName = entry.target.getAttribute('data-section') as keyof typeof sectionsVisible;
            if (sectionName) {
              setSectionsVisible(prev => ({ ...prev, [sectionName]: true }));
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    Object.values(sectionRefs).forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
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
    isVisible: boolean;
  }

  const SkillCard = ({ skill, index, showLevel = false, isVisible }: SkillCardProps) => (
    <div
      className={`group relative transition-all duration-500 hover:scale-105 hover:-rotate-2 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
      style={{
        transitionDelay: `${index * 30}ms`
      }}
    >
      <div className="relative h-full">
        <div className={`absolute inset-0 bg-gradient-to-br ${skill.color || 'from-purple-500 to-pink-500'} rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-all duration-300 group-hover:scale-110`}></div>
        
        <div className="relative bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 group-hover:border-white/30 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center justify-center gap-3 h-full group-hover:bg-white/10">
          <div className="relative">
            {skill.icon.startsWith('http') ? (
              <>
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color || 'from-purple-500 to-pink-500'} rounded-full blur-sm opacity-0 group-hover:opacity-30 transition-all duration-300`}></div>
                <img src={skill.icon} alt={skill.name} className="w-16 h-16 object-contain relative z-10 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300" style={{ animation: 'pulse-slow 3s ease-in-out infinite' }} />
              </>
            ) : (
              <span className="text-5xl group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300 inline-block">{skill.icon}</span>
            )}
          </div>
          <p className={`font-bold text-sm text-center bg-gradient-to-r ${skill.color || 'from-white to-purple-200'} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}>
            {skill.name}
          </p>
          {showLevel && skill.level && (
            <div className="w-full mt-2">
              <div className="h-2 bg-white/10 rounded-full overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" style={{ animation: 'shimmer 3s infinite' }}></div>
                <div 
                  className={`h-full bg-gradient-to-r ${getLevelGradient(skill.level)} rounded-full transition-all duration-700 ease-out relative overflow-hidden`}
                  style={{
                    width: isVisible ? getLevelWidth(skill.level) : '0%',
                    transitionDelay: `${300 + index * 30}ms`
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent" style={{ animation: 'shimmer 2s infinite' }}></div>
                </div>
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
            Technical Skills
          </h1>
          <div className="h-1 w-48 mx-auto bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-full animate-pulse-width"></div>
        </div>

        {/* Programming Languages Section */}
        <div 
          ref={sectionRefs.programming}
          data-section="programming"
          className="mb-20"
        >
          <h2 className={`text-5xl md:text-6xl font-black mb-10 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent transition-all duration-700 ${
            sectionsVisible.programming ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            💻 Programming Languages
          </h2>
          <div className="relative">
            <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10 shadow-xl">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                {programmingSkills.map((skill, index) => (
                  <SkillCard key={skill.name} skill={skill} index={index} showLevel={true} isVisible={sectionsVisible.programming} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Frameworks & Tools Section */}
        <div 
          ref={sectionRefs.frameworks}
          data-section="frameworks"
          className="mb-20"
        >
          <h2 className={`text-5xl md:text-6xl font-black mb-10 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent transition-all duration-700 ${
            sectionsVisible.frameworks ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            🛠️ Frameworks & Tools
          </h2>
          <div className="relative">
            <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10 shadow-xl">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {frameworksTools.map((skill, index) => (
                  <SkillCard key={skill.name} skill={skill} index={index} showLevel={true} isVisible={sectionsVisible.frameworks} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Hardware & Embedded Systems Section */}
        <div 
          ref={sectionRefs.hardware}
          data-section="hardware"
          className="mb-20"
        >
          <h2 className={`text-5xl md:text-6xl font-black mb-10 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent transition-all duration-700 ${
            sectionsVisible.hardware ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            ⚡ Hardware & Embedded Systems
          </h2>
          <div className="relative">
            <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10 shadow-xl">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {hardwareSkills.map((skill, index) => (
                  <SkillCard key={skill.name} skill={skill} index={index} showLevel={true} isVisible={sectionsVisible.hardware} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Engineering Concepts Section */}
        <div 
          ref={sectionRefs.concepts}
          data-section="concepts"
          className="mb-20"
        >
          <h2 className={`text-5xl md:text-6xl font-black mb-10 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent transition-all duration-700 ${
            sectionsVisible.concepts ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            🎓 Computer Engineering Concepts
          </h2>
          <div className="relative max-w-5xl mx-auto">
            <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10 shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {engineeringConcepts.map((item, index) => (
                  <div 
                    key={item.name} 
                    className={`group/item relative transition-all duration-500 ${
                      sectionsVisible.concepts ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${getLevelGradient(item.level)} rounded-2xl blur-lg opacity-0 group-hover/item:opacity-20 transition-opacity`}></div>
                    <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 group-hover/item:border-white/20 transition-all duration-300">
                      <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center gap-3">
                          <span className="text-3xl">{item.icon}</span>
                          <span className="font-bold text-lg bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                            {item.name}
                          </span>
                        </div>
                        <span className={`px-4 py-1.5 rounded-full text-xs font-bold bg-gradient-to-r ${getLevelGradient(item.level)} text-white shadow-lg`}>
                          {item.level}
                        </span>
                      </div>
                      <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${getLevelGradient(item.level)} rounded-full transition-all duration-700 ease-out`}
                          style={{
                            width: sectionsVisible.concepts ? getLevelWidth(item.level) : '0%',
                            transitionDelay: `${300 + index * 50}ms`
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
          ref={sectionRefs.soft}
          data-section="soft"
        >
          <h2 className={`text-5xl md:text-6xl font-black mb-10 bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent transition-all duration-700 ${
            sectionsVisible.soft ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            ✨ Soft Skills
          </h2>
          <div className="relative">
            <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10 shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {softSkills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className={`group/soft relative transition-all duration-500 hover:scale-105 hover:-rotate-1 ${
                      sectionsVisible.soft ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} rounded-2xl blur-lg opacity-0 group-hover/soft:opacity-30 transition-all duration-300 group-hover/soft:scale-110`} style={{ animation: 'pulse-glow 3s ease-in-out infinite' }}></div>
                    
                    <div className="relative bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 group-hover/soft:border-white/30 shadow-lg hover:shadow-2xl transition-all duration-300 h-full group-hover/soft:bg-white/10">
                      <div className="flex flex-col items-center text-center gap-4">
                        <div className="relative">
                          <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} rounded-full blur-md opacity-20 group-hover/soft:opacity-40 transition-opacity duration-300`}></div>
                          <div className="relative text-6xl group-hover/soft:scale-125 group-hover/soft:rotate-12 transition-transform duration-300" style={{ animation: 'bounce-subtle 3s ease-in-out infinite' }}>
                            {skill.icon}
                          </div>
                        </div>
                        <h3 className={`text-2xl font-black bg-gradient-to-r ${skill.color} bg-clip-text text-transparent group-hover/soft:scale-105 transition-transform duration-300`}>
                          {skill.name}
                        </h3>
                        <p className="text-white/70 text-sm leading-relaxed group-hover/soft:text-white/90 transition-colors duration-300">
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
    </div>
  );
}