import { Fragment } from "react";

interface PipelineStep {
  id: string;
  label: string;
  title: string;
  flow: [string, string, string];
  desc: string;
  input: string;
  output: string;
}

const pipelineSteps: PipelineStep[] = [
  {
    id: "model",
    label: "01 / MODEL",
    title: "MODEL",
    flow: ["Problem", "Assumptions", "Mathematical Model"],
    desc: "Translate physical or computational problems into explicit models, constraints, and measurable variables.",
    input: "PROBLEM SPACE",
    output: "MODEL STATE",
  },
  {
    id: "simulate",
    label: "02 / SIMULATE",
    title: "SIMULATE",
    flow: ["Model", "Numerical Integration", "System State"],
    desc: "Implement deterministic simulation loops and expose internal state through telemetry instead of treating the system as a black box.",
    input: "MODEL STATE",
    output: "SYSTEM STATE",
  },
  {
    id: "measure",
    label: "03 / MEASURE",
    title: "MEASURE",
    flow: ["Telemetry", "Sensitivity", "Evidence"],
    desc: "Run controlled parameter sweeps, compare outcomes, and use measured sensitivity to guide the next iteration.",
    input: "TELEMETRY",
    output: "EVIDENCE",
  },
];

const loopSteps = [
  { name: "DEFINE", isReturn: false },
  { name: "MODEL", isReturn: false },
  { name: "IMPLEMENT", isReturn: false },
  { name: "SIMULATE", isReturn: false },
  { name: "MEASURE", isReturn: false },
  { name: "ITERATE", isReturn: true },
];

