"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import TextScramble from "@/components/animations/TextScramble";
import CommonServicesStack, {
  ServicesStackSlot,
} from "@/components/animations/CommonServicesStack";

const IMG_W = 1200;
const IMG_H = 1300;
const IMG_ALT = "Azurio Template Sample Image";

type Card = {
  subtitle: string;
  title: string;
  tagCols: [string[], string[]];
  image: string;
  descrClass: string;
  descr: ReactNode;
};

const CARDS: Card[] = [
  {
    subtitle: "01 / Services",
    title: "Branding & Identity",
    tagCols: [
  ["Logo Design", "Brand Systems", "Visual Language"],
  ["Brand Guidelines", "Tone & Style", "Identity Design"],
    ],
    image: "https://res.cloudinary.com/daoju0r3c/image/upload/v1782827386/image_56_bovd4b.png",
    descrClass: "t-large t-bold services-card__descr",
    descr: (
      <>
        A clear identity gives your brand a strong foundation. 
        <span>
          From logo design to colours, typography, visual language, and brand guidelines, every element is shaped to make your business look consistent, memorable, and easy to recognise.
        </span>
      </>
    ),
  },
  {
    subtitle: "02 / Services",
    title: "Social Media Management",
    tagCols: [
  ["Content Planning", "Post Design", "Reels"],
  ["Captions", "Story Ideas", "Profile Management"],
],
    image: "https://res.cloudinary.com/daoju0r3c/image/upload/v1782827411/image_60_bjzpsl.png",
    descrClass: "t-bold t-large services-card__descr",
    descr: (
      <>
        A strong social presence starts with clarity and consistency.
        <span>
          Content is planned, designed, and managed to keep your brand active, relevant, and connected with the right audience across platforms.
        </span>
      </>
    ),
  },
  {
    subtitle: "03 / Services",
    title: "Graphic & Creative Design",
    tagCols: [
  ["Social Posts", "Campaigns", "Ads"],
  ["Brochures", "Brand Creatives", "Digital Design"],
],
    image: "https://res.cloudinary.com/daoju0r3c/image/upload/v1782827387/image_57_e2ppmj.png",
    descrClass: "t-bold t-large services-card__descr",
    descr: (
      <>
        Designs made to communicate clearly and catch attention.{" "}
        <span>
          From everyday creatives to campaign visuals, each design is built to make your brand look sharp, professional, and visually consistent.
        </span>
      </>
    ),
  },
  {
    subtitle: "04 / Services",
    title: "Packaging Design",
    tagCols: [
  ["Label Design", "Box Design", "Product Packaging"],
  ["Print Files", "Shelf Impact", "Brand Story"],
],
    image: "https://res.cloudinary.com/daoju0r3c/image/upload/v1782827381/image_58_mtolll.png",
    descrClass: "t-bold t-large services-card__descr",
    descr: (
      <>
        Packaging is often the first real touchpoint of a product.
        <span>
          Every design is created to look attractive, feel functional, and communicate the brand story clearly on shelves, online, and in customers’ hands.
        </span>
      </>
    ),
  },
  {
  subtitle: "05 / Services",
  title: "Website Design & Development",
  tagCols: [
    ["Website Design", "Landing Pages", "UI Design"],
    ["Responsive Build", "Development", "User Experience"],
  ],
  image: "https://res.cloudinary.com/daoju0r3c/image/upload/v1782827405/image_59_z7lxcf.png",
  descrClass: "t-bold t-large services-card__descr",
  descr: (
    <>
      A website should look good and work smoothly.
      <span>
        Clean layouts, clear content, and responsive development come together to create a digital experience that feels easy to explore and built for trust.
      </span>
    </>
  ),
},
{
  subtitle: "06 / Services",
  title: "SEO & Content Marketing",
  tagCols: [
    ["SEO Strategy", "Website Content", "Blogs"],
    ["Keywords", "Copywriting", "Digital Growth"],
  ],
  image: "https://res.cloudinary.com/daoju0r3c/image/upload/v1782827404/image_66_mhvzos.png",
  descrClass: "t-bold t-large services-card__descr",
  descr: (
    <>
      Content that helps your brand get found and understood.
      <span>
        From search-friendly website copy to content planning, every piece is created to improve visibility, engagement, and long-term digital presence.
      </span>
    </>
  ),
},
{
  subtitle: "07 / Services",
  title: "Video Production & Editing",
  tagCols: [
    ["Reels", "Brand Videos", "Product Videos"],
    ["Campaigns", "Editing", "Motion Content"],
  ],
  image: "https://res.cloudinary.com/daoju0r3c/image/upload/v1782827395/image_62_hnn9ic.png",
  descrClass: "t-bold t-large services-card__descr",
  descr: (
    <>
      Video content built to hold attention and tell the story better.
      <span>
        From concept to final edit, every frame is shaped to make the message clear, engaging, and platform-ready.
      </span>
    </>
  ),
},
{
  subtitle: "08 / Services",
  title: "Photography & Videography",
  tagCols: [
    ["Product Shoots", "Brand Shoots", "Space Shoots"],
    ["Reels", "Lifestyle Content", "Visual Storytelling"],
  ],
  image: "https://res.cloudinary.com/daoju0r3c/image/upload/v1782827386/image_61_rhpa6d.png",
  descrClass: "t-bold t-large services-card__descr",
  descr: (
    <>
      Strong visuals make a brand feel more real and relatable.
      <span>
        Photography and videography are planned to capture products, spaces, people, and stories in a polished and authentic way.
      </span>
    </>
  ),
},
{
  subtitle: "09 / Services",
  title: "UI/UX Design",
  tagCols: [
    ["User Flow", "Wireframes", "Interface Design"],
    ["App Design", "Website UX", "Digital Experience"],
  ],
  image: "https://res.cloudinary.com/daoju0r3c/image/upload/v1782827397/image_63_atnus3.png",
  descrClass: "t-bold t-large services-card__descr",
  descr: (
    <>
      Digital experiences designed to feel simple, clean, and easy to use.
      <span>
        Every screen is planned with the user in mind, making the journey smoother and the brand experience stronger.
      </span>
    </>
  ),
},
{
  subtitle: "10 / Services",
  title: "Print & Marketing Collateral",
  tagCols: [
    ["Brochures", "Business Cards", "Catalogues"],
    ["Flyers", "Posters", "Print Design"],
  ],
  image: "https://res.cloudinary.com/daoju0r3c/image/upload/v1782827401/image_64_eqa0n1.png",
  descrClass: "t-bold t-large services-card__descr",
  descr: (
    <>
      Offline materials that keep your brand communication clear and consistent.
      <span>
        Every print asset is designed with purpose, so your brand looks professional across every physical touchpoint.
      </span>
    </>
  ),
},
{
  subtitle: "11 / Services",
  title: "Marketing Strategy & Consulting",
  tagCols: [
    ["Brand Strategy", "Campaign Planning", "Content Direction"],
    ["Audience Study", "Growth Plans", "Consulting"],
  ],
  image: "https://res.cloudinary.com/daoju0r3c/image/upload/v1782827399/image_65_zl4v9z.png",
  descrClass: "t-bold t-large services-card__descr",
  descr: (
    <>
      Better marketing begins with better direction.
      <span>
        Strategy and consulting help define what your brand needs, who it should speak to, and how every creative effort can move with purpose.
      </span>
    </>
  ),
},

];

