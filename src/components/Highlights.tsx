import React from 'react';
import { HIGHLIGHTS } from '../data/portfolioData';

export const Highlights: React.FC = () => {
  return (
    <section className="py-16 lg:py-20 relative border-t border-dark-800/60 bg-dark-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dark-850 border border-dark-700/80 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan"></span>
            <span className="text-xs font-mono font-medium tracking-wider text-accent-cyan uppercase">
              Key Milestones
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Engineering Highlights & Milestones.
          </h2>
          <p className="text-slate-400 text-sm mt-1">
            Core technical achievements grounded in practical implementation, architecture design, and verified project deliverables.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {HIGHLIGHTS.map((item, index) => (
            <div
              key={item.title}
              className="p-5 rounded-2xl bg-dark-850/80 border border-dark-750 hover:border-accent-indigo/50 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono text-accent-cyan bg-cyan-950/60 border border-cyan-800/40 px-2.5 py-0.5 rounded-full">
                    {item.category}
                  </span>
                  <span className="font-mono text-xs text-slate-500 font-bold">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="font-bold text-white text-base group-hover:text-accent-cyan transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-300 mt-2.5 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-dark-750/70 flex flex-wrap gap-1.5">
                {item.techPreview.map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] font-mono text-slate-400 bg-dark-900 px-2 py-0.5 rounded border border-dark-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
