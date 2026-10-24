"use client";

import Image from "next/image";
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

          {/* ── Right column — profile photo ── */}
          <div className="hidden lg:flex justify-center items-center">
            <ProfilePhoto />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Profile photo with orange accent ring ─────────────────────────────────── */
function ProfilePhoto() {
  return (
    <div className="relative w-full max-w-[400px] flex flex-col items-center">
      {/* Decorative orange ring */}
      <div
        className="absolute inset-0 rounded-3xl"
        style={{
          background: "linear-gradient(135deg, #f97316 0%, #fed7aa 100%)",
          transform: "rotate(3deg) scale(1.03)",
          zIndex: 0,
          borderRadius: "1.5rem",
        }}
        aria-hidden="true"
      />

      {/* Photo card */}
      <div
        className="relative z-10 w-full rounded-3xl overflow-hidden shadow-xl border-4 border-white"
        style={{ aspectRatio: "4/5" }}
      >
        <Image
          src="/images/gowtham.png"
          alt="Gowtham S — Freelance Web Developer & AI/ML Developer"
          fill
          style={{ objectFit: "cover", objectPosition: "top center" }}
          priority
          sizes="(max-width: 1024px) 0px, 400px"
        />
      </div>

      {/* Floating name card */}
      <div
        className="absolute bottom-4 left-4 right-4 z-20 bg-white/95 backdrop-blur-sm rounded-2xl px-5 py-3 shadow-lg border border-[#e5e5e5]"
      >
        <div className="flex items-center justify-between">
          <div>
            <div className="font-bold text-[#171717] text-sm">Gowtham S</div>
            <div className="text-xs text-[#f97316] font-medium">Full-Stack Developer · AI/ML</div>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse-dot" aria-hidden="true" />
            <span className="text-xs text-[#737373] font-medium">Available</span>
          </div>
        </div>
      </div>
    </div>
  );
}
