import React, { useState } from 'react';
import { Terminal, CheckCircle2, Sparkles } from 'lucide-react';

export const HeroVisual: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'pipeline' | 'code' | 'interactive'>('pipeline');
  const [sampleText, setSampleText] = useState('Hey, are we still meeting at the library to review the ML project?');
  const [prediction, setPrediction] = useState<{ label: 'HAM' | 'SPAM'; confidence: number; tokens: string[] }>({
    label: 'HAM',
    confidence: 98.4,
    tokens: ['meeting', 'library', 'review', 'ml_project']
  });

  const handleTestSample = (type: 'ham' | 'spam') => {
    if (type === 'ham') {
      setSampleText('Hey, are we still meeting at the library to review the ML project?');
      setPrediction({
        label: 'HAM',
        confidence: 98.4,
        tokens: ['meeting', 'library', 'review', 'ml_project']
      });
    } else {
      setSampleText('URGENT: Your account code is expiring! Click here to claim your $1,000 reward now.');
      setPrediction({
        label: 'SPAM',
        confidence: 99.2,
        tokens: ['urgent', 'account_code', 'claim', 'reward', 'click_here']
      });
    }
  };

  return (
    <div className="relative w-full max-w-lg lg:max-w-xl mx-auto">
      {/* Subtle ambient back-glow */}
      <div className="absolute -inset-1.5 bg-gradient-to-r from-accent-indigo/20 via-accent-cyan/15 to-accent-violet/20 rounded-2xl blur-xl opacity-75"></div>

      {/* Main Container */}
      <div className="relative rounded-2xl bg-dark-900 border border-dark-750 shadow-2xl overflow-hidden">
        {/* Terminal / Workspace Title Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-dark-950/90 border-b border-dark-750">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
            <span className="ml-2 font-mono text-[11px] text-slate-400 flex items-center gap-1.5">
              <Terminal className="w-3 h-3 text-accent-indigo" />
              ashin-workspace · ml-pipeline
            </span>
          </div>

          {/* Tab switchers */}
          <div className="flex items-center bg-dark-850 p-0.5 rounded-lg border border-dark-700/60">
            <button
              onClick={() => setActiveTab('pipeline')}
              className={`px-2.5 py-1 rounded text-[11px] font-mono transition-colors ${
                activeTab === 'pipeline'
                  ? 'bg-accent-indigo text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Pipeline
            </button>
            <button
              onClick={() => setActiveTab('code')}
              className={`px-2.5 py-1 rounded text-[11px] font-mono transition-colors ${
                activeTab === 'code'
                  ? 'bg-accent-indigo text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Code
            </button>
            <button
              onClick={() => setActiveTab('interactive')}
              className={`px-2.5 py-1 rounded text-[11px] font-mono transition-colors flex items-center gap-1 ${
                activeTab === 'interactive'
                  ? 'bg-accent-indigo text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Sparkles className="w-2.5 h-2.5" />
              Simulate
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="p-4 sm:p-5">
          {activeTab === 'pipeline' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-accent-cyan uppercase tracking-wider">
                  Text Classification Pipeline
                </span>
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
                  Ready · scikit-learn
                </span>
              </div>

              {/* Visual Nodes Flow */}
              <div className="space-y-2.5">
                {/* Node 1: Raw Input */}
                <div className="p-3 rounded-xl bg-dark-850 border border-dark-700 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-950/70 border border-blue-800/50 flex items-center justify-center text-accent-blue font-mono text-xs">
                      01
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-200">Raw Input Text</div>
                      <div className="text-[11px] font-mono text-slate-400">Tokenization & lowercasing</div>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 bg-dark-800 px-2 py-0.5 rounded">
                    corpus_in
                  </span>
                </div>

                {/* Arrow */}
                <div className="flex justify-center -my-1">
                  <div className="w-0.5 h-3 bg-gradient-to-b from-blue-500 to-indigo-500"></div>
                </div>

                {/* Node 2: Vectorization */}
                <div className="p-3 rounded-xl bg-dark-850 border border-dark-700 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-indigo-950/70 border border-indigo-800/50 flex items-center justify-center text-accent-indigo font-mono text-xs">
                      02
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-200">TF-IDF Vectorizer</div>
                      <div className="text-[11px] font-mono text-slate-400">Term frequency-inverse doc matrix</div>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-accent-indigo bg-indigo-950/60 px-2 py-0.5 rounded border border-indigo-800/40">
                    sparse_mat
                  </span>
                </div>

                {/* Arrow */}
                <div className="flex justify-center -my-1">
                  <div className="w-0.5 h-3 bg-gradient-to-b from-indigo-500 to-violet-500"></div>
                </div>

                {/* Node 3: Classifier */}
                <div className="p-3 rounded-xl bg-dark-850 border border-dark-700 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-violet-950/70 border border-violet-800/50 flex items-center justify-center text-accent-violet font-mono text-xs">
                      03
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-200">Multinomial Naive Bayes</div>
                      <div className="text-[11px] font-mono text-slate-400">Prior probability & likelihood inference</div>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-accent-violet bg-violet-950/60 px-2 py-0.5 rounded border border-violet-800/40">
                    clf.predict()
                  </span>
                </div>

                {/* Arrow */}
                <div className="flex justify-center -my-1">
                  <div className="w-0.5 h-3 bg-gradient-to-b from-violet-500 to-emerald-500"></div>
                </div>

                {/* Node 4: Inference Output */}
                <div className="p-3 rounded-xl bg-dark-850 border border-dark-700/80 flex items-center justify-between bg-gradient-to-r from-dark-850 to-emerald-950/20">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-950/70 border border-emerald-800/50 flex items-center justify-center text-emerald-400">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-200">Streamlit UI & Real-Time Decision</div>
                      <div className="text-[11px] font-mono text-slate-400">Confidence probability score breakdown</div>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400 font-semibold bg-emerald-950/70 px-2.5 py-0.5 rounded border border-emerald-700/50">
                    HAM: 98.4%
                  </span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'code' && (
            <div className="font-mono text-xs text-slate-300 bg-dark-950 p-4 rounded-xl border border-dark-750 overflow-x-auto space-y-1.5">
              <div className="text-slate-500">// SpamGuard AI: Pipeline definition</div>
              <div>
                <span className="text-rose-400">from</span>{' '}
                <span className="text-slate-200">sklearn.pipeline</span>{' '}
                <span className="text-rose-400">import</span>{' '}
                <span className="text-amber-300">Pipeline</span>
              </div>
              <div>
                <span className="text-rose-400">from</span>{' '}
                <span className="text-slate-200">sklearn.feature_extraction.text</span>{' '}
                <span className="text-rose-400">import</span>{' '}
                <span className="text-amber-300">TfidfVectorizer</span>
              </div>
              <div>
                <span className="text-rose-400">from</span>{' '}
                <span className="text-slate-200">sklearn.naive_bayes</span>{' '}
                <span className="text-rose-400">import</span>{' '}
                <span className="text-amber-300">MultinomialNB</span>
              </div>
              <div className="pt-2 text-slate-500"># End-to-end NLP classifier model</div>
              <div>
                <span className="text-accent-cyan">model_pipeline</span> ={' '}
                <span className="text-amber-300">Pipeline</span>([
              </div>
              <div className="pl-4">
                (<span className="text-emerald-300">&apos;tfidf&apos;</span>,{' '}
                <span className="text-amber-300">TfidfVectorizer</span>(stop_words=
                <span className="text-emerald-300">&apos;english&apos;</span>)),
              </div>
              <div className="pl-4">
                (<span className="text-emerald-300">&apos;clf&apos;</span>,{' '}
                <span className="text-amber-300">MultinomialNB</span>(alpha=
                <span className="text-purple-300">0.1</span>))
              </div>
              <div>])</div>
              <div className="pt-2 text-slate-500"># Train & evaluate on message dataset</div>
              <div>
                <span className="text-accent-cyan">model_pipeline</span>.
                <span className="text-accent-indigo">fit</span>(X_train, y_train)
              </div>
            </div>
          )}

          {activeTab === 'interactive' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-accent-cyan uppercase tracking-wider">
                  Live Classification Simulator
                </span>
                <span className="text-[11px] text-slate-400">Select sample input:</span>
              </div>

              {/* Sample Quick Selectors */}
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => handleTestSample('ham')}
                  className={`p-2 rounded-lg text-left border text-xs transition-colors ${
                    prediction.label === 'HAM'
                      ? 'bg-accent-indigo/15 border-accent-indigo text-slate-100'
                      : 'bg-dark-850 border-dark-700 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <div className="font-semibold text-emerald-400 text-[11px]">Legitimate Message</div>
                  <div className="truncate text-[11px] text-slate-400">&quot;Meeting review tomorrow...&quot;</div>
                </button>
                <button
                  type="button"
                  onClick={() => handleTestSample('spam')}
                  className={`p-2 rounded-lg text-left border text-xs transition-colors ${
                    prediction.label === 'SPAM'
                      ? 'bg-accent-indigo/15 border-accent-indigo text-slate-100'
                      : 'bg-dark-850 border-dark-700 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <div className="font-semibold text-rose-400 text-[11px]">Suspicious Spam</div>
                  <div className="truncate text-[11px] text-slate-400">&quot;Claim your reward now...&quot;</div>
                </button>
              </div>

              {/* Evaluated Input */}
              <div className="p-3 bg-dark-950 rounded-xl border border-dark-750">
                <div className="text-[10px] font-mono uppercase text-slate-500 mb-1">Evaluated Payload</div>
                <div className="text-xs text-slate-200 font-mono italic leading-relaxed">&ldquo;{sampleText}&rdquo;</div>
              </div>

              {/* Result Preview */}
              <div className="p-3.5 bg-dark-850 rounded-xl border border-dark-700 flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Predicted Category</div>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span
                      className={`text-sm font-bold font-mono px-2 py-0.5 rounded ${
                        prediction.label === 'HAM'
                          ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-800'
                          : 'bg-rose-950/80 text-rose-400 border border-rose-800'
                      }`}
                    >
                      {prediction.label}
                    </span>
                    <span className="text-xs font-mono text-slate-300">
                      {prediction.confidence}% confidence
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Extracted Tokens</div>
                  <div className="flex items-center gap-1 justify-end mt-1 flex-wrap">
                    {prediction.tokens.slice(0, 3).map((token) => (
                      <span key={token} className="text-[10px] font-mono bg-dark-800 text-slate-300 px-1.5 py-0.5 rounded border border-dark-700">
                        {token}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Status Bar */}
        <div className="px-4 py-2.5 bg-dark-950/60 border-t border-dark-750 flex items-center justify-between text-[11px] font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>Architecture: Scikit-learn · FastAPI · Docker</span>
          </div>
          <span className="text-slate-500">v2.4.0</span>
        </div>
      </div>
    </div>
  );
};
