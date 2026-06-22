import Link from "next/link";
import CommonLoadAnimation, {
  CommonLoadFade,
} from "@/components/animations/CommonLoadAnimation";
import {
  CommonScrollAnimated,
  CommonCardBatchAnimated,
} from "@/components/animations/CommonScrollAnimated";
import TextScramble from "@/components/animations/TextScramble";
export default function PricingCards() {
  return (
    <CommonLoadAnimation>
      <>
        <div className="mxd-section">
          <div className="mxd-container grid-l-container">
            {/* Block - Pricing Cards Start */}
            <div className="mxd-block">
              <CommonLoadFade index={0}>
                <div className="mxd-pricing-table loading-fade">
                  <div className="container-fluid p-0">
                    <div className="row g-0">
                      <CommonCardBatchAnimated
                        className="col-12 col-xl-4 mxd-pricing-table__item mxd-grid-item animate-card-3"
                        as="div"
                        columns={3}
                      >
                        <div className="mxd-pricing-table__inner">
                          {/* background image */}
                          <div className="mxd-pricing-table__bg">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={200}
                              height={200}
                              version="1.1"
                              viewBox="0 0 200 200"
                            >
                              <g filter="url(#blur)">
                                <path
                                  fill="var(--highlight)"
                                  d="M200,200c0,55.2-44.8,100-100,100S0,255.2,0,200s44.8-100,100-100,100,44.8,100,100Z"
                                />
                              </g>
                              <defs>
                                <filter
                                  id="blur"
                                  x={0}
                                  y={0}
                                  width={3000}
                                  height={5000}
                                  filterUnits="userSpaceOnUse"
                                  colorInterpolationFilters="sRGB"
                                >
                                  <feFlood
                                    floodOpacity={0}
                                    result="BackgroundImageFix"
                                  />
                                  <feBlend
                                    mode="normal"
                                    in="SourceGraphic"
                                    in2="BackgroundImageFix"
                                    result="shape"
                                  />
                                  <feGaussianBlur
                                    stdDeviation={60}
                                    result="effect1_foregroundBlur"
                                  />
                                </filter>
                              </defs>
                            </svg>
                          </div>
                          <div className="mxd-pricing-table__tag">
                            <span className="tag tag-m tag-bg accent">
                              Special Offer
                            </span>
                          </div>
                          <div className="mxd-pricing-table__data">
                            <div className="pricing-data__header">
                              <CommonScrollAnimated
                                className="pricing-header__title anim-uni-in-up"
                                as="p"
                                animation="inUp"
                              >
                                Custom <span>Website</span>
                              </CommonScrollAnimated>
                              <CommonScrollAnimated
                                className="pricing-header__descr t-bold anim-uni-in-up"
                                as="p"
                                animation="inUp"
                              >
                                A clean, responsive website designed to make your brand look professional,
                                <span>
                                  easy to understand, and ready for digital growth.
                                </span>
                              </CommonScrollAnimated>
                            </div>
                            <div className="pricing-data__info">
                              
                              <CommonScrollAnimated
                                className="pricing-data__btnholder anim-uni-in-up"
                                as="div"
                                animation="inUp"
                              >
                                <Link
                                  className="btn btn-default-icon btn-default-outline btn-default-fullwidth slide-right"
                                  href={`/contact`}
                                >
                                  <TextScramble className="btn-caption mxd-scramble">
                                    Start Project
                                  </TextScramble>
                                  {/* <i class="btn-icon ph-bold ph-arrow-right"></i> */}
                                  <i className="btn-icon">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      version="1.1"
                                      viewBox="0 0 18 18"
                                    >
                                      <path d="M10.8,0v3.6h-3.6V0h3.6ZM14.4,10.8h3.6v-3.6h-3.6v-3.6h-3.6v3.6H0v3.6h10.8v3.6h3.6v-3.6ZM10.8,14.4h-3.6v3.6h3.6v-3.6Z" />
                                    </svg>
                                  </i>
                                </Link>
                              </CommonScrollAnimated>
                            </div>
                          </div>
                          <div className="mxd-pricing-table__plan">
                            <CommonScrollAnimated
                              className="pricing-plan__caption t-bold anim-uni-in-up"
                              as="p"
                              animation="inUp"
                            >
                              What is included:
                            </CommonScrollAnimated>
                            <div className="pricing-plan__list">
                              <ul className="mxd-check-list">
                                <CommonScrollAnimated
                                  className="anim-uni-in-up"
                                  as="li"
                                  animation="inUp"
                                >
                                  {/* <i class="ph ph-check"></i> */}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={18}
                                    height={18}
                                    version="1.1"
                                    viewBox="0 0 18 18"
                                  >
                                    <path d="M18,6.8h-4.5v4.5h-4.5v4.5h-4.5v-4.5h4.5v-4.5h4.5V2.3h4.5v4.5ZM0,6.7v4.5h4.5v-4.5H0Z" />
                                  </svg>
                                  <span>Custom design and development</span>
                                </CommonScrollAnimated>
                                <CommonScrollAnimated
                                  className="anim-uni-in-up"
                                  as="li"
                                  animation="inUp"
                                >
                                  {/* <i class="ph ph-check"></i> */}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={18}
                                    height={18}
                                    version="1.1"
                                    viewBox="0 0 18 18"
                                  >
                                    <path d="M18,6.8h-4.5v4.5h-4.5v4.5h-4.5v-4.5h4.5v-4.5h4.5V2.3h4.5v4.5ZM0,6.7v4.5h4.5v-4.5H0Z" />
                                  </svg>
                                  <span>Responsive layout</span>
                                </CommonScrollAnimated>
                                <CommonScrollAnimated
                                  className="anim-uni-in-up"
                                  as="li"
                                  animation="inUp"
                                >
                                  {/* <i class="ph ph-check"></i> */}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={18}
                                    height={18}
                                    version="1.1"
                                    viewBox="0 0 18 18"
                                  >
                                    <path d="M18,6.8h-4.5v4.5h-4.5v4.5h-4.5v-4.5h4.5v-4.5h4.5V2.3h4.5v4.5ZM0,6.7v4.5h4.5v-4.5H0Z" />
                                  </svg>
                                  <span>Website development</span>
                                </CommonScrollAnimated>
                                <CommonScrollAnimated
                                  className="anim-uni-in-up"
                                  as="li"
                                  animation="inUp"
                                >
                                  {/* <i class="ph ph-check"></i> */}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={18}
                                    height={18}
                                    version="1.1"
                                    viewBox="0 0 18 18"
                                  >
                                    <path d="M18,6.8h-4.5v4.5h-4.5v4.5h-4.5v-4.5h4.5v-4.5h4.5V2.3h4.5v4.5ZM0,6.7v4.5h4.5v-4.5H0Z" />
                                  </svg>
                                  <span>CMS integration</span>
                                </CommonScrollAnimated>
                                <CommonScrollAnimated
                                  className="anim-uni-in-up"
                                  as="li"
                                  animation="inUp"
                                >
                                  {/* <i class="ph ph-check"></i> */}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={18}
                                    height={18}
                                    version="1.1"
                                    viewBox="0 0 18 18"
                                  >
                                    <path d="M18,6.8h-4.5v4.5h-4.5v4.5h-4.5v-4.5h4.5v-4.5h4.5V2.3h4.5v4.5ZM0,6.7v4.5h4.5v-4.5H0Z" />
                                  </svg>
                                  <span>SEO setup</span>
                                </CommonScrollAnimated>
                              </ul>
                            </div>
                          </div>
                          <CommonScrollAnimated
                            className="mxd-pricing-table__link anim-uni-in-up"
                            as="div"
                            animation="inUp"
                          >
                            <Link href={`/contact`}>
                              Need more info? Let us talk.
                            </Link>
                          </CommonScrollAnimated>
                        </div>
                      </CommonCardBatchAnimated>
                      <CommonCardBatchAnimated
                        className="col-12 col-xl-4 mxd-pricing-table__item mxd-grid-item animate-card-3"
                        as="div"
                        columns={3}
                      >
                        <div className="mxd-pricing-table__inner">
                          {/* background image */}
                          <div className="mxd-pricing-table__bg">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={200}
                              height={200}
                              version="1.1"
                              viewBox="0 0 200 200"
                            >
                              <g filter="url(#blur-2)">
                                <path
                                  fill="var(--highlight)"
                                  d="M200,200c0,55.2-44.8,100-100,100S0,255.2,0,200s44.8-100,100-100,100,44.8,100,100Z"
                                />
                              </g>
                              <defs>
                                <filter
                                  id="blur-2"
                                  x={0}
                                  y={0}
                                  width={3000}
                                  height={5000}
                                  filterUnits="userSpaceOnUse"
                                  colorInterpolationFilters="sRGB"
                                >
                                  <feFlood
                                    floodOpacity={0}
                                    result="BackgroundImageFix"
                                  />
                                  <feBlend
                                    mode="normal"
                                    in="SourceGraphic"
                                    in2="BackgroundImageFix"
                                    result="shape"
                                  />
                                  <feGaussianBlur
                                    stdDeviation={60}
                                    result="effect1_foregroundBlur"
                                  />
                                </filter>
                              </defs>
                            </svg>
                          </div>
                          <div className="mxd-pricing-table__tag">
                            <span className="tag tag-m tag-bg muted">
                              Best choice
                            </span>
                          </div>
                          <div className="mxd-pricing-table__data">
                            <div className="pricing-data__header">
                              <CommonScrollAnimated
                                className="pricing-header__title anim-uni-in-up"
                                as="p"
                                animation="inUp"
                              >
                                Brand <span>Support</span>
                              </CommonScrollAnimated>
                              <CommonScrollAnimated
                                className="pricing-header__descr t-bold anim-uni-in-up"
                                as="p"
                                animation="inUp"
                              >
                                Ongoing creative and digital support to keep your brand active,{" "}
                                <span>
                                  consistent, and professionally presented across platforms.
                                </span>
                              </CommonScrollAnimated>
                            </div>
                            <div className="pricing-data__info">
                              
                              <CommonScrollAnimated
                                className="pricing-data__btnholder anim-uni-in-up"
                                as="div"
                                animation="inUp"
                              >
                                <Link
                                  className="btn btn-default-icon btn-default-outline btn-default-fullwidth slide-right"
                                  href={`/contact`}
                                >
                                  <TextScramble className="btn-caption mxd-scramble">
                                    Start Project
                                  </TextScramble>
                                  {/* <i class="btn-icon ph-bold ph-arrow-right"></i> */}
                                  <i className="btn-icon">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      version="1.1"
                                      viewBox="0 0 18 18"
                                    >
                                      <path d="M10.8,0v3.6h-3.6V0h3.6ZM14.4,10.8h3.6v-3.6h-3.6v-3.6h-3.6v3.6H0v3.6h10.8v3.6h3.6v-3.6ZM10.8,14.4h-3.6v3.6h3.6v-3.6Z" />
                                    </svg>
                                  </i>
                                </Link>
                              </CommonScrollAnimated>
                            </div>
                          </div>
                          <div className="mxd-pricing-table__plan">
                            <CommonScrollAnimated
                              className="pricing-plan__caption t-bold anim-uni-in-up"
                              as="p"
                              animation="inUp"
                            >
                              What is included:
                            </CommonScrollAnimated>
                            <div className="pricing-plan__list">
                              <ul className="mxd-check-list">
                                <CommonScrollAnimated
                                  className="anim-uni-in-up"
                                  as="li"
                                  animation="inUp"
                                >
                                  {/* <i class="ph ph-check"></i> */}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={18}
                                    height={18}
                                    version="1.1"
                                    viewBox="0 0 18 18"
                                  >
                                    <path d="M18,6.8h-4.5v4.5h-4.5v4.5h-4.5v-4.5h4.5v-4.5h4.5V2.3h4.5v4.5ZM0,6.7v4.5h4.5v-4.5H0Z" />
                                  </svg>
                                  <span>Social media management</span>
                                </CommonScrollAnimated>
                                <CommonScrollAnimated
                                  className="anim-uni-in-up"
                                  as="li"
                                  animation="inUp"
                                >
                                  {/* <i class="ph ph-check"></i> */}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={18}
                                    height={18}
                                    version="1.1"
                                    viewBox="0 0 18 18"
                                  >
                                    <path d="M18,6.8h-4.5v4.5h-4.5v4.5h-4.5v-4.5h4.5v-4.5h4.5V2.3h4.5v4.5ZM0,6.7v4.5h4.5v-4.5H0Z" />
                                  </svg>
                                  <span>Content strategy</span>
                                </CommonScrollAnimated>
                                <CommonScrollAnimated
                                  className="anim-uni-in-up"
                                  as="li"
                                  animation="inUp"
                                >
                                  {/* <i class="ph ph-check"></i> */}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={18}
                                    height={18}
                                    version="1.1"
                                    viewBox="0 0 18 18"
                                  >
                                    <path d="M18,6.8h-4.5v4.5h-4.5v4.5h-4.5v-4.5h4.5v-4.5h4.5V2.3h4.5v4.5ZM0,6.7v4.5h4.5v-4.5H0Z" />
                                  </svg>
                                  <span>Video editing support</span>
                                </CommonScrollAnimated>
                                <CommonScrollAnimated
                                  className="anim-uni-in-up"
                                  as="li"
                                  animation="inUp"
                                >
                                  {/* <i class="ph ph-check"></i> */}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={18}
                                    height={18}
                                    version="1.1"
                                    viewBox="0 0 18 18"
                                  >
                                    <path d="M18,6.8h-4.5v4.5h-4.5v4.5h-4.5v-4.5h4.5v-4.5h4.5V2.3h4.5v4.5ZM0,6.7v4.5h4.5v-4.5H0Z" />
                                  </svg>
                                  <span>Creative design support</span>
                                </CommonScrollAnimated>
                                <CommonScrollAnimated
                                  className="anim-uni-in-up"
                                  as="li"
                                  animation="inUp"
                                >
                                  {/* <i class="ph ph-check"></i> */}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={18}
                                    height={18}
                                    version="1.1"
                                    viewBox="0 0 18 18"
                                  >
                                    <path d="M18,6.8h-4.5v4.5h-4.5v4.5h-4.5v-4.5h4.5v-4.5h4.5V2.3h4.5v4.5ZM0,6.7v4.5h4.5v-4.5H0Z" />
                                  </svg>
                                  <span>Photography & videography direction</span>
                                </CommonScrollAnimated>
                              </ul>
                            </div>
                          </div>
                          <CommonScrollAnimated
                            className="mxd-pricing-table__link anim-uni-in-up"
                            as="div"
                            animation="inUp"
                          >
                            <Link href={`/contact`}>
                              Need more info? Let us talk.
                            </Link>
                          </CommonScrollAnimated>
                        </div>
                      </CommonCardBatchAnimated>
                      <CommonCardBatchAnimated
                        className="col-12 col-xl-4 mxd-pricing-table__item mxd-grid-item animate-card-3"
                        as="div"
                        columns={3}
                      >
                        <div className="mxd-pricing-table__inner">
                          {/* background image */}
                          <div className="mxd-pricing-table__bg">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={200}
                              height={200}
                              version="1.1"
                              viewBox="0 0 200 200"
                            >
                              <g filter="url(#blur-3)">
                                <path
                                  fill="var(--highlight)"
                                  d="M200,200c0,55.2-44.8,100-100,100S0,255.2,0,200s44.8-100,100-100,100,44.8,100,100Z"
                                />
                              </g>
                              <defs>
                                <filter
                                  id="blur-3"
                                  x={0}
                                  y={0}
                                  width={3000}
                                  height={5000}
                                  filterUnits="userSpaceOnUse"
                                  colorInterpolationFilters="sRGB"
                                >
                                  <feFlood
                                    floodOpacity={0}
                                    result="BackgroundImageFix"
                                  />
                                  <feBlend
                                    mode="normal"
                                    in="SourceGraphic"
                                    in2="BackgroundImageFix"
                                    result="shape"
                                  />
                                  <feGaussianBlur
                                    stdDeviation={60}
                                    result="effect1_foregroundBlur"
                                  />
                                </filter>
                              </defs>
                            </svg>
                          </div>
                          <div className="mxd-pricing-table__data">
                            <div className="pricing-data__header">
                              <CommonScrollAnimated
                                className="pricing-header__title anim-uni-in-up"
                                as="p"
                                animation="inUp"
                              >
                                Custom <span>Package</span>
                              </CommonScrollAnimated>
                              <CommonScrollAnimated
                                className="pricing-header__descr t-bold anim-uni-in-up"
                                as="p"
                                animation="inUp"
                              >
                                A flexible plan built around your brand’s exact needs{" "}
                                <span>
                                  whether it is social media, website, packaging, content, or complete brand presence.
                                </span>
                              </CommonScrollAnimated>
                            </div>
                            <div className="pricing-data__info">
                              <CommonScrollAnimated
                                className="pricing-data__btnholder anim-uni-in-up"
                                as="div"
                                animation="inUp"
                              >
                                <Link
                                  className="btn btn-default-icon btn-default-outline btn-default-fullwidth slide-right"
                                  href={`/contact`}
                                >
                                  <TextScramble className="btn-caption mxd-scramble">
                                    Start Project
                                  </TextScramble>
                                  {/* <i class="btn-icon ph-bold ph-arrow-right"></i> */}
                                  <i className="btn-icon">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      version="1.1"
                                      viewBox="0 0 18 18"
                                    >
                                      <path d="M10.8,0v3.6h-3.6V0h3.6ZM14.4,10.8h3.6v-3.6h-3.6v-3.6h-3.6v3.6H0v3.6h10.8v3.6h3.6v-3.6ZM10.8,14.4h-3.6v3.6h3.6v-3.6Z" />
                                    </svg>
                                  </i>
                                </Link>
                              </CommonScrollAnimated>
                            </div>
                          </div>
                          <div className="mxd-pricing-table__plan">
                            <CommonScrollAnimated
                              className="pricing-plan__caption t-bold anim-uni-in-up"
                              as="p"
                              animation="inUp"
                            >
                              What is included:
                            </CommonScrollAnimated>
                            <div className="pricing-plan__list">
                              <ul className="mxd-check-list">
                                <CommonScrollAnimated
                                  className="anim-uni-in-up"
                                  as="li"
                                  animation="inUp"
                                >
                                  {/* <i class="ph ph-check"></i> */}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={18}
                                    height={18}
                                    version="1.1"
                                    viewBox="0 0 18 18"
                                  >
                                    <path d="M18,6.8h-4.5v4.5h-4.5v4.5h-4.5v-4.5h4.5v-4.5h4.5V2.3h4.5v4.5ZM0,6.7v4.5h4.5v-4.5H0Z" />
                                  </svg>
                                  <span>Choose the services you need</span>
                                </CommonScrollAnimated>
                                <CommonScrollAnimated
                                  className="anim-uni-in-up"
                                  as="li"
                                  animation="inUp"
                                >
                                  {/* <i class="ph ph-check"></i> */}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={18}
                                    height={18}
                                    version="1.1"
                                    viewBox="0 0 18 18"
                                  >
                                    <path d="M18,6.8h-4.5v4.5h-4.5v4.5h-4.5v-4.5h4.5v-4.5h4.5V2.3h4.5v4.5ZM0,6.7v4.5h4.5v-4.5H0Z" />
                                  </svg>
                                  <span>Social media support</span>
                                </CommonScrollAnimated>
                                <CommonScrollAnimated
                                  className="anim-uni-in-up"
                                  as="li"
                                  animation="inUp"
                                >
                                  {/* <i class="ph ph-check"></i> */}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={18}
                                    height={18}
                                    version="1.1"
                                    viewBox="0 0 18 18"
                                  >
                                    <path d="M18,6.8h-4.5v4.5h-4.5v4.5h-4.5v-4.5h4.5v-4.5h4.5V2.3h4.5v4.5ZM0,6.7v4.5h4.5v-4.5H0Z" />
                                  </svg>
                                  <span>Website design & updates</span>
                                </CommonScrollAnimated>
                                <CommonScrollAnimated
                                  className="anim-uni-in-up"
                                  as="li"
                                  animation="inUp"
                                >
                                  {/* <i class="ph ph-check"></i> */}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={18}
                                    height={18}
                                    version="1.1"
                                    viewBox="0 0 18 18"
                                  >
                                    <path d="M18,6.8h-4.5v4.5h-4.5v4.5h-4.5v-4.5h4.5v-4.5h4.5V2.3h4.5v4.5ZM0,6.7v4.5h4.5v-4.5H0Z" />
                                  </svg>
                                  <span>Packaging design</span>
                                </CommonScrollAnimated>
                                <CommonScrollAnimated
                                  className="anim-uni-in-up"
                                  as="li"
                                  animation="inUp"
                                >
                                  {/* <i class="ph ph-check"></i> */}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={18}
                                    height={18}
                                    version="1.1"
                                    viewBox="0 0 18 18"
                                  >
                                    <path d="M18,6.8h-4.5v4.5h-4.5v4.5h-4.5v-4.5h4.5v-4.5h4.5V2.3h4.5v4.5ZM0,6.7v4.5h4.5v-4.5H0Z" />
                                  </svg>
                                  <span>Visual content creation</span>
                                </CommonScrollAnimated>
                              </ul>
                            </div>
                          </div>
                          <CommonScrollAnimated
                            className="mxd-pricing-table__link anim-uni-in-up"
                            as="div"
                            animation="inUp"
                          >
                            <Link href={`/contact`}>
                              Need more info? Let us talk.
                            </Link>
                          </CommonScrollAnimated>
                        </div>
                      </CommonCardBatchAnimated>
                    </div>
                  </div>
                </div>
              </CommonLoadFade>
            </div>
            {/* Block - Pricing Cards End */}
          </div>
        </div>
      </>
    </CommonLoadAnimation>
  );
}
