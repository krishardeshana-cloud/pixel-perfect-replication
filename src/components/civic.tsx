import { Link } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { ArrowLeft, ArrowRight, Check, Droplets, FileCheck2, Landmark, Lightbulb, MapPin, Pause, Play, Route, ShieldCheck, Trash2, Waypoints, type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Chakra, TriRule } from "@/components/site";

export function SectionHeading({ number, label, hindi, title, children }: { number: string; label: string; hindi: string; title: string; children?: ReactNode }) {
  return <div className="grid gap-5 md:grid-cols-[minmax(0,1fr)_minmax(0,360px)] md:items-end">
    <div className="min-w-0"><p className="label-caps text-primary">{number} / {label} <span className="font-deva ml-3 text-sm normal-case text-muted-foreground">{hindi}</span></p><TriRule className="mt-4" /><h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl md:text-6xl">{title}</h2></div>
    {children && <div className="max-w-md text-base leading-relaxed text-muted-foreground">{children}</div>}
  </div>;
}

type CivicCardProps = { number: string; title: string; hindi: string; description: string; icon: LucideIcon; tone?: "red" | "green" | "blue" };
export function CivicCard({ number, title, hindi, description, icon: Icon, tone = "blue" }: CivicCardProps) {
  return <article className={`civic-card civic-card--${tone} group relative flex h-full flex-col overflow-hidden rounded-md border border-border bg-background p-7`}>
    <div className="flex items-center justify-between"><span className="civic-icon grid h-12 w-12 place-items-center rounded-md"><Icon size={23} strokeWidth={1.5} /></span><span className="font-sans text-xs tabular-nums text-muted-foreground">/{number}</span></div>
    <Chakra className="civic-watermark pointer-events-none absolute -right-5 top-20 h-28 w-28" />
    <p className="font-deva relative mt-8 text-lg text-muted-foreground">{hindi}</p>
    <h3 className="relative mt-2 font-sans text-xl font-semibold">{title}</h3>
    <p className="relative mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{description}</p>
    <Link to="/verify" className="relative mt-7 flex items-center justify-between border-t border-border pt-4 text-sm font-medium text-primary focus-visible:outline-2 focus-visible:outline-ring"><span>Track a grievance<span className="sr-only"> about {title.toLowerCase()}</span></span><ArrowRight size={18} className="transition-transform group-hover:translate-x-1" /></Link>
  </article>;
}

const services: CivicCardProps[] = [
  { number: "01", title: "Roads & public works", hindi: "सड़क एवं लोक निर्माण", description: "Damaged roads, unsafe footpaths and unfinished repairs in your neighbourhood.", icon: Route, tone: "red" },
  { number: "02", title: "Water supply", hindi: "जल आपूर्ति", description: "Interrupted supply, leaking pipelines and concerns about drinking water.", icon: Droplets, tone: "blue" },
  { number: "03", title: "Sanitation", hindi: "स्वच्छता", description: "Uncollected waste, blocked drains and maintenance of public spaces.", icon: Trash2, tone: "green" },
  { number: "04", title: "Street lighting", hindi: "सड़क प्रकाश", description: "Faulty streetlights and poorly lit roads that affect everyday safety.", icon: Lightbulb, tone: "red" },
  { number: "05", title: "Public services", hindi: "जन सेवाएँ", description: "Delays in public services, unanswered requests and unresolved applications.", icon: Landmark, tone: "blue" },
  { number: "06", title: "Community spaces", hindi: "सार्वजनिक स्थल", description: "Maintenance of parks, shared facilities and accessible public spaces.", icon: Waypoints, tone: "green" },
];

