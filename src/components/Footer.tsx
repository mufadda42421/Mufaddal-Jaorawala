/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowUp, Code2, Github, Youtube, Mail } from 'lucide-react';
import { PortfolioProfile } from '../types/portfolio';

interface FooterProps {
  profile: PortfolioProfile;
}

export const Footer: React.FC<FooterProps> = ({ profile }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/5 bg-[#02050e] py-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
              <Code2 className="w-3.5 h-3.5" />
            </div>
            <span className="text-sm font-semibold text-white">
              {profile.name}
            </span>
            <span aria-hidden="true" className="text-slate-700">·</span>
            <span className="text-xs text-slate-500">14 Software Projects</span>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#achievements" className="hover:text-white transition-colors">Milestones</a>
            <a href="#journey" className="hover:text-white transition-colors">Journey</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/mufadda42421"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-white/5 text-slate-400 hover:text-white transition-colors"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.youtube.com/@intelligentcreativelabs-786"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-white/5 text-slate-400 hover:text-red-400 transition-colors"
              title="YouTube Channel"
            >
              <Youtube className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 border border-white/5 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            Designed & Built by <span className="text-white font-medium">{profile.name}</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-slate-500">
              {profile.email}
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
