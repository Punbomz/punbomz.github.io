'use client';

import { useState, useEffect, useRef } from 'react';

interface Programming {
  name: string;
  icon: string;
  level: string;
  color: string;
}

interface Framework {
  name: string;
  icon: string;
  level: string;
  color: string;
}

interface Hardware {
  name: string;
  icon: string;
  level: string;
  color: string;
}

interface Computer {
  name: string;
  icon: string;
  level: string;
  color: string;
}

interface softSkill {
  name: string;
  description: string;
  icon: string;
  color: string;
}

export default function Skills() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [sectionsVisible, setSectionsVisible] = useState({
    programming: false,
    frameworks: false,
    hardware: false,
    concepts: false,
    soft: false
  });

  const [programmingLoading, setProgrammingLoading] = useState(true);
  const [frameworkLoading, setFrameworkLoading] = useState(true);
  const [hardwareLoading, setHardwareLoading] = useState(true);
  const [computerLoading, setComputerLoading] = useState(true);
  const [softskillLoading, setSoftskillLoading] = useState(true);

  const [programmings, setProgramming] = useState<Programming[]>([]);
  const [frameworks, setFramework] = useState<Framework[]>([]);
  const [hardwares, setHardware] = useState<Hardware[]>([]);
  const [computers, setComputer] = useState<Computer[]>([]);
  const [softskills, setSoftskill] = useState<softSkill[]>([]);
  
  const sectionRefs = {
    programming: useRef<HTMLDivElement>(null),
    frameworks: useRef<HTMLDivElement>(null),
    hardware: useRef<HTMLDivElement>(null),
    concepts: useRef<HTMLDivElement>(null),
    soft: useRef<HTMLDivElement>(null)
  };

  const scrollContainerRefs = {
    programming: useRef<HTMLDivElement>(null),
    frameworks: useRef<HTMLDivElement>(null),
    hardware: useRef<HTMLDivElement>(null)
  };

  useEffect(() => {
    const scrollSections = [
      scrollContainerRefs.programming.current,
      scrollContainerRefs.frameworks.current,
      scrollContainerRefs.hardware.current
    ];

    const animationFrameIds: number[] = [];

    scrollSections.forEach((section) => {
      if (!section) return;
      
      let scrollPosition = 0;
      const scrollSpeed = 0.5; // pixels per frame for smooth animation

      const scroll = () => {
        if (section) {
          scrollPosition += scrollSpeed;
          section.scrollLeft = scrollPosition;
          
          // Get the width of a single set of items
          const singleSetWidth = section.scrollWidth / 2;
          
          // When we've scrolled past one complete set, reset to the beginning
          if (scrollPosition >= singleSetWidth) {
            scrollPosition = 0;
            section.scrollLeft = 0;
          }
        }
        const id = requestAnimationFrame(scroll);
        animationFrameIds.push(id);
      };

      const id = requestAnimationFrame(scroll);
      animationFrameIds.push(id);
    });

    return () => {
      animationFrameIds.forEach(id => {
        cancelAnimationFrame(id);
      });
    };
  }, []);

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

    fetchData();

    return () => observer.disconnect();

  }, []);

  async function fetchData() {
    try {
      // Fetch
      fetch('/api/programming')
        .then(res => res.json())
        .then(data => {
          setProgramming(data);
        })
        .catch(err => {
          console.error('Error fetching programming:', err);
        });

      fetch('/api/framework')
        .then(res => res.json())
        .then(data => {
          setFramework(data);
        })
        .catch(err => {
          console.error('Error fetching framework:', err);
        });

      fetch('/api/hardware')
        .then(res => res.json())
        .then(data => {
          setHardware(data);
        })
        .catch(err => {
          console.error('Error fetching hardware:', err);
        });

      fetch('/api/computer')
        .then(res => res.json())
        .then(data => {
          setComputer(data);
        })
        .catch(err => {
          console.error('Error fetching computer:', err);
        });

      fetch('/api/softskill')
        .then(res => res.json())
        .then(data => {
          setSoftskill(data);
        })
        .catch(err => {
          console.error('Error fetching softskill:', err);
        });

    } catch (error) {
      console.error('Error fetching data:', error);
      setProgrammingLoading(false);
      setFrameworkLoading(false);
      setHardwareLoading(false);
      setComputerLoading(false);
      setSoftskillLoading(false);
    }
  }

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
      className={`relative transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
      style={{
        transitionDelay: `${index * 30}ms`
      }}
    >
      <div className="relative h-full">
        <div className="relative bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 shadow-lg transition-all duration-300 flex flex-col items-center justify-center gap-3 h-full">
          <div className="relative">
            {skill.icon.startsWith('http') ? (
              <img src={skill.icon} alt={skill.name} className="w-16 h-16 object-contain relative z-10 transition-transform duration-300" />
            ) : (
              <span className="text-5xl transition-transform duration-300 inline-block">{skill.icon}</span>
            )}
          </div>
          <p className={`font-bold text-sm text-center bg-gradient-to-r ${skill.color || 'from-white to-purple-200'} bg-clip-text text-transparent transition-transform duration-300`}>
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

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
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
            <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10 shadow-xl overflow-hidden">
              <div 
                ref={scrollContainerRefs.programming}
                className="grid grid-rows-1 md:grid-rows-2 grid-flow-col auto-cols-[minmax(150px,1fr)] gap-6 overflow-x-auto scrollbar-hide"
              >
                {[...programmings, ...programmings].map((skill, index) => (
                  <SkillCard key={`${skill.name}-${index}`} skill={skill} index={index} showLevel={true} isVisible={sectionsVisible.programming} />
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
            <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10 shadow-xl overflow-hidden">
              <div 
                ref={scrollContainerRefs.frameworks}
                className="grid grid-rows-1 md:grid-rows-2 grid-flow-col auto-cols-[minmax(150px,1fr)] gap-6 overflow-x-auto scrollbar-hide"
              >
                {[...frameworks, ...frameworks].map((skill, index) => (
                  <SkillCard key={`${skill.name}-${index}`} skill={skill} index={index} showLevel={true} isVisible={sectionsVisible.frameworks} />
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
            <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10 shadow-xl overflow-hidden">
              <div 
                ref={scrollContainerRefs.hardware}
                className="grid grid-rows-1 md:grid-rows-2 grid-flow-col auto-cols-[minmax(150px,1fr)] gap-6 overflow-x-auto scrollbar-hide"
              >
                {[...hardwares, ...hardwares].map((skill, index) => (
                  <SkillCard key={`${skill.name}-${index}`} skill={skill} index={index} showLevel={true} isVisible={sectionsVisible.hardware} />
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
                {computers.map((item, index) => (
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
                {softskills.map((skill, index) => (
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