"use client";

import { useState, useEffect } from 'react';

export default function AboutPage() {
  const [displayText, setDisplayText] = useState('');
  const [currentChar, setCurrentChar] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const aboutText = `> Accessing personnel file: JIAD_ARABI.dat
> Decrypting biographical data...
> ACCESS GRANTED

CLASSIFIED: SECURITY CLEARANCE LEVEL ALPHA

Subject: JIAD ARABI
Classification: CYBERSECURITY SPECIALIST & NETWORK ENGINEER
Status: ACTIVE | Threat Level: FRIENDLY

BIOGRAPHICAL ANALYSIS:
====================

I am a passionate cybersecurity researcher and lifelong learner committed to building knowledge 
and expertise in digital security. My mission is to create effective cybersecurity solutions 
that protect digital infrastructure and empower organizations to thrive in the digital age.

With extensive experience in network engineering, penetration testing, and security architecture, 
I specialize in identifying vulnerabilities before malicious actors can exploit them. My approach 
combines technical expertise with strategic thinking to build comprehensive security frameworks.

CORE COMPETENCIES:
- Advanced threat detection and incident response
- Network security architecture and implementation  
- Penetration testing and vulnerability assessment
- Security awareness training and education
- Project management and team leadership
- Digital forensics and malware analysis

MISSION STATEMENT:
My goal is to bridge the gap between complex cybersecurity concepts and practical implementation. 
I believe in making digital security accessible and understandable while maintaining the highest 
standards of protection.

PERSONAL PHILOSOPHY:
"Security is not a product, but a process. It's not about building walls, but about understanding 
the landscape and adapting to emerging threats."

CURRENT OBJECTIVES:
- Advancing cybersecurity education and awareness
- Developing innovative security solutions
- Building resilient digital infrastructures
- Mentoring the next generation of security professionals

> End of file
> Connection secure | Data integrity: VERIFIED`;

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentChar < aboutText.length) {
        setDisplayText(aboutText.slice(0, currentChar + 1));
        setCurrentChar(prev => prev + 1);
      }
    }, 20);

    return () => clearTimeout(timer);
  }, [currentChar, aboutText]);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <div className="min-h-screen p-4 pt-16">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-mono text-cyan-400 mb-2">
            ABOUT_ME.EXE
          </h1>
          <div className="text-green-400/70 font-mono text-sm">
            Last modified: {new Date().toLocaleDateString()} | Size: {aboutText.length} bytes
          </div>
        </div>

        {/* Terminal Window */}
        <div className="bg-black/90 border border-green-400/30 rounded-lg shadow-[0_0_30px_rgba(0,255,65,0.2)]">
          {/* Terminal Header */}
          <div className="bg-black/80 border-b border-green-400/20 px-4 py-2 rounded-t-lg">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500/70"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/70"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/70"></div>
              <span className="ml-4 text-green-400/70 font-mono text-xs">
                /usr/local/bin/about_jiad_arabi
              </span>
            </div>
          </div>

          {/* Terminal Content */}
          <div className="p-6">
            <pre className="text-green-400 font-mono text-sm leading-relaxed whitespace-pre-wrap">
              {displayText}
              {showCursor && <span className="animate-pulse text-cyan-400">█</span>}
            </pre>
          </div>
        </div>

        {/* Security Stats */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-black/60 border border-cyan-400/30 rounded-lg p-4">
            <div className="text-cyan-400 font-mono text-lg font-bold">5+</div>
            <div className="text-green-400/70 font-mono text-sm">Years Experience</div>
          </div>
          <div className="bg-black/60 border border-purple-400/30 rounded-lg p-4">
            <div className="text-purple-400 font-mono text-lg font-bold">10+</div>
            <div className="text-green-400/70 font-mono text-sm">Certifications</div>
          </div>
          <div className="bg-black/60 border border-green-400/30 rounded-lg p-4">
            <div className="text-green-400 font-mono text-lg font-bold">100+</div>
            <div className="text-green-400/70 font-mono text-sm">Projects Secured</div>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-8 text-center">
          <div className="text-green-400/50 font-mono text-sm">
            <span className="animate-pulse">█</span> Press ESC to return to main menu
          </div>
        </div>
      </div>
    </div>
  );
}