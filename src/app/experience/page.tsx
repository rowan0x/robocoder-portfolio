"use client";

import { useState, useEffect } from 'react';

export default function ExperiencePage() {
  const [currentLog, setCurrentLog] = useState(0);
  const [showLogs, setShowLogs] = useState(false);

  const experienceLogs = [
    {
      timestamp: '2024-PRESENT',
      level: 'INFO',
      role: 'SECURITY & NETWORK ENGINEER',
      company: 'FREELANCE OPERATIONS',
      status: 'ACTIVE',
      color: 'green',
      details: [
        'Implementing comprehensive network security solutions',
        'Conducting vulnerability assessments and penetration testing',
        'Designing secure network architectures for enterprise clients',
        'Providing incident response and digital forensics services'
      ]
    },
    {
      timestamp: '2023-2024',
      level: 'SUCCESS',
      role: 'DIRECTOR AND FOUNDER',
      company: 'APEX ENTERPRISE SOLUTIONS',
      status: 'COMPLETED',
      color: 'cyan',
      details: [
        'Founded and led cybersecurity consulting firm',
        'Developed innovative security solutions for SME clients',
        'Built team of security professionals and managed operations',
        'Established partnerships with technology vendors'
      ]
    },
    {
      timestamp: '2022-2023',
      level: 'INFO',
      role: 'PROJECT DEVELOPER & PLANNER',
      company: 'VARIOUS CLIENTS',
      status: 'COMPLETED',
      color: 'purple',
      details: [
        'Managed complex cybersecurity implementation projects',
        'Coordinated cross-functional teams for security initiatives',
        'Developed project timelines and resource allocation strategies',
        'Ensured compliance with industry security standards'
      ]
    },
    {
      timestamp: '2021-2022',
      level: 'INFO',
      role: 'LMS MAKER',
      company: 'EDUCATIONAL TECHNOLOGY',
      status: 'COMPLETED',
      color: 'yellow',
      details: [
        'Designed and developed secure learning management systems',
        'Implemented user authentication and data protection protocols',
        'Created cybersecurity training modules and content',
        'Ensured GDPR and educational data privacy compliance'
      ]
    },
    {
      timestamp: '2020-2021',
      level: 'INFO',
      role: 'STORE MANAGER',
      company: 'RETAIL OPERATIONS',
      status: 'COMPLETED',
      color: 'blue',
      details: [
        'Managed retail operations with focus on security protocols',
        'Implemented POS security and payment processing systems',
        'Trained staff on cybersecurity awareness and best practices',
        'Maintained inventory management and customer data security'
      ]
    },
    {
      timestamp: '2019-PRESENT',
      level: 'ONGOING',
      role: 'CYBERSECURITY & NETWORKING COACH',
      company: 'CONTENT CREATOR',
      status: 'ACTIVE',
      color: 'red',
      details: [
        'Creating educational content on cybersecurity topics',
        'Mentoring aspiring cybersecurity professionals',
        'Developing training materials and certification guides',
        'Building community around cybersecurity education'
      ]
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogs(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showLogs) {
      const logTimer = setInterval(() => {
        setCurrentLog(prev => (prev + 1) % experienceLogs.length);
      }, 5000);

      return () => clearInterval(logTimer);
    }
  }, [showLogs, experienceLogs.length]);

  const getColorClass = (color: string): string => {
    const colors = {
      green: 'text-green-400 border-green-400/30',
      cyan: 'text-cyan-400 border-cyan-400/30',
      purple: 'text-purple-400 border-purple-400/30',
      yellow: 'text-yellow-400 border-yellow-400/30',
      blue: 'text-blue-400 border-blue-400/30',
      red: 'text-red-400 border-red-400/30'
    };
    return colors[color as keyof typeof colors] || colors.green;
  };

  const getLevelColor = (level: string): string => {
    const levels = {
      'INFO': 'text-cyan-400',
      'SUCCESS': 'text-green-400',
      'ONGOING': 'text-yellow-400',
      'ERROR': 'text-red-400'
    };
    return levels[level as keyof typeof levels] || 'text-green-400';
  };

  return (
    <div className="min-h-screen p-4 pt-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-mono text-cyan-400 mb-2">
            EXPERIENCE_LOGS.SYS
          </h1>
          <div className="text-green-400/70 font-mono text-sm">
            {"> tail -f /var/log/career/jiad_arabi.log"}
          </div>
        </div>

        {/* Loading */}
        {!showLogs && (
          <div className="bg-black/90 border border-green-400/30 rounded-lg p-8 text-center">
            <div className="text-green-400 font-mono text-lg mb-4">
              LOADING EXPERIENCE LOGS...
            </div>
            <div className="animate-spin w-8 h-8 border-2 border-green-400 border-t-transparent rounded-full mx-auto"></div>
          </div>
        )}

        {/* Experience Timeline */}
        {showLogs && (
          <div className="space-y-6 animate-fade-in">
            {experienceLogs.map((log, index) => (
              <div 
                key={index}
                className={`bg-black/90 border rounded-lg p-6 transition-all duration-500 ${
                  index === currentLog 
                    ? `${getColorClass(log.color)} shadow-[0_0_20px_rgba(0,255,65,0.3)]` 
                    : 'border-green-400/20'
                }`}
              >
                {/* Log Header */}
                <div className="flex flex-wrap items-center justify-between mb-4 font-mono text-sm">
                  <div className="flex items-center space-x-4">
                    <span className="text-green-400/70">[{log.timestamp}]</span>
                    <span className={`${getLevelColor(log.level)} font-bold`}>{log.level}</span>
                    <span className="text-green-400">ROLE:</span>
                    <span className={getColorClass(log.color).split(' ')[0]}>{log.role}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-green-400">STATUS:</span>
                    <span className={`${log.status === 'ACTIVE' ? 'text-green-400 animate-pulse' : 'text-gray-400'}`}>
                      {log.status}
                    </span>
                  </div>
                </div>

                {/* Company */}
                <div className="mb-4">
                  <span className="text-green-400 font-mono text-sm">ORGANIZATION: </span>
                  <span className={`${getColorClass(log.color).split(' ')[0]} font-mono font-bold`}>
                    {log.company}
                  </span>
                </div>

                {/* Details */}
                <div className="space-y-2">
                  <div className="text-green-400 font-mono text-sm mb-2">KEY ACHIEVEMENTS:</div>
                  {log.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-start space-x-2 text-green-400/80 font-mono text-sm">
                      <span className="text-cyan-400 mt-1">▸</span>
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>

                {/* Progress Indicator */}
                {index === currentLog && (
                  <div className="mt-4 pt-4 border-t border-green-400/20">
                    <div className="flex items-center space-x-2 text-green-400/50 font-mono text-xs">
                      <span>VIEWING LOG</span>
                      <div className="flex space-x-1">
                        <span className="animate-pulse">█</span>
                        <span className="animate-pulse delay-100">█</span>
                        <span className="animate-pulse delay-200">█</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Summary Stats */}
        {showLogs && (
          <div className="mt-8 bg-black/90 border border-green-400/30 rounded-lg p-6">
            <div className="text-green-400 font-mono text-lg mb-4">
              {"> grep -c 'SUCCESS\\|ACTIVE' /var/log/career/summary.log"}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 font-mono text-sm">
              <div className="text-center">
                <div className="text-green-400 text-2xl font-bold">5+</div>
                <div className="text-green-400/70">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-cyan-400 text-2xl font-bold">6</div>
                <div className="text-green-400/70">Major Roles</div>
              </div>
              <div className="text-center">
                <div className="text-purple-400 text-2xl font-bold">2</div>
                <div className="text-green-400/70">Active Projects</div>
              </div>
              <div className="text-center">
                <div className="text-yellow-400 text-2xl font-bold">100%</div>
                <div className="text-green-400/70">Success Rate</div>
              </div>
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="mt-8 text-center">
          <div className="text-green-400/50 font-mono text-sm">
            <span className="animate-pulse">█</span> Experience logs loaded | Auto-refresh: ON
          </div>
        </div>
      </div>
    </div>
  );
}