/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Milestone, Plus, Calendar, Compass, Rocket, Code2, CheckCircle2 } from 'lucide-react';
import { JourneyMilestone, JourneyType } from '../types/portfolio';

interface CodingJourneyProps {
  journey: JourneyMilestone[];
  onOpenCustomizer?: () => void;
}

export const CodingJourney: React.FC<CodingJourneyProps> = ({ journey, onOpenCustomizer }) => {
  const hasMilestones = journey.length > 0;

  const getTypeIcon = (type: JourneyType) => {
    switch (type) {
      case 'started':
        return Code2;
      case 'learned':
        return Compass;
      case 'project':
        return CheckCircle2;
      case 'goal':
        return Rocket;
      default:
        return Milestone;
    }
  };

  const getTypeColor = (type: JourneyType) => {
    switch (type) {
      case 'started':
        return 'text-blue-400 bg-blue-500/10 border-blue-500/20';
      case 'learned':
        return 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20';
      case 'project':
        return 'text-purple-400 bg-purple-500/10 border-purple-500/20';
      case 'goal':
        return 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20';
      default:
        return 'text-slate-400 bg-slate-500/10 border-slate-500/20';
    }
  };

  return (
    <section id="journey" className="py-20 lg:py-28 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="text-xs font-mono text-indigo-400 mb-2 tracking-wider">
              Timeline & Growth
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white text-balance">
              My Coding Journey
            </h2>
            <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
              Documenting key milestones: when I started coding, technologies learned, projects created, and future ambitions.
            </p>
          </div>

          {onOpenCustomizer && (
            <button
              onClick={onOpenCustomizer}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-300 bg-slate-900/80 hover:bg-slate-800 rounded-lg border border-white/10 hover:border-indigo-500/40 transition-colors shrink-0 self-start md:self-auto"
            >
              <Plus className="w-3.5 h-3.5 text-indigo-400" />
              <span>{hasMilestones ? 'Add Milestone' : 'Document Milestone'}</span>
            </button>
          )}
        </div>

        {hasMilestones ? (
          <div className="relative pl-6 sm:pl-8 border-l border-white/10 space-y-10 max-w-3xl mx-auto">
            {journey.map((item) => {
              const Icon = getTypeIcon(item.type);
              const colorClasses = getTypeColor(item.type);
              return (
                <div key={item.id} className="relative group">
                  {/* Timeline Node dot */}
                  <div className={`absolute -left-[37px] sm:-left-[45px] top-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full border flex items-center justify-center ${colorClasses}`}>
                    <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>

                  <div className="p-6 rounded-2xl bg-[#0a101f]/80 border border-white/5 hover:border-indigo-500/30 transition-all duration-300 space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-mono text-indigo-400">
                        {item.period}
                      </span>
                      <span className="text-[11px] font-mono text-slate-500 capitalize">
                        {item.type}
                      </span>
                    </div>

                    <h3 className="text-lg font-semibold text-white">
                      {item.title}
                    </h3>

                    <p className="text-sm text-slate-400 leading-relaxed">
                      {item.description}
                    </p>

                    {item.techTags && item.techTags.length > 0 && (
                      <div className="pt-2 flex flex-wrap items-center gap-2 text-xs font-mono text-slate-300">
                        {item.techTags.map((tag, i) => (
                          <React.Fragment key={tag}>
                            <span>{tag}</span>
                            {i < item.techTags!.length - 1 && (
                              <span aria-hidden="true" className="text-slate-600">·</span>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Empty State - Clear, beautiful, and authentic */
          <div className="rounded-2xl p-8 sm:p-12 bg-[#090e1c]/80 border border-white/5 text-center relative overflow-hidden">
            <div 
              aria-hidden="true" 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[280px] bg-indigo-600/5 blur-[100px] pointer-events-none" 
            />

            <div className="max-w-md mx-auto space-y-4 relative z-10">
              <div className="w-12 h-12 mx-auto rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-indigo-400">
                <Compass className="w-6 h-6" />
              </div>

              <h3 className="text-lg font-semibold text-white">
                The Journey Begins
              </h3>

              <p className="text-sm text-slate-400 leading-relaxed">
                Every developer charts their unique trajectory. From the first line of code to future software innovations, each chapter of my learning and growth will be documented on this timeline.
              </p>

              {onOpenCustomizer && (
                <div className="pt-2">
                  <button
                    onClick={onOpenCustomizer}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg shadow-md shadow-indigo-600/25 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add First Journey Milestone</span>
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
