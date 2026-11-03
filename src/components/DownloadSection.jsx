import React, { useState } from 'react';
import { 
  Download, Copy, Check, Terminal, Shield, ArrowRight, 
  Code2, Cpu, CheckCircle2, ChevronRight, Play, Eye, FileCode,
  Layers, Zap, Bug, Sparkles, ExternalLink
} from 'lucide-react';

export default function DownloadSection({ onDownload, onCopyCommand, copied, marketplaceUrl }) {
  const [activePreviewTab, setActivePreviewTab] = useState('diff');
  const [downloadModal, setDownloadModal] = useState(false);

  const handleDownloadClick = () => {
    onDownload();
    setDownloadModal(true);
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-8 sm:pt-12 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Hero Container */}
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Column: Headline & Action Buttons */}
        <div className="lg:col-span-7 space-y-5 sm:space-y-6">
          
          {/* Badge Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/90 text-zinc-300 text-[11px] sm:text-xs font-mono shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0"></span>
            <span className="truncate">MPUTRARAMADHANI.putracodeai</span>
          </div>

          {/* Main Title */}
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15]">
            AI Coding Assistant Presisi Tinggi <span className="text-zinc-400 font-normal">untuk VS Code</span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-2xl font-normal">
            Platform rekayasa perangkat lunak otonom. Dirancang untuk eksekusi bedah (surgical edits), 
            debugging sistematis berbasis akar masalah, dan verifikasi otomatis tanpa regresi.
          </p>

          {/* Action CTAs */}
          <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <button
              onClick={handleDownloadClick}
              className="px-5 sm:px-6 py-3.5 rounded-xl bg-zinc-100 hover:bg-white text-zinc-950 font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-2.5 shadow-sm active:scale-95 group"
              aria-label="Pasang dari Visual Studio Marketplace"
            >
              <ExternalLink className="w-4 h-4 text-zinc-950 group-hover:scale-105 transition-transform shrink-0" />
              <span>Pasang dari VS Code Marketplace</span>
              <span className="text-[10px] sm:text-[11px] bg-zinc-300/80 text-zinc-900 px-2 py-0.5 rounded font-mono font-medium">
                Free / MIT
              </span>
            </button>

            <button
              onClick={() => scrollTo('features-section')}
              className="px-5 py-3.5 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 border border-zinc-800 font-medium text-xs sm:text-sm transition-all flex items-center justify-center gap-2 active:scale-95"
            >
              <span>Eksplor Fitur</span>
              <ChevronRight className="w-4 h-4 text-zinc-400" />
            </button>
          </div>

          {/* Quick CLI Command Box */}
          <div className="pt-2">
            <p className="text-[11px] sm:text-xs font-mono text-zinc-400 mb-2">
              VS CODE QUICK OPEN (Ctrl+P / Cmd+P):
            </p>
            <div className="flex items-center justify-between gap-2.5 bg-[#0B0D12] border border-zinc-800 rounded-xl px-3.5 py-2.5 max-w-xl shadow-inner">
              <div className="font-mono text-xs text-zinc-200 overflow-x-auto whitespace-nowrap scrollbar-none py-0.5">
                <span className="text-zinc-500 select-none">&gt; </span>
                <span>ext install MPUTRARAMADHANI.putracodeai</span>
              </div>
              <button
                onClick={() => onCopyCommand('ext install MPUTRARAMADHANI.putracodeai')}
                className="flex items-center gap-1 text-[11px] font-medium px-2.5 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 transition-all shrink-0 active:scale-95 font-mono"
                aria-label="Salin perintah Quick Open"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Tersalin</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-zinc-400" />
                    <span>Salin</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Quick Specs / Compatibility Badges */}
          <div className="pt-1 grid grid-cols-2 gap-2 text-[11px] sm:text-xs text-zinc-400 font-mono">
            <div className="flex items-center gap-1.5 bg-[#0B0D12] border border-zinc-800 px-3 py-2 rounded-lg">
              <CheckCircle2 className="w-3.5 h-3.5 text-zinc-300 shrink-0" />
              <span className="truncate">VS Code v1.85+</span>
            </div>
            <div className="flex items-center gap-1.5 bg-[#0B0D12] border border-zinc-800 px-3 py-2 rounded-lg">
              <CheckCircle2 className="w-3.5 h-3.5 text-zinc-300 shrink-0" />
              <span className="truncate">Windows / macOS / Linux</span>
            </div>
          </div>

        </div>

        {/* Right Column: Prominent Logo Card & Identity Showcase */}
        <div className="lg:col-span-5 flex flex-col items-center w-full">
          <div className="relative w-full max-w-md p-5 sm:p-6 rounded-2xl bg-[#0B0D12] border border-zinc-800 shadow-xl">
            
            {/* Logo Centerpiece */}
            <div className="relative mx-auto w-40 h-40 sm:w-48 sm:h-48 rounded-xl overflow-hidden border border-zinc-700 bg-black flex items-center justify-center shadow-inner">
              <img 
                src="/logo.png" 
                alt="PutraCodeAi Official Logo Monogram P Metalik" 
                className="w-full h-full object-cover" 
              />
            </div>

            {/* Product Card Details */}
            <div className="mt-4 text-center space-y-1">
              <h2 className="text-base sm:text-lg font-bold text-white tracking-tight">PutraCodeAi</h2>
              <p className="text-[11px] sm:text-xs font-mono text-zinc-400 truncate">MPUTRARAMADHANI.putracodeai</p>
            </div>

            {/* Feature Highlights on Card */}
            <div className="mt-4 pt-4 border-t border-zinc-800 space-y-2 text-[11px] sm:text-xs font-mono">
              <div className="flex items-center justify-between text-zinc-300 py-1 border-b border-zinc-900">
                <span className="text-zinc-500">Publisher</span>
                <span className="text-zinc-200 font-medium truncate ml-2">M PUTRA RAMADHANI</span>
              </div>
              <div className="flex items-center justify-between text-zinc-300 py-1 border-b border-zinc-900">
                <span className="text-zinc-500">Arsitektur</span>
                <span className="text-zinc-300">Surgical In-Place Edits</span>
              </div>
              <div className="flex items-center justify-between text-zinc-300 py-1">
                <span className="text-zinc-500">Lisensi</span>
                <span className="text-zinc-200">MIT Open Source</span>
              </div>
            </div>

            {/* Fast Trigger Button */}
            <div className="mt-4">
              <button
                onClick={handleDownloadClick}
                className="w-full py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-100 font-medium text-xs flex items-center justify-center gap-2 transition-colors border border-zinc-700 active:scale-95"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Buka Marketplace Resmi</span>
              </button>
            </div>

          </div>
        </div>

      </div>

      {/* Interactive VS Code Editor Mockup Section */}
      <div className="mt-16 sm:mt-24 pt-8 sm:pt-10 border-t border-zinc-800/80">
        
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 space-y-2.5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-mono">
            <span>LIVE INTERACTIVE PREVIEW</span>
          </div>
          <h2 className="text-xl sm:text-3xl font-bold text-white tracking-tight">
            Bagaimana PutraCodeAi Bekerja di VS Code Anda
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400">
            Simulasi nyata alur kerja: instruksi prompt, suntingan kode bedah, pencegahan celah keamanan, dan verifikasi otomatis.
          </p>
        </div>

        {/* VS Code Window Shell */}
        <div className="rounded-2xl overflow-hidden border border-zinc-800 bg-[#0B0D12] shadow-2xl max-w-6xl mx-auto w-full">
          
          {/* Top Titlebar */}
          <div className="bg-[#12141A] px-3 sm:px-4 py-2.5 border-b border-zinc-800 flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
              <span className="ml-2 text-[11px] sm:text-xs text-zinc-400 font-mono truncate max-w-[200px] sm:max-w-none">
                VS Code — PutraCodeAi [MPUTRARAMADHANI.putracodeai]
              </span>
            </div>

            {/* Interactive Preview Switcher Tabs */}
            <div className="flex items-center gap-1 bg-zinc-900 border border-zinc-800 p-0.5 rounded-lg text-[11px] sm:text-xs font-mono overflow-x-auto max-w-full scrollbar-none">
              <button
                onClick={() => setActivePreviewTab('diff')}
                className={`px-2.5 py-1 rounded transition-colors whitespace-nowrap ${
                  activePreviewTab === 'diff' ? 'bg-zinc-800 text-white font-semibold' : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                1. Suntingan Bedah
              </button>
              <button
                onClick={() => setActivePreviewTab('debug')}
                className={`px-2.5 py-1 rounded transition-colors whitespace-nowrap ${
                  activePreviewTab === 'debug' ? 'bg-zinc-800 text-white font-semibold' : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                2. Debug
              </button>
              <button
                onClick={() => setActivePreviewTab('security')}
                className={`px-2.5 py-1 rounded transition-colors whitespace-nowrap ${
                  activePreviewTab === 'security' ? 'bg-zinc-800 text-white font-semibold' : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                3. Keamanan
              </button>
              <button
                onClick={() => setActivePreviewTab('terminal')}
                className={`px-2.5 py-1 rounded transition-colors whitespace-nowrap ${
                  activePreviewTab === 'terminal' ? 'bg-zinc-800 text-white font-semibold' : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                4. Terminal
              </button>
            </div>
          </div>

          {/* Main Body: Activity Bar + Sidebar + Editor Area */}
          <div className="grid grid-cols-12 min-h-[380px] sm:min-h-[420px]">
            
            {/* 1. Left Narrow Activity Bar (VS Code icons) */}
            <div className="col-span-1 hidden md:flex flex-col items-center justify-between py-3 bg-[#07080B] border-r border-zinc-800">
              <div className="flex flex-col items-center gap-4 text-zinc-600">
                <FileCode className="w-5 h-5 hover:text-zinc-300 cursor-pointer" />
                <Code2 className="w-5 h-5 hover:text-zinc-300 cursor-pointer" />
                <Layers className="w-5 h-5 hover:text-zinc-300 cursor-pointer" />
                
                {/* Active PutraCodeAi Icon */}
                <div className="relative p-1 rounded-lg bg-zinc-800 border border-zinc-600 cursor-pointer" title="PutraCodeAi Assistant">
                  <div className="w-6 h-6 rounded overflow-hidden bg-black">
                    <img src="/logo.png" alt="PutraCodeAi Icon" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
              <div className="text-zinc-600">
                <Cpu className="w-5 h-5" />
              </div>
            </div>

            {/* 2. PutraCodeAi AI Sidebar Panel (4 cols) */}
            <div className="col-span-12 md:col-span-4 bg-[#0E1016] border-r border-zinc-800 p-3.5 sm:p-4 flex flex-col justify-between">
              
              <div className="space-y-3.5">
                {/* Panel Header */}
                <div className="flex items-center justify-between pb-2.5 border-b border-zinc-800">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded overflow-hidden bg-black border border-zinc-700 shrink-0">
                      <img src="/logo.png" alt="P" className="w-full h-full object-cover" />
                    </div>
                    <span className="font-bold text-[11px] sm:text-xs text-white font-mono truncate">PUTRACODEAI ASSISTANT</span>
                  </div>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-300 shrink-0">
                    Active
                  </span>
                </div>

                {/* Session Context Info */}
                <div className="text-[11px] sm:text-xs bg-[#07080B] border border-zinc-800 rounded-lg p-2.5 space-y-1 font-mono">
                  <div className="flex items-center justify-between text-zinc-400">
                    <span>Memori Sesi:</span>
                    <span className="text-zinc-200">PROGRESS.md</span>
                  </div>
                  <div className="flex items-center justify-between text-zinc-400">
                    <span>Arsitektur:</span>
                    <span className="text-zinc-200">Surgical In-Place</span>
                  </div>
                </div>

                {/* Chat Flow Scenario based on tab */}
                {activePreviewTab === 'diff' && (
                  <div className="space-y-2.5 text-xs">
                    <div className="bg-[#07080B] border border-zinc-800 rounded-lg p-2.5 text-zinc-300">
                      <p className="font-semibold text-zinc-200 text-[11px] mb-1 font-mono">User Prompt:</p>
                      <p className="text-[11px] sm:text-xs">"Refactor fungsi pemrosesan transaksi agar menggunakan pola early-return tanpa nested if-else."</p>
                    </div>
                    <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-2.5 text-zinc-300 space-y-1">
                      <div className="flex items-center gap-1.5 text-zinc-200 font-semibold text-[11px] font-mono">
                        <CheckCircle2 className="w-3.5 h-3.5 text-zinc-300 shrink-0" />
                        <span>Analisis Selesai</span>
                      </div>
                      <p className="text-[11px] text-zinc-400">
                        Menemukan 4 level nested conditionals. Mengganti dengan guard clauses secara presisi.
                      </p>
                    </div>
                  </div>
                )}

                {activePreviewTab === 'debug' && (
                  <div className="space-y-2.5 text-xs">
                    <div className="bg-[#07080B] border border-zinc-800 rounded-lg p-2.5 text-zinc-300">
                      <p className="font-semibold text-zinc-200 text-[11px] mb-1 font-mono">User Prompt:</p>
                      <p className="text-zinc-200 text-[11px] sm:text-xs">"Selesaikan bug render berulang di tabel transaksi saat state diperbarui."</p>
                    </div>
                    <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-2.5 text-zinc-300 space-y-1">
                      <div className="flex items-center gap-1.5 text-zinc-200 font-semibold text-[11px] font-mono">
                        <Bug className="w-3.5 h-3.5 text-zinc-300 shrink-0" />
                        <span>Akar Masalah Ditemukan</span>
                      </div>
                      <p className="text-[11px] text-zinc-400">
                        Menambahkan useMemo dan useCallback untuk stabilisasi referensi memori.
                      </p>
                    </div>
                  </div>
                )}

                {activePreviewTab === 'security' && (
                  <div className="space-y-2.5 text-xs">
                    <div className="bg-[#07080B] border border-zinc-800 rounded-lg p-2.5 text-zinc-300">
                      <p className="font-semibold text-zinc-200 text-[11px] mb-1 font-mono">User Prompt:</p>
                      <p className="text-[11px] sm:text-xs">"Periksa keamanan endpoint otentikasi dari kemungkinan celah injection."</p>
                    </div>
                    <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-2.5 text-zinc-300 space-y-1">
                      <div className="flex items-center gap-1.5 text-zinc-200 font-semibold text-[11px] font-mono">
                        <Shield className="w-3.5 h-3.5 text-zinc-300 shrink-0" />
                        <span>Audit OWASP: 0 Vulnerabilities</span>
                      </div>
                      <p className="text-[11px] text-zinc-400">
                        Seluruh parameter input telah disanitasi.
                      </p>
                    </div>
                  </div>
                )}

                {activePreviewTab === 'terminal' && (
                  <div className="space-y-2.5 text-xs">
                    <div className="bg-[#07080B] border border-zinc-800 rounded-lg p-2.5 text-zinc-300">
                      <p className="font-semibold text-zinc-200 text-[11px] mb-1 font-mono">Verifikasi Otomatis:</p>
                      <code className="text-zinc-200 font-mono text-[11px]">npm run test && npm run lint</code>
                    </div>
                    <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-2.5 text-zinc-300 space-y-1">
                      <div className="flex items-center gap-1.5 text-zinc-200 font-semibold text-[11px] font-mono">
                        <CheckCircle2 className="w-3.5 h-3.5 text-zinc-300 shrink-0" />
                        <span>Test Suite: 14 Passed</span>
                      </div>
                      <p className="text-[11px] text-zinc-400">
                        Catatan otomatis diperbarui ke PROGRESS.md.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Input Field Mockup */}
              <div className="pt-2.5 border-t border-zinc-800 mt-3">
                <div className="flex items-center gap-2 bg-[#07080B] border border-zinc-800 rounded-lg px-2.5 py-2 text-[11px] text-zinc-500 font-mono">
                  <span className="truncate">Ketik instruksi coding...</span>
                </div>
              </div>

            </div>

            {/* 3. Editor Code Diff & Results Area (7 cols) */}
            <div className="col-span-12 md:col-span-7 bg-[#0B0D12] p-3.5 sm:p-4 flex flex-col justify-between font-mono text-xs overflow-x-auto">
              
              {/* Tab Header for Code Pane */}
              <div className="flex items-center justify-between pb-2.5 border-b border-zinc-800 text-zinc-400">
                <div className="flex items-center gap-2">
                  <span className="text-zinc-200 font-medium truncate text-[11px] sm:text-xs">
                    {activePreviewTab === 'diff' && 'src/services/orderProcessor.ts'}
                    {activePreviewTab === 'debug' && 'src/components/TransactionTable.tsx'}
                    {activePreviewTab === 'security' && 'src/api/authValidator.ts'}
                    {activePreviewTab === 'terminal' && 'Integrated Terminal'}
                  </span>
                </div>
                <span className="text-[10px] sm:text-[11px] text-zinc-500 shrink-0">TypeScript</span>
              </div>

              {/* Code Contents */}
              <div className="py-3 space-y-1 overflow-x-auto text-[11px] sm:text-xs">
                {activePreviewTab === 'diff' && (
                  <div className="space-y-1 whitespace-nowrap">
                    <p className="text-zinc-500">// Suntingan Bedah: Mengeliminasi 4 level nested conditionals</p>
                    <div className="bg-zinc-900/60 text-zinc-400 px-2 py-0.5 rounded border-l-2 border-zinc-500">
                      - if (user) &#123; if (order) &#123; if (order.isValid) &#123; return execute(order); &#125; &#125; &#125;
                    </div>
                    <div className="bg-zinc-900 text-zinc-200 px-2 py-0.5 rounded border-l-2 border-zinc-300">
                      + if (!user || !order?.isValid) return &#123; status: 'invalid' &#125;;
                    </div>
                    <div className="bg-zinc-900 text-zinc-200 px-2 py-0.5 rounded border-l-2 border-zinc-300">
                      + return execute(order);
                    </div>
                    <p className="text-zinc-500 pt-2">// 100% Zero Regression</p>
                  </div>
                )}

                {activePreviewTab === 'debug' && (
                  <div className="space-y-1 whitespace-nowrap">
                    <p className="text-zinc-500">// Solusi Debug: Memoisasi kalkulasi</p>
                    <div className="bg-zinc-900/60 text-zinc-400 px-2 py-0.5 rounded border-l-2 border-zinc-500">
                      - const rows = list.map(item =&gt; heavyCompute(item, filter));
                    </div>
                    <div className="bg-zinc-900 text-zinc-200 px-2 py-0.5 rounded border-l-2 border-zinc-300">
                      + const rows = useMemo(() =&gt; list.map(item =&gt; heavyCompute(item, filter)), [list, filter]);
                    </div>
                    <p className="text-zinc-500 pt-2">// 60 FPS stabil</p>
                  </div>
                )}

                {activePreviewTab === 'security' && (
                  <div className="space-y-1 whitespace-nowrap">
                    <p className="text-zinc-500">// Sanitasi Argumen Perintah</p>
                    <p className="text-zinc-300"><span className="text-zinc-500">import</span> &#123; execFile &#125; <span className="text-zinc-500">from</span> <span className="text-zinc-300">'node:child_process'</span>;</p>
                    <p className="text-zinc-300"><span className="text-zinc-500">export function</span> <span className="text-zinc-200">safeRun</span>(cmd, safeArgs) &#123;</p>
                    <p className="text-zinc-300 ml-4"><span className="text-zinc-500">return</span> <span className="text-zinc-500">new</span> Promise((res, rej) =&gt; execFile(cmd, safeArgs, (err, out) =&gt; err ? rej(err) : res(out)));</p>
                    <p className="text-zinc-300">&#125;</p>
                  </div>
                )}

                {activePreviewTab === 'terminal' && (
                  <div className="space-y-1 text-zinc-300 bg-[#060709] p-2.5 rounded-lg border border-zinc-800 whitespace-nowrap">
                    <p className="text-zinc-200">$ vitest run --silent</p>
                    <p className="text-zinc-400">✓ tests/surgical-edit.test.ts (6 tests) 14ms</p>
                    <p className="text-zinc-400">✓ tests/security-audit.test.ts (8 tests) 18ms</p>
                    <p className="text-zinc-200 font-bold">Test Files  2 passed (2)</p>
                  </div>
                )}
              </div>

              {/* Bottom Statusbar */}
              <div className="pt-2.5 border-t border-zinc-800 text-[10px] sm:text-[11px] flex items-center justify-between text-zinc-500 font-mono">
                <div className="flex items-center gap-2">
                  <span className="text-zinc-300 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-zinc-300" />
                    <span>Sync Clean</span>
                  </span>
                </div>
                <span>UTF-8</span>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Download / Marketplace Redirect Modal */}
      {downloadModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-[#0B0D12] border border-zinc-800 rounded-2xl max-w-md w-full p-6 space-y-5 shadow-2xl relative">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-black border border-zinc-700 overflow-hidden flex items-center justify-center shrink-0">
                <img src="/logo.png" alt="P" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">Visual Studio Marketplace</h3>
                <p className="text-xs font-mono text-zinc-400">MPUTRARAMADHANI.putracodeai</p>
              </div>
            </div>

            <div className="bg-[#060709] border border-zinc-800 rounded-xl p-4 text-xs space-y-3">
              <div className="flex items-center gap-2 text-zinc-200 font-medium font-mono">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-zinc-300" />
                <span>Membuka halaman resmi Marketplace...</span>
              </div>
              <p className="text-zinc-300 leading-relaxed">
                Anda dapat langsung menekan tombol <strong className="text-white">"Install"</strong> di halaman Marketplace, atau gunakan Quick Open dengan menekan <code className="text-zinc-200 bg-zinc-900 px-1.5 py-0.5 rounded font-mono text-[11px]">Ctrl+P</code>:
              </p>
              <div className="bg-black border border-zinc-800 p-2.5 rounded-lg font-mono text-zinc-200 flex items-center justify-between gap-2">
                <span className="text-[11px] truncate">ext install MPUTRARAMADHANI.putracodeai</span>
                <button
                  onClick={() => onCopyCommand('ext install MPUTRARAMADHANI.putracodeai')}
                  className="text-[11px] bg-zinc-800 hover:bg-zinc-700 px-2 py-1 rounded text-zinc-200 shrink-0 font-mono"
                >
                  Salin
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <a
                href={marketplaceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-zinc-300 hover:text-white flex items-center gap-1 font-mono underline"
              >
                <span>Buka Link Langsung</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <button
                onClick={() => setDownloadModal(false)}
                className="px-4 py-2 rounded-lg bg-zinc-100 hover:bg-white text-zinc-950 font-semibold text-xs transition-colors"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
