import React from 'react';
import { Brain, Server, Code2, Compass, Layers } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 relative border-t border-dark-800/60 bg-dark-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dark-850 border border-dark-700/80 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-indigo"></span>
            <span className="text-xs font-mono font-medium tracking-wider text-accent-cyan uppercase">
              About Me
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineering Practical Systems from Foundations to Deployment.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Story & Technical Focus */}
          <div className="lg:col-span-7 space-y-5 text-slate-300 leading-relaxed text-base">
            <p className="text-lg text-slate-200 font-normal">
              I am a Computer Science Engineering student specializing in{' '}
              <span className="text-white font-semibold">Artificial Intelligence and Machine Learning</span> at{' '}
              <span className="text-slate-100 font-semibold">AJ Institute of Engineering and Technology, Mangaluru</span>.
            </p>

            <p>
              My engineering journey is driven by a straightforward philosophy:{' '}
              <span className="text-accent-cyan font-medium">turn conceptual algorithms into working, deployable software.</span>{' '}
              Rather than treating machine learning as purely theoretical math or isolated scripts, I focus on integrating models
              with solid backend architectures, structured databases, and accessible user interfaces.
            </p>

            <p>
              I take deep interest in <strong className="text-slate-100">natural language processing and text classification</strong>,
              leveraging techniques like TF-IDF vectorization, Multinomial Naive Bayes, and sentence embeddings to solve concrete problems—from
              intelligent spam filtering to semantic career document matching.
            </p>

            <p>
              On the development side, I write modular, idiomatic <strong className="text-slate-100">Python</strong>, building reliable REST APIs
              with <strong className="text-slate-100">FastAPI and Flask</strong>, designing relational databases with{' '}
              <strong className="text-slate-100">PostgreSQL and MySQL</strong>, and packaging services using{' '}
              <strong className="text-slate-100">Docker</strong>.
            </p>

            {/* Core Pillars */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="p-4 rounded-xl bg-dark-850/80 border border-dark-700/80 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-indigo-950/70 text-accent-indigo border border-indigo-800/50 mt-0.5">
                  <Brain className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">AI & Machine Learning</h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    NLP, text vectorization, embeddings, and supervised classification pipelines.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-dark-850/80 border border-dark-700/80 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-cyan-950/70 text-accent-cyan border border-cyan-800/50 mt-0.5">
                  <Server className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">Backend & APIs</h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    FastAPI, Flask, relational schemas, SQL, and Docker containerization.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-dark-850/80 border border-dark-700/80 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-violet-950/70 text-accent-violet border border-violet-800/50 mt-0.5">
                  <Code2 className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">Python Development</h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Clean, modular application design, CLI utilities, and scientific libraries.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-dark-850/80 border border-dark-700/80 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-emerald-950/70 text-emerald-400 border border-emerald-800/50 mt-0.5">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">Interactive Tools</h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Deploying rapid analytical interfaces with Streamlit and modern tooling.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Profile Cards & Factual Overview */}
          <div className="lg:col-span-5 space-y-5">
            {/* Identity Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-dark-850 to-dark-900 border border-dark-750 shadow-xl relative overflow-hidden">
              <div className="flex items-center space-x-4 mb-5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-accent-indigo via-accent-blue to-accent-cyan p-[1.5px] shadow-glow-sm">
                  <div className="w-full h-full bg-dark-950 rounded-[14px] flex items-center justify-center font-mono font-bold text-xl text-white">
                    AK
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{PERSONAL_INFO.name}</h3>
                  <p className="text-xs font-mono text-accent-cyan">{PERSONAL_INFO.institution}</p>
                  <p className="text-xs text-slate-400 mt-0.5">B.E. Computer Science (AI & ML) · 2023–2027</p>
                </div>
              </div>

              <div className="space-y-3 pt-3 border-t border-dark-750 text-xs">
                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-400 font-mono">Status:</span>
                  <span className="text-slate-200 font-medium">B.E. Student (AI & ML)</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-400 font-mono">Institution:</span>
                  <span className="text-slate-200 font-medium text-right">AJIET Mangaluru</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-400 font-mono">Location:</span>
                  <span className="text-slate-200 font-medium">{PERSONAL_INFO.location}</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-400 font-mono">Expected Grad:</span>
                  <span className="font-mono text-accent-cyan font-bold">{PERSONAL_INFO.expectedGraduation}</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-400 font-mono">Primary Focus:</span>
                  <span className="text-slate-200 font-medium">Machine Learning & Backend</span>
                </div>
              </div>
            </div>

            {/* Engineering Principles Card */}
            <div className="p-6 rounded-2xl bg-dark-850/60 border border-dark-750/70">
              <h3 className="text-xs font-mono uppercase tracking-wider text-accent-indigo font-semibold mb-3 flex items-center gap-2">
                <Compass className="w-4 h-4" />
                Engineering Principles
              </h3>
              <ul className="space-y-2.5 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-accent-cyan font-mono font-bold">01.</span>
                  <span><strong>Build to Understand:</strong> Learn concepts thoroughly by implementing working systems from scratch.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-cyan font-mono font-bold">02.</span>
                  <span><strong>Deployable Code:</strong> Focus on containerized, testable, and reproducible architectures.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-cyan font-mono font-bold">03.</span>
                  <span><strong>Data-Centric Logic:</strong> Treat feature representation and data quality as the core of any ML model.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
