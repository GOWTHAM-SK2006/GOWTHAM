"use client";

import { Briefcase, Trophy, BookOpen, Star, Cpu, ExternalLink } from "lucide-react";
import { experiences, education, type ExperienceType } from "@/data/experience";

/* ─── Icon map ─────────────────────────────────────────────────────────────── */
const TYPE_CONFIG: Record<
  ExperienceType,
  { label: string; icon: React.ReactNode; accent: string }
> = {
  internship: {
    label: "Internship",
    icon: <Briefcase size={16} aria-hidden="true" />,
    accent: "#f97316",
  },
  hackathon: {
    label: "Hackathon",
    icon: <Cpu size={16} aria-hidden="true" />,
    accent: "#7c3aed",
  },
  academic: {
    label: "Academic",
    icon: <BookOpen size={16} aria-hidden="true" />,
    accent: "#0ea5e9",
  },
  achievement: {
    label: "Achievement",
    icon: <Star size={16} aria-hidden="true" />,
    accent: "#ca8a04",
  },
  event: {
    label: "Event",
    icon: <Trophy size={16} aria-hidden="true" />,
    accent: "#16a34a",
  },
};

export default function Experience() {
  const isEmpty = experiences.length === 0;

  return (
    <section id="experience" className="section section-soft" aria-labelledby="experience-heading">
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="section-label">Background</p>
          <h2 id="experience-heading" className="section-title mx-auto" style={{ maxWidth: 480 }}>
            Experience & Achievements
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Internships, hackathons, academic projects and extracurricular highlights.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* ── Experience timeline ── */}
          <div className="lg:col-span-2">
            {isEmpty ? (
              <EmptyState />
            ) : (
              <div className="space-y-4" role="list" aria-label="Experience timeline">
                {experiences.map((entry) => {
                  const config = TYPE_CONFIG[entry.type];
                  return (
                    <article
                      key={entry.id}
                      className="card p-6"
                      role="listitem"
                      aria-label={`${entry.role} at ${entry.organization}`}
                    >
                      {/* Type badge */}
                      <div className="flex items-center justify-between mb-3">
                        <span
                          className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full"
                          style={{
                            background: `${config.accent}14`,
                            color: config.accent,
                            border: `1px solid ${config.accent}30`,
                          }}
                        >
                          {config.icon}
                          {config.label}
                        </span>
                        <span className="text-xs text-[#a3a3a3]">
                          {entry.startDate}
                          {entry.endDate ? ` – ${entry.endDate}` : " – Present"}
                        </span>
                      </div>

                      <h3 className="font-bold text-[#171717] text-base">{entry.role}</h3>
                      <div className="text-sm text-[#f97316] font-medium mb-2">
                        {entry.organization}
                        {entry.location && (
                          <span className="text-[#a3a3a3] font-normal"> · {entry.location}</span>
                        )}
                      </div>

                      <p className="text-sm text-[#737373] leading-relaxed mb-3">
                        {entry.description}
                      </p>

                      {entry.highlights && entry.highlights.length > 0 && (
                        <ul className="space-y-1 mb-3">
                          {entry.highlights.map((h) => (
                            <li key={h} className="flex items-start gap-2 text-xs text-[#737373]">
                              <span className="text-[#f97316] mt-0.5 font-bold">›</span>
                              {h}
                            </li>
                          ))}
                        </ul>
                      )}

                      {entry.technologies && entry.technologies.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mb-3">
                          {entry.technologies.map((t) => (
                            <span key={t} className="text-xs px-2.5 py-0.5 rounded-full bg-[#f5f5f5] text-[#525252] border border-[#e5e5e5]">
                              {t}
                            </span>
                          ))}
                        </div>
                      )}

                      {entry.link && (
                        <a
                          href={entry.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs text-[#f97316] hover:underline"
                          aria-label={`View certificate or link for ${entry.role} (opens in new tab)`}
                        >
                          <ExternalLink size={11} aria-hidden="true" />
                          View Certificate / Link
                        </a>
                      )}
                    </article>
                  );
                })}
              </div>
            )}
          </div>

          {/* ── Education sidebar ── */}
          <div className="space-y-5">
            <EducationCard />

            <div className="card p-5 border-dashed border-[#e5e5e5]">
              <div className="text-sm font-semibold text-[#171717] mb-2">📝 Update this section</div>
              <p className="text-xs text-[#a3a3a3] leading-relaxed">
                Add your internships, hackathons, events and achievements in{" "}
                <code className="bg-[#f5f5f5] px-1.5 py-0.5 rounded text-[#525252]">
                  src/data/experience.ts
                </code>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function EducationCard() {
  return (
    <div className="card p-6">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-xl" aria-hidden="true">🎓</span>
        <h3 className="font-semibold text-[#171717] text-sm">Education</h3>
      </div>
      <div className="space-y-2">
        <div className="font-semibold text-[#171717] text-sm leading-tight">{education.degree}</div>
        <div className="text-sm text-[#f97316] font-medium">Specialisation: {education.specialization}</div>
        <div className="text-xs text-[#737373]">{education.institution}</div>
        <div className="text-xs text-[#a3a3a3]">
          Expected graduation: {education.expectedGraduation}
        </div>
      </div>
    </div>
  );
}

function EmptyState() {
  return (
    <div className="card p-10 text-center border-dashed">
      <div className="text-4xl mb-4" aria-hidden="true">📋</div>
      <h3 className="font-semibold text-[#171717] mb-2">Experience coming soon</h3>
      <p className="text-sm text-[#737373] leading-relaxed max-w-sm mx-auto">
        Internships, hackathon participations and achievements will be listed here with accurate details.
        Add your entries in{" "}
        <code className="bg-[#f5f5f5] px-1.5 py-0.5 rounded text-[#525252]">
          src/data/experience.ts
        </code>
      </p>
    </div>
  );
}