export function ServicesCarousel() {
  const [viewportRef, api] = useEmblaCarousel({ loop: true, align: "start" }, [AutoScroll({ speed: 0.65, startDelay: 1500, playOnInit: false, stopOnInteraction: false, stopOnMouseEnter: true, stopOnFocusIn: true })]);
  const [playing, setPlaying] = useState(false);
  useEffect(() => {
    if (!api) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setPlaying(api.plugins().autoScroll?.isPlaying() ?? false);
    const preference = () => { if (motion.matches) api.plugins().autoScroll?.stop(); else api.plugins().autoScroll?.play(); sync(); };
    api.on("autoScroll:play", sync); api.on("autoScroll:stop", sync);
    motion.addEventListener("change", preference); preference();
    return () => { api.off("autoScroll:play", sync); api.off("autoScroll:stop", sync); motion.removeEventListener("change", preference); };
  }, [api]);
  return <section className="border-y border-border bg-secondary/40 py-16 md:py-24" aria-label="Public service categories">
    <div className="mx-auto max-w-[1320px] px-6 md:px-10"><SectionHeading number="01" label="Public services" hindi="जन सेवाएँ" title="Everyday problems. Real accountability.">From a broken streetlight to a delayed service, the outcome matters more than a closed ticket.</SectionHeading>
      <div className="mt-8 flex items-center justify-between border-t border-border py-4"><span className="text-xs font-medium text-muted-foreground">CITIZEN SERVICES <span className="mx-2 text-primary">/</span> नागरिक सेवाएँ</span><div className="flex gap-2">
        <Button variant="outline" size="icon" aria-label="Previous service" title="Previous service" onClick={() => api?.scrollPrev()}><ArrowLeft /></Button>
        <Button variant="outline" size="icon" aria-label={playing ? "Pause carousel" : "Play carousel"} title={playing ? "Pause carousel" : "Play carousel"} onClick={() => { const scroll = api?.plugins().autoScroll; if (scroll?.isPlaying()) scroll.stop(); else scroll?.play(); }}>{playing ? <Pause /> : <Play />}</Button>
        <Button variant="outline" size="icon" aria-label="Next service" title="Next service" onClick={() => api?.scrollNext()}><ArrowRight /></Button>
      </div></div>
    </div>
    <div ref={viewportRef} className="cursor-grab overflow-hidden active:cursor-grabbing"><div className="flex touch-pan-y items-stretch gap-5 px-6 md:px-10">{services.map(service => <div key={service.number} className="min-w-0 shrink-0 basis-[min(82vw,320px)] pb-3"><CivicCard {...service} /></div>)}</div></div>
  </section>;
}

export function VerificationRecord() {
  return <article className="verification-record relative overflow-hidden rounded-md border border-border bg-background p-6 sm:p-8">
    <div className="flex items-center justify-between gap-3 border-b border-border pb-5"><div className="flex items-center gap-3"><FileCheck2 className="shrink-0 text-primary" size={23} /><h3 className="text-sm font-semibold">Resolution record</h3></div><span className="text-[10px] font-medium uppercase text-muted-foreground">Illustrative</span></div>
    <p className="mt-6 font-deva text-sm text-muted-foreground">समाधान का प्रमाण</p><p className="mt-2 font-serif text-3xl">Evidence, not just a remark.</p>
    <ol className="mt-7 divide-y divide-border">{[
      { icon: MapPin, title: "On-ground evidence", text: "Location and photographs of the work" },
      { icon: FileCheck2, title: "Action on the record", text: "What was done, when and by whom" },
      { icon: ShieldCheck, title: "Citizen confirmation", text: "The person affected has the final say" },
    ].map(({ icon: Icon, title, text }) => <li key={title} className="flex gap-4 py-5"><Icon className="mt-0.5 shrink-0 text-civic-green" size={20} strokeWidth={1.5} /><div><p className="text-sm font-semibold">{title}</p><p className="mt-1 text-sm leading-relaxed text-muted-foreground">{text}</p></div></li>)}</ol>
    <div className="mt-4 flex items-center gap-2 border-t border-border pt-5 text-xs text-civic-green"><Check size={15} /><span>A resolution should stand up to verification.</span></div>
  </article>;
}