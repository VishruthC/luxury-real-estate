"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BG =
  "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=80";

export default function VideoSection() {
  const root = useRef<HTMLDivElement>(null);
  const wrap = useRef<HTMLDivElement>(null);
  const btn = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!root.current) return;
    const ctx = gsap.context(() => {
      if (btn.current) {
        gsap.to(btn.current, {
          scale: 1.12,
          boxShadow: "0 0 60px rgba(212,169,95,0.7)",
          repeat: -1,
          yoyo: true,
          duration: 1.1,
          ease: "sine.inOut",
        });
      }
      if (wrap.current) {
        gsap.fromTo(
          wrap.current,
          { scale: 1.05, borderRadius: 0 },
          {
            scale: 0.9,
            borderRadius: 40,
            ease: "none",
            scrollTrigger: {
              trigger: root.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      }
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className="relative flex h-[90vh] w-full items-center justify-center overflow-hidden"
    >
      <div ref={wrap} className="absolute inset-0">
        <Image
          src={BG}
          alt="Property film"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/55 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <button
          ref={btn}
          aria-label="Play film"
          className="flex h-28 w-28 items-center justify-center rounded-full border border-gold/70 bg-black/40 text-gold backdrop-blur-md"
        >
          <Play size={40} className="ml-2" />
        </button>
        <p className="heading mt-8 text-2xl tracking-[0.4em] text-white">
          THE LUXONN FILM
        </p>
      </div>
    </section>
  );
}
