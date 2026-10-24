"use client";

import { Code2, Server, Brain, BookOpen, Lightbulb, Wrench } from "lucide-react";

const INTERESTS = [
  {
    icon: <Code2 size={20} className="text-[#f97316]" aria-hidden="true" />,
    title: "Full-Stack Web Development",
    description:
      "Building complete web applications from responsive frontends to scalable backends. I enjoy turning ideas into working products using React, Next.js and modern tooling.",
  },
  {
    icon: <Server size={20} className="text-[#f97316]" aria-hidden="true" />,
    title: "Java & Spring Boot",
    description:
      "Designing and building backend APIs and services using Java and Spring Boot. I focus on clean architecture, proper validation and reliable data handling.",
  },
  {
    icon: <Brain size={20} className="text-[#f97316]" aria-hidden="true" />,
    title: "Artificial Intelligence & Machine Learning",
    description:
      "Exploring practical AI and ML using Python. My coursework in AI/ML drives me to understand how data-driven models can be integrated into real applications.",
  },
  {
    icon: <BookOpen size={20} className="text-[#f97316]" aria-hidden="true" />,
    title: "Python Development",
    description:
      "Using Python for data analysis, scripting, automation and machine learning prototyping. Python is my primary language for exploring AI/ML concepts.",
  },
  {
    icon: <Lightbulb size={20} className="text-[#f97316]" aria-hidden="true" />,
    title: "Real-World Problem Solving",
    description:
      "I am drawn to projects that address actual needs — whether it is helping students track buses or giving coaches objective player performance data.",
  },
  {
    icon: <Wrench size={20} className="text-[#f97316]" aria-hidden="true" />,
    title: "Building Useful Digital Products",
    description:
      "I aim to ship software that people can actually use. Every project I take on is an opportunity to learn, build and deliver something meaningful.",
  },
];

export default function About() {
  return (
    <section id="about" className="section section-soft" aria-labelledby="about-heading">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* ── Left: intro text ── */}
          <div>
            <p className="section-label">About Me</p>
            <h2 id="about-heading" className="section-title">
              A developer who cares about <span className="text-[#f97316]">building things that work.</span>
            </h2>

            <div className="space-y-4 text-[#737373] leading-relaxed">
              <p>
                I&apos;m <strong className="text-[#171717]">Gowtham S</strong>, a Computer Science and Engineering student specialising in Artificial Intelligence and Machine Learning. I&apos;m passionate about building modern, functional web applications and backend systems that solve real problems.
              </p>
              <p>
                My technical interests span the full stack — from crafting clean, responsive user interfaces with React and Next.js to building reliable REST APIs with Java Spring Boot and PostgreSQL. I complement this with Python for data analysis and machine learning exploration.
              </p>
              <p>
                I take on freelance projects because I enjoy the process of understanding a client&apos;s problem, designing a clear solution and delivering working software. I value clean code, honest communication and practical outcomes over unnecessary complexity.
              </p>
              <p>
                If you have a web application, backend system or AI-assisted tool you want to build, I would be glad to discuss how I can help.
              </p>
            </div>

            {/* Education card */}
            <div className="mt-8 card p-5">
              <div className="flex items-start gap-3">
                <span className="text-2xl" aria-hidden="true">🎓</span>
                <div>
                  <div className="font-semibold text-[#171717] text-sm">
                    B.E. Computer Science and Engineering
                  </div>
                  <div className="text-sm text-[#f97316] font-medium">
                    Specialisation: Artificial Intelligence & Machine Learning
                  </div>
                  <div className="text-sm text-[#737373] mt-0.5">
                    Currently pursuing — India
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right: interest cards ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {INTERESTS.map((item) => (
              <div key={item.title} className="card p-5 hover:border-[#fed7aa] transition-colors">
                <div className="mb-3">{item.icon}</div>
                <h3 className="font-semibold text-[#171717] text-sm mb-1.5">{item.title}</h3>
                <p className="text-xs text-[#737373] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
