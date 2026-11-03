/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowDown, Mail, Terminal, Sparkles, Code } from 'lucide-react';
import { PortfolioProfile } from '../types/portfolio';

interface HeroProps {
  profile: PortfolioProfile;
  onOpenCustomizer?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ profile }) => {
  return (
    <section className="relative min-h-[92vh] pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center overflow-hidden">
      {/* Background ambient lighting effects (electric blue, violet, subtle cyan) */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[400px] bg-gradient-to-tr from-blue-600/15 via-purple-600/10 to-cyan-500/10 blur-[130px] rounded-full pointer-events-none -z-10" 
      />
      <div 
        aria-hidden="true" 
        className="absolute -top-10 -right-20 w-[450px] h-[350px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none -z-10" 
      />
      
      {/* Subtle developer grid lines */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none -z-10 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Split-screen layout: Typographic hierarchy left, visual workstation right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typographic Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Clean unboxed kicker / badge */}
            <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400/90 tracking-wide">
              <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
              <span>Aspiring Software Developer</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-400">Age 14</span>
            </div>

            {/* Display Headline */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] text-balance">
                Young Coder.{' '}
                <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
                  Creative Thinker.
                </span>{' '}
                Future Innovator.
              </h1>
              <p className="text-lg md:text-xl font-medium text-slate-300">
                Hi, I'm <span className="text-white font-semibold">{profile.name}</span>.
              </p>
            </div>

            {/* Short introduction & professional profile statement */}
            <p className="text-base text-slate-400 leading-relaxed max-w-2xl">
              {profile.shortIntro} Coding is my passion and future career path. I am dedicated to mastering programming fundamentals, solving meaningful challenges, and building technology that makes a positive difference.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded-xl shadow-lg shadow-blue-600/25 transition-all duration-200"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800/90 active:bg-slate-950 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-200"
              >
                <Mail className="w-4 h-4 text-slate-400" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Clean metadata strip without pills */}
            <div className="pt-4 border-t border-white/5 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-slate-400 font-mono">
              <div>
                <span className="text-slate-500">Identity:</span>{' '}
                <span className="text-slate-300">Student & Coder</span>
              </div>
              <span aria-hidden="true" className="text-slate-700">·</span>
              <div>
                <span className="text-slate-500">Interest:</span>{' '}
                <span className="text-slate-300">Software Engineering</span>
              </div>
              <span aria-hidden="true" className="text-slate-700">·</span>
              <div>
                <span className="text-slate-500">Location:</span>{' '}
                <span className="text-slate-300">Global Citizen</span>
              </div>
            </div>

          </div>

          {/* Right Column: Developer Workstation Visual & Code Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-2xl p-2 bg-gradient-to-b from-white/10 to-white/5 border border-white/10 shadow-2xl shadow-black/60 backdrop-blur-xl group">
              
              {/* Luminous image container */}
              <div className="relative rounded-xl overflow-hidden aspect-[16/10] bg-slate-950">
                <img
                  src="/src/assets/images/hero_developer_visual_1793687315441.jpg"
                  alt="Mufaddal Jaorawala developer workstation and coding environment"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700 opacity-90"
                />
                
                {/* Subtle gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent pointer-events-none" />

                {/* Overlaid developer terminal pill */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between px-3 py-1.5 rounded-lg bg-slate-950/70 backdrop-blur-md border border-white/10 text-xs font-mono text-slate-300">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
                    <span className="ml-2 text-slate-400">developer.ts</span>
                  </div>
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                </div>

                {/* Overlaid code preview */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-slate-950/80 backdrop-blur-md border border-white/10 font-mono text-[11px] leading-relaxed text-slate-300">
                  <div className="text-blue-400">
                    <span className="text-purple-400">const</span> developer = &#123;
                  </div>
                  <div className="pl-3 text-slate-300">
                    name: <span className="text-emerald-400">"{profile.name}"</span>,
                  </div>
                  <div className="pl-3 text-slate-300">
                    age: <span className="text-amber-400">{profile.age}</span>,
                  </div>
                  <div className="pl-3 text-slate-300">
                    focus: <span className="text-cyan-400">"Software Development"</span>,
                  </div>
                  <div className="pl-3 text-slate-300">
                    readyToBuild: <span className="text-purple-400">true</span>
                  </div>
                  <div className="text-blue-400">&#125;;</div>
                </div>
              </div>

              {/* Decorative corner glow */}
              <div 
                aria-hidden="true" 
                className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-500/20 blur-2xl rounded-full pointer-events-none" 
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
