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
    <section id="features-section" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-zinc-800/80 w-full overflow-hidden">
      <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-mono tracking-wide">
          <span>ENGINEERING ARCHITECTURE</span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white tracking-tight">
          Dirancang untuk Rekayasa Perangkat Lunak Nyata
        </h2>
        <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-normal">
          Setiap fitur dibangun dengan standar presisi tinggi, keamanan eksekusi ketat, dan efisiensi alur kerja pengembang profesional.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
        {VSCODE_EXTENSION_FEATURES.map((feature, idx) => {
          const Icon = iconMap[feature.icon] || Zap;
          return (
            <div 
              key={idx}
              id={feature.icon === 'ShieldCheck' ? 'security-card' : undefined}
              className="p-6 sm:p-7 rounded-2xl bg-[#0B0D12] border border-zinc-800/90 hover:border-zinc-700 transition-all duration-200 space-y-4 group shadow-sm hover:shadow-md w-full min-w-0 overflow-hidden box-border"
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-700/80 flex items-center justify-center text-zinc-200 shrink-0">
                  <Icon className="w-4 h-4 text-zinc-200" />
                </div>
                <span className="text-[11px] font-mono text-zinc-600 font-semibold">
                  0{idx + 1}
                </span>
              </div>
              <h3 className="text-base font-semibold text-white tracking-tight break-words">
                {feature.title}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed break-words">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
