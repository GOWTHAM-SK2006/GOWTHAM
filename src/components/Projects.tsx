"use client";

import { ExternalLink, Clock, Lightbulb, FlaskConical, Rocket } from "lucide-react";
import { GithubIcon } from "@/components/SocialIcons";
import { projects, type ProjectStatus } from "@/data/projects";

/* ─── Status helpers ──────────────────────────────────────────────────────── */
const STATUS_CONFIG: Record<
  ProjectStatus,
  { label: string; className: string; Icon: React.ElementType }
> = {
  concept: {
    label: "Concept",
    className: "status-concept",
    Icon: Lightbulb,
  },
  "in-development": {
    label: "In Development",
    className: "status-in-development",
    Icon: Clock,
  },
  testing: {
    label: "Testing",
    className: "status-testing",
    Icon: FlaskConical,
  },
  deployed: {
    label: "Live",
    className: "status-deployed",
    Icon: Rocket,
  },
};

/* ─── Project card visual placeholders ──────────────────────────────────────── */
const CARD_VISUALS: Record<string, React.ReactNode> = {
  "college-bus-tracker": (
    <div className="w-full h-full bg-gradient-to-br from-[#dbeafe] to-[#bfdbfe] flex items-center justify-center">
      <div className="text-center">
        <div className="text-5xl mb-2">🚌</div>
        <div className="text-xs font-medium text-[#1d4ed8]">Bus Tracking</div>
      </div>
    </div>
  ),
  "cricket-performance-index": (
    <div className="w-full h-full bg-gradient-to-br from-[#dcfce7] to-[#bbf7d0] flex items-center justify-center">
      <div className="text-center">
        <div className="text-5xl mb-2">🏏</div>
        <div className="text-xs font-medium text-[#15803d]">Sports Analytics</div>
      </div>
    </div>
  ),
  "code-clash": (
    <div className="w-full h-full bg-gradient-to-br from-[#fae8ff] to-[#e9d5ff] flex items-center justify-center">
      <div className="text-center">
        <div className="text-5xl mb-2">⚔️</div>
        <div className="text-xs font-medium text-[#7e22ce]">Coding Game</div>
      </div>
    </div>
  ),
};

export default function Projects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="section section-soft" aria-labelledby="projects-heading">
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="section-label">Featured Work</p>
          <h2 id="projects-heading" className="section-title mx-auto" style={{ maxWidth: 540 }}>
            Projects I&apos;ve built and am building
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Real projects with real goals — each one designed to solve a meaningful problem.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-sm text-[#a3a3a3] mt-8">
          All projects reflect accurate implementation status. GitHub links will be added once repositories are made public.
        </p>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  const status = STATUS_CONFIG[project.status];
  const StatusIcon = status.Icon;

  return (
    <article
      className="card flex flex-col overflow-hidden hover:border-[#fed7aa] transition-colors group"
      aria-label={`Project: ${project.name}`}
    >
      {/* Visual */}
      <div className="h-44 flex-shrink-0 overflow-hidden" aria-hidden="true">
        {CARD_VISUALS[project.id] ?? (
          <div className="w-full h-full bg-[#f5f5f5] flex items-center justify-center">
            <span className="text-4xl">📁</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        {/* Status + category */}
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          <span
            className={`inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full border ${status.className}`}
          >
            <StatusIcon size={11} aria-hidden="true" />
            {status.label}
          </span>
          <span className="badge-neutral text-xs px-2.5 py-1 rounded-full border text-[#737373] bg-[#fafafa] border-[#e5e5e5]">
            {project.category}
          </span>
        </div>

        <h3 className="font-bold text-[#171717] text-base mb-2">{project.name}</h3>
        <p className="text-xs text-[#737373] leading-relaxed mb-3">{project.tagline}</p>

        {/* Problem & solution */}
        <div className="text-xs text-[#737373] leading-relaxed mb-4 space-y-2 flex-1">
          <p><strong className="text-[#525252]">Problem: </strong>{project.problem}</p>
          <p><strong className="text-[#525252]">Solution: </strong>{project.solution}</p>
        </div>

        {/* Key features */}
        <div className="mb-4">
          <div className="text-xs font-semibold text-[#525252] mb-1.5">Key Features</div>
          <ul className="space-y-1">
            {project.features.slice(0, 3).map((f) => (
              <li key={f} className="flex items-start gap-1.5 text-xs text-[#737373]">
                <span className="text-[#f97316] mt-0.5 font-bold">›</span>
                {f}
              </li>
            ))}
            {project.features.length > 3 && (
              <li className="text-xs text-[#a3a3a3]">+{project.features.length - 3} more</li>
            )}
          </ul>
        </div>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.technologies.map((tech) => (
            <span key={tech} className="text-xs px-2.5 py-0.5 rounded-full bg-[#f5f5f5] text-[#525252] border border-[#e5e5e5]">
              {tech}
            </span>
          ))}
        </div>

        {/* Status note */}
        {project.statusNote && (
          <p className="text-xs text-[#a3a3a3] italic mb-4 leading-relaxed">
            {project.statusNote}
          </p>
        )}

        {/* Actions */}
        <div className="flex gap-2 mt-auto">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline text-xs py-2 px-3 flex-1"
              aria-label={`View ${project.name} on GitHub (opens in new tab)`}
            >
              <GithubIcon size={13} aria-hidden="true" />
              GitHub
            </a>
          ) : (
            <span className="btn btn-ghost text-xs py-2 px-3 flex-1 cursor-default text-[#a3a3a3]">
              <GithubIcon size={13} aria-hidden="true" />
              Coming Soon
            </span>
          )}

          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary text-xs py-2 px-3"
              aria-label={`View live demo of ${project.name} (opens in new tab)`}
            >
              <ExternalLink size={13} aria-hidden="true" />
              Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
