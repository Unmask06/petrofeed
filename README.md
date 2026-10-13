# PetroFeed Engineering & Consultancy Website

A modern, fluid, single-page corporate website for **PetroFeed Engineering & Consultancy Services Ltd**, built strictly from company documentation and brand assets.

## Tech Stack
- **Framework**: React 18
- **Bundler**: Vite 5
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`) with fluid type scales (`clamp()`)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Hosting**: 100% static client-side build (deployable on Vercel, Netlify, Cloudflare Pages, GitHub Pages, or any static web host)

## Content Sections
1. **Hero**: High-impact fluid typography, pumpjack letterhead motif, lifecycle scope highlights, and regional footprint badges.
2. **About PetroFeed**: Company summary, technical differentiators, and core pillars.
3. **Markets (7 Sectors)**:
   - Oil & Gas
   - Refinery & Petrochemicals
   - Energy & Utilities
   - Chemical & Fertilizers
   - Pipeline & Infrastructure
   - Pharmaceuticals & Biopharma
   - Food, Beverage & Agro
4. **Services (Dual Segment)**:
   - **Core Disciplines (5)**: Consultancy, Design & Engineering, Project Management, Procurement, Construction Management.
   - **Specialized Capabilities (8)**: Energy Optimization, Process Optimization, Onsite Troubleshooting, Safety Studies, Safety Trainings, Facilitations (HAZOP/SIL/Design Reviews), Cost Control, Process Modeling & Data Analytics.
5. **Vision & Values**: Zero environmental incidents, Zero harm to people & assets, and human-centered values narrative.
6. **Regional Presence & Associate**:
   - Footprint across **India, Oman, Qatar, UAE, and Singapore**.
   - Associate company **StrucTech** (`strutechconsultancy.com`) with brand logo.
7. **Contact**: Pre-configured inquiry mailto composer, direct phone and WhatsApp contact, and email copy tool.
8. **Footer**: Quick navigation, legal registrations, and back-to-top shortcut.

## Development
```bash
# Start local development server
npm run dev

# Build production static bundle
npm run build

# Preview production build locally
npm run preview
```

## Search visibility and production hosting

`npm run build` prerenders the React page into `dist/index.html`, then the browser hydrates it for interactive menus and forms. Both service tabs are included in the HTML; without JavaScript, both panels are displayed. The build also generates `robots.txt` and a one-page `sitemap.xml`. Metadata and company structured data use `src/data/content.js` and `src/data/seo.js`.

The canonical production URL is **https://www.petrofeed.net/**. Production assets default to `/`; local development remains at `/petrofeed/`. Configure the hosting custom domain and DNS for `www.petrofeed.net` before deploying this build. If previewing on a GitHub Pages repository subpath, set `VITE_BASE_PATH=/petrofeed/` when building. The canonical URL remains the company domain.

The GitHub Pages workflow keeps `/petrofeed/` as its deployment path until the repository Actions variable `VITE_BASE_PATH` is set to `/` for the custom domain. This preserves the current repository deployment while the domain is being configured.

After deployment, verify the domain in Google Search Console, submit `https://www.petrofeed.net/sitemap.xml`, and inspect the homepage URL. Local development is not publicly indexable.
