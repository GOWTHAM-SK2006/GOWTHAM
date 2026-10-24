"use client";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";
import { siteConfig } from "@/data/siteConfig";
import {
  validateContactForm,
  type ContactFormData,
  type ValidationError,
  PROJECT_TYPES,
  BUDGET_RANGES,
} from "@/lib/validation";

type FormState = "idle" | "loading" | "success" | "error";

const EMPTY_FORM: ContactFormData = {
  name: "",
  email: "",
  projectType: "",
  budget: "",
  message: "",
};

// ─── EmailJS configuration ──────────────────────────────────────────────────
// Set these in your .env.local file. See .env.example for reference.
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "";
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "";
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "";

const EMAIL_CONFIGURED =
  EMAILJS_SERVICE_ID !== "" &&
  EMAILJS_TEMPLATE_ID !== "" &&
  EMAILJS_PUBLIC_KEY !== "";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState<ContactFormData>(EMPTY_FORM);
  const [errors, setErrors] = useState<ValidationError[]>([]);
  const [formState, setFormState] = useState<FormState>("idle");
  const [serverError, setServerError] = useState("");

  const getError = (field: keyof ContactFormData) =>
    errors.find((e) => e.field === field)?.message;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear field error on change
    setErrors((prev) => prev.filter((err) => err.field !== name));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validateContactForm(form);
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      // Focus first errored field
      const firstField = validationErrors[0].field;
      document.getElementById(`contact-${firstField}`)?.focus();
      return;
    }

    if (!EMAIL_CONFIGURED) {
      setFormState("error");
      setServerError(
        "The contact form is not yet configured. Please email me directly at " +
          siteConfig.email
      );
      return;
    }

    setFormState("loading");
    setServerError("");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          project_type: form.projectType,
          budget: form.budget || "Not specified",
          message: form.message,
          to_email: siteConfig.email,
        },
        EMAILJS_PUBLIC_KEY
      );
      setFormState("success");
      setForm(EMPTY_FORM);
    } catch {
      setFormState("error");
      setServerError(
        "Something went wrong sending your message. Please try emailing me directly at " +
          siteConfig.email
      );
    }
  };

  return (
    <section id="contact" className="section" aria-labelledby="contact-heading">
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="section-label">Get In Touch</p>
          <h2 id="contact-heading" className="section-title mx-auto" style={{ maxWidth: 540 }}>
            Have a project in mind?{" "}
            <span className="text-[#f97316]">Let&apos;s build something useful.</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            I&apos;m available for freelance web development, backend and AI/ML projects. Fill in the form below or reach out directly.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* ── Contact info ── */}
          <aside className="lg:col-span-2 space-y-5" aria-label="Contact information">
            <ContactItem
              icon={<Mail size={18} className="text-[#f97316]" aria-hidden="true" />}
              label="Email"
              value={siteConfig.email}
              href={`mailto:${siteConfig.email}`}
            />
            <ContactItem
              icon={<GithubIcon size={18} className="text-[#f97316]" aria-hidden="true" />}
              label="GitHub"
              value="github.com/gowtham-s"
              href={siteConfig.github}
              external
            />
            <ContactItem
              icon={<LinkedinIcon size={18} className="text-[#f97316]" aria-hidden="true" />}
              label="LinkedIn"
              value="linkedin.com/in/gowtham-s"
              href={siteConfig.linkedin}
              external
            />

            {/* Availability notice */}
            {siteConfig.availableForFreelance && (
              <div className="card p-5 border-[#fed7aa] bg-[#fff7ed]">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-[#f97316] animate-pulse-dot" aria-hidden="true" />
                  <span className="text-sm font-semibold text-[#f97316]">Currently Available</span>
                </div>
                <p className="text-xs text-[#92400e] leading-relaxed">
                  I am open to freelance project enquiries. Response time is typically within 24–48 hours.
                </p>
              </div>
            )}

            {/* EmailJS notice */}
            {!EMAIL_CONFIGURED && (
              <div className="card p-5 border-dashed">
                <div className="flex items-start gap-2">
                  <AlertCircle size={14} className="text-[#ca8a04] mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <div className="text-xs font-semibold text-[#171717] mb-1">Form not yet configured</div>
                    <p className="text-xs text-[#737373] leading-relaxed">
                      Add your EmailJS credentials to <code className="bg-[#f5f5f5] px-1 rounded">.env.local</code> to enable the form. See <code className="bg-[#f5f5f5] px-1 rounded">.env.example</code> for instructions.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </aside>

          {/* ── Contact form ── */}
          <div className="lg:col-span-3">
            {formState === "success" ? (
              <SuccessState onReset={() => setFormState("idle")} />
            ) : (
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="card p-7 space-y-5"
                aria-label="Project enquiry form"
                noValidate
              >
                {/* Name */}
                <Field
                  id="contact-name"
                  label="Your Name"
                  required
                  error={getError("name")}
                >
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="e.g. Priya Sharma"
                    className={`form-input ${getError("name") ? "error" : ""}`}
                    aria-required="true"
                    aria-describedby={getError("name") ? "contact-name-error" : undefined}
                    aria-invalid={!!getError("name")}
                    disabled={formState === "loading"}
                  />
                </Field>

                {/* Email */}
                <Field
                  id="contact-email"
                  label="Email Address"
                  required
                  error={getError("email")}
                >
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className={`form-input ${getError("email") ? "error" : ""}`}
                    aria-required="true"
                    aria-describedby={getError("email") ? "contact-email-error" : undefined}
                    aria-invalid={!!getError("email")}
                    disabled={formState === "loading"}
                  />
                </Field>

                {/* Project type */}
                <Field
                  id="contact-projectType"
                  label="Project Type"
                  required
                  error={getError("projectType")}
                >
                  <select
                    id="contact-projectType"
                    name="projectType"
                    value={form.projectType}
                    onChange={handleChange}
                    className={`form-input ${getError("projectType") ? "error" : ""}`}
                    aria-required="true"
                    aria-describedby={getError("projectType") ? "contact-projectType-error" : undefined}
                    aria-invalid={!!getError("projectType")}
                    disabled={formState === "loading"}
                  >
                    <option value="">Select project type…</option>
                    {PROJECT_TYPES.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </Field>

                {/* Budget */}
                <Field
                  id="contact-budget"
                  label="Budget Range (optional)"
                  error={getError("budget")}
                >
                  <select
                    id="contact-budget"
                    name="budget"
                    value={form.budget}
                    onChange={handleChange}
                    className="form-input"
                    disabled={formState === "loading"}
                  >
                    <option value="">Select a range…</option>
                    {BUDGET_RANGES.map((b) => (
                      <option key={b} value={b}>{b}</option>
                    ))}
                  </select>
                </Field>

                {/* Message */}
                <Field
                  id="contact-message"
                  label="Project Description"
                  required
                  error={getError("message")}
                >
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project — what you need, timeline, any specific requirements…"
                    className={`form-input resize-none ${getError("message") ? "error" : ""}`}
                    aria-required="true"
                    aria-describedby={getError("message") ? "contact-message-error" : undefined}
                    aria-invalid={!!getError("message")}
                    disabled={formState === "loading"}
                  />
                </Field>

                {/* Server error */}
                {formState === "error" && serverError && (
                  <div
                    className="flex items-start gap-2 p-4 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700"
                    role="alert"
                    aria-live="assertive"
                  >
                    <AlertCircle size={16} className="mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>{serverError}</span>
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  className="btn btn-primary w-full"
                  disabled={formState === "loading"}
                  aria-label={formState === "loading" ? "Sending message…" : "Send project enquiry"}
                >
                  {formState === "loading" ? (
                    <>
                      <Loader2 size={16} className="animate-spin" aria-hidden="true" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send size={16} aria-hidden="true" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Field wrapper ──────────────────────────────────────────────────────────── */
function Field({
  id,
  label,
  required,
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-[#171717] mb-1.5">
        {label}
        {required && <span className="text-[#f97316] ml-1" aria-hidden="true">*</span>}
        {required && <span className="sr-only"> (required)</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-xs text-red-600 flex items-center gap-1" role="alert">
          <AlertCircle size={11} aria-hidden="true" />
          {error}
        </p>
      )}
    </div>
  );
}

/* ─── Contact item ───────────────────────────────────────────────────────────── */
function ContactItem({
  icon,
  label,
  value,
  href,
  external,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  external?: boolean;
}) {
  return (
    <div className="card p-5">
      <div className="flex items-start gap-3">
        <div className="w-9 h-9 rounded-lg bg-[#fff7ed] flex items-center justify-center flex-shrink-0">
          {icon}
        </div>
        <div>
          <div className="text-xs text-[#a3a3a3] font-medium mb-0.5">{label}</div>
          <a
            href={href}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="text-sm text-[#171717] hover:text-[#f97316] transition-colors font-medium"
            aria-label={`${label}: ${value}${external ? " (opens in new tab)" : ""}`}
          >
            {value}
          </a>
        </div>
      </div>
    </div>
  );
}

/* ─── Success state ──────────────────────────────────────────────────────────── */
function SuccessState({ onReset }: { onReset: () => void }) {
  return (
    <div className="card p-10 text-center" role="status" aria-live="polite">
      <CheckCircle2 size={48} className="text-[#16a34a] mx-auto mb-4" aria-hidden="true" />
      <h3 className="font-bold text-[#171717] text-xl mb-2">Message sent!</h3>
      <p className="text-[#737373] text-sm leading-relaxed mb-6">
        Thank you for reaching out. I&apos;ll review your message and get back to you within 24–48 hours.
      </p>
      <button onClick={onReset} className="btn btn-outline text-sm">
        Send another message
      </button>
    </div>
  );
}
