import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function FlagshipProject() {
  const metrics = [
    {
      val: "20 Hz",
      label: "TELEMETRY LOOP",
      desc: "Simulation state and telemetry broadcast rate.",
      hover: "UPDATE INTERVAL: 50 ms",
    },
    {
      val: "0.360 s",
      label: "FUEL SENSITIVITY",
      desc: "Measured lap-time penalty per 10 kg mass scaling.",
      hover: "CIRCUIT: MONZA SENSITIVITY",
    },
    {
      val: "+16.0 km/h",
      label: "ACTIVE AERO DELTA",
      desc: "Straight-line top speed gain via X-Mode actuation.",
      hover: "DRAG REDUCTION: ~40%",
    },
    {
      val: "4-WHEEL",
      label: "THERMAL KINETICS",
      desc: "Independent cornering/braking heat flux transfer.",
      hover: "ASYMMETRIC LOAD: T8 VALIDATED",
    },
  ];

  const tags = [
    "Python 3.11",
    "PySide6",
    "NumPy",
    "SI Kinematics",
    "FIA 2026 Rules",
    "FastF1 Pipeline",
  ];

  return (
    <section id="projects" className="scroll-mt-20 pt-32 sm:pt-36 pb-24 px-4 sm:px-6 max-w-6xl mx-auto w-full">
      <div className="bg-[#0A0A0A] border border-[#1F1F1F] rounded-xl overflow-hidden">
        {/* System Bar */}
        <div className="border-b border-[#1F1F1F] px-6 py-3.5 flex items-center justify-between bg-[#080808]">
          <span className="font-mono text-xs text-[#666666] tracking-wider uppercase">
            01 / FLAGSHIP PROJECT
          </span>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#8FD694] animate-pulse" />
            <span className="font-mono text-xs text-[#8FD694]">
              v1.0 / SIMULATION BUILD
            </span>
          </div>
        </div>

        {/* Main Body */}
        <div className="flex flex-col lg:flex-row gap-8 p-6 lg:p-8 items-center justify-between">
          {/* Left Side: 45% */}
          <div className="w-full lg:w-[45%] flex flex-col justify-center space-y-4">
            <div>
              <h3 className="text-2xl font-medium text-[#F5F5F5] tracking-tight">
                Motorsport Simulation &amp; Telemetry Platform
              </h3>
              <p className="text-xs font-mono text-[#A1A1A1] mt-1.5">
                Deterministic vehicle dynamics, 2026 active aero &amp; 4-wheel tyre thermodynamics.
              </p>
            </div>

            <p className="text-sm text-[#888888] leading-relaxed">
              Built an engineering testbed to simulate lap dynamics and evaluate multi-variable performance trade-offs. Features numerical integration at 20 Hz, active aero actuation with state-lock hysteresis, and telemetry ingestion via FastF1 pipelines.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {tags.map((t) => (
                <span
                  key={t}
                  className="font-mono text-[11px] px-2.5 py-1 bg-[#101010] border border-[#1F1F1F] text-[#A1A1A1] rounded"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4 pt-4">
              <Link
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#F5F5F5] text-[#050505] rounded-md text-xs font-medium hover:bg-white transition-colors"
                href="https://github.com/Zoilista/motorsport-sim"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source Code
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                className="inline-flex items-center gap-1.5 px-4 py-2 border border-[#1F1F1F] bg-[#101010] text-[#A1A1A1] rounded-md text-xs font-mono hover:text-[#F5F5F5] hover:border-[#333333] transition-colors"
                href="https://github.com/Zoilista/motorsport-sim/blob/main/MODEL_ASSUMPTIONS.md"
                target="_blank"
                rel="noopener noreferrer"
              >
                Model Assumptions
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right Side: 55% */}
          <div className="w-full lg:w-[55%]">
            <div className="border border-[#1F1F1F] rounded-lg overflow-hidden bg-[#050505]">
              <div className="bg-[#101010] border-b border-[#1F1F1F] px-3.5 py-2 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#222222] border border-[#333333]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#222222] border border-[#333333]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#222222] border border-[#333333]" />
                </div>
                <span className="font-mono text-[10px] text-[#666666] tracking-wider">
                  scuderia_telemetry_deck.py — 20Hz LIVE
                </span>
                <div className="w-10" />
              </div>

              <div className="relative w-full aspect-[16/10] bg-[#050505]">
                <Image
                  alt="Motorsport Simulation Telemetry Deck interface showing 20Hz live telemetry, vehicle dynamics, and tyre thermodynamics"
                  className="object-contain"
                  fill
                  priority
                  src="/projects/motorsport-sim.png"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-[#1F1F1F] divide-y lg:divide-y-0 lg:divide-x divide-[#1F1F1F]">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="p-5 group transition-colors hover:bg-[#101010]/60 flex flex-col justify-between"
            >
              <div>
                <div className="font-mono text-xl font-medium text-[#F5F5F5]">
                  {m.val}
                </div>
                <div className="font-mono text-xs tracking-wider text-[#A1A1A1] mt-1">
                  {m.label}
                </div>
                <div className="text-xs text-[#666666] mt-1.5 leading-relaxed">
                  {m.desc}
                </div>
              </div>
              <div className="font-mono text-[10px] text-[#8FD694] opacity-0 group-hover:opacity-100 transition-opacity mt-3">
                {m.hover}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
