import type { MenuLinkItem } from "@/types/menu";

export type Footer1NavBlock = {
  title: string;
  links: MenuLinkItem[];
};

export type Footer1NavColumn = {
  className: string;
  blocks: Footer1NavBlock[];
};

export const footer1NavColumns: Footer1NavColumn[] = [
  {
    className: "col-12 col-md-4 mxd-grid-item",
    blocks: [
      {
        title: "/ Services",
        links: [
          { href: "/services", label: "Branding & Identity" },
          { href: "/services", label: "Graphic & Creative Design" },
          { href: "/services", label: "Packaging Design" },
          { href: "/services", label: "Website Design & Development" },
          { href: "/services", label: "Social Media Marketing" },
          { href: "/services", label: "SEO & Content Marketing" },
        ],
      },
    ],
  },
  {
    className: "col-12 col-md-4 mxd-grid-item",
    blocks: [
      {
        title: "/ Services",
        links: [
          { href: "/services", label: "Video Production & Editing" },
          { href: "/services", label: "Photography & Videography" },
          { href: "/services", label: "UI/UX Design" },
          { href: "/services", label: "Print & Marketing Collateral" },
          { href: "/services", label: "Marketing Strategy & Consulting" },
        ],
      },
    ],
  },
  {
    className: "col-12 col-md-4 mxd-grid-item",
    blocks: [
      {
        title: "/ Inner pages",
        links: [
          { href: "/index-digital-agency", label: "Home" },
          { href: "/about-us", label: "About Us" },
          { href: "/services", label: "Services" },
          // { href: "/works-grid-sticky", label: "Works" },
          { href: "/pricing", label: "Pricing" },
          { href: "/contact", label: "Contact Us" },
        ],
      },
    ],
  },
];

export type Footer1PromoItem = {
  href: string;
  iconSrc: string;
  iconAlt: string;
  iconWidth: number;
  iconHeight: number;
  textLead: string;
  textSpan: string;
};

export const footer1PromoItems: Footer1PromoItem[] = [
  {
    href: "https://www.instagram.com/mosudesignstudio/",
    iconSrc: "/img/works/Moosu design studio logo.jpg",
    iconAlt: "Moosu design studio Logo",
    iconWidth: 56,
    iconHeight: 56,
    textLead: "Moosu design studio\n",
    textSpan: "Bespoke brand identity & digital experience design",
  },
  {
    href: "https://www.instagram.com/eurodecor.india/",
    iconSrc: "/img/works/EURO DECOR LOGO.jpeg",
    iconAlt: "EURO DECOR Logo",
    iconWidth: 56,
    iconHeight: 56,
    textLead: "EURO DECOR\n",
    textSpan: "Premium interior finishing & visual identity",
  },
  {
    href: "https://www.instagram.com/comforthavenbymk/",
    iconSrc: "/img/works/COMFORTHAVEN BY MK Logo.jpg",
    iconAlt: "COMFORTHAVEN BY MK Logo",
    iconWidth: 56,
    iconHeight: 56,
    textLead: "COMFORTHAVEN BY MK\n",
    textSpan: "Immersive home decor & e-commerce brand strategy",
  },
];

export type Footer1BackgroundImage = {
  wrapperClass: string;
  src: string;
  width: number;
  height: number;
  alt: string;
};

export const footer1BackgroundImages: Footer1BackgroundImage[] = [
  {
    wrapperClass: "footer-background__img1",
    src: "/img/demo/clouds-01.webp",
    width: 1400,
    height: 469,
    alt: "Azurio Footer Background Image",
  },
  {
    wrapperClass: "footer-background__img2",
    src: "/img/demo/clouds-02.webp",
    width: 1200,
    height: 401,
    alt: "Azurio Footer Background Image",
  },
];

export const footer1ForegroundImages: Footer1BackgroundImage[] = [
  {
    wrapperClass: "footer-foreground__img1",
    src: "/img/demo/clouds-03.webp",
    width: 1200,
    height: 374,
    alt: "Azurio Footer Foreground Image",
  },
];
