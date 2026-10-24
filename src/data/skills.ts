// ─────────────────────────────────────────────────────────────────────────────
// SKILLS DATA
// Edit this file to update the Skills section.
// ─────────────────────────────────────────────────────────────────────────────

export interface SkillCategory {
  id: string;
  label: string;
  icon: string;          // emoji or icon name — rendered in the UI
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "programming",
    label: "Programming Languages",
    icon: "💻",
    skills: ["Java", "Python"],
  },
  {
    id: "frontend",
    label: "Frontend",
    icon: "🎨",
    skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    id: "backend",
    label: "Backend",
    icon: "⚙️",
    skills: ["Spring Boot", "REST APIs"],
  },
  {
    id: "database",
    label: "Database",
    icon: "🗄️",
    skills: ["SQL", "PostgreSQL", "MySQL"],
  },
  {
    id: "aiml",
    label: "AI / ML",
    icon: "🤖",
    skills: ["Python ML", "Data Analysis", "AI Application Development"],
  },
  {
    id: "tools",
    label: "Tools & Platforms",
    icon: "🛠️",
    skills: ["Git", "GitHub", "VS Code", "IntelliJ IDEA"],
  },
];
