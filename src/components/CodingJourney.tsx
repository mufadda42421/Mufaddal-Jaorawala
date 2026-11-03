/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Milestone, Compass, Rocket, Code2, CheckCircle2 } from 'lucide-react';
import { JourneyMilestone, JourneyType } from '../types/portfolio';

interface CodingJourneyProps {
  journey: JourneyMilestone[];
}

export const CodingJourney: React.FC<CodingJourneyProps> = ({ journey }) => {
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
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-mono text-indigo-400 mb-2 tracking-wider">
            Timeline & Growth
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white text-balance">
            My Coding Journey
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            The progression from writing initial CLI automation tools and personal virtual assistant systems to shipping live web platforms and browser extensions.
          </p>
        </div>

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

      </div>
    </section>
  );
};
