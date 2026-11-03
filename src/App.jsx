import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import DownloadSection from './components/DownloadSection';
import SkillsSection from './components/SkillsSection';
import FeaturesSection from './components/FeaturesSection';
import InstallationGuide from './components/InstallationGuide';
import Footer from './components/Footer';
import ReleaseCountdown from './components/ReleaseCountdown';
import { Check, Lock } from 'lucide-react';

const MARKETPLACE_URL = 'https://marketplace.visualstudio.com/items?itemName=MPUTRARAMADHANI.putracodeai';

export default function App() {
  const [copied, setCopied] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  // Target: Today at 14:00:00 (2:00 PM local time)
  const getTargetTimestamp = () => {
    const target = new Date();
    target.setHours(14, 0, 0, 0);
    return target.getTime();
  };

  // Check if countdown has finished or if developer preview bypass is requested
  const [isReleased, setIsReleased] = useState(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('preview') === 'true') return true;
    return new Date().getTime() >= getTargetTimestamp();
  });

  // Watch countdown interval
  useEffect(() => {
    if (isReleased) return;

    const timer = setInterval(() => {
      if (new Date().getTime() >= getTargetTimestamp()) {
        setIsReleased(true);
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [isReleased]);

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const handleCopyCommand = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    showToast(`Perintah berhasil disalin: "${text}"`);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownload = () => {
    window.open(MARKETPLACE_URL, '_blank', 'noopener,noreferrer');
    showToast('Membuka halaman resmi PutraCodeAi di Visual Studio Marketplace...');
  };

  // If countdown is not finished yet, show the countdown release gatekeeper page
  if (!isReleased) {
    return <ReleaseCountdown />;
  }

  // Full Landing Page (Shown after 14:00 or when Developer Bypass is clicked)
  return (
    <div className="min-h-screen bg-[#07080B] text-slate-100 flex flex-col font-sans selection:bg-zinc-700 selection:text-white">
      
      {/* Top Sticky Navigation */}
      <Navbar 
        onDownload={handleDownload} 
        marketplaceUrl={MARKETPLACE_URL}
      />

      {/* Main Content */}
      <main className="flex-1">
        <DownloadSection 
          onDownload={handleDownload}
          onCopyCommand={handleCopyCommand}
          copied={copied}
          marketplaceUrl={MARKETPLACE_URL}
        />
        <SkillsSection 
          onCopyCommand={handleCopyCommand}
          copied={copied}
        />
        <FeaturesSection />
        <InstallationGuide 
          onCopyCommand={handleCopyCommand}
          copied={copied}
          marketplaceUrl={MARKETPLACE_URL}
        />
      </main>

      {/* Global Footer */}
      <Footer 
        onDownload={handleDownload}
        marketplaceUrl={MARKETPLACE_URL}
      />

      {/* Floating Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 animate-bounce-in">
          <div className="bg-zinc-900 border border-zinc-700 text-zinc-100 px-4 py-3 rounded-xl shadow-2xl flex items-center gap-3 text-xs font-medium">
            <div className="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
              <Check className="w-3.5 h-3.5" />
            </div>
            <span className="truncate max-w-xs">{toastMessage}</span>
          </div>
        </div>
      )}

    </div>
  );
}
