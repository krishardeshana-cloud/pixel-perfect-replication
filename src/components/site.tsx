import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";

export function useInView<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, inView };
}

export function Reveal({
  children,
  className = "",
  delay = 0,
  mask = false,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  mask?: boolean;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`${mask ? "reveal-mask" : "reveal"} ${inView ? "is-in" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

/** Headline whose lines rise from beneath a mask, staggered. */
export function RiseLines({ lines, className = "" }: { lines: ReactNode[]; className?: string }) {
  return (
    <span className={className}>
      {lines.map((l, i) => (
        <Line key={i} delay={i * 120}>
          {l}
        </Line>
      ))}
    </span>
  );
}
function Line({ children, delay }: { children: ReactNode; delay: number }) {
  const { ref, inView } = useInView<HTMLSpanElement>();
  return (
    <span ref={ref} className={`line-rise block overflow-hidden pb-[0.08em] ${inView ? "is-in" : ""}`}>
      <span style={{ transitionDelay: `${delay}ms` }}>{children}</span>
    </span>
  );
}

export function useParallax(speed = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const el = ref.current;
        if (!el) return;
        const r = el.parentElement!.getBoundingClientRect();
        el.style.transform = `translate3d(0, ${(r.top + r.height / 2 - window.innerHeight / 2) * -speed}px, 0) scale(1.15)`;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [speed]);
  return ref;
}

const nav = [
  { to: "/process", label: "Process" },
  { to: "/verify", label: "Verify" },
  { to: "/about", label: "About" },
] as const;

export function Header({ tone = "light" }: { tone?: "light" | "dark" }) {
  const [open, setOpen] = useState(false);
  const fg = tone === "light" ? "text-ink-foreground" : "text-foreground";
  return (
    <header className={`absolute inset-x-0 top-0 z-30 ${fg}`}>
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-6 md:px-10">
        <Link to="/" className="font-display text-3xl leading-none" aria-label="Bharat home">
          bharat
        </Link>
        <nav className="hidden items-center gap-10 md:flex">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} className="label-caps opacity-80 transition-opacity hover:opacity-100" activeProps={{ className: "opacity-100 underline underline-offset-8" }}>
              {n.label}
            </Link>
          ))}
          <Link to="/verify" className={`label-caps border px-5 py-3 transition-colors ${tone === "light" ? "border-ink-foreground/50 hover:bg-ink-foreground hover:text-ink" : "border-foreground/40 hover:bg-foreground hover:text-background"}`}>
            Track a case
          </Link>
        </nav>
        <button className="label-caps md:hidden" onClick={() => setOpen(!open)} aria-expanded={open}>
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open && (
        <nav className="mx-6 flex flex-col gap-5 bg-ink p-8 text-ink-foreground md:hidden">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="font-serif text-4xl">
              {n.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="grain bg-ink text-ink-foreground">
      <div className="mx-auto max-w-[1400px] px-6 pb-10 pt-24 md:px-10">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="font-deva text-2xl text-gold">सत्यमेव जयते</p>
            <p className="mt-6 font-serif text-5xl leading-[1.05] md:text-7xl">
              Every voice, <em className="text-gold">verified.</em>
              <br />Every promise, kept.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 md:col-span-5 md:pt-4">
            <div>
              <p className="label-caps text-ink-foreground/50">Explore</p>
              <ul className="mt-5 space-y-3">
                <li><Link to="/" className="hover:text-gold">Home</Link></li>
                {nav.map((n) => (
                  <li key={n.to}><Link to={n.to} className="hover:text-gold">{n.label}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <p className="label-caps text-ink-foreground/50">Reach</p>
              <ul className="mt-5 space-y-3 text-ink-foreground/80">
                <li>Helpline 1800-000-0000</li>
                <li>New Delhi, India</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-24 overflow-hidden">
          <p className="font-display text-gold-gradient select-none text-[24vw] leading-[0.8]">bharat</p>
        </div>
        <div className="mt-8 flex flex-col justify-between gap-3 border-t border-ink-foreground/15 pt-6 text-sm text-ink-foreground/50 md:flex-row">
          <span>© 2026 Bharat Grievance Verifier System</span>
          <span className="label-caps">Grievance · Verifier · System</span>
        </div>
      </div>
    </footer>
  );
}

export function PageHero({ kicker, deva, lines, intro, image }: { kicker: string; deva: string; lines: ReactNode[]; intro: string; image: string }) {
  const p = useParallax(0.12);
  return (
    <section className="grain relative flex min-h-[88vh] items-end overflow-hidden bg-ink text-ink-foreground">
      <div ref={p} className="absolute inset-0">
        <img src={image} alt="" className="anim-zoom h-full w-full object-cover opacity-70" />
      </div>
      <div className="bg-veil absolute inset-0" />
      <div className="relative mx-auto w-full max-w-[1400px] px-6 pb-20 pt-40 md:px-10">
        <p className="label-caps anim-fade text-gold">{kicker} <span className="font-deva ml-3 tracking-normal normal-case text-base">{deva}</span></p>
        <h1 className="mt-6 font-serif text-6xl leading-[0.95] md:text-[8.5rem]">
          <RiseLines lines={lines} />
        </h1>
        <p className="anim-fade mt-8 max-w-md text-lg text-ink-foreground/80" style={{ animationDelay: "600ms" }}>{intro}</p>
      </div>
    </section>
  );
}
