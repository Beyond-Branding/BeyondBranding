"use client";

import BlurSection from "@/components/animations/BlurSection";
import Link from "next/link";
import CommonLoadAnimation, {
  CommonLoadFade,
} from "@/components/animations/CommonLoadAnimation";
import { CommonScrollAnimated } from "@/components/animations/CommonScrollAnimated";
import CommonAnimatedText from "@/components/animations/CommonAnimatedText";
import TextScramble from "@/components/animations/TextScramble";
import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";

type FAQItem = {
  question: string;
  answer: string;
};

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "What services does Beyond Branding offer?",
    answer:
      "Beyond Branding offers social media management, content strategy, branding, graphic design, packaging design, website design and development, photography, videography, video editing, and digital brand support.",
  },
  {
    question: "Do you manage social media completely?",
    answer:
      "Yes. Social media management includes content planning, creative direction, post designs, captions, content calendars, posting support, and maintaining a consistent brand presence.",
  },
  {
    question: "Do you create content ideas for the brand?",
    answer:
      "Yes. Content ideas, reel concepts, captions, story ideas, monthly themes, and brand communication are planned based on your business, audience, and goals.",
  },
  {
    question: "Do you provide photography, videography, and video editing?",
    answer:
      "Yes. Shoots and edits can be planned for products, services, spaces, reels, website visuals, and social media content depending on your brand requirement.",
  },
  {
    question: "Do you design and develop websites?",
    answer:
      "Yes. Clean, responsive, and user-friendly websites are designed and developed to make your brand look professional, trustworthy, and easy to explore.",
  },
  {
    question: "Can you redesign an existing website?",
    answer:
      "Yes. Existing websites can be redesigned to improve the layout, content flow, visual style, user experience, and overall brand presentation.",
  },
  {
    question: "Do you create packaging designs?",
    answer:
      "Yes. Packaging designs are created for labels, boxes, pouches, and other formats with a focus on brand identity, clarity, and shelf appeal.",
  },
  {
    question: "Can we choose only the services we need?",
    answer:
      "Yes. Services can be selected individually or combined into a custom package based on your brand’s current goals, budget, and requirements.",
  },
  {
    question: "How does the process work?",
    answer:
      "The process starts with understanding your brand, goals, audience, and requirements. After that, the direction is planned, the work is created, feedback is taken, and final deliverables are shared.",
  },
  {
    question: "How is pricing decided?",
    answer:
      "Pricing depends on the services required, project scope, number of deliverables, timeline, and level of support needed. A custom quotation is shared after understanding the requirement.",
  },
];

