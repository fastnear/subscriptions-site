# Subscriptions site

This is a NextJS 15 project that is currently a landing page where users can sign up (via external form) for the FASTNEAR free tier. There's also an external page linking to a Stripe landing page for a recurring subscription.

Some plan details are defined here:

    src/app/pricing/_logic/plan-types.ts

Single-sign on and API keys and auth is all part of this, but there will be an initial push of interest during November that this site is meant to capture.

## Development

    yarn
    yarn dev

## Architecture

### Theme System

The application uses [next-themes](https://github.com/pacocoursey/next-themes) with a centralized theme configuration in `src/app/_components/theme-config.ts`. The theme system is built around utility classes that handle both light and dark modes automatically.

#### Core Theme Classes

- `section-themed`: Container-level styling with theme-aware backgrounds
- `card-themed`: Component containers with elevated styling
- `heading-themed`: Typography for headings with proper contrast
- `text-themed-secondary`: Secondary text with appropriate opacity
- `button-themed-primary`: Primary action buttons with hover states

#### Implementation

```typescript
// Using theme-aware components
<div className="section-themed">
  <div className="card-themed">
    <h2 className="heading-themed">Title</h2>
    <p className="text-themed-secondary">Content</p>
    <button className="button-themed-primary">Action</button>
  </div>
</div>
```

#### Theme Configuration

Theme constants and assets are centralized:

```typescript
import { THEME, THEME_ASSETS } from '@/app/_components/theme-config';

// Runtime theme detection
const { resolvedTheme } = useTheme();
const isDark = resolvedTheme === THEME.DARK;

// Theme-aware assets
const logoSrc = THEME_ASSETS.logo[resolvedTheme === THEME.DARK ? THEME.DARK : THEME.LIGHT];
```

### Page Structure

Pages follow a consistent pattern:

```
src/app/
├── _components/          # Shared components
├── (logged-in)/         # Protected routes
├── pricing/             # Public pages
│   ├── _components/     # Page-specific components
│   ├── _logic/         # Business logic
│   └── page.tsx        # Page entry
└── globals.css         # Theme utilities and global styles
```

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
