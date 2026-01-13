"use client";

import { useState, useEffect } from 'react';

export default function SkillsPage() {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [showSkills, setShowSkills] = useState(false);

  const skillsData = [
    { name: 'CYBERSECURITY', level: 95, color: 'green', category: 'SECURITY' },
    { name: 'NETWORK ENGINEERING', level: 90, color: 'cyan', category: 'INFRASTRUCTURE' },
    { name: 'PENETRATION TESTING', level: 88, color: 'red', category: 'SECURITY' },
    { name: 'PROJECT MANAGEMENT', level: 85, color: 'purple', category: 'LEADERSHIP' },
    { name: 'DIGITAL MARKETING', level: 82, color: 'yellow', category: 'MARKETING' },
    { name: 'CONTENT CREATION', level: 85, color: 'blue', category: 'MARKETING' },
    { name: 'INCIDENT RESPONSE', level: 92, color: 'yellow', category: 'SECURITY' },
    { name: 'DIGITAL FORENSICS', level: 80, color: 'blue', category: 'INVESTIGATION' },
    { name: 'SECURITY ARCHITECTURE', level: 87, color: 'green', category: 'DESIGN' },
    { name: 'VULNERABILITY ASSESSMENT', level: 90, color: 'red', category: 'SECURITY' },
    { name: 'NETWORK PROTOCOLS', level: 85, color: 'cyan', category: 'INFRASTRUCTURE' },
    { name: 'RISK MANAGEMENT', level: 83, color: 'purple', category: 'STRATEGY' },
    { name: 'SECURITY TRAINING', level: 88, color: 'yellow', category: 'EDUCATION' },
    { name: 'MALWARE ANALYSIS', level: 82, color: 'red', category: 'INVESTIGATION' },
    { name: 'SOCIAL MEDIA MARKETING', level: 80, color: 'blue', category: 'MARKETING' },
    { name: 'BUSINESS DEVELOPMENT', level: 78, color: 'purple', category: 'BUSINESS' }
  ];

  const certifications = [
    'CISCO CCNA - Network Associate',
    'CompTIA Security+ - Security Fundamentals',
    'ISC2 CC - Certified in Cybersecurity',
    'Google Professional - Project Manager',
    'IBM Professional - Data Analyst',
    'Cybersecurity Specialist - Multiple Domains',
    'Network Security - Advanced Protocols',
    'Penetration Testing - Ethical Hacking'
  ];

  const skills = [
    { category: 'PROGRAMMING', items: ['Python', 'JavaScript', 'PowerShell', 'Bash', 'SQL', 'C++'] },
    { category: 'SECURITY_TOOLS', items: ['Wireshark', 'Nmap', 'Metasploit', 'Burp Suite', 'Nessus', 'Splunk'] },
    { category: 'PLATFORMS', items: ['Kali Linux', 'Windows Server', 'VMware', 'Docker', 'AWS', 'Azure'] },
    { category: 'FRAMEWORKS', items: ['NIST', 'ISO 27001', 'OWASP', 'MITRE ATT&CK', 'COBIT', 'ITIL'] },
    { category: 'MARKETING', items: ['Digital Marketing', 'Content Creation', 'Social Media Marketing', 'SEO', 'Brand Development', 'Campaign Management'] },
    { category: 'BUSINESS_SKILLS', items: ['Project Management', 'Team Leadership', 'Client Relations', 'Business Development', 'Strategic Planning', 'Training & Education'] }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          setShowSkills(true);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, []);

  const getColorClass = (color: string): string => {
    const colors = {
      green: 'text-green-400 border-green-400/30 bg-green-400',
      cyan: 'text-cyan-400 border-cyan-400/30 bg-cyan-400',
      red: 'text-red-400 border-red-400/30 bg-red-400',
      purple: 'text-purple-400 border-purple-400/30 bg-purple-400',
      yellow: 'text-yellow-400 border-yellow-400/30 bg-yellow-400',
      blue: 'text-blue-400 border-blue-400/30 bg-blue-400'
    };
    return colors[color as keyof typeof colors] || colors.green;
  };

  return (
    <div className="min-h-screen p-4 pt-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-mono text-cyan-400 mb-2">
            SKILLS_MATRIX.DB
          </h1>
          <div className="text-green-400/70 font-mono text-sm">
            {"> Analyzing competency levels..."}
          </div>
        </div>

        {/* Loading Screen */}
        {!showSkills && (
          <div className="bg-black/90 border border-green-400/30 rounded-lg p-8 text-center">
            <div className="text-green-400 font-mono text-lg mb-4">
              SCANNING SKILL DATABASE...
            </div>
            <div className="w-full bg-green-400/20 h-4 rounded-full overflow-hidden mb-4">
              <div 
                className="bg-green-400 h-full transition-all duration-100 ease-out"
                style={{ width: `${loadingProgress}%` }}
              ></div>
            </div>
            <div className="text-green-400/70 font-mono text-sm">
              {loadingProgress}% Complete
            </div>
          </div>
        )}

        {/* Skills Display */}
        {showSkills && (
          <div className="space-y-8 animate-fade-in">
            {/* Core Skills */}
            <div className="bg-black/90 border border-green-400/30 rounded-lg p-6">
              <div className="text-green-400 font-mono text-xl mb-6">
                {"> cat /usr/local/skills/core_competencies.db"}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {skillsData.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className={`font-mono text-sm ${getColorClass(skill.color).split(' ')[0]}`}>
                        {skill.name}
                      </span>
                      <span className="text-green-400/70 font-mono text-xs">
                        [{skill.category}]
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="flex-1 bg-gray-800 h-2 rounded-full overflow-hidden">
                        <div 
                          className={`h-full transition-all duration-1000 ease-out ${getColorClass(skill.color).split(' ')[2]}`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                      <span className={`font-mono text-xs ${getColorClass(skill.color).split(' ')[0]}`}>
                        {skill.level}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-black/90 border border-cyan-400/30 rounded-lg p-6">
              <div className="text-cyan-400 font-mono text-xl mb-6">
                {"> ls -la /etc/certifications/"}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-3 text-cyan-400/80 font-mono text-sm">
                    <span className="text-green-400">✓</span>
                    <span>{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills Categories */}
            <div className="bg-black/90 border border-purple-400/30 rounded-lg p-6">
              <div className="text-purple-400 font-mono text-xl mb-6">
                {"> grep -r 'skill' /usr/local/expertise/"}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skills.map((skillGroup, index) => (
                  <div key={index} className="bg-black/60 border border-purple-400/30 rounded-lg p-4">
                    <h3 className="text-purple-400 font-mono text-lg font-bold mb-4">
                      {skillGroup.category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="bg-purple-400/10 border border-purple-400/30 text-purple-400 px-3 py-1 rounded font-mono text-sm hover:bg-purple-400/20 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Security Clearance */}
            <div className="bg-black/90 border border-red-400/30 rounded-lg p-6">
              <div className="text-red-400 font-mono text-xl mb-4">
                {"> sudo cat /etc/security/clearance.conf"}
              </div>
              <div className="space-y-2 font-mono text-sm">
                <div className="text-green-400">
                  Security Level: <span className="text-red-400">MAXIMUM</span>
                </div>
                <div className="text-green-400">
                  Access Rights: <span className="text-cyan-400">FULL_ADMIN</span>
                </div>
                <div className="text-green-400">
                  Threat Assessment: <span className="text-green-400">FRIENDLY</span>
                </div>
                <div className="text-green-400">
                  Location: <span className="text-cyan-400">Alexandria, Egypt</span>
                </div>
                <div className="text-green-400">
                  Last Audit: <span className="text-yellow-400">{new Date().toLocaleDateString()}</span>
                </div>
              </div>
            </div>

            {/* Summary Stats */}
            <div className="bg-black/90 border border-green-400/30 rounded-lg p-6">
              <div className="text-green-400 font-mono text-lg mb-4">
                {"> wc -l /var/log/achievements.log"}
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 font-mono text-sm text-center">
                <div>
                  <div className="text-green-400 text-2xl font-bold">{skillsData.length}</div>
                  <div className="text-green-400/70">Core Skills</div>
                </div>
                <div>
                  <div className="text-cyan-400 text-2xl font-bold">{certifications.length}</div>
                  <div className="text-green-400/70">Certifications</div>
                </div>
                <div>
                  <div className="text-purple-400 text-2xl font-bold">
                    {skills.reduce((acc, group) => acc + group.items.length, 0)}
                  </div>
                  <div className="text-green-400/70">Technical Skills</div>
                </div>
                <div>
                  <div className="text-yellow-400 text-2xl font-bold">5+</div>
                  <div className="text-green-400/70">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="mt-8 text-center">
          <div className="text-green-400/50 font-mono text-sm">
            <span className="animate-pulse">█</span> Skills database loaded | Marketing & Business skills included
          </div>
        </div>
      </div>
    </div>
  );
}