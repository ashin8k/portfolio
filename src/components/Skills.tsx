import React, { useState } from 'react';
import { Brain, Server, Code2, Database, Wrench, CheckCircle2 } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

const getCategoryIcon = (iconName: string) => {
  switch (iconName) {
    case 'Brain':
      return <Brain className="w-5 h-5 text-accent-indigo" />;
    case 'Server':
      return <Server className="w-5 h-5 text-accent-blue" />;
    case 'Code2':
      return <Code2 className="w-5 h-5 text-accent-cyan" />;
    case 'Database':
      return <Database className="w-5 h-5 text-accent-violet" />;
    case 'Wrench':
      return <Wrench className="w-5 h-5 text-emerald-400" />;
    default:
      return <Code2 className="w-5 h-5 text-accent-indigo" />;
  }
};

const getCategoryAccent = (index: number) => {
  const accents = [
    'from-indigo-500/10 via-indigo-500/5 to-transparent border-indigo-500/30 group-hover:border-indigo-500/60',
    'from-blue-500/10 via-blue-500/5 to-transparent border-blue-500/30 group-hover:border-blue-500/60',
    'from-cyan-500/10 via-cyan-500/5 to-transparent border-cyan-500/30 group-hover:border-cyan-500/60',
    'from-purple-500/10 via-purple-500/5 to-transparent border-purple-500/30 group-hover:border-purple-500/60',
    'from-emerald-500/10 via-emerald-500/5 to-transparent border-emerald-500/30 group-hover:border-emerald-500/60',
  ];
  return accents[index % accents.length];
};

export const Skills: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const filterOptions = [
    { label: 'All Technologies', value: 'all' },
    { label: 'Machine Learning & NLP', value: 'Machine Learning & Data Science' },
    { label: 'Backend & APIs', value: 'Web & Backend Development' },
    { label: 'Languages & DBs', value: 'Languages & Databases' },
  ];

  const filteredCategories = SKILL_CATEGORIES.filter((cat) => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'Languages & Databases') {
      return cat.title === 'Programming Languages' || cat.title === 'Databases & Data Modeling';
    }
    return cat.title === selectedFilter;
  });

  return (
    <section id="skills" className="py-20 lg:py-28 relative border-t border-dark-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dark-850 border border-dark-700/80 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan"></span>
              <span className="text-xs font-mono font-medium tracking-wider text-accent-cyan uppercase">
                Technical Stack
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Tools & Technologies I Work With.
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2">
              Verified practical technologies utilized across my machine learning applications, backend APIs, and systems engineering projects.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {filterOptions.map((opt) => (
              <button
                key={opt.value}
                onClick={() => setSelectedFilter(opt.value)}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  selectedFilter === opt.value
                    ? 'bg-accent-indigo text-white shadow-glow-sm'
                    : 'bg-dark-850 text-slate-400 hover:text-slate-200 border border-dark-700'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Categorized Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category, index) => {
            const accentClass = getCategoryAccent(index);

            return (
              <div
                key={category.title}
                className={`group relative rounded-2xl p-6 bg-gradient-to-b bg-dark-850/80 border transition-all duration-300 hover:-translate-y-1 ${accentClass} shadow-lg`}
              >
                {/* Category Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2.5 rounded-xl bg-dark-900 border border-dark-700 shadow-inner">
                      {getCategoryIcon(category.icon)}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-100 text-base group-hover:text-white transition-colors">
                        {category.title}
                      </h3>
                      <span className="text-[11px] font-mono text-slate-400">
                        {category.skills.length} core competencies
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                  {category.description}
                </p>

                {/* Skills Badges */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-dark-900/90 text-slate-200 border border-dark-700/80 hover:border-accent-indigo/60 hover:text-white transition-all shadow-sm"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan/80"></span>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Transparent Methodology Callout */}
        <div className="mt-12 p-4 sm:p-5 rounded-2xl bg-dark-850/40 border border-dark-750/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-indigo-950/60 text-accent-indigo border border-indigo-800/40">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-semibold text-slate-200">Authentic Stack Verification</div>
              <div className="text-[11px] text-slate-400 font-mono">
                No arbitrary proficiency percentages or fabricated statistics — every tool listed here is backed by real project repositories.
              </div>
            </div>
          </div>
          <a
            href="#projects"
            className="text-xs font-mono text-accent-cyan hover:underline inline-flex items-center gap-1 whitespace-nowrap"
          >
            Review project implementations &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};
