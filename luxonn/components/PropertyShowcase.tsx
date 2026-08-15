"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SLIDES = [
  {
    title: "Cliffside Villa",
    place: "Santorini, Greece",
    img: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Glass Pavilion",
    place: "Los Angeles, USA",
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Lakefront Estate",
    place: "Geneva, Switzerland",
    img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Desert Majesty",
    place: "Palm Springs, USA",
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=80",
  },
];

export default function PropertyShowcase() {
  const root = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!root.current || !track.current) return;
    const ctx = gsap.context(() => {
      const trackEl = track.current!;
      const getScrollAmount = () =>
        trackEl.scrollWidth - window.innerWidth;

      gsap.to(trackEl, {
        x: () => -getScrollAmount(),
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: () => `+=${getScrollAmount()}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="showcase"
      ref={root}
      className="relative h-screen overflow-hidden bg-ink"
    >
      <div
        ref={track}
        className="flex h-full w-max items-center gap-8 px-6 md:px-10"
      >
        <div className="flex w-[80vw] flex-col justify-center sm:w-[40vw]">
          <p className="heading mb-3 text-base tracking-[0.4em] text-gold">
            THE COLLECTION
          </p>
          <h2 className="heading text-6xl leading-none text-white sm:text-8xl">
            A World of
            <br />
            <span className="gold-text">Residences</span>
          </h2>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-softgray">
            Scroll through a curated journey of iconic properties, each a
            singular expression of place and permanence.
          </p>
        </div>

        {SLIDES.map((s) => (
          <article
            key={s.title}
            className="relative h-[70vh] w-[80vw] flex-shrink-0 overflow-hidden rounded-3xl border border-white/10 sm:w-[55vw]"
          >
            <Image
              src={s.img}
              alt={s.title}
              fill
              className="object-cover"
              sizes="80vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <p className="heading text-sm tracking-[0.3em] text-gold">
                {s.place.toUpperCase()}
              </p>
              <h3 className="heading text-4xl text-white">{s.title}</h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
