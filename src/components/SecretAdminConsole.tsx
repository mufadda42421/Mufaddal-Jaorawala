/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Lock, Unlock, X, Plus, Trash2, FolderGit2, Code2, 
  Award, Compass, Copy, Check, RotateCcw, ShieldCheck, Terminal
} from 'lucide-react';
import { 
  PortfolioProfile, ProjectItem, SkillItem, AchievementItem, 
  JourneyMilestone, SkillCategory, JourneyType 
} from '../types/portfolio';
import { SKILL_CATEGORIES, JOURNEY_TYPES } from '../data/portfolioData';

interface SecretAdminConsoleProps {
  isOpen: boolean;
  onClose: () => void;
  profile: PortfolioProfile;
  onAddProject: (project: Omit<ProjectItem, 'id'>) => void;
  onRemoveProject: (id: string) => void;
  onAddSkill: (skill: Omit<SkillItem, 'id'>) => void;
  onRemoveSkill: (id: string) => void;
  onAddAchievement: (achievement: Omit<AchievementItem, 'id'>) => void;
  onRemoveAchievement: (id: string) => void;
  onAddJourneyMilestone: (milestone: Omit<JourneyMilestone, 'id'>) => void;
  onRemoveJourneyMilestone: (id: string) => void;
  onResetToDefaults: () => void;
  onExportTypeScript: () => string;
}

type AdminTab = 'projects' | 'skills' | 'milestones' | 'journey' | 'export';

