import Image from "next/image";
import Link from "next/link";
import { HennaDivider } from "../../components/Footer";
import { INSTAGRAM, INSTAGRAM_HANDLE, waLink, WA_GENERAL } from "../../lib/data";

export default function AboutPage() {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="about-grid">
            <div className="arch-frame">
              <Image
                src="/images/applying.jpg"
                alt="A mehndi artist drawing a peacock henna design with a cone"
                width={1280}
                height={960}
              />
            </div>
            <div className="about-copy">
              <p className="eyebrow">About Amayra</p>
              <h1 className="section-title">Hi, I&apos;m Amayra.</h1>
              <p className="lead">
                Mehndi is my favourite way to be part of someone&apos;s
                happiest days.
              </p>
              <p>
                I&apos;m a mehndi artist from Diyodar, Gujarat. I draw bridal
                and festival mehndi — the long, detailed bridal hands, the
                quick pretty ones for festivals, and everything in between.
              </p>
              <p>
                What I love most is the quiet part of the morning: the bride
                sitting still for once, everyone talking around her, and a
                design slowly appearing on her hands, line by line. That is
                the moment I work for.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <HennaDivider />
          <p className="eyebrow">The way I work</p>
          <h2 className="section-title">Slow, careful and at your home</h2>
          <ul className="tick-list">
            <li>
              <b>Drawn by hand, every time.</b> No stencils, no shortcuts —
              each design is drawn fresh with a cone, for the person wearing
              it.
            </li>
            <li>
              <b>Your design, your way.</b> Bring a photo you love, or tell me
              the style and I&apos;ll draw something that suits your outfit
              and your occasion.
            </li>
            <li>
              <b>Home service in Diyodar.</b> I come to you with everything I
              need, so you can relax at home while the mehndi happens.
            </li>
            <li>
              <b>For brides and for everyone.</b> The bride, her sisters, her
              mother, her friends — a mehndi morning is better when the whole
              family joins in.
            </li>
          </ul>
          <p style={{ marginTop: "1.5rem" }}>
            <Link className="btn btn-outline" href="/designs">
              See the designs I love
            </Link>
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container center">
          <HennaDivider />
          <h2 className="section-title">Come say hello</h2>
          <p className="section-lede">
            The easiest way to reach me is WhatsApp or Instagram DM. Tell me
            your date and occasion, and we&apos;ll take it from there.
          </p>
          <p>
            <a
              className="btn btn-wa"
              href={waLink(WA_GENERAL)}
              target="_blank"
              rel="noreferrer"
            >
              Chat on WhatsApp
            </a>{" "}
            <a
              className="btn btn-outline"
              href={INSTAGRAM}
              target="_blank"
              rel="noreferrer"
            >
              Instagram · {INSTAGRAM_HANDLE}
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
