import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import stepwell from "@/assets/stepwell.jpg";
import textile from "@/assets/textile.jpg";
import monsoon from "@/assets/monsoon.jpg";
import { Footer, Header, Reveal, RiseLines, useParallax } from "@/components/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bharat — Grievance Verifier System" },
      { name: "description", content: "A citizen grievance system that verifies every complaint end to end — from filing to proof of resolution." },
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
      <section className="grain relative flex h-[100svh] min-h-[640px] items-center justify-center overflow-hidden bg-ink text-ink-foreground">
        <div ref={heroP} className="absolute inset-0">
          <img src={hero} alt="A marble monument seen through a carved sandstone arch at dawn" width={1920} height={1088} className="anim-zoom h-full w-full object-cover" />
        </div>
        <div className="bg-veil absolute inset-0" />
        <div className="relative px-6 text-center">
          <p className="font-deva anim-fade text-xl text-gold md:text-2xl">भारत</p>
          <h1 className="anim-rise font-display text-gold-gradient text-[26vw] leading-[0.9] md:text-[15rem]" style={{ animationDelay: "200ms" }}>
            bharat
          </h1>
          <p className="anim-fade label-caps mt-2 !tracking-[0.6em] text-ink-foreground/90 md:text-sm" style={{ animationDelay: "900ms" }}>
            Grievance Verifier System
          </p>
          <div className="anim-fade mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row" style={{ animationDelay: "1300ms" }}>
            <Link to="/verify" className="label-caps bg-gold px-8 py-4 text-ink transition-transform hover:-translate-y-0.5">Track your grievance</Link>
            <Link to="/process" className="label-caps border-b border-ink-foreground/50 py-2 hover:border-gold hover:text-gold">See how it works</Link>
          </div>
        </div>
        <p className="label-caps absolute bottom-8 left-1/2 -translate-x-1/2 text-ink-foreground/60">Scroll</p>
      </section>

      {/* Manifesto */}
      <section className="mx-auto max-w-[1400px] px-6 py-32 md:px-10 md:py-48">
        <div className="grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-3">
            <p className="label-caps text-primary">01 — The promise</p>
            <p className="font-deva mt-4 text-3xl text-muted-foreground">सुनवाई</p>
          </Reveal>
          <h2 className="font-serif text-5xl leading-[1.02] md:col-span-9 md:text-[5.5rem]">
            <RiseLines lines={[<>A complaint filed</>, <>is not a complaint</>, <><em className="text-primary">resolved.</em></>]} />
          </h2>
        </div>
        <div className="mt-16 grid gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-4 md:col-start-4" delay={150}>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Across a billion lives, grievances are closed on paper long before they are closed on the ground. Bharat changes the last mile.
            </p>
          </Reveal>
          <Reveal className="md:col-span-4" delay={300}>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Every resolution is independently verified — with geotagged proof, citizen confirmation and a public, tamper-evident trail.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Stepwell asymmetry */}
      <section className="relative bg-card">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-6 py-24 md:grid-cols-12 md:px-10 md:py-36">
          <Reveal mask className="md:col-span-6">
            <img src={stepwell} alt="Geometric steps of an ancient stepwell" loading="lazy" width={1200} height={1504} className="aspect-[4/5] w-full object-cover" />
          </Reveal>
          <div className="flex flex-col justify-center md:col-span-5 md:col-start-8">
            <p className="label-caps text-primary">02 — Layered by design</p>
            <h2 className="mt-6 font-serif text-5xl leading-[1.02] md:text-7xl">
              <RiseLines lines={["Like a stepwell,", <><em>every level</em></>, "leads to truth."]} />
            </h2>
            <Reveal delay={200}>
              <ol className="mt-12 space-y-0 divide-y divide-border border-y border-border">
                {[
                  ["Filed", "Your voice, in your language."],
                  ["Routed", "To the officer accountable."],
                  ["Resolved", "Action recorded with evidence."],
                  ["Verified", "Confirmed by you, on the ground."],
                ].map(([t, d], i) => (
                  <li key={t} className="flex items-baseline gap-6 py-5">
                    <span className="font-display text-2xl text-primary">0{i + 1}</span>
                    <span className="font-serif text-3xl">{t}</span>
                    <span className="ml-auto hidden text-right text-sm text-muted-foreground sm:block">{d}</span>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Numbers, dark */}
      <section className="grain bg-ink py-32 text-ink-foreground md:py-44">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <p className="label-caps text-gold">03 — In numbers</p>
          <div className="mt-16 grid gap-y-16 md:grid-cols-3">
            {[
              ["22", "Scheduled languages accepted at filing"],
              ["48h", "Target to route every grievance"],
              ["100%", "Resolutions checked by the citizen"],
            ].map(([n, l], i) => (
              <Reveal key={n} delay={i * 150} className="border-l border-ink-foreground/20 pl-8">
                <p className="font-serif text-8xl text-gold md:text-9xl">{n}</p>
                <p className="mt-4 max-w-[16rem] text-ink-foreground/70">{l}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Textile */}
      <section className="mx-auto max-w-[1400px] px-6 py-32 md:px-10 md:py-44">
        <div className="grid items-end gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="label-caps text-primary">04 — Handmade trust</p>
            <h2 className="mt-6 font-serif text-5xl leading-[1.02] md:text-7xl">
              <RiseLines lines={["Printed by hand,", <>one block <em className="text-primary">at a time.</em></>]} />
            </h2>
            <Reveal delay={200}>
              <p className="mt-10 max-w-md text-lg leading-relaxed text-muted-foreground">
                Trust is built the way a Bagru artisan builds a pattern — patiently, repeatedly, with nothing left to chance. Each verification is one more impression, until the whole cloth is true.
              </p>
            </Reveal>
          </div>
          <Reveal mask className="md:col-span-5 md:col-start-8" delay={150}>
            <img src={textile} alt="An artisan hand block printing indigo and red motifs" loading="lazy" width={1200} height={1504} className="aspect-[4/5] w-full object-cover md:translate-y-24" />
          </Reveal>
        </div>
      </section>

      {/* Monsoon closing */}
      <section className="grain relative flex min-h-[90vh] items-center overflow-hidden bg-ink text-ink-foreground">
        <div ref={monsoonP} className="absolute inset-0">
          <img src={monsoon} alt="Monsoon clouds over a village and paddy fields" loading="lazy" width={1920} height={1088} className="h-full w-full object-cover opacity-75" />
        </div>
        <div className="bg-veil absolute inset-0" />
        <div className="relative mx-auto w-full max-w-[1400px] px-6 py-32 md:px-10">
          <p className="font-deva text-2xl text-gold">हर आवाज़ मायने रखती है</p>
          <h2 className="mt-6 max-w-4xl font-serif text-6xl leading-[0.98] md:text-[7.5rem]">
            <RiseLines lines={["From the last village", <>to the <em className="text-gold">first office.</em></>]} />
          </h2>
          <Reveal delay={300}>
            <Link to="/verify" className="label-caps mt-14 inline-block bg-gold px-8 py-4 text-ink transition-transform hover:-translate-y-0.5">Track your grievance</Link>
          </Reveal>
        </div>
      </section>
      <Footer />
    </main>
  );
}