export default function Approach() {
  return (
    <section
      id="approach"
      aria-labelledby="approach-heading"
      className="scroll-mt-20 py-24 px-4 sm:px-6 max-w-6xl mx-auto w-full"
    >
      {/* Section Header */}
      <div className="mb-12 sm:mb-16">
        <div className="flex items-center gap-2 mb-3">
          <span className="font-mono text-xs text-[#666666] tracking-wider uppercase">
            APPROACH / 01
          </span>
          <span className="h-px w-8 bg-[#1F1F1F]" aria-hidden="true" />
        </div>
        <h2
          id="approach-heading"
          className="text-2xl sm:text-3xl font-medium text-[#F5F5F5] tracking-tight"
        >
          HOW I BUILD SYSTEMS
        </h2>
        <p className="text-xs sm:text-sm font-mono text-[#A1A1A1] mt-2 max-w-2xl leading-relaxed">
          A repeatable engineering loop for turning physical and computational problems into measurable systems.
        </p>
      </div>

      {/* Engineering Pipeline */}
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center">
        {pipelineSteps.map((step, idx) => (
          <Fragment key={step.id}>
            <div className="flex-1 flex flex-col self-stretch">
              <div className="group flex-1 flex flex-col p-5 sm:p-6 rounded-lg bg-[#0A0A0A]/40 border border-[#1F1F1F] hover:border-[#333333] transition-colors duration-200">
                {/* Card Meta Bar */}
                <div className="flex items-center justify-between border-b border-[#171717] pb-3 mb-4">
                  <span className="font-mono text-xs text-[#666666] tracking-wider uppercase">
                    {step.label}
                  </span>
                  <span className="font-mono text-[10px] text-[#444444] uppercase tracking-widest">
                    STAGE 0{idx + 1}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-mono text-lg font-medium text-[#F5F5F5] tracking-tight">
                  {step.title}
                </h3>

                {/* Micro-flow */}
                <div className="my-5 p-3 rounded bg-[#060606] border border-[#171717] font-mono text-xs flex flex-col gap-1.5">
                  <div className="flex items-center justify-between text-[#888888]">
                    <span>{step.flow[0]}</span>
                    <span className="text-[#444444] text-[10px]">IN</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[#333333] pl-1" aria-hidden="true">
                    <span className="w-px h-3 bg-[#1F1F1F]" />
                    <span className="text-[10px] leading-none">↓</span>
                  </div>
                  <div className="flex items-center justify-between text-[#A1A1A1]">
                    <span>{step.flow[1]}</span>
                    <span className="text-[#444444] text-[10px]">PROCESS</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[#333333] pl-1" aria-hidden="true">
                    <span className="w-px h-3 bg-[#1F1F1F]" />
                    <span className="text-[10px] leading-none">↓</span>
                  </div>
                  <div className="flex items-center justify-between text-[#F5F5F5] font-medium">
                    <span>{step.flow[2]}</span>
                    <span className="text-[#8FD694] text-[10px]">OUT</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#888888] leading-relaxed mb-6">
                  {step.desc}
                </p>

                {/* Technical Annotation (Input / Output) */}
                <div className="mt-auto pt-3 border-t border-[#171717] font-mono text-[11px] space-y-1.5">
                  <div className="flex items-center justify-between text-[#555555]">
                    <span className="tracking-wider text-[10px]">INPUT:</span>
                    <span className="text-[#888888] group-hover:text-[#A1A1A1] transition-colors">
                      {step.input}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-[#555555]">
                    <span className="tracking-wider text-[10px]">OUTPUT:</span>
                    <span className="text-[#A1A1A1] group-hover:text-[#F5F5F5] transition-colors">
                      {step.output}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Connector arrow between cards (hidden after the last card) */}
            {idx < pipelineSteps.length - 1 && (
              <>
                {/* Desktop horizontal connector */}
                <div
                  className="hidden lg:flex items-center justify-center shrink-0 w-8 px-1 text-[#444444]"
                  aria-hidden="true"
                >
                  <div className="w-full h-px bg-[#222222] relative flex items-center justify-end">
                    <div className="w-1.5 h-1.5 border-t border-r border-[#444444] rotate-45 translate-x-0.5" />
                  </div>
                </div>

                {/* Mobile vertical connector */}
                <div
                  className="flex lg:hidden justify-center py-2.5 text-[#333333]"
                  aria-hidden="true"
                >
                  <div className="h-6 w-px bg-[#222222] relative flex flex-col items-center justify-end">
                    <div className="w-1.5 h-1.5 border-b border-r border-[#444444] rotate-45 translate-y-0.5" />
                  </div>
                </div>
              </>
            )}
          </Fragment>
        ))}
      </div>

      {/* Engineering Loop Block */}
      <div className="mt-12 sm:mt-16 bg-[#080808]/80 border border-[#1F1F1F] rounded-lg p-5 sm:p-6 relative overflow-hidden">
        {/* Loop Meta Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#171717] pb-3 mb-5">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8FD694]" aria-hidden="true" />
            <span className="font-mono text-xs text-[#888888] tracking-wider uppercase font-medium">
              ENGINEERING LOOP
            </span>
          </div>
          <span className="font-mono text-[10px] sm:text-[11px] text-[#666666] tracking-wider uppercase">
            EVIDENCE DRIVES THE NEXT MODEL
          </span>
        </div>

        {/* Loop Flow Elements */}
        <div>
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
            {loopSteps.map((step, idx) => (
              <div key={step.name} className="flex items-center gap-2 sm:gap-2.5">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded bg-[#0D0D0D] border border-[#1F1F1F] text-xs font-mono text-[#D4D4D4] hover:border-[#333333] transition-colors">
                  <span className="text-[#555555] text-[10px]">0{idx + 1}</span>
                  <span className="font-medium text-[#E5E5E5]">{step.name}</span>
                  {step.isReturn && (
                    <span
                      className="text-[#8FD694] ml-0.5 font-bold text-xs"
                      title="Continuous feedback loop"
                      aria-label="Feedback loop to beginning"
                    >
                      ↺
                    </span>
                  )}
                </div>
                {idx < loopSteps.length - 1 && (
                  <span
                    className="text-[#444444] text-xs font-mono select-none"
                    aria-hidden="true"
                  >
                    →
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Minimal Return Loop Guide Line */}
          <div
            className="hidden sm:flex items-center justify-between mt-4 pt-3 border-t border-dashed border-[#171717] font-mono text-[10px] text-[#555555]"
            aria-hidden="true"
          >
            <div className="flex items-center gap-1.5">
              <span className="text-[#8FD694]">↑</span>
              <span>INITIAL PROBLEM FORMULATION</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span>MEASURED OUTPUT → NEXT ITERATION</span>
              <span className="text-[#8FD694]">↺</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
