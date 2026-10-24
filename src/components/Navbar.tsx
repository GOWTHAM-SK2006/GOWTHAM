"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavClick = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-[#e5e5e5] shadow-sm"
          : "bg-transparent"
      }`}
      role="banner"
    >
      <div className="container">
        <nav
          className="flex items-center justify-between h-16"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick("#home"); }}
            className="font-bold text-lg tracking-tight text-[#171717] hover:text-[#f97316] transition-colors"
            aria-label="Gowtham S — back to top"
          >
            <span className="text-[#f97316]">Gowtham</span>
            <span className="text-[#171717]">.dev</span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-1" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="px-3 py-2 text-sm font-medium text-[#737373] hover:text-[#171717] rounded-lg hover:bg-[#fafafa] transition-all"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Hire Me + Hamburger */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleNavClick("#contact")}
              className="hidden md:inline-flex btn btn-primary text-sm"
              aria-label="Hire Gowtham S"
            >
              Hire Me
            </button>

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-[#fafafa] transition-colors text-[#171717]"
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`md:hidden bg-white border-b border-[#e5e5e5] overflow-hidden transition-all duration-300 ${
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
        aria-hidden={!open}
      >
        <nav className="container py-4 flex flex-col gap-1" aria-label="Mobile navigation">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-left px-4 py-3 text-sm font-medium text-[#737373] hover:text-[#171717] hover:bg-[#fafafa] rounded-lg transition-all"
              tabIndex={open ? 0 : -1}
            >
              {link.label}
            </button>
          ))}
          <div className="pt-2 border-t border-[#e5e5e5] mt-2">
            <button
              onClick={() => handleNavClick("#contact")}
              className="btn btn-primary w-full text-sm"
              tabIndex={open ? 0 : -1}
            >
              Hire Me
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
