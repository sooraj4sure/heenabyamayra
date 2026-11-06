import { BUSINESS, CITY, EMAIL, INSTAGRAM, INSTAGRAM_HANDLE, PHONE_DISPLAY, PHONE_TEL, waLink, WA_GENERAL } from "../lib/data";

/** Small dotted henna-style divider with a mandala centre. */
export function HennaDivider() {
  return (
    <div className="henna-divider" aria-hidden="true">
      <span className="hd-dots" />
      <svg viewBox="0 0 32 32" className="hd-mandala">
        <circle cx="16" cy="16" r="13" fill="none" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="16" cy="16" r="7.5" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
        <circle cx="16" cy="16" r="2.6" fill="currentColor" />
        <circle cx="16" cy="5" r="1.5" fill="currentColor" />
        <circle cx="16" cy="27" r="1.5" fill="currentColor" />
        <circle cx="5" cy="16" r="1.5" fill="currentColor" />
        <circle cx="27" cy="16" r="1.5" fill="currentColor" />
      </svg>
      <span className="hd-dots" />
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <p className="footer-brand">{BUSINESS}</p>
          <p className="footer-sub">by Amayra Shaikh · {CITY}</p>
          <p>
            Bridal &amp; festival mehndi, painted by hand and applied at your
            home. Every design is drawn fresh for the person wearing it.
          </p>
        </div>
        <div>
          <p className="footer-heading">Explore</p>
          <ul className="footer-links">
            <li><a href="/designs">Designs</a></li>
            <li><a href="/services">Services &amp; booking</a></li>
            <li><a href="/about">About Amayra</a></li>
            <li><a href="/contact">Book on WhatsApp</a></li>
          </ul>
        </div>
        <div>
          <p className="footer-heading">Book &amp; enquire</p>
          <ul className="footer-links">
            <li>
              <a href={waLink(WA_GENERAL)} target="_blank" rel="noreferrer">
                WhatsApp · {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a href={INSTAGRAM} target="_blank" rel="noreferrer">
                Instagram · {INSTAGRAM_HANDLE}
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </li>
            <li>{CITY} · Home service available</li>
          </ul>
        </div>
      </div>
      <div className="container footer-note">
        Demo preview crafted by Evenlyn Studio. Photos are samples — Amayra&apos;s
        own work and prices will replace them on the final site. {BUSINESS} ·{" "}
        {CITY}. Call or WhatsApp <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>.
      </div>
    </footer>
  );
}
