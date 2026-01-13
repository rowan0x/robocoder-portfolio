"use client";

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

interface TerminalProps {
  className?: string;
}

export default function InteractiveTerminal({ className = '' }: TerminalProps) {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([
    '> Welcome to JIAD_ARABI interactive terminal',
    '> Type "help" for available commands',
    ''
  ]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const commands = {
    help: () => [
      'Available commands:',
      '  help       - Show this help message',
      '  about      - Navigate to about page',
      '  skills     - Navigate to skills page',
      '  projects   - Navigate to projects page',
      '  contact    - Navigate to contact page',
      '  whoami     - Display user information',
      '  clear      - Clear terminal',
      '  date       - Show current date',
      '  uptime     - Show system uptime',
      '  matrix     - Enable matrix mode',
      '  hack       - Easter egg command',
      ''
    ],
    about: () => {
      router.push('/about');
      return ['> Navigating to about page...'];
    },
    skills: () => {
      router.push('/skills');
      return ['> Accessing skills matrix...'];
    },
    projects: () => {
      router.push('/projects');
      return ['> Loading projects database...'];
    },
    contact: () => {
      router.push('/contact');
      return ['> Opening secure communication channel...'];
    },
    whoami: () => [
      'User: JIAD ARABI',
      'Role: Security & Network Engineer',
      'Location: Alexandria, Egypt',
      'Email: jewab10@gmail.com',
      'Security Clearance: MAXIMUM',
      'Status: ONLINE',
      ''
    ],
    clear: () => {
      setHistory([]);
      return [];
    },
    date: () => [
      `Current date: ${new Date().toLocaleString()}`,
      ''
    ],
    uptime: () => [
      `System uptime: ${Math.floor(Math.random() * 100)} days, ${Math.floor(Math.random() * 24)} hours`,
      'Load average: 0.15, 0.23, 0.18',
      ''
    ],
    matrix: () => [
      'Enabling matrix mode...',
      '01001000 01100001 01100011 01101011 01100101 01110010',
      'Matrix mode: ACTIVATED',
      'Reality is an illusion. Welcome to the real world.',
      ''
    ],
    hack: () => [
      'Initiating hack sequence...',
      'Bypassing firewall... [████████████] 100%',
      'Accessing mainframe... [████████████] 100%',
      'Downloading secrets... [████████████] 100%',
      '',
      'Just kidding! This is a portfolio website 😄',
      'But I do know real cybersecurity!',
      ''
    ],
    ls: () => [
      'drwxr-xr-x about_me/',
      'drwxr-xr-x skills_matrix/',
      'drwxr-xr-x experience_logs/',
      'drwxr-xr-x projects_db/',
      'drwxr-xr-x education_certs/',
      'drwxr-xr-x contact_terminal/',
      ''
    ]
  };

  const executeCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    const newHistory = [...history, `> ${cmd}`];
    
    if (trimmedCmd === '') {
      setHistory([...newHistory, '']);
      return;
    }

    if (commands[trimmedCmd as keyof typeof commands]) {
      const output = commands[trimmedCmd as keyof typeof commands]();
      setHistory([...newHistory, ...output]);
    } else {
      setHistory([
        ...newHistory,
        `Command not found: ${cmd}`,
        'Type "help" for available commands',
        ''
      ]);
    }

    setCommandHistory(prev => [...prev, cmd]);
    setHistoryIndex(-1);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      executeCommand(input);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setInput('');
        } else {
          setHistoryIndex(newIndex);
          setInput(commandHistory[newIndex]);
        }
      }
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className={`bg-black/90 border border-green-400/40 rounded-lg shadow-[0_0_30px_rgba(0,255,65,0.3)] ${className}`}>
      {/* Terminal Header */}
      <div className="bg-black/80 border-b border-green-400/20 px-4 py-2 rounded-t-lg">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500/70"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/70"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/70"></div>
          <span className="ml-4 text-green-400/70 font-mono text-xs">
            interactive_terminal@jiad.arabi.sys
          </span>
        </div>
      </div>

      {/* Terminal Content */}
      <div className="p-4">
        <div className="h-64 overflow-y-auto mb-4 space-y-1">
          {history.map((line, index) => (
            <div key={index} className="text-green-400 font-mono text-sm">
              {line}
            </div>
          ))}
        </div>

        {/* Command Input */}
        <div className="flex items-center space-x-2">
          <span className="text-green-400 font-mono text-sm">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent text-green-400 font-mono text-sm outline-none"
            placeholder="Type a command..."
            autoComplete="off"
          />
          <span className="text-green-400 font-mono text-sm animate-pulse">█</span>
        </div>
      </div>
    </div>
  );
}