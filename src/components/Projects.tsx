import React, { useState } from 'react';
import { FolderGit2 } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'ML Application' | 'Full-Stack Platform' | 'Collaborative System'>('all');

  const filteredProjects = PROJECTS.filter((proj) => {
    if (filter === 'all') return true;
    return proj.type === filter;
  });

  return (
    <section id="projects" className="py-20 lg:py-28 relative border-t border-dark-800/60 bg-dark-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dark-850 border border-dark-700/80 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-indigo"></span>
              <span className="text-xs font-mono font-medium tracking-wider text-accent-cyan uppercase">
                Featured Work
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Practical Applications & Intelligent Systems.
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2">
              Production-grade machine learning pipelines, full-stack backends, and relational database systems built with clean architecture and verified code.
            </p>
          </div>

          {/* Type Filter Buttons */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all ${
                filter === 'all'
                  ? 'bg-accent-indigo text-white shadow-glow-sm'
                  : 'bg-dark-850 text-slate-400 hover:text-slate-200 border border-dark-700'
              }`}
            >
              All Projects ({PROJECTS.length})
            </button>
            <button
              onClick={() => setFilter('ML Application')}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all ${
                filter === 'ML Application'
                  ? 'bg-accent-indigo text-white shadow-glow-sm'
                  : 'bg-dark-850 text-slate-400 hover:text-slate-200 border border-dark-700'
              }`}
            >
              ML Applications
            </button>
            <button
              onClick={() => setFilter('Full-Stack Platform')}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all ${
                filter === 'Full-Stack Platform'
                  ? 'bg-accent-indigo text-white shadow-glow-sm'
                  : 'bg-dark-850 text-slate-400 hover:text-slate-200 border border-dark-700'
              }`}
            >
              Full-Stack Platform
            </button>
            <button
              onClick={() => setFilter('Collaborative System')}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all ${
                filter === 'Collaborative System'
                  ? 'bg-accent-indigo text-white shadow-glow-sm'
                  : 'bg-dark-850 text-slate-400 hover:text-slate-200 border border-dark-700'
              }`}
            >
              Database Systems
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              featured={index === 0 || index === 1}
            />
          ))}
        </div>

        {/* GitHub Repository Footer Callout */}
        <div className="mt-14 p-6 rounded-2xl bg-gradient-to-r from-dark-850 via-dark-850 to-indigo-950/20 border border-dark-750 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-dark-900 border border-dark-700 text-accent-cyan">
              <FolderGit2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Explore More Code & Contributions</h4>
              <p className="text-xs text-slate-400 mt-0.5">
                All source code, commit history, and application modules are openly accessible on GitHub.
              </p>
            </div>
          </div>

          <a
            href="https://github.com/ashin8k"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-xl text-xs font-semibold font-mono text-white bg-dark-800 hover:bg-dark-700 border border-dark-700 hover:border-accent-indigo/60 transition-all flex items-center gap-2 whitespace-nowrap shadow-sm"
          >
            <span>Visit @ashin8k on GitHub</span>
            <span className="text-accent-cyan">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
};
