import { createFileRoute, Link } from "@tanstack/react-router";
import stepwell from "@/assets/stepwell.jpg";
import { Footer, Header, PageHero, Reveal, RiseLines } from "@/components/site";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Process — Bharat Grievance Verifier" },
      { name: "description", content: "Four steps from filing to verified resolution: file, route, resolve, verify." },
      { property: "og:title", content: "How Bharat verifies a grievance" },
      { property: "og:description", content: "File, route, resolve, verify — every step on the record." },
    ],
  }),
  component: Process,
});

const steps = [
  { n: "01", deva: "दर्ज", t: "File", d: "Speak, type or upload in any of 22 languages — on the web, by SMS, or at a Common Service Centre. You receive a case number instantly.", detail: ["Voice & text intake", "Photo or document evidence", "Instant acknowledgement"] },
  { n: "02", deva: "मार्ग", t: "Route", d: "The grievance is matched to the department and officer accountable, with a clear deadline that is visible to you.", detail: ["Jurisdiction mapping", "Named officer", "Public deadline"] },
  { n: "03", deva: "समाधान", t: "Resolve", d: "The officer records the action taken, attaching geotagged photographs and documents as proof — not just a closing remark.", detail: ["Geotagged proof", "Action log", "Escalation on delay"] },
  { n: "04", deva: "सत्यापन", t: "Verify", d: "An independent verifier and you confirm the outcome. Only then is the case closed. If you disagree, it reopens automatically.", detail: ["Citizen confirmation", "Field verification", "Auto-reopen"] },
];

function Process() {
  return (
    <main>
      <Header />
      <PageHero kicker="The process" deva="प्रक्रिया" image={stepwell} lines={["Four steps.", <><em className="text-gold">No shortcuts.</em></>]} intro="Every grievance descends through the same four levels — and only rises again once the truth is confirmed." />

      <section className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-36">
        {steps.map((s, i) => (
          <article key={s.n} className={`grid gap-8 border-t border-border py-16 md:grid-cols-12 md:py-24 ${i % 2 ? "md:[&>*:first-child]:col-start-2" : ""}`}>
            <Reveal className="md:col-span-4">
              <p className="font-display text-8xl leading-none text-primary md:text-9xl">{s.n}</p>
              <p className="font-deva mt-4 text-2xl text-muted-foreground">{s.deva}</p>
            </Reveal>
            <div className="md:col-span-6 md:col-start-6">
              <h2 className="font-serif text-6xl md:text-8xl"><RiseLines lines={[s.t]} /></h2>
              <Reveal delay={150}>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">{s.d}</p>
                <ul className="mt-8 flex flex-wrap gap-3">
                  {s.detail.map((x) => (
                    <li key={x} className="label-caps border border-border px-4 py-2 text-foreground/80">{x}</li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </article>
        ))}
      </section>

      <section className="jali bg-card py-28">
        <div className="mx-auto max-w-[1400px] px-6 text-center md:px-10">
          <h2 className="mx-auto max-w-3xl font-serif text-5xl leading-[1.05] md:text-7xl">
            <RiseLines lines={["Closed only when", <><em className="text-primary">you</em> say so.</>]} />
          </h2>
          <Reveal delay={200}>
            <Link to="/verify" className="label-caps mt-12 inline-block bg-primary px-8 py-4 text-primary-foreground">Track a grievance</Link>
          </Reveal>
        </div>
      </section>
      <Footer />
    </main>
  );
}
