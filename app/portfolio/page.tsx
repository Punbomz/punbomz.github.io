'use client';

import { useState, useEffect } from 'react';

export default function Portfolio() {
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

  const projects = [
    {
      name: 'E-Commerce Platform',
      details: 'A full-stack e-commerce platform built with Next.js, featuring product management, shopping cart, and secure payment integration. Implemented responsive design and optimized performance.',
      icon: '🛒',
      tags: ['Next.js', 'React', 'Tailwind', 'Stripe'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Task Management App',
      details: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features. Built with React and Firebase.',
      icon: '✅',
      tags: ['React', 'Firebase', 'Real-time'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Weather Dashboard',
      details: 'An interactive weather dashboard displaying real-time weather data, forecasts, and beautiful visualizations. Integrated with multiple weather APIs for accurate data.',
      icon: '🌤️',
      tags: ['JavaScript', 'API', 'Charts'],
      color: 'from-orange-500 to-yellow-500'
    },
  ];

  const experiences = [
    {
      title: 'Frontend Developer Intern',
      company: 'Tech Startup Co.',
      period: '2023 - 2024',
      details: 'Developed responsive web applications using React and TypeScript. Collaborated with designers to implement pixel-perfect UI components. Improved website performance by 40%.',
      icon: '💻',
    },
    {
      title: 'Web Development Volunteer',
      company: 'Local Community Center',
      period: '2022 - 2023',
      details: 'Created and maintained the community center\'s website. Implemented booking system for events and classes. Trained staff on content management.',
      icon: '🤝',
    },
    {
      title: 'Coding Workshop Facilitator',
      company: 'University Tech Club',
      period: '2021 - Present',
      details: 'Led workshops teaching web development fundamentals to beginners. Mentored students on coding projects. Organized hackathons and coding competitions.',
      icon: '👨‍🏫',
    },
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
          className="absolute w-96 h-96 bg-rose-400 rounded-full blur-3xl opacity-20 top-1/3 -right-48 animate-pulse"
          style={{ animationDuration: '6s', animationDelay: '1s' }}
        ></div>
        <div 
          className="absolute w-96 h-96 bg-red-400 rounded-full blur-3xl opacity-20 -bottom-48 left-1/3 animate-pulse"
          style={{ animationDuration: '5s', animationDelay: '2s' }}
        ></div>
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            transform: `translateY(${scrollY * 0.3}px)`
          }}
        ></div>
      </div>

      {/* Main Content */}
      <main className="relative px-4 py-12 max-w-6xl mx-auto">
        {/* Portfolio Title */}
        <h1 
          className={`text-white text-5xl md:text-6xl font-bold text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}
          style={{
            textShadow: '0 0 40px rgba(255, 255, 255, 0.3)',
          }}
        >
          "Portfolio"
        </h1>

        {/* Projects Section */}
        <div className="mb-20">
          <div className="space-y-8">
            {projects.map((project, index) => (
              <div
                key={project.name}
                className={`group transition-all duration-1000 delay-${index * 100} ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}
                style={{
                  transitionDelay: `${300 + index * 150}ms`,
                }}
              >
                <div className="relative">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  
                  {/* Project card */}
                  <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl hover:bg-white/15 transition-all duration-300 hover:scale-[1.02]">
                    <div className="flex items-start gap-6">
                      {/* Icon */}
                      <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${project.color} rounded-2xl flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {project.icon}
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-white text-2xl md:text-3xl font-bold mb-3">
                          {project.name}
                        </h3>
                        <p className="text-white/80 text-base md:text-lg mb-4 leading-relaxed">
                          {project.details}
                        </p>
                        
                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold border border-white/30"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experiences Title */}
        <h2 
          className={`text-white text-5xl md:text-6xl font-bold text-center mb-16 transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}
          style={{
            textShadow: '0 0 40px rgba(255, 255, 255, 0.3)',
          }}
        >
          "Experiences"
        </h2>

        {/* Experiences Section */}
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <div
              key={experience.title}
              className={`group transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
              style={{
                transitionDelay: `${900 + index * 150}ms`,
              }}
            >
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-l from-white/10 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                
                {/* Experience card */}
                <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl hover:bg-white/15 transition-all duration-300 hover:scale-[1.02]">
                  <div className="flex items-start gap-6">
                    {/* Icon */}
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-rose-400 to-red-600 rounded-2xl flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {experience.icon}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                        <h3 className="text-white text-2xl md:text-3xl font-bold">
                          {experience.title}
                        </h3>
                        <span className="text-white/70 font-semibold text-sm md:text-base mt-1 md:mt-0">
                          {experience.period}
                        </span>
                      </div>
                      <p className="text-rose-200 text-lg font-semibold mb-3">
                        {experience.company}
                      </p>
                      <p className="text-white/80 text-base md:text-lg leading-relaxed">
                        {experience.details}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div 
          className={`mt-16 text-center transition-all duration-1000 delay-1200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl max-w-2xl mx-auto">
            <h3 className="text-white text-3xl font-bold mb-4">
              Interested in working together?
            </h3>
            <p className="text-white/80 text-lg mb-6">
              Feel free to reach out for collaborations or just a friendly chat!
            </p>
            <button className="bg-white text-red-700 px-8 py-3 rounded-full font-bold text-lg hover:bg-rose-100 transition-all duration-300 hover:scale-105 shadow-xl">
              Get In Touch 📧
            </button>
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