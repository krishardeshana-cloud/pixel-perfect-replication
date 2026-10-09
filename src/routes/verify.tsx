import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Footer, Header, Reveal, RiseLines } from "@/components/site";

export const Route = createFileRoute("/verify")({
  head: () => ({
    meta: [
      { title: "Track a Grievance — Bharat" },
      { name: "description", content: "Enter your case number to see each stage of your grievance, from filing to verified resolution." },
      { property: "og:title", content: "Track your grievance — Bharat" },
      { property: "og:description", content: "See every stage of your case, on the record." },
    ],
  }),
  component: Verify,
});

const stages = [
  { t: "Filed", d: "Received via SMS in Marathi · Pune district", when: "02 Oct, 10:14" },
  { t: "Routed", d: "Assigned to Ward Officer, PWD Division 4", when: "02 Oct, 16:40" },
  { t: "Resolved", d: "Streetlight replaced · 3 geotagged photos attached", when: "06 Oct, 11:02" },
  { t: "Verified", d: "Awaiting your confirmation", when: "Pending" },
];

function Verify() {
  const [id, setId] = useState("");
  const [shown, setShown] = useState<string | null>(null);
  return (
    <main className="bg-background">
      <Header tone="dark" />
      <section className="jali mx-auto max-w-[1400px] px-6 pb-20 pt-40 md:px-10 md:pt-52">
        <p className="label-caps text-primary">Track <span className="font-deva ml-3 text-base normal-case tracking-normal">स्थिति देखें</span></p>
        <h1 className="mt-6 font-serif text-6xl leading-[0.95] md:text-[8rem]">
          <RiseLines lines={["Where is", <>my <em className="text-primary">grievance?</em></>]} />
        </h1>
        <Reveal delay={300}>
          <form
            className="mt-14 flex max-w-2xl flex-col gap-4 sm:flex-row"
            onSubmit={(e) => {
              e.preventDefault();
              if (id.trim()) setShown(id.trim().toUpperCase());
            }}
          >
            <label htmlFor="case" className="sr-only">Case number</label>
            <input
              id="case"
              value={id}
              onChange={(e) => setId(e.target.value)}
              placeholder="Case number, e.g. BGV-2026-48213"
              className="flex-1 border-b-2 border-foreground/30 bg-transparent py-4 font-serif text-2xl outline-none placeholder:text-muted-foreground/60 focus:border-primary"
            />
            <button className="label-caps bg-primary px-8 py-4 text-primary-foreground transition-transform hover:-translate-y-0.5">Look up</button>
          </form>
          <p className="mt-4 text-sm text-muted-foreground">Try any case number to see a sample timeline.</p>
        </Reveal>
      </section>

      {shown && (
        <section className="mx-auto max-w-[1400px] px-6 pb-32 md:px-10">
          <div className="border border-border bg-card p-8 md:p-14">
            <div className="flex flex-wrap items-baseline justify-between gap-4">
              <p className="font-display text-3xl text-primary">{shown}</p>
              <p className="label-caps text-muted-foreground">Sample case · Streetlight outage</p>
            </div>
            <ol className="mt-12 grid gap-10 md:grid-cols-4">
              {stages.map((s, i) => {
                const done = i < 3;
                return (
                  <Reveal key={s.t} delay={i * 150}>
                    <li className={`border-t-2 pt-6 ${done ? "border-primary" : "border-dashed border-border"}`}>
                      <p className="label-caps text-muted-foreground">{s.when}</p>
                      <p className={`mt-3 font-serif text-4xl ${done ? "" : "text-muted-foreground"}`}>{s.t}</p>
                      <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
                    </li>
                  </Reveal>
                );
              })}
            </ol>
            <div className="mt-12 flex flex-wrap gap-4">
              <button onClick={() => alert("Thank you — your confirmation has been recorded (demo).")} className="label-caps bg-primary px-6 py-3 text-primary-foreground">Confirm it's fixed</button>
              <button onClick={() => alert("The case has been reopened and escalated (demo).")} className="label-caps border border-foreground/40 px-6 py-3">It's not fixed</button>
            </div>
          </div>
        </section>
      )}
      <Footer />
    </main>
  );
}
