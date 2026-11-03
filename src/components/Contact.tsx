/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Mail, Copy, Check, Send, ArrowUpRight, Github, Linkedin, Twitter, MessageSquare } from 'lucide-react';
import { PortfolioProfile } from '../types/portfolio';

interface ContactProps {
  profile: PortfolioProfile;
  onOpenCustomizer?: () => void;
}

export const Contact: React.FC<ContactProps> = ({ profile, onOpenCustomizer }) => {
  const [copied, setCopied] = useState(false);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSendDraft = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject || 'Hello from Portfolio'
    )}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center space-y-3 mb-12">
            <div className="text-xs font-mono text-blue-400 tracking-wider">
              Get in Touch
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white text-balance">
              Let's Connect & Collaborate
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
              Whether you want to talk about coding, discuss technology, or connect, feel free to reach out directly to me.
            </p>
          </div>

          {/* Contact Card & Actions */}
          <div className="p-6 sm:p-10 rounded-2xl bg-[#0a101f]/90 border border-white/10 shadow-2xl relative overflow-hidden">
            <div 
              aria-hidden="true" 
              className="absolute -top-24 -right-24 w-64 h-64 bg-blue-600/10 blur-[90px] pointer-events-none" 
            />

            <div className="space-y-8 relative z-10">
              
              {/* Direct Email Display and Quick Actions */}
              <div className="p-4 sm:p-6 rounded-xl bg-slate-950/70 border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400">Direct Contact</div>
                    <div className="text-base sm:text-lg font-semibold text-white font-mono break-all">
                      {profile.email}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-slate-300 bg-slate-900 hover:bg-slate-800 rounded-lg border border-white/10 hover:text-white transition-colors"
                    title="Copy email to clipboard"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`mailto:${profile.email}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm shadow-blue-600/30 transition-colors"
                  >
                    <span>Send Email</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Quick Message Composer (triggers default email app via mailto) */}
              <form onSubmit={handleSendDraft} className="space-y-4">
                <div className="text-xs font-mono text-slate-400">
                  Quick Message Drafter
                </div>
                
                <div>
                  <label htmlFor="subject" className="sr-only">Subject</label>
                  <input
                    id="subject"
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Subject (e.g. Hello Mufaddal, Coding Collaboration)"
                    className="w-full px-4 py-2.5 rounded-lg bg-slate-950/60 border border-white/10 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500/80 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="sr-only">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Write your message here... Clicking 'Compose Mail' will open your mail app with this draft ready to send to jaorawalamufaddal7@gmail.com."
                    className="w-full px-4 py-3 rounded-lg bg-slate-950/60 border border-white/10 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500/80 transition-colors resize-none"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-500">
                    Sends to: {profile.email}
                  </span>
                  
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow transition-colors"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Compose Email</span>
                  </button>
                </div>
              </form>

              {/* Social Links Area */}
              <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="text-xs text-slate-400 font-mono">
                  {profile.socialLinks && profile.socialLinks.length > 0
                    ? "Configured Profiles"
                    : "Social Profiles: None configured yet"}
                </div>

                {profile.socialLinks && profile.socialLinks.length > 0 ? (
                  <div className="flex items-center gap-3">
                    {profile.socialLinks.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-lg bg-slate-900 border border-white/5 text-slate-300 hover:text-white hover:border-blue-500/40 transition-colors text-xs inline-flex items-center gap-1.5"
                      >
                        <span>{link.label}</span>
                        <ArrowUpRight className="w-3 h-3 text-slate-500" />
                      </a>
                    ))}
                  </div>
                ) : (
                  onOpenCustomizer && (
                    <button
                      onClick={onOpenCustomizer}
                      className="text-xs font-mono text-slate-400 hover:text-blue-400 transition-colors self-start sm:self-auto"
                    >
                      + Add GitHub / Social Profiles
                    </button>
                  )
                )}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
