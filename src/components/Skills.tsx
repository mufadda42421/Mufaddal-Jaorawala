/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Layers, Code2, Wrench, Globe, Terminal } from 'lucide-react';
import { SkillItem } from '../types/portfolio';
import { SKILL_CATEGORIES } from '../data/portfolioData';

interface SkillsProps {
  skills: SkillItem[];
}

export const Skills: React.FC<SkillsProps> = ({ skills }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Filter skills
  const filteredSkills = selectedCategory === 'All' 
    ? skills 
    : skills.filter(s => s.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Programming Languages':
        return Code2;
      case 'Frameworks & Libraries':
        return Layers;
      case 'Developer Tools':
        return Wrench;
      case 'Technologies & Platforms':
        return Globe;
      default:
        return Terminal;
    }
  };

  return (
    <section id="skills" className="py-20 lg:py-28 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono text-cyan-400 mb-2 tracking-wider">
            Technical Stack
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white text-balance">
            Skills & Technologies
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            The core programming languages, frameworks, browser extension APIs, and deployment tools actively applied across my 14 software projects.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          <button
            onClick={() => setSelectedCategory('All')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors ${
              selectedCategory === 'All'
                ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/20'
                : 'bg-slate-900/60 text-slate-400 hover:text-white border border-white/5'
            }`}
          >
            All Technologies ({skills.length})
          </button>
          {SKILL_CATEGORIES.map(cat => {
            const count = skills.filter(s => s.category === cat).length;
            if (count === 0) return null;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/20'
                    : 'bg-slate-900/60 text-slate-400 hover:text-white border border-white/5'
                }`}
              >
                {cat} ({count})
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map(skill => {
            const Icon = getCategoryIcon(skill.category);
            return (
              <div
                key={skill.id}
                className="p-5 rounded-xl bg-[#0a101f]/80 border border-white/5 hover:border-cyan-500/30 transition-all duration-200"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-slate-900 flex items-center justify-center text-cyan-400 border border-white/5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-white">{skill.name}</h3>
                      <span className="text-xs text-slate-400">{skill.category}</span>
                    </div>
                  </div>
                  {skill.proficiency && (
                    <span className="text-[11px] font-mono text-cyan-400/90">
                      {skill.proficiency}
                    </span>
                  )}
                </div>
                {skill.notes && (
                  <p className="mt-3 text-xs text-slate-400 leading-relaxed">
                    {skill.notes}
                  </p>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