export const SecretAdminConsole: React.FC<SecretAdminConsoleProps> = ({
  isOpen,
  onClose,
  profile,
  onAddProject,
  onRemoveProject,
  onAddSkill,
  onRemoveSkill,
  onAddAchievement,
  onRemoveAchievement,
  onAddJourneyMilestone,
  onRemoveJourneyMilestone,
  onResetToDefaults,
  onExportTypeScript
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [passcodeError, setPasscodeError] = useState(false);
  const [activeTab, setActiveTab] = useState<AdminTab>('projects');
  const [copiedCode, setCopiedCode] = useState(false);

  // New Project Form
  const [projTitle, setProjTitle] = useState('');
  const [projCategory, setProjCategory] = useState<ProjectItem['category']>('Websites');
  const [projDesc, setProjDesc] = useState('');
  const [projTech, setProjTech] = useState('');
  const [projLive, setProjLive] = useState('');
  const [projGithub, setProjGithub] = useState('https://github.com/mufadda42421');

  // New Skill Form
  const [skillName, setSkillName] = useState('');
  const [skillCat, setSkillCat] = useState<SkillCategory>('Programming Languages');
  const [skillProf, setSkillProf] = useState<'Learning' | 'Practicing' | 'Proficient' | 'Advanced'>('Proficient');
  const [skillNotes, setSkillNotes] = useState('');

  // New Achievement Form
  const [achTitle, setAchTitle] = useState('');
  const [achOrg, setAchOrg] = useState('');
  const [achDate, setAchDate] = useState('');
  const [achDesc, setAchDesc] = useState('');
  const [achUrl, setAchUrl] = useState('');

  // New Journey Form
  const [jrnPeriod, setJrnPeriod] = useState('');
  const [jrnTitle, setJrnTitle] = useState('');
  const [jrnDesc, setJrnDesc] = useState('');
  const [jrnType, setJrnType] = useState<JourneyType>('project');
  const [jrnTech, setJrnTech] = useState('');

  if (!isOpen) return null;

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = passcode.trim().toLowerCase();
    // Accepted secret passwords known only to Mufaddal
    if (clean === 'mj786' || clean === 'mufaddal' || clean === '786' || clean === 'mj') {
      setIsAuthenticated(true);
      setPasscodeError(false);
    } else {
      setPasscodeError(true);
    }
  };

  const handleCreateProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!projTitle.trim()) return;
    const techList = projTech.split(',').map(t => t.trim()).filter(Boolean);
    onAddProject({
      title: projTitle.trim(),
      category: projCategory,
      description: projDesc.trim(),
      technologies: techList.length ? techList : ['Code'],
      liveUrl: projLive.trim() || undefined,
      githubUrl: projGithub.trim() || undefined,
    });
    setProjTitle('');
    setProjDesc('');
    setProjTech('');
    setProjLive('');
  };

  const handleCreateSkill = (e: React.FormEvent) => {
    e.preventDefault();
    if (!skillName.trim()) return;
    onAddSkill({
      name: skillName.trim(),
      category: skillCat,
      proficiency: skillProf,
      notes: skillNotes.trim() || undefined,
    });
    setSkillName('');
    setSkillNotes('');
  };

  const handleCreateAchievement = (e: React.FormEvent) => {
    e.preventDefault();
    if (!achTitle.trim() || !achOrg.trim()) return;
    onAddAchievement({
      title: achTitle.trim(),
      issuingOrg: achOrg.trim(),
      date: achDate.trim() || '2025',
      description: achDesc.trim() || undefined,
      certificateUrl: achUrl.trim() || undefined,
    });
    setAchTitle('');
    setAchOrg('');
    setAchDate('');
    setAchDesc('');
    setAchUrl('');
  };

  const handleCreateJourney = (e: React.FormEvent) => {
    e.preventDefault();
    if (!jrnTitle.trim()) return;
    const techList = jrnTech.split(',').map(t => t.trim()).filter(Boolean);
    onAddJourneyMilestone({
      period: jrnPeriod.trim() || 'Milestone',
      title: jrnTitle.trim(),
      description: jrnDesc.trim(),
      type: jrnType,
      techTags: techList.length ? techList : undefined,
    });
    setJrnPeriod('');
    setJrnTitle('');
    setJrnDesc('');
    setJrnTech('');
  };

  const handleCopyCode = () => {
    const code = onExportTypeScript();
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2500);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="bg-[#070b14] border border-cyan-500/20 rounded-2xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-[0_0_50px_rgba(6,182,212,0.15)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Passcode Protection Lock Screen */}
        {!isAuthenticated ? (
          <div className="p-8 sm:p-12 text-center max-w-md mx-auto space-y-6 my-auto">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Lock className="w-6 h-6" />
            </div>

            <div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Secret Admin Gateway
              </h3>
              <p className="text-xs font-mono text-slate-400 mt-1">
                Enter your secret passphrase to unlock the editor console.
              </p>
            </div>

            <form onSubmit={handleUnlock} className="space-y-4">
              <div>
                <input
                  type="password"
                  value={passcode}
                  onChange={(e) => {
                    setPasscode(e.target.value);
                    setPasscodeError(false);
                  }}
                  placeholder="Enter secret passphrase..."
                  autoFocus
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-center font-mono text-sm text-cyan-300 placeholder-slate-600 focus:outline-none focus:border-cyan-400"
                />
                {passcodeError && (
                  <p className="text-[11px] font-mono text-red-400 mt-2">
                    Access denied. Invalid secret passphrase.
                  </p>
                )}
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="submit"
                  className="flex-1 py-2.5 px-4 text-xs font-semibold text-white bg-cyan-600 hover:bg-cyan-500 rounded-xl transition-colors inline-flex items-center justify-center gap-2"
                >
                  <Unlock className="w-3.5 h-3.5" />
                  <span>Authenticate</span>
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="py-2.5 px-4 text-xs font-medium text-slate-400 hover:text-white bg-slate-900 rounded-xl border border-white/10 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Authenticated Admin Management Interface */
          <>
            {/* Top Bar */}
            <div className="px-6 py-4 border-b border-cyan-500/10 flex items-center justify-between bg-slate-950/80">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <span>Mufaddal Jaorawala</span>
                    <span className="text-[11px] font-mono text-cyan-400">· Admin Console (Active)</span>
                  </h3>
                  <div className="text-[11px] text-slate-400">Secret editor unlocked</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsAuthenticated(false)}
                  className="px-2.5 py-1 text-[11px] font-mono text-slate-400 hover:text-white rounded border border-white/10"
                >
                  Lock
                </button>
                <button
                  onClick={onClose}
                  className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Admin Tabs */}
            <div className="px-6 border-b border-white/5 bg-slate-950/40 flex items-center gap-2 overflow-x-auto scrollbar-none py-2 text-xs font-medium">
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
                onClick={() => setActiveTab('milestones')}
                className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 whitespace-nowrap transition-colors ${
                  activeTab === 'milestones'
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
                onClick={() => setActiveTab('export')}
                className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 whitespace-nowrap transition-colors ${
                  activeTab === 'export'
                    ? 'bg-cyan-700 text-white'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Terminal className="w-3.5 h-3.5" />
                <span>Code Export</span>
              </button>
            </div>

            {/* Tab Panes */}
            <div className="p-6 overflow-y-auto flex-1 space-y-6">
              
              {/* PROJECTS TAB */}
              {activeTab === 'projects' && (
                <div className="space-y-6">
                  <form onSubmit={handleCreateProject} className="p-4 rounded-xl bg-slate-950/70 border border-purple-500/20 space-y-3">
                    <h4 className="text-xs font-mono text-purple-300 font-semibold">Add New Project to Portfolio</h4>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="text-[11px] font-mono text-slate-400 block mb-1">Project Title</label>
                        <input
                          type="text"
                          value={projTitle}
                          onChange={(e) => setProjTitle(e.target.value)}
                          placeholder="e.g. CreatorKit Studio"
                          className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-white/10 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-purple-400"
                        />
                      </div>
                      <div>
                        <label className="text-[11px] font-mono text-slate-400 block mb-1">Category</label>
                        <select
                          value={projCategory}
                          onChange={(e) => setProjCategory(e.target.value as any)}
                          className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-white/10 text-xs text-white focus:outline-none focus:border-purple-400"
                        >
                          <option value="Websites">Websites</option>
                          <option value="Chrome Extensions">Chrome Extensions</option>
                          <option value="Desktop Apps">Desktop Apps</option>
                          <option value="Personal Projects">Personal Projects</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="text-[11px] font-mono text-slate-400 block mb-1">Description</label>
                      <textarea
                        rows={2}
                        value={projDesc}
                        onChange={(e) => setProjDesc(e.target.value)}
                        placeholder="Explain features and value of this project..."
                        className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-white/10 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-purple-400 resize-none"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div>
                        <label className="text-[11px] font-mono text-slate-400 block mb-1">Technologies (comma separated)</label>
                        <input
                          type="text"
                          value={projTech}
                          onChange={(e) => setProjTech(e.target.value)}
                          placeholder="e.g. React, Tailwind CSS, Vercel"
                          className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-white/10 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-purple-400"
                        />
                      </div>
                      <div>
                        <label className="text-[11px] font-mono text-slate-400 block mb-1">Live URL (e.g. .vercel.app)</label>
                        <input
                          type="url"
                          value={projLive}
                          onChange={(e) => setProjLive(e.target.value)}
                          placeholder="https://..."
                          className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-white/10 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-purple-400"
                        />
                      </div>
                      <div>
                        <label className="text-[11px] font-mono text-slate-400 block mb-1">GitHub Repo URL</label>
                        <input
                          type="url"
                          value={projGithub}
                          onChange={(e) => setProjGithub(e.target.value)}
                          placeholder="https://github.com/..."
                          className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-white/10 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-purple-400"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={!projTitle.trim()}
                      className="px-4 py-2 text-xs font-semibold text-white bg-purple-600 hover:bg-purple-500 disabled:opacity-50 rounded-lg transition-colors inline-flex items-center gap-1.5"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add Project</span>
                    </button>
                  </form>

                  {/* List of Current Projects */}
                  <div className="space-y-2">
                    <div className="text-xs font-mono text-slate-400">Current Projects ({profile.projects.length})</div>
                    <div className="space-y-2">
                      {profile.projects.map((p) => (
                        <div key={p.id} className="p-3 rounded-lg bg-slate-950/60 border border-white/5 flex items-center justify-between gap-3">
                          <div>
                            <div className="text-xs font-semibold text-white flex items-center gap-2">
                              <span>{p.title}</span>
                              <span className="text-[10px] font-mono text-purple-400">({p.category})</span>
                            </div>
                            <div className="text-[11px] text-slate-400">{p.technologies.join(', ')}</div>
                            {p.liveUrl && <div className="text-[10px] font-mono text-cyan-400 truncate">{p.liveUrl}</div>}
                          </div>
                          <button
                            onClick={() => onRemoveProject(p.id)}
                            className="p-1.5 text-slate-500 hover:text-red-400 transition-colors"
                            title="Delete project"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* SKILLS TAB */}
              {activeTab === 'skills' && (
                <div className="space-y-6">
                  <form onSubmit={handleCreateSkill} className="p-4 rounded-xl bg-slate-950/70 border border-blue-500/20 space-y-3">
                    <h4 className="text-xs font-mono text-blue-300 font-semibold">Add Technical Skill</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div>
                        <label className="text-[11px] font-mono text-slate-400 block mb-1">Name</label>
                        <input
                          type="text"
                          value={skillName}
                          onChange={(e) => setSkillName(e.target.value)}
                          placeholder="e.g. Node.js"
                          className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-white/10 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-blue-400"
                        />
                      </div>
                      <div>
                        <label className="text-[11px] font-mono text-slate-400 block mb-1">Category</label>
                        <select
                          value={skillCat}
                          onChange={(e) => setSkillCat(e.target.value as any)}
                          className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-white/10 text-xs text-white focus:outline-none focus:border-blue-400"
                        >
                          {SKILL_CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="text-[11px] font-mono text-slate-400 block mb-1">Proficiency</label>
                        <select
                          value={skillProf}
                          onChange={(e) => setSkillProf(e.target.value as any)}
                          className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-white/10 text-xs text-white focus:outline-none focus:border-blue-400"
                        >
                          <option value="Learning">Learning</option>
                          <option value="Practicing">Practicing</option>
                          <option value="Proficient">Proficient</option>
                          <option value="Advanced">Advanced</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="text-[11px] font-mono text-slate-400 block mb-1">Notes</label>
                      <input
                        type="text"
                        value={skillNotes}
                        onChange={(e) => setSkillNotes(e.target.value)}
                        placeholder="Context or project application"
                        className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-white/10 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-blue-400"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={!skillName.trim()}
                      className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors inline-flex items-center gap-1.5"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add Skill</span>
                    </button>
                  </form>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {profile.skills.map((s) => (
                      <div key={s.id} className="p-3 rounded-lg bg-slate-950/60 border border-white/5 flex items-center justify-between gap-2">
                        <div>
                          <div className="text-xs font-semibold text-white">{s.name}</div>
                          <div className="text-[11px] text-slate-400">{s.category} · {s.proficiency}</div>
                        </div>
                        <button
                          onClick={() => onRemoveSkill(s.id)}
                          className="p-1.5 text-slate-500 hover:text-red-400 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* MILESTONES TAB */}
              {activeTab === 'milestones' && (
                <div className="space-y-6">
                  <form onSubmit={handleCreateAchievement} className="p-4 rounded-xl bg-slate-950/70 border border-amber-500/20 space-y-3">
                    <h4 className="text-xs font-mono text-amber-300 font-semibold">Record Milestone / Achievement</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div>
                        <label className="text-[11px] font-mono text-slate-400 block mb-1">Title</label>
                        <input
                          type="text"
                          value={achTitle}
                          onChange={(e) => setAchTitle(e.target.value)}
                          placeholder="Milestone title"
                          className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-white/10 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-amber-400"
                        />
                      </div>
                      <div>
                        <label className="text-[11px] font-mono text-slate-400 block mb-1">Organization / Platform</label>
                        <input
                          type="text"
                          value={achOrg}
                          onChange={(e) => setAchOrg(e.target.value)}
                          placeholder="e.g. YouTube / School"
                          className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-white/10 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-amber-400"
                        />
                      </div>
                      <div>
                        <label className="text-[11px] font-mono text-slate-400 block mb-1">Date</label>
                        <input
                          type="text"
                          value={achDate}
                          onChange={(e) => setAchDate(e.target.value)}
                          placeholder="e.g. 2025"
                          className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-white/10 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-amber-400"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-[11px] font-mono text-slate-400 block mb-1">Link (Optional)</label>
                      <input
                        type="url"
                        value={achUrl}
                        onChange={(e) => setAchUrl(e.target.value)}
                        placeholder="https://..."
                        className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-white/10 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-amber-400"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={!achTitle.trim()}
                      className="px-4 py-2 text-xs font-semibold text-white bg-amber-600 hover:bg-amber-500 rounded-lg transition-colors inline-flex items-center gap-1.5"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Save Milestone</span>
                    </button>
                  </form>

                  <div className="space-y-2">
                    {profile.achievements.map((a) => (
                      <div key={a.id} className="p-3 rounded-lg bg-slate-950/60 border border-white/5 flex items-center justify-between gap-3">
                        <div>
                          <div className="text-xs font-semibold text-white">{a.title}</div>
                          <div className="text-[11px] text-slate-400">{a.issuingOrg} · {a.date}</div>
                        </div>
                        <button
                          onClick={() => onRemoveAchievement(a.id)}
                          className="p-1.5 text-slate-500 hover:text-red-400 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TIMELINE TAB */}
              {activeTab === 'journey' && (
                <div className="space-y-6">
                  <form onSubmit={handleCreateJourney} className="p-4 rounded-xl bg-slate-950/70 border border-indigo-500/20 space-y-3">
                    <h4 className="text-xs font-mono text-indigo-300 font-semibold">Add Timeline Entry</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div>
                        <label className="text-[11px] font-mono text-slate-400 block mb-1">Period</label>
                        <input
                          type="text"
                          value={jrnPeriod}
                          onChange={(e) => setJrnPeriod(e.target.value)}
                          placeholder="e.g. 2025"
                          className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-white/10 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-indigo-400"
                        />
                      </div>
                      <div>
                        <label className="text-[11px] font-mono text-slate-400 block mb-1">Title</label>
                        <input
                          type="text"
                          value={jrnTitle}
                          onChange={(e) => setJrnTitle(e.target.value)}
                          placeholder="Milestone title"
                          className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-white/10 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-indigo-400"
                        />
                      </div>
                      <div>
                        <label className="text-[11px] font-mono text-slate-400 block mb-1">Type</label>
                        <select
                          value={jrnType}
                          onChange={(e) => setJrnType(e.target.value as any)}
                          className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-white/10 text-xs text-white focus:outline-none focus:border-indigo-400"
                        >
                          {JOURNEY_TYPES.map(j => <option key={j.type} value={j.type}>{j.label}</option>)}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="text-[11px] font-mono text-slate-400 block mb-1">Description</label>
                      <textarea
                        rows={2}
                        value={jrnDesc}
                        onChange={(e) => setJrnDesc(e.target.value)}
                        placeholder="Description..."
                        className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-white/10 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-indigo-400 resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={!jrnTitle.trim()}
                      className="px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-colors inline-flex items-center gap-1.5"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add Timeline Milestone</span>
                    </button>
                  </form>

                  <div className="space-y-2">
                    {profile.journey.map((j) => (
                      <div key={j.id} className="p-3 rounded-lg bg-slate-950/60 border border-white/5 flex items-center justify-between gap-3">
                        <div>
                          <div className="text-xs font-semibold text-white">{j.title}</div>
                          <div className="text-[11px] text-slate-400">{j.period} · {j.type}</div>
                        </div>
                        <button
                          onClick={() => onRemoveJourneyMilestone(j.id)}
                          className="p-1.5 text-slate-500 hover:text-red-400 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* EXPORT TAB */}
              {activeTab === 'export' && (
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-white">Export to TypeScript File</h4>
                    <p className="text-xs text-slate-400">
                      Copy this clean TypeScript definition to paste directly into <code className="text-cyan-400 font-mono">src/data/portfolioData.ts</code>.
                    </p>
                  </div>

                  <div className="relative rounded-xl overflow-hidden bg-slate-950 border border-white/10">
                    <div className="px-4 py-2 border-b border-white/10 flex items-center justify-between bg-slate-900/50">
                      <span className="text-xs font-mono text-slate-400">portfolioData.ts</span>
                      <button
                        onClick={handleCopyCode}
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
                            <span>Copy TypeScript Code</span>
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
            <div className="px-6 py-3.5 border-t border-white/10 bg-slate-950/80 flex items-center justify-between text-xs">
              <button
                onClick={() => {
                  if (window.confirm("Reset all customizations back to initial portfolio state?")) {
                    onResetToDefaults();
                  }
                }}
                className="text-slate-400 hover:text-red-400 flex items-center gap-1.5 transition-colors font-mono"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset to 14 Original Projects</span>
              </button>

              <button
                onClick={onClose}
                className="px-4 py-1.5 font-medium text-white bg-cyan-700 hover:bg-cyan-600 rounded-lg transition-colors"
              >
                Done
              </button>
            </div>
          </>
        )}

      </div>
    </div>
  );
};
