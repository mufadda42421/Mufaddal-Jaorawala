/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowUp, Code2 } from 'lucide-react';
import { PortfolioProfile } from '../types/portfolio';

interface FooterProps {
  profile: PortfolioProfile;
  onOpenCustomizer?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ profile, onOpenCustomizer }) => {
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
            <span className="text-xs text-slate-500">Aspiring Software Developer</span>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#achievements" className="hover:text-white transition-colors">Milestones</a>
            <a href="#journey" className="hover:text-white transition-colors">Journey</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-slate-900 border border-white/5 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            Designed & Built by <span className="text-white font-medium">{profile.name}</span>
          </div>

          <div className="flex items-center gap-4">
            {onOpenCustomizer && (
              <button
                onClick={onOpenCustomizer}
                className="text-slate-400 hover:text-blue-400 font-mono transition-colors"
              >
                Customizer & Code Export
              </button>
            )}
            <span className="text-slate-500">
              {profile.email}
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
