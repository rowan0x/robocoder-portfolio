"use client";

import { useState, useEffect } from 'react';

export default function ContactPage() {
  const [terminalOutput, setTerminalOutput] = useState<string[]>([]);
  const [currentCommand, setCurrentCommand] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const contactInfo = {
    email: 'jewab10@gmail.com',
    phone: '+963988456680',
    linkedin: 'linkedin.com/in/jiad-arabi-2555a5271',
    linkedinFull: 'https://www.linkedin.com/in/jiad-arabi-2555a5271',
    location: 'Alexandria, Egypt',
    timezone: 'GMT+2',
    pgp: 'PGP Key: 4A2B 8C9D 1E3F 5G6H'
  };

  const availableCommands = [
    'help - Show available commands',
    'connect - Establish secure connection',
    'send_message - Send encrypted message',
    'get_contact_info - Display contact information',
    'ping - Test connection status',
    'encrypt - Encrypt message with PGP',
    'status - Show system status',
    'clear - Clear terminal'
  ];

  useEffect(() => {
    setTerminalOutput([
      '> Initializing secure communication terminal...',
      '> Loading encryption protocols...',
      '> Contact system ready',
      '> Type "help" for available commands',
      ''
    ]);
  }, []);

  const executeCommand = (cmd: string) => {
    const command = cmd.toLowerCase().trim();
    const newOutput = [...terminalOutput, `> ${cmd}`];

    switch (command) {
      case 'help':
        newOutput.push('AVAILABLE COMMANDS:');
        availableCommands.forEach(cmd => newOutput.push(`  ${cmd}`));
        break;
      
      case 'connect':
        newOutput.push('Establishing secure connection...');
        newOutput.push('Handshake initiated...');
        newOutput.push('Encryption: AES-256 | Status: CONNECTED');
        setIsConnected(true);
        break;
      
      case 'get_contact_info':
        newOutput.push('CONTACT INFORMATION:');
        newOutput.push(`Email: ${contactInfo.email}`);
        newOutput.push(`Phone: ${contactInfo.phone}`);
        newOutput.push(`LinkedIn: ${contactInfo.linkedin}`);
        newOutput.push(`Location: ${contactInfo.location}`);
        newOutput.push(`Timezone: ${contactInfo.timezone}`);
        newOutput.push(`${contactInfo.pgp}`);
        newOutput.push('');
        newOutput.push('NOTE: Contact form is for demonstration only.');
        newOutput.push('For real inquiries, please use direct email or LinkedIn.');
        break;
      
      case 'ping':
        newOutput.push('PING jiad.arabi.secure 64 bytes');
        newOutput.push('64 bytes from jiad.arabi: icmp_seq=1 ttl=64 time=0.123ms');
        newOutput.push('--- ping statistics ---');
        newOutput.push('1 packets transmitted, 1 received, 0% packet loss');
        break;
      
      case 'status':
        newOutput.push('SYSTEM STATUS:');
        newOutput.push(`Connection: ${isConnected ? 'SECURE' : 'DISCONNECTED'}`);
        newOutput.push('Encryption: ENABLED');
        newOutput.push('Firewall: ACTIVE');
        newOutput.push(`Location: ${contactInfo.location}`);
        newOutput.push('Last Login: ' + new Date().toLocaleString());
        break;
      
      case 'clear':
        setTerminalOutput(['> Terminal cleared']);
        setCurrentCommand('');
        return;
      
      case 'send_message':
        if (!isConnected) {
          newOutput.push('ERROR: Not connected. Run "connect" first.');
        } else {
          newOutput.push('Opening secure message form...');
          newOutput.push('NOTE: This is a demo form only.');
        }
        break;
      
      default:
        newOutput.push(`Command not found: ${cmd}`);
        newOutput.push('Type "help" for available commands');
    }

    newOutput.push('');
    setTerminalOutput(newOutput);
    setCurrentCommand('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isConnected) {
      setTerminalOutput(prev => [...prev, '> ERROR: Establish connection first', '']);
      return;
    }

    const newOutput = [...terminalOutput];
    newOutput.push('> Encrypting message...');
    newOutput.push('> Message encrypted with PGP');
    newOutput.push('> DEMO MODE: Message not actually sent');
    newOutput.push('> For real contact, use: jewab10@gmail.com');
    newOutput.push('');
    
    setTerminalOutput(newOutput);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen p-4 pt-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-mono text-cyan-400 mb-2">
            CONTACT_TERMINAL.EXE
          </h1>
          <div className="text-green-400/70 font-mono text-sm">
            {"> Secure communication channel initialized"}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Terminal Interface */}
          <div className="bg-black/90 border border-green-400/30 rounded-lg">
            {/* Terminal Header */}
            <div className="bg-black/80 border-b border-green-400/20 px-4 py-2 rounded-t-lg">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500/70"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/70"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/70"></div>
                <span className="ml-4 text-green-400/70 font-mono text-xs">
                  secure_terminal@jiad.arabi.sys
                </span>
                <div className="ml-auto flex items-center space-x-2">
                  <div className={`w-2 h-2 rounded-full ${isConnected ? 'bg-green-400 animate-pulse' : 'bg-red-400'}`}></div>
                  <span className="text-green-400/70 font-mono text-xs">
                    {isConnected ? 'CONNECTED' : 'DISCONNECTED'}
                  </span>
                </div>
              </div>
            </div>

            {/* Terminal Content */}
            <div className="p-4">
              <div className="h-64 overflow-y-auto mb-4 space-y-1">
                {terminalOutput.map((line, index) => (
                  <div key={index} className="text-green-400 font-mono text-sm">
                    {line}
                  </div>
                ))}
              </div>

              {/* Command Input */}
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
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-black/90 border border-cyan-400/30 rounded-lg p-6">
            <div className="text-cyan-400 font-mono text-lg mb-6">
              {"> SECURE_MESSAGE_FORM"}
            </div>

            <div className="bg-yellow-400/10 border border-yellow-400/30 rounded p-4 mb-6">
              <div className="text-yellow-400 font-mono text-sm">
                ⚠ DEMO ONLY: This form doesn&apos;t send real messages
              </div>
              <div className="text-yellow-400/70 font-mono text-xs mt-1">
                Use real contact info below for actual communication
              </div>
            </div>

            {!isConnected && (
              <div className="bg-red-400/10 border border-red-400/30 rounded p-4 mb-6">
                <div className="text-red-400 font-mono text-sm">
                  ⚠ WARNING: Connection not established
                </div>
                <div className="text-red-400/70 font-mono text-xs mt-1">
                  Run &quot;connect&quot; command in terminal first
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-green-400 font-mono text-sm mb-2">
                  NAME:
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-black/50 border border-green-400/30 rounded px-3 py-2 text-green-400 font-mono text-sm focus:border-green-400 focus:outline-none"
                  placeholder="Enter your name..."
                  required
                />
              </div>

              <div>
                <label className="block text-green-400 font-mono text-sm mb-2">
                  EMAIL:
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-black/50 border border-green-400/30 rounded px-3 py-2 text-green-400 font-mono text-sm focus:border-green-400 focus:outline-none"
                  placeholder="your.email@domain.com"
                  required
                />
              </div>

              <div>
                <label className="block text-green-400 font-mono text-sm mb-2">
                  SUBJECT:
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className="w-full bg-black/50 border border-green-400/30 rounded px-3 py-2 text-green-400 font-mono text-sm focus:border-green-400 focus:outline-none"
                  placeholder="Message subject..."
                  required
                />
              </div>

              <div>
                <label className="block text-green-400 font-mono text-sm mb-2">
                  MESSAGE:
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={4}
                  className="w-full bg-black/50 border border-green-400/30 rounded px-3 py-2 text-green-400 font-mono text-sm focus:border-green-400 focus:outline-none resize-none"
                  placeholder="Your encrypted message..."
                  required
                />
              </div>

              <button
                type="submit"
                disabled={!isConnected}
                className={`w-full py-3 rounded font-mono text-sm transition-colors ${
                  isConnected
                    ? 'bg-green-400/20 border border-green-400/30 text-green-400 hover:bg-green-400/30'
                    : 'bg-gray-400/10 border border-gray-400/30 text-gray-400 cursor-not-allowed'
                }`}
              >
                {"> SEND_DEMO_MESSAGE"}
              </button>
            </form>
          </div>
        </div>

        {/* Contact Information Cards - NOW CLICKABLE */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-black/90 border border-green-400/30 rounded-lg p-4">
            <div className="text-green-400 font-mono text-lg mb-2">EMAIL</div>
            <a 
              href={`mailto:${contactInfo.email}`}
              className="text-green-400/80 font-mono text-sm hover:text-green-400 transition-colors cursor-pointer underline block"
            >
              {contactInfo.email}
            </a>
          </div>
          <div className="bg-black/90 border border-cyan-400/30 rounded-lg p-4">
            <div className="text-cyan-400 font-mono text-lg mb-2">PHONE</div>
            <a 
              href={`tel:${contactInfo.phone}`}
              className="text-green-400/80 font-mono text-sm hover:text-cyan-400 transition-colors cursor-pointer underline block"
            >
              {contactInfo.phone}
            </a>
          </div>
          <div className="bg-black/90 border border-purple-400/30 rounded-lg p-4">
            <div className="text-purple-400 font-mono text-lg mb-2">LINKEDIN</div>
            <a 
              href={contactInfo.linkedinFull}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400/80 font-mono text-sm hover:text-purple-400 transition-colors cursor-pointer underline break-all block"
            >
              {contactInfo.linkedin}
            </a>
          </div>
        </div>

        {/* Security Notice */}
        <div className="mt-8 bg-black/90 border border-yellow-400/30 rounded-lg p-6">
          <div className="text-yellow-400 font-mono text-lg mb-4">
            {"> cat /etc/security/communication_policy.txt"}
          </div>
          <div className="space-y-2 text-green-400/80 font-mono text-sm">
            <div>• IMPORTANT: Contact form is for portfolio demonstration only</div>
            <div>• For real inquiries, please use direct email: 
              <a href="mailto:jewab10@gmail.com" className="text-cyan-400 hover:text-cyan-300 underline ml-1">
                jewab10@gmail.com
              </a>
            </div>
            <div>• LinkedIn: 
              <a 
                href="https://www.linkedin.com/in/jiad-arabi-2555a5271" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 underline ml-1"
              >
                linkedin.com/in/jiad-arabi-2555a5271
              </a>
            </div>
            <div>• Location: Alexandria, Egypt</div>
            <div>• Response time: 24-48 hours via email or LinkedIn</div>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-8 text-center">
          <div className="text-green-400/50 font-mono text-sm">
            <span className="animate-pulse">█</span> Secure communication terminal ready
          </div>
        </div>
      </div>
    </div>
  );
}