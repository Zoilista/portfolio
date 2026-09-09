"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const sectionLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Approach", href: "#approach" },
  { label: "Stack", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

const linkedInUrl = "https://www.linkedin.com/in/m-g%C3%B6rkem-altun-17763726a/";

function NavigationLinks({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <>
      {sectionLinks.map(({ label, href }) => (
        <a key={href} href={href} onClick={onNavigate}>{label}</a>
      ))}
      <a href="https://github.com/Zoilista" target="_blank" rel="noopener noreferrer" onClick={onNavigate} aria-label="GitHub (opens in a new tab)">
        GitHub <ArrowUpRight size={14} aria-hidden="true" />
      </a>
      <a href={linkedInUrl} target="_blank" rel="noopener noreferrer" onClick={onNavigate} aria-label="LinkedIn (opens in a new tab)">
        LinkedIn <ArrowUpRight size={14} aria-hidden="true" />
      </a>
    </>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    function dismiss(event: PointerEvent) {
      if (!headerRef.current?.contains(event.target as Node)) setOpen(false);
    }
    function escape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    }
    document.addEventListener("pointerdown", dismiss);
    document.addEventListener("keydown", escape);
    return () => {
      document.removeEventListener("pointerdown", dismiss);
      document.removeEventListener("keydown", escape);
    };
  }, [open]);

  return (
    <header className="navbar" ref={headerRef} onBlur={(event) => {
      if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
    }}>
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="nav-inner">
        <a className="wordmark" href="#main" onClick={() => setOpen(false)}>Görkem Altun<span aria-hidden="true">.</span></a>
        <nav className="desktop-nav" aria-label="Main navigation"><NavigationLinks /></nav>
        <button ref={toggleRef} className="nav-toggle" type="button" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Close navigation" : "Open navigation"} title={open ? "Close navigation" : "Open navigation"} onClick={() => setOpen(!open)}>
          {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </div>
      <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation" hidden={!open}>
        <NavigationLinks onNavigate={() => setOpen(false)} />
      </nav>
    </header>
  );
}
