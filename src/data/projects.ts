// ─────────────────────────────────────────────────────────────────────────────
// PROJECT DATA
// Edit this file to update project cards on the portfolio.
// All fields are optional unless marked required.
// ─────────────────────────────────────────────────────────────────────────────

export type ProjectStatus = "concept" | "in-development" | "testing" | "deployed";

export interface Project {
  id: string;
  name: string;                   // required
  category: string;               // e.g. "Full-Stack Web App"
  tagline: string;                // short one-liner
  problem: string;                // problem being solved
  solution: string;               // what the project does
  features: string[];             // key features
  plannedFeatures?: string[];     // features not yet built
  technologies: string[];         // tech stack
  status: ProjectStatus;
  statusNote?: string;            // optional clarification on status
  githubUrl?: string;             // leave undefined if not yet public
  demoUrl?: string;               // leave undefined if not deployed
  imageAlt: string;               // accessible alt text for the image
  featured: boolean;              // show in featured row
}

export const projects: Project[] = [
  {
    id: "college-bus-tracker",
    name: "College Bus Tracking System",
    category: "Full-Stack Web Application",
    tagline: "Real-time college bus tracking for students and drivers.",
    problem:
      "Students struggle to know when their college bus will arrive, leading to missed trips and uncertainty about bus locations.",
    solution:
      "A transportation tracking application that lets students search buses by number or bus stop and view live locations on a map, while drivers manage trip state from a simple interface.",
    features: [
      "Passenger map interface with live bus markers",
      "Bus and bus-stop search functionality",
      "Driver trip start/stop controls",
      "OpenStreetMap & Leaflet.js map integration",
      "Responsive mobile-first interface",
    ],
    plannedFeatures: [
      "Real-time WebSocket-based location updates",
      "Push notifications for arrival estimates",
      "Driver authentication and route management",
    ],
    technologies: ["Next.js", "Java", "Spring Boot", "PostgreSQL", "Leaflet.js", "OpenStreetMap"],
    status: "in-development",
    statusNote: "Core UI and map integration in development; backend API design in progress.",
    githubUrl: undefined,
    demoUrl: undefined,
    imageAlt: "College Bus Tracking System interface showing a map with bus markers",
    featured: true,
  },
  {
    id: "cricket-performance-index",
    name: "Cricket Performance Index (CPI)",
    category: "Sports Analytics Platform",
    tagline: "Data-driven cricket player performance evaluation.",
    problem:
      "Cricket performance assessment is often subjective. Teams and coaches lack structured, data-driven tools to measure player performance across technical, mental, physical and tactical dimensions.",
    solution:
      "A sports analytics platform that calculates a composite Cricket Performance Index using a structured formula: CPI = (40% × PPI) + (60% × MPI), giving coaches and players objective, comparable performance scores.",
    features: [
      "Player Performance Index (PPI) calculation",
      "Match Performance Index (MPI) calculation",
      "Cricket Performance Index (CPI): CPI = 40% × PPI + 60% × MPI",
      "Technical, mental, physical and tactical performance analysis",
      "Performance gap analysis",
      "Player and coach dashboards",
      "Performance trends and analytical reports",
    ],
    plannedFeatures: [
      "Data visualization with interactive charts",
      "Multi-season comparison",
      "Export reports to PDF",
    ],
    technologies: ["Next.js", "Python", "Data Analytics", "Visualization Tools"],
    status: "in-development",
    statusNote: "Concept and formula defined; dashboard UI and data pipeline in development.",
    githubUrl: undefined,
    demoUrl: undefined,
    imageAlt: "Cricket Performance Index dashboard showing player analytics and performance scores",
    featured: true,
  },
  {
    id: "code-clash",
    name: "Code Clash",
    category: "Competitive Coding Platform",
    tagline: "Competitive coding meets gaming — 1v1 and 2v2 coding battles.",
    problem:
      "Competitive programming practice can feel tedious and isolated. There is no engaging, game-like environment for developers to compete, improve and have fun while coding.",
    solution:
      "A concept for a competitive coding game platform that combines real coding challenges with game-style matchmaking, XP systems and leaderboards to make programming practice genuinely enjoyable.",
    features: [
      "Competitive 1v1 and 2v2 coding match concept",
      "Match lobbies and matchmaking design",
      "Coding challenge scoring system",
      "Coins, XP and progression system design",
      "Player profiles and leaderboards design",
      "Responsive gaming-style interface concept",
      "Match results and performance tracking",
    ],
    plannedFeatures: [
      "Real-time multiplayer coding environment",
      "Live opponent code visibility (spectator mode)",
      "Tournament brackets",
    ],
    technologies: ["Next.js", "TypeScript", "Backend APIs", "Database", "WebSockets (planned)"],
    status: "concept",
    statusNote:
      "This is a design concept and project idea. Multiplayer and matchmaking features are planned, not yet implemented.",
    githubUrl: undefined,
    demoUrl: undefined,
    imageAlt: "Code Clash platform concept showing a competitive coding match interface",
    featured: true,
  },
];
