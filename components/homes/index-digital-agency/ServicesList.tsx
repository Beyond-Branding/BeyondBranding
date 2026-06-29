"use client";

import PinnedSection from "@/components/animations/PinnedSection";
import Link from "next/link";
import { CommonScrollAnimated } from "@/components/animations/CommonScrollAnimated";
import CommonAnimatedText from "@/components/animations/CommonAnimatedText";
import TextScramble from "@/components/animations/TextScramble";
export default function ServicesList() {
  return (
    <>
      <PinnedSection
        blurSection
        className="mxd-section padding-top-subtitle-mobile padding-bottom-default"
      >
        <PinnedSection.Inner>
          <div className="mxd-container grid-l-container">
            {/* Block - Section Title v01 Start */}
            <div className="mxd-block">
              <div className="mxd-section-title pre-grid">
                <div className="container-fluid p-0">
                  <div className="row g-0 d-flex flex-column-reverse flex-xl-row">
                    <div className="col-12 col-xl-8 mxd-grid-item">
                      <div className="mxd-section-title__title">
                        <CommonAnimatedText
                          as="h2"
                          className="reveal-type"
                          animation="revealType"
                        >
                          Creative Services Built Around Your Brand
                        </CommonAnimatedText>
                      </div>
                    </div>
                    <div className="col-12 col-xl-4 mxd-grid-item">
                      <div className="mxd-section-title__data top-controls">
                        <CommonScrollAnimated
                          className="mxd-section-title__controls pre-title justify-end anim-uni-in-up"
                          as="div"
                          animation="inUp"
                        >
                          <Link
                            className="btn btn-line btn-line-default"
                            href={`/services`}
                          >
                            <TextScramble className="btn-caption mxd-scramble">
                              All Services
                            </TextScramble>
                          </Link>
                        </CommonScrollAnimated>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Block - Section Title v01 End */}
            {/* Block - Services List Start */}
            <div className="mxd-block">
              <div className="mxd-services-list no-marquee">
                {/* services item */}
                <Link
                  className="mxd-services-list__item active-cursor-image-tr"
                  data-cursor-image="https://res.cloudinary.com/daoju0r3c/image/upload/v1782715491/image_33_sujwqw.png"
                  href={`/services`}
                >
                  <div className="mxd-services-list__divider top" />
                  <div className="container-fluid px-0 mxd-services-list__inner">
                    <div className="row gx-0">
                      <div className="col-12 col-xl-1 mxd-grid-padding">
                        <div className="mxd-services-list__number">
                          <span className="meta-tag">[01]</span>
                        </div>
                      </div>
                      <div className="col-12 col-xl-6 mxd-grid-padding">
                        <div className="mxd-services-list__title">
                          <h3>Branding & Identity</h3>
                        </div>
                      </div>
                      <div className="col-12 col-xl-5 mxd-grid-padding">
                        <div className="mxd-services-list__descr">
                          <p className="t-medium">
                            A complete visual identity that gives your brand a clear look, voice, and personality. From logos to brand systems, every detail is built to feel memorable and consistent.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mxd-services-list__divider bottom" />
                </Link>
                {/* services item */}
                <Link
                  className="mxd-services-list__item active-cursor-image-tr"
                  data-cursor-image="https://res.cloudinary.com/daoju0r3c/image/upload/v1782717383/image_34_sexlcu.png"
                  href={`/services`}
                >
                  <div className="mxd-services-list__divider top" />
                  <div className="container-fluid px-0 mxd-services-list__inner">
                    <div className="row gx-0">
                      <div className="col-12 col-xl-1 mxd-grid-padding">
                        <div className="mxd-services-list__number">
                          <span className="meta-tag">[02]</span>
                        </div>
                      </div>
                      <div className="col-12 col-xl-6 mxd-grid-padding">
                        <div className="mxd-services-list__title">
                          <h3>Graphic & Creative Design</h3>
                        </div>
                      </div>
                      <div className="col-12 col-xl-5 mxd-grid-padding">
                        <div className="mxd-services-list__descr">
                          <p className="t-medium">
                            Social media creatives, digital designs, and brand visuals that communicate clearly and catch attention without feeling overdone.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mxd-services-list__divider bottom" />
                </Link>
                {/* services item */}
                <Link
                  className="mxd-services-list__item active-cursor-image-tr"
                  data-cursor-image="https://res.cloudinary.com/daoju0r3c/image/upload/v1782717928/image_35_zrdmr1.png"
                  href={`/services`}
                >
                  <div className="mxd-services-list__divider top" />
                  <div className="container-fluid px-0 mxd-services-list__inner">
                    <div className="row gx-0">
                      <div className="col-12 col-xl-1 mxd-grid-padding">
                        <div className="mxd-services-list__number">
                          <span className="meta-tag">[03]</span>
                        </div>
                      </div>
                      <div className="col-12 col-xl-6 mxd-grid-padding">
                        <div className="mxd-services-list__title">
                          <h3>Packaging Design</h3>
                        </div>
                      </div>
                      <div className="col-12 col-xl-5 mxd-grid-padding">
                        <div className="mxd-services-list__descr">
                          <p className="t-medium">
                            Packaging that makes your product look better, feel premium, and stand out on shelves, online, and in customers’ hands.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mxd-services-list__divider bottom" />
                </Link>
                {/* services item */}
                <Link
                  className="mxd-services-list__item active-cursor-image-tr"
                  data-cursor-image="https://res.cloudinary.com/daoju0r3c/image/upload/v1782718710/image_36_eiavqf.png"
                  href={`/services`}
                >
                  <div className="mxd-services-list__divider top" />
                  <div className="container-fluid px-0 mxd-services-list__inner">
                    <div className="row gx-0">
                      <div className="col-12 col-xl-1 mxd-grid-padding">
                        <div className="mxd-services-list__number">
                          <span className="meta-tag">[04]</span>
                        </div>
                      </div>
                      <div className="col-12 col-xl-6 mxd-grid-padding">
                        <div className="mxd-services-list__title">
                          <h3>Website Design & Development</h3>
                        </div>
                      </div>
                      <div className="col-12 col-xl-5 mxd-grid-padding">
                        <div className="mxd-services-list__descr">
                          <p className="t-medium">
                            Modern, responsive websites designed to look clean, load smoothly, and help visitors understand your business faster.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mxd-services-list__divider bottom" />
                </Link>
                {/* services item */}
                <Link
                  className="mxd-services-list__item active-cursor-image-tr"
                  data-cursor-image="https://res.cloudinary.com/daoju0r3c/image/upload/v1782720624/image_37_knkpzl.png"
                  href={`/services`}
                >
                  <div className="mxd-services-list__divider top" />
                  <div className="container-fluid px-0 mxd-services-list__inner">
                    <div className="row gx-0">
                      <div className="col-12 col-xl-1 mxd-grid-padding">
                        <div className="mxd-services-list__number">
                          <span className="meta-tag">[05]</span>
                        </div>
                      </div>
                      <div className="col-12 col-xl-6 mxd-grid-padding">
                        <div className="mxd-services-list__title">
                          <h3>Social Media Marketing</h3>
                        </div>
                      </div>
                      <div className="col-12 col-xl-5 mxd-grid-padding">
                        <div className="mxd-services-list__descr">
                          <p className="t-medium">
                            Consistent and strategy-led social media content that helps your brand connect, engage, and grow online. From content planning to creatives, captions, reels, and platform management, every detail is created with purpose.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mxd-services-list__divider bottom" />
                </Link>
                <Link
                  className="mxd-services-list__item active-cursor-image-tr"
                  data-cursor-image="https://res.cloudinary.com/daoju0r3c/image/upload/v1782729352/image_44_ovepnj.png"
                  href={`/services`}
                >
                  <div className="mxd-services-list__divider top" />
                  <div className="container-fluid px-0 mxd-services-list__inner">
                    <div className="row gx-0">
                      <div className="col-12 col-xl-1 mxd-grid-padding">
                        <div className="mxd-services-list__number">
                          <span className="meta-tag">[06]</span>
                        </div>
                      </div>
                      <div className="col-12 col-xl-6 mxd-grid-padding">
                        <div className="mxd-services-list__title">
                          <h3>SEO & Content Marketing</h3>
                        </div>
                      </div>
                      <div className="col-12 col-xl-5 mxd-grid-padding">
                        <div className="mxd-services-list__descr">
                          <p className="t-medium">
                            Search-friendly content and digital strategies that improve visibility, bring the right audience, and support long-term growth.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mxd-services-list__divider bottom" />
                </Link>
                <Link
                  className="mxd-services-list__item active-cursor-image-tr"
                  data-cursor-image="https://res.cloudinary.com/daoju0r3c/image/upload/v1782727102/image_40_ozqj8q.png"
                  href={`/services`}
                >
                  <div className="mxd-services-list__divider top" />
                  <div className="container-fluid px-0 mxd-services-list__inner">
                    <div className="row gx-0">
                      <div className="col-12 col-xl-1 mxd-grid-padding">
                        <div className="mxd-services-list__number">
                          <span className="meta-tag">[07]</span>
                        </div>
                      </div>
                      <div className="col-12 col-xl-6 mxd-grid-padding">
                        <div className="mxd-services-list__title">
                          <h3>Video Production & Editing</h3>
                        </div>
                      </div>
                      <div className="col-12 col-xl-5 mxd-grid-padding">
                        <div className="mxd-services-list__descr">
                          <p className="t-medium">
                            Reels, brand videos, product stories, and campaign edits created to hold attention and communicate your message with impact.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mxd-services-list__divider bottom" />
                </Link>
                <Link
                  className="mxd-services-list__item active-cursor-image-tr"
                  data-cursor-image="https://res.cloudinary.com/daoju0r3c/image/upload/v1782722324/image_38_auaobf.png"
                  href={`/services`}
                >
                  <div className="mxd-services-list__divider top" />
                  <div className="container-fluid px-0 mxd-services-list__inner">
                    <div className="row gx-0">
                      <div className="col-12 col-xl-1 mxd-grid-padding">
                        <div className="mxd-services-list__number">
                          <span className="meta-tag">[08]</span>
                        </div>
                      </div>
                      <div className="col-12 col-xl-6 mxd-grid-padding">
                        <div className="mxd-services-list__title">
                          <h3>Photography & Videography</h3>
                        </div>
                      </div>
                      <div className="col-12 col-xl-5 mxd-grid-padding">
                        <div className="mxd-services-list__descr">
                          <p className="t-medium">
                            Professional visuals that capture your products, services, spaces, and brand personality in a polished and authentic way.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mxd-services-list__divider bottom" />
                </Link>
                <Link
                  className="mxd-services-list__item active-cursor-image-tr"
                  data-cursor-image="https://res.cloudinary.com/daoju0r3c/image/upload/v1782727458/image_41_rhckr7.png"
                  href={`/services`}
                >
                  <div className="mxd-services-list__divider top" />
                  <div className="container-fluid px-0 mxd-services-list__inner">
                    <div className="row gx-0">
                      <div className="col-12 col-xl-1 mxd-grid-padding">
                        <div className="mxd-services-list__number">
                          <span className="meta-tag">[09]</span>
                        </div>
                      </div>
                      <div className="col-12 col-xl-6 mxd-grid-padding">
                        <div className="mxd-services-list__title">
                          <h3>UI/UX Design</h3>
                        </div>
                      </div>
                      <div className="col-12 col-xl-5 mxd-grid-padding">
                        <div className="mxd-services-list__descr">
                          <p className="t-medium">
                            Simple, smooth, and user-friendly digital experiences that make websites, apps, and platforms easier to explore.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mxd-services-list__divider bottom" />
                </Link>
                <Link
                  className="mxd-services-list__item active-cursor-image-tr"
                  data-cursor-image="https://res.cloudinary.com/daoju0r3c/image/upload/v1782727991/image_42_zeulvd.png"
                  href={`/services`}
                >
                  <div className="mxd-services-list__divider top" />
                  <div className="container-fluid px-0 mxd-services-list__inner">
                    <div className="row gx-0">
                      <div className="col-12 col-xl-1 mxd-grid-padding">
                        <div className="mxd-services-list__number">
                          <span className="meta-tag">[10]</span>
                        </div>
                      </div>
                      <div className="col-12 col-xl-6 mxd-grid-padding">
                        <div className="mxd-services-list__title">
                          <h3>Print & Marketing Collateral</h3>
                        </div>
                      </div>
                      <div className="col-12 col-xl-5 mxd-grid-padding">
                        <div className="mxd-services-list__descr">
                          <p className="t-medium">
                            Brochures, business cards, catalogues, flyers, and offline brand materials designed to keep your communication sharp and consistent.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mxd-services-list__divider bottom" />
                </Link>
                <Link
                  className="mxd-services-list__item active-cursor-image-tr"
                  data-cursor-image="https://res.cloudinary.com/daoju0r3c/image/upload/v1782728250/image_43_bwphc3.png"
                  href={`/services`}
                >
                  <div className="mxd-services-list__divider top" />
                  <div className="container-fluid px-0 mxd-services-list__inner">
                    <div className="row gx-0">
                      <div className="col-12 col-xl-1 mxd-grid-padding">
                        <div className="mxd-services-list__number">
                          <span className="meta-tag">[11]</span>
                        </div>
                      </div>
                      <div className="col-12 col-xl-6 mxd-grid-padding">
                        <div className="mxd-services-list__title">
                          <h3>Marketing Strategy & Consulting</h3>
                        </div>
                      </div>
                      <div className="col-12 col-xl-5 mxd-grid-padding">
                        <div className="mxd-services-list__descr">
                          <p className="t-medium">
                            Clear marketing direction based on your goals, audience, and brand needs — helping every campaign move with purpose.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mxd-services-list__divider bottom" />
                </Link>
              </div>
            </div>
            {/* Block - Services List End */}
          </div>
          <PinnedSection.Trigger />
        </PinnedSection.Inner>
      </PinnedSection>
    </>
  );
}
