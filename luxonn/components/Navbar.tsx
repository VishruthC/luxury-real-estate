"use client";

import { useEffect, useRef, useState } from "react";
import { Search, Menu } from "lucide-react";
import gsap from "gsap";
import { scrollToSection } from "@/lib/lenis";

const NAV_LINKS = ["Home", "Properties", "About", "Services", "Contact"];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!navRef.current) return;
    gsap.fromTo(
      navRef.current,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.2 }
    );
  }, []);

  return (
    <header
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-black/70 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_40px_rgba(0,0,0,0.6)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <button
          onClick={() => scrollToSection("#home")}
          className="flex items-center gap-3"
          aria-label="LUXONN home"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold text-base font-bold text-black">
            L
          </span>
          <span className="heading text-2xl tracking-widest text-white">
            LUXONN
          </span>
        </button>

        <ul className="hidden items-center gap-9 lg:flex">
          {NAV_LINKS.map((link, i) => (
            <li key={link}>
              <button
                onClick={() =>
                  scrollToSection(
                    `#${link.toLowerCase() === "home" ? "home" : link.toLowerCase()}`
                  )
                }
                className={`heading text-lg tracking-wider transition-colors duration-300 hover:text-gold ${
                  i === 0 ? "text-white" : "text-softgray"
                }`}
              >
                {link}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button
            aria-label="Search"
            className="text-white/80 transition-colors hover:text-gold"
          >
            <Search size={20} />
          </button>
          <button className="hidden rounded-full border border-gold/70 bg-gold/10 px-6 py-2 heading text-base tracking-wider text-gold transition-all duration-300 hover:bg-gold hover:text-black md:inline-block">
            Book Viewing
          </button>
          <button
            aria-label="Menu"
            className="text-white/80 transition-colors hover:text-gold lg:hidden"
          >
            <Menu size={22} />
          </button>
        </div>
      </nav>
    </header>
  );
}
