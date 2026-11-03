/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  X, Plus, Trash2, Code2, FolderGit2, Award, Compass, 
  Share2, FileCode, Check, RotateCcw, Copy 
} from 'lucide-react';
import { 
  PortfolioProfile, SkillItem, ProjectItem, AchievementItem, 
  JourneyMilestone, SkillCategory, JourneyType, SocialLink 
} from '../types/portfolio';
import { SKILL_CATEGORIES, JOURNEY_TYPES } from '../data/portfolioData';

interface PortfolioManagerModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: PortfolioProfile;
  onAddSkill: (skill: Omit<SkillItem, 'id'>) => void;
  onRemoveSkill: (id: string) => void;
  onAddProject: (project: Omit<ProjectItem, 'id'>) => void;
  onRemoveProject: (id: string) => void;
  onAddAchievement: (achievement: Omit<AchievementItem, 'id'>) => void;
  onRemoveAchievement: (id: string) => void;
  onAddJourneyMilestone: (milestone: Omit<JourneyMilestone, 'id'>) => void;
  onRemoveJourneyMilestone: (id: string) => void;
  onUpdateSocialLinks: (links: SocialLink[]) => void;
  onResetToDefaults: () => void;
  onExportTypeScript: () => string;
}

type TabType = 'skills' | 'projects' | 'achievements' | 'journey' | 'social' | 'export';

