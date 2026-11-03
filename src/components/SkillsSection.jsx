import React, { useState, useMemo } from 'react';
import { 
  Sparkles, Search, Copy, Check, Play, Terminal, ArrowRight,
  Shield, Code2, Database, Wrench, Bug, RefreshCw, FileText, CheckCircle2,
  ExternalLink, ChevronDown, ChevronUp, Layers, Cpu, Zap
} from 'lucide-react';
import { SKILLS_CATEGORIES, SKILLS_LIST } from '../data/skillsData';

export default function SkillsSection({ onCopyCommand, copied }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedSkillId, setExpandedSkillId] = useState(null);
  
  // Playground States
  const [selectedSkill, setSelectedSkill] = useState(SKILLS_LIST[0]);
  const [playgroundPrompt, setPlaygroundPrompt] = useState(SKILLS_LIST[0].samplePrompt);
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulationOutput, setSimulationOutput] = useState(SKILLS_LIST[0].simulation);
  const [simulatedStep, setSimulatedStep] = useState(3);
  const [codeCopied, setCodeCopied] = useState(false);

  // Filter skills based on category and search query
  const filteredSkills = useMemo(() => {
    return SKILLS_LIST.filter(skill => {
      const matchCategory = selectedCategory === 'all' || skill.category === selectedCategory;
      const matchSearch = 
        skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.fullDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.tag.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Handle selecting a skill for the playground
  const handleSelectForPlayground = (skill) => {
    setSelectedSkill(skill);
    setPlaygroundPrompt(skill.samplePrompt);
    setSimulationOutput(skill.simulation);
    setSimulatedStep(3);
    
    const el = document.getElementById('skills-playground');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Run simulation
  const handleRunSimulation = () => {
    setIsSimulating(true);
    setSimulatedStep(1);
    
    setTimeout(() => {
      setSimulatedStep(2);
      setTimeout(() => {
        setSimulatedStep(3);
        setIsSimulating(false);
      }, 400);
    }, 350);
  };

  const handleCopyCode = (text) => {
    navigator.clipboard.writeText(text);
    setCodeCopied(true);
    setTimeout(() => setCodeCopied(false), 2000);
  };

  return (
    <div id="skills-hub" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12 sm:space-y-16 border-t border-zinc-800/60 w-full min-w-0 overflow-hidden box-border">
      
      {/* 1. Header Hub @Skills */}
      <div className="text-center max-w-3xl mx-auto space-y-4 sm:space-y-5">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-zinc-700/60 bg-zinc-900/80 text-zinc-300 text-xs font-mono tracking-wide">
          <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 shrink-0"></span>
          <span>AUTONOMOUS AGENT MODULES</span>
        </div>

        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white">
          Katalog Ekosistem <span className="text-zinc-300 font-mono">@skills</span>
        </h2>

        <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-normal">
          Panggil modul spesialis rekayasa perangkat lunak secara langsung di dalam chat VS Code. 
          Dirancang dengan batas arsitektur terisolasi untuk memastikan presisi tinggi dan zero-regression.
        </p>

        {/* Quick Syntax Showcase Banner */}
        <div className="bg-[#0B0D12] border border-zinc-800 rounded-xl p-3.5 sm:p-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 text-left w-full min-w-0 overflow-hidden box-border">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-700/80 flex items-center justify-center text-zinc-200 font-mono text-xs font-semibold shrink-0">
              @
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[10px] sm:text-[11px] text-zinc-400 font-mono uppercase tracking-wider">Format Pemicu Editor:</p>
              <p className="font-mono text-xs sm:text-sm text-zinc-200 mt-0.5 truncate">
                <span className="text-zinc-100 font-bold">@skills</span> <span className="text-zinc-400">[nama-modul]</span> <span className="text-zinc-500">[target]</span>
              </p>
            </div>
          </div>
          <button
            onClick={() => onCopyCommand('@skills refactor-clean src/services/orderProcessor.ts')}
            className="px-3.5 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-medium flex items-center justify-center gap-2 transition-all shrink-0 active:scale-95 border border-zinc-700/50"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-zinc-200" /> : <Copy className="w-3.5 h-3.5 text-zinc-400" />}
            <span>Salin Contoh Sintaks</span>
          </button>
        </div>
      </div>

      {/* 2. Interactive Search & Category Filter Toolbar */}
      <div className="space-y-4 w-full min-w-0">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 sm:gap-4 w-full">
          
          {/* Search Box */}
          <div className="relative flex-1 max-w-md w-full min-w-0">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari modul skill (cth: refactor, db-schema, debug)..."
              className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-[#0B0D12] border border-zinc-800 focus:border-zinc-600 text-xs sm:text-sm text-zinc-200 placeholder-zinc-500 focus:outline-none transition-colors"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-zinc-400 hover:text-zinc-200 font-mono"
              >
                Clear
              </button>
            )}
          </div>

          {/* Results Count */}
          <div className="text-xs text-zinc-400 font-mono">
            Menampilkan <strong className="text-zinc-200">{filteredSkills.length}</strong> modul spesialisasi
          </div>

        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none w-full min-w-0">
          {SKILLS_CATEGORIES.map(cat => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-all flex items-center gap-2 border shrink-0 ${
                  isActive
                    ? 'bg-zinc-100 text-zinc-950 border-zinc-200 shadow-sm'
                    : 'bg-[#0B0D12] text-zinc-400 hover:text-zinc-200 border-zinc-800 hover:border-zinc-700'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded ${
                  isActive ? 'bg-zinc-300 text-zinc-900' : 'bg-zinc-800 text-zinc-400'
                }`}>
                  {cat.id === 'all' ? SKILLS_LIST.length : SKILLS_LIST.filter(s => s.category === cat.id).length}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Skill Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full min-w-0">
        {filteredSkills.map(skill => {
          const isExpanded = expandedSkillId === skill.id;
          const isCurrentPlayground = selectedSkill.id === skill.id;

          return (
            <div
              key={skill.id}
              className={`rounded-2xl border transition-all flex flex-col justify-between p-4 sm:p-5 w-full min-w-0 overflow-hidden box-border ${
                isCurrentPlayground
                  ? 'border-zinc-500 bg-[#101218] shadow-md'
                  : 'border-zinc-800/90 bg-[#0B0D12] hover:border-zinc-700 hover:bg-[#0E1016]'
              }`}
            >
              <div className="space-y-3 min-w-0">
                {/* Top Row: Tag & Category */}
                <div className="flex items-center justify-between gap-2">
                  <div className="font-mono text-xs font-semibold text-zinc-200 bg-zinc-900 border border-zinc-700/80 px-2.5 py-1 rounded-md truncate">
                    {skill.tag}
                  </div>
                  <span className="text-[10px] sm:text-[11px] text-zinc-400 font-mono bg-zinc-900/60 px-2 py-0.5 rounded border border-zinc-800 shrink-0">
                    {skill.categoryLabel}
                  </span>
                </div>

                {/* Skill Title & Short Description */}
                <div>
                  <h3 className="text-sm font-bold text-white tracking-tight break-words">
                    {skill.name}
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1.5 leading-relaxed break-words">
                    {skill.shortDesc}
                  </p>
                </div>

                {/* Syntax Parameter Badge */}
                <div className="bg-[#07080B] border border-zinc-800/80 rounded-lg p-2 font-mono text-[11px] text-zinc-400 overflow-x-auto scrollbar-none w-full min-w-0">
                  <span className="text-zinc-600 select-none">param: </span>
                  <span className="text-zinc-300">{skill.params}</span>
                </div>

                {/* Expandable Deep Details */}
                {isExpanded && (
                  <div className="pt-3 border-t border-zinc-800 space-y-2.5 text-xs text-zinc-300 animate-fade-in min-w-0">
                    <p className="leading-relaxed text-zinc-400 break-words">{skill.fullDesc}</p>
                    <div className="space-y-1 min-w-0">
                      <p className="font-semibold text-zinc-200 text-[11px] font-mono">CONTOH INSTRUKSI:</p>
                      <div className="bg-[#07080B] p-2 rounded border border-zinc-800 font-mono text-[11px] text-zinc-300 overflow-x-auto scrollbar-none w-full min-w-0">
                        <span className="whitespace-nowrap">{skill.samplePrompt}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Card Actions */}
              <div className="mt-5 pt-3 border-t border-zinc-800/80 flex items-center justify-between gap-2 min-w-0">
                <button
                  onClick={() => setExpandedSkillId(isExpanded ? null : skill.id)}
                  className="text-xs text-zinc-400 hover:text-zinc-200 flex items-center gap-1 transition-colors font-mono shrink-0"
                >
                  <span>{isExpanded ? 'Tutup' : 'Detail'}</span>
                  {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </button>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => onCopyCommand(skill.command)}
                    title="Salin sintaks perintah"
                    className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-800 transition-colors"
                    aria-label={`Salin perintah ${skill.name}`}
                  >
                    <Copy className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => handleSelectForPlayground(skill)}
                    className="px-3 py-1.5 rounded-lg bg-zinc-100 hover:bg-white text-zinc-950 font-semibold text-xs transition-colors flex items-center gap-1.5 active:scale-95 shadow-sm whitespace-nowrap"
                  >
                    <Play className="w-3 h-3 fill-current text-zinc-950" />
                    <span>Playground</span>
                  </button>
                </div>
              </div>

            </div>
          );
        })}
      </div>

      {/* 4. Live Interactive Skill Playground & Simulator */}
      <div id="skills-playground" className="mt-16 sm:mt-20 pt-8 sm:pt-10 border-t border-zinc-800/80 w-full min-w-0 overflow-hidden">
        
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 space-y-2.5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-mono">
            <span>LIVE AGENT SIMULATOR</span>
          </div>
          <h3 className="text-xl sm:text-3xl font-bold text-white tracking-tight">
            Playground Pengujian @skills
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400">
            Uji interaksi prompt terhadap modul skill terpilih dan lihat simulasi tahapan eksekusi engine secara real-time.
          </p>
        </div>

        {/* Playground Box Container */}
        <div className="rounded-2xl border border-zinc-800 bg-[#0B0D12] shadow-2xl overflow-hidden max-w-5xl mx-auto w-full min-w-0 box-border">
          
          {/* Playground Top Bar */}
          <div className="bg-[#12141A] p-3 sm:px-5 sm:py-3 border-b border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 w-full min-w-0">
            <div className="flex items-center gap-2.5 min-w-0">
              <span className="text-xs text-zinc-400 font-mono shrink-0">MODUL:</span>
              <div className="font-mono text-xs font-bold text-zinc-100 bg-zinc-900 border border-zinc-700 px-2.5 py-1 rounded-md truncate">
                {selectedSkill.tag}
              </div>
            </div>

            {/* Quick Skill Selector Dropdown */}
            <div className="flex items-center gap-2 w-full sm:w-auto min-w-0">
              <span className="text-xs text-zinc-400 font-mono hidden md:inline shrink-0">Ganti Modul:</span>
              <select
                value={selectedSkill.id}
                onChange={(e) => {
                  const s = SKILLS_LIST.find(item => item.id === e.target.value);
                  if (s) handleSelectForPlayground(s);
                }}
                className="bg-zinc-900 border border-zinc-700 text-zinc-200 text-xs font-mono rounded-lg px-3 py-1.5 focus:outline-none focus:border-zinc-500 w-full sm:w-auto truncate min-w-0"
              >
                {SKILLS_LIST.map(s => (
                  <option key={s.id} value={s.id}>
                    {s.tag} — {s.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Playground Body Grid: 1 column on mobile/tablet, 12 cols on desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-zinc-800 w-full min-w-0 box-border">
            
            {/* Left Column: Input Prompt Configuration (5 cols) */}
            <div className="lg:col-span-5 p-4 sm:p-5 space-y-4 bg-[#0E1016] w-full min-w-0 box-border">
              
              <div className="min-w-0">
                <label className="block text-xs font-mono text-zinc-300 mb-1.5 uppercase tracking-wider">
                  Instruksi Prompt:
                </label>
                <textarea
                  value={playgroundPrompt}
                  onChange={(e) => setPlaygroundPrompt(e.target.value)}
                  rows={4}
                  className="w-full p-3 rounded-xl bg-zinc-950 border border-zinc-800 text-zinc-200 text-xs font-mono focus:outline-none focus:border-zinc-600 resize-none leading-relaxed box-border"
                  placeholder="Ketik instruksi untuk dieksekusi..."
                />
              </div>

              {/* Parameter info */}
              <div className="bg-zinc-950/90 border border-zinc-800/80 rounded-xl p-3 text-xs space-y-1 font-mono w-full min-w-0 overflow-hidden box-border">
                <span className="text-zinc-500 block">Batas Arsitektur (Scope):</span>
                <span className="text-zinc-300 text-[11px] block break-words">{selectedSkill.params}</span>
              </div>

              {/* Quick Preset Buttons */}
              <div className="space-y-1.5 min-w-0">
                <span className="text-[11px] text-zinc-400 font-mono block">CONTOH SKENARIO:</span>
                <div className="flex flex-wrap gap-1.5">
                  <button
                    onClick={() => {
                      const s = SKILLS_LIST.find(x => x.id === 'refactor-clean');
                      if (s) handleSelectForPlayground(s);
                    }}
                    className="text-[11px] bg-zinc-900 hover:bg-zinc-800 text-zinc-300 px-2.5 py-1 rounded-lg border border-zinc-800 font-mono transition-colors"
                  >
                    Refactor Early Return
                  </button>
                  <button
                    onClick={() => {
                      const s = SKILLS_LIST.find(x => x.id === 'security-audit');
                      if (s) handleSelectForPlayground(s);
                    }}
                    className="text-[11px] bg-zinc-900 hover:bg-zinc-800 text-zinc-300 px-2.5 py-1 rounded-lg border border-zinc-800 font-mono transition-colors"
                  >
                    Audit Injeksi
                  </button>
                  <button
                    onClick={() => {
                      const s = SKILLS_LIST.find(x => x.id === 'db-schema');
                      if (s) handleSelectForPlayground(s);
                    }}
                    className="text-[11px] bg-zinc-900 hover:bg-zinc-800 text-zinc-300 px-2.5 py-1 rounded-lg border border-zinc-800 font-mono transition-colors"
                  >
                    Skema Prisma
                  </button>
                </div>
              </div>

              {/* Trigger Button */}
              <div className="pt-2">
                <button
                  onClick={handleRunSimulation}
                  disabled={isSimulating}
                  className="w-full py-3 rounded-xl bg-zinc-100 hover:bg-white text-zinc-950 font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md active:scale-95 disabled:opacity-50 font-mono"
                >
                  {isSimulating ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin text-zinc-950 shrink-0" />
                      <span>Mengeksekusi Sub-Agent...</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5 fill-current text-zinc-950 shrink-0" />
                      <span>Jalankan Simulasi Skill</span>
                    </>
                  )}
                </button>
              </div>

            </div>

            {/* Right Column: Execution Stages & Output (7 cols) */}
            <div className="lg:col-span-7 p-4 sm:p-5 space-y-4 bg-[#08090D] w-full min-w-0 box-border">
              
              {/* Execution Flow Indicators */}
              <div className="space-y-2 min-w-0">
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">Status Alur Eksekusi:</span>
                <div className="space-y-1.5 font-mono text-xs min-w-0">
                  <div className={`flex items-start sm:items-center gap-2.5 p-2.5 rounded-lg border min-w-0 w-full box-border ${
                    simulatedStep >= 1 ? 'bg-zinc-900/90 border-zinc-700 text-zinc-200' : 'bg-zinc-950 border-zinc-900/80 text-zinc-600'
                  }`}>
                    <span className="w-4 h-4 rounded bg-zinc-800 text-zinc-300 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5 sm:mt-0">1</span>
                    <span className="text-[11px] break-words flex-1 min-w-0">{simulationOutput.step1}</span>
                  </div>

                  <div className={`flex items-start sm:items-center gap-2.5 p-2.5 rounded-lg border min-w-0 w-full box-border ${
                    simulatedStep >= 2 ? 'bg-zinc-900/90 border-zinc-700 text-zinc-200' : 'bg-zinc-950 border-zinc-900/80 text-zinc-600'
                  }`}>
                    <span className="w-4 h-4 rounded bg-zinc-800 text-zinc-300 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5 sm:mt-0">2</span>
                    <span className="text-[11px] break-words flex-1 min-w-0">{simulationOutput.step2}</span>
                  </div>

                  <div className={`flex items-start sm:items-center gap-2.5 p-2.5 rounded-lg border min-w-0 w-full box-border ${
                    simulatedStep >= 3 ? 'bg-zinc-900/90 border-zinc-700 text-zinc-200' : 'bg-zinc-950 border-zinc-900/80 text-zinc-600'
                  }`}>
                    <span className="w-4 h-4 rounded bg-zinc-800 text-zinc-300 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5 sm:mt-0">3</span>
                    <span className="text-[11px] break-words flex-1 min-w-0">{simulationOutput.step3}</span>
                  </div>
                </div>
              </div>

              {/* Code Output Result */}
              <div className="space-y-1.5 pt-1 min-w-0">
                <div className="flex items-center justify-between min-w-0">
                  <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider truncate">Hasil Eksekusi Kode:</span>
                  <button
                    onClick={() => handleCopyCode(simulationOutput.codeSnippet)}
                    className="flex items-center gap-1.5 text-[11px] text-zinc-300 hover:text-white px-2.5 py-1 rounded-lg bg-zinc-900 border border-zinc-800 transition-colors font-mono shrink-0"
                  >
                    {codeCopied ? (
                      <>
                        <Check className="w-3 h-3 text-zinc-200" />
                        <span>Tersalin!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3 text-zinc-400" />
                        <span>Salin Kode</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="bg-[#050608] border border-zinc-800/90 rounded-xl p-3 sm:p-4 font-mono text-xs text-zinc-300 overflow-x-auto max-h-[220px] scrollbar-thin w-full min-w-0 box-border">
                  <pre className="text-zinc-200 whitespace-pre leading-relaxed min-w-0">
                    {simulationOutput.codeSnippet}
                  </pre>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
