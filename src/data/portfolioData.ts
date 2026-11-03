/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * PORTFOLIO DATA FOR MUFADDAL JAORAWALA
 * Verified details including 14 software projects, social channels, and skills.
 */

import { PortfolioProfile, SkillCategory, JourneyType } from '../types/portfolio';

export const INITIAL_PORTFOLIO_DATA: PortfolioProfile = {
  name: "Mufaddal Jaorawala",
  age: 14,
  careerInterest: "Coding / Aspiring Software Developer",
  email: "jaorawalamufaddal7@gmail.com",
  headline: "Young Coder. Creative Thinker. Future Innovator.",
  shortIntro: "14-year-old developer and software builder with 14 active projects spanning production web apps, Chrome extensions, desktop software, and automation tools.",
  aboutBio: "My name is Mufaddal Jaorawala. I am 14 years old, and coding is my career interest and passion. I have engineered and deployed 7 live web applications on Vercel, developed 4 custom Chrome extensions, built the NEXUS desktop system, and created personal developer tools like J.A.R.V.I.S. and custom CLI interfaces. I am continuously exploring modern software development and sharing my work through Intelligent Creative Labs.",
  passions: [
    "Building full-stack web applications and interactive platforms",
    "Developing browser extensions to streamline daily productivity",
    "Designing desktop software and automation CLI tools",
    "Exploring modern programming languages and sharing coding experiments"
  ],

  // VERIFIED TECHNICAL SKILLS (demonstrated across real projects)
  skills: [
    {
      id: "skill_1",
      name: "JavaScript / TypeScript",
      category: "Programming Languages",
      proficiency: "Proficient",
      notes: "Core language used across 7 web applications and 4 Chrome extensions."
    },
    {
      id: "skill_2",
      name: "Python",
      category: "Programming Languages",
      proficiency: "Proficient",
      notes: "Used for J.A.R.V.I.S. assistant logic, desktop integration, and algorithmic scripts."
    },
    {
      id: "skill_3",
      name: "HTML5 & CSS3 / Tailwind",
      category: "Programming Languages",
      proficiency: "Advanced",
      notes: "Crafting modern, responsive UI and design systems across all web platforms."
    },
    {
      id: "skill_4",
      name: "React.js",
      category: "Frameworks & Libraries",
      proficiency: "Proficient",
      notes: "Component-driven frontend architecture for web apps and dashboard interfaces."
    },
    {
      id: "skill_5",
      name: "Tailwind CSS",
      category: "Frameworks & Libraries",
      proficiency: "Advanced",
      notes: "Rapid utility-first styling with custom dark modes and responsive layouts."
    },
    {
      id: "skill_6",
      name: "Chrome Extensions API",
      category: "Technologies & Platforms",
      proficiency: "Proficient",
      notes: "Manifest v3, background service workers, content scripts, and browser storage."
    },
    {
      id: "skill_7",
      name: "Vercel Cloud Deployment",
      category: "Technologies & Platforms",
      proficiency: "Advanced",
      notes: "Deploying and managing live production domains for all web applications."
    },
    {
      id: "skill_8",
      name: "Git & GitHub",
      category: "Developer Tools",
      proficiency: "Proficient",
      notes: "Source control, repository management, and code versioning @mufadda42421."
    },
    {
      id: "skill_9",
      name: "CLI & Terminal Tooling",
      category: "Developer Tools",
      proficiency: "Proficient",
      notes: "Building command line interfaces, scripting, and shell utilities."
    },
    {
      id: "skill_10",
      name: "Desktop Application Architecture",
      category: "Core Concepts & Other",
      proficiency: "Practicing",
      notes: "System design and workflow orchestration in the NEXUS desktop app."
    }
  ],

  // 14 GENUINE PROJECTS SUPPLIED BY MUFADDAL JAORAWALA
  projects: [
    // 1. Websites (7 projects)
    {
      id: "proj_creatorkit",
      title: "CreatorKit Studio",
      category: "Websites",
      description: "An all-in-one studio suite and workspace built for digital creators, content producers, and developers to accelerate creative workflows.",
      technologies: ["React", "Tailwind CSS", "Vercel", "Web APIs"],
      liveUrl: "https://creatorkit-studio.vercel.app",
      githubUrl: "https://github.com/mufadda42421",
      featured: true
    },
    {
      id: "proj_travelmate",
      title: "TravelMate by MJ",
      category: "Websites",
      description: "Intelligent travel planning companion and destination exploration web application helping explorers curate itineraries and discover places.",
      technologies: ["React", "JavaScript", "Responsive Design", "Vercel"],
      liveUrl: "https://travelmatebymj.vercel.app",
      githubUrl: "https://github.com/mufadda42421",
      featured: true
    },
    {
      id: "proj_brainvault",
      title: "BrainVault by MJ",
      category: "Websites",
      description: "Digital second brain and structured knowledge repository for organizing thoughts, technical notes, developer resources, and research.",
      technologies: ["React", "Tailwind CSS", "LocalStorage", "Vercel"],
      liveUrl: "https://brainvaultbymj.vercel.app",
      githubUrl: "https://github.com/mufadda42421",
      featured: true
    },
    {
      id: "proj_bazaarloop",
      title: "BazaarLoop",
      category: "Websites",
      description: "Modern digital marketplace platform featuring catalog discovery, seamless shopping navigation, and high-performance frontend commerce UX.",
      technologies: ["React", "TypeScript", "E-Commerce", "Vercel"],
      liveUrl: "https://bazaarloop.vercel.app",
      githubUrl: "https://github.com/mufadda42421"
    },
    {
      id: "proj_meetspace",
      title: "MeetSpace Pro",
      category: "Websites",
      description: "Professional collaboration workspace engineered for teams, live meetings, and remote communication with modern audio/video integration.",
      technologies: ["React", "WebRTC / Video", "Tailwind CSS", "Vercel"],
      liveUrl: "https://meetspacepro.vercel.app",
      githubUrl: "https://github.com/mufadda42421"
    },
    {
      id: "proj_chemverse",
      title: "ChemVerse",
      category: "Websites",
      description: "Interactive chemistry exploration portal and educational science platform designed to visualize molecular structures and chemical reactions.",
      technologies: ["React", "Interactive Science", "UI Design", "Vercel"],
      liveUrl: "https://chemverse-five.vercel.app",
      githubUrl: "https://github.com/mufadda42421"
    },
    {
      id: "proj_cineflix",
      title: "CineFlix by MJ",
      category: "Websites",
      description: "Cinema and media discovery hub displaying movie trailers, release metadata, trending ratings, and curated entertainment catalogs.",
      technologies: ["React", "Media APIs", "Tailwind CSS", "Vercel"],
      liveUrl: "https://cineflixbymj.vercel.app",
      githubUrl: "https://github.com/mufadda42421"
    },

    // 2. Desktop Apps (1 project)
    {
      id: "proj_nexus",
      title: "NEXUS Desktop App",
      category: "Desktop Apps",
      description: "High-performance centralized desktop application engineered for seamless system productivity, command execution, and workflow optimization.",
      technologies: ["Desktop Architecture", "Python / Systems", "Process Management"],
      githubUrl: "https://github.com/mufadda42421",
      featured: true
    },

    // 3. Personal Projects (2 projects)
    {
      id: "proj_jarvis",
      title: "J.A.R.V.I.S.",
      category: "Personal Projects",
      description: "Personal automated virtual assistant capable of executing voice routines, system automation commands, task scheduling, and intelligent responses.",
      technologies: ["Python", "Automation", "NLP", "Voice Recognition"],
      githubUrl: "https://github.com/mufadda42421",
      featured: true
    },
    {
      id: "proj_cli",
      title: "CLI (Command Line Tool)",
      category: "Personal Projects",
      description: "Custom developer command line utility built for rapid terminal navigation, automated file scaffolding, and task automation.",
      technologies: ["Shell / Bash", "Python / Node.js", "Terminal UX"],
      githubUrl: "https://github.com/mufadda42421"
    },

    // 4. Chrome Extensions (4 projects)
    {
      id: "proj_tabkitty",
      title: "TabKitty Extension",
      category: "Chrome Extensions",
      description: "Smart browser productivity extension that organizes overflowing tabs, groups browsing sessions, and optimizes browser memory usage.",
      technologies: ["Chrome Extensions API", "JavaScript", "Browser Storage", "Vercel"],
      liveUrl: "https://tabkitty.vercel.app",
      githubUrl: "https://github.com/mufadda42421"
    },
    {
      id: "proj_emailreply",
      title: "Email Reply Assistant",
      category: "Chrome Extensions",
      description: "Intelligent browser companion that accelerates email correspondence by drafting clear, context-aware reply templates and responses.",
      technologies: ["Chrome Extensions API", "AI / NLP", "JavaScript", "Vercel"],
      liveUrl: "https://emailreplyassistant.vercel.app",
      githubUrl: "https://github.com/mufadda42421"
    },
    {
      id: "proj_authx",
      title: "AuthX by MJ",
      category: "Chrome Extensions",
      description: "Security and authentication companion extension designed to streamline login sessions and credential safety across web portals.",
      technologies: ["Chrome Extensions API", "Web Security", "JavaScript", "Vercel"],
      liveUrl: "https://authxbymj.vercel.app",
      githubUrl: "https://github.com/mufadda42421"
    },
    {
      id: "proj_copycat",
      title: "CopyCat by MJ",
      category: "Chrome Extensions",
      description: "Advanced clipboard manager extension storing recent clip history, formatted text snippets, and providing rapid copy-paste recall.",
      technologies: ["Chrome Extensions API", "Clipboard API", "JavaScript", "Vercel"],
      liveUrl: "https://copycatbymj.vercel.app",
      githubUrl: "https://github.com/mufadda42421"
    }
  ],

  // ACHIEVEMENTS & RECOGNITION (derived directly from real shipped work)
  achievements: [
    {
      id: "ach_1",
      title: "14 Independent Software Projects Shipped",
      issuingOrg: "Self-Driven Engineering Portfolio",
      date: "2024 - Present",
      description: "Designed, coded, and deployed 7 live web apps on Vercel, 4 browser extensions, desktop software NEXUS, and custom CLI & J.A.R.V.I.S. tools at age 14.",
      certificateUrl: "https://github.com/mufadda42421"
    },
    {
      id: "ach_2",
      title: "Founder & Creator of Intelligent Creative Labs",
      issuingOrg: "YouTube Tech Channel",
      date: "Active",
      description: "Producing technical videos, software demonstrations, and programming experiments at @intelligentcreativelabs-786.",
      certificateUrl: "https://www.youtube.com/@intelligentcreativelabs-786"
    },
    {
      id: "ach_3",
      title: "Production Web & Extension Deployment",
      issuingOrg: "Vercel & Chrome Ecosystem",
      date: "2024",
      description: "Successfully configured live hosting, custom subdomains, and client-side web extension architectures across 11 public deployments.",
      certificateUrl: "https://creatorkit-studio.vercel.app"
    }
  ],

  // REAL CODING JOURNEY BASED ON HIS BUILT PROJECTS
  journey: [
    {
      id: "jrn_1",
      period: "Foundations",
      title: "First Lines of Code & Automation CLI",
      description: "Began coding journey exploring logic, terminal environments, and building custom command line utilities to automate developer tasks.",
      type: "started",
      techTags: ["CLI", "Python", "Shell"]
    },
    {
      id: "jrn_2",
      period: "Personal Innovation",
      title: "Building J.A.R.V.I.S. Virtual Assistant",
      description: "Engineered a personalized AI assistant prototype incorporating voice recognition, task automation, and algorithmic routines.",
      type: "project",
      techTags: ["J.A.R.V.I.S.", "Automation", "Python"]
    },
    {
      id: "jrn_3",
      period: "Desktop Systems",
      title: "Architecting NEXUS Desktop Software",
      description: "Expanded beyond scripts to construct NEXUS, a dedicated desktop productivity software platform.",
      type: "project",
      techTags: ["NEXUS", "Desktop App"]
    },
    {
      id: "jrn_4",
      period: "Browser Ecosystem",
      title: "Publishing 4 Chrome Extensions",
      description: "Authored TabKitty, Email Reply Assistant, AuthX by MJ, and CopyCat by MJ to enhance web productivity and browser tooling.",
      type: "learned",
      techTags: ["Chrome APIs", "TabKitty", "AuthX", "CopyCat"]
    },
    {
      id: "jrn_5",
      period: "Full-Stack Web Deployments",
      title: "Deploying 7 Production Web Apps on Vercel",
      description: "Developed and shipped CreatorKit Studio, TravelMate, BrainVault, BazaarLoop, MeetSpace Pro, ChemVerse, and CineFlix to live users.",
      type: "milestone",
      techTags: ["React", "Tailwind CSS", "Vercel", "Web Apps"]
    },
    {
      id: "jrn_6",
      period: "Future Ambition",
      title: "Intelligent Creative Labs & Global Software",
      description: "Growing @intelligentcreativelabs-786, mastering advanced software architecture, and creating scalable technologies that impact the future.",
      type: "goal",
      techTags: ["YouTube", "Software Engineering", "Innovation"]
    }
  ],

  // SOCIAL PROFILES GIVEN IN USER FILE
  socialLinks: [
    {
      platform: "github",
      label: "GitHub",
      url: "https://github.com/mufadda42421"
    },
    {
      platform: "custom",
      label: "YouTube",
      url: "https://www.youtube.com/@intelligentcreativelabs-786"
    },
    {
      platform: "email",
      label: "Email",
      url: "mailto:jaorawalamufaddal7@gmail.com"
    }
  ]
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
