/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Layers, Plus, Code2, Wrench, Globe, Terminal, CheckCircle2 } from 'lucide-react';
import { SkillItem, SkillCategory } from '../types/portfolio';
import { SKILL_CATEGORIES } from '../data/portfolioData';

interface SkillsProps {
  skills: SkillItem[];
  onOpenCustomizer?: () => void;
}

export const Skills: React.FC<SkillsProps> = ({ skills, onOpenCustomizer }) => {
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

  const hasSkills = skills.length > 0;

  return (
    <section id="skills" className="py-20 lg:py-28 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-mono text-cyan-400 mb-2 tracking-wider">
              Technical Stack
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white text-balance">
              Skills & Technologies
            </h2>
            <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
              Carefully curated technologies, languages, and developer tools. Only verified skills that I actively practice and learn are documented here.
            </p>
          </div>

          {onOpenCustomizer && (
            <button
              onClick={onOpenCustomizer}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-300 bg-slate-900/80 hover:bg-slate-800 rounded-lg border border-white/10 hover:border-blue-500/40 transition-colors shrink-0 self-start md:self-auto"
            >
              <Plus className="w-3.5 h-3.5 text-blue-400" />
              <span>{hasSkills ? 'Manage Skills' : 'Add Your Skills'}</span>
            </button>
          )}
        </div>

        {/* If skills are populated */}
        {hasSkills ? (
          <div>
            {/* Interactive Category Filter Tabs (allowed for filtering per §1.A) */}
            <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
              <button
                onClick={() => setSelectedCategory('All')}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors ${
                  selectedCategory === 'All'
                    ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/20'
                    : 'bg-slate-900/60 text-slate-400 hover:text-white border border-white/5'
                }`}
              >
                All Skills ({skills.length})
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
                          <h4 className="text-sm font-semibold text-white">{skill.name}</h4>
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
                      <p className="mt-3 text-xs text-slate-400 line-clamp-2">
                        {skill.notes}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          /* Empty State - Tasteful, inspiring, and clearly explains how to populate */
          <div className="rounded-2xl p-8 sm:p-12 bg-[#090d1a]/80 border border-white/5 text-center relative overflow-hidden">
            <div 
              aria-hidden="true" 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/5 blur-[100px] pointer-events-none" 
            />
            
            <div className="max-w-md mx-auto space-y-4 relative z-10">
              <div className="w-12 h-12 mx-auto rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-cyan-400">
                <Code2 className="w-6 h-6" />
              </div>
              
              <h3 className="text-lg font-semibold text-white">
                Technical Skills in Development
              </h3>
              
              <p className="text-sm text-slate-400 leading-relaxed">
                As an aspiring developer, I only showcase skills and languages I have genuinely studied and practiced. My technical toolkit will appear here as I master each technology.
              </p>

              {/* Categorical placeholders showing structure */}
              <div className="pt-4 grid grid-cols-2 gap-3 text-left">
                {SKILL_CATEGORIES.slice(0, 4).map(cat => (
                  <div key={cat} className="p-3 rounded-lg bg-slate-950/50 border border-white/5">
                    <div className="text-xs font-mono text-slate-300">{cat}</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">Ready to configure</div>
                  </div>
                ))}
              </div>

              {onOpenCustomizer && (
                <div className="pt-2">
                  <button
                    onClick={onOpenCustomizer}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-md shadow-blue-600/20 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add My First Technical Skill</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
