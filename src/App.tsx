/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { usePortfolio } from './hooks/usePortfolio';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Achievements } from './components/Achievements';
import { CodingJourney } from './components/CodingJourney';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { PortfolioManagerModal } from './components/PortfolioManagerModal';
import { SlidersHorizontal } from 'lucide-react';

export default function App() {
  const {
    profile,
    addSkill,
    removeSkill,
    addProject,
    removeProject,
    addAchievement,
    removeAchievement,
    addJourneyMilestone,
    removeJourneyMilestone,
    updateSocialLinks,
    resetToDefaults,
    exportAsTypeScript
  } = usePortfolio();

  const [isManagerOpen, setIsManagerOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 flex flex-col selection:bg-blue-600/30 selection:text-blue-200">
      {/* Top Navigation */}
      <Navbar onOpenCustomizer={() => setIsManagerOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero 
          profile={profile} 
          onOpenCustomizer={() => setIsManagerOpen(true)} 
        />

        {/* 2. About Me Section */}
        <About 
          profile={profile} 
        />

        {/* 3. Technical Skills Section */}
        <Skills 
          skills={profile.skills} 
          onOpenCustomizer={() => setIsManagerOpen(true)} 
        />

        {/* 4. Projects Section */}
        <Projects 
          projects={profile.projects} 
          onOpenCustomizer={() => setIsManagerOpen(true)} 
        />

        {/* 5. Achievements & Milestones */}
        <Achievements 
          achievements={profile.achievements} 
          onOpenCustomizer={() => setIsManagerOpen(true)} 
        />

        {/* 6. Coding Journey Timeline */}
        <CodingJourney 
          journey={profile.journey} 
          onOpenCustomizer={() => setIsManagerOpen(true)} 
        />

        {/* 7. Contact Section */}
        <Contact 
          profile={profile} 
          onOpenCustomizer={() => setIsManagerOpen(true)} 
        />
      </main>

      {/* 8. Footer */}
      <Footer 
        profile={profile} 
        onOpenCustomizer={() => setIsManagerOpen(true)} 
      />

      {/* Floating Manager / Customizer Button */}
      <button
        onClick={() => setIsManagerOpen(true)}
        className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white border border-white/10 hover:border-blue-500/40 shadow-xl shadow-black/50 backdrop-blur-md transition-all duration-200 text-xs font-mono group"
        title="Open Portfolio Manager to add your real skills and projects"
      >
        <SlidersHorizontal className="w-3.5 h-3.5 text-blue-400 group-hover:rotate-45 transition-transform duration-300" />
        <span className="hidden sm:inline">Portfolio Manager</span>
      </button>

      {/* Portfolio Manager Modal */}
      <PortfolioManagerModal
        isOpen={isManagerOpen}
        onClose={() => setIsManagerOpen(false)}
        profile={profile}
        onAddSkill={addSkill}
        onRemoveSkill={removeSkill}
        onAddProject={addProject}
        onRemoveProject={removeProject}
        onAddAchievement={addAchievement}
        onRemoveAchievement={removeAchievement}
        onAddJourneyMilestone={addJourneyMilestone}
        onRemoveJourneyMilestone={removeJourneyMilestone}
        onUpdateSocialLinks={updateSocialLinks}
        onResetToDefaults={resetToDefaults}
        onExportTypeScript={exportAsTypeScript}
      />
    </div>
  );
}
