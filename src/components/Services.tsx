"use client";

import { Monitor, Server, Brain, ArrowRight } from "lucide-react";
import { services } from "@/data/services";

// Map icon string → Lucide component
const ICON_MAP: Record<string, React.ReactNode> = {
  Monitor: <Monitor size={24} className="text-[#f97316]" aria-hidden="true" />,
  Server: <Server size={24} className="text-[#f97316]" aria-hidden="true" />,
  Brain: <Brain size={24} className="text-[#f97316]" aria-hidden="true" />,
};

export default function Services() {
  const handleCta = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="section" aria-labelledby="services-heading">
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="section-label">What I Do</p>
          <h2 id="services-heading" className="section-title mx-auto" style={{ maxWidth: 540 }}>
            Services I can help you with
          </h2>
          <p className="section-subtitle mx-auto text-center">
            I offer focused development services across web, backend and AI/ML — tailored to your project&apos;s needs.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) => (
            <article
              key={service.id}
              className="card p-7 flex flex-col hover:border-[#fed7aa] transition-colors group"
              aria-label={`Service: ${service.title}`}
            >
              {/* Icon wrapper */}
              <div className="w-12 h-12 rounded-xl bg-[#fff7ed] flex items-center justify-center mb-5 group-hover:bg-[#fed7aa] transition-colors">
                {ICON_MAP[service.icon] ?? <Monitor size={24} className="text-[#f97316]" />}
              </div>

              <h3 className="font-bold text-[#171717] text-lg mb-2">{service.title}</h3>
              <p className="text-sm text-[#737373] leading-relaxed mb-4 flex-1">
                {service.description}
              </p>

              {/* Deliverables */}
              <ul className="space-y-1.5 mb-6" aria-label={`${service.title} deliverables`}>
                {service.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-xs text-[#737373]">
                    <span className="mt-0.5 w-4 h-4 rounded-full bg-[#fff7ed] flex items-center justify-center flex-shrink-0 text-[#f97316] font-bold text-[10px]">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleCta(service.ctaHref)}
                className="btn btn-outline text-sm mt-auto w-full group-hover:border-[#f97316] group-hover:text-[#f97316]"
                aria-label={`${service.cta} for ${service.title}`}
              >
                {service.cta}
                <ArrowRight size={14} aria-hidden="true" />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
