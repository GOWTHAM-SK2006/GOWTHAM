// ─────────────────────────────────────────────────────────────────────────────
// SITE CONFIGURATION
// Edit this file to update site-wide settings.
// ─────────────────────────────────────────────────────────────────────────────

export const siteConfig = {
  name: "Gowtham S",
  title: "Gowtham S | Freelance Web Developer & AI/ML Developer",
  description:
    "Computer Science and Engineering student specialising in AI/ML. I build modern web applications, backend systems and practical AI-powered solutions.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://gowtham.dev",
  ogImage: "/og-image.png",

  // ─── CONTACT ───────────────────────────────────────────────────────────────
  email: "gowtham@example.com",       // ← Replace with your real email
  github: "https://github.com/gowtham-s",    // ← Replace with your GitHub URL
  linkedin: "https://linkedin.com/in/gowtham-s", // ← Replace with your LinkedIn URL

  // ─── AVAILABILITY ──────────────────────────────────────────────────────────
  // Set to true when you are open to freelance enquiries.
  availableForFreelance: true,
  availabilityMessage: "Available for freelance projects",

  // ─── RESUME ────────────────────────────────────────────────────────────────
  // Set to true after you place your resume at public/resume.pdf.
  resumeAvailable: false,
  resumeFilename: "Gowtham_S_Resume.pdf",
};
