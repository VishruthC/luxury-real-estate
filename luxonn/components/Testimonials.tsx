"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const REVIEWS = [
  {
    text: "LUXONN understood the brief before we could articulate it. Our residence in Geneva is, quite simply, the most considered space we have ever owned.",
    name: "Elena Vasquez",
    role: "Private Collector",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
  },
  {
    text: "Discreet, exacting, and globally fluent. They placed our Manhattan penthouse with a single call to the right family. Flawless.",
    name: "James Whitmore",
    role: "Principal, Whitmore Capital",
    avatar:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80",
  },
];

export default function Testimonials() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!root.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".review-card", {
        scrollTrigger: { trigger: root.current, start: "top 75%" },
        y: 60,
        opacity: 0,
        duration: 0.9,
        stagger: 0.18,
        ease: "power3.out",
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section className="relative bg-charcoal px-6 py-28 md:px-10">
      <div
        ref={root}
        className="mx-auto max-w-7xl"
      >
        <p className="heading mb-3 text-center text-base tracking-[0.4em] text-gold">
          CLIENT VOICES
        </p>
        <h2 className="heading mb-16 text-center text-5xl text-white sm:text-6xl">
          Trusted by the <span className="gold-text">Few</span>
        </h2>

        <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-2">
          <span className="pointer-events-none absolute -top-10 left-0 select-none font-serif text-[12rem] leading-none text-gold/15">
            &ldquo;
          </span>

          {REVIEWS.map((r) => (
            <article
              key={r.name}
              className="review-card relative rounded-3xl border border-white/10 bg-ink/60 p-10"
            >
              <div className="mb-5 flex gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="text-lg leading-relaxed text-white/90">
                {r.text}
              </p>
              <div className="mt-8 flex items-center gap-4">
                <Image
                  src={r.avatar}
                  alt={r.name}
                  width={56}
                  height={56}
                  className="h-14 w-14 rounded-full object-cover"
                />
                <div>
                  <p className="heading text-xl text-white">{r.name}</p>
                  <p className="text-sm text-softgray">{r.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
