/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { PortfolioProfile, SkillItem, ProjectItem, AchievementItem, JourneyMilestone, SocialLink } from '../types/portfolio';
import { INITIAL_PORTFOLIO_DATA } from '../data/portfolioData';

const STORAGE_KEY = 'mufaddal_portfolio_custom_data_v1';

export function usePortfolio() {
  const [data, setData] = useState<PortfolioProfile>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return {
          ...INITIAL_PORTFOLIO_DATA,
          ...parsed,
          // Ensure arrays are preserved
          skills: Array.isArray(parsed.skills) ? parsed.skills : [],
          projects: Array.isArray(parsed.projects) ? parsed.projects : [],
          achievements: Array.isArray(parsed.achievements) ? parsed.achievements : [],
          journey: Array.isArray(parsed.journey) ? parsed.journey : [],
          socialLinks: Array.isArray(parsed.socialLinks) ? parsed.socialLinks : [],
        };
      }
    } catch (e) {
      console.warn('Failed to load portfolio cache from storage', e);
    }
    return INITIAL_PORTFOLIO_DATA;
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.warn('Failed to save portfolio to local storage', e);
    }
  }, [data]);

  const addSkill = (skill: Omit<SkillItem, 'id'>) => {
    const newItem: SkillItem = {
      ...skill,
      id: 'skill_' + Date.now() + '_' + Math.random().toString(36).substring(2, 6)
    };
    setData(prev => ({
      ...prev,
      skills: [...prev.skills, newItem]
    }));
  };

  const removeSkill = (id: string) => {
    setData(prev => ({
      ...prev,
      skills: prev.skills.filter(s => s.id !== id)
    }));
  };

  const addProject = (project: Omit<ProjectItem, 'id'>) => {
    const newItem: ProjectItem = {
      ...project,
      id: 'proj_' + Date.now() + '_' + Math.random().toString(36).substring(2, 6)
    };
    setData(prev => ({
      ...prev,
      projects: [newItem, ...prev.projects]
    }));
  };

  const removeProject = (id: string) => {
    setData(prev => ({
      ...prev,
      projects: prev.projects.filter(p => p.id !== id)
    }));
  };

  const addAchievement = (achievement: Omit<AchievementItem, 'id'>) => {
    const newItem: AchievementItem = {
      ...achievement,
      id: 'ach_' + Date.now() + '_' + Math.random().toString(36).substring(2, 6)
    };
    setData(prev => ({
      ...prev,
      achievements: [newItem, ...prev.achievements]
    }));
  };

  const removeAchievement = (id: string) => {
    setData(prev => ({
      ...prev,
      achievements: prev.achievements.filter(a => a.id !== id)
    }));
  };

  const addJourneyMilestone = (milestone: Omit<JourneyMilestone, 'id'>) => {
    const newItem: JourneyMilestone = {
      ...milestone,
      id: 'jrn_' + Date.now() + '_' + Math.random().toString(36).substring(2, 6)
    };
    setData(prev => ({
      ...prev,
      journey: [...prev.journey, newItem]
    }));
  };

  const removeJourneyMilestone = (id: string) => {
    setData(prev => ({
      ...prev,
      journey: prev.journey.filter(j => j.id !== id)
    }));
  };

  const updateSocialLinks = (socialLinks: SocialLink[]) => {
    setData(prev => ({
      ...prev,
      socialLinks
    }));
  };

  const resetToDefaults = () => {
    setData(INITIAL_PORTFOLIO_DATA);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  };

  const exportAsTypeScript = () => {
    return `import { PortfolioProfile } from '../types/portfolio';\n\nexport const INITIAL_PORTFOLIO_DATA: PortfolioProfile = ${JSON.stringify(data, null, 2)};\n`;
  };

  return {
    profile: data,
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
  };
}
