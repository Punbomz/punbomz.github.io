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

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
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
    },
    {
      id: 2,
      title: 'Mastering TypeScript',
      description: 'Deep dive into TypeScript features and best practices. Learn how type safety can improve your development workflow and catch bugs early.',
      date: '2025-01-10',
      tags: ['TypeScript', 'JavaScript'],
      readTime: '8 min',
      category: 'Guide'
    },
    {
      id: 3,
      title: 'Building IoT Projects',
      description: 'A comprehensive guide to creating IoT solutions with Arduino and Raspberry Pi. From sensors to cloud integration.',
      date: '2025-01-05',
      tags: ['IoT', 'Hardware', 'Arduino'],
      readTime: '12 min',
      category: 'Project'
    },
    {
      id: 4,
      title: 'Next.js Performance Tips',
      description: 'Optimize your Next.js applications for lightning-fast performance. Learn about code splitting, image optimization, and more.',
      date: '2024-12-28',
      tags: ['Next.js', 'Performance', 'Web Dev'],
      readTime: '6 min',
      category: 'Tutorial'
    },
    {
      id: 5,
      title: 'Database Design Patterns',
      description: 'Essential database design patterns every developer should know. Improve your data modeling and query performance.',
      date: '2024-12-20',
      tags: ['Database', 'SQL', 'Architecture'],
      readTime: '10 min',
      category: 'Guide'
    },
    {
      id: 6,
      title: 'CSS Animations Magic',
      description: 'Create stunning animations with modern CSS. From simple transitions to complex keyframe animations.',
      date: '2024-12-15',
      tags: ['CSS', 'Animation', 'Web Dev'],
      readTime: '7 min',
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
            Blog
          </h1>
          <div className="h-1 w-48 mx-auto bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-full"></div>
          <p 
            className={`mt-6 text-white/80 text-lg md:text-xl max-w-2xl mx-auto transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Insights, tutorials, and thoughts on technology and development
          </p>
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