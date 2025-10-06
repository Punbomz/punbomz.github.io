'use client';

import { useState, useEffect } from 'react';
import { Search, Calendar, Tag } from 'lucide-react';

export default function BlogPage() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState('all');

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const blogPosts = [
    // {
    //   id: 1,
    //   title: 'Getting Started with React',
    //   description: 'Learn the fundamentals of React and start building modern web applications with confidence.',
    //   date: '2025-01-15',
    //   tags: ['React', 'JavaScript']
    // }
  ];

  const allTags = ['all', ...Array.from(new Set(blogPosts.flatMap(post => post.tags)))];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = selectedTag === 'all' || post.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-red-600 via-red-700 to-rose-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
      <main className="relative px-4 py-12 md:py-16 max-w-7xl mx-auto">
        {/* Header */}
        <div 
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}
        >
          <h1 
            className="text-white text-5xl md:text-7xl font-bold mb-4"
            style={{
              textShadow: '0 0 40px rgba(255, 255, 255, 0.3), 0 0 80px rgba(255, 255, 255, 0.1)',
            }}
          >
            "Blog"
          </h1>
        </div>

        {/* Search and Filter Section */}
        <div 
          className={`mb-12 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 pr-12 rounded-full bg-white/90 backdrop-blur-sm border-2 border-white/40 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/30 transition-all duration-300 text-lg"
              />
              <Search className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400" size={24} />
            </div>
          </div>

          {/* Tag Filter */}
          <div className="flex flex-wrap gap-3 justify-center items-center">
            {allTags.map((tag, index) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-5 py-2 rounded-full font-semibold transition-all duration-300 hover:scale-110 hover:shadow-lg ${
                  selectedTag === tag
                    ? 'bg-white text-red-700 shadow-xl'
                    : 'bg-white/20 text-white border-2 border-white/30 hover:bg-white/30'
                }`}
                style={{
                  transitionDelay: `${index * 50}ms`
                }}
              >
                #{tag}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post, index) => (
            <div
              key={post.id}
              className={`group relative bg-gradient-to-br from-red-500/80 to-rose-600/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/20 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500 cursor-pointer ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: `${400 + index * 100}ms`,
              }}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-white opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500"></div>
              
              <div className="relative">
                {/* Date */}
                <div className="flex justify-end mb-3">
                  <div className="flex items-center gap-2 text-white/80 text-sm">
                    <Calendar size={16} />
                    <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-white text-2xl font-bold mb-3 group-hover:text-yellow-200 transition-colors duration-300">
                  {post.title}
                </h3>

                {/* Description */}
                <p className="text-white/90 text-base mb-4 leading-relaxed">
                  {post.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-white text-sm font-semibold px-3 py-1 bg-white/20 rounded-full border border-white/30"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover indicator */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-yellow-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
            </div>
          ))}
        </div>

        {/* No results message */}
        {/* {filteredPosts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-white text-2xl font-semibold">No blog posts found</p>
            <p className="text-white/70 text-lg mt-2">Try adjusting your search or filter</p>
          </div>
        )} */}

        <div className="text-center py-20">
            <p className="text-white text-3xl font-semibold font-mono">Coming Soon...</p>
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
      `}</style>
    </div>
  );
}