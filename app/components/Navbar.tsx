'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    {
      href: '/',
      label: 'Home',
      icon: (
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
      )
    },
    {
      href: '/skills',
      label: 'Skills',
      icon: (
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      )
    },
    {
      href: '/portfolio',
      label: 'Portfolio',
      icon: (
        <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
      )
    },
    {
      href: '/blogs',
      label: 'Blogs',
      icon: (
        <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
      )
    },
    {
      href: '/me',
      label: 'Me',
      icon: (
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
      )
    }
  ];

  return (
    <nav className="fixed bottom-5 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-lg z-50 border border-white/20 rounded-full px-6 sm:px-12 py-4 w-[90%] sm:w-[600px] md:w-[700px] lg:w-[800px] max-w-[95vw]">
      <div className="flex justify-around items-center gap-3 sm:gap-6">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center gap-1 transition-all duration-300 ${
                isActive 
                  ? 'text-pink-600 scale-110' 
                  : 'text-white-600 hover:text-pink-400'
              }`}
            >
              <svg 
                className={`w-8 h-8 pointer-events-none transition-transform ${
                  isActive ? 'drop-shadow-lg' : ''
                }`} 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                {item.icon}
              </svg>
              <span className={`text-sm font-semibold pointer-events-none ${
                isActive ? 'font-bold' : ''
              }`}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}