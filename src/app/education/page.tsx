"use client";

import { useState, useEffect } from 'react';

export default function EducationPage() {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [activeTab, setActiveTab] = useState('education');

  const educationData = [
    {
      institution: 'UOPEOPLE UNIVERSITY',
      degree: 'Bachelor of Science - Cyber Security',
      period: '2023 - 2026',
      status: 'IN_PROGRESS',
      gpa: 'CLASSIFIED',
      color: 'green',
      details: [
        'Advanced Cybersecurity Principles and Practices',
        'Network Security and Infrastructure Protection',
        'Digital Forensics and Incident Response',
        'Ethical Hacking and Penetration Testing',
        'Risk Management and Compliance'
      ]
    },
    {
      institution: 'CISCO ACADEMY',
      degree: 'CCNA - Cisco Certified Network Associate',
      period: '2022 - 2023',
      status: 'COMPLETED',
      gpa: 'EXCELLENT',
      color: 'cyan',
      details: [
        'Network Fundamentals and Protocols',
        'Routing and Switching Technologies',
        'Network Security Implementation',
        'Troubleshooting and Maintenance',
        'Enterprise Network Design'
      ]
    },
    {
      institution: 'COMPTIA ACADEMY',
      degree: 'Security+ Certification',
      period: '2022',
      status: 'COMPLETED',
      gpa: 'CERTIFIED',
      color: 'purple',
      details: [
        'Security Concepts and Terminology',
        'Risk Management and Mitigation',
        'Cryptography and PKI',
        'Identity and Access Management',
        'Security Assessment and Testing'
      ]
    }
  ];

  const certifications = [
    {
      name: 'ISC2 CC - Certified in Cybersecurity',
      issuer: 'ISC2',
      date: '2023',
      status: 'ACTIVE',
      credentialId: 'CC-2023-JA-001',
      color: 'green'
    },
    {
      name: 'Google Professional Certified - Project Manager',
      issuer: 'Google',
      date: '2023',
      status: 'ACTIVE',
      credentialId: 'GPM-2023-JA-002',
      color: 'cyan'
    },
    {
      name: 'IBM Professional Certified - Data Analyst',
      issuer: 'IBM',
      date: '2022',
      status: 'ACTIVE',
      credentialId: 'IDA-2022-JA-003',
      color: 'blue'
    },
    {
      name: 'Cybersecurity Specialist - Enterprise Security',
      issuer: 'Multiple Providers',
      date: '2022',
      status: 'ACTIVE',
      credentialId: 'CSS-2022-JA-004',
      color: 'purple'
    },
    {
      name: 'Network Security Professional',
      issuer: 'Industry Certification',
      date: '2021',
      status: 'ACTIVE',
      credentialId: 'NSP-2021-JA-005',
      color: 'yellow'
    },
    {
      name: 'Penetration Testing Specialist',
      issuer: 'Security Institute',
      date: '2021',
      status: 'ACTIVE',
      credentialId: 'PTS-2021-JA-006',
      color: 'red'
    }
  ];

  const skills = [
    { category: 'PROGRAMMING', items: ['Python', 'JavaScript', 'PowerShell', 'Bash', 'SQL', 'C++'] },
    { category: 'SECURITY_TOOLS', items: ['Wireshark', 'Nmap', 'Metasploit', 'Burp Suite', 'Nessus', 'Splunk'] },
    { category: 'PLATFORMS', items: ['Kali Linux', 'Windows Server', 'VMware', 'Docker', 'AWS', 'Azure'] },
    { category: 'FRAMEWORKS', items: ['NIST', 'ISO 27001', 'OWASP', 'MITRE ATT&CK', 'COBIT', 'ITIL'] }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          setShowContent(true);
          return 100;
        }
        return prev + 3;
      });
    }, 50);

    return () => clearInterval(timer);
  }, []);

  const getStatusColor = (status: string): string => {
    const colors = {
      'IN_PROGRESS': 'text-yellow-400 animate-pulse',
      'COMPLETED': 'text-green-400',
      'ACTIVE': 'text-green-400 animate-pulse'
    };
    return colors[status as keyof typeof colors] || 'text-green-400';
  };

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

  return (
    <div className="min-h-screen p-4 pt-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-mono text-cyan-400 mb-2">
            EDUCATION_CERTS.DB
          </h1>
          <div className="text-green-400/70 font-mono text-sm">
            {"> Accessing academic and professional credentials..."}
          </div>
        </div>

        {/* Loading */}
        {!showContent && (
          <div className="bg-black/90 border border-green-400/30 rounded-lg p-8 text-center">
            <div className="text-green-400 font-mono text-lg mb-4">
              LOADING CREDENTIAL DATABASE...
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

        {/* Content */}
        {showContent && (
          <div className="space-y-8 animate-fade-in">
            {/* Tab Navigation */}
            <div className="bg-black/90 border border-green-400/30 rounded-lg p-4">
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => setActiveTab('education')}
                  className={`px-4 py-2 rounded font-mono text-sm transition-colors ${
                    activeTab === 'education'
                      ? 'bg-green-400/20 text-green-400 border border-green-400/30'
                      : 'text-green-400/70 hover:text-green-400'
                  }`}
                >
                  {"> ls education/"}
                </button>
                <button
                  onClick={() => setActiveTab('certifications')}
                  className={`px-4 py-2 rounded font-mono text-sm transition-colors ${
                    activeTab === 'certifications'
                      ? 'bg-cyan-400/20 text-cyan-400 border border-cyan-400/30'
                      : 'text-green-400/70 hover:text-green-400'
                  }`}
                >
                  {"> ls certifications/"}
                </button>
                <button
                  onClick={() => setActiveTab('skills')}
                  className={`px-4 py-2 rounded font-mono text-sm transition-colors ${
                    activeTab === 'skills'
                      ? 'bg-purple-400/20 text-purple-400 border border-purple-400/30'
                      : 'text-green-400/70 hover:text-green-400'
                  }`}
                >
                  {"> cat technical_skills.txt"}
                </button>
              </div>
            </div>

            {/* Education Tab */}
            {activeTab === 'education' && (
              <div className="space-y-6">
                <div className="text-green-400 font-mono text-xl mb-4">
                  {"> cat /etc/education/academic_records.log"}
                </div>
                {educationData.map((edu, index) => (
                  <div key={index} className={`bg-black/90 border rounded-lg p-6 ${getColorClass(edu.color)}`}>
                    <div className="flex flex-wrap items-center justify-between mb-4">
                      <h3 className={`text-xl font-mono font-bold ${getColorClass(edu.color).split(' ')[0]}`}>
                        {edu.institution}
                      </h3>
                      <span className={`font-mono text-sm ${getStatusColor(edu.status)}`}>
                        [{edu.status}]
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <span className="text-green-400 font-mono text-sm">DEGREE: </span>
                        <span className="text-green-400/80 font-mono text-sm">{edu.degree}</span>
                      </div>
                      <div>
                        <span className="text-green-400 font-mono text-sm">PERIOD: </span>
                        <span className="text-cyan-400 font-mono text-sm">{edu.period}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="text-green-400 font-mono text-sm mb-2">CURRICULUM:</div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {edu.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="flex items-start space-x-2">
                            <span className="text-cyan-400 mt-1">▸</span>
                            <span className="text-green-400/80 font-mono text-sm">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Certifications Tab */}
            {activeTab === 'certifications' && (
              <div className="space-y-6">
                <div className="text-cyan-400 font-mono text-xl mb-4">
                  {"> find /usr/local/certs -name '*.pem' -type f"}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {certifications.map((cert, index) => (
                    <div key={index} className={`bg-black/90 border rounded-lg p-6 ${getColorClass(cert.color)}`}>
                      <div className="flex items-center justify-between mb-3">
                        <div className={`w-3 h-3 rounded-full ${cert.status === 'ACTIVE' ? 'bg-green-400 animate-pulse' : 'bg-gray-400'}`}></div>
                        <span className={`font-mono text-xs ${getStatusColor(cert.status)}`}>
                          {cert.status}
                        </span>
                      </div>
                      
                      <h3 className={`text-lg font-mono font-bold mb-2 ${getColorClass(cert.color).split(' ')[0]}`}>
                        {cert.name}
                      </h3>
                      
                      <div className="space-y-2 font-mono text-sm">
                        <div>
                          <span className="text-green-400">ISSUER: </span>
                          <span className="text-green-400/80">{cert.issuer}</span>
                        </div>
                        <div>
                          <span className="text-green-400">DATE: </span>
                          <span className="text-cyan-400">{cert.date}</span>
                        </div>
                        <div>
                          <span className="text-green-400">ID: </span>
                          <span className="text-purple-400 text-xs">{cert.credentialId}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Skills Tab */}
            {activeTab === 'skills' && (
              <div className="space-y-6">
                <div className="text-purple-400 font-mono text-xl mb-4">
                  {"> grep -r 'skill' /usr/local/expertise/"}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {skills.map((skillGroup, index) => (
                    <div key={index} className="bg-black/90 border border-purple-400/30 rounded-lg p-6">
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
            )}

            {/* Summary Stats */}
            <div className="bg-black/90 border border-green-400/30 rounded-lg p-6">
              <div className="text-green-400 font-mono text-lg mb-4">
                {"> wc -l /var/log/achievements.log"}
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 font-mono text-sm text-center">
                <div>
                  <div className="text-green-400 text-2xl font-bold">{educationData.length}</div>
                  <div className="text-green-400/70">Degrees</div>
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
                  <div className="text-green-400/70">Years Learning</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="mt-8 text-center">
          <div className="text-green-400/50 font-mono text-sm">
            <span className="animate-pulse">█</span> Credentials verified | Database integrity: 100%
          </div>
        </div>
      </div>
    </div>
  );
}