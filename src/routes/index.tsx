import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import stepwell from "@/assets/stepwell.jpg";
import textile from "@/assets/textile.jpg";
import sabarmati from "@/assets/sabarmati-civic-illustration.png.asset.json";
import streetArt from "@/assets/street-art.jpg";
import { Chakra, Footer, Header, Reveal, RiseLines, TriRule, useParallax } from "@/components/site";

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

      {/* Live marquee bands */}
      <section className="overflow-hidden bg-hot py-5 text-ink-foreground">
        <div className="anim-marquee flex w-max gap-12 whitespace-nowrap font-deva text-5xl md:text-7xl">
          {Array.from({ length: 2 }).flatMap((_, k) =>
            ["सुनवाई", "✺", "न्याय", "✺", "भरोसा", "✺", "सत्य", "✺", "आवाज़", "✺"].map((w, i) => <span key={`${k}-${i}`}>{w}</span>),
          )}
        </div>
      </section>
      <section className="overflow-hidden bg-saffron py-3 text-ink">
        <div className="anim-marquee-rev label-caps flex w-max gap-10 whitespace-nowrap !text-sm">
          {Array.from({ length: 2 }).flatMap((_, k) =>
            ["Filed", "Routed", "Resolved", "Verified", "Every voice", "Every village"].map((w, i) => <span key={`${k}-${i}`}>{w} ●</span>),
          )}
        </div>
      </section>

      {/* Street art */}
      <section className="relative overflow-hidden bg-teal text-ink-foreground">
        <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-6 py-24 md:grid-cols-12 md:px-10 md:py-32">
          <div className="relative md:col-span-6">
            <Reveal mask>
              <img src={streetArt} alt="Colourful Indian street-art illustration" loading="lazy" className="aspect-square w-full object-cover" />
            </Reveal>
            <span className="anim-spin absolute -right-6 -top-6 grid h-28 w-28 place-items-center rounded-full bg-gold font-deva text-3xl text-ink">सच</span>
          </div>
          <div className="md:col-span-5 md:col-start-8">
            <p className="anim-bob font-deva inline-block text-7xl text-gold md:text-9xl">आवाज़</p>
            <h2 className="mt-6 font-serif text-5xl leading-[1.02] md:text-7xl">
              <RiseLines lines={["Loud, bright,", <><em className="anim-hue">impossible</em> to ignore.</>]} />
            </h2>
            <Reveal delay={200}>
              <p className="mt-8 max-w-md text-lg text-ink-foreground/85">Like a hand-painted truck that crosses every state, every grievance carries its story all the way home.</p>
            </Reveal>
          </div>
        </div>
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
        <div className="jali pointer-events-none absolute inset-0 opacity-60" />
        <div className="relative mx-auto grid max-w-[1400px] gap-12 px-6 py-24 md:grid-cols-12 md:px-10 md:py-36">
          <Reveal mask className="relative md:col-span-6">
            <div className="relative overflow-hidden rounded-t-[50%] border-4 border-gold/70 p-2">
              <img src={stepwell} alt="Geometric steps of an ancient stepwell" loading="lazy" width={1200} height={1504} className="aspect-[4/5] w-full rounded-t-[50%] object-cover" />
            </div>
            <Chakra className="anim-spin absolute -bottom-10 -right-6 h-28 w-28 text-indigo" />
            <p className="mt-4 text-center font-deva text-sm text-muted-foreground">रानी की वाव · पाटन, गुजरात</p>
          </Reveal>
          <div className="flex flex-col justify-center md:col-span-5 md:col-start-8">
            <p className="label-caps text-primary">02 — Layered by design <span className="font-deva ml-2 normal-case tracking-normal text-base">स्तरीय सत्यापन</span></p>
            <TriRule className="mt-4" />
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
      <section className="paisley-bg relative overflow-hidden border-y-4 border-double border-primary/40">
        <Chakra className="anim-spin pointer-events-none absolute -left-40 top-10 h-[34rem] w-[34rem] text-indigo/10" />
        <div className="relative mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-36">
        <div className="grid items-center gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="label-caps text-primary">04 — Handmade trust <span className="font-deva ml-2 normal-case tracking-normal text-base">हस्तनिर्मित विश्वास</span></p>
            <TriRule className="mt-4" />
            <h2 className="mt-6 font-serif text-5xl leading-[1.02] md:text-7xl">
              <RiseLines lines={["Printed by hand,", <>one block <em className="text-primary">at a time.</em></>]} />
            </h2>
            <Reveal delay={200}>
              <p className="mt-10 max-w-md text-lg leading-relaxed text-muted-foreground">
                Trust is built the way a Bagru artisan builds a pattern — patiently, repeatedly, with nothing left to chance. Each verification is one more impression, until the whole cloth is true.
              </p>
              <div className="mt-10 grid max-w-md grid-cols-3 border border-primary/30 bg-background/70 text-center">
                {[["Geotagged", "भू-चिह्नित"], ["Time-stamped", "समय-अंकित"], ["Citizen-signed", "नागरिक-पुष्टि"]].map(([e, h]) => (
                  <div key={e} className="border-r border-primary/20 p-4 last:border-r-0">
                    <p className="font-deva text-lg text-primary">{h}</p>
                    <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{e}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
          <Reveal mask className="md:col-span-5 md:col-start-8" delay={150}>
            <div className="border-8 border-double border-primary/50 bg-background p-3 shadow-2xl">
              <img src={textile} alt="An artisan hand block printing indigo and red motifs" loading="lazy" width={1200} height={1504} className="aspect-[4/5] w-full object-cover" />
              <p className="mt-3 text-center font-deva text-sm text-muted-foreground">बगरू ब्लॉक प्रिंट · राजस्थान</p>
            </div>
          </Reveal>
        </div>
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
            <Link to="/verify" className="label-caps mt-10 inline-block bg-gold px-7 py-3.5 text-ink transition-transform hover:-translate-y-0.5 md:mt-14 md:px-8 md:py-4">Track your grievance</Link>
          </Reveal>
        </div>
      </section>
      <Footer />
    </main>
  );
}
