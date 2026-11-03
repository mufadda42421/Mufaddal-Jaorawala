/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * PORTFOLIO DATA FOR MUFADDAL JAORAWALA
 * 
 * NOTE FOR MUFADDAL:
 * You can edit this file directly to add your skills, projects, achievements,
 * coding journey milestones, and social profiles!
 * Alternatively, you can use the "Edit Portfolio" modal in the web app
 * to add and preview them in real time.
 */

import { PortfolioProfile, SkillCategory, JourneyType } from '../types/portfolio';

export const INITIAL_PORTFOLIO_DATA: PortfolioProfile = {
  name: "Mufaddal Jaorawala",
  age: 14,
  careerInterest: "Coding / Aspiring Software Developer",
  email: "jaorawalamufaddal7@gmail.com",
  headline: "Young Coder. Creative Thinker. Future Innovator.",
  shortIntro: "Passionate about coding, technology, and building real digital solutions. Driven by curiosity and a commitment to continuous learning.",
  aboutBio: "My name is Mufaddal Jaorawala. I am 14 years old, and coding is my career interest and passion. I truly enjoy learning programming, building things, solving logical problems, and exploring modern technology. Every day is an opportunity to expand my skills and turn ideas into functional code.",
  passions: [
    "Learning programming languages & principles",
    "Building functional digital projects",
    "Solving algorithmic & logical challenges",
    "Exploring cutting-edge software & technologies"
  ],

  // SKILLS: Empty by default.
  // Add your real programming languages, frameworks, tools, and technologies here!
  // Example: { id: "1", name: "Python", category: "Programming Languages", proficiency: "Learning" }
  skills: [],

  // PROJECTS: Empty by default.
  // Add your real projects as you build them!
  // Example: { id: "1", title: "Calculator App", description: "...", technologies: ["HTML", "CSS", "JS"], githubUrl: "..." }
  projects: [],

  // ACHIEVEMENTS & MILESTONES: Empty by default.
  // Add real competitions, certifications, school tech awards, or hackathon participations!
  // Example: { id: "1", title: "First Place School CodeFest", issuingOrg: "High School", date: "2025" }
  achievements: [],

  // CODING JOURNEY: Empty by default.
  // Document when you started coding, key concepts mastered, and your future aspirations!
  // Example: { id: "1", period: "2024", title: "Wrote My First Line of Code", description: "...", type: "started" }
  journey: [],

  // SOCIAL LINKS: Optional links.
  // Add your real GitHub, LinkedIn, or other accounts when you create them!
  // Example: { platform: "github", label: "GitHub", url: "https://github.com/..." }
  socialLinks: []
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  'Programming Languages',
  'Frameworks & Libraries',
  'Developer Tools',
  'Technologies & Platforms',
  'Core Concepts & Other'
];

export const JOURNEY_TYPES: { type: JourneyType; label: string }[] = [
  { type: 'started', label: 'Started Coding' },
  { type: 'learned', label: 'Technologies Learned' },
  { type: 'project', label: 'Projects Built' },
  { type: 'milestone', label: 'Milestone Reached' },
  { type: 'goal', label: 'Future Goal' }
];
