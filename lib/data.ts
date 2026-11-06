export const BUSINESS = "Heena by Amayra";
export const ARTIST = "Amayra Shaikh";
export const CITY = "Diyodar, Gujarat";
export const PHONE_DISPLAY = "+91 63561 45798";
export const PHONE_TEL = "+916356145798";
export const WA_NUMBER = "916356145798";
export const EMAIL = "aamyrashaikh098@gmail.com";
export const INSTAGRAM_HANDLE = "@aamyrashaikh098";
export const INSTAGRAM = "https://www.instagram.com/aamyrashaikh098";

export function waLink(message: string): string {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WA_GENERAL =
  "Hi Amayra! I found your website and would like to enquire about a mehndi booking.";
export const WA_BRIDAL =
  "Hi Amayra! I would like to enquire about bridal mehndi. My wedding date is ";
export const WA_FESTIVAL =
  "Hi Amayra! I would like to book festival mehndi. The occasion is ";
export const WA_HOME =
  "Hi Amayra! I would like to book a home-service mehndi appointment in Diyodar.";
export const WA_GROUP =
  "Hi Amayra! I would like to enquire about mehndi for my family / group.";

export type DesignCategory = "Bridal" | "Festival" | "Arabic & modern";

export interface Design {
  src: string;
  title: string;
  style: string;
  category: DesignCategory;
  blurb: string;
}

export const DESIGNS: Design[] = [
  {
    src: "/images/hero.jpg",
    title: "Fresh henna mandala",
    style: "Mandala palm · festive",
    category: "Festival",
    blurb:
      "A bold mandala centre with fine finger work — the kind of design that photographs beautifully at festivals and family functions.",
  },
  {
    src: "/images/bridal-peacock.jpg",
    title: "Bridal peacock & paisley",
    style: "Full-hand bridal",
    category: "Bridal",
    blurb:
      "Dense, story-filled bridal work — peacocks, paisleys and fine fill work from fingertips to wrist.",
  },
  {
    src: "/images/bridal-full.jpg",
    title: "Full-hand bridal",
    style: "Full-hand bridal",
    category: "Bridal",
    blurb:
      "Intricate bridal mehndi that covers the whole hand — made for the bride who wants every detail noticed.",
  },
  {
    src: "/images/lotus-hand.jpg",
    title: "Lotus medallion",
    style: "Arabic-inspired",
    category: "Arabic & modern",
    blurb:
      "A clean lotus medallion with trailing chains — light, modern and elegant for engagements and parties.",
  },
  {
    src: "/images/mandala-palms.jpg",
    title: "Mandala palms",
    style: "Mandala · festive",
    category: "Festival",
    blurb:
      "Matching mandalas on both palms with delicate finger bands — pretty, quick to wear and perfect for festive mornings.",
  },
  {
    src: "/images/mandala-palms-2.jpg",
    title: "Mandala palms, in pink",
    style: "Mandala · festive",
    category: "Festival",
    blurb:
      "The same joyful mandala style, shown against bridal pink — a favourite for sangeet and haldi mornings.",
  },
  {
    src: "/images/applying.jpg",
    title: "The cone at work",
    style: "Bridal peacock, in progress",
    category: "Bridal",
    blurb:
      "Every line drawn by hand, one cone at a time. This is how a bridal peacock design begins.",
  },
];
