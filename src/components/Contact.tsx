const channels = [
  { label: "GITHUB ↗", href: "https://github.com/Zoilista" },
  {
    label: "LINKEDIN ↗",
    href: "https://www.linkedin.com/in/m-g%C3%B6rkem-altun-17763726a/",
  },
  { label: "EMAIL ↗", href: "mailto:gorkemaltun07@gmail.com" },
];

export default function Contact() {
  return (
    <footer
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-20 max-w-6xl mx-auto px-4 sm:px-6 pt-36 pb-20 w-full"
    >
      {/* Section Identity */}
      <div className="flex items-center gap-2 mb-6">
        <span className="w-1.5 h-1.5 rounded-full bg-[#8FD694]" aria-hidden="true" />
        <span className="font-mono text-xs text-[#666666] tracking-wider uppercase">
          CONTACT / 05
        </span>
        <span className="h-px w-8 bg-[#1F1F1F]" aria-hidden="true" />
      </div>

      {/* Engineering Statement */}
      <h2
        id="contact-heading"
        className="text-3xl sm:text-5xl lg:text-6xl font-medium text-[#F5F5F5] leading-tight tracking-tight uppercase"
      >
        BUILDING SYSTEMS
        <br />
        THAT CAN BE MEASURED.
      </h2>

      {/* Sub-statement */}
      <p className="text-sm sm:text-base text-[#888888] mt-4 max-w-xl font-mono leading-relaxed">
        Open to engineering, simulation, and data-driven systems.
      </p>

      {/* Outbound Channels */}
      <div
        className="flex flex-wrap gap-3 sm:gap-4 mt-8 sm:mt-10"
        aria-label="Contact channels"
      >
        {channels.map((channel) => (
          <a
            key={channel.label}
            href={channel.href}
            target={channel.href.startsWith("mailto:") ? undefined : "_blank"}
            rel={
              channel.href.startsWith("mailto:")
                ? undefined
                : "noopener noreferrer"
            }
            className="inline-flex items-center px-4 py-2.5 rounded bg-[#0A0A0A] border border-[#1F1F1F] font-mono text-xs text-[#A1A1A1] hover:text-[#F5F5F5] hover:border-[#333333] transition-colors"
          >
            <span>{channel.label}</span>
          </a>
        ))}
      </div>

      {/* Footer Baseline */}
      <div className="mt-24 sm:mt-32 pt-8 border-t border-[#1F1F1F] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs text-[#666666]">
        <span>GÖRKEM ALTUN</span>
        <span>2026 · ENGINEERING PORTFOLIO / v1.0</span>
      </div>
    </footer>
  );
}
