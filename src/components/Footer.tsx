"use client";

import { ArrowUp, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";
import { siteConfig } from "@/data/siteConfig";

const FOOTER_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

// year is passed from the server component (page.tsx) to avoid new Date() in client
export default function Footer({ year }: { year: number }) {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#171717] text-white" aria-label="Site footer">
      <div className="container py-12">
        <div className="grid md:grid-cols-3 gap-8 pb-8 border-b border-white/10">
          {/* Brand */}
          <div>
            <div className="font-bold text-xl mb-3">
              <span className="text-[#f97316]">Gowtham</span>
              <span className="text-white">.dev</span>
            </div>
            <p className="text-sm text-white/50 leading-relaxed max-w-xs">
              CS Engineering student specialising in AI/ML. Building modern web applications, backend systems and practical AI-powered solutions.
            </p>
            <div className="flex gap-3 mt-5">
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#f97316] flex items-center justify-center transition-colors"
                aria-label="GitHub profile (opens in new tab)"
              >
                <GithubIcon size={16} aria-hidden="true" />
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#f97316] flex items-center justify-center transition-colors"
                aria-label="LinkedIn profile (opens in new tab)"
              >
                <LinkedinIcon size={16} aria-hidden="true" />
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#f97316] flex items-center justify-center transition-colors"
                aria-label={`Email ${siteConfig.name}`}
              >
                <Mail size={16} aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Quick nav */}
          <nav aria-label="Footer navigation">
            <div className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-4">
              Navigation
            </div>
            <ul className="space-y-2.5" role="list">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA */}
          <div>
            <div className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-4">
              Work With Me
            </div>
            <p className="text-sm text-white/50 leading-relaxed mb-4">
              Looking for a developer for your web, backend or AI/ML project? Let&apos;s talk.
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="btn btn-primary text-sm"
              aria-label="Email Gowtham to discuss a project"
            >
              <Mail size={14} aria-hidden="true" />
              Get In Touch
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-xs text-white/40">
            © {year} Gowtham S. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-white/40 hover:text-white transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp size={13} aria-hidden="true" />
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
