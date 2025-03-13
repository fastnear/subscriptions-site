'use client';

import Image from "next/image";
import FastNearLogo from "@/app/_components/fastnear-logo";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { THEME, THEME_ASSETS } from "@/app/_components/theme-config";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="landing-page min-h-screen bg-gradient-to-b from-white to-white/95 dark:from-gray-900 dark:to-gray-900/95">
      {/* Hero Section with subtle gradient overlay */}
      <div className="landing-hero relative overflow-hidden">
        <div className="landing-hero__gradient absolute inset-0 bg-gradient-to-br from-slate-100/[0.02] via-transparent to-slate-300/[0.02] dark:from-slate-200/[0.02] dark:to-slate-400/[0.02]" />

        <div className="landing-hero__container relative grid grid-rows-[auto_1fr_auto] items-center justify-items-center p-4 sm:p-8 md:p-12 lg:p-20 font-sans">
          <main className="landing-content relative flex flex-col gap-6 sm:gap-8 row-start-2 items-center w-full max-w-[90%] sm:max-w-xl mx-auto">
            {/* Logo section with enhanced spacing */}
            <div className="landing-logo flex justify-center mb-6 sm:mb-8 w-auto max-w-[80%]">
              <div className="landing-logo__wrapper relative w-full max-w-[280px] sm:max-w-none">
                <div className="landing-logo__glow absolute -inset-4 bg-gradient-to-r from-slate-100/[0.02] to-slate-300/[0.02] dark:from-slate-200/[0.02] dark:to-slate-400/[0.02] blur-lg" />
                <FastNearLogo />
              </div>
            </div>

            {/* Main content with refined spacing and shadows */}
            <div className="landing-content__main space-y-8 sm:space-y-12 w-full">
              <div className="landing-heading relative">
                <h1 className="landing-heading__title text-3xl sm:text-4xl md:text-5xl font-bold heading-themed leading-tight">
                  Access the fastest RPC for NEAR Protocol
                </h1>
                <div className="landing-heading__glow absolute -inset-x-4 sm:-inset-x-6 -inset-y-4 bg-gradient-to-r from-slate-100/[0.02] via-transparent to-slate-300/[0.02] dark:from-slate-200/[0.02] dark:to-slate-400/[0.02] blur-sm -z-10" />
              </div>

              <div className="landing-text space-y-4 sm:space-y-6 sm:text-left">
                <p className="landing-text__paragraph text-base sm:text-lg text-slate-700 dark:text-gray-200">
                  Start building with the best tools available for NEAR Protocol. Our platform offers freemium and paid plans to suit your needs.
                </p>

                <p className="landing-text__paragraph text-base sm:text-lg text-slate-700 dark:text-gray-200">
                  Freemium and paid plans are available. Log in with your account to begin the process.
                </p>
              </div>

              {/* GitHub section with enhanced visual treatment */}
              <div className="landing-github relative mt-6 sm:mt-8 p-4 sm:p-6 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-slate-200/50 dark:border-gray-700/50 shadow-[0_8px_16px_-6px_rgba(0,0,0,0.05)]">
                <div className="landing-github__content flex flex-col sm:flex-row items-center gap-4 sm:gap-3 sm:text-left">
                  <a href="https://github.com/fastnear"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="landing-github__link transition-transform hover:scale-110 focus:scale-110 focus:outline-none"
                    aria-label="Visit FASTNEAR GitHub">
                    <Image
                      src={mounted ? THEME_ASSETS.github[resolvedTheme === THEME.DARK ? THEME.DARK : THEME.LIGHT] : THEME_ASSETS.github[THEME.LIGHT]}
                      alt=""
                      width={32}
                      height={32}
                    />
                  </a>
                  <span className="landing-github__text text-sm sm:text-base text-slate-700 dark:text-gray-200">
                    Visit the FASTNEAR GitHub organization for open-source contributions.
                  </span>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
