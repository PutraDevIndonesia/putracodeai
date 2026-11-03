import React, { useState } from 'react';
import { ExternalLink, Code2, Terminal, ShieldCheck, Zap, Cpu, Menu, X } from 'lucide-react';

export default function Navbar({ onDownload, marketplaceUrl }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="sticky top-0 z-50 px-4 lg:px-8 py-3.5 border-b border-zinc-800/80 bg-[#07080B]/90 backdrop-blur-md transition-colors">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand Logo & Name */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2.5 cursor-pointer group select-none"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg overflow-hidden border border-zinc-700 bg-black flex items-center justify-center shadow-sm group-hover:border-zinc-500 transition-colors shrink-0">
              <img 
                src="/logo.png" 
                alt="PutraCodeAi Logo" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-sm sm:text-base tracking-tight text-white">PutraCodeAi</span>
                <span className="text-[10px] font-mono font-medium px-1.5 py-0.5 rounded border border-zinc-800 bg-zinc-900 text-zinc-300 hidden xs:inline">
                  v2.4.0
                </span>
              </div>
              <p className="text-[10px] text-zinc-400 hidden sm:block font-mono">MPUTRARAMADHANI.putracodeai</p>
            </div>
          </div>

          {/* Center Nav Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-1 bg-zinc-900/60 border border-zinc-800 p-1 rounded-xl">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="px-3.5 py-1.5 rounded-lg text-xs font-medium text-zinc-300 hover:text-white hover:bg-zinc-800/60 transition-all flex items-center gap-1.5"
            >
              <Zap className="w-3.5 h-3.5 text-zinc-400" />
              <span>Overview</span>
            </button>

            <button
              onClick={() => scrollTo('skills-hub')}
              className="px-3.5 py-1.5 rounded-lg text-xs font-medium text-zinc-300 hover:text-white hover:bg-zinc-800/60 transition-all flex items-center gap-1.5"
            >
              <Cpu className="w-3.5 h-3.5 text-zinc-400" />
              <span>@Skills Hub</span>
              <span className="text-[10px] bg-zinc-800 text-zinc-300 px-1.5 py-0.2 rounded font-mono">12</span>
            </button>

            <button
              onClick={() => scrollTo('features-section')}
              className="px-3.5 py-1.5 rounded-lg text-xs font-medium text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/60 transition-all flex items-center gap-1.5"
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>Fitur</span>
            </button>

            <button
              onClick={() => scrollTo('install-guide')}
              className="px-3.5 py-1.5 rounded-lg text-xs font-medium text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/60 transition-all flex items-center gap-1.5"
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>Cara Pasang</span>
            </button>
          </nav>

          {/* Right CTA & Hamburger */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={onDownload}
              className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-xl bg-zinc-100 hover:bg-white text-zinc-950 font-semibold text-xs transition-all shadow-sm active:scale-95 group shrink-0"
              aria-label="Pasang dari Visual Studio Marketplace"
            >
              <ExternalLink className="w-3.5 h-3.5 text-zinc-950 group-hover:scale-105 transition-transform" />
              <span>VS Code Marketplace</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-200 hover:bg-zinc-800 transition-colors"
              aria-label="Buka menu navigasi"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar Overlay Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden bg-black/80 backdrop-blur-sm animate-fade-in flex">
          <div className="w-72 bg-[#0B0D12] border-r border-zinc-800 h-full p-6 flex flex-col justify-between shadow-2xl animate-slide-right">
            
            <div className="space-y-6">
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg overflow-hidden border border-zinc-700 bg-black flex items-center justify-center">
                    <img src="/logo.png" alt="Logo" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <span className="font-bold text-sm text-white block">PutraCodeAi</span>
                    <span className="text-[10px] font-mono text-zinc-400">Navigation Menu</span>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="space-y-2 font-medium text-sm">
                <button
                  onClick={() => scrollTo('top')}
                  className="w-full text-left px-3.5 py-2.5 rounded-xl bg-zinc-900/60 hover:bg-zinc-800 text-zinc-200 flex items-center gap-3 transition-colors"
                >
                  <Zap className="w-4 h-4 text-amber-400" />
                  <span>Overview</span>
                </button>

                <button
                  onClick={() => scrollTo('skills-hub')}
                  className="w-full text-left px-3.5 py-2.5 rounded-xl bg-zinc-900/60 hover:bg-zinc-800 text-zinc-200 flex items-center gap-3 transition-colors"
                >
                  <Cpu className="w-4 h-4 text-emerald-400" />
                  <span>@Skills Hub (12 Modul)</span>
                </button>

                <button
                  onClick={() => scrollTo('features-section')}
                  className="w-full text-left px-3.5 py-2.5 rounded-xl bg-zinc-900/60 hover:bg-zinc-800 text-zinc-200 flex items-center gap-3 transition-colors"
                >
                  <Code2 className="w-4 h-4 text-sky-400" />
                  <span>Fitur Utama</span>
                </button>

                <button
                  onClick={() => scrollTo('install-guide')}
                  className="w-full text-left px-3.5 py-2.5 rounded-xl bg-zinc-900/60 hover:bg-zinc-800 text-zinc-200 flex items-center gap-3 transition-colors"
                >
                  <Terminal className="w-4 h-4 text-emerald-400" />
                  <span>Cara Pasang</span>
                </button>
              </div>
            </div>

            {/* Drawer Bottom CTA */}
            <div className="pt-4 border-t border-zinc-800 space-y-3">
              <button
                onClick={() => { setMobileMenuOpen(false); onDownload(); }}
                className="w-full py-3 rounded-xl bg-zinc-100 hover:bg-white text-zinc-950 font-semibold text-xs flex items-center justify-center gap-2 shadow-md active:scale-95"
              >
                <ExternalLink className="w-4 h-4" />
                <span>VS Code Marketplace</span>
              </button>
              <p className="text-[10px] text-center font-mono text-zinc-500">
                MPUTRARAMADHANI.putracodeai
              </p>
            </div>

          </div>

          {/* Backdrop click to close */}
          <div 
            className="flex-1"
            onClick={() => setMobileMenuOpen(false)}
          />
        </div>
      )}
    </>
  );
}