function Tag({ children }: { children: string }) {
  return (
    <TextScramble className="tag tag-s-mobile mxd-scramble">
      {children}
    </TextScramble>
  );
}

function ServiceCard({ card, index }: { card: Card; index: number }) {
  const [colA, colB] = card.tagCols;
  return (
    <ServicesStackSlot part="card" index={index}>
      <div className="mxd-stack-services__card">
        <ServicesStackSlot part="wrapper" index={index}>
          <div className="services-card__wrapper">
            <div className="services-card__content">
              <div className="services-card__info">
                <div className="services-card__subtitle">
                  <Tag>{card.subtitle}</Tag>
                </div>
                <div className="services-card__title">
                  <ServicesStackSlot part="title" index={index}>
                    <div className="services-card__title-text">
                      {card.title}
                    </div>
                  </ServicesStackSlot>
                </div>
                <ServicesStackSlot part="tags" index={index}>
                  <div className="services-card__tags">
                    <div className="tags-column">
                      {colA.map((t) => (
                        <Tag key={t}>{t}</Tag>
                      ))}
                    </div>
                    <div className="tags-column">
                      {colB.map((t) => (
                        <Tag key={t}>{t}</Tag>
                      ))}
                    </div>
                  </div>
                </ServicesStackSlot>
              </div>
              <ServicesStackSlot part="descr" index={index}>
                <div className={card.descrClass}>{card.descr}</div>
              </ServicesStackSlot>
            </div>
            <ServicesStackSlot part="image" index={index}>
              <div className="services-card__image">
                <Image
                  src={card.image}
                  width={IMG_W}
                  height={IMG_H}
                  alt={IMG_ALT}
                />
                <div className="services-card__cover" />
              </div>
            </ServicesStackSlot>
          </div>
        </ServicesStackSlot>
      </div>
    </ServicesStackSlot>
  );
}

export default function ServicesDescriptionStack() {
  return (
    <div id="services" className="mxd-section">
      <div className="mxd-container fullwidth-container">
        <div className="mxd-block">
          <CommonServicesStack className="mxd-stack-services">
            {CARDS.map((card, index) => (
              <ServiceCard key={card.subtitle} card={card} index={index} />
            ))}
          </CommonServicesStack>
        </div>
      </div>
    </div>
  );
}