export const PortfolioManagerModal: React.FC<PortfolioManagerModalProps> = ({
  isOpen,
  onClose,
  profile,
  onAddSkill,
  onRemoveSkill,
  onAddProject,
  onRemoveProject,
  onAddAchievement,
  onRemoveAchievement,
  onAddJourneyMilestone,
  onRemoveJourneyMilestone,
  onUpdateSocialLinks,
  onResetToDefaults,
  onExportTypeScript
}) => {
  const [activeTab, setActiveTab] = useState<TabType>('skills');
  const [copiedCode, setCopiedCode] = useState(false);

  // Skill Form State
  const [newSkillName, setNewSkillName] = useState('');
  const [newSkillCategory, setNewSkillCategory] = useState<SkillCategory>('Programming Languages');
  const [newSkillProficiency, setNewSkillProficiency] = useState<'Learning' | 'Practicing' | 'Proficient' | 'Advanced'>('Learning');
  const [newSkillNotes, setNewSkillNotes] = useState('');

  // Project Form State
  const [newProjectTitle, setNewProjectTitle] = useState('');
  const [newProjectDesc, setNewProjectDesc] = useState('');
  const [newProjectTech, setNewProjectTech] = useState('');
  const [newProjectGithub, setNewProjectGithub] = useState('');
  const [newProjectLive, setNewProjectLive] = useState('');
  const [newProjectImage, setNewProjectImage] = useState('');

  // Achievement Form State
  const [newAchTitle, setNewAchTitle] = useState('');
  const [newAchOrg, setNewAchOrg] = useState('');
  const [newAchDate, setNewAchDate] = useState('');
  const [newAchDesc, setNewAchDesc] = useState('');
  const [newAchCertUrl, setNewAchCertUrl] = useState('');

  // Journey Form State
  const [newJrnPeriod, setNewJrnPeriod] = useState('');
  const [newJrnTitle, setNewJrnTitle] = useState('');
  const [newJrnDesc, setNewJrnDesc] = useState('');
  const [newJrnType, setNewJrnType] = useState<JourneyType>('started');
  const [newJrnTech, setNewJrnTech] = useState('');

  // Social Links Form State
  const [socialGithub, setSocialGithub] = useState(
    profile.socialLinks.find(s => s.platform === 'github')?.url || ''
  );
  const [socialLinkedin, setSocialLinkedin] = useState(
    profile.socialLinks.find(s => s.platform === 'linkedin')?.url || ''
  );

  if (!isOpen) return null;

  const handleCreateSkill = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSkillName.trim()) return;
    onAddSkill({
      name: newSkillName.trim(),
      category: newSkillCategory,
      proficiency: newSkillProficiency,
      notes: newSkillNotes.trim() || undefined
    });
    setNewSkillName('');
    setNewSkillNotes('');
  };

  const handleCreateProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProjectTitle.trim()) return;
    const techArray = newProjectTech
      .split(',')
      .map(t => t.trim())
      .filter(Boolean);
    onAddProject({
      title: newProjectTitle.trim(),
      description: newProjectDesc.trim(),
      technologies: techArray.length ? techArray : ['Code'],
      githubUrl: newProjectGithub.trim() || undefined,
      liveUrl: newProjectLive.trim() || undefined,
      imageUrl: newProjectImage.trim() || undefined,
    });
    setNewProjectTitle('');
    setNewProjectDesc('');
    setNewProjectTech('');
    setNewProjectGithub('');
    setNewProjectLive('');
    setNewProjectImage('');
  };

  const handleCreateAchievement = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAchTitle.trim() || !newAchOrg.trim()) return;
    onAddAchievement({
      title: newAchTitle.trim(),
      issuingOrg: newAchOrg.trim(),
      date: newAchDate.trim() || new Date().getFullYear().toString(),
      description: newAchDesc.trim() || undefined,
      certificateUrl: newAchCertUrl.trim() || undefined,
    });
    setNewAchTitle('');
    setNewAchOrg('');
    setNewAchDate('');
    setNewAchDesc('');
    setNewAchCertUrl('');
  };

  const handleCreateJourney = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newJrnTitle.trim()) return;
    const techArray = newJrnTech
      .split(',')
      .map(t => t.trim())
      .filter(Boolean);
    onAddJourneyMilestone({
      period: newJrnPeriod.trim() || 'Milestone',
      title: newJrnTitle.trim(),
      description: newJrnDesc.trim(),
      type: newJrnType,
      techTags: techArray.length ? techArray : undefined,
    });
    setNewJrnPeriod('');
    setNewJrnTitle('');
    setNewJrnDesc('');
    setNewJrnTech('');
  };

  const handleSaveSocial = (e: React.FormEvent) => {
    e.preventDefault();
    const links: SocialLink[] = [];
    if (socialGithub.trim()) {
      links.push({ platform: 'github', label: 'GitHub', url: socialGithub.trim() });
    }
    if (socialLinkedin.trim()) {
      links.push({ platform: 'linkedin', label: 'LinkedIn', url: socialLinkedin.trim() });
    }
    onUpdateSocialLinks(links);
  };

  const handleCopyTypeScript = () => {
    const code = onExportTypeScript();
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#0b1120] border border-white/10 rounded-2xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
        
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-slate-950/60">
          <div>
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <span>Portfolio Manager</span>
              <span className="text-xs font-normal font-mono text-cyan-400">· Real-Time Editor</span>
            </h3>
            <p className="text-xs text-slate-400">
              Add your genuine skills, projects, and milestones. Changes update instantly.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="px-6 border-b border-white/5 bg-slate-950/30 flex items-center gap-2 overflow-x-auto scrollbar-none py-2 text-xs font-medium">
          <button
            onClick={() => setActiveTab('skills')}
            className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 whitespace-nowrap transition-colors ${
              activeTab === 'skills'
                ? 'bg-blue-600 text-white'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>Skills ({profile.skills.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('projects')}
            className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 whitespace-nowrap transition-colors ${
              activeTab === 'projects'
                ? 'bg-purple-600 text-white'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Projects ({profile.projects.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('achievements')}
            className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 whitespace-nowrap transition-colors ${
              activeTab === 'achievements'
                ? 'bg-amber-600 text-white'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Award className="w-3.5 h-3.5" />
            <span>Milestones ({profile.achievements.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('journey')}
            className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 whitespace-nowrap transition-colors ${
              activeTab === 'journey'
                ? 'bg-indigo-600 text-white'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            <span>Timeline ({profile.journey.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('social')}
            className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 whitespace-nowrap transition-colors ${
              activeTab === 'social'
                ? 'bg-emerald-600 text-white'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>Social Links</span>
          </button>

          <button
            onClick={() => setActiveTab('export')}
            className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 whitespace-nowrap transition-colors ${
              activeTab === 'export'
                ? 'bg-slate-700 text-white'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <FileCode className="w-3.5 h-3.5" />
            <span>Code Export</span>
          </button>
        </div>

        {/* Tab Content Panes */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          
          {/* 1. SKILLS TAB */}
          {activeTab === 'skills' && (
            <div className="space-y-6">
              <form onSubmit={handleCreateSkill} className="p-4 rounded-xl bg-slate-950/60 border border-white/5 space-y-4">
                <h4 className="text-sm font-semibold text-white">Add a Real Technical Skill</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="text-[11px] font-mono text-slate-400 block mb-1">Skill Name</label>
                    <input
                      type="text"
                      value={newSkillName}
                      onChange={(e) => setNewSkillName(e.target.value)}
                      placeholder="e.g. Python, HTML5, Git"
                      className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-mono text-slate-400 block mb-1">Category</label>
                    <select
                      value={newSkillCategory}
                      onChange={(e) => setNewSkillCategory(e.target.value as SkillCategory)}
                      className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-white/10 text-xs text-white focus:outline-none focus:border-blue-500"
                    >
                      {SKILL_CATEGORIES.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-[11px] font-mono text-slate-400 block mb-1">Proficiency</label>
                    <select
                      value={newSkillProficiency}
                      onChange={(e) => setNewSkillProficiency(e.target.value as any)}
                      className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-white/10 text-xs text-white focus:outline-none focus:border-blue-500"
                    >
                      <option value="Learning">Learning</option>
                      <option value="Practicing">Practicing</option>
                      <option value="Proficient">Proficient</option>
                      <option value="Advanced">Advanced</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="text-[11px] font-mono text-slate-400 block mb-1">Notes / Context (Optional)</label>
                  <input
                    type="text"
                    value={newSkillNotes}
                    onChange={(e) => setNewSkillNotes(e.target.value)}
                    placeholder="e.g. Learning data structures, practicing algorithmic problem-solving"
                    className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <button
                  type="submit"
                  disabled={!newSkillName.trim()}
                  className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 disabled:opacity-50 rounded-lg transition-colors inline-flex items-center gap-1.5"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Skill</span>
                </button>
              </form>

              {/* Skills List */}
              <div className="space-y-2">
                <h5 className="text-xs font-mono text-slate-400">Current Skills ({profile.skills.length})</h5>
                {profile.skills.length === 0 ? (
                  <p className="text-xs text-slate-500 italic">No skills added yet. Only real skills you add will appear on your portfolio.</p>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {profile.skills.map(s => (
                      <div key={s.id} className="p-3 rounded-lg bg-slate-950/40 border border-white/5 flex items-center justify-between gap-2">
                        <div>
                          <div className="text-xs font-semibold text-white">{s.name}</div>
                          <div className="text-[11px] text-slate-400">{s.category} · {s.proficiency}</div>
                        </div>
                        <button
                          onClick={() => onRemoveSkill(s.id)}
                          className="p-1 text-slate-500 hover:text-red-400 transition-colors"
                          title="Remove skill"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* 2. PROJECTS TAB */}
          {activeTab === 'projects' && (
            <div className="space-y-6">
              <form onSubmit={handleCreateProject} className="p-4 rounded-xl bg-slate-950/60 border border-white/5 space-y-4">
                <h4 className="text-sm font-semibold text-white">Add a Genuine Project</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-mono text-slate-400 block mb-1">Project Title</label>
                    <input
                      type="text"
                      value={newProjectTitle}
                      onChange={(e) => setNewProjectTitle(e.target.value)}
                      placeholder="e.g. Algorithmic Path Finder"
                      className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-purple-500"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-mono text-slate-400 block mb-1">Technologies (comma separated)</label>
                    <input
                      type="text"
                      value={newProjectTech}
                      onChange={(e) => setNewProjectTech(e.target.value)}
                      placeholder="e.g. Python, Pygame, Algorithms"
                      className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-purple-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-mono text-slate-400 block mb-1">Description</label>
                  <textarea
                    rows={3}
                    value={newProjectDesc}
                    onChange={(e) => setNewProjectDesc(e.target.value)}
                    placeholder="Describe what you built, how it works, and what you learned..."
                    className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 resize-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="text-[11px] font-mono text-slate-400 block mb-1">GitHub Repo URL (Optional)</label>
                    <input
                      type="url"
                      value={newProjectGithub}
                      onChange={(e) => setNewProjectGithub(e.target.value)}
                      placeholder="https://github.com/..."
                      className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-purple-500"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-mono text-slate-400 block mb-1">Live Demo URL (Optional)</label>
                    <input
                      type="url"
                      value={newProjectLive}
                      onChange={(e) => setNewProjectLive(e.target.value)}
                      placeholder="https://..."
                      className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-purple-500"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-mono text-slate-400 block mb-1">Screenshot Image URL (Optional)</label>
                    <input
                      type="url"
                      value={newProjectImage}
                      onChange={(e) => setNewProjectImage(e.target.value)}
                      placeholder="https://..."
                      className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-purple-500"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={!newProjectTitle.trim()}
                  className="px-4 py-2 text-xs font-semibold text-white bg-purple-600 hover:bg-purple-500 disabled:opacity-50 rounded-lg transition-colors inline-flex items-center gap-1.5"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Project</span>
                </button>
              </form>

              {/* Projects List */}
              <div className="space-y-2">
                <h5 className="text-xs font-mono text-slate-400">Current Projects ({profile.projects.length})</h5>
                {profile.projects.length === 0 ? (
                  <p className="text-xs text-slate-500 italic">No projects added yet. No fake demo projects will be shown.</p>
                ) : (
                  <div className="space-y-2">
                    {profile.projects.map(p => (
                      <div key={p.id} className="p-3 rounded-lg bg-slate-950/40 border border-white/5 flex items-center justify-between gap-3">
                        <div>
                          <div className="text-xs font-semibold text-white">{p.title}</div>
                          <div className="text-[11px] text-slate-400">{p.technologies.join(', ')}</div>
                        </div>
                        <button
                          onClick={() => onRemoveProject(p.id)}
                          className="p-1 text-slate-500 hover:text-red-400 transition-colors"
                          title="Remove project"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* 3. ACHIEVEMENTS TAB */}
          {activeTab === 'achievements' && (
            <div className="space-y-6">
              <form onSubmit={handleCreateAchievement} className="p-4 rounded-xl bg-slate-950/60 border border-white/5 space-y-4">
                <h4 className="text-sm font-semibold text-white">Record an Achievement or Milestone</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="text-[11px] font-mono text-slate-400 block mb-1">Title</label>
                    <input
                      type="text"
                      value={newAchTitle}
                      onChange={(e) => setNewAchTitle(e.target.value)}
                      placeholder="e.g. School Coding Olympiad"
                      className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-mono text-slate-400 block mb-1">Issuing Organization / School</label>
                    <input
                      type="text"
                      value={newAchOrg}
                      onChange={(e) => setNewAchOrg(e.target.value)}
                      placeholder="e.g. Science Academy"
                      className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-mono text-slate-400 block mb-1">Date / Year</label>
                    <input
                      type="text"
                      value={newAchDate}
                      onChange={(e) => setNewAchDate(e.target.value)}
                      placeholder="e.g. 2025"
                      className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-mono text-slate-400 block mb-1">Description (Optional)</label>
                  <textarea
                    rows={2}
                    value={newAchDesc}
                    onChange={(e) => setNewAchDesc(e.target.value)}
                    placeholder="Details about the milestone, award, or certification..."
                    className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 resize-none"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-mono text-slate-400 block mb-1">Certificate / Verification URL (Optional)</label>
                  <input
                    type="url"
                    value={newAchCertUrl}
                    onChange={(e) => setNewAchCertUrl(e.target.value)}
                    placeholder="https://..."
                    className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <button
                  type="submit"
                  disabled={!newAchTitle.trim() || !newAchOrg.trim()}
                  className="px-4 py-2 text-xs font-semibold text-white bg-amber-600 hover:bg-amber-500 disabled:opacity-50 rounded-lg transition-colors inline-flex items-center gap-1.5"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Record Achievement</span>
                </button>
              </form>

              {/* Achievements List */}
              <div className="space-y-2">
                <h5 className="text-xs font-mono text-slate-400">Current Achievements ({profile.achievements.length})</h5>
                {profile.achievements.length === 0 ? (
                  <p className="text-xs text-slate-500 italic">No achievements added yet.</p>
                ) : (
                  <div className="space-y-2">
                    {profile.achievements.map(a => (
                      <div key={a.id} className="p-3 rounded-lg bg-slate-950/40 border border-white/5 flex items-center justify-between gap-3">
                        <div>
                          <div className="text-xs font-semibold text-white">{a.title}</div>
                          <div className="text-[11px] text-slate-400">{a.issuingOrg} · {a.date}</div>
                        </div>
                        <button
                          onClick={() => onRemoveAchievement(a.id)}
                          className="p-1 text-slate-500 hover:text-red-400 transition-colors"
                          title="Remove achievement"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* 4. JOURNEY TAB */}
          {activeTab === 'journey' && (
            <div className="space-y-6">
              <form onSubmit={handleCreateJourney} className="p-4 rounded-xl bg-slate-950/60 border border-white/5 space-y-4">
                <h4 className="text-sm font-semibold text-white">Document a Journey Step</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="text-[11px] font-mono text-slate-400 block mb-1">Timeframe / Period</label>
                    <input
                      type="text"
                      value={newJrnPeriod}
                      onChange={(e) => setNewJrnPeriod(e.target.value)}
                      placeholder="e.g. Early 2024, Grade 8"
                      className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-mono text-slate-400 block mb-1">Milestone Title</label>
                    <input
                      type="text"
                      value={newJrnTitle}
                      onChange={(e) => setNewJrnTitle(e.target.value)}
                      placeholder="e.g. Started Learning Python"
                      className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-mono text-slate-400 block mb-1">Type</label>
                    <select
                      value={newJrnType}
                      onChange={(e) => setNewJrnType(e.target.value as JourneyType)}
                      className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-white/10 text-xs text-white focus:outline-none focus:border-indigo-500"
                    >
                      {JOURNEY_TYPES.map(jt => (
                        <option key={jt.type} value={jt.type}>{jt.label}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-mono text-slate-400 block mb-1">Description</label>
                  <textarea
                    rows={2}
                    value={newJrnDesc}
                    onChange={(e) => setNewJrnDesc(e.target.value)}
                    placeholder="Describe what you learned or built during this period..."
                    className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 resize-none"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-mono text-slate-400 block mb-1">Technologies / Tags (comma separated)</label>
                  <input
                    type="text"
                    value={newJrnTech}
                    onChange={(e) => setNewJrnTech(e.target.value)}
                    placeholder="e.g. Python, Logic, Functions"
                    className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <button
                  type="submit"
                  disabled={!newJrnTitle.trim()}
                  className="px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 rounded-lg transition-colors inline-flex items-center gap-1.5"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Journey Step</span>
                </button>
              </form>

              {/* Journey List */}
              <div className="space-y-2">
                <h5 className="text-xs font-mono text-slate-400">Timeline Entries ({profile.journey.length})</h5>
                {profile.journey.length === 0 ? (
                  <p className="text-xs text-slate-500 italic">No timeline entries yet.</p>
                ) : (
                  <div className="space-y-2">
                    {profile.journey.map(j => (
                      <div key={j.id} className="p-3 rounded-lg bg-slate-950/40 border border-white/5 flex items-center justify-between gap-3">
                        <div>
                          <div className="text-xs font-semibold text-white">{j.title}</div>
                          <div className="text-[11px] text-slate-400">{j.period} · {j.type}</div>
                        </div>
                        <button
                          onClick={() => onRemoveJourneyMilestone(j.id)}
                          className="p-1 text-slate-500 hover:text-red-400 transition-colors"
                          title="Remove milestone"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* 5. SOCIAL TAB */}
          {activeTab === 'social' && (
            <div className="space-y-6">
              <form onSubmit={handleSaveSocial} className="p-4 rounded-xl bg-slate-950/60 border border-white/5 space-y-4">
                <h4 className="text-sm font-semibold text-white">Configure Optional Social & Code Links</h4>
                <p className="text-xs text-slate-400">
                  Only add real URLs. If you don't have an account yet, leave it empty and it will remain hidden.
                </p>

                <div>
                  <label className="text-[11px] font-mono text-slate-400 block mb-1">GitHub Profile URL</label>
                  <input
                    type="url"
                    value={socialGithub}
                    onChange={(e) => setSocialGithub(e.target.value)}
                    placeholder="https://github.com/your-username"
                    className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-mono text-slate-400 block mb-1">LinkedIn Profile URL</label>
                  <input
                    type="url"
                    value={socialLinkedin}
                    onChange={(e) => setSocialLinkedin(e.target.value)}
                    placeholder="https://linkedin.com/in/your-username"
                    className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <button
                  type="submit"
                  className="px-4 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-colors inline-flex items-center gap-1.5"
                >
                  <Check className="w-3.5 h-3.5" />
                  <span>Save Social Links</span>
                </button>
              </form>
            </div>
          )}

          {/* 6. EXPORT / CODE TAB */}
          {activeTab === 'export' && (
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-semibold text-white">TypeScript Data Export</h4>
                <p className="text-xs text-slate-400">
                  Copy this generated code and paste it into <code className="text-cyan-400 font-mono">src/data/portfolioData.ts</code> if you want to permanently bake your real projects and skills directly into the code repository.
                </p>
              </div>

              <div className="relative rounded-xl overflow-hidden bg-slate-950 border border-white/10">
                <div className="px-4 py-2 border-b border-white/10 flex items-center justify-between bg-slate-900/50">
                  <span className="text-xs font-mono text-slate-400">portfolioData.ts</span>
                  <button
                    onClick={handleCopyTypeScript}
                    className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded transition-colors"
                  >
                    {copiedCode ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Code</span>
                      </>
                    )}
                  </button>
                </div>
                <pre className="p-4 text-xs font-mono text-slate-300 overflow-x-auto max-h-72 leading-relaxed">
                  {onExportTypeScript()}
                </pre>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 border-t border-white/10 bg-slate-950/60 flex items-center justify-between text-xs">
          <button
            onClick={() => {
              if (window.confirm("Are you sure you want to reset all customizations to the original clean default state?")) {
                onResetToDefaults();
              }
            }}
            className="text-slate-400 hover:text-red-400 flex items-center gap-1.5 transition-colors font-mono"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset to Clean Defaults</span>
          </button>

          <button
            onClick={onClose}
            className="px-4 py-1.5 font-medium text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
          >
            Done
          </button>
        </div>

      </div>
    </div>
  );
};
