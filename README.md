This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Agent representations and verification

Pages serve HTML to browsers and Markdown to clients requesting `Accept: text/markdown`.
The negotiator honors media-type specificity, quality values, and explicit rejections;
unsupported representations receive HTTP 406. Missing pages return HTTP 404 with recovery
links in both representations. Downloads, images, machine-readable files, API requests,
and Next.js client navigation retain their normal handling.

Build and start the production server before running the endpoint tests:

```sh
npm ci
npm run build
npm run start -- --hostname 127.0.0.1 --port 3100
# In a second terminal:
npm test
npm run typecheck
npm run lint
```

Run the same suite against the deployed site with `BASE_URL=https://www.pirus.dev npm test`.
One cache-variation test is skipped locally and required on Vercel: Next.js currently
overwrites custom HTML `Vary` headers, so `vercel.json` uses a documented response-header
transform at the edge to append `Accept` and `Accept-Encoding` while retaining RSC tokens.
The Markdown route sets these headers itself. Verify both variants after each release.

Profile prose and experience are shared between HTML and Markdown in `data/profile.ts`;
Contact and Privacy use `lib/trust-content.ts`. Blog representations read the same `_posts`
files. Keep `public/llms.txt` aligned with the resume and these public pages. The identity
schema describes a Person; employer affiliations do not make this a company website.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
