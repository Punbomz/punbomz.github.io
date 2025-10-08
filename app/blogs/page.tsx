'use client';

import { useState, useEffect, useRef } from 'react';
import { Search, Calendar, Tag } from 'lucide-react';

type BlogPost = {
  id: number;
  title: string;
  description: string;
  date: string;
  tags: string[];
  readTime: string;
  category: string;
};

export default function BlogPage() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState('all');
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

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'Getting Started with React',
      description: 'Learn the fundamentals of React and start building modern web applications with confidence. Explore hooks, components, and state management.',
      date: '2025-01-15',
      tags: ['React', 'JavaScript', 'Web Dev'],
      readTime: '5 min',
      category: 'Tutorial'
    }
  ];

  const allTags = ['all', ...Array.from(new Set(blogPosts.flatMap(post => post.tags)))];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = selectedTag === 'all' || post.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  const getCategoryColor = (category: string) => {
    switch(category) {
      case 'Tutorial': return 'from-blue-500 to-cyan-500';
      case 'Guide': return 'from-purple-500 to-pink-500';
      case 'Project': return 'from-green-500 to-emerald-500';
      default: return 'from-orange-500 to-red-500';
    }
  };

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
            Blogs
          </h1>
          <div className="h-1 w-48 mx-auto bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-full animate-pulse-width"></div>
        </div>

        {/* Search and Filter Section */}
        <div 
          className={`mb-16 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Search Bar */}
          {/* <div className="max-w-3xl mx-auto mb-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full blur-xl opacity-30 group-focus-within:opacity-60 transition-all duration-300"></div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-8 py-5 pr-16 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/40 transition-all duration-300 text-lg"
                />
                <Search className="absolute right-6 top-1/2 -translate-y-1/2 text-white/50 group-focus-within:text-cyan-400 transition-colors" size={24} />
              </div>
            </div>
          </div> */}

          {/* Tag Filter */}
          {/* <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-10 pointer-events-none"></div>
            <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <Tag className="text-purple-400" size={24} />
                <h3 className="text-white font-bold text-lg">Filter by Tags</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {allTags.map((tag, index) => (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(tag)}
                    className={`px-5 py-2.5 rounded-full font-semibold transition-all duration-300 hover:scale-110 ${
                      selectedTag === tag
                        ? 'bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 text-slate-900 shadow-xl'
                        : 'bg-white/10 text-white border border-white/20 hover:bg-white/20 hover:border-white/40'
                    }`}
                    style={{
                      transitionDelay: `${index * 30}ms`
                    }}
                  >
                    #{tag}
                  </button>
                ))}
              </div>
            </div>
          </div> */}
        </div>

        {/* Blog Posts Grid */}
        {/* {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <div
                key={post.id}
                className={`group relative transition-all duration-500 hover:scale-105 ${
                  hasAnimated.current ? 'opacity-100' : 'animate-fade-in'
                }`}
                style={!hasAnimated.current ? {
                  animationDelay: `${0.4 + index * 0.1}s`,
                } : undefined}
              >
                <div className="relative h-full"> */}
                  {/* Glow effect */}
                  {/* <div className={`absolute inset-0 bg-gradient-to-br ${getCategoryColor(post.category)} rounded-3xl blur-2xl opacity-0 group-hover:opacity-40 transition-all duration-300`}></div> */}
                  
                  {/* Card */}
                  {/* <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/20 group-hover:border-white/40 shadow-2xl transition-all duration-300 h-full flex flex-col"> */}
                    {/* Category Badge */}
                    {/* <div className="flex items-center justify-between mb-4">
                      <span className={`px-4 py-1.5 rounded-full text-xs font-bold bg-gradient-to-r ${getCategoryColor(post.category)} text-white shadow-lg`}>
                        {post.category}
                      </span>
                      <div className="flex items-center gap-2 text-white/60 text-sm">
                        <Calendar size={14} />
                        <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                      </div>
                    </div> */}

                    {/* Title */}
                    {/* <h3 className={`text-2xl font-black mb-3 bg-gradient-to-r ${getCategoryColor(post.category)} bg-clip-text text-transparent group-hover:scale-105 transition-transform origin-left`}>
                      {post.title}
                    </h3> */}

                    {/* Description */}
                    {/* <p className="text-white/70 text-sm leading-relaxed mb-4 flex-grow">
                      {post.description}
                    </p> */}

                    {/* Tags */}
                    {/* <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-white/80 text-xs px-3 py-1 bg-white/10 rounded-full border border-white/20 hover:bg-white/20 transition-colors"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div> */}

                    {/* Footer */}
                    {/* <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <span className="text-white/60 text-sm font-semibold">
                        ⏱️ {post.readTime} read
                      </span>
                      <button className={`px-4 py-2 rounded-full bg-gradient-to-r ${getCategoryColor(post.category)} text-white text-sm font-bold hover:shadow-lg transition-all duration-300 hover:scale-105`}>
                        Read More →
                      </button>
                    </div> */}

                    {/* Hover indicator */}
                    {/* <div className={`absolute top-4 right-4 w-3 h-3 bg-gradient-to-r ${getCategoryColor(post.category)} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse`}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div 
            className={`text-center py-20 transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-30"></div>
              <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-12 border border-white/20">
                <div className="text-6xl mb-4 animate-bounce">🔍</div>
                <p className="text-white text-3xl font-bold mb-2">No articles found</p>
                <p className="text-white/70 text-lg">Try adjusting your search or filter</p>
              </div>
            </div>
          </div>
        )} */}

        {/* Coming Soon Section - Uncomment if needed */}
        <div 
          className={`text-center py-20 mt-16 transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-30"></div>
            <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-12 border border-white/20">
              <div className="text-6xl mb-6 animate-pulse">✨</div>
              <p className="text-white text-4xl font-black mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                More Articles Coming Soon
              </p>
              <p className="text-white/70 text-lg">
                Stay tuned for more insights and tutorials!
              </p>
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
      `}</style>
    </div>
  );
}