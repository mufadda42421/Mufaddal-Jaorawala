/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Award, Calendar, Building2, ExternalLink } from 'lucide-react';
import { AchievementItem } from '../types/portfolio';

interface AchievementsProps {
  achievements: AchievementItem[];
}

export const Achievements: React.FC<AchievementsProps> = ({ achievements }) => {
  return (
    <section id="achievements" className="py-20 lg:py-28 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono text-amber-400 mb-2 tracking-wider">
            Recognition & Milestones
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white text-balance">
            Key Milestones & Achievements
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            Real software accomplishments, independent projects deployed, and public community building.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                    <span>View Link</span>
                    <ExternalLink className="w-3 h-3 text-slate-500" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
