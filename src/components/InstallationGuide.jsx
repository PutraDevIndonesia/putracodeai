import React from 'react';
import { Terminal, Copy, Check, ExternalLink, Layers, CheckCircle2 } from 'lucide-react';
import { INSTALL_METHODS } from '../data/skillsData';

export default function InstallationGuide({ onCopyCommand, copied, marketplaceUrl }) {
  return (
    <section id="install-guide" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-zinc-800/80 w-full overflow-hidden">
      <div className="text-center max-w-2xl mx-auto space-y-3 sm:space-y-4 mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-mono tracking-wide">
          <span>GETTING STARTED</span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white tracking-tight">
          3 Metode Pemasangan Resmi
        </h2>
        <p className="text-sm sm:text-base text-zinc-400">
          Pilih cara pasang yang paling nyaman untuk lingkungan kerja Anda di Visual Studio Code.
        </p>
      </div>

      {/* Grid: 1 column on mobile/tablet (<1024px), 3 columns on large desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6 w-full">
        {INSTALL_METHODS.map((item) => (
          <div 
            key={item.id}
            className="p-5 sm:p-7 rounded-2xl bg-[#0B0D12] border border-zinc-800/90 flex flex-col justify-between space-y-5 hover:border-zinc-700 transition-all shadow-sm w-full min-w-0 overflow-hidden box-border"
          >
            <div className="space-y-3.5 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <span className="w-7 h-7 rounded-lg bg-zinc-900 text-zinc-300 font-mono text-xs font-bold flex items-center justify-center border border-zinc-700/80 shrink-0">
                  {item.step}
                </span>
                <span className="text-[10px] sm:text-[11px] font-mono text-zinc-400 bg-zinc-900/80 px-2.5 py-0.5 rounded border border-zinc-800 truncate">
                  {item.badge}
                </span>
              </div>
              <h3 className="text-base font-semibold text-white tracking-tight break-words">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed break-words">
                {item.desc}
              </p>
            </div>

            <div className="pt-2 w-full min-w-0">
              <div className="bg-[#060709] border border-zinc-800 p-2.5 sm:p-3 rounded-xl font-mono text-xs text-zinc-300 flex items-center justify-between gap-2 shadow-inner w-full min-w-0 overflow-hidden box-border">
                <div className="overflow-x-auto whitespace-nowrap scrollbar-none py-0.5 flex-1 min-w-0 pr-1">
                  <span className="select-all text-[11px] text-zinc-300">{item.command}</span>
                </div>
                
                {item.id === 'method-marketplace' ? (
                  <a
                    href={marketplaceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 shrink-0 transition-colors flex items-center justify-center"
                    title="Buka Marketplace"
                    aria-label="Buka halaman Marketplace resmi"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                ) : (
                  <button
                    onClick={() => onCopyCommand(item.command)}
                    className="p-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 shrink-0 transition-colors active:scale-95"
                    title="Salin perintah"
                    aria-label="Salin perintah"
                  >
                    {copied ? <Check className="w-4 h-4 text-zinc-200" /> : <Copy className="w-4 h-4 text-zinc-400" />}
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
