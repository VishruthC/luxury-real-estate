"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PROPERTIES = [
  {
    city: "Dubai",
    name: "The Marina Pearl",
    price: "$24.5M",
    img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    city: "New York",
    name: "Central Park Tower",
    price: "$41.0M",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
  },
  {
    city: "Miami",
    name: "Ocean Grand Villa",
    price: "$18.9M",
    img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function FeaturedProperties() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!root.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".prop-card", {
        scrollTrigger: {
          trigger: root.current,
          start: "top 78%",
        },
        y: 80,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: "power3.out",
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="properties" className="bg-ink px-6 py-28 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col items-end justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="heading mb-3 text-base tracking-[0.4em] text-gold">
              FEATURED
            </p>
            <h2 className="heading text-5xl text-white sm:text-6xl">
              Signature Residences
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-softgray">
            A hand-selected portfolio of the most exclusive homes across the
            globe&apos;s most coveted cities.
          </p>
        </div>

        <div ref={root} className="grid grid-cols-1 gap-7 md:grid-cols-3">
          {PROPERTIES.map((p) => (
            <article
              key={p.city}
              className="prop-card group relative h-[460px] overflow-hidden rounded-3xl border border-white/10 transition-colors duration-500 hover:border-gold/70"
            >
              <Image
                src={p.img}
                alt={p.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

              <div className="absolute left-5 top-5 heading text-sm tracking-[0.3em] text-gold">
                {p.city.toUpperCase()}
              </div>

              <div className="absolute inset-x-0 bottom-0 translate-y-6 p-6 transition-transform duration-500 group-hover:translate-y-0">
                <div className="flex items-center justify-between">
                  <h3 className="heading text-3xl text-white">{p.name}</h3>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold text-black transition-transform duration-300 group-hover:rotate-45">
                    <ArrowUpRight size={18} />
                  </span>
                </div>
                <p className="mt-1 text-gold">{p.price}</p>
                <p className="mt-3 max-h-0 overflow-hidden text-sm text-softgray opacity-0 transition-all duration-500 group-hover:max-h-20 group-hover:opacity-100">
                  Private viewing by appointment. Architecture, light and silence
                  composed into a single address.
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
