"use client";

import BlurSection from "@/components/animations/BlurSection";
import CommonAnimatedText from "@/components/animations/CommonAnimatedText";
import Image from "next/image";
import TextScramble from "@/components/animations/TextScramble";
export default function TeamList() {
  return (
    <>
      <BlurSection className="mxd-section bg-color-base padding-top-title padding-bottom-tags-mobile">
        <div className="mxd-container grid-l-container">
          {/* Block - Section Title v03 Start */}
          <div className="mxd-block">
            <div className="mxd-section-title pre-grid">
              <div className="container-fluid p-0">
                <div className="row g-0">
                  <div className="col-12 col-xl-9 mxd-grid-item">
                    <div className="mxd-section-title__title pre-caption">
                      <CommonAnimatedText
                        as="h2"
                        className="reveal-type"
                        animation="revealType"
                      >
                        Dreamers and
                        <br />
                        doers
                      </CommonAnimatedText>
                    </div>
                  </div>
                  <div className="col-12 col-xl-3 mxd-grid-item">
                    <div className="mxd-section-title__data top-caption">
                      <div className="mxd-section-title__caption">
                        <CommonAnimatedText
                          as="p"
                          className="t-bold t-large mxd-split-lines"
                          animation="splitLines"
                        >
                          A team of creative thinkers, planners, designers, and developers working together to{" "}
                          <span>shape ideas into brands, content, and digital experiences that feel clear, fresh, and purposeful.</span>
                        </CommonAnimatedText>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Block - Section Title v03 End */}
          {/* Block - Team List Start */}
          <div className="mxd-block">
            <div className="mxd-team-list">
              {/* single item */}
              <div className="mxd-team-list__item">
                <div className="container-fluid p-0 mxd-team-list__inner">
                  <div className="row g-0 d-flex flex-column flex-md-row">
                    <div className="col-12 col-md-3 mxd-grid-item order-2 order-md-1">
                      <div className="mxd-team-list__position">
                        <p>Founder of Beyond Brandingg</p>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 mxd-grid-item order-1 order-md-2">
                      <div className="mxd-team-list__data">
                        <div className="mxd-team-list__photo">
                          <Image
                            alt="Azurio Template Sample Image"
                            src="/img/avatars/300x300_ava-04.webp"
                            width={300}
                            height={300}
                          />
                        </div>
                        <div className="mxd-team-list__name">
                          <p>Margi Shah</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-3 mxd-grid-item order-3 order-md-3">
                      <div className="mxd-team-list__socials">
                        <ul>
                          <li>
                            <a href="https://www.linkedin.com/" target="_blank">
                              <TextScramble className="mxd-scramble">
                                Linkedin
                              </TextScramble>
                            </a>
                          </li>
                          <li>
                            <a href="https://www.facebook.com/" target="_blank">
                              <TextScramble className="mxd-scramble">
                                Facebook
                              </TextScramble>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* single item */}
              <div className="mxd-team-list__item">
                <div className="container-fluid p-0 mxd-team-list__inner">
                  <div className="row g-0 d-flex flex-column flex-md-row">
                    <div className="col-12 col-md-3 mxd-grid-item order-2 order-md-1">
                      <div className="mxd-team-list__position">
                        <p>Co-founder of Beyond Brandingg</p>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 mxd-grid-item order-1 order-md-2">
                      <div className="mxd-team-list__data">
                        <div className="mxd-team-list__photo">
                          <Image
                            alt="Azurio Template Sample Image"
                            src="/img/avatars/300x300_ava-06.webp"
                            width={300}
                            height={300}
                          />
                        </div>
                        <div className="mxd-team-list__name">
                          <p>Roshni Hathiyani</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-3 mxd-grid-item order-3 order-md-3">
                      <div className="mxd-team-list__socials">
                        <ul>
                          <li>
                            <a
                              href="https://www.instagram.com/"
                              target="_blank"
                            >
                              <TextScramble className="mxd-scramble">
                                Instagram
                              </TextScramble>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* single item */}
              <div className="mxd-team-list__item">
                <div className="container-fluid p-0 mxd-team-list__inner">
                  <div className="row g-0 d-flex flex-column flex-md-row">
                    <div className="col-12 col-md-3 mxd-grid-item order-2 order-md-1">
                      <div className="mxd-team-list__position">
                        <p>Intern</p>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 mxd-grid-item order-1 order-md-2">
                      <div className="mxd-team-list__data">
                        <div className="mxd-team-list__photo">
                          <Image
                            alt="Azurio Template Sample Image"
                            src="/img/avatars/300x300_ava-02.webp"
                            width={300}
                            height={300}
                          />
                        </div>
                        <div className="mxd-team-list__name">
                          <p>Nidhi Gupta</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-3 mxd-grid-item order-3 order-md-3">
                      <div className="mxd-team-list__socials">
                        <ul>
                          <li>
                            <a href="https://www.linkedin.com/" target="_blank">
                              <TextScramble className="mxd-scramble">
                                Linkedin
                              </TextScramble>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* single item */}
              <div className="mxd-team-list__item">
                <div className="container-fluid p-0 mxd-team-list__inner">
                  <div className="row g-0 d-flex flex-column flex-md-row">
                    <div className="col-12 col-md-3 mxd-grid-item order-2 order-md-1">
                      <div className="mxd-team-list__position">
                        <p>Social Media Intern</p>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 mxd-grid-item order-1 order-md-2">
                      <div className="mxd-team-list__data">
                        <div className="mxd-team-list__photo">
                          <Image
                            alt="Azurio Template Sample Image"
                            src="/img/avatars/300x300_ava-03.webp"
                            width={300}
                            height={300}
                          />
                        </div>
                        <div className="mxd-team-list__name">
                          <p>Sania Qureshi</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-3 mxd-grid-item order-3 order-md-3">
                      <div className="mxd-team-list__socials">
                        <ul>
                          <li>
                            <a href="https://www.linkedin.com/" target="_blank">
                              <TextScramble className="mxd-scramble">
                                Linkedin
                              </TextScramble>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* single item */}
              <div className="mxd-team-list__item">
                <div className="container-fluid p-0 mxd-team-list__inner">
                  <div className="row g-0 d-flex flex-column flex-md-row">
                    <div className="col-12 col-md-3 mxd-grid-item order-2 order-md-1">
                      <div className="mxd-team-list__position">
                        <p>Social Media Executive</p>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 mxd-grid-item order-1 order-md-2">
                      <div className="mxd-team-list__data">
                        <div className="mxd-team-list__photo">
                          <Image
                            alt="Azurio Template Sample Image"
                            src="/img/avatars/300x300_ava-01.webp"
                            width={300}
                            height={300}
                          />
                        </div>
                        <div className="mxd-team-list__name">
                          <p>Anjali</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-3 mxd-grid-item order-3 order-md-3">
                      <div className="mxd-team-list__socials">
                        <ul>
                          <li>
                            <a href="https://www.linkedin.com/" target="_blank">
                              <TextScramble className="mxd-scramble">
                                Linkedin
                              </TextScramble>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Block - Team List End */}
        </div>
      </BlurSection>
    </>
  );
}
