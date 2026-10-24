"use client";

import { skillCategories } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="section" aria-labelledby="skills-heading">
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="section-label">Technical Skills</p>
          <h2 id="skills-heading" className="section-title mx-auto" style={{ maxWidth: 480 }}>
            Technologies I work with
          </h2>
          <p className="section-subtitle mx-auto text-center">
            A straightforward view of the technologies and tools I use across my projects. No misleading progress bars — just honest skill categories.
          </p>
        </div>

        {/* Skill grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category) => (
            <div
              key={category.id}
              className="card p-6 hover:border-[#fed7aa] transition-colors"
              aria-label={`${category.label} skills`}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl" aria-hidden="true">{category.icon}</span>
                <h3 className="font-semibold text-[#171717] text-sm">{category.label}</h3>
              </div>

              {/* Pills */}
              <div className="flex flex-wrap gap-2" role="list" aria-label={`${category.label} technologies`}>
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-pill" role="listitem">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Honest note */}
        <div className="mt-10 mx-auto max-w-lg text-center">
          <p className="text-xs text-[#a3a3a3] leading-relaxed">
            Skill categories reflect technologies I have used in coursework, personal projects and self-directed learning. Proficiency varies — I am always expanding my expertise.
          </p>
        </div>
      </div>
    </section>
  );
}
