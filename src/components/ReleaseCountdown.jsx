import React, { useState, useEffect } from 'react';
import { Clock, CheckCircle2 } from 'lucide-react';

export default function ReleaseCountdown() {
  // Target time: Today at 14:00:00 (2:00 PM local time)
  const getTargetTime = () => {
    const target = new Date();
    target.setHours(14, 0, 0, 0);
    return target.getTime();
  };

  const [timeLeft, setTimeLeft] = useState(() => {
    const diff = getTargetTime() - new Date().getTime();
    return Math.max(0, diff);
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const remaining = getTargetTime() - new Date().getTime();
      if (remaining <= 0) {
        setTimeLeft(0);
        clearInterval(interval);
      } else {
        setTimeLeft(remaining);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Format time units
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  return (
    <div className="min-h-screen bg-[#07080B] text-slate-100 flex flex-col justify-between p-4 sm:p-6 lg:p-8 font-sans selection:bg-zinc-700 selection:text-white relative overflow-hidden">
      
      {/* Top Brand Bar */}
      <header className="max-w-6xl mx-auto w-full flex items-center justify-between pb-6 border-b border-zinc-800/80">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg overflow-hidden border border-zinc-700 bg-black flex items-center justify-center shadow-sm">
            <img src="/logo.png" alt="PutraCodeAi Logo" className="w-full h-full object-cover" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-base tracking-tight text-white">PutraCodeAi</span>
              <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded border border-zinc-800 bg-zinc-900 text-zinc-300">
                v2.4.0 Release
              </span>
            </div>
            <p className="text-[11px] text-zinc-500 font-mono">By M PUTRA RAMADHANI • mputraramadhani.id</p>
          </div>
        </div>
      </header>

      {/* Center Main Countdown Container */}
      <main className="max-w-3xl mx-auto w-full py-12 sm:py-20 text-center space-y-12">
        
        {/* Headline */}
        <div className="space-y-3.5">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Peluncuran Resmi Publik Dimulai Sebentar Lagi
          </h1>
          <p className="text-sm sm:text-base text-zinc-400 max-w-xl mx-auto leading-relaxed">
            Halaman showcase dan distribusi utama ekstensi VS Code <strong className="text-zinc-200">PutraCodeAi</strong> akan aktif otomatis tepat pada pukul <span className="font-mono text-white font-semibold">14:00 WIB siang ini</span>.
          </p>
        </div>

        {/* Monospace Countdown Digit Boxes */}
        <div className="grid grid-cols-3 gap-3 sm:gap-6 max-w-md mx-auto">
          
          {/* Hours */}
          <div className="bg-[#0B0D12] border border-zinc-800/90 rounded-2xl p-4 sm:p-6 space-y-1 shadow-lg flex flex-col items-center justify-center">
            <span className="font-mono text-3xl sm:text-5xl font-extrabold text-white tracking-wider">
              {String(hours).padStart(2, '0')}
            </span>
            <span className="text-[10px] sm:text-xs font-mono text-zinc-500 uppercase tracking-widest">
              Jam
            </span>
          </div>

          {/* Minutes */}
          <div className="bg-[#0B0D12] border border-zinc-800/90 rounded-2xl p-4 sm:p-6 space-y-1 shadow-lg flex flex-col items-center justify-center">
            <span className="font-mono text-3xl sm:text-5xl font-extrabold text-white tracking-wider">
              {String(minutes).padStart(2, '0')}
            </span>
            <span className="text-[10px] sm:text-xs font-mono text-zinc-500 uppercase tracking-widest">
              Menit
            </span>
          </div>

          {/* Seconds */}
          <div className="bg-[#0B0D12] border border-zinc-800/90 rounded-2xl p-4 sm:p-6 space-y-1 shadow-lg flex flex-col items-center justify-center">
            <span className="font-mono text-3xl sm:text-5xl font-extrabold text-emerald-400 tracking-wider">
              {String(seconds).padStart(2, '0')}
            </span>
            <span className="text-[10px] sm:text-xs font-mono text-zinc-500 uppercase tracking-widest">
              Detik
            </span>
          </div>

        </div>

        {/* Release Checklist Card */}
        <div className="max-w-md mx-auto bg-[#0B0D12] border border-zinc-800/90 rounded-2xl p-5 text-left space-y-3 font-mono text-xs shadow-md">
          <div className="flex items-center justify-between pb-2 border-b border-zinc-800 text-zinc-400">
            <span className="text-zinc-200 font-semibold">Status Tahapan Peluncuran</span>
            <span>98% Ready</span>
          </div>
          <div className="space-y-2 text-zinc-400 text-[11px]">
            <div className="flex items-center gap-2 text-zinc-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Verifikasi Paket VS Code Marketplace</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Inisialisasi 12 Modul Autonomous @skills</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Audit Keamanan & Surgical Diff Engine</span>
            </div>
            <div className="flex items-center gap-2 text-amber-300">
              <Clock className="w-3.5 h-3.5 animate-spin shrink-0 text-amber-400" />
              <span>Sinkronisasi Publik Pukul 14:00 WIB</span>
            </div>
          </div>
        </div>

      </main>

      {/* Bottom Footer Credits */}
      <footer className="max-w-6xl mx-auto w-full pt-6 border-t border-zinc-800/80 text-center text-zinc-500 text-[11px] font-mono">
        &copy; {new Date().getFullYear()} PutraCodeAi by <span className="text-zinc-300">M Putra Ramadhani</span>. MIT License.
      </footer>

    </div>
  );
}
