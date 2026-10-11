import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import sabarmati from "@/assets/sabarmati-civic-illustration.png.asset.json";
import { Footer, Header, Reveal, RiseLines, TriRule, useParallax } from "@/components/site";

import { SectionHeading, ServicesCarousel, VerificationRecord } from "@/components/civic";
import { Button } from "@/components/ui/button";
import { ArrowRight, ClipboardList, UserRoundCheck, FileCheck2, Send } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bharat — Grievance Verifier System" },
      { name: "description", content: "A citizen grievance system that verifies every complaint end to end — from filing to proof of resolution." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "Bharat — Grievance Verifier System" },
      { property: "og:description", content: "Every voice heard. Every resolution verified." },
    ],
  }),
  component: Home,
});

function Home() {
  const heroP = useParallax(0.18);
  const monsoonP = useParallax(0.2);
  return (
    <main>
      <Header />
      {/* Hero */}
      <section className="grain relative flex h-[88svh] min-h-[560px] items-center justify-center overflow-hidden bg-ink text-ink-foreground">
        <div ref={heroP} className="absolute inset-0">
          <img src={hero} alt="A marble monument seen through a carved sandstone arch at dawn" width={1920} height={1088} className="anim-zoom h-full w-full object-cover" />
        </div>
        <div className="bg-veil absolute inset-0" />
        <div className="relative px-6 text-center">
          <p className="font-deva anim-fade text-xl text-gold md:text-2xl">भारत</p>
          <h1 className="anim-rise font-display text-gold-gradient text-[5.5rem] leading-[0.9] sm:text-[9rem] md:text-[13rem]" style={{ animationDelay: "200ms" }}>
            bharat
          </h1>
          <p className="anim-fade label-caps mt-5 text-ink-foreground/90 md:text-sm" style={{ animationDelay: "900ms" }}>
            Grievance Verifier System
          </p>
          <div className="anim-fade mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row" style={{ animationDelay: "1300ms" }}>
            <Button asChild size="lg" className="h-12 bg-gold px-6 text-ink hover:bg-gold/90"><Link to="/verify">Track your grievance <ArrowRight /></Link></Button>
            <Link to="/process" className="label-caps border-b border-ink-foreground/50 py-2 hover:border-gold hover:text-gold">See how it works</Link>
          </div>
        </div>
        <p className="label-caps absolute bottom-8 left-1/2 -translate-x-1/2 text-ink-foreground/60">Scroll</p>
      </section>

      <div className="border-b border-border bg-background">
        <div className="mx-auto grid max-w-[1320px] grid-cols-1 divide-y divide-border px-6 sm:grid-cols-3 sm:divide-x sm:divide-y-0 md:px-10">
          {[['01', 'Your voice on record', 'दर्ज'], ['02', 'Action with evidence', 'समाधान'], ['03', 'Verified by the citizen', 'सत्यापन']].map(([n, text, hi]) => <div key={n} className="flex items-center gap-4 py-5 sm:px-5"><span className="text-xs tabular-nums text-primary">{n}</span><div className="min-w-0"><p className="text-sm font-medium">{text}</p><p className="font-deva mt-1 text-xs text-muted-foreground">{hi}</p></div></div>)}
        </div>
      </div>

      <ServicesCarousel />

      <section className="mx-auto max-w-[1320px] px-6 py-16 md:px-10 md:py-24">
        <SectionHeading number="02" label="The accountability cycle" hindi="जवाबदेही" title="A clear path from complaint to closure.">One grievance. An accountable officer. A record of action. And a citizen who can confirm the result.</SectionHeading>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: 'File', hindi: 'दर्ज', icon: ClipboardList, text: 'The issue, location and supporting evidence are recorded together.' },
            { title: 'Route', hindi: 'विभाग तक', icon: Send, text: 'The complaint reaches the department responsible for taking action.' },
            { title: 'Resolve', hindi: 'समाधान', icon: FileCheck2, text: 'Work done is documented, with evidence of the result on the ground.' },
            { title: 'Verify', hindi: 'सत्यापन', icon: UserRoundCheck, text: 'The citizen reviews the outcome, not just the closing remark.' },
          ].map(({title, hindi, icon: Icon, text}, i) => <Reveal key={title} delay={i * 80} className="border-t-2 border-primary/40 pt-6"><div className="flex items-center justify-between"><Icon size={23} strokeWidth={1.5} className="text-primary" /><span className="text-xs tabular-nums text-muted-foreground">0{i + 1}</span></div><p className="font-deva mt-6 text-sm text-muted-foreground">{hindi}</p><h3 className="mt-2 text-xl font-semibold">{title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p></Reveal>)}
        </div>
        <Button asChild variant="outline" className="mt-10 h-11"><Link to="/process">View the full process <ArrowRight /></Link></Button>
      </section>

      <section className="civic-proof-band border-y border-border bg-secondary/40">
        <div className="mx-auto grid max-w-[1320px] items-center gap-12 px-6 py-16 md:grid-cols-2 md:px-10 md:py-24">
          <div className="min-w-0"><p className="label-caps text-primary">03 / Proof of resolution <span className="font-deva ml-2 text-sm normal-case text-muted-foreground">सत्यापन</span></p><TriRule className="mt-4" /><h2 className="mt-6 font-serif text-4xl leading-tight sm:text-5xl md:text-6xl"><RiseLines lines={['Closed on paper.', <>Confirmed <em className="text-primary">on the ground.</em></>]} /></h2><p className="mt-6 max-w-md leading-relaxed text-muted-foreground">A status change is not enough. A meaningful resolution shows what changed, who acted and whether the problem is actually fixed.</p><Button asChild size="lg" className="mt-8 h-12"><Link to="/verify">Track your grievance <ArrowRight /></Link></Button></div>
          <Reveal><VerificationRecord /></Reveal>
        </div>
      </section>

      {/* Monsoon closing */}
      <section className="grain relative flex min-h-[80svh] items-center overflow-hidden bg-ink text-ink-foreground">
        <div ref={monsoonP} className="absolute inset-0">
          <img src={sabarmati.url} alt="Illustration of civic life along the Sabarmati riverfront" loading="lazy" className="anim-zoom h-full w-full object-cover opacity-70" />
        </div>
        <div className="bg-veil absolute inset-0" />
        <div className="relative mx-auto w-full max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
          <p className="font-deva text-xl text-gold md:text-2xl">हर आवाज़ मायने रखती है</p>
          <h2 className="mt-4 max-w-4xl font-serif text-4xl leading-[1.02] sm:text-5xl md:mt-6 md:text-[7.5rem] md:leading-[0.98]">
            <RiseLines lines={["From the last village", <>to the <em className="text-gold">first office.</em></>]} />
          </h2>
          <Reveal delay={300}>
            <Button asChild size="lg" className="mt-8 h-12 bg-gold text-ink hover:bg-gold/90"><Link to="/verify">Track your grievance <ArrowRight /></Link></Button>
          </Reveal>
        </div>
      </section>
      <Footer />
    </main>
  );
}
