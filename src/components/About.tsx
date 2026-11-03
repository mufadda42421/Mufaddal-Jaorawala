/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Brain, Code, Cpu, Hammer, Compass, Sparkles } from 'lucide-react';
import { PortfolioProfile } from '../types/portfolio';

interface AboutProps {
  profile: PortfolioProfile;
}

export const About: React.FC<AboutProps> = ({ profile }) => {
  const corePassions = [
    {
      title: "Learning Programming",
      description: "Constantly expanding knowledge of software concepts, syntax, data structures, and computer science fundamentals.",
      icon: Code,
      accent: "text-blue-400"
    },
    {
      title: "Building Real Things",
      description: "Turning logic and creative ideas into functional programs, responsive websites, and practical developer utilities.",
      icon: Hammer,
      accent: "text-purple-400"
    },
    {
      title: "Solving Complex Problems",
      description: "Breaking down complex problems into clear, algorithmic steps and debugging challenges systematically.",
      icon: Brain,
      accent: "text-cyan-400"
    },
    {
      title: "Exploring Technology",
      description: "Staying curious about how modern software powers our world—from web frameworks and operating systems to cloud tools.",
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
            I am <strong className="text-white font-semibold">{profile.name}</strong>, a {profile.age}-year-old developer. Coding isn't just a hobby for me—it is my career interest and creative passion. I believe software engineering is one of the most powerful tools to think clearly, solve real-world problems, and build meaningful things.
          </p>
        </div>

        {/* 4 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {corePassions.map((item, idx) => {
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

        {/* Philosophy / Mindset quote card */}
        <div className="mt-10 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-blue-950/30 via-purple-950/20 to-slate-950/40 border border-white/10 text-slate-300">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="text-xs font-mono text-slate-400">Core Focus</div>
              <div className="text-base sm:text-lg font-medium text-white mt-1">
                "Learning step-by-step with authentic understanding, write clean code, and never stop building."
              </div>
            </div>
            <div className="text-xs font-mono text-slate-400 whitespace-nowrap">
              — Mufaddal Jaorawala
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
