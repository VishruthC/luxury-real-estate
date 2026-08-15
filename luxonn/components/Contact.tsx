"use client";

import { MapPin, Phone, Mail } from "lucide-react";

const CONTACT = [
  { icon: MapPin, label: "Address", value: "1 LUXONN Tower, Dubai, UAE" },
  { icon: Phone, label: "Phone", value: "+971 4 000 0000" },
  { icon: Mail, label: "Email", value: "private@luxonn.com" },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-ink px-6 py-28 md:px-10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-2">
        <div>
          <p className="heading mb-3 text-base tracking-[0.4em] text-gold">
            INQUIRE
          </p>
          <h2 className="heading text-5xl text-white sm:text-6xl">
            Begin a <span className="gold-text">Private</span> Conversation
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-softgray">
            Every LUXONN relationship begins in confidence. Share your details
            and a private advisor will respond within 24 hours.
          </p>

          <div className="mt-10 flex flex-col gap-6">
            {CONTACT.map((c) => {
              const Icon = c.icon;
              return (
                <div key={c.label} className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/15 text-gold">
                    <Icon size={20} />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-softgray">
                      {c.label}
                    </p>
                    <p className="heading text-xl text-white">{c.value}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="group mt-10 h-56 overflow-hidden rounded-3xl border border-white/10 transition-all duration-700 hover:scale-[1.02]">
            <div
              className="h-full w-full bg-cover bg-center grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80)",
              }}
            />
          </div>
        </div>

        <form className="glass flex flex-col gap-6 rounded-3xl p-8 md:p-10">
          {[
            { id: "name", label: "Full Name", type: "text" },
            { id: "email", label: "Email Address", type: "email" },
          ].map((f) => (
            <div key={f.id} className="relative">
              <input
                id={f.id}
                type={f.type}
                placeholder=" "
                className="peer w-full rounded-xl border border-white/15 bg-black/30 px-4 pb-2 pt-6 text-white outline-none transition-colors focus:border-gold"
              />
              <label
                htmlFor={f.id}
                className="pointer-events-none absolute left-4 top-4 text-sm text-softgray transition-all peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-gold peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-xs"
              >
                {f.label}
              </label>
            </div>
          ))}

          <div className="relative">
            <textarea
              id="message"
              placeholder=" "
              rows={4}
              className="peer w-full rounded-xl border border-white/15 bg-black/30 px-4 pb-2 pt-6 text-white outline-none transition-colors focus:border-gold"
            />
            <label
              htmlFor="message"
              className="pointer-events-none absolute left-4 top-4 text-sm text-softgray transition-all peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-gold peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-xs"
            >
              Your Message
            </label>
          </div>

          <button
            type="submit"
            className="mt-2 rounded-full bg-gold px-8 py-3 heading text-lg tracking-wider text-black shadow-[0_0_30px_rgba(212,169,95,0.5)] transition-transform duration-300 hover:scale-105"
          >
            Request a Private Viewing
          </button>
        </form>
      </div>
    </section>
  );
}
