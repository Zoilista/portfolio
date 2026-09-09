interface StackCategory {
  label: string;
  items: string[];
  descriptor: string;
}

const stackCategories: StackCategory[] = [
  {
    label: "01 / MODELING",
    items: [
      "Python",
      "NumPy",
      "SciPy",
      "Mathematical Modeling",
      "Numerical Methods",
      "Differential Equations",
    ],
    descriptor:
      "Mathematical representations, numerical methods and explicit system assumptions.",
  },
  {
    label: "02 / SIMULATION",
    items: [
      "Python",
      "PySide6",
      "Physics Simulation",
      "Vehicle Dynamics",
      "Numerical Integration",
      "State Machines",
    ],
    descriptor:
      "Deterministic system simulation, physical state evolution and real-time numerical loops.",
  },
  {
    label: "03 / DATA & TELEMETRY",
    items: [
      "Pandas",
      "FastF1",
      "Telemetry Analysis",
      "CSV / Data Pipelines",
      "Sensitivity Studies",
      "Statistical Analysis",
    ],
    descriptor:
      "Turning system output into measurable telemetry, comparisons and engineering evidence.",
  },
  {
    label: "04 / SOFTWARE",
    items: [
      "TypeScript",
      "Next.js",
      "React",
      "Git",
      "Linux",
      "API Design",
    ],
    descriptor:
      "Production software architecture for interfaces, tooling and system integration.",
  },
];

export default function EngineeringStack() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="scroll-mt-20 py-24 px-4 sm:px-6 max-w-6xl mx-auto w-full"
    >
      {/* Section Header */}
      <div className="mb-12 sm:mb-16">
        <div className="flex items-center gap-2 mb-3">
          <span className="font-mono text-xs text-[#666666] tracking-wider uppercase">
            STACK / 01
          </span>
          <span className="h-px w-8 bg-[#1F1F1F]" aria-hidden="true" />
        </div>
        <h2
          id="skills-heading"
          className="text-2xl sm:text-3xl font-medium text-[#F5F5F5] tracking-tight"
        >
          ENGINEERING STACK
        </h2>
        <p className="text-xs sm:text-sm font-mono text-[#A1A1A1] mt-2 max-w-2xl leading-relaxed">
          The computational tools I use to model systems, run simulations, analyze data and turn technical models into software.
        </p>
      </div>

      {/* 4-Column Specification Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {stackCategories.map((cat) => (
          <div
            key={cat.label}
            className="group flex flex-col p-5 sm:p-6 rounded-lg bg-[#0A0A0A]/40 border border-[#1F1F1F] hover:border-[#333333] transition-colors duration-200"
          >
            {/* Category Meta Bar */}
            <div className="flex items-center justify-between border-b border-[#171717] pb-3 mb-4">
              <span className="font-mono text-xs text-[#888888] tracking-wider uppercase font-medium">
                {cat.label}
              </span>
              <span className="font-mono text-[10px] text-[#444444] uppercase tracking-widest">
                SPEC
              </span>
            </div>

            {/* Tool / Method Inventory */}
            <ul className="space-y-2 mb-6 flex-1" aria-label={`${cat.label} tools`}>
              {cat.items.map((item) => (
                <li
                  key={item}
                  className="flex items-center justify-between py-1 border-b border-[#121212] font-mono text-xs text-[#D4D4D4] group-hover:text-[#F0F0F0] transition-colors"
                >
                  <span>{item}</span>
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-[#8FD694]/80 shrink-0 ml-2"
                    aria-hidden="true"
                  />
                </li>
              ))}
            </ul>

            {/* Short Descriptor */}
            <div className="mt-auto pt-3 border-t border-[#171717]">
              <p className="font-mono text-[11px] text-[#666666] leading-relaxed group-hover:text-[#888888] transition-colors">
                {cat.descriptor}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
