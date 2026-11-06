import { HennaDivider } from "../../components/Footer";
import {
  CITY,
  EMAIL,
  INSTAGRAM,
  INSTAGRAM_HANDLE,
  PHONE_DISPLAY,
  PHONE_TEL,
  waLink,
  WA_GENERAL,
} from "../../lib/data";

export default function ContactPage() {
  return (
    <>
      <section className="section">
        <div className="container">
          <HennaDivider />
          <p className="eyebrow">Book &amp; enquire</p>
          <h1 className="section-title">Let&apos;s fix your mehndi date</h1>
          <p className="section-lede">
            Message Amayra directly — every enquiry goes straight to her. No
            forms, no waiting on a website reply.
          </p>

          <div className="contact-grid">
            <a
              className="contact-card"
              href={waLink(WA_GENERAL)}
              target="_blank"
              rel="noreferrer"
            >
              <div className="card-icon" aria-hidden="true">💬</div>
              <h3>WhatsApp</h3>
              <p>Fastest way to book — share your date and occasion.</p>
              <span className="contact-value">{PHONE_DISPLAY}</span>
            </a>
            <a
              className="contact-card"
              href={INSTAGRAM}
              target="_blank"
              rel="noreferrer"
            >
              <div className="card-icon" aria-hidden="true">📸</div>
              <h3>Instagram DM</h3>
              <p>See her latest work and DM to book.</p>
              <span className="contact-value">{INSTAGRAM_HANDLE}</span>
            </a>
            <a className="contact-card" href={`mailto:${EMAIL}`}>
              <div className="card-icon" aria-hidden="true">✉️</div>
              <h3>Email</h3>
              <p>For longer enquiries and advance bookings.</p>
              <span className="contact-value">{EMAIL}</span>
            </a>
          </div>

          <div className="info-box">
            <h3>Good to know</h3>
            <p>
              <b>Home service:</b> Amayra comes to your home in {CITY}. If
              you&apos;re in a nearby area, message on WhatsApp to check —
              she&apos;ll confirm whether she can travel to you.
            </p>
            <p>
              <b>When you message, share:</b> your date, the occasion, how
              many people need mehndi, and the style you like (or a photo).
            </p>
            <p>
              <b>Call:</b>{" "}
              <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a> — or just tap
              the green WhatsApp button at the bottom of this page.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <HennaDivider />
          <p className="eyebrow">How booking works</p>
          <h2 className="section-title">Three easy steps</h2>
          <div className="steps-grid">
            <div className="step">
              <span className="step-num">1</span>
              <h3>Message Amayra</h3>
              <p>
                WhatsApp or DM on Instagram — share your date, the occasion
                and how many hands need mehndi.
              </p>
            </div>
            <div className="step">
              <span className="step-num">2</span>
              <h3>Choose your design</h3>
              <p>
                Pick a style from the designs page or send a photo you love.
                Amayra will confirm what works for your day — and the price.
              </p>
            </div>
            <div className="step">
              <span className="step-num">3</span>
              <h3>She comes to you</h3>
              <p>
                Amayra arrives at your home in Diyodar with her cones and
                everything else — you relax while she draws.
              </p>
            </div>
          </div>
          <p style={{ marginTop: "2rem", textAlign: "center" }}>
            <a
              className="btn btn-wa"
              href={waLink(WA_GENERAL)}
              target="_blank"
              rel="noreferrer"
            >
              Start your booking on WhatsApp
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
