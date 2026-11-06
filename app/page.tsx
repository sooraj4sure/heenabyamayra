import Image from "next/image";
import Link from "next/link";
import { HennaDivider } from "../components/Footer";
import {
  INSTAGRAM,
  INSTAGRAM_HANDLE,
  waLink,
  WA_BRIDAL,
  WA_FESTIVAL,
  WA_GENERAL,
  WA_HOME,
} from "../lib/data";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">Diyodar, Gujarat · Home service available</p>
            <h1>
              Mehndi, painted with love — <em>at your home.</em>
            </h1>
            <p className="hero-lede">
              Heena by Amayra is bridal &amp; festival mehndi by Amayra Shaikh.
              Fine, hand-drawn designs in deep, rich colour — applied at your
              home in Diyodar, so your mehndi morning stays relaxed and joyful.
            </p>
            <div className="hero-cta">
              <a
                className="btn btn-wa"
                href={waLink(WA_GENERAL)}
                target="_blank"
                rel="noreferrer"
              >
                Enquire on WhatsApp
              </a>
              <Link className="btn btn-outline" href="/designs">
                See the designs
              </Link>
            </div>
            <ul className="hero-chips">
              <li>✦ Bridal &amp; festival mehndi</li>
              <li>✦ Home service</li>
              <li>✦ DM to book</li>
            </ul>
          </div>
          <div className="hero-arch">
            <div className="arch-frame">
              <Image
                src="/images/hero.jpg"
                alt="A hand with a fresh dark henna mandala design and pink bangles"
                width={1280}
                height={1920}
                priority
              />
            </div>
            <p className="hero-note">
              <b>Booking open</b> — bridal &amp; festival mehndi
            </p>
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="section section-alt">
        <div className="container">
          <HennaDivider />
          <p className="eyebrow">What Amayra does</p>
          <h2 className="section-title">Mehndi for your biggest days</h2>
          <p className="section-lede">
            From a bride&apos;s full-hand design to quick festive hands for the
            whole family — every design is drawn fresh, by hand, for the person
            wearing it.
          </p>
          <div className="card-grid">
            <article className="card">
              <div className="card-icon" aria-hidden="true">👰</div>
              <h3>Bridal Mehndi</h3>
              <p>
                Intricate full-hand bridal work — peacocks, paisleys, florals
                and fine fill work, made to be photographed all day long.
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
                Pretty hands for Karva Chauth, Teej, Eid, Diwali, Rakhi and
                family functions — mandalas, Arabic trails and simple,
                elegant designs.
              </p>
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
                No parlour trips, no waiting around. Amayra comes to your
                home in Diyodar with everything she needs — you just sit
                back and enjoy it.
              </p>
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
        </div>
      </section>

      {/* Gallery preview */}
      <section className="section">
        <div className="container">
          <HennaDivider />
          <p className="eyebrow">Designs</p>
          <h2 className="section-title">A little of what she loves to draw</h2>
          <p className="section-lede">
            Mandalas, peacocks, lotus medallions and Arabic trails — a peek at
            the styles Amayra creates.
          </p>
          <div className="gallery-grid">
            {[
              { src: "/images/bridal-peacock.jpg", title: "Bridal peacock & paisley", sub: "Full-hand bridal" },
              { src: "/images/lotus-hand.jpg", title: "Lotus medallion", sub: "Arabic-inspired" },
              { src: "/images/mandala-palms.jpg", title: "Mandala palms", sub: "Festive" },
              { src: "/images/applying.jpg", title: "The cone at work", sub: "Bridal peacock, in progress" },
            ].map((d) => (
              <figure className="gallery-item" key={d.src}>
                <div className="arch-frame">
                  <Image src={d.src} alt={d.title} width={1280} height={853} />
                </div>
                <figcaption>
                  <b>{d.title}</b>
                  <span>{d.sub}</span>
                </figcaption>
              </figure>
            ))}
          </div>
          <p style={{ marginTop: "1.5rem" }}>
            <Link className="btn btn-outline" href="/designs">
              See all designs
            </Link>
          </p>
        </div>
      </section>

      {/* How booking works */}
      <section className="section section-alt">
        <div className="container">
          <HennaDivider />
          <p className="eyebrow">Booking</p>
          <h2 className="section-title">Three easy steps to your mehndi day</h2>
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
                Amayra will confirm what works for your day.
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
        </div>
      </section>

      {/* About teaser + CTA */}
      <section className="section">
        <div className="container">
          <div className="about-grid">
            <div className="arch-frame">
              <Image
                src="/images/applying.jpg"
                alt="A mehndi artist applying a peacock henna design with a cone"
                width={1280}
                height={960}
              />
            </div>
            <div className="about-copy">
              <p className="eyebrow">About Amayra</p>
              <h2 className="section-title">Hi, I&apos;m Amayra.</h2>
              <p className="lead">
                Mehndi is my favourite way to be part of someone&apos;s
                happiest days.
              </p>
              <p>
                I&apos;m a mehndi artist from Diyodar, Gujarat, and I draw
                bridal and festival mehndi — the long, detailed bridal hands,
                the quick pretty ones for festivals, and everything in
                between. I come to your home, so the mehndi happens where
                your celebration already is.
              </p>
              <p>
                <Link href="/about">More about Amayra →</Link>
              </p>
            </div>
          </div>
          <div className="cta-band" style={{ marginTop: "3rem" }}>
            <h2>Booking open — bridal &amp; festival mehndi</h2>
            <p>
              Wedding-season dates go quickly. Message Amayra on WhatsApp with
              your date and occasion, and she&apos;ll confirm your booking.
            </p>
            <a
              className="btn btn-wa"
              href={waLink(WA_GENERAL)}
              target="_blank"
              rel="noreferrer"
            >
              Chat on WhatsApp
            </a>
            <a
              className="btn btn-outline"
              href={INSTAGRAM}
              target="_blank"
              rel="noreferrer"
              style={{ borderColor: "#f6e3cd", color: "#ffe9c9" }}
            >
              Instagram · {INSTAGRAM_HANDLE}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
