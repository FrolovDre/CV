# Personal Portfolio (Christmas Edition)

This project is a fully‑featured personal portfolio built with **Next.js**, **TypeScript** and **Tailwind CSS**.  
It draws inspiration from the sleek design of the AutoGivex Steam page and combines it with your professional résumé. The layout is responsive, accessible and includes a few fun interactions: a fluid background animation, a fire‑trail cursor and a snowy holiday theme.

## ✨ Features

- Modern two‑column design: left side contains your photo and summary, right side houses your projects, experience, skills, education and contact details.
- Fully responsive with light/dark support (holiday theme is dark by default).
- Interactive effects: animated fluid background, cursor fire trail, snowfall and snow accumulation/ melting on headings and buttons.
- All content is editable from a single file (`data/profile.ts`).
- Accessibility: focus states, keyboard navigation and respect of `prefers‑reduced‑motion` for reduced animations.

## 🧾 Getting started

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Run in development mode**

   ```bash
   npm run dev
   ```

   The site will be available at `http://localhost:3000`.

3. **Build and preview production**

   ```bash
   npm run build
   npm start
   ```

4. **Editing content**

   All résumé data lives in [`data/profile.ts`](./data/profile.ts). Replace the placeholder values with your real information, update the projects, experience, skills, education and contact details.  
   Images should be placed into the [`public/images`](./public/images) directory and referenced by their paths in the profile file.

## 🚀 Deployment

This project works out of the box on **Vercel**. Follow these steps:

1. Push the contents of this repository to a Git provider (e.g. GitHub).  
2. Go to [Vercel](https://vercel.com/) and create a new project. Select your repository and leave the defaults (framework: Next.js, root directory: `/`).
3. Click **Deploy**. Vercel will install dependencies and run `next build`. When finished, you’ll get a live `.vercel.app` URL you can share.

You can also deploy to other platforms that support Node.js (Netlify, Railway, etc.). The build output is generated in the `.next` folder.

## 📂 Project Structure

- `app/` – Next.js App Router entry points
  - `layout.tsx` – Root layout with metadata and global components
  - `page.tsx` – Home page composed of the two primary columns
  - `globals.css` – Global CSS and custom keyframes
- `components/` – Reusable UI pieces
  - `FluidBackground.tsx` – Animated fluid backdrop for the left column
  - `CursorFireTrail.tsx` – Fire‑trail effect following the cursor while moving
  - `PortfolioPanel.tsx` – Right‑hand panel containing tabs and sections
  - `Projects.tsx`, `Experience.tsx`, `Skills.tsx`, `Education.tsx`, `Contact.tsx` – Individual sections
  - `ProjectCard.tsx`, `ExperienceItem.tsx` – Smaller components used in sections
- `data/profile.ts` – Your résumé data source
- `public/images/` – Static assets (profile photo, etc.)

## 🎄 A note on the holiday theme

This project ships with a festive theme: snowfall across the screen, snow accumulating on headings, and melting when you hover over them with a fiery cursor. If you’d prefer a more neutral design, remove the snow‑related classes and components (`Snowfall`, snow states) in `layout.tsx` and the associated styles.

Enjoy and happy coding!