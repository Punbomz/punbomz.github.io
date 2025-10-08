'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
 
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Gradient Orbs */}
        <div 
          className="absolute w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20 -top-48 -left-48 animate-pulse"
          style={{ 
            animationDuration: '4s',
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
          }}
        ></div>
        <div 
          className="absolute w-96 h-96 bg-pink-500 rounded-full blur-3xl opacity-20 top-1/4 right-0 animate-pulse"
          style={{ 
            animationDuration: '5s', 
            animationDelay: '0.5s',
            transform: `translate(${-mousePosition.x}px, ${mousePosition.y}px)`
          }}
        ></div>
        <div 
          className="absolute w-96 h-96 bg-cyan-500 rounded-full blur-3xl opacity-20 -bottom-48 -right-48 animate-pulse"
          style={{ 
            animationDuration: '6s', 
            animationDelay: '1s',
            transform: `translate(${mousePosition.x}px, ${-mousePosition.y}px)`
          }}
        ></div>
        <div 
          className="absolute w-64 h-64 bg-blue-400 rounded-full blur-3xl opacity-15 top-1/2 left-1/4 animate-pulse"
          style={{ 
            animationDuration: '5s', 
            animationDelay: '2s',
            transform: `translate(${-mousePosition.x * 0.5}px, ${-mousePosition.y * 0.5}px)`
          }}
        ></div>
        
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
          {[...Array(20)].map((_, i) => (
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
      <main className="relative flex-1 flex flex-col items-center justify-center px-4 py-24 min-h-screen">
        
        {/* Hello World with gradient animation */}
        <h1 
          className={`text-7xl md:text-9xl font-black mb-16 transition-all duration-1000 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}
          style={{
            textShadow: '0 0 80px rgba(139, 92, 246, 0.5)',
            animation: 'gradient 3s ease infinite',
            backgroundSize: '200% 200%'
          }}
        >
          Hello World!
        </h1>

        {/* Avatar Container with Enhanced Effects */}
        <div 
          className={`relative mb-16 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
          }`}
          style={{
            animation: 'float 3s ease-in-out infinite',
          }}
        >
          {/* Multiple layered glows */}
          <div className="absolute inset-0 w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 opacity-30 blur-3xl animate-pulse"></div>
          <div className="absolute inset-0 w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 opacity-20 blur-2xl animate-pulse" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
          
          {/* Rotating gradient ring */}
          <div className="absolute inset-0 w-64 h-64 md:w-80 md:h-80 rounded-full" style={{ animation: 'rotate 8s linear infinite' }}>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-transparent to-pink-400 opacity-40"></div>
          </div>
          
          {/* Avatar ring with gradient border */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-cyan-400 via-purple-400 to-pink-400 p-1.5 shadow-2xl shadow-purple-500/50">
            <div className="w-full h-full rounded-full bg-slate-900 p-1.5">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-900 to-slate-900 overflow-hidden relative border-4 border-white/10">
                <img 
                  src="/images/me.jpeg" 
                  alt="Avatar" 
                  className="object-cover w-full h-full hover:scale-110 transition-transform duration-500" 
                />
                {/* Overlay gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>

          {/* Orbiting dots */}
          <div className="absolute inset-0 w-64 h-64 md:w-80 md:h-80" style={{ animation: 'rotate 10s linear infinite' }}>
            <div className="absolute top-0 left-1/2 w-3 h-3 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50 -translate-x-1/2"></div>
          </div>
          <div className="absolute inset-0 w-64 h-64 md:w-80 md:h-80" style={{ animation: 'rotate 10s linear infinite', animationDelay: '5s' }}>
            <div className="absolute top-0 left-1/2 w-3 h-3 bg-pink-400 rounded-full shadow-lg shadow-pink-400/50 -translate-x-1/2"></div>
          </div>
        </div>

        {/* Name with enhanced gradient */}
        <div 
          className={`text-center mb-6 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}
        >
          <h2 
            className="text-5xl md:text-7xl font-black mb-2 bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent"
            style={{
              textShadow: '0 0 40px rgba(255, 255, 255, 0.2)',
            }}
          >
            Puntakant Roojang
          </h2>
          <div className="h-1 w-48 mx-auto bg-gradient-to-r from-transparent via-purple-400 to-transparent rounded-full"></div>
        </div>

        {/* Nickname with badge style */}
        <div 
          className={`relative group mb-10 transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
          <div className="relative bg-white/5 backdrop-blur-xl px-8 py-4 rounded-full border border-white/20">
            <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
              " BOMB "
            </p>
          </div>
        </div>

        {/* Tagline with code block style */}
        <div 
          className={`relative group transition-all duration-1000 delay-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-cyan-500 to-purple-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
          <div className="relative bg-black/40 backdrop-blur-xl px-8 py-5 rounded-2xl border border-white/20 shadow-2xl">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <p className="font-mono text-xl md:text-2xl">
              <span className="text-pink-400">&lt;</span>
              <span className="bg-gradient-to-r from-cyan-400 via-green-400 to-purple-400 bg-clip-text text-transparent font-semibold">
                Going to be a good engineer!
              </span>
              <span className="text-pink-400">&gt;</span>
            </p>
          </div>
        </div>

        {/* Social Icons with enhanced design */}
        <div 
          className={`flex gap-6 mt-16 transition-all duration-1000 delay-1200 mb-10 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* GitHub Icon */}
          <a 
            href="https://github.com/Punbomz" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity"></div>
            <div className="relative w-16 h-16 bg-white/5 backdrop-blur-xl rounded-2xl flex items-center justify-center border border-white/20 group-hover:border-white/40 transition-all duration-300 shadow-lg group-hover:scale-110">
              <svg className="w-8 h-8 text-white group-hover:text-purple-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </div>
          </a>

          {/* LinkedIn Icon */}
          <a 
            href="https://www.linkedin.com/in/puntakant-roojang-4457192ab/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity"></div>
            <div className="relative w-16 h-16 bg-white/5 backdrop-blur-xl rounded-2xl flex items-center justify-center border border-white/20 group-hover:border-white/40 transition-all duration-300 shadow-lg group-hover:scale-110">
              <svg className="w-8 h-8 text-white group-hover:text-cyan-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </div>
          </a>

          {/* Email Icon */}
          <a 
            href="mailto:bombbomb925@gmail.com"
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-red-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity"></div>
            <div className="relative w-16 h-16 bg-white/5 backdrop-blur-xl rounded-2xl flex items-center justify-center border border-white/20 group-hover:border-white/40 transition-all duration-300 shadow-lg group-hover:scale-110">
              <svg className="w-8 h-8 text-white group-hover:text-pink-400 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
          </a>
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

        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </div>
  );
}