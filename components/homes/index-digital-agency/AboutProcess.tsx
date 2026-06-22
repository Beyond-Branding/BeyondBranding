import BlurSection from "@/components/animations/BlurSection";
import CommonAnimatedText from "@/components/animations/CommonAnimatedText";
import Link from "next/link";
import {
  CommonScrollAnimated,
  CommonCardBatchAnimated,
} from "@/components/animations/CommonScrollAnimated";
export default function AboutProcess() {
  return (
    <>
      <BlurSection
        id="about"
        className="mxd-section bg-color-accent padding-top-manifest-m padding-bottom-default padding-bottom-tag-m-desktop"
      >
        <div className="mxd-container grid-l-container">
          {/* Block - Manifest Large Start */}
          <div className="mxd-block">
            <div className="mxd-section-manifest pre-points">
              <div className="container-fluid p-0">
                <div className="row g-0">
                  <div className="col-12 mxd-grid-item">
                    <div className="mxd-section-manifest__wrap wrap-text-m">
                      <div className="mxd-section-manifest__text manifest-text-m">
                        <Link data-cursor-text="About us" href={`/about-me`}>
                          <CommonAnimatedText
                            as="span"
                            className="manifest manifest-m manifest-accent mxd-split-lines active-cursor-permanent"
                            animation="splitLines"
                          >
                            A creative studio built for brands that need more than just good-looking content.
                            <span>
                              From social media and packaging to websites and digital design, every detail is created to help your business look clearer, feel more professional, and connect better with the right audience.
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
          {/* Block - Process Points Start */}
          <div className="mxd-block">
            <div className="mxd-process-points">
              <div className="container-fluid p-0">
                <div className="row g-0">
                  {/* process item */}
                  <CommonCardBatchAnimated
                    className="col-12 col-xl-4 mxd-process-points__item mxd-grid-item animate-card-3"
                    as="div"
                    columns={3}
                  >
                    <div className="mxd-process-points__divider top accent" />
                    <div className="mxd-process-points__title">
                      <div className="mxd-process-points__icon accent">
                        <i className="ph ph-crosshair" />
                      </div>
                      <p className="accent">Strategy</p>
                    </div>
                    <div className="mxd-process-points__descr">
                      <p className="t-medium t-accent">
                        A clear plan before the creative begins. Understanding your business, audience, goals, and direction to create content and designs that actually make sense.
                      </p>
                    </div>
                    <div className="mxd-process-points__time">
                      <span className="tag tag-m tag-permanent">
                        1-2 WEEKS DISCOVERY
                      </span>
                    </div>
                  </CommonCardBatchAnimated>
                  {/* process item */}
                  <CommonCardBatchAnimated
                    className="col-12 col-xl-4 mxd-process-points__item mxd-grid-item animate-card-3"
                    as="div"
                    columns={3}
                  >
                    <CommonScrollAnimated
                      className="mxd-process-points__divider top accent anim-uni-clip-in"
                      as="div"
                      animation="clipIn"
                    />
                    <div className="mxd-process-points__title">
                      <div className="mxd-process-points__icon accent">
                        <i className="ph ph-bezier-curve" />
                      </div>
                      <p className="accent">Design</p>
                    </div>
                    <div className="mxd-process-points__descr">
                      <p className="t-medium t-accent">
                        Visuals that make your brand look sharp.Social media creatives, packaging, brand assets, and campaign designs created with a clean and consistent visual direction.
                      </p>
                    </div>
                    <div className="mxd-process-points__time">
                      <span className="tag tag-m tag-permanent">
                        2-3 WEEKS CREATION
                      </span>
                    </div>
                  </CommonCardBatchAnimated>
                  {/* process item */}
                  <CommonCardBatchAnimated
                    className="col-12 col-xl-4 mxd-process-points__item mxd-grid-item animate-card-3"
                    as="div"
                    columns={3}
                  >
                    <CommonScrollAnimated
                      className="mxd-process-points__divider top accent anim-uni-clip-in"
                      as="div"
                      animation="clipIn"
                    />
                    <div className="mxd-process-points__title">
                      <div className="mxd-process-points__icon accent">
                        <i className="ph ph-codesandbox-logo" />
                      </div>
                      <p className="accent">Development</p>
                    </div>
                    <div className="mxd-process-points__descr">
                      <p className="t-medium t-accent">
                        Your brand, built for every screen.Websites, content, and digital assets designed to make your business easier to understand, explore, and remember.
                      </p>
                    </div>
                    <div className="mxd-process-points__time">
                      <span className="tag tag-m tag-permanent">
                        3-4 WEEKS EXECUTION
                      </span>
                    </div>
                    <CommonScrollAnimated
                      className="mxd-process-points__divider bottom accent anim-uni-clip-in"
                      as="div"
                      animation="clipIn"
                    />
                  </CommonCardBatchAnimated>
                </div>
              </div>
            </div>
          </div>
          {/* Block - Process Points End */}
        </div>
      </BlurSection>
    </>
  );
}
