"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  { value: 25, suffix: "+", label: "Years of Mastery" },
  { value: 4, prefix: "$", suffix: "B+", label: "Sold Worldwide" },
  { value: 12, suffix: "", label: "Global Locations" },
];

export default function About() {
  const root = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!root.current) return;
    const ctx = gsap.context(() => {
      if (imgRef.current) {
        gsap.to(imgRef.current, {
          yPercent: -12,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      gsap.from(".about-reveal", {
        scrollTrigger: { trigger: root.current, start: "top 70%" },
        y: 50,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
      });

      gsap.utils.toArray<HTMLElement>(".stat-num").forEach((el) => {
        const target = Number(el.dataset.value || "0");
        const obj = { v: 0 };
        gsap.to(obj, {
          v: target,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
          onUpdate: () => {
            el.textContent = String(Math.round(obj.v));
          },
        });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="bg-charcoal px-6 py-28 md:px-10">
      <div
        ref={root}
        className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-2"
      >
        <div className="relative h-[420px] overflow-hidden rounded-3xl border border-white/10 md:h-[560px]">
          <Image
            ref={imgRef}
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
            alt="Architectural masterpiece"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        <div>
          <p className="about-reveal heading mb-3 text-base tracking-[0.4em] text-gold">
            OUR LEGACY
          </p>
          <h2 className="about-reveal heading text-5xl leading-none text-white sm:text-6xl">
            Architectural
            <br />
            <span className="gold-text">Masterpieces</span>
          </h2>
          <p className="about-reveal mt-6 max-w-lg text-base leading-relaxed text-softgray">
            For over two decades, LUXONN has shaped the language of modern
            luxury living. We partner with the world&apos;s most celebrated
            architects to create residences that are not merely homes, but
            enduring statements of taste, light, and silence.
          </p>

          <div className="about-reveal mt-12 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
            {STATS.map((s) => (
              <div key={s.label}>
                <p className="heading text-4xl text-gold sm:text-5xl">
                  {s.prefix}
                  <span className="stat-num" data-value={s.value}>
                    0
                  </span>
                  {s.suffix}
                </p>
                <p className="mt-2 text-xs uppercase tracking-widest text-softgray">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
