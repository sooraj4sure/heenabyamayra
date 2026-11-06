// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import { DESIGNS, waLink, type Design, type DesignCategory } from "../../lib/data";
// import { HennaDivider } from "../../components/Footer";

// const FILTERS: ("All" | DesignCategory)[] = [
//   "All",
//   "Bridal",
//   "Festival",
//   "Arabic & modern",
// ];

// export default function DesignsPage() {
//   const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
//   const [open, setOpen] = useState<Design | null>(null);

//   const visible =
//     filter === "All" ? DESIGNS : DESIGNS.filter((d) => d.category === filter);

//   return (
//     <section className="section">
//       <div className="container">
//         <HennaDivider />
//         <p className="eyebrow">Designs</p>
//         <h1 className="section-title">Styles Amayra loves to draw</h1>
//         <p className="section-lede">
//           Tap any design to see it bigger — then ask Amayra about it on
//           WhatsApp. These are sample photos to show the styles; her own work
//           will fill this page on the final site.
//         </p>

//         <div className="filter-row" role="group" aria-label="Filter designs by style">
//           {FILTERS.map((f) => (
//             <button
//               key={f}
//               className={`filter-chip${filter === f ? " active" : ""}`}
//               onClick={() => setFilter(f)}
//               aria-pressed={filter === f}
//             >
//               {f}
//             </button>
//           ))}
//         </div>

//         <div className="gallery-grid">
//           {visible.map((d) => (
//             <button
//               className="gallery-item"
//               key={d.src}
//               onClick={() => setOpen(d)}
//               aria-label={`View ${d.title} design`}
//             >
//               <span className="arch-frame">
//                 <span className="sample-tag">Sample photo</span>
//                 <Image src={d.src} alt={d.title} width={1280} height={1600} />
//               </span>
//               <span style={{ display: "block", padding: "0.6rem 0.2rem 0" }}>
//                 <b
//                   style={{
//                     display: "block",
//                     fontFamily: "var(--font-display), Georgia, serif",
//                     fontSize: "1.05rem",
//                     color: "var(--henna)",
//                   }}
//                 >
//                   {d.title}
//                 </b>
//                 <span style={{ fontSize: "0.83rem", color: "var(--muted)" }}>
//                   {d.style}
//                 </span>
//               </span>
//             </button>
//           ))}
//         </div>

//         <p className="sample-note">
//           All photos on this page are samples, shown to illustrate the styles.
//           Prices are shared on enquiry — message Amayra on WhatsApp with the
//           design you like and your date.
//         </p>
//       </div>

//       {open && (
//         <div
//           className="lightbox"
//           role="dialog"
//           aria-modal="true"
//           aria-label={open.title}
//           onClick={() => setOpen(null)}
//         >
//           <button
//             className="lightbox-close"
//             onClick={() => setOpen(null)}
//             aria-label="Close"
//           >
//             ✕
//           </button>
//           <div
//             className="lightbox-inner"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <Image src={open.src} alt={open.title} width={1280} height={1600} />
//             <div className="lightbox-body">
//               <p className="eyebrow">{open.style}</p>
//               <h3>{open.title}</h3>
//               <p>{open.blurb}</p>
//               <p className="sample-note" style={{ marginTop: "0.5rem" }}>
//                 Sample photo — Amayra&apos;s own work will replace it.
//               </p>
//               <div className="lightbox-actions">
//                 <a
//                   className="btn btn-wa"
//                   href={waLink(
//                     `Hi Amayra! I loved the ${open.title} design on your website and would like to enquire about it.`
//                   )}
//                   target="_blank"
//                   rel="noreferrer"
//                 >
//                   Enquire about this style
//                 </a>
//                 <button
//                   className="btn btn-outline"
//                   onClick={() => setOpen(null)}
//                 >
//                   Keep browsing
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }
"use client";

import { useState } from "react";
import Image from "next/image";
import { DESIGNS, waLink, type Design, type DesignCategory } from "../../lib/data";
import { HennaDivider } from "../../components/Footer";

const FILTERS: ("All" | DesignCategory)[] = [
  "All",
  "Bridal",
  "Festival",
  "Arabic & modern",
];

export default function DesignsPage() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const [open, setOpen] = useState<Design | null>(null);

  const visible =
    filter === "All" ? DESIGNS : DESIGNS.filter((d) => d.category === filter);

  return (
    <section className="section">
      <div className="container">
        <HennaDivider />
        <p className="eyebrow">Designs</p>
        <h1 className="section-title">Styles Amayra loves to draw</h1>
        <p className="section-lede">
          Tap any design to see it bigger — then ask Amayra about it on
          WhatsApp. These are sample photos to show the styles; her own work
          will fill this page on the final site.
        </p>

        <div className="filter-row" role="group" aria-label="Filter designs by style">
          {FILTERS.map((f) => (
            <button
              key={f}
              className={`filter-chip${filter === f ? " active" : ""}`}
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {visible.map((d) => (
            <button
              className="gallery-item"
              key={d.src}
              onClick={() => setOpen(d)}
              aria-label={`View ${d.title} design`}
            >
              <span className="arch-frame">
                <Image src={d.src} alt={d.title} width={1280} height={1600} />
              </span>
              <span style={{ display: "block", padding: "0.6rem 0.2rem 0" }}>
                <b
                  style={{
                    display: "block",
                    fontFamily: "var(--font-display), Georgia, serif",
                    fontSize: "1.05rem",
                    color: "var(--henna)",
                  }}
                >
                  {d.title}
                </b>
                <span style={{ fontSize: "0.83rem", color: "var(--muted)" }}>
                  {d.style}
                </span>
              </span>
            </button>
          ))}
        </div>

        <p className="sample-note">
          All photos on this page are samples, shown to illustrate the styles.
          Prices are shared on enquiry — message Amayra on WhatsApp with the
          design you like and your date.
        </p>
      </div>

      {open && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={open.title}
          onClick={() => setOpen(null)}
        >
          <button
            className="lightbox-close"
            onClick={() => setOpen(null)}
            aria-label="Close"
          >
            ✕
          </button>
          <div
            className="lightbox-inner"
            onClick={(e) => e.stopPropagation()}
          >
            <Image src={open.src} alt={open.title} width={1280} height={1600} />
            <div className="lightbox-body">
              <p className="eyebrow">{open.style}</p>
              <h3>{open.title}</h3>
              <p>{open.blurb}</p>
              <div className="lightbox-actions">
                <a
                  className="btn btn-wa"
                  href={waLink(
                    `Hi Amayra! I loved the ${open.title} design on your website and would like to enquire about it.`
                  )}
                  target="_blank"
                  rel="noreferrer"
                >
                  Enquire about this style
                </a>
                <button
                  className="btn btn-outline"
                  onClick={() => setOpen(null)}
                >
                  Keep browsing
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
