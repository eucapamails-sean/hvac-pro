# KEVIN.md — Test Project Conventions

## Project
- Name: abos-test-project
- Framework: Next.js 14 (App Router)
- Language: TypeScript (strict mode)
- Styling: Tailwind CSS

## Conventions
- All components in src/components/ use PascalCase filenames
- All API routes in src/app/api/ follow REST conventions
- Use server components by default, 'use client' only when needed
- All database queries go through src/lib/db.ts
- Environment variables prefixed with NEXT_PUBLIC_ for client-side only

## Patterns
- Error handling: try/catch with structured error responses { error: string, code: number }
- API responses: { success: boolean, data?: any, error?: string }
- Imports: use @/ alias for src/ directory

## Build
- Build command: pnpm build
- Dev command: pnpm dev
- Lint: pnpm lint

## Branch Strategy
- Feature branches: feature/{task-id}-{short-description}
- Never commit to main directly
