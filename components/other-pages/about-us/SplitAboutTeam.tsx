import UkiyoParallax from "@/components/animations/UkiyoParallax";
import BlurSection from "@/components/animations/BlurSection";
import CommonAnimatedText from "@/components/animations/CommonAnimatedText";
import TextScramble from "@/components/animations/TextScramble";
import Link from "next/link";
import Image from "next/image";
import { CommonScrollAnimated } from "@/components/animations/CommonScrollAnimated";
export default function SplitAboutTeam() {
  return (
    <>
      <BlurSection
        id="about-team"
        className="mxd-section bg-color-base padding-top-manifest-m"
      >
        <div className="mxd-container grid-l-container">
          {/* Block - Manifest Large Start */}
          <div className="mxd-block">
            <div className="mxd-section-manifest pre-grid-xl">
              <div className="container-fluid p-0">
                <div className="row g-0">
                  <div className="col-12 mxd-grid-item">
                    <div className="mxd-section-manifest__wrap wrap-text-m">
                      <div className="mxd-section-manifest__text manifest-text-m">
                        <Link data-cursor-text="About us" href={`/about-us`}>
                          <CommonAnimatedText
                            as="span"
                            className="manifest manifest-m mxd-split-lines active-cursor-permanent"
                            animation="splitLines"
                          >
                            Behind every project is a team that thinks beyond visuals, turning ideas into content, design, and digital experiences that help brands grow with clarity.
                            <span>
                              Together, we craft innovative solutions that
                              inspire and deliver results.
                            </span>
                          </CommonAnimatedText>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Block - Manifest Large End */}
          {/* Block - About Team Start */}
          <div className="mxd-block">
            <div className="mxd-about-team">
              <div className="container-fluid p-0">
                <div className="row g-0">
                  {/* column #01 */}
                  <div className="col-12 col-xl-6 mxd-grid-item">
                    <div className="mxd-about-team__img">
                      <UkiyoParallax
                        className="parallax-img-small"
                        scale={1.2}
                        speed={1.5}
                        externalRAF={false}
                      >
                        <Image
                          alt="Azurio Template Sample Image"
                          src="https://res.cloudinary.com/daoju0r3c/image/upload/v1782823435/team01_s3adx8.webp"
                          width={1000}
                          height={1500}
                        />
                      </UkiyoParallax>
                    </div>
                  </div>
                  {/* column #02 */}
                  <div className="col-12 col-xl-6 mxd-grid-item">
                    <div className="mxd-about-team__data">
                      <div className="mxd-about-team__img">
                        <UkiyoParallax
                          className="parallax-img-small"
                          scale={1.2}
                          speed={1.5}
                          externalRAF={false}
                        >
                          <Image
                            alt="Azurio Template Sample Image"
                            src="https://res.cloudinary.com/daoju0r3c/image/upload/v1782823435/team02_fwwjah.webp"
                            width={1500}
                            height={1000}
                          />
                        </UkiyoParallax>
                      </div>
                      <div className="mxd-about-team__info fullheight-xl">
                        <div className="mxd-split-descr__wrap">
                          <div className="mxd-split-descr__content margin-bottom-l">
                            <CommonAnimatedText
                              as="p"
                              className="t-bold t-large mxd-split-lines"
                              animation="splitLines"
                            >
                              We believe good creative work should feel effortless, but never random. Every idea is shaped with a clear reason, every visual has a purpose, and every detail is built to make the brand feel stronger, sharper, and easier to remember.
                              <span>
                                At Beyond Branding, creativity meets clarity so the final work does more than look good, it makes people notice, understand, and connect.
                              </span>
                            </CommonAnimatedText>
                          </div>
                          <div className="mxd-split-descr__tags">
                            <div className="container-fluid p-0">
                              <div className="row g-0">
                                <div className="col-6 col-md-6 col-xl-4">
                                  <CommonScrollAnimated
                                    className="tag meta-tag tag-m anim-uni-in-up"
                                    as="span"
                                    animation="inUp"
                                  >
                                    <TextScramble className="mxd-scramble">
                                      STRATEGY
                                    </TextScramble>
                                  </CommonScrollAnimated>
                                  <CommonScrollAnimated
                                    className="tag meta-tag tag-m anim-uni-in-up"
                                    as="span"
                                    animation="inUp"
                                  >
                                    <TextScramble className="mxd-scramble">
                                      Creativity
                                    </TextScramble>
                                  </CommonScrollAnimated>
                                  <CommonScrollAnimated
                                    className="tag meta-tag tag-m anim-uni-in-up"
                                    as="span"
                                    animation="inUp"
                                  >
                                    <TextScramble className="mxd-scramble">
                                      CLARITY
                                    </TextScramble>
                                  </CommonScrollAnimated>
                                </div>
                                <div className="col-6 col-md-6 col-xl-4">
                                  <CommonScrollAnimated
                                    className="tag meta-tag tag-m anim-uni-in-up"
                                    as="span"
                                    animation="inUp"
                                  >
                                    <TextScramble className="mxd-scramble">
                                      DETAIL
                                    </TextScramble>
                                  </CommonScrollAnimated>
                                  <CommonScrollAnimated
                                    className="tag meta-tag tag-m anim-uni-in-up"
                                    as="span"
                                    animation="inUp"
                                  >
                                    <TextScramble className="mxd-scramble">
                                      CONSISTENCY
                                    </TextScramble>
                                  </CommonScrollAnimated>
                                  <CommonScrollAnimated
                                    className="tag meta-tag tag-m anim-uni-in-up"
                                    as="span"
                                    animation="inUp"
                                  >
                                    <TextScramble className="mxd-scramble">
                                      Growth
                                    </TextScramble>
                                  </CommonScrollAnimated>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Block - About Team End */}
        </div>
      </BlurSection>
    </>
  );
}
