"use client";

import { Download, ArrowRight, CheckCircle2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";
import { siteConfig } from "@/data/siteConfig";

const HIGHLIGHTS = [
  "Web Development",
  "Backend Engineering",
  "AI / ML",
];

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="section min-h-screen flex items-center pt-16"
      aria-label="Hero section"
    >
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ── Left column ── */}
          <div>
            {/* Availability badge */}
            {siteConfig.availableForFreelance && (
              <div className="inline-flex items-center gap-2 mb-6 badge">
                <span className="w-2 h-2 rounded-full bg-[#f97316] animate-pulse-dot" aria-hidden="true" />
                {siteConfig.availabilityMessage}
              </div>
            )}

            <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-[#171717] leading-[1.15] mb-6">
              I build digital solutions{" "}
              <span className="text-[#f97316]">that solve real problems.</span>
            </h1>

            <p className="text-lg text-[#737373] leading-relaxed mb-8 max-w-lg">
              I&apos;m <strong className="text-[#171717] font-semibold">Gowtham S</strong>, a Computer Science and Engineering student specialising in Artificial Intelligence and Machine Learning. I build modern web applications, backend systems and practical AI-powered solutions.
            </p>

            {/* Highlights */}
            <ul className="flex flex-wrap gap-3 mb-10" aria-label="Areas of expertise">
              {HIGHLIGHTS.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm font-medium text-[#737373]">
                  <CheckCircle2 size={15} className="text-[#f97316]" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3 mb-8">
              <button
                onClick={() => scrollTo("contact")}
                className="btn btn-primary"
                aria-label="Contact Gowtham to work together"
              >
                Let&apos;s Work Together
                <ArrowRight size={16} aria-hidden="true" />
              </button>

              <button
                onClick={() => scrollTo("projects")}
                className="btn btn-outline"
                aria-label="Explore Gowtham's projects"
              >
                Explore My Projects
              </button>

              {siteConfig.resumeAvailable && (
                <a
                  href="/resume.pdf"
                  download={siteConfig.resumeFilename}
                  className="btn btn-ghost"
                  aria-label="Download Gowtham's resume"
                >
                  <Download size={16} aria-hidden="true" />
                  Resume
                </a>
              )}
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4">
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[#737373] hover:text-[#171717] transition-colors group"
                aria-label="Gowtham's GitHub profile (opens in new tab)"
              >
                <GithubIcon size={18} className="group-hover:text-[#f97316] transition-colors" />
                GitHub
              </a>
              <span className="w-px h-4 bg-[#e5e5e5]" aria-hidden="true" />
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[#737373] hover:text-[#171717] transition-colors group"
                aria-label="Gowtham's LinkedIn profile (opens in new tab)"
              >
                <LinkedinIcon size={18} className="group-hover:text-[#f97316] transition-colors" />
                LinkedIn
              </a>
            </div>
          </div>

          {/* ── Right column — code visual ── */}
          <div className="hidden lg:flex justify-center items-center">
            <CodeVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Developer-themed code illustration ────────────────────────────────────── */
function CodeVisual() {
  return (
    <div className="w-full max-w-[440px]">
      {/* Window frame */}
      <div className="card overflow-hidden">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3 bg-[#fafafa] border-b border-[#e5e5e5]">
          <span className="w-3 h-3 rounded-full bg-[#ef4444]" aria-hidden="true" />
          <span className="w-3 h-3 rounded-full bg-[#f59e0b]" aria-hidden="true" />
          <span className="w-3 h-3 rounded-full bg-[#22c55e]" aria-hidden="true" />
          <span className="ml-2 text-xs text-[#a3a3a3] font-mono">gowtham.ts</span>
        </div>

        {/* Code content */}
        <div className="p-5 font-mono text-sm leading-relaxed bg-white" aria-label="Code illustration">
          <div><span className="text-[#7c3aed]">const</span> <span className="text-[#f97316]">developer</span> <span className="text-[#64748b]">= {"{"}</span></div>
          <div className="pl-5"><span className="text-[#0ea5e9]">name</span><span className="text-[#64748b]">:</span> <span className="text-[#16a34a]">&quot;Gowtham S&quot;</span><span className="text-[#64748b]">,</span></div>
          <div className="pl-5"><span className="text-[#0ea5e9]">role</span><span className="text-[#64748b]">:</span> <span className="text-[#16a34a]">&quot;Full-Stack Developer&quot;</span><span className="text-[#64748b]">,</span></div>
          <div className="pl-5"><span className="text-[#0ea5e9]">focus</span><span className="text-[#64748b]">:</span> <span className="text-[#16a34a]">&quot;AI / ML + Web&quot;</span><span className="text-[#64748b]">,</span></div>
          <div className="pl-5"><span className="text-[#0ea5e9]">stack</span><span className="text-[#64748b]">: [</span></div>
          <div className="pl-10 text-[#16a34a]">&quot;Next.js&quot;<span className="text-[#64748b]">,</span></div>
          <div className="pl-10 text-[#16a34a]">&quot;Spring Boot&quot;<span className="text-[#64748b]">,</span></div>
          <div className="pl-10 text-[#16a34a]">&quot;Python&quot;<span className="text-[#64748b]">,</span></div>
          <div className="pl-10 text-[#16a34a]">&quot;PostgreSQL&quot;</div>
          <div className="pl-5 text-[#64748b]">]<span className="text-[#64748b]">,</span></div>
          <div className="pl-5"><span className="text-[#0ea5e9]">available</span><span className="text-[#64748b]">:</span> <span className="text-[#f97316]">true</span></div>
          <div className="text-[#64748b]">{"}"}</div>
          <div className="mt-3 flex items-center gap-2">
            <span className="w-2 h-4 bg-[#f97316] opacity-70 animate-pulse rounded-sm" aria-hidden="true" />
          </div>
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 gap-3 mt-4">
        {[
          { num: "3+", label: "Projects Built" },
          { num: "3", label: "Services Offered" },
          { num: "CSE", label: "AI / ML Major" },
        ].map((stat) => (
          <div key={stat.label} className="card p-4 text-center">
            <div className="text-xl font-extrabold text-[#f97316]">{stat.num}</div>
            <div className="text-xs text-[#737373] mt-0.5 leading-tight">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
