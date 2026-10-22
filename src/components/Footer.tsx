import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleBackToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-dark-950 border-t border-dark-800/80 pt-12 pb-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-dark-800/60">
          {/* Brand & Wordmark */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-blue via-accent-indigo to-accent-violet p-[1px]">
                <div className="w-full h-full bg-dark-950 rounded-[7px] flex items-center justify-center font-mono font-bold text-xs text-accent-cyan">
                  AK
                </div>
              </div>
              <span className="font-mono font-bold text-base tracking-wider text-white">
                {PERSONAL_INFO.name.toUpperCase()}
              </span>
            </div>
            <p className="text-xs text-slate-400 font-mono max-w-sm">
              Engineering practical AI/ML applications and robust full-stack software through disciplined code.
            </p>
          </div>

          {/* Social Profiles & Back to Top */}
          <div className="flex items-center space-x-4">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-dark-850 hover:bg-dark-800 border border-dark-700 text-slate-300 hover:text-white transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-dark-850 hover:bg-dark-800 border border-dark-700 text-slate-300 hover:text-accent-blue transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2.5 rounded-xl bg-dark-850 hover:bg-dark-800 border border-dark-700 text-slate-300 hover:text-accent-cyan transition-colors"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <a
              href="#home"
              onClick={handleBackToTop}
              className="p-2.5 rounded-xl bg-dark-850 hover:bg-dark-800 border border-dark-700 text-slate-300 hover:text-white transition-all flex items-center gap-1.5 text-xs font-mono ml-2 group"
              aria-label="Back to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* Bottom Credits & Year */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-400 gap-3">
          <div>
            &copy; {currentYear} {PERSONAL_INFO.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <span>AJIET Mangaluru</span>
            <span>·</span>
            <span>Computer Science Engineering (AI & ML)</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
