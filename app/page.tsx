'use client';

import { useState, useEffect } from 'react';

export default function Home() {
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

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-red-600 via-red-700 to-rose-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Circles */}
        <div 
          className="absolute w-96 h-96 bg-red-500 rounded-full blur-3xl opacity-20 -top-48 -left-48 animate-pulse"
          style={{ animationDuration: '4s' }}
        ></div>
        <div 
          className="absolute w-96 h-96 bg-rose-400 rounded-full blur-3xl opacity-20 -bottom-48 -right-48 animate-pulse"
          style={{ animationDuration: '6s', animationDelay: '1s' }}
        ></div>
        <div 
          className="absolute w-64 h-64 bg-red-400 rounded-full blur-3xl opacity-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse"
          style={{ animationDuration: '5s', animationDelay: '2s' }}
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
      <main className="relative flex-1 flex flex-col items-center justify-center px-4 py-24 min-h-screen">
        {/* Hello World with staggered animation */}
        <h1 
          className={`text-white text-5xl md:text-7xl font-bold mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}
          style={{
            textShadow: '0 0 40px rgba(255, 255, 255, 0.3), 0 0 80px rgba(255, 255, 255, 0.1)',
          }}
        >
          Hello World!
        </h1>

        {/* Avatar with float animation and glow */}
        <div 
          className={`relative mb-12 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
          }`}
          style={{
            animation: 'float 3s ease-in-out infinite',
          }}
        >
          {/* Glow effect */}
          <div className="absolute inset-0 w-48 h-48 md:w-56 md:h-56 rounded-full bg-white opacity-20 blur-2xl animate-pulse"></div>
          
          {/* Avatar ring */}
          <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-white via-sky-200 to-blue-300 p-2 shadow-2xl">
            <div className="w-full h-full rounded-full bg-sky-200 overflow-hidden relative border-4 border-white/30">
              <img 
                src="/images/me.jpeg" 
                alt="Avatar" 
                className="object-cover w-full h-full hover:scale-110 transition-transform duration-500" 
              />
            </div>
          </div>
        </div>

        {/* Name with slide animation */}
        <h2 
          className={`text-white text-4xl md:text-6xl font-bold mb-3 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}
          style={{
            textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
          }}
        >
          Puntakant Roojang
        </h2>

        {/* Nickname with bounce */}
        <p 
          className={`text-white/90 text-2xl md:text-3xl mb-8 transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}
        >
          (BOMB)
        </p>

        {/* Tagline with typewriter effect styling */}
        <div 
          className={`relative transition-all duration-1000 delay-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-white text-xl md:text-2xl font-mono bg-black/20 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/20 shadow-xl">
            &lt;/Going to be a good engineer!&gt;
          </p>
        </div>

        {/* Scroll indicator */}
        <div 
          className={`absolute bottom-8 transition-all duration-1000 delay-1200 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            animation: 'bounce 2s ease-in-out infinite',
          }}
        >
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white rounded-full animate-pulse"></div>
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
            transform: translateY(-20px);
          }
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  );
}