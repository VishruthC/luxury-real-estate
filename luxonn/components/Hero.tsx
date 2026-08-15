"use client";

import { useEffect, useRef, useState } from "react";
import { MapPin, Maximize, DollarSign, Play } from "lucide-react";
import gsap from "gsap";

const HERO_VIDEO =
  "https://strvid.nyc3.cdn.digitaloceanspaces.com/motionsite/hero_bg_video_real_estate.mp4";
const HERO_POSTER =
  "https://strvid.nyc3.cdn.digitaloceanspaces.com/motionsite/luxonn_hero_bg%20_img.png";

const FLOATING_CARDS = [
  { icon: MapPin, label: "Location", value: "Dubai · UAE" },
  { icon: DollarSign, label: "From", value: "$12.5M" },
  { icon: Maximize, label: "Sq Ft", value: "18,400" },
];

export default function Hero() {
  const root = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoOk, setVideoOk] = useState(true);

  const handleEnded = () => {
    window.setTimeout(() => {
      videoRef.current?.play().catch(() => {});
    }, 5000);
  };

  useEffect(() => {
    if (!root.current) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-line", {
        yPercent: 120,
        opacity: 0,
        duration: 1.1,
        stagger: 0.15,
      })
        .from(
          ".hero-sub",
          { y: 30, opacity: 0, duration: 0.8 },
          "-=0.5"
        )
        .from(
          ".hero-cta",
          { y: 24, opacity: 0, duration: 0.7, stagger: 0.12 },
          "-=0.4"
        )
        .from(
          ".hero-card",
          { x: 60, opacity: 0, duration: 0.8, stagger: 0.12 },
          "-=0.8"
        );
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={root}
      className="relative flex h-screen min-h-[640px] w-full items-center overflow-hidden"
    >
      {videoOk ? (
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          playsInline
          loop={false}
          onEnded={handleEnded}
          onError={() => setVideoOk(false)}
          poster={HERO_POSTER}
        >
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>
      ) : (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_POSTER})` }}
        />
      )}

      {/* Gradient overlays — left & bottom, keep center/right clear */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/40 to-transparent" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between px-6 md:px-10">
        <div className="max-w-2xl pt-24">
          <p className="hero-sub mb-4 heading text-lg tracking-[0.4em] text-gold">
            LUXONN ESTATES
          </p>
          <h1 className="heading text-white text-[18vw] leading-[0.82] sm:text-8xl lg:text-9xl">
            <span className="block overflow-hidden">
              <span className="hero-line block">LUXURY</span>
            </span>
            <span className="block overflow-hidden">
              <span className="hero-line gold-text block">REDEFINED</span>
            </span>
          </h1>
          <p className="hero-sub mt-6 max-w-md text-base leading-relaxed text-softgray">
            Discover the world&apos;s most extraordinary residences. A curated
            collection of architectural masterpieces for the few who define
            living at its highest form.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <button className="hero-cta rounded-full bg-gold px-8 py-3 heading text-lg tracking-wider text-black shadow-[0_0_30px_rgba(212,169,95,0.55)] transition-transform duration-300 hover:scale-105">
              Explore Estates
            </button>
            <button className="hero-cta flex items-center gap-2 rounded-full border border-white/50 px-8 py-3 heading text-lg tracking-wider text-white transition-colors duration-300 hover:border-gold hover:text-gold">
              <Play size={16} /> Watch Film
            </button>
          </div>
        </div>

        {/* Desktop floating glass cards */}
        <div className="hidden flex-col gap-4 lg:flex">
          {FLOATING_CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.label}
                className="hero-card glass flex w-64 items-center gap-4 rounded-2xl px-5 py-4"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/20 text-gold">
                  <Icon size={18} />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-widest text-softgray">
                    {card.label}
                  </p>
                  <p className="heading text-xl tracking-wide text-white">
                    {card.value}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
