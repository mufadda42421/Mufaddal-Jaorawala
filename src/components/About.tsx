/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Brain, Code, Hammer, Compass, ExternalLink, Github, Youtube } from 'lucide-react';
import { PortfolioProfile } from '../types/portfolio';

interface AboutProps {
  profile: PortfolioProfile;
}

export const About: React.FC<AboutProps> = ({ profile }) => {
  const corePassions = [
    {
      title: "Building Real Things",
      description: "Shipped 7 live production web applications, 4 Chrome extensions, and desktop applications solving practical needs.",
      icon: Hammer,
      accent: "text-blue-400"
    },
    {
      title: "Learning Programming",
      description: "Constantly expanding knowledge of JavaScript, TypeScript, Python, modern UI libraries, and system programming.",
      icon: Code,
      accent: "text-purple-400"
    },
    {
      title: "Solving Problems & Automation",
      description: "Developing intelligent helpers like J.A.R.V.I.S., custom terminal CLI tools, and tab/clipboard productivity extensions.",
      icon: Brain,
      accent: "text-cyan-400"
    },
    {
      title: "Exploring Technology & Sharing",
      description: "Experimenting with cutting-edge tools and documenting technical discoveries on Intelligent Creative Labs (@intelligentcreativelabs-786).",
      icon: Compass,
      accent: "text-indigo-400"
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-28 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-mono text-blue-400 mb-2 tracking-wider">
            About Me
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white text-balance">
            Driven by curiosity, powered by code.
          </h2>
          <p className="mt-4 text-slate-400 leading-relaxed text-base">
            I am <strong className="text-white font-semibold">{profile.name}</strong>, a {profile.age}-year-old developer. Coding is my career interest and creative passion. I enjoy learning programming, building functional applications, solving algorithmic problems, and exploring technology. To date, I have engineered and deployed 14 software projects across live web applications, Chrome extensions, and desktop tools.
          </p>
        </div>

        {/* 4 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {corePassions.map((item) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.title}
                className="p-6 sm:p-8 rounded-2xl bg-[#0a101f]/70 border border-white/5 hover:border-blue-500/30 transition-all duration-300 relative group"
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl bg-slate-900 border border-white/5 ${item.accent} group-hover:scale-110 transition-transform duration-300 shrink-0`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Creator Channel & Developer Profile Strip */}
        <div className="mt-10 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-blue-950/30 via-purple-950/20 to-slate-950/40 border border-white/10 text-slate-300">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-1">
              <div className="text-xs font-mono text-cyan-400">Intelligent Creative Labs</div>
              <div className="text-base sm:text-lg font-semibold text-white">
                Sharing programming projects & software builds with the developer community
              </div>
              <p className="text-xs text-slate-400">
                YouTube channel showcasing coding experiments, extension builds, and software creations.
              </p>
            </div>
            
            <div className="flex items-center gap-3 shrink-0">
              <a
                href="https://www.youtube.com/@intelligentcreativelabs-786"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-red-600 hover:bg-red-500 rounded-lg transition-colors"
              >
                <Youtube className="w-4 h-4" />
                <span>Visit YouTube</span>
                <ExternalLink className="w-3 h-3 text-red-200" />
              </a>
              <a
                href="https://github.com/mufadda42421"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 rounded-lg border border-white/10 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Profile</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
