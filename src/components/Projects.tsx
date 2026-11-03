/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  FolderGit2, ExternalLink, Github, X, Globe, 
  Puzzle, Monitor, Terminal, Sparkles 
} from 'lucide-react';
import { ProjectItem } from '../types/portfolio';

interface ProjectsProps {
  projects: ProjectItem[];
}

type ProjectFilter = 'All' | 'Websites' | 'Chrome Extensions' | 'Desktop Apps' | 'Personal Projects';

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>('All');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const categories: ProjectFilter[] = [
    'All',
    'Websites',
    'Chrome Extensions',
    'Desktop Apps',
    'Personal Projects'
  ];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  const getCategoryIcon = (category: ProjectItem['category']) => {
    switch (category) {
      case 'Websites':
        return Globe;
      case 'Chrome Extensions':
        return Puzzle;
      case 'Desktop Apps':
        return Monitor;
      case 'Personal Projects':
        return Terminal;
      default:
        return FolderGit2;
    }
  };

  const getCategoryBadgeClass = (category: ProjectItem['category']) => {
    switch (category) {
      case 'Websites':
        return 'text-blue-400';
      case 'Chrome Extensions':
        return 'text-emerald-400';
      case 'Desktop Apps':
        return 'text-amber-400';
      case 'Personal Projects':
        return 'text-purple-400';
      default:
        return 'text-slate-400';
    }
  };

  return (
    <section id="projects" className="py-20 lg:py-28 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="text-xs font-mono text-purple-400 mb-2 tracking-wider">
              Selected Works
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white text-balance">
              Featured Software & Projects
            </h2>
            <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
              14 genuine software creations across live production web apps, Chrome extensions, desktop systems, and automation tools.
            </p>
          </div>

          <div className="text-xs font-mono text-slate-400 self-start md:self-auto">
            Total Projects: <span className="text-white font-semibold">14 Active</span>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => {
            const count = cat === 'All' 
              ? projects.length 
              : projects.filter(p => p.category === cat).length;
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 text-xs font-medium rounded-lg whitespace-nowrap transition-colors flex items-center gap-1.5 ${
                  activeFilter === cat
                    ? 'bg-purple-600 text-white shadow-md shadow-purple-600/25'
                    : 'bg-slate-900/70 text-slate-400 hover:text-white border border-white/5'
                }`}
              >
                <span>{cat}</span>
                <span className="opacity-70 text-[11px]">({count})</span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => {
            const CatIcon = getCategoryIcon(project.category);
            const badgeColor = getCategoryBadgeClass(project.category);
            return (
              <div
                key={project.id}
                onClick={() => setActiveModalProject(project)}
                className="group relative rounded-2xl bg-[#0a101f]/80 border border-white/5 hover:border-purple-500/40 overflow-hidden cursor-pointer transition-all duration-300 flex flex-col justify-between"
              >
                {/* Visual Thumbnail Header with Domain Icon */}
                <div className="p-6 pb-4 bg-gradient-to-br from-slate-950 via-slate-900/90 to-indigo-950/30 border-b border-white/5 flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-purple-400 group-hover:scale-105 transition-transform">
                      <CatIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className={`text-[11px] font-mono ${badgeColor}`}>
                        {project.category}
                      </div>
                      <h3 className="text-base font-bold text-white group-hover:text-purple-300 transition-colors">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  {/* Top quick links */}
                  <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 rounded-lg bg-black/60 backdrop-blur-md text-slate-300 hover:text-white hover:bg-black/90 transition-colors"
                        title={`Open live site: ${project.liveUrl}`}
                      >
                        <ExternalLink className="w-4 h-4 text-cyan-400" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 rounded-lg bg-black/60 backdrop-blur-md text-slate-300 hover:text-white hover:bg-black/90 transition-colors"
                        title="GitHub Repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <p className="text-sm text-slate-300 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Live link indicator if present */}
                  {project.liveUrl && (
                    <div className="text-xs font-mono text-cyan-400/90 flex items-center gap-1.5 truncate">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                      <span className="truncate">{project.liveUrl.replace('https://', '')}</span>
                    </div>
                  )}

                  {/* Tech stack: clean unboxed metadata with separators (§1.A Zero-Pill) */}
                  <div className="pt-3 border-t border-white/5 flex flex-wrap items-center gap-2 text-xs text-slate-400 font-mono">
                    {project.technologies.map((tech, index) => (
                      <React.Fragment key={tech}>
                        <span className="text-slate-300">{tech}</span>
                        {index < project.technologies.length - 1 && (
                          <span aria-hidden="true" className="text-slate-600">·</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Project Detail Lightbox Modal */}
        {activeModalProject && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
            onClick={() => setActiveModalProject(null)}
          >
            <div 
              className="bg-[#0b1329] border border-white/10 rounded-2xl max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div>
                <div className="text-xs font-mono text-purple-400 mb-1">
                  {activeModalProject.category}
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {activeModalProject.title}
                </h3>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/70 border border-white/5 space-y-3">
                <div className="text-xs font-mono text-slate-400">Project Overview</div>
                <p className="text-sm text-slate-300 leading-relaxed whitespace-pre-line">
                  {activeModalProject.description}
                </p>
                {activeModalProject.liveUrl && (
                  <div className="text-xs font-mono text-cyan-400">
                    Live Domain: <a href={activeModalProject.liveUrl} target="_blank" rel="noreferrer" className="underline hover:text-cyan-300">{activeModalProject.liveUrl}</a>
                  </div>
                )}
              </div>

              {/* Technologies unboxed list */}
              <div>
                <div className="text-xs font-mono text-slate-400 mb-2">Technologies & Architecture</div>
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-cyan-300">
                  {activeModalProject.technologies.map((t, i) => (
                    <React.Fragment key={t}>
                      <span>{t}</span>
                      {i < activeModalProject.technologies.length - 1 && (
                        <span aria-hidden="true" className="text-slate-600">·</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                {activeModalProject.liveUrl && (
                  <a
                    href={activeModalProject.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Launch Live Application</span>
                  </a>
                )}
                {activeModalProject.githubUrl && (
                  <a
                    href={activeModalProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-300 bg-slate-900 hover:bg-slate-800 rounded-lg border border-white/10 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>View on GitHub</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
