# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React + TypeScript single-page application for Kennedy Equity, a real estate holding company. The app is built with Vite and uses Tailwind CSS for styling with the shadcn/ui component library.

## Development Commands

```bash
# Start development server (runs on port 8080)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint
npm run lint
```

## Architecture Overview

### Component Structure
- **Pages** (`/src/pages/`): Route-level components that compose features
- **Site Components** (`/src/components/site/`): Major feature components like Navbar, Hero, Footer, CTASection
- **UI Components** (`/src/components/ui/`): Reusable shadcn/ui primitives (Button, Card, Dialog, etc.)

### Key Architectural Patterns
1. **Routing**: React Router v6 with routes defined in `App.tsx`
2. **Styling**: Tailwind CSS with CSS variables defined in `index.css` for theming
3. **State Management**: Local state with React hooks, React Query for server state
4. **Form Handling**: React Hook Form + Zod for validation (see contact forms)
5. **SEO**: React Helmet Async for meta tags, structured data in page components

### Important Files
- `src/App.tsx`: Main route definitions and app structure
- `src/components/site/Navbar.tsx`: Navigation with mobile menu
- `src/pages/Index.tsx`: Homepage with all major sections
- `tailwind.config.ts`: Theme customization and color system
- `vite.config.ts`: Build configuration and path aliases

### Path Aliases
- `@/*` maps to `./src/*` (e.g., `import { Button } from "@/components/ui/button"`)

## Code Conventions

### Component Structure
Components follow this pattern:
```tsx
import { cn } from "@/lib/utils";

interface ComponentProps {
  className?: string;
  // other props
}

export function Component({ className, ...props }: ComponentProps) {
  return (
    <div className={cn("base-classes", className)}>
      {/* content */}
    </div>
  );
}
```

### Styling Approach
- Use Tailwind utility classes
- Use `cn()` utility from `@/lib/utils` for conditional classes
- CSS variables for colors (e.g., `bg-primary`, `text-muted-foreground`)
- Responsive design with Tailwind breakpoints (sm, md, lg, xl, 2xl)

### Image Handling
- Images stored in `/src/assets/`
- Use responsive image components with lazy loading
- Placeholder images available in `/public/placeholder.svg`

## Testing
**Note**: No testing framework is currently set up. When implementing tests, consider adding Vitest or Jest with React Testing Library.

## TypeScript Configuration
- Relaxed settings: `noImplicitAny: false`, `allowUnusedParameters: true`
- When adding new code, prefer explicit typing despite relaxed settings
- Use interface over type for component props

## Common Tasks

### Adding a New Page
1. Create component in `/src/pages/`
2. Add route in `App.tsx`
3. Update navigation in `Navbar.tsx`
4. Add SEO metadata using React Helmet

### Adding UI Components
1. Check if component exists in `/src/components/ui/`
2. If creating new shadcn/ui component, maintain consistent API
3. Always include `className` prop with `cn()` utility

### Working with Forms
1. Use React Hook Form for form state
2. Define Zod schema for validation
3. See contact forms for reference implementation