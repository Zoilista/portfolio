import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";

const focusAreas = [
  "Mathematical Modeling",
  "Simulation",
  "Software Engineering",
  "Telemetry & Data",
  "Modern Web",
];

export default function Hero() {
  return (
    <main id="main" className="min-h-[90vh] flex flex-col justify-center items-center py-20 px-4 relative" tabIndex={-1}>
      <div className="hero-annotations" aria-hidden="true">
        <span className="system-label">SYSTEM / 01</span>
        <span className="model-sequence">
          MODEL <ArrowRight /> SYSTEM <ArrowRight /> INTERFACE <ArrowRight /> EVIDENCE
        </span>
      </div>
      <div className="hero-content">
        <p className="status-badge"><span className="status-dot" aria-hidden="true" />Open to Engineering Opportunities</p>
        <h1>Muhammed <span>Görkem Altun</span></h1>
        <p className="subtitle">Mathematics &amp; Computer Science Student</p>
        <div className="manifesto">
          <p>Mathematics gives me the models.</p>
          <p>Computer Science gives me the systems.</p>
          <p>Software turns them into something usable.</p>
        </div>
        <ul className="focus-tags" aria-label="Technical focus">
          {focusAreas.map((area) => <li key={area}>{area}</li>)}
        </ul>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">View Flagship Project <ArrowDown size={16} aria-hidden="true" /></a>
          <a className="button button-secondary" href="https://github.com/Zoilista" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile (opens in a new tab)">GitHub Profile <ArrowUpRight size={16} aria-hidden="true" /></a>
        </div>
      </div>
      <div className="scroll-cue" aria-hidden="true">
        <span>SCROLL TO EXPLORE</span>
        <ArrowDown size={14} />
      </div>
    </main>
  );
}
