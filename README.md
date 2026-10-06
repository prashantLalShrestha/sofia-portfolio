# Sofia Gusakova · Portfolio

A React and TypeScript portfolio focused on sales, business development, and account management. Warm editorial styling, an ivory and burgundy palette, serif headings, and Sofia’s portrait give it an identity distinct from Prashant’s portfolio.

## Local development

Run `npm run dev`. Use `npm run build` for production and `npm run lint` for lint checks. Dependencies are already declared in package.json.

## Architecture

- `src/data`: typed profile, career history, case stories, education, and languages. No UI dependencies.
- `src/theme`: semantic design tokens, light/dark palettes, persisted theme provider.
- `src/components`: shared layout and section headings.
- `src/features/stories`: reusable story cards.
- `src/pages`: home, work, story details, experience, about, contact, 404.
- `src/app`: router, page metadata, shared build route definitions.
- `src/styles`: responsive styles, focus states, reduced-motion support.
- `public`: the supplied portrait, original CV, favicon, and custom domain.

## Content

All role dates, numbers, outcomes, languages, education, and work-authorization information are based on Sofia’s supplied CV. Metrics retain their scope: 4× applies to one account’s transaction volume; 15% applies to specific landing pages; 42nd to fifth is a company-wide market ranking. No invented revenue totals, quota attainment, client names, or current employment claims are included. The website presents a concise selection, while the CV download provides the full document. The phone number is omitted from page content; the original downloadable CV retains it.

Edit `src/data/portfolio.ts` to update content. Edit `src/theme/tokens.ts` to change the design system. The contact page opens an email client or LinkedIn and supports copying the email address; it does not simulate message submission.

## Hosting

Run `npm run deploy` when ready to publish to GitHub Pages. Build output includes an HTML entry for every declared page and story, fixing direct visits and reloads. `public/CNAME` is copied into the build. New top-level pages should be registered in `src/app/routes.ts` as well as the React router. No deployment has been performed.

## Agent skills

Run `npm run skills:install` to restore project skills. Agent folders stay Git-ignored.
