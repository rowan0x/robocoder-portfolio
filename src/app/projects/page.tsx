"use client";

import { useState, useEffect } from 'react';

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState(0);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [currentCommand, setCurrentCommand] = useState('');

  const projects = [
    {
      id: 'rebuilding_syrias_energy',
      name: 'REBUILDING SYRIA\'S ENERGY INFRASTRUCTURE',
      status: 'ACTIVE',
      classification: 'HIGH_PRIORITY',
      description: 'Comprehensive cybersecurity assessment and infrastructure protection for Syria\'s energy sector reconstruction.',
      technologies: ['Network Security', 'SCADA Protection', 'Industrial IoT', 'Threat Intelligence'],
      objectives: [
        'Secure critical energy infrastructure from cyber threats',
        'Implement robust monitoring and incident response systems',
        'Establish cybersecurity frameworks for power grid protection',
        'Train local teams on security best practices'
      ],
      timeline: '2023 - ONGOING',
      impact: 'CRITICAL_INFRASTRUCTURE',
      color: 'green'
    },
    {
      id: 'new_syria_initiative',
      name: 'NEW SYRIA INITIATIVE - DIGITAL SECURITY',
      status: 'COMPLETED',
      classification: 'STRATEGIC',
      description: 'Large-scale cybersecurity initiative to protect digital infrastructure during national reconstruction efforts.',
      technologies: ['Penetration Testing', 'Security Architecture', 'Risk Assessment', 'Compliance'],
      objectives: [
        'Conduct comprehensive security audits of government systems',
        'Develop national cybersecurity policies and procedures',
        'Implement secure communication channels for officials',
        'Create incident response protocols for national security'
      ],
      timeline: '2022 - 2023',
      impact: 'NATIONAL_SECURITY',
      color: 'cyan'
    },
    {
      id: 'cybersecurity_coaching',
      name: 'CYBERSECURITY EDUCATION & COACHING PLATFORM',
      status: 'ACTIVE',
      classification: 'EDUCATIONAL',
      description: 'Comprehensive cybersecurity training platform for professionals and organizations worldwide.',
      technologies: ['Content Creation', 'LMS Development', 'Security Training', 'Certification Prep'],
      objectives: [
        'Develop comprehensive cybersecurity curriculum',
        'Create hands-on lab environments for practical learning',
        'Mentor aspiring cybersecurity professionals',
        'Build community of security practitioners'
      ],
      timeline: '2019 - ONGOING',
      impact: 'EDUCATION_OUTREACH',
      color: 'purple'
    },
    {
      id: 'apex_enterprise_solutions',
      name: 'APEX ENTERPRISE SECURITY SOLUTIONS',
      status: 'COMPLETED',
      classification: 'COMMERCIAL',
      description: 'Founded and operated cybersecurity consulting firm providing enterprise security solutions.',
      technologies: ['Business Development', 'Security Consulting', 'Team Leadership', 'Client Management'],
      objectives: [
        'Establish successful cybersecurity consulting practice',
        'Deliver high-quality security solutions to SME clients',
        'Build and manage team of security professionals',
        'Develop strategic partnerships with technology vendors'
      ],
      timeline: '2023 - 2024',
      impact: 'BUSINESS_GROWTH',
      color: 'yellow'
    },
    {
      id: 'secure_lms_development',
      name: 'SECURE LEARNING MANAGEMENT SYSTEMS',
      status: 'COMPLETED',
      classification: 'TECHNICAL',
      description: 'Development of secure, GDPR-compliant learning management systems for educational institutions.',
      technologies: ['Web Security', 'Data Protection', 'Authentication', 'Privacy Compliance'],
      objectives: [
        'Design secure user authentication and authorization systems',
        'Implement data encryption and privacy protection measures',
        'Ensure GDPR and educational data compliance',
        'Create scalable and maintainable security architecture'
      ],
      timeline: '2021 - 2022',
      impact: 'EDUCATIONAL_TECHNOLOGY',
      color: 'blue'
    }
  ];

  const commands = [
    'ls -la /projects/',
    'cat README.md',
    'grep -r "security" .',
    'find . -name "*.log"',
    'ps aux | grep security',
    'netstat -tulpn',
    'sudo systemctl status firewall'
  ];

  useEffect(() => {
    setCommandHistory([
      '> Connecting to project database...',
      '> Authentication successful',
      '> Loading project manifests...',
      '> Access granted to classified projects',
      ''
    ]);
  }, []);

  const getStatusColor = (status: string): string => {
    return status === 'ACTIVE' ? 'text-green-400 animate-pulse' : 'text-gray-400';
  };

  const getClassificationColor = (classification: string): string => {
    const colors = {
      'HIGH_PRIORITY': 'text-red-400',
      'STRATEGIC': 'text-cyan-400',
      'EDUCATIONAL': 'text-purple-400',
      'COMMERCIAL': 'text-yellow-400',
      'TECHNICAL': 'text-blue-400'
    };
    return colors[classification as keyof typeof colors] || 'text-green-400';
  };

  const getProjectColor = (color: string): string => {
    const colors = {
      green: 'border-green-400/30 text-green-400',
      cyan: 'border-cyan-400/30 text-cyan-400',
      purple: 'border-purple-400/30 text-purple-400',
      yellow: 'border-yellow-400/30 text-yellow-400',
      blue: 'border-blue-400/30 text-blue-400'
    };
    return colors[color as keyof typeof colors] || colors.green;
  };

  const executeCommand = (cmd: string) => {
    setCommandHistory(prev => [...prev, `> ${cmd}`, '']);
    setCurrentCommand('');
  };

  return (
    <div className="min-h-screen p-4 pt-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-mono text-cyan-400 mb-2">
            PROJECTS_DATABASE.SYS
          </h1>
          <div className="text-green-400/70 font-mono text-sm">
            {"> Accessing classified project repository..."}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Project List */}
          <div className="lg:col-span-1">
            <div className="bg-black/90 border border-green-400/30 rounded-lg p-4">
              <div className="text-green-400 font-mono text-lg mb-4">
                {"> ls -la /projects/"}
              </div>
              <div className="space-y-2">
                {projects.map((project, index) => (
                  <div
                    key={project.id}
                    onClick={() => setSelectedProject(index)}
                    className={`p-3 rounded cursor-pointer transition-all font-mono text-sm ${
                      selectedProject === index
                        ? `${getProjectColor(project.color)} bg-black/50`
                        : 'text-green-400/70 hover:text-green-400 hover:bg-green-400/5'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>drwxr-xr-x {project.id}/</span>
                      <span className={getStatusColor(project.status)}>
                        [{project.status}]
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Command Terminal */}
            <div className="mt-6 bg-black/90 border border-cyan-400/30 rounded-lg p-4">
              <div className="text-cyan-400 font-mono text-lg mb-4">
                COMMAND_TERMINAL
              </div>
              <div className="space-y-1 mb-4 max-h-32 overflow-y-auto">
                {commandHistory.map((line, index) => (
                  <div key={index} className="text-green-400/70 font-mono text-xs">
                    {line}
                  </div>
                ))}
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-400 font-mono text-sm">$</span>
                <input
                  type="text"
                  value={currentCommand}
                  onChange={(e) => setCurrentCommand(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter' && currentCommand.trim()) {
                      executeCommand(currentCommand);
                    }
                  }}
                  className="flex-1 bg-transparent text-green-400 font-mono text-sm outline-none"
                  placeholder="Enter command..."
                />
              </div>
              <div className="mt-2 text-green-400/50 font-mono text-xs">
                Try: {commands[Math.floor(Math.random() * commands.length)]}
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="lg:col-span-2">
            <div className="bg-black/90 border border-green-400/30 rounded-lg p-6">
              <div className="text-green-400 font-mono text-lg mb-4">
                {`> cat /projects/${projects[selectedProject].id}/README.md`}
              </div>

              <div className="space-y-6">
                {/* Project Header */}
                <div>
                  <h2 className={`text-2xl font-mono font-bold mb-2 ${getProjectColor(projects[selectedProject].color).split(' ')[1]}`}>
                    {projects[selectedProject].name}
                  </h2>
                  <div className="flex flex-wrap items-center gap-4 font-mono text-sm">
                    <span className="text-green-400">STATUS:</span>
                    <span className={getStatusColor(projects[selectedProject].status)}>
                      {projects[selectedProject].status}
                    </span>
                    <span className="text-green-400">CLASSIFICATION:</span>
                    <span className={getClassificationColor(projects[selectedProject].classification)}>
                      {projects[selectedProject].classification}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <h3 className="text-cyan-400 font-mono text-lg mb-2">DESCRIPTION:</h3>
                  <p className="text-green-400/80 font-mono text-sm leading-relaxed">
                    {projects[selectedProject].description}
                  </p>
                </div>

                {/* Technologies */}
                <div>
                  <h3 className="text-purple-400 font-mono text-lg mb-2">TECHNOLOGIES:</h3>
                  <div className="flex flex-wrap gap-2">
                    {projects[selectedProject].technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-purple-400/10 border border-purple-400/30 text-purple-400 px-3 py-1 rounded font-mono text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Objectives */}
                <div>
                  <h3 className="text-yellow-400 font-mono text-lg mb-2">KEY OBJECTIVES:</h3>
                  <div className="space-y-2">
                    {projects[selectedProject].objectives.map((objective, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <span className="text-cyan-400 mt-1">▸</span>
                        <span className="text-green-400/80 font-mono text-sm">{objective}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Project Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-green-400/20">
                  <div>
                    <span className="text-green-400 font-mono text-sm">TIMELINE: </span>
                    <span className="text-cyan-400 font-mono text-sm">{projects[selectedProject].timeline}</span>
                  </div>
                  <div>
                    <span className="text-green-400 font-mono text-sm">IMPACT: </span>
                    <span className="text-yellow-400 font-mono text-sm">{projects[selectedProject].impact}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3 pt-4">
                  <button className="bg-green-400/10 border border-green-400/30 text-green-400 px-4 py-2 rounded font-mono text-sm hover:bg-green-400/20 transition-colors">
                    {"> view_details"}
                  </button>
                  <button className="bg-cyan-400/10 border border-cyan-400/30 text-cyan-400 px-4 py-2 rounded font-mono text-sm hover:bg-cyan-400/20 transition-colors">
                    {"> access_logs"}
                  </button>
                  <button className="bg-purple-400/10 border border-purple-400/30 text-purple-400 px-4 py-2 rounded font-mono text-sm hover:bg-purple-400/20 transition-colors">
                    {"> download_report"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-8 text-center">
          <div className="text-green-400/50 font-mono text-sm">
            <span className="animate-pulse">█</span> Project database loaded | {projects.length} projects found
          </div>
        </div>
      </div>
    </div>
  );
}