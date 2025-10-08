'use client';

import { useState, useEffect, useRef } from 'react';
import { Search, Calendar, Tag } from 'lucide-react';

type BlogPost = {
  id: number;
  title: string;
  description: string;
  date: string;
  tags: string[];
  category: string;
  link: string;
};

// Loading skeleton component for blog cards
function BlogCardSkeleton() {
  return (
    <div className="relative animate-pulse">
      <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/20 shadow-2xl h-full flex flex-col">
        {/* Category Badge and Date */}
        <div className="flex items-center justify-between mb-4">
          <div className="h-6 w-20 bg-white/10 rounded-full"></div>
          <div className="h-4 w-24 bg-white/10 rounded"></div>
        </div>

        {/* Title */}
        <div className="space-y-2 mb-3">
          <div className="h-6 bg-white/10 rounded w-3/4"></div>
          <div className="h-6 bg-white/10 rounded w-1/2"></div>
        </div>

        {/* Description */}
        <div className="space-y-2 mb-4 flex-grow">
          <div className="h-3 bg-white/10 rounded w-full"></div>
          <div className="h-3 bg-white/10 rounded w-5/6"></div>
          <div className="h-3 bg-white/10 rounded w-4/6"></div>
        </div>

        {/* Tags */}
        <div className="flex gap-2 pt-4 border-t border-white/10">
          <div className="h-6 w-16 bg-white/10 rounded-full"></div>
          <div className="h-6 w-20 bg-white/10 rounded-full"></div>
          <div className="h-6 w-14 bg-white/10 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}

// Loading skeleton for search bar
function SearchBarSkeleton() {
  return (
    <div className="max-w-3xl mx-auto mb-8">
      <div className="relative animate-pulse">
        <div className="h-16 bg-white/10 backdrop-blur-xl rounded-full border border-white/20"></div>
      </div>
    </div>
  );
}

// Loading skeleton for tag filter
function TagFilterSkeleton() {
  return (
    <div className="relative animate-pulse">
      <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/20">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-6 h-6 bg-white/10 rounded"></div>
          <div className="h-5 w-32 bg-white/10 rounded"></div>
        </div>
        <div className="flex flex-wrap gap-3">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="h-10 w-20 bg-white/10 rounded-full"></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function BlogPage() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState('all');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const [blogLoading, setBlogLoading] = useState(true);
  const [initialLoadComplete, setInitialLoadComplete] = useState(false);

  const [blogs, setBlog] = useState<BlogPost[]>([]);

  useEffect(() => {
    setIsVisible(true);
    
    fetchData();
  }, []);

  async function fetchData() {
    try {
      fetch('/api/blogs')
        .then(res => res.json())
        .then(data => {
          setBlog(data);
          setBlogLoading(false);
          // Small delay to show at least some loading state
          setTimeout(() => setInitialLoadComplete(true), 300);
        })
        .catch(err => {
          console.error('Error fetching blogs:', err);
          setBlogLoading(false);
          setInitialLoadComplete(true);
        });

    } catch (error) {
      console.error('Error fetching data:', error);
      setBlogLoading(false);
      setInitialLoadComplete(true);
    }
  }

  const allTags = ['all', ...Array.from(new Set(blogs.flatMap(post => post.tags)))];

  const filteredPosts = blogs.filter(post => {
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

  // Calculate how many skeletons to show
  const skeletonCount = blogLoading ? 6 : 0;
  const showingSkeletons = blogLoading && blogs.length === 0;

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
          {showingSkeletons ? (
            <SearchBarSkeleton />
          ) : blogs.length > 0 && (
            <div className="max-w-3xl mx-auto mb-8">
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
            </div>
          )}

          {/* Tag Filter */}
          {showingSkeletons ? (
            <TagFilterSkeleton />
          ) : blogs.length > 0 && (
            <div className="relative">
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
            </div>
          )}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Show actual blog posts */}
          {filteredPosts.map((post, index) => (
            <div
              key={post.id}
              className={`group relative transition-all duration-500 hover:scale-105 ${
                initialLoadComplete ? 'opacity-100' : 'animate-fade-in'
              }`}
              style={!initialLoadComplete ? {
                animationDelay: `${0.4 + index * 0.1}s`,
              } : undefined}
            >
              <div className="relative h-full">
                {/* Glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${getCategoryColor(post.category)} rounded-3xl blur-2xl opacity-0 group-hover:opacity-40 transition-all duration-300`}></div>
                
                {/* Card */}
                <a 
                  href={post.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/20 group-hover:border-white/40 shadow-2xl transition-all duration-300 h-full flex flex-col">
                    {/* Category Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-4 py-1.5 rounded-full text-xs font-bold bg-gradient-to-r ${getCategoryColor(post.category)} text-white shadow-lg`}>
                        {post.category}
                      </span>
                      <div className="flex items-center gap-2 text-white/60 text-sm">
                        <Calendar size={14} />
                        <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className={`text-2xl font-black mb-3 bg-gradient-to-r ${getCategoryColor(post.category)} bg-clip-text text-transparent group-hover:scale-105 transition-transform origin-left`}>
                      {post.title}
                    </h3>

                    {/* Description */}
                    <p className="text-white/70 text-sm leading-relaxed mb-4 flex-grow truncate">
                      {post.description}
                    </p>

                    {/* Tags */}
                    <div className="flex items-center justify-start pt-4 border-t border-white/10">
                      <div className="flex flex-wrap gap-3">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-white/80 text-xs px-3 py-1 bg-white/10 rounded-full border border-white/20 hover:bg-white/20 transition-colors"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Hover indicator */}
                    <div className={`absolute top-4 right-4 w-3 h-3 bg-gradient-to-r ${getCategoryColor(post.category)} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse`}></div>
                  </div>
                </a>
              </div>
            </div>
          ))}

          {/* Show loading skeletons only if no blogs yet */}
          {showingSkeletons && [...Array(skeletonCount)].map((_, i) => (
            <BlogCardSkeleton key={`skeleton-${i}`} />
          ))}
        </div>

        {/* No Results State */}
        {!blogLoading && blogs.length !== 0 && filteredPosts.length === 0 && (
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
        )}

        {/* Coming Soon Section */}
        {(!blogLoading && filteredPosts.length !== 0) || (!blogLoading && blogs.length === 0) && (
          <div 
            className={`text-center py-20 mt-8 transition-all duration-1000 delay-700 ${
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
        )}
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