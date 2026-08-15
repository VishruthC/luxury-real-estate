import { X, Send, Share2 } from "lucide-react";

const COLUMNS = [
  {
    title: "Brand",
    links: ["LUXONN", "Our Story", "Press", "Careers"],
  },
  {
    title: "Properties",
    links: ["Featured", "New Listings", "Sold", "Collections"],
  },
  {
    title: "Company",
    links: ["About", "Services", "Advisors", "Contact"],
  },
  {
    title: "Connect",
    links: ["Instagram", "LinkedIn", "Twitter", "Newsletter"],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-charcoal px-6 py-16 md:px-10">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 md:grid-cols-4">
        {COLUMNS.map((col) => (
          <div key={col.title}>
            <h4 className="heading mb-5 text-lg tracking-widest text-gold">
              {col.title.toUpperCase()}
            </h4>
            <ul className="flex flex-col gap-3">
              {col.links.map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    className="text-sm text-softgray transition-colors hover:text-white"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-14 flex max-w-7xl flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 md:flex-row">
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold text-sm font-bold text-black">
            L
          </span>
          <span className="heading text-xl tracking-widest text-white">
            LUXONN
          </span>
        </div>

        <p className="text-xs text-softgray">
          © {new Date().getFullYear()} LUXONN Estates. All rights reserved.
        </p>

        <div className="flex gap-4 text-softgray">
          <a href="#" aria-label="Instagram" className="hover:text-gold">
            <Share2 size={18} />
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-gold">
            <Send size={18} />
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-gold">
            <X size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
