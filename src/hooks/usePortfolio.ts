/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { PortfolioProfile, SkillItem, ProjectItem, AchievementItem, JourneyMilestone, SocialLink } from '../types/portfolio';
import { INITIAL_PORTFOLIO_DATA } from '../data/portfolioData';

const SECRET_STORAGE_KEY = 'mufaddal_portfolio_admin_v2';

export function usePortfolio() {
  const [data, setData] = useState<PortfolioProfile>(() => {
    try {
      if (typeof window !== 'undefined') {
        const saved = localStorage.getItem(SECRET_STORAGE_KEY);
        if (saved) {
          const parsed = JSON.parse(saved);
          return {
            ...INITIAL_PORTFOLIO_DATA,
            ...parsed,
            projects: Array.isArray(parsed.projects) ? parsed.projects : INITIAL_PORTFOLIO_DATA.projects,
            skills: Array.isArray(parsed.skills) ? parsed.skills : INITIAL_PORTFOLIO_DATA.skills,
            achievements: Array.isArray(parsed.achievements) ? parsed.achievements : INITIAL_PORTFOLIO_DATA.achievements,
            journey: Array.isArray(parsed.journey) ? parsed.journey : INITIAL_PORTFOLIO_DATA.journey,
            socialLinks: Array.isArray(parsed.socialLinks) ? parsed.socialLinks : INITIAL_PORTFOLIO_DATA.socialLinks,
          };
        }
      }
    } catch (e) {
      console.warn('Failed to read portfolio storage', e);
    }
    return INITIAL_PORTFOLIO_DATA;
  });

  const saveToStorage = (updated: PortfolioProfile) => {
    setData(updated);
    try {
      if (typeof window !== 'undefined') {
        localStorage.setItem(SECRET_STORAGE_KEY, JSON.stringify(updated));
      }
    } catch (e) {
      console.warn('Failed to save to secret storage', e);
    }
  };

  const addProject = (project: Omit<ProjectItem, 'id'>) => {
    const newItem: ProjectItem = {
      ...project,
      id: 'proj_' + Date.now() + '_' + Math.random().toString(36).substring(2, 6)
    };
    saveToStorage({
      ...data,
      projects: [newItem, ...data.projects]
    });
  };

  const removeProject = (id: string) => {
    saveToStorage({
      ...data,
      projects: data.projects.filter(p => p.id !== id)
    });
  };

  const addSkill = (skill: Omit<SkillItem, 'id'>) => {
    const newItem: SkillItem = {
      ...skill,
      id: 'skill_' + Date.now() + '_' + Math.random().toString(36).substring(2, 6)
    };
    saveToStorage({
      ...data,
      skills: [...data.skills, newItem]
    });
  };

  const removeSkill = (id: string) => {
    saveToStorage({
      ...data,
      skills: data.skills.filter(s => s.id !== id)
    });
  };

  const addAchievement = (achievement: Omit<AchievementItem, 'id'>) => {
    const newItem: AchievementItem = {
      ...achievement,
      id: 'ach_' + Date.now() + '_' + Math.random().toString(36).substring(2, 6)
    };
    saveToStorage({
      ...data,
      achievements: [newItem, ...data.achievements]
    });
  };

  const removeAchievement = (id: string) => {
    saveToStorage({
      ...data,
      achievements: data.achievements.filter(a => a.id !== id)
    });
  };

  const addJourneyMilestone = (milestone: Omit<JourneyMilestone, 'id'>) => {
    const newItem: JourneyMilestone = {
      ...milestone,
      id: 'jrn_' + Date.now() + '_' + Math.random().toString(36).substring(2, 6)
    };
    saveToStorage({
      ...data,
      journey: [...data.journey, newItem]
    });
  };

  const removeJourneyMilestone = (id: string) => {
    saveToStorage({
      ...data,
      journey: data.journey.filter(j => j.id !== id)
    });
  };

  const updateSocialLinks = (socialLinks: SocialLink[]) => {
    saveToStorage({
      ...data,
      socialLinks
    });
  };

  const resetToDefaults = () => {
    setData(INITIAL_PORTFOLIO_DATA);
    try {
      if (typeof window !== 'undefined') {
        localStorage.removeItem(SECRET_STORAGE_KEY);
      }
    } catch {
      // ignore
    }
  };

  const exportAsTypeScript = () => {
    return `import { PortfolioProfile } from '../types/portfolio';\n\nexport const INITIAL_PORTFOLIO_DATA: PortfolioProfile = ${JSON.stringify(data, null, 2)};\n`;
  };

  return {
    profile: data,
    addProject,
    removeProject,
    addSkill,
    removeSkill,
    addAchievement,
    removeAchievement,
    addJourneyMilestone,
    removeJourneyMilestone,
    updateSocialLinks,
    resetToDefaults,
    exportAsTypeScript
  };
}
