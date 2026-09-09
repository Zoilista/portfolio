import { ArrowUpRight } from "lucide-react";

interface SelectedProject {
  number: string;
  title: string;
  classification: string;
  summary: string;
  mechanismLine: string;
  pills: string[];
  significance: string;
  repoTarget: string;
  repoUrl: string;
  liveUrl?: string;
}

const selectedProjects: SelectedProject[] = [
  {
    number: "01",
    title: "JARVIS",
    classification: "MACHINE LEARNING / NEURAL NETWORKS",
    summary:
      "A from-scratch decoder-only Transformer implementation focused on understanding the mechanics of modern language models below the API layer.",
    mechanismLine:
      "Causal attention → Pre-LN architecture → tensor operations → custom training loop → optimization",
    pills: [
      "PyTorch",
      "Transformer",
      "Causal Attention",
      "Pre-LN",
      "Custom Training Loop",
      "Tensor Ops",
    ],
    significance:
      "Demonstrates mathematical understanding of neural network architecture and the ability to implement core ML mechanisms rather than only consuming model APIs.",
    repoTarget: "Zoilista / JARVIS",
    repoUrl: "https://github.com/Zoilista/JARVIS",
  },
  {
    number: "02",
    title: "EDOS ENGINE",
    classification: "DECISION SYSTEMS / ADAPTIVE SYSTEMS",
    summary:
      "An adaptive learning decision engine that models system state, interprets telemetry and selects the next computational strategy based on observed behaviour.",
    mechanismLine:
      "State modeling → telemetry → decision policy → adaptive strategy → feedback loop",
    pills: [
      "State Machines",
      "Decision Policy",
      "Telemetry Ingestion",
      "Adaptive Strategy",
      "System Feedback",
    ],
    significance:
      "Demonstrates system-level reasoning: observing a changing state, interpreting measurements and using them to drive subsequent decisions.",
    repoTarget: "Zoilista / EDOS Engine",
    repoUrl: "https://github.com/Zoilista/edos_engine_demo",
    liveUrl: "https://edos-engine-demo.vercel.app/",
  },
  {
    number: "03",
    title: "FRESHFLOW",
    classification: "FORECASTING / OPTIMIZATION",
    summary:
      "A data-driven system combining demand forecasting with surplus matching to turn historical data into operational decisions.",
    mechanismLine:
      "Data pipeline → forecasting → surplus detection → optimization → decision output",
    pills: [
      "Pandas",
      "Demand Forecasting",
      "Surplus Detection",
      "Optimization",
      "Data Pipelines",
    ],
    significance:
      "Demonstrates the ability to transform raw data into predictive signals and then connect those signals to an optimization workflow.",
    repoTarget: "Zoilista / FreshFlow",
    repoUrl: "https://github.com/Zoilista/FreshFlow",
  },
];

export default function SelectedWork() {
  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="scroll-mt-20 py-24 px-4 sm:px-6 max-w-6xl mx-auto w-full"
    >
      {/* Section Header */}
      <div className="mb-12 sm:mb-16">
        <div className="flex items-center gap-2 mb-3">
          <span className="font-mono text-xs text-[#666666] tracking-wider uppercase">
            WORK / 02
          </span>
          <span className="h-px w-8 bg-[#1F1F1F]" aria-hidden="true" />
        </div>
        <h2
          id="work-heading"
          className="text-2xl sm:text-3xl font-medium text-[#F5F5F5] tracking-tight"
        >
          SELECTED WORK
        </h2>
        <p className="text-xs sm:text-sm font-mono text-[#A1A1A1] mt-2 max-w-2xl leading-relaxed">
          Selected systems that demonstrate how I apply mathematical modeling, simulation, machine learning and optimization to real technical problems.
        </p>
      </div>

      {/* Case-study list / Specification layout */}
      <div className="space-y-6">
        {selectedProjects.map((project) => (
          <article
            key={project.title}
            className="group p-6 sm:p-7 rounded-lg bg-[#0A0A0A]/40 border border-[#1F1F1F] hover:border-[#333333] transition-colors duration-200"
          >
            {/* Meta Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#171717] pb-3 mb-5">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-[#666666] tracking-wider uppercase font-medium">
                  {project.number} / {project.classification}
                </span>
              </div>
              <span className="font-mono text-xs text-[#555555]">
                {project.repoTarget}
              </span>
            </div>

            {/* Title & Summary */}
            <div className="mb-4">
              <h3 className="text-xl sm:text-2xl font-medium text-[#F5F5F5] tracking-tight transition-transform duration-150 group-hover:translate-x-0.5">
                {project.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#A1A1A1] mt-1.5 leading-relaxed max-w-3xl">
                {project.summary}
              </p>
            </div>

            {/* Technical Detail / Pipeline */}
            <div className="my-4 p-3 rounded bg-[#060606] border border-[#171717] font-mono text-xs text-[#8FD694]/90 flex flex-wrap items-center gap-2">
              <span className="text-[#555555] text-[10px] tracking-wider uppercase shrink-0">
                PIPELINE:
              </span>
              <span className="text-[#A1A1A1]">{project.mechanismLine}</span>
            </div>

            {/* Technical Pills */}
            <div
              className="flex flex-wrap gap-2 my-4"
              aria-label="Technical components"
            >
              {project.pills.map((pill) => (
                <span
                  key={pill}
                  className="font-mono text-[11px] px-2.5 py-1 bg-[#101010] border border-[#1F1F1F] text-[#888888] group-hover:text-[#A1A1A1] group-hover:border-[#282828] transition-colors rounded"
                >
                  {pill}
                </span>
              ))}
            </div>

            {/* Engineering Significance & CTA */}
            <div className="mt-5 pt-4 border-t border-[#171717] flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="font-mono text-[11px] text-[#666666] leading-relaxed max-w-2xl">
                <span className="text-[#444444] uppercase tracking-wider block sm:inline sm:mr-2">
                  SIGNIFICANCE:
                </span>
                <span className="text-[#888888]">{project.significance}</span>
              </div>

              <div className="flex items-center gap-4 shrink-0">
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-xs text-[#A1A1A1] hover:text-[#F5F5F5] transition-colors shrink-0 group/link"
                  aria-label={`View source code for ${project.title} on GitHub (opens in a new tab)`}
                >
                  <span>VIEW SOURCE</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </a>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-xs text-[#A1A1A1] hover:text-[#F5F5F5] transition-colors shrink-0 group/link"
                    aria-label={`View live demo for ${project.title} (opens in a new tab)`}
                  >
                    <span>LIVE DEMO</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
