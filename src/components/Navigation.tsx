"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: 'HOME', path: '/', command: 'cd ~/' },
    { name: 'ABOUT', path: '/about', command: 'cat about.txt' },
    { name: 'SKILLS', path: '/skills', command: 'ls skills/' },
    { name: 'EXPERIENCE', path: '/experience', command: 'tail -f logs/' },
    { name: 'PROJECTS', path: '/projects', command: 'ls projects/' },
    { name: 'EDUCATION', path: '/education', command: 'cat certs.db' },
    { name: 'CONTACT', path: '/contact', command: 'ping contact' }
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:block fixed top-4 left-4 right-4 z-50">
        <div className="bg-black/90 border border-green-400/30 rounded-lg p-4 shadow-[0_0_20px_rgba(0,255,65,0.2)]">
          <div className="flex items-center justify-between">
            <div className="text-green-400 font-mono text-sm">
              JIAD_ARABI.SYS v2.1.0
            </div>
            <div className="flex space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`font-mono text-sm transition-colors hover:text-green-300 ${
                    isActive(item.path)
                      ? 'text-green-400 border-b border-green-400'
                      : 'text-green-400/70'
                  }`}
                  title={item.command}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
              <span className="text-green-400/70 font-mono text-xs">ONLINE</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden fixed top-4 left-4 right-4 z-50">
        <div className="bg-black/90 border border-green-400/30 rounded-lg shadow-[0_0_20px_rgba(0,255,65,0.2)]">
          <div className="flex items-center justify-between p-4">
            <div className="text-green-400 font-mono text-sm">
              JIAD_ARABI.SYS
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-green-400 font-mono text-sm hover:text-green-300"
            >
              {isOpen ? '[CLOSE]' : '[MENU]'}
            </button>
          </div>
          
          {isOpen && (
            <div className="border-t border-green-400/30 p-4 space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block font-mono text-sm transition-colors hover:text-green-300 ${
                    isActive(item.path)
                      ? 'text-green-400 border-l-2 border-green-400 pl-2'
                      : 'text-green-400/70'
                  }`}
                >
                  {"> "}{item.name.toLowerCase()}
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>
    </>
  );
}