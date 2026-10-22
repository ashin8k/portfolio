import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { HeroVisual } from './HeroVisual';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const Hero: React.FC = () => {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center pt-24 pb-16 lg:py-28 overflow-hidden bg-grid-subtle">
      {/* Ambient gradient backdrops */}
      <div className="absolute top-1/4 left-10 w-96 h-96 ambient-glow-indigo pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 ambient-glow-cyan pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Small Introductory Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dark-850/90 border border-dark-700/80 backdrop-blur-sm shadow-sm">
              <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse"></span>
              <span className="text-xs font-mono font-medium tracking-wider text-slate-300 uppercase">
                {PERSONAL_INFO.subtitle}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Building{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan via-accent-indigo to-accent-violet">
                Intelligent Solutions
              </span>{' '}
              Through Code.
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
              {PERSONAL_INFO.heroDescription}
            </p>

            {/* CTAs & Social Links */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                onClick={(e) => handleScrollTo(e, '#projects')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-accent-indigo to-accent-blue hover:from-accent-indigo/90 hover:to-accent-blue/90 shadow-glow-sm hover:shadow-glow-md transition-all duration-200 active:scale-95 group"
              >
                <span>Explore My Projects</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, '#contact')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-slate-200 bg-dark-850 hover:bg-dark-800 border border-dark-700 hover:border-slate-500 transition-all duration-200 active:scale-95"
              >
                <span>Get In Touch</span>
              </a>

              {/* Profiles */}
              <div className="flex items-center space-x-2 pl-2">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-dark-850 hover:bg-dark-800 border border-dark-700 text-slate-300 hover:text-white transition-all hover:scale-105"
                  aria-label="Ashin K GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-dark-850 hover:bg-dark-800 border border-dark-700 text-slate-300 hover:text-accent-cyan transition-all hover:scale-105"
                  aria-label="Ashin K LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Factual Highlights Bar */}
            <div className="pt-6 border-t border-dark-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div>
                <div className="text-xs font-mono text-slate-400">Specialization</div>
                <div className="text-sm font-semibold text-slate-200 mt-0.5">AI & Machine Learning</div>
              </div>
              <div>
                <div className="text-xs font-mono text-slate-400">Institution</div>
                <div className="text-sm font-semibold text-slate-200 mt-0.5">AJIET Mangaluru</div>
              </div>
              <div>
                <div className="text-xs font-mono text-slate-400">Expected Graduation</div>
                <div className="text-sm font-semibold text-accent-cyan font-mono mt-0.5">2027</div>
              </div>
            </div>
          </div>

          {/* Right Column: Sophisticated Interactive ML Visualizer */}
          <div className="lg:col-span-5 flex justify-center">
            <HeroVisual />
          </div>
        </div>

        {/* Subtle Scroll Indicator */}
        <div className="mt-16 sm:mt-20 flex justify-center">
          <a
            href="#about"
            onClick={(e) => handleScrollTo(e, '#about')}
            className="group inline-flex flex-col items-center gap-1.5 text-slate-400 hover:text-slate-200 transition-colors"
            aria-label="Scroll to About Section"
          >
            <span className="text-[11px] font-mono tracking-wider uppercase text-slate-500 group-hover:text-slate-300">
              Scroll to explore
            </span>
            <div className="w-5 h-8 rounded-full border border-dark-700 flex items-start justify-center p-1">
              <div className="w-1.5 h-2 rounded-full bg-accent-indigo animate-bounce"></div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
