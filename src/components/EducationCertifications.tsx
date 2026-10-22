import React from 'react';
import { GraduationCap, Award, Calendar, MapPin, BookOpen, CheckCircle } from 'lucide-react';
import { EDUCATION, CERTIFICATION } from '../data/portfolioData';

export const EducationCertifications: React.FC = () => {
  return (
    <section id="education" className="py-20 lg:py-28 relative border-t border-dark-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dark-850 border border-dark-700/80 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-violet"></span>
            <span className="text-xs font-mono font-medium tracking-wider text-accent-cyan uppercase">
              Academic Background
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & Professional Certification.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Formal foundations in Computer Science, Artificial Intelligence, Machine Learning, and continuous skill advancement.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Education Timeline Card (7 cols) */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl bg-dark-850/80 border border-dark-750 p-6 sm:p-8 shadow-xl">
              <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
                <div className="flex items-center space-x-3.5">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-indigo-500/20 to-cyan-500/10 border border-indigo-500/30 text-accent-indigo">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-mono text-accent-cyan bg-cyan-950/60 border border-cyan-800/40 mb-1">
                      Undergraduate Degree
                    </span>
                    <h3 className="text-xl font-bold text-white">
                      {EDUCATION.degree}
                    </h3>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-xs font-mono text-emerald-400 bg-emerald-950/70 border border-emerald-800/50 px-2.5 py-1 rounded-lg">
                    {EDUCATION.graduationNote}
                  </span>
                </div>
              </div>

              {/* Institution and Period */}
              <div className="space-y-2 py-4 border-y border-dark-750/80 text-xs sm:text-sm">
                <div className="flex items-center gap-2 text-slate-200 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-indigo"></span>
                  <span>{EDUCATION.institution}</span>
                </div>
                <div className="flex items-center gap-4 text-slate-400 font-mono text-xs flex-wrap">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-accent-cyan" />
                    {EDUCATION.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-accent-cyan" />
                    {EDUCATION.location}
                  </span>
                </div>
              </div>

              {/* Key Academic Coursework */}
              <div className="mt-6">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-3 flex items-center gap-2">
                  <BookOpen className="w-3.5 h-3.5 text-accent-indigo" />
                  Core Coursework & Specialized Focus
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {EDUCATION.courseworkHighlights.map((course, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-xl bg-dark-900/80 border border-dark-750/70 text-xs text-slate-300 flex items-center gap-2 font-mono"
                    >
                      <CheckCircle className="w-3.5 h-3.5 text-accent-cyan flex-shrink-0" />
                      <span>{course}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Certification Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-dark-850/80 border border-dark-750 p-6 sm:p-8 shadow-xl">
              <div className="flex items-center space-x-3.5 mb-5">
                <div className="p-3 rounded-xl bg-gradient-to-br from-violet-500/20 to-indigo-500/10 border border-violet-500/30 text-accent-violet">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-mono text-accent-violet bg-violet-950/60 border border-violet-800/40 mb-1">
                    Verified Coursework
                  </span>
                  <h3 className="text-lg font-bold text-white">
                    Specialized Certification
                  </h3>
                </div>
              </div>

              {/* Certificate Item */}
              <div className="p-4 rounded-xl bg-dark-900/80 border border-dark-750 space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <h4 className="text-sm font-semibold text-slate-100 leading-snug">
                    {CERTIFICATION.title}
                  </h4>
                </div>

                <div className="flex items-center gap-3 text-xs font-mono text-slate-400 pt-1">
                  <span className="text-accent-cyan font-semibold bg-dark-800 px-2 py-0.5 rounded border border-dark-700">
                    {CERTIFICATION.platform}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-slate-400" />
                    {CERTIFICATION.date}
                  </span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed pt-1">
                  {CERTIFICATION.description}
                </p>
              </div>

              {/* Learning Roadmap Commitment */}
              <div className="mt-5 p-4 rounded-xl bg-dark-900/40 border border-dark-750/70 text-xs text-slate-400 space-y-2">
                <div className="font-semibold text-slate-200 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan"></span>
                  Continuous Technical Growth
                </div>
                <p className="leading-relaxed">
                  Regularly undertaking structured courses and technical explorations to deepen expertise across statistical learning, API scalability, and systems programming.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
