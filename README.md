# David Aronov: portfolio

A one-page portfolio built with React, TypeScript and Vite, deployed to GitHub Pages.

## Develop

Requires Node 20.19+ (or 22.12+) and [Bun](https://bun.sh).

```sh
bun install
bun run dev        # start the dev server
bun run lint       # Biome check
bun run build      # type-check and build to dist/
bun run preview    # serve the production build locally
```

## Edit the content

All text on the page lives in [`src/lib/content.ts`](src/lib/content.ts). Components never hard-code copy. Anything marked as placeholder there should be replaced before the site is shared.

## Structure

Components follow Atomic Design. Each component keeps its CSS Module beside it.

```
src/tokens/       design tokens (colour, type, spacing, motion) as CSS variables
src/atoms/        Heading, ButtonLink, TextLink, Tag, SkipLink
src/molecules/    ProjectCard, ContactLink, SectionHeader
src/organisms/    SiteHeader, Hero, About, Projects, Contact, SiteFooter, ErrorBoundary
src/templates/    SiteLayout
src/pages/        HomePage
src/lib/          typed content and shared errors
```

## Deploy

Pushes to `main` run `.github/workflows/deploy.yml`: install with a frozen lockfile, lint, audit, build, then publish `dist/` to GitHub Pages. The custom domain is kept by `public/CNAME`.

## Notes

- **Colour scheme:** the site follows the visitor's light/dark preference. Text and UI contrast is held to WCAG 2.2 AA in both themes.
- **Content Security Policy:** GitHub Pages cannot send response headers, so the policy is injected as a `<meta>` tag at build time (see `vite.config.ts`). Headers such as `frame-ancestors` and HSTS cannot be set this way.
- **Motion:** animations and smooth scrolling are disabled when the visitor prefers reduced motion.
