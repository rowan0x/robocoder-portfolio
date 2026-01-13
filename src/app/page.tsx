"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function HomePage() {
  const [displayText, setDisplayText] = useState('');
  const [currentLine, setCurrentLine] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [bootComplete, setBootComplete] = useState(false);

  const bootSequence = [
    '> Initializing JIAD_ARABI.exe...',
    '> Loading cybersecurity protocols...',
    '> Scanning network infrastructure...',
    '> Establishing secure connection...',
    '> Verifying credentials...',
    '> ACCESS GRANTED',
    '',
    '> Welcome to the secure terminal of JIAD ARABI',
    '> Security Level: MAXIMUM | Status: ONLINE',
    ''
  ];

  const asciiArt = `
██╗██╗ █████╗ ██████╗      █████╗ ██████╗  █████╗ ██████╗ ██╗
██║██║██╔══██╗██╔══██╗    ██╔══██╗██╔══██╗██╔══██╗██╔══██╗██║
██║██║███████║██║  ██║    ███████║██████╔╝███████║██████╔╝██║
██║██║██╔══██║██║  ██║    ██╔══██║██╔══██╗██╔══██║██╔══██╗██║
██║██║██║  ██║██████╔╝    ██║  ██║██║  ██║██║  ██║██████╔╝██║
╚═╝╚═╝╚═╝  ╚═╝╚═════╝     ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═════╝ ╚═╝`;

  const roles = [
    'SECURITY & NETWORK ENGINEER',
    'CYBERSECURITY SPECIALIST', 
    'PENETRATION TESTER',
    'DIGITAL SECURITY ARCHITECT'
  ];

  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentLine < bootSequence.length) {
        setDisplayText(prev => prev + bootSequence[currentLine] + '\n');
        setCurrentLine(prev => prev + 1);
      } else {
        setBootComplete(true);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [currentLine]);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorTimer);
  }, []);

  useEffect(() => {
    if (bootComplete) {
      const roleTimer = setInterval(() => {
        setCurrentRole(prev => (prev + 1) % roles.length);
      }, 2000);

      return () => clearInterval(roleTimer);
    }
  }, [bootComplete]);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-4">
      {/* Boot Sequence */}
      <div className="w-full max-w-4xl mb-8">
        <div className="bg-black/80 border border-green-400/30 rounded-lg p-6 shadow-[0_0_30px_rgba(0,255,65,0.2)]">
          <pre className="text-green-400 font-mono text-sm leading-relaxed whitespace-pre-wrap">
            {displayText}
            {showCursor && <span className="animate-pulse">█</span>}
          </pre>
        </div>
      </div>

      {/* Main Content - Shows after boot */}
      {bootComplete && (
        <div className="w-full max-w-6xl space-y-8 animate-fade-in">
          {/* ASCII Art Name */}
          <div className="text-center">
            <pre className="text-green-400 font-mono text-xs sm:text-sm md:text-base lg:text-lg leading-tight overflow-x-auto">
              {asciiArt}
            </pre>
          </div>

          {/* Role Animation */}
          <div className="text-center">
            <div className="text-cyan-400 font-mono text-xl md:text-2xl lg:text-3xl font-bold mb-4">
              {roles[currentRole]}
            </div>
            <div className="text-green-400/70 font-mono text-sm md:text-base">
              Status: <span className="text-green-400 animate-pulse">[ONLINE]</span> | 
              Security Level: <span className="text-red-400">[MAXIMUM]</span> | 
              Access: <span className="text-cyan-400">[AUTHORIZED]</span>
            </div>
          </div>

          {/* Skills Preview */}
          <div className="bg-black/60 border border-cyan-400/30 rounded-lg p-6 shadow-[0_0_20px_rgba(0,255,255,0.1)]">
            <div className="text-cyan-400 font-mono text-lg mb-4">
              {"> cat /usr/local/skills.db"}
            </div>
            <div className="space-y-2 font-mono text-sm">
              <div className="flex justify-between items-center">
                <span className="text-green-400">CYBERSECURITY</span>
                <div className="flex-1 mx-4">
                  <div className="bg-green-400/20 h-2 rounded-full overflow-hidden">
                    <div className="bg-green-400 h-full w-[95%] animate-pulse"></div>
                  </div>
                </div>
                <span className="text-green-400">95%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-cyan-400">NETWORK ENGINEERING</span>
                <div className="flex-1 mx-4">
                  <div className="bg-cyan-400/20 h-2 rounded-full overflow-hidden">
                    <div className="bg-cyan-400 h-full w-[90%] animate-pulse"></div>
                  </div>
                </div>
                <span className="text-cyan-400">90%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-purple-400">PROJECT MANAGEMENT</span>
                <div className="flex-1 mx-4">
                  <div className="bg-purple-400/20 h-2 rounded-full overflow-hidden">
                    <div className="bg-purple-400 h-full w-[85%] animate-pulse"></div>
                  </div>
                </div>
                <span className="text-purple-400">85%</span>
              </div>
            </div>
          </div>

          {/* Navigation Menu - NOW WITH WORKING LINKS */}
          <div className="bg-black/80 border border-green-400/30 rounded-lg p-6">
            <div className="text-green-400 font-mono text-lg mb-4">
              {"> ls -la /jiad_arabi/"}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 font-mono text-sm">
              <Link 
                href="/about" 
                className="text-cyan-400 hover:text-cyan-300 cursor-pointer transition-colors block p-2 rounded hover:bg-cyan-400/10"
              >
                drwxr-xr-x about_me/
              </Link>
              <Link 
                href="/skills" 
                className="text-green-400 hover:text-green-300 cursor-pointer transition-colors block p-2 rounded hover:bg-green-400/10"
              >
                drwxr-xr-x skills_matrix/
              </Link>
              <Link 
                href="/experience" 
                className="text-purple-400 hover:text-purple-300 cursor-pointer transition-colors block p-2 rounded hover:bg-purple-400/10"
              >
                drwxr-xr-x experience_logs/
              </Link>
              <Link 
                href="/projects" 
                className="text-yellow-400 hover:text-yellow-300 cursor-pointer transition-colors block p-2 rounded hover:bg-yellow-400/10"
              >
                drwxr-xr-x projects_db/
              </Link>
              <Link 
                href="/education" 
                className="text-blue-400 hover:text-blue-300 cursor-pointer transition-colors block p-2 rounded hover:bg-blue-400/10"
              >
                drwxr-xr-x education_certs/
              </Link>
              <Link 
                href="/contact" 
                className="text-red-400 hover:text-red-300 cursor-pointer transition-colors block p-2 rounded hover:bg-red-400/10"
              >
                drwxr-xr-x contact_terminal/
              </Link>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center text-green-400/50 font-mono text-xs">
            <p>© 2024 JIAD ARABI | SECURE DIGITAL SOLUTIONS</p>
            <p className="animate-pulse">Press any key to continue...</p>
          </div>
        </div>
      )}
    </div>
  );
}