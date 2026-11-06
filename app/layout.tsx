import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";

const display = Cormorant_Garamond({
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = Jost({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Heena by Amayra · Bridal & Festival Mehndi — Diyodar, Gujarat",
  description:
    "Heena by Amayra — bridal and festival mehndi by Amayra Shaikh in Diyodar, Gujarat, with home service. Book on WhatsApp or Instagram DM.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable}`}>

        <Header />
        <div className="tagline-marquee" aria-hidden="true">
          <div className="marquee-track">
            <span>
              Bridal &amp; Festival Mehndi ✦ Booking Open ✦ Home Service
              Available ✦ Diyodar, Gujarat ✦ DM for Orders ✦&nbsp;
            </span>
            <span>
              Bridal &amp; Festival Mehndi ✦ Booking Open ✦ Home Service
              Available ✦ Diyodar, Gujarat ✦ DM for Orders ✦&nbsp;
            </span>
          </div>
        </div>
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
