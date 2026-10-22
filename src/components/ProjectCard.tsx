import React, { useState } from 'react';
import { ExternalLink, Check, Layers, Terminal } from 'lucide-react';
import { Project } from '../types';
import { GithubIcon } from './SocialIcons';

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, featured = false }) => {
  const [showArchitecture, setShowArchitecture] = useState(false);

  // Render bespoke CSS/SVG architecture visual for each project
  const renderArchitectureVisual = () => {
    switch (project.diagramType) {
      case 'classifier':
        return (
          <div className="p-4 bg-dark-950/90 rounded-xl border border-dark-750 font-mono text-[11px] space-y-3">
            <div className="flex items-center justify-between text-slate-400 border-b border-dark-800 pb-2">
              <span className="text-accent-cyan uppercase font-semibold">Classification Architecture</span>
              <span className="text-emerald-400">Streamlit + Scikit-Learn</span>
            </div>
            <div className="grid grid-cols-4 gap-2 items-center text-center">
              <div className="p-2 rounded-lg bg-dark-850 border border-dark-700 text-slate-200">
                <div className="text-[10px] text-slate-400">Input</div>
                <div className="font-semibold text-xs text-white">SMS / Text</div>
              </div>
              <div className="p-2 rounded-lg bg-indigo-950/60 border border-indigo-800/60 text-accent-indigo">
                <div className="text-[10px] text-slate-400">Transform</div>
                <div className="font-semibold text-xs">TF-IDF</div>
              </div>
              <div className="p-2 rounded-lg bg-violet-950/60 border border-violet-800/60 text-accent-violet">
                <div className="text-[10px] text-slate-400">Model</div>
                <div className="font-semibold text-xs">MultinomialNB</div>
              </div>
              <div className="p-2 rounded-lg bg-emerald-950/60 border border-emerald-800/60 text-emerald-400">
                <div className="text-[10px] text-slate-400">Output</div>
                <div className="font-semibold text-xs">Ham / Spam</div>
              </div>
            </div>
            <div className="text-[11px] text-slate-400 flex items-center justify-between pt-1">
              <span>Tokenization: Lowercase + Punctuation Stripping</span>
              <span className="text-accent-cyan">CLI & Streamlit GUI</span>
            </div>
          </div>
        );

      case 'career-pipeline':
        return (
          <div className="p-4 bg-dark-950/90 rounded-xl border border-dark-750 font-mono text-[11px] space-y-3">
            <div className="flex items-center justify-between text-slate-400 border-b border-dark-800 pb-2">
              <span className="text-accent-cyan uppercase font-semibold">End-to-End Pipeline</span>
              <span className="text-accent-blue">FastAPI + Docker</span>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="p-2 rounded-lg bg-dark-850 border border-dark-700">
                <div className="text-[10px] text-slate-400">Semantic Matching</div>
                <div className="font-semibold text-xs text-slate-200">Sentence Transformers</div>
              </div>
              <div className="p-2 rounded-lg bg-blue-950/60 border border-blue-800/60 text-accent-blue">
                <div className="text-[10px] text-slate-400">Backend API</div>
                <div className="font-semibold text-xs">FastAPI REST</div>
              </div>
              <div className="p-2 rounded-lg bg-purple-950/60 border border-purple-800/60 text-purple-400">
                <div className="text-[10px] text-slate-400">Persistence</div>
                <div className="font-semibold text-xs">PostgreSQL</div>
              </div>
            </div>
            <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
              <span>Features: Skill-Gap Analysis & ATS-Oriented Verification</span>
              <span className="text-emerald-400">Docker Compose</span>
            </div>
          </div>
        );

      case 'genre-flow':
        return (
          <div className="p-4 bg-dark-950/90 rounded-xl border border-dark-750 font-mono text-[11px] space-y-3">
            <div className="flex items-center justify-between text-slate-400 border-b border-dark-800 pb-2">
              <span className="text-accent-cyan uppercase font-semibold">Inference Flow</span>
              <span className="text-amber-400">NLP Classification</span>
            </div>
            <div className="flex items-center justify-between gap-2 text-center">
              <div className="flex-1 p-2 rounded-lg bg-dark-850 border border-dark-700 text-slate-200">
                <div className="text-[10px] text-slate-400">Plot Summary</div>
                <div className="font-semibold text-xs text-white">Narrative Text</div>
              </div>
              <div className="text-slate-600">&rarr;</div>
              <div className="flex-1 p-2 rounded-lg bg-indigo-950/60 border border-indigo-800/60 text-accent-indigo">
                <div className="text-[10px] text-slate-400">Features</div>
                <div className="font-semibold text-xs">Vectorizer</div>
              </div>
              <div className="text-slate-600">&rarr;</div>
              <div className="flex-1 p-2 rounded-lg bg-emerald-950/60 border border-emerald-800/60 text-emerald-400">
                <div className="text-[10px] text-slate-400">Prediction</div>
                <div className="font-semibold text-xs">Genre Label</div>
              </div>
            </div>
          </div>
        );

      case 'college-db':
        return (
          <div className="p-4 bg-dark-950/90 rounded-xl border border-dark-750 font-mono text-[11px] space-y-3">
            <div className="flex items-center justify-between text-slate-400 border-b border-dark-800 pb-2">
              <span className="text-accent-cyan uppercase font-semibold">Relational Schema Architecture</span>
              <span className="text-cyan-400">Flask + MySQL</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
              <div className="p-2 rounded bg-dark-850 border border-dark-700">
                <span className="text-xs text-slate-200 font-semibold">Students</span>
              </div>
              <div className="p-2 rounded bg-dark-850 border border-dark-700">
                <span className="text-xs text-slate-200 font-semibold">Departments</span>
              </div>
              <div className="p-2 rounded bg-dark-850 border border-dark-700">
                <span className="text-xs text-slate-200 font-semibold">Courses</span>
              </div>
              <div className="p-2 rounded bg-dark-850 border border-dark-700">
                <span className="text-xs text-slate-200 font-semibold">Enrollments</span>
              </div>
            </div>
            <div className="text-[11px] text-slate-400 pt-1">
              Normalized relational entities connected through Flask routing & SQL query execution.
            </div>
          </div>
        );
    }
  };

  return (
    <article
      className={`relative rounded-2xl bg-dark-850/90 border border-dark-750 transition-all duration-300 hover:border-dark-600 hover:shadow-xl flex flex-col justify-between overflow-hidden group ${
        featured ? 'ring-1 ring-accent-indigo/30' : ''
      }`}
    >
      {/* Top Banner & Header */}
      <div className="p-6 sm:p-7">
        <div className="flex items-center justify-between gap-3 mb-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-medium bg-dark-900 text-accent-cyan border border-dark-700">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan"></span>
            {project.type}
          </span>

          <button
            type="button"
            onClick={() => setShowArchitecture(!showArchitecture)}
            className="text-[11px] font-mono text-slate-400 hover:text-accent-cyan transition-colors flex items-center gap-1 bg-dark-900/80 px-2.5 py-1 rounded-lg border border-dark-700"
          >
            <Layers className="w-3 h-3 text-accent-indigo" />
            <span>{showArchitecture ? 'Hide Diagram' : 'View Architecture'}</span>
          </button>
        </div>

        {/* Project Title & Subtitle */}
        <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-accent-cyan transition-colors">
          {project.title}
        </h3>
        <p className="text-xs font-mono text-accent-indigo mt-1">{project.subtitle}</p>

        {/* Description */}
        <p className="text-slate-300 text-sm mt-3 leading-relaxed">
          {project.description}
        </p>

        {/* Conditional Architecture / Visual Node Flow */}
        <div className="mt-4">
          {showArchitecture ? (
            renderArchitectureVisual()
          ) : (
            <div
              onClick={() => setShowArchitecture(true)}
              className="p-3 rounded-xl bg-dark-900/60 border border-dark-750/70 hover:border-dark-700 cursor-pointer transition-colors flex items-center justify-between text-xs font-mono text-slate-400"
            >
              <span className="flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-accent-cyan" />
                Pipeline: {project.technologies.slice(0, 3).join(' · ')}
              </span>
              <span className="text-accent-cyan text-[11px]">Click to inspect diagram &rarr;</span>
            </div>
          )}
        </div>

        {/* Highlighted Features */}
        <div className="mt-5 space-y-2">
          <div className="text-[11px] font-mono uppercase text-slate-400 font-semibold tracking-wider">
            Key Architecture & Features:
          </div>
          <ul className="space-y-1.5">
            {project.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-slate-300 leading-normal">
                <Check className="w-3.5 h-3.5 text-accent-cyan flex-shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer: Tech Tags & GitHub Button */}
      <div className="p-6 sm:p-7 pt-4 bg-dark-900/60 border-t border-dark-750/80 mt-auto">
        {/* Technologies Badges */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-dark-850 text-slate-300 border border-dark-700"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Link Button */}
        <div className="flex items-center justify-between pt-1">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold font-mono tracking-wide text-white bg-dark-800 hover:bg-dark-750 border border-dark-700 hover:border-accent-indigo/60 transition-all shadow-sm hover:shadow-glow-sm group/btn"
          >
            <GithubIcon className="w-4 h-4 text-slate-300 group-hover/btn:text-white" />
            <span>View on GitHub</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover/btn:text-accent-cyan" />
          </a>
        </div>
      </div>
    </article>
  );
};
