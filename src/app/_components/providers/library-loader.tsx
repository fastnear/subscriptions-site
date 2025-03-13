'use client';

import { useEffect, useState } from 'react';

interface LibraryLoaderProps {
  children: React.ReactNode;
  src: string;
  id?: string;
}

/**
 * A client component that dynamically loads an external JavaScript library
 * and makes it available globally across the application.
 */
export function LibraryLoader({
  children,
  src,
  id = 'external-library',
}: LibraryLoaderProps) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Check if the script is already loaded
    const existingScript = document.getElementById(id) as HTMLScriptElement;

    if (existingScript) {
      setLoaded(true);
      return;
    }

    // Create and append the script
    const script = document.createElement('script');
    script.src = src;
    script.id = id;
    script.async = false;

    // Handle successful loading
    script.onload = () => {
      console.log(`@fastnear/api loaded from ${src}`);
      setLoaded(true);
    };

    // Handle errors
    script.onerror = (event: ErrorEvent) => {
      console.error(`Error loading library: ${src}`, event);
      setError(`Failed to load library: ${event.message || 'Unknown error'}`);
    };

    document.head.appendChild(script);

    // Cleanup function
    return () => {
      // Only remove if we want to unmount the script when component unmounts
      // In most cases, you'll want to keep the script loaded
      // document.head.removeChild(script);
    };
  }, [src, id]);

  // You could render a loading state or error message here if needed
  return <>{children}</>;
}
