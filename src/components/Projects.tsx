/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { FolderGit2, ExternalLink, Github, Plus, Sparkles, X, Terminal } from 'lucide-react';
import { ProjectItem } from '../types/portfolio';

interface ProjectsProps {
  projects: ProjectItem[];
  onOpenCustomizer?: () => void;
}

export const Projects: React.FC<ProjectsProps> = ({ projects, onOpenCustomizer }) => {
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const hasProjects = projects.length > 0;

  return (
    <section id="projects" className="py-20 lg:py-28 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-mono text-purple-400 mb-2 tracking-wider">
              Selected Works
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white text-balance">
              Featured Projects
            </h2>
            <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
              Authentic software applications, coding experiments, and tools built with real code and design passion.
            </p>
          </div>

          {onOpenCustomizer && (
            <button
              onClick={onOpenCustomizer}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-300 bg-slate-900/80 hover:bg-slate-800 rounded-lg border border-white/10 hover:border-purple-500/40 transition-colors shrink-0 self-start md:self-auto"
            >
              <Plus className="w-3.5 h-3.5 text-purple-400" />
              <span>{hasProjects ? 'Add Project' : 'Add Your First Project'}</span>
            </button>
          )}
        </div>

        {/* Populated State or Exact Empty State */}
        {hasProjects ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                onClick={() => setActiveModalProject(project)}
                className="group relative rounded-2xl bg-[#0a101f]/80 border border-white/5 hover:border-purple-500/30 overflow-hidden cursor-pointer transition-all duration-300 flex flex-col justify-between"
              >
                {/* Media thumbnail or clean fallback container */}
                <div className="aspect-[16/10] bg-slate-950 relative overflow-hidden">
                  {project.imageUrl ? (
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950/40">
                      <FolderGit2 className="w-8 h-8 text-purple-400/80 mb-2 group-hover:scale-110 transition-transform" />
                      <span className="text-xs font-mono text-slate-400 text-center">
                        {project.title}
                      </span>
                    </div>
                  )}

                  {/* Top quick links */}
                  <div className="absolute top-3 right-3 flex items-center gap-2 z-10" onClick={(e) => e.stopPropagation()}>
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
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 rounded-lg bg-black/60 backdrop-blur-md text-slate-300 hover:text-white hover:bg-black/90 transition-colors"
                        title="Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-400 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech stack: clean unboxed metadata with separators (§1.A Zero-Pill) */}
                  <div className="mt-5 pt-4 border-t border-white/5 flex flex-wrap items-center gap-2 text-xs text-slate-400 font-mono">
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
            ))}
          </div>
        ) : (
          /* Exact Empty State required by prompt */
          <div className="rounded-2xl p-8 sm:p-14 bg-[#090e1c]/80 border border-white/5 text-center relative overflow-hidden">
            <div 
              aria-hidden="true" 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[320px] bg-purple-600/5 blur-[120px] pointer-events-none" 
            />
            
            <div className="max-w-lg mx-auto space-y-5 relative z-10">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-slate-900 border border-white/10 flex items-center justify-center text-purple-400 shadow-lg shadow-purple-500/10">
                <Terminal className="w-7 h-7" />
              </div>

              {/* Exact quote specified by user */}
              <blockquote className="text-lg sm:text-xl font-medium text-slate-100 tracking-tight leading-snug">
                “Every great developer starts somewhere. My projects will appear here as I build and create.”
              </blockquote>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                I am actively learning, coding, and preparing real-world software projects. When a repository or application is ready, you'll find its code, live demo, and architecture details right here.
              </p>

              {onOpenCustomizer && (
                <div className="pt-2">
                  <button
                    onClick={onOpenCustomizer}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-purple-600 hover:bg-purple-500 rounded-lg shadow-md shadow-purple-600/25 transition-all duration-200"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add Project to Portfolio</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Project Detail Lightbox Modal */}
        {activeModalProject && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
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
                <h3 className="text-2xl font-bold text-white">
                  {activeModalProject.title}
                </h3>
                {activeModalProject.dateCreated && (
                  <p className="text-xs font-mono text-purple-400 mt-1">
                    {activeModalProject.dateCreated}
                  </p>
                )}
              </div>

              {activeModalProject.imageUrl && (
                <div className="rounded-xl overflow-hidden aspect-video bg-slate-950 border border-white/5">
                  <img
                    src={activeModalProject.imageUrl}
                    alt={activeModalProject.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <p className="text-sm text-slate-300 leading-relaxed whitespace-pre-line">
                {activeModalProject.description}
              </p>

              {/* Technologies unboxed list */}
              <div>
                <div className="text-xs font-mono text-slate-400 mb-2">Technologies Used</div>
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
              <div className="flex items-center gap-4 pt-2">
                {activeModalProject.liveUrl && (
                  <a
                    href={activeModalProject.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>View Live Application</span>
                  </a>
                )}
                {activeModalProject.githubUrl && (
                  <a
                    href={activeModalProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-300 bg-slate-900 hover:bg-slate-800 rounded-lg border border-white/10 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub Repository</span>
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
