/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Code2 } from 'lucide-react';

interface NavbarProps {
  onSecretTrigger?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onSecretTrigger }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const handleLogoClick = (e: React.MouseEvent) => {
    if (!onSecretTrigger) return;
    const newCount = clickCount + 1;
    if (newCount >= 5) {
      e.preventDefault();
      onSecretTrigger();
      setClickCount(0);
    } else {
      setClickCount(newCount);
      // Reset counter after 2.5 seconds if not clicked 5 times
      setTimeout(() => setClickCount(0), 2500);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Milestones', href: '#achievements' },
    { label: 'Journey', href: '#journey' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#030712]/85 backdrop-blur-md border-b border-white/5 py-3.5 shadow-lg shadow-black/30' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Strict Top Bar Contract: Zone 1 (Brand) - Zone 2 (Nav Links) - Zone 3 (Primary Action) */}
        <div className="flex items-center justify-between gap-8">
          
          {/* Zone 1: Single text element wordmark with secret click trigger */}
          <a 
            href="#" 
            onClick={handleLogoClick}
            className="flex items-center gap-2.5 text-slate-100 group whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform duration-200">
              <Code2 className="w-4 h-4 text-white" />
            </div>
            <span className="text-base font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors">
              Mufaddal Jaorawala
            </span>
          </a>

          {/* Zone 2: 4-6 concise single-line text links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-400">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-white transition-colors whitespace-nowrap shrink-0 py-1 border-b border-transparent hover:border-blue-500/50"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded-lg shadow-sm shadow-blue-600/30 transition-all duration-200 whitespace-nowrap shrink-0"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 pb-4 border-t border-white/5 bg-[#0a0f1d]/95 backdrop-blur-xl rounded-xl px-4 space-y-2 shadow-2xl">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-sm text-slate-300 hover:text-blue-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-white/5">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-1.5 w-full py-2.5 text-xs font-semibold text-white bg-blue-600 rounded-lg shadow"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
