import { createFileRoute } from "@tanstack/react-router";
import textile from "@/assets/textile.jpg";
import monsoon from "@/assets/monsoon.jpg";
import { Footer, Header, PageHero, Reveal, RiseLines } from "@/components/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Bharat Grievance Verifier" },
      { name: "description", content: "Why Bharat exists: closing the gap between grievances closed on paper and problems solved on the ground." },
      { property: "og:title", content: "About Bharat" },
      { property: "og:description", content: "Closing the gap between paper and ground truth." },
    ],
  }),
  component: About,
});

const principles = [
  ["Transparency", "पारदर्शिता", "Every action on a grievance is visible to the citizen who raised it."],
  ["Accountability", "जवाबदेही", "A named officer, a public deadline, an automatic escalation."],
  ["Inclusion", "समावेश", "Every language, every channel — from smartphones to village kiosks."],
  ["Integrity", "सत्यनिष्ठा", "Tamper-evident records that cannot be quietly rewritten."],
];

function About() {
  return (
    <main>
      <Header />
      <PageHero kicker="About" deva="परिचय" image={monsoon} lines={["Built for", <>the <em className="text-gold">last mile.</em></>]} intro="Bharat was born from a simple observation: a closed ticket is not the same as a solved problem." />

      <section className="mx-auto grid max-w-[1400px] gap-16 px-6 py-28 md:grid-cols-12 md:px-10 md:py-40">
        <div className="md:col-span-7">
          <p className="label-caps text-primary">Our story</p>
          <h2 className="mt-6 font-serif text-5xl leading-[1.03] md:text-7xl">
            <RiseLines lines={["The road was marked", <><em className="text-primary">repaired.</em></>, "The potholes remained."]} />
          </h2>
          <Reveal delay={200}>
            <p className="mt-10 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Public grievance systems have made it easier than ever to complain. What they have rarely done is prove that anything changed. Bharat adds the missing layer — independent verification — so that every resolution carries evidence and the citizen's own confirmation.
            </p>
          </Reveal>
        </div>
        <Reveal mask className="md:col-span-4 md:col-start-9 md:mt-24">
          <img src={textile} alt="Block printed cotton with indigo motifs" loading="lazy" width={1200} height={1504} className="aspect-[3/4] w-full object-cover" />
        </Reveal>
      </section>

      <section className="grain bg-ink py-28 text-ink-foreground md:py-40">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <p className="label-caps text-gold">Principles</p>
          <div className="mt-14 grid md:grid-cols-2">
            {principles.map(([t, d, p], i) => (
              <Reveal key={t} delay={(i % 2) * 150} className="border-t border-ink-foreground/15 py-12 md:pr-16">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-serif text-5xl">{t}</h3>
                  <span className="font-deva text-xl text-gold">{d}</span>
                </div>
                <p className="mt-4 max-w-md text-ink-foreground/70">{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
