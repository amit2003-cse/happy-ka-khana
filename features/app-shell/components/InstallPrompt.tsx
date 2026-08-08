"use client";

import React from "react";
import { Download, X } from "lucide-react";
import { useInstallPrompt } from "../hooks/useInstallPrompt";

export function InstallPrompt() {
  const { isInstallable, promptInstall } = useInstallPrompt();
  const [dismissed, setDismissed] = React.useState(false);

  React.useEffect(() => {
    // Check localStorage for dismissal time
    const dismissedAt = localStorage.getItem("hkk_install_dismissed");
    if (dismissedAt) {
      const elapsed = Date.now() - parseInt(dismissedAt, 10);
      const threeDays = 3 * 24 * 60 * 60 * 1000;
      if (elapsed < threeDays) {
        setDismissed(true);
      }
    }
  }, []);

  if (!isInstallable || dismissed) return null;

  const handleDismiss = () => {
    setDismissed(true);
    localStorage.setItem("hkk_install_dismissed", Date.now().toString());
  };

  const handleInstall = async () => {
    const accepted = await promptInstall();
    if (!accepted) {
      handleDismiss();
    }
  };

  return (
    <div className="fixed bottom-20 left-4 right-4 z-[60] md:left-auto md:right-6 md:bottom-6 md:max-w-sm animate-fade-in-up">
      <div className="bg-brand-secondary text-white rounded-2xl p-4 shadow-2xl shadow-brand-secondary/30 border border-white/10 relative">
        {/* Close button */}
        <button
          onClick={handleDismiss}
          className="absolute top-3 right-3 h-7 w-7 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all"
          aria-label="Dismiss install prompt"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="flex items-start gap-3 pr-8">
          <div className="h-11 w-11 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
            <Download className="h-5 w-5 text-brand-primary" />
          </div>
          <div>
            <h4 className="text-sm font-bold font-heading">
              Install Happy Ka Khana App
            </h4>
            <p className="text-xs text-white/70 font-body mt-0.5 leading-relaxed">
              Home screen pe add karo — instant access, app jaisa feel!
            </p>
          </div>
        </div>

        <button
          onClick={handleInstall}
          className="w-full mt-3 py-2.5 bg-brand-primary hover:bg-brand-primary-hover text-white text-sm font-bold font-heading rounded-xl transition-all active:scale-95 shadow-md shadow-brand-primary/20"
        >
          Install App
        </button>
      </div>
    </div>
  );
}
