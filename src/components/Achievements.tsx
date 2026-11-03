/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Award, Plus, Calendar, Building2, ExternalLink } from 'lucide-react';
import { AchievementItem } from '../types/portfolio';

interface AchievementsProps {
  achievements: AchievementItem[];
  onOpenCustomizer?: () => void;
}

export const Achievements: React.FC<AchievementsProps> = ({ achievements, onOpenCustomizer }) => {
  const hasAchievements = achievements.length > 0;

  return (
    <section id="achievements" className="py-20 lg:py-28 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-mono text-amber-400 mb-2 tracking-wider">
              Recognition & Milestones
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white text-balance">
              Achievements & Certifications
            </h2>
            <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
              Official certifications, coding competitions, hackathons, and academic milestones achieved throughout my developer journey.
            </p>
          </div>

          {onOpenCustomizer && (
            <button
              onClick={onOpenCustomizer}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-300 bg-slate-900/80 hover:bg-slate-800 rounded-lg border border-white/10 hover:border-amber-500/40 transition-colors shrink-0 self-start md:self-auto"
            >
              <Plus className="w-3.5 h-3.5 text-amber-400" />
              <span>{hasAchievements ? 'Add Achievement' : 'Record Achievement'}</span>
            </button>
          )}
        </div>

        {hasAchievements ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((item) => (
              <div
                key={item.id}
                className="p-6 rounded-2xl bg-[#0a101f]/80 border border-white/5 hover:border-amber-500/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                      <Award className="w-5 h-5" />
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      <span>{item.date}</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-white">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs text-amber-400/90 font-medium mt-1">
                      <Building2 className="w-3.5 h-3.5" />
                      <span>{item.issuingOrg}</span>
                    </div>
                  </div>

                  {item.description && (
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  )}
                </div>

                {item.certificateUrl && (
                  <div className="mt-5 pt-4 border-t border-white/5">
                    <a
                      href={item.certificateUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-white transition-colors"
                    >
                      <span>View Credential</span>
                      <ExternalLink className="w-3 h-3 text-slate-500" />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          /* Tasteful Empty State */
          <div className="rounded-2xl p-8 sm:p-12 bg-[#090e1c]/80 border border-white/5 text-center relative overflow-hidden">
            <div 
              aria-hidden="true" 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[250px] bg-amber-500/5 blur-[100px] pointer-events-none" 
            />
            
            <div className="max-w-md mx-auto space-y-4 relative z-10">
              <div className="w-12 h-12 mx-auto rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-amber-400">
                <Award className="w-6 h-6" />
              </div>

              <h3 className="text-lg font-semibold text-white">
                Milestones in the Making
              </h3>

              <p className="text-sm text-slate-400 leading-relaxed">
                As I participate in coding competitions, complete certified courses, and hit milestones, each genuine credential will be documented here.
              </p>

              {onOpenCustomizer && (
                <div className="pt-2">
                  <button
                    onClick={onOpenCustomizer}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-amber-600 hover:bg-amber-500 rounded-lg shadow-md shadow-amber-600/20 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Record Achievement</span>
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
