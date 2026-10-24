// ─────────────────────────────────────────────────────────────────────────────
// SERVICES DATA
// Edit this file to update the Services section.
// ─────────────────────────────────────────────────────────────────────────────

export interface Service {
  id: string;
  title: string;
  description: string;
  deliverables: string[];   // concrete things you deliver
  icon: string;             // Lucide icon name (string) — mapped in component
  cta: string;
  ctaHref: string;
}

export const services: Service[] = [
  {
    id: "web-development",
    title: "Web Development",
    description:
      "Modern, responsive websites built with clean code and great user experience — from landing pages to full web applications.",
    deliverables: [
      "Responsive websites & landing pages",
      "Portfolio & personal websites",
      "Modern web applications",
      "UI implementation from design or brief",
    ],
    icon: "Monitor",
    cta: "Discuss Your Project",
    ctaHref: "#contact",
  },
  {
    id: "backend-development",
    title: "Backend Development",
    description:
      "Reliable backend systems and REST APIs using Java Spring Boot, designed to integrate cleanly with frontend applications and databases.",
    deliverables: [
      "REST API design and development",
      "Java Spring Boot applications",
      "Database integration (PostgreSQL, MySQL)",
      "Backend architecture for web apps",
    ],
    icon: "Server",
    cta: "Discuss Your Project",
    ctaHref: "#contact",
  },
  {
    id: "aiml-development",
    title: "AI / ML Development",
    description:
      "Python-based machine learning prototypes and data processing scripts to explore intelligent features for your application.",
    deliverables: [
      "Python ML prototypes",
      "Data processing pipelines",
      "AI feature integration concepts",
      "Data analysis and visualisation",
    ],
    icon: "Brain",
    cta: "Discuss Your Project",
    ctaHref: "#contact",
  },
];
