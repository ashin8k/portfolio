import React, { useState } from 'react';
import { Mail, Copy, Check, Send, MapPin, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [senderName, setSenderName] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSendMail = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(
      subject.trim() || `Inquiry from ${senderName.trim() || 'Portfolio Visitor'}`
    );
    const bodyContent = `Hello Ashin,\n\n${message.trim()}\n\nBest regards,\n${senderName.trim() || 'Colleague / Recruiter'}`;
    const mailtoBody = encodeURIComponent(bodyContent);
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative border-t border-dark-800/60 bg-grid-subtle">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] ambient-glow-indigo pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Heading & Contact Info (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dark-850 border border-dark-700/80 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              <span className="text-xs font-mono font-medium tracking-wider text-accent-cyan uppercase">
                Get In Touch
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Have an idea? Let&apos;s build something meaningful.
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              I&apos;m interested in opportunities to learn, collaborate, and build useful software. Feel free to reach out.
            </p>

            {/* Direct Email Card with One-Click Copy */}
            <div className="p-5 rounded-2xl bg-dark-850/90 border border-dark-750 shadow-lg space-y-3">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                Direct Email Communication
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 p-3 bg-dark-900 rounded-xl border border-dark-700/80">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="p-2 rounded-lg bg-indigo-950/70 text-accent-indigo border border-indigo-800/50 flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-xs sm:text-sm text-slate-200 truncate select-all">
                    {PERSONAL_INFO.email}
                  </span>
                </div>

                <div className="flex items-center gap-2 flex-shrink-0">
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-slate-300 hover:text-white bg-dark-800 hover:bg-dark-750 border border-dark-700 transition-colors"
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
                        <span>Copy</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-semibold text-white bg-accent-indigo hover:bg-accent-indigo/90 transition-colors shadow-sm"
                  >
                    <span>Mail</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Social & Professional Links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-dark-850/80 hover:bg-dark-800 border border-dark-700 hover:border-slate-500 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-dark-900 border border-dark-700 text-slate-300 group-hover:text-white">
                    <GithubIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white">GitHub Profile</div>
                    <div className="text-[11px] font-mono text-slate-400">@ashin8k</div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-dark-850/80 hover:bg-dark-800 border border-dark-700 hover:border-accent-blue/50 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-dark-900 border border-dark-700 text-accent-blue">
                    <LinkedinIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white">LinkedIn Network</div>
                    <div className="text-[11px] font-mono text-slate-400">ashin-k</div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-accent-blue transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            {/* Academic Location Card */}
            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-dark-850/50 border border-dark-750 text-xs text-slate-400 font-mono">
              <MapPin className="w-4 h-4 text-accent-cyan flex-shrink-0" />
              <span>AJ Institute of Engineering and Technology · Mangaluru, Karnataka, India</span>
            </div>
          </div>

          {/* Right Column: Functional Mail Composer (6 cols) */}
          <div className="lg:col-span-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-dark-850/90 border border-dark-750 shadow-2xl">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center space-x-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-accent-cyan animate-pulse"></div>
                  <h3 className="text-base font-bold text-white">
                    Send Direct Message
                  </h3>
                </div>
                <span className="text-[11px] font-mono text-slate-400">
                  via Native Email Client
                </span>
              </div>

              <form onSubmit={handleSendMail} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-slate-300 mb-1.5">
                    Your Name or Organization
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="e.g. Hiring Manager / Engineering Lead"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-dark-900 border border-dark-700 text-sm text-white placeholder-slate-500 focus:border-accent-indigo focus:ring-1 focus:ring-accent-indigo transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-mono text-slate-300 mb-1.5">
                    Subject Line
                  </label>
                  <input
                    id="subject"
                    type="text"
                    required
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. AI/ML Internship Opportunity / Project Collaboration"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-dark-900 border border-dark-700 text-sm text-white placeholder-slate-500 focus:border-accent-indigo focus:ring-1 focus:ring-accent-indigo transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-slate-300 mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Write a message about your project, team opportunity, or discussion..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-dark-900 border border-dark-700 text-sm text-white placeholder-slate-500 focus:border-accent-indigo focus:ring-1 focus:ring-accent-indigo transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-accent-indigo to-accent-blue hover:from-accent-indigo/90 hover:to-accent-blue/90 shadow-glow-sm hover:shadow-glow-md transition-all active:scale-95"
                >
                  <Send className="w-4 h-4" />
                  <span>Compose in Email App</span>
                </button>

                <p className="text-[11px] text-center text-slate-400 font-mono">
                  Directly prepares a draft addressed to{' '}
                  <span className="text-slate-200">{PERSONAL_INFO.email}</span>. No hidden forms.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
