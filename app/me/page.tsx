'use client';

import { useState, useEffect } from 'react';

interface Interest {
  name: string;
  icon: string;
  color: string;
}

interface Strength {
  name: string;
  icon: string;
  bg: string;
}

interface Target {
  name: string;
  color: string;
}

// Loading skeleton for interests
function InterestSkeleton() {
  return (
    <div className="relative animate-pulse">
      <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
        <div className="w-12 h-12 bg-white/10 rounded-lg mb-3"></div>
        <div className="h-4 bg-white/10 rounded w-3/4"></div>
      </div>
    </div>
  );
}

// Loading skeleton for strengths
function StrengthSkeleton() {
  return (
    <div className="relative animate-pulse">
      <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
        <div className="w-16 h-16 bg-white/10 rounded-xl mb-4"></div>
        <div className="h-6 bg-white/10 rounded w-2/3"></div>
      </div>
    </div>
  );
}

// Loading skeleton for targets
function TargetSkeleton() {
  return (
    <div className="relative animate-pulse">
      <div className="flex items-center gap-4 bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/10"></div>
        <div className="h-5 bg-white/10 rounded flex-1"></div>
      </div>
    </div>
  );
}

export default function AboutMe() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const [interestLoading, setInterestLoading] = useState(true);
  const [strengthLoading, setStrengthLoading] = useState(true);
  const [targetLoading, setTargetLoading] = useState(true);

  const [interests, setInterest] = useState<Interest[]>([]);
  const [strengths, setStrength] = useState<Strength[]>([]);
  const [targets, setTarget] = useState<Target[]>([]);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    fetchData();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  async function fetchData() {
    try {
      fetch('/api/interests')
        .then(res => res.json())
        .then(data => {
          setInterest(data);
          setInterestLoading(false);
        })
        .catch(err => {
          console.error('Error fetching interest:', err);
          setInterestLoading(false);
        });

      fetch('/api/strengths')
        .then(res => res.json())
        .then(data => {
          setStrength(data);
          setStrengthLoading(false);
        })
        .catch(err => {
          console.error('Error fetching framework:', err);
          setStrengthLoading(false);
        });

      fetch('/api/targets')
        .then(res => res.json())
        .then(data => {
          setTarget(data);
          setTargetLoading(false);
        })
        .catch(err => {
          console.error('Error fetching hardware:', err);
          setTargetLoading(false);
        });

    } catch (error) {
      console.error('Error fetching data:', error);
      setInterestLoading(false);
      setStrengthLoading(false);
      setTargetLoading(false);
    }
  }
    

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
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
            <div className="h-1 w-48 mx-auto bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-full animate-pulse-width"></div>
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
          {interestLoading ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[...Array(8)].map((_, i) => (
                <InterestSkeleton key={i} />
              ))}
            </div>
          ) : interests.length > 0 ? (
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
                    {interest.name}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-white/60 py-12">
              No interests found
            </div>
          )}
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
          {strengthLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[...Array(4)].map((_, i) => (
                <StrengthSkeleton key={i} />
              ))}
            </div>
          ) : strengths.length > 0 ? (
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
                      {strength.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-white/60 py-12">
              No strengths found
            </div>
          )}
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
          {targetLoading ? (
            <div className="max-w-3xl mx-auto space-y-4">
              {[...Array(5)].map((_, i) => (
                <TargetSkeleton key={i} />
              ))}
            </div>
          ) : targets.length > 0 ? (
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
                      {target.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-white/60 py-12">
              No targets found
            </div>
          )}
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
                <a href="mailto:bombbomb925@gmail.com" className="group/item flex items-center gap-6 p-6 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-red-400 to-pink-400 flex items-center justify-center text-2xl shadow-lg">
                    📧
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent mb-1">
                      EMAIL
                    </p>
                    <p className="text-lg md:text-xl font-medium text-white group-hover/item:bg-gradient-to-r group-hover/item:from-white group-hover/item:to-pink-200 group-hover/item:bg-clip-text group-hover/item:text-transparent transition-all break-all">
                      bombbomb925@gmail.com
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