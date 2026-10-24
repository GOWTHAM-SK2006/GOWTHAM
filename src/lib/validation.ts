// ─────────────────────────────────────────────────────────────────────────────
// CONTACT FORM VALIDATION
// Client-side validation utilities for the contact form.
// ─────────────────────────────────────────────────────────────────────────────

export interface ContactFormData {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  message: string;
}

export interface ValidationError {
  field: keyof ContactFormData;
  message: string;
}

export function validateContactForm(data: ContactFormData): ValidationError[] {
  const errors: ValidationError[] = [];

  // Name
  if (!data.name.trim()) {
    errors.push({ field: "name", message: "Please enter your name." });
  } else if (data.name.trim().length < 2) {
    errors.push({ field: "name", message: "Name must be at least 2 characters." });
  }

  // Email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email.trim()) {
    errors.push({ field: "email", message: "Please enter your email address." });
  } else if (!emailRegex.test(data.email.trim())) {
    errors.push({ field: "email", message: "Please enter a valid email address." });
  }

  // Project type
  if (!data.projectType) {
    errors.push({ field: "projectType", message: "Please select a project type." });
  }

  // Message
  if (!data.message.trim()) {
    errors.push({ field: "message", message: "Please describe your project." });
  } else if (data.message.trim().length < 20) {
    errors.push({ field: "message", message: "Please provide at least 20 characters." });
  }

  return errors;
}

export const PROJECT_TYPES = [
  "Web Development",
  "Backend Development",
  "AI / ML Development",
  "Full-Stack Application",
  "Other / Not Sure Yet",
] as const;

export const BUDGET_RANGES = [
  "Prefer not to say",
  "Under ₹10,000",
  "₹10,000 – ₹25,000",
  "₹25,000 – ₹50,000",
  "₹50,000+",
  "Open to discuss",
] as const;
