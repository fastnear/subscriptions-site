'use client'

// TODO login/logout is currently mocked

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { ThemeToggle } from './theme-toggle';
import { useTheme } from 'next-themes';
import { THEME, THEME_ASSETS } from './theme-config';

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  // Avoid hydration mismatch by mounting after initial render
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLogin = () => {
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 2000); // Hide tooltip after 2 seconds
  };

  // During SSR and initial client render, show a neutral version or loading state
  if (!mounted) {
    return (
      <nav className="flex justify-between items-center px-8 py-4 bg-background text-foreground border-b border-foreground/10">
        <div className="flex items-center space-x-4">
          <div id="fn-logo">
            <Link href="/">
              <div className="w-[259px] h-[56px] bg-background" />
            </Link>
          </div>
          <Link href="/pricing" className="hover:underline">
            Pricing
          </Link>
        </div>
        <div className="flex items-center space-x-6">
          <div className="w-6 h-6" /> {/* Placeholder for theme toggle */}
        </div>
      </nav>
    );
  }

  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-background text-foreground border-b border-foreground/10">
      <div className="flex items-center space-x-4">
        <div id="fn-logo">
          <Link href="/">
            <Image
              src={resolvedTheme === THEME.DARK 
                ? THEME_ASSETS.logo[THEME.DARK]
                : THEME_ASSETS.logo[THEME.LIGHT]}
              alt="FASTNEAR Logo"
              width={259}
              height={56}
              priority
              className="logo"
            />
          </Link>
        </div>
        <Link href="/pricing" className="hover:underline">
          Pricing
        </Link>
      </div>

      <div className="flex items-center space-x-6">
        {isLoggedIn && (
          <Link href="/dashboard" className="hover:underline mr-4">
            Dashboard
          </Link>
        )}
        {!isLoggedIn ? (
          <div className="relative">
            <button
              onClick={handleLogin}
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
              className="text-muted cursor-wait opacity-80 hover:opacity-100 animate-pulse-fast mr-2"
            >
              Login
              {showTooltip && (
                <div className="absolute -top-19 right-3 text-foreground text-lg font-bold px-12 py-6 rounded-xl shadow-lg animate-text-glow-light dark:animate-text-glow-dark animate-pulse">
                  <span>so soon&trade;</span>
                </div>
              )}
            </button>
          </div>
        ) : (
          <button onClick={() => setIsLoggedIn(false)} className="hover:underline mr-4">
            Logout
          </button>
        )}
        <div className="flex items-center">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
