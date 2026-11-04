import React from 'react';
import { 
  Scissors, Zap, ShieldCheck, Terminal, FileCode2, Cpu, 
  Layers, CheckCircle2
} from 'lucide-react';
import { VSCODE_EXTENSION_FEATURES } from '../data/skillsData';

export default function FeaturesSection() {
  const iconMap = {
    Brain: Scissors,
    Zap: Zap,
    ShieldCheck: ShieldCheck,
    Terminal: Terminal,
    FileCode2: FileCode2,
    Cpu: Cpu
  };

  return (
    <section id="features-section" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-zinc-800/80 w-full overflow-hidden">
      <div className="max-w-3xl mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-mono tracking-wider">
          <span className="w-1.5 h-1.5 bg-zinc-300"></span>
          <span>SYSTEM ARCHITECTURE & CAPABILITIES</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
          Dirancang untuk Rekayasa Perangkat Lunak Skala Produksi
        </h2>
        <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-normal">
          Bukan sekadar autocomplete biasa. PutraCodeAi beroperasi sebagai agen otonom bernalar tinggi yang mengeksekusi suntingan bedah langsung di workspace Anda.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {VSCODE_EXTENSION_FEATURES.map((feature, idx) => {
          const Icon = iconMap[feature.icon] || Zap;
          return (
            <div 
              key={idx}
              id={feature.icon === 'ShieldCheck' ? 'security-card' : undefined}
              className="p-7 rounded-xl bg-[#090A0E] border border-zinc-800 hover:border-zinc-600 transition-all duration-300 space-y-5 group relative overflow-hidden w-full min-w-0 box-border"
            >
              <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-zinc-700 font-semibold select-none">
                SYS.0{idx + 1}
              </div>

              <div className="w-11 h-11 rounded-lg bg-[#12141C] border border-zinc-700 flex items-center justify-center text-zinc-200 shrink-0 group-hover:scale-105 transition-transform">
                <Icon className="w-5 h-5 text-zinc-200" />
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-bold text-white tracking-tight break-words">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed break-words">
                  {feature.description}
                </p>
              </div>

              <div className="pt-2 border-t border-zinc-900 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                <span>Status</span>
                <span className="text-zinc-300">Verified Active</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
