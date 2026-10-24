# Gowtham S — Personal Portfolio

A premium, production-ready personal portfolio built with **Next.js 16**, **TypeScript**, **Tailwind CSS v4** and **EmailJS**.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Icons | Lucide React |
| Animations | CSS (no Framer Motion dependency) |
| Contact Form | EmailJS (@emailjs/browser) |
| Deployment | Vercel |

---

## Getting Started

### 1. Clone and install

```bash
cd gowtham-portfolio
npm install
```

### 2. Configure environment variables

Copy `.env.example` to `.env.local` and fill in your values:

```bash
cp .env.example .env.local
```

Open `.env.local` and set:

```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

See `.env.example` for detailed EmailJS setup instructions.

### 3. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Personalising the Portfolio

All content is managed from editable data files. **No need to touch component code** for most changes.

| File | What to edit |
|------|-------------|
| `src/data/siteConfig.ts` | Name, email, GitHub, LinkedIn, availability, resume flag |
| `src/data/projects.ts` | Project cards — name, description, status, tech, links |
| `src/data/skills.ts` | Skill categories and technologies |
| `src/data/services.ts` | Service cards and deliverables |
| `src/data/experience.ts` | Internships, hackathons, achievements, education |

### Adding your resume

1. Place your resume PDF at `public/resume.pdf`.
2. Open `src/data/siteConfig.ts`.
3. Set `resumeAvailable: true`.
4. Update `resumeFilename` if you want a custom download filename.

### Adding experience entries

Open `src/data/experience.ts` and uncomment / fill in the example entry. The Experience section will automatically display your entries.

---

## Project Structure

```
src/
  app/
    layout.tsx          ← SEO metadata, fonts
    page.tsx            ← Homepage (assembles all sections)
    globals.css         ← Design system, CSS custom properties
    not-found.tsx       ← Custom 404 page
  components/
    Navbar.tsx
    Hero.tsx
    About.tsx
    Services.tsx
    Projects.tsx
    Skills.tsx
    Experience.tsx
    Contact.tsx
    Footer.tsx
  data/
    siteConfig.ts       ← Global site settings
    projects.ts         ← Project card data
    skills.ts           ← Skills by category
    services.ts         ← Service card data
    experience.ts       ← Experience & achievements
  lib/
    validation.ts       ← Contact form validation

public/
  resume.pdf            ← Add your resume here
  images/               ← Project screenshots, OG image
  og-image.png          ← Open Graph image (1200×630)
```

---

## Building for Production

```bash
npm run build
npm run start
```

---

## Deploying to Vercel

1. Push your code to GitHub (make sure `.env.local` is in `.gitignore`).
2. Go to [vercel.com](https://vercel.com) and import the repository.
3. Add environment variables in the Vercel dashboard (same as `.env.local`).
4. Deploy.

---

## Contact Form Setup (EmailJS)

1. Create a free account at [emailjs.com](https://www.emailjs.com/).
2. Add an Email Service.
3. Create an Email Template using these variables:
   - `{{from_name}}` — sender name
   - `{{from_email}}` — sender email
   - `{{project_type}}` — project type selected
   - `{{budget}}` — budget range
   - `{{message}}` — project description
4. Add your Service ID, Template ID and Public Key to `.env.local`.

---

## Updating social links and email

Open `src/data/siteConfig.ts` and update:

```ts
email: "your@email.com",
github: "https://github.com/your-username",
linkedin: "https://linkedin.com/in/your-profile",
```

---

© 2024 Gowtham S
