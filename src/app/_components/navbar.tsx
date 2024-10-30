'use client'

// TODO login/logout is currently mocked

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const handleLogin = () => {
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 2000); // Hide tooltip after 2 seconds
  };

  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-black text-white">
      <div className="flex items-center space-x-4">
        <div id="fn-logo">
          <a href="/">
            <Image
              src="/fastnear_logo_white.png"
              alt="FASTNEAR Logo"
              width={259}
              height={56}
              priority
              className="logo"
            />
          </a>
        </div>
        <Link href="/pricing" className="hover:underline">
          Pricing
        </Link>
      </div>

      <div className="flex space-x-4 items-center relative">
        {isLoggedIn && (
          <Link href="/dashboard" className="hover:underline">
            Dashboard
          </Link>
        )}
        {!isLoggedIn ? (
          <button
            onClick={handleLogin}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            className="relative text-gray-400 cursor-wait opacity-80 hover:opacity-100 animate-pulse-fast"
          >
            Login
            {showTooltip && (
              <div className="absolute -top-19 right-3  text-white text-lg font-bold px-12 py-6 rounded-xl shadow-lg animate-text-glow animate-pulse"><span>so soon&trade;</span></div>
            )}
          </button>
        ) : (
          <button onClick={() => setIsLoggedIn(false)} className="hover:underline">
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}