export default function InnerHeadline() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const contentRefs = useRef<Array<HTMLDivElement | null>>([]);

  useLayoutEffect(() => {
    const targets = contentRefs.current;

    targets.forEach((content, idx) => {
      if (!content) return;
      gsap.killTweensOf(content);

      const isOpen = idx === openIndex;
      const targetPaddingBottom = window.matchMedia("(min-width: 768px)")
        .matches
        ? "5.4rem"
        : "3rem";

      if (isOpen) {
        gsap.set(content, {
          display: "flex",
          height: "auto",
          paddingTop: 0,
          paddingBottom: targetPaddingBottom,
        });
        const height = content.scrollHeight;
        gsap.fromTo(
          content,
          { height: 0, paddingTop: 0, paddingBottom: 0 },
          {
            height,
            paddingTop: 0,
            paddingBottom: targetPaddingBottom,
            duration: 0.4,
            ease: "power2.out",
            onComplete: () => {
              gsap.set(content, { height: "auto" });
            },
          },
        );
      } else {
        if (getComputedStyle(content).display === "none") return;
        gsap.set(content, {
          height: content.scrollHeight,
          paddingTop: 0,
          paddingBottom: targetPaddingBottom,
        });
        gsap.to(content, {
          height: 0,
          paddingTop: 0,
          paddingBottom: 0,
          duration: 0.4,
          ease: "power2.out",
          onComplete: () => {
            gsap.set(content, { display: "none", height: "auto" });
          },
        });
      }
    });

    return () => {
      targets.forEach((content) => {
        if (!content) return;
        gsap.killTweensOf(content);
      });
    };
  }, [openIndex]);

  const onToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <CommonLoadAnimation>
      <>
        <BlurSection className="mxd-section padding-bottom-default">
          <div className="mxd-container grid-l-container">
            {/* Block - Inner Headline v04 Start */}
            <div className="mxd-block loading-wrap">
              <div className="inner-headline">
                <div className="container-fluid p-0">
                  <div className="row g-0">
                    <div className="col-12 mxd-grid-item">
                      {/* breadcrumbs */}
                      <CommonLoadFade index={0}>
                        <div className="inner-headline__breadcrumbs loading-fade">
                          <div className="breadcrumbs__nav">
                            <span>
                              <Link href={`/`}>
                                <TextScramble className="mxd-scramble">
                                  Home
                                </TextScramble>
                              </Link>
                            </span>
                            <span className="current-item">FAQ </span>
                          </div>
                        </div>
                      </CommonLoadFade>
                    </div>
                    <div className="col-12">
                      {/* content */}
                      <div className="inner-headline__content has-medium-title">
                        <div className="container-fluid p-0">
                          <div className="row g-0">
                            <div className="col-12 col-xl-6 mxd-grid-item">
                              <div className="inner-headline__title pre-subtitle-medium">
                                <CommonAnimatedText
                                  as="h1"
                                  className="medium loading-split"
                                  animation="splitLinesLoad"
                                >
                                  FAQ
                                </CommonAnimatedText>
                              </div>
                              <div className="inner-headline__subtitle">
                                <CommonAnimatedText
                                  as="p"
                                  className="loading-split"
                                  animation="splitLinesLoad"
                                >
                                  Everything <span>you need to know</span>
                                </CommonAnimatedText>
                              </div>
                            </div>
                            <div className="col-12 col-xl-6 mxd-grid-item">
                              {/* split header caption */}
                              <div className="inner-headline__caption split-caption pre-grid">
                                <CommonAnimatedText
                                  as="p"
                                  className="t-bold t-large loading-split"
                                  animation="splitLinesLoad"
                                >
                                  Have questions before we begin? We&apos;ve got the answers!
                                  Here, you&apos;ll find clear and concise
                                  information{" "}
                                  <span>
                                    Everything you need to know about our services, process, timelines, and how Beyond Branding helps bring your brand ideas to life.
                                  </span>
                                </CommonAnimatedText>
                              </div>
                              {/* split header grid block */}
                              {/* Block - Accordion Start */}
                              <CommonLoadFade index={1}>
                                <div className="mxd-accordion loading-fade">
                                  {FAQ_ITEMS.map((item, idx) => {
                                    const isOpen = openIndex === idx;
                                    return (
                                      <div
                                        key={item.question}
                                        className="mxd-accordion__item"
                                      >
                                        <CommonScrollAnimated
                                          className="mxd-accordion__divider anim-uni-in-up"
                                          as="div"
                                          animation="inUp"
                                        />
                                        <CommonScrollAnimated
                                          className={`mxd-accordion__title anim-uni-in-up ${isOpen ? "accordion-active accordion-opened" : ""}`}
                                          as="div"
                                          animation="inUp"
                                          role="button"
                                          tabIndex={0}
                                          aria-expanded={isOpen}
                                          onClick={() => onToggle(idx)}
                                          onKeyDown={(e) => {
                                            if (
                                              e.key === "Enter" ||
                                              e.key === " "
                                            ) {
                                              e.preventDefault();
                                              onToggle(idx);
                                            }
                                          }}
                                        >
                                          <p>{item.question}</p>
                                          <div
                                            className={`mxd-accordion__arrow ${isOpen ? "accordion-rotate" : ""}`}
                                          >
                                            <i className="mxd-accordion__close">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={18}
                                                height={18}
                                                version="1.1"
                                                viewBox="0 0 18 18"
                                              >
                                                <path d="M3.6,0v3.6H0V0h3.6ZM18,18v-3.6h-3.6v3.6h3.6ZM14.4,7.2v-3.6h-3.6v3.6h-3.6v-3.6h-3.6v3.6h3.6v3.6h3.6v3.6h3.6v-3.6h-3.6v-3.6h3.6ZM18,0h-3.6v3.6h3.6V0ZM0,18h3.6v-3.6H0v3.6ZM3.6,14.4h3.6v-3.6h-3.6v3.6Z" />
                                              </svg>
                                            </i>
                                            <i className="mxd-accordion__plus">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={18}
                                                height={18}
                                                version="1.1"
                                                viewBox="0 0 18 18"
                                              >
                                                <path d="M18,7.2v3.6h-7.2v7.2h-3.6v-7.2H0v-3.6h7.2V0h3.6v7.2h7.2Z" />
                                              </svg>
                                            </i>
                                          </div>
                                        </CommonScrollAnimated>
                                        <div
                                          ref={(el) => {
                                            contentRefs.current[idx] = el;
                                          }}
                                          className="mxd-accordion__content"
                                        >
                                          <p className="t-medium mxd-accordion__text">
                                            {item.answer}
                                          </p>
                                        </div>
                                        <CommonScrollAnimated
                                          className="mxd-accordion__divider anim-uni-in-up"
                                          as="div"
                                          animation="inUp"
                                        />
                                      </div>
                                    );
                                  })}
                                </div>
                              </CommonLoadFade>
                              {/* Block - Accordion End */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Block - Inner Headline v04 End */}
          </div>
        </BlurSection>
      </>
    </CommonLoadAnimation>
  );
}
