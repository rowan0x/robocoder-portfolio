"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import MatrixRain from '@/components/MatrixRain';

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
    <>
      {/* Matrix Background */}
      <MatrixRain />

      {/* Page Content */}
      {/* التعديل هنا: غيرنا justify-center إلى justify-start وأضفنا pt-20 لضبط المسافة العلوية */}
      <div className="relative z-10 min-h-screen w-full flex flex-col justify-start items-center p-4 pt-24">
        
        {/* Boot Sequence */}
        <div className="w-full max-w-4xl mb-8">
          <div className="bg-black/80 border border-green-400/30 rounded-lg p-6 shadow-[0_0_30px_rgba(0,255,65,0.2)]">
            <pre className="text-green-400 font-mono text-sm leading-relaxed whitespace-pre-wrap">
              {displayText}
              {showCursor && <span className="animate-pulse">█</span>}
            </pre>
          </div>
        </div>

        {/* Main Content */}
        {bootComplete && (
          <div className="w-full max-w-6xl space-y-8 animate-fade-in pb-10">
            <div className="text-center">
              <pre className="text-green-400 font-mono text-xs sm:text-sm md:text-base lg:text-lg leading-tight overflow-x-auto">
                {asciiArt}
              </pre>
            </div>

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

            <div className="bg-black/60 border border-cyan-400/30 rounded-lg p-6">
              <div className="text-cyan-400 font-mono text-lg mb-4">
                {"> cat /usr/local/skills.db"}
              </div>
              <div className="space-y-2 font-mono text-sm">
                {/* skills bars content here if needed */}
                 <div className="w-full bg-gray-900 rounded-full h-2.5 mb-1">
                    <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '90%' }}></div>
                 </div>
                 <div className="flex justify-between text-xs text-green-400 mb-2"><span>Network Security</span><span>90%</span></div>
              </div>
            </div>

            <div className="bg-black/80 border border-green-400/30 rounded-lg p-6">
              <div className="text-green-400 font-mono text-lg mb-4">
                {"> ls -la /jiad_arabi/"}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 font-mono text-sm">
                <Link href="/about" className="text-cyan-400 hover:bg-cyan-400/10 p-2 rounded block transition-colors">
                  drwxr-xr-x about_me/
                </Link>
                <Link href="/skills" className="text-green-400 hover:bg-green-400/10 p-2 rounded block transition-colors">
                  drwxr-xr-x skills_matrix/
                </Link>
                <Link href="/experience" className="text-purple-400 hover:bg-purple-400/10 p-2 rounded block transition-colors">
                  drwxr-xr-x experience_logs/
                </Link>
                <Link href="/projects" className="text-yellow-400 hover:bg-yellow-400/10 p-2 rounded block transition-colors">
                  drwxr-xr-x projects_db/
                </Link>
                <Link href="/education" className="text-blue-400 hover:bg-blue-400/10 p-2 rounded block transition-colors">
                  drwxr-xr-x education_certs/
                </Link>
                <Link href="/contact" className="text-red-400 hover:bg-red-400/10 p-2 rounded block transition-colors">
                  drwxr-xr-x contact_terminal/
                </Link>
              </div>
            </div>

            <div className="text-center text-green-400/50 font-mono text-xs">
              <p>© 2024 JIAD ARABI | SECURE DIGITAL SOLUTIONS</p>
              <p className="animate-pulse mt-2">Press any key to continue...</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
