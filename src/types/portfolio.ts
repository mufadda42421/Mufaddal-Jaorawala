/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type SkillCategory = 
  | 'Programming Languages'
  | 'Frameworks & Libraries'
  | 'Developer Tools'
  | 'Technologies & Platforms'
  | 'Core Concepts & Other';

export interface SkillItem {
  id: string;
  name: string;
  category: SkillCategory;
  proficiency?: 'Learning' | 'Practicing' | 'Proficient' | 'Advanced';
  notes?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Websites' | 'Chrome Extensions' | 'Desktop Apps' | 'Personal Projects';
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  imageUrl?: string;
  featured?: boolean;
  dateCreated?: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  issuingOrg: string;
  date: string;
  description?: string;
  certificateUrl?: string;
  badgeImageUrl?: string;
}

export type JourneyType = 'started' | 'learned' | 'project' | 'milestone' | 'goal';

export interface JourneyMilestone {
  id: string;
  period: string; // e.g. "2024", "Summer 2024", "Month Year"
  title: string;
  description: string;
  type: JourneyType;
  techTags?: string[];
}

export interface SocialLink {
  platform: 'github' | 'linkedin' | 'x' | 'discord' | 'email' | 'custom';
  label: string;
  url: string;
}

export interface PortfolioProfile {
  name: string;
  age: number;
  headline: string;
  careerInterest: string;
  email: string;
  shortIntro: string;
  aboutBio: string;
  passions: string[];
  skills: SkillItem[];
  projects: ProjectItem[];
  achievements: AchievementItem[];
  journey: JourneyMilestone[];
  socialLinks: SocialLink[];
}
