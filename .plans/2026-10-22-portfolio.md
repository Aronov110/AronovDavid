# Portfolio site

Status: done

## Goal

Replace the Vite demo page with a one-page portfolio: hero, about, projects and contact, in a bold visual style with automatic light and dark themes.

## Decisions

- **Styling:** CSS Modules plus CSS custom properties for tokens. No second styling system.
- **Font:** one self-hosted variable font, `@fontsource-variable/space-grotesk`. No third-party font requests, so the CSP stays strict.
- **Structure:** Atomic Design (tokens, atoms, molecules, organisms, templates, pages). Components are PascalCase with their CSS Module beside them. No barrel files.
- **Content:** all copy lives in one typed file, `src/lib/content.ts`. Only the name, the GitHub link and the example project's repository and tech tags are real. Everything else is marked placeholder. No email address is published unless it is set.
- **Motion:** CSS only (`transform` and `opacity`), gated on `prefers-reduced-motion`.

## Security and accessibility

- Content Security Policy via a build-only `<meta>` tag. Pages cannot send headers, so `frame-ancestors` and HSTS are not possible.
- External links use `rel="noopener noreferrer"`. No third-party scripts, analytics or secrets.
- Skip link, landmarks, one `h1`, visible focus rings, 44px touch targets, reflow at 320px, contrast checked per token pair in both themes.
- Render errors are caught by an error boundary and logged, never swallowed.

## Verification

- Lint, audit and build pass.
- Bundle: JS about 71 KB gzipped, CSS about 3 KB gzipped.
- Lighthouse (local preview): Performance 100, Accessibility 100, Best Practices 100, SEO 92 before adding `robots.txt`.
- No horizontal overflow at 320, 375 or 768px. Checked both themes visually.

## Follow-ups

- Replace the placeholder copy before sharing the site.
- Tests (Vitest, Testing Library, axe, Playwright) and Lighthouse CI budgets.
- Storybook stories beside components, once Storybook is adopted.
- Open Graph preview image (needs a raster PNG).
