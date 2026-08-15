"use client";

import { Search, Home, TrendingUp, Paintbrush } from "lucide-react";

const SERVICES = [
  {
    icon: Search,
    title: "Property Buying",
    desc: "Discreet acquisition of the world's rarest homes, negotiated with precision.",
  },
  {
    icon: Home,
    title: "Selling",
    desc: "Position your residence before a private audience of qualified buyers.",
  },
  {
    icon: TrendingUp,
    title: "Investment",
    desc: "Strategic advisory across prime markets with generational yield.",
  },
  {
    icon: Paintbrush,
    title: "Design",
    desc: "In-house ateliers shaping interiors of quiet, enduring opulence.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-ink px-6 py-28 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="heading mb-3 text-base tracking-[0.4em] text-gold">
            WHAT WE OFFER
          </p>
          <h2 className="heading text-5xl text-white sm:text-6xl">
            A Complete <span className="gold-text">Service</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-deepgray/60 p-8 transition-all duration-500 hover:border-t-gold"
              >
                <div className="pointer-events-none absolute -inset-px rounded-3xl bg-[radial-gradient(circle_at_50%_0%,rgba(212,169,95,0.25),transparent_60%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 text-gold transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-110">
                  <Icon size={26} />
                </span>
                <h3 className="relative mt-6 heading text-2xl text-white">
                  {s.title}
                </h3>
                <p className="relative mt-3 text-sm leading-relaxed text-softgray">
                  {s.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
