/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
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
import { SecretAdminConsole } from './components/SecretAdminConsole';

export default function App() {
  const {
    profile,
    addProject,
    removeProject,
    addSkill,
    removeSkill,
    addAchievement,
    removeAchievement,
    addJourneyMilestone,
    removeJourneyMilestone,
    resetToDefaults,
    exportAsTypeScript
  } = usePortfolio();

  const [isSecretAdminOpen, setIsSecretAdminOpen] = useState(false);

  // Secret keyboard trigger: Ctrl + Shift + M (or Cmd + Shift + M on Mac)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'M' || e.key === 'm')) {
        e.preventDefault();
        setIsSecretAdminOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 flex flex-col selection:bg-blue-600/30 selection:text-blue-200">
      {/* Top Navigation with secret 5-click logo trigger */}
      <Navbar onSecretTrigger={() => setIsSecretAdminOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero profile={profile} />

        {/* 2. About Me Section */}
        <About profile={profile} />

        {/* 3. Technical Skills Section */}
        <Skills skills={profile.skills} />

        {/* 4. Projects Section (14 Verified Projects across 4 Categories) */}
        <Projects projects={profile.projects} />

        {/* 5. Achievements & Milestones */}
        <Achievements achievements={profile.achievements} />

        {/* 6. Coding Journey Timeline */}
        <CodingJourney journey={profile.journey} />

        {/* 7. Contact Section */}
        <Contact profile={profile} />
      </main>

      {/* 8. Footer */}
      <Footer profile={profile} />

      {/* Secret Passcode-Protected Admin Console (Only visible when triggered by Mufaddal) */}
      <SecretAdminConsole
        isOpen={isSecretAdminOpen}
        onClose={() => setIsSecretAdminOpen(false)}
        profile={profile}
        onAddProject={addProject}
        onRemoveProject={removeProject}
        onAddSkill={addSkill}
        onRemoveSkill={removeSkill}
        onAddAchievement={addAchievement}
        onRemoveAchievement={removeAchievement}
        onAddJourneyMilestone={addJourneyMilestone}
        onRemoveJourneyMilestone={removeJourneyMilestone}
        onResetToDefaults={resetToDefaults}
        onExportTypeScript={exportAsTypeScript}
      />
    </div>
  );
}
