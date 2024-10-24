'use client'

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(!isLoggedIn); // Toggle login state for simplicity
    };

    return (
        <nav className="flex justify-between items-center px-8 py-4 bg-black text-white">
            <div className="flex space-x-4">
                <Link href="/pricing">
                    Pricing
                </Link>
                {isLoggedIn && (
                    <Link href="/dashboard">
                        Dashboard
                    </Link>
                )}
            </div>

            <div className="space-x-4">
                {!isLoggedIn ? (
                    <button onClick={handleLogin} className="hover:underline">
                        Login
                    </button>
                ) : (
                    <button onClick={handleLogin} className="hover:underline">
                        Logout
                    </button>
                )}
            </div>
        </nav>
    );
}
