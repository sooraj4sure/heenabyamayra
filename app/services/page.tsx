import { HennaDivider } from "../../components/Footer";
import { waLink, WA_BRIDAL, WA_FESTIVAL, WA_GROUP, WA_HOME } from "../../lib/data";

const STYLES = [
  {
    name: "Arabic",
    desc: "Flowing trails, bold flowers and open spaces — light, modern and quick to wear.",
  },
  {
    name: "Traditional Indian",
    desc: "Dense, detailed work with fine fill patterns — the classic bridal look.",
  },
  {
    name: "Rajasthani-inspired",
    desc: "Rich, ornate motifs with peacocks and paisleys, made for wedding days.",
  },
  {
    name: "Gujarati motifs",
    desc: "Dandiya, elephant and Kutch embroidery-inspired patterns — close to home.",
  },
  {
    name: "Mandala & minimal",
    desc: "A clean mandala centre with delicate finger work — pretty for festivals.",
  },
  {
    name: "Custom designs",
    desc: "Bring a photo or an idea — initials, a motif that means something to you.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="section">
        <div className="container">
          <HennaDivider />
          <p className="eyebrow">Services</p>
          <h1 className="section-title">Mehndi, your way — at your home</h1>
          <p className="section-lede">
            Every booking starts with a message. Tell Amayra your date and
            occasion, and she&apos;ll confirm the design and the price on
            WhatsApp — no surprises on the day.
          </p>

          <div className="card-grid">
            <article className="card">
              <div className="card-icon" aria-hidden="true">👰</div>
              <h3>Bridal Mehndi</h3>
              <p>
                The full bridal experience — intricate full-hand designs with
                peacocks, paisleys and fine fill work, drawn slowly and
                carefully so the colour comes out deep and rich.
              </p>
              <p>
                Perfect for: weddings, engagements and sangeet nights.
              </p>
              <a
                className="btn btn-primary"
                href={waLink(WA_BRIDAL)}
                target="_blank"
                rel="noreferrer"
              >
                Enquire on WhatsApp
              </a>
              <br />
              <span className="price-note">Price on enquiry</span>
            </article>

            <article className="card">
              <div className="card-icon" aria-hidden="true">🪔</div>
              <h3>Festival Mehndi</h3>
              <p>
                Pretty hands for the festivals that fill the year — Karva
                Chauth, Teej, Eid, Diwali, Rakhi and family functions. Quick,
                joyful designs that suit everyone.
              </p>
              <p>Perfect for: festivals, pujas and family get-togethers.</p>
              <a
                className="btn btn-primary"
                href={waLink(WA_FESTIVAL)}
                target="_blank"
                rel="noreferrer"
              >
                Enquire on WhatsApp
              </a>
              <br />
              <span className="price-note">Price on enquiry</span>
            </article>

            <article className="card">
              <div className="card-icon" aria-hidden="true">🏠</div>
              <h3>Home Service</h3>
              <p>
                Amayra comes to your home in Diyodar with her cones and
                everything she needs. No parlour visits, no waiting — the
                mehndi happens where your celebration already is.
              </p>
              <p>Perfect for: brides, elders and busy festival mornings.</p>
              <a
                className="btn btn-primary"
                href={waLink(WA_HOME)}
                target="_blank"
                rel="noreferrer"
              >
                Book a home visit
              </a>
              <br />
              <span className="price-note">Price on enquiry</span>
            </article>
          </div>

          <div className="card-grid" style={{ gridTemplateColumns: "1fr" }}>
            <article className="card">
              <div className="card-icon" aria-hidden="true">👨‍👩‍👧</div>
              <h3>Family &amp; Group Mehndi</h3>
              <p>
                Weddings are never just one pair of hands. Book Amayra for the
                bride&apos;s family and guests too — sisters, mothers, friends
                — so everyone walks into the function with beautiful mehndi.
                Share your guest count on WhatsApp and she&apos;ll plan the
                day with you.
              </p>
              <a
                className="btn btn-primary"
                href={waLink(WA_GROUP)}
                target="_blank"
                rel="noreferrer"
              >
                Enquire for your group
              </a>
              <br />
              <span className="price-note">Price on enquiry</span>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <HennaDivider />
          <p className="eyebrow">Styles you can ask for</p>
          <h2 className="section-title">Pick a style, or bring your own idea</h2>
          <p className="section-lede">
            These are the styles Amayra draws most. If you have a photo saved
            on your phone, send it on WhatsApp — she&apos;ll tell you if she
            can draw it for you.
          </p>
          <div className="style-grid">
            {STYLES.map((s) => (
              <div className="style-tile" key={s.name}>
                <h3>{s.name}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <HennaDivider />
          <p className="eyebrow">When you book</p>
          <h2 className="section-title">What to share in your message</h2>
          <ul className="tick-list">
            <li>Your date and occasion — wedding, festival or function</li>
            <li>How many people need mehndi</li>
            <li>The style you like, or a photo of a design you love</li>
            <li>Your area in Diyodar, so the home visit can be planned</li>
          </ul>
          <div className="info-box">
            <h3>A note on prices</h3>
            <p>
              Prices depend on the design, the coverage and the number of
              hands — so Amayra shares them on enquiry, on WhatsApp, before
              you book. Nothing here is a fixed price, and there are no hidden
              charges added later.
            </p>
            <p>
              Wedding-season dates fill up fast, so it&apos;s worth messaging
              as soon as your date is fixed.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
