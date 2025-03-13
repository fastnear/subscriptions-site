# Subscriptions site

This is a NextJS 15 project that is currently a landing page where users can sign up (via external form) for the FASTNEAR free tier. There's also an external page linking to a Stripe landing page for a recurring subscription.

Some plan details are defined here:

    src/app/pricing/_logic/plan-types.ts

Single-sign on and API keys and auth is all part of this, but there will be an initial push of interest during November that this site is meant to capture.

## Do it

    yarn
    yarn dev

## External Libraries

This project uses a client component wrapper approach to load external JavaScript libraries (like our IIFE-compiled libraries) across all pages.

### Using the LibraryLoader

The `LibraryLoader` component dynamically injects scripts into the document head and makes them available globally:

```tsx
// In layout.tsx
<LibraryLoader 
  src="/lib/near.js" 
  id="fastnear-lib"
>
  {children}
</LibraryLoader>
```

### How to Add Your Own Library

1. Place your compiled library in the `/public/lib/` directory
2. Add the LibraryLoader to your layout with the appropriate src path
3. Access your library through the window object in client components:

```tsx
'use client';

import { useEffect } from 'react';

export function MyComponent() {
  useEffect(() => {
    // Check if library is available
    if (typeof window !== 'undefined' && window.YourLibrary) {
      // Use your library
      window.YourLibrary.doSomething();
    }
  }, []);
  
  return <div>My Component</div>;
}
```

### TypeScript Support

For TypeScript support, add type declarations in `src/types`:

```typescript
// src/types/your-library.d.ts
interface YourLibraryType {
  doSomething: () => void;
  // Add other methods and properties
}

declare global {
  interface Window {
    YourLibrary: YourLibraryType;
  }
}

export {};
```

## Contribution guide

Don't add any extra fancy stuff. Well okay every once in a while, but be mindful.

# FASTNEAR Subscriptions

## Theme System

Our application uses [next-themes](https://github.com/pacocoursey/next-themes) for theme management, with a centralized configuration in `src/app/_components/theme-config.ts`.

### Key Features

- System theme detection
- Persistent theme selection
- SSR compatible
- No flash on load

### Usage

#### Theme Constants

```typescript
import { THEME, THEME_ASSETS } from '@/app/_components/theme-config';

// Use theme constants instead of string literals
const isDark = theme === THEME.DARK;
```

#### Theme-Aware Components

1. Use the `useTheme` hook with `resolvedTheme` for accurate theme detection:
```typescript
const { resolvedTheme } = useTheme();

// This considers system preferences
if (resolvedTheme === THEME.DARK) {
  // Dark theme logic
}
```

2. Handle SSR hydration:
```typescript
const [mounted, setMounted] = useState(false);
useEffect(() => setMounted(true), []);

// Return null or placeholder during SSR
if (!mounted) return null;
```

3. Use theme-aware assets:
```typescript
// Assets are configured in theme-config.ts
const logoSrc = THEME_ASSETS.logo[resolvedTheme === THEME.DARK ? THEME.DARK : THEME.LIGHT];
```

### Customization

To modify theme settings:

1. Update `THEME_CONFIG` in `theme-config.ts` for global settings
2. Modify CSS variables in `globals.css` for theme-specific values
3. Add new theme assets to `THEME_ASSETS` in `theme-config.ts`

See the [Style Guide](STYLE_GUIDE.md) for more detailed theming guidelines.
