// ─────────────────────────────────────────────────────────────────────────────
// EXPERIENCE & ACHIEVEMENTS DATA
// Edit this file to add internships, hackathons, academic projects and
// extracurricular achievements.
//
// INSTRUCTIONS:
// - Only add entries with VERIFIED details.
// - Set type to "internship" | "hackathon" | "academic" | "achievement" | "event"
// - Leave fields undefined if information is not yet available.
// ─────────────────────────────────────────────────────────────────────────────

export type ExperienceType = "internship" | "hackathon" | "academic" | "achievement" | "event";

export interface ExperienceEntry {
  id: string;
  type: ExperienceType;
  organization: string;
  role: string;
  startDate: string;          // e.g. "Jan 2024" or "2024"
  endDate?: string;           // leave undefined for ongoing
  location?: string;
  description: string;
  highlights?: string[];      // key accomplishments or details
  technologies?: string[];    // relevant tech used
  link?: string;              // certificate or event link
}

// ─── ADD YOUR ENTRIES BELOW ──────────────────────────────────────────────────
// This array is intentionally empty until you add your real experience.
// A placeholder prompt is shown in the UI when this array is empty.

export const experiences: ExperienceEntry[] = [
  // Example — uncomment and fill in when ready:
  // {
  //   id: "internship-1",
  //   type: "internship",
  //   organization: "Company Name",
  //   role: "Your Role",
  //   startDate: "Jun 2024",
  //   endDate: "Aug 2024",
  //   location: "City, India",
  //   description: "Brief description of what you did.",
  //   highlights: ["Key achievement 1", "Key achievement 2"],
  //   technologies: ["Java", "Spring Boot"],
  // },
];

// ─── ACADEMIC INFO ────────────────────────────────────────────────────────────
export const education = {
  degree: "Bachelor of Engineering — Computer Science and Engineering",
  specialization: "Artificial Intelligence and Machine Learning",
  institution: "Your Institution Name",   // ← update with your college name
  location: "India",
  expectedGraduation: "2026",             // ← update if needed
};
