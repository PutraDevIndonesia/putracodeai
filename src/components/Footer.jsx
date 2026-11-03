import React from 'react';
import { ExternalLink, ArrowUp } from 'lucide-react';

export default function Footer({ onDownload, marketplaceUrl }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-zinc-800/80 bg-[#050608] text-zinc-400 text-xs py-16 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Top Footer Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-zinc-900">
          
          {/* Brand & Identity */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg overflow-hidden border border-zinc-800 bg-black flex items-center justify-center">
              <img src="/logo.png" alt="PutraCodeAi Logo" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-base text-white">PutraCodeAi</span>
                <span className="font-mono text-[10px] bg-zinc-900 border border-zinc-800 px-1.5 py-0.5 rounded text-zinc-300">v2.4.0</span>
              </div>
              <p className="text-[11px] text-zinc-500 font-mono">
                MPUTRARAMADHANI.putracodeai
              </p>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center gap-6 text-zinc-400 font-medium">
            <a 
              href={marketplaceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5 text-zinc-200"
            >
              <span>VS Code Marketplace</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <button 
              onClick={() => scrollTo('skills-hub')}
              className="hover:text-white transition-colors"
            >
              @Skills Hub
            </button>
            <button 
              onClick={() => scrollTo('features-section')}
              className="hover:text-white transition-colors"
            >
              Fitur Ekstensi
            </button>
            <button 
              onClick={() => scrollTo('install-guide')}
              className="hover:text-white transition-colors"
            >
              Cara Pasang
            </button>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 transition-colors shadow-sm active:scale-95 font-mono"
            aria-label="Kembali ke bagian paling atas halaman"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>

        </div>

        {/* Bottom Credits */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-500 text-[11px] font-mono">
          <div>
            &copy; {new Date().getFullYear()} PutraCodeAi. Dikembangkan oleh <span className="text-zinc-300 font-semibold">M Putra Ramadhani</span> (<a href="https://mputraramadhani.id" target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-white underline">mputraramadhani.id</a>). MIT License.
          </div>
          <div className="flex items-center gap-4 text-zinc-500">
            <span>VS Code Extension</span>
            <span>•</span>
            <span className="text-zinc-400">Zero AI Slop Design</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
