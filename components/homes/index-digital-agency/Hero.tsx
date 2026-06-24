"use client";
import Link from "next/link";
import Image from "next/image";
import AutoplayLoopVideo from "@/components/media/AutoplayLoopVideo";
import CommonLoadAnimation, {
  CommonLoadFade,
  CommonLoadItem,
} from "@/components/animations/CommonLoadAnimation";
import TextScramble from "@/components/animations/TextScramble";
import SmoothAnchorLink from "@/components/common/SmoothAnchorLink";
import CommonHero3DImages, {
  CommonHero3DCover,
  CommonHero3DImage,
  CommonHero3DImagesTrack,
  CommonHero3DIntroText,
  CommonHero3DOutroText,
} from "@/components/animations/CommonHero3DImages";
export default function Hero() {
  return (
    <CommonLoadAnimation>
      <>
        <div className="mxd-section mxd-hero-section no-padding loading-wrap">
          <CommonHero3DImages className="mxd-hero-02">
            {/* background group */}
            <div className="mxd-hero-02__background">
              <AutoplayLoopVideo
                poster="video/1280x720_hero-02.webp"
                sources={[
                  { src: "video/1280x720_hero-02.mp4", type: "video/mp4" },
                  { src: "video/1280x720_hero-02.webm", type: "video/webm" },
                ]}
              />
              <div className="mxd-hero-02__cover" />
            </div>
            {/* scroll images */}
            <CommonHero3DImagesTrack className="mxd-hero-02__images">
              <CommonHero3DImage
                as={Link}
                index={0}
                className="hero-02__img"
                href={`/project-details`}
              >
                <Image
                  alt="Azurio Template Sample Image"
                  src="https://res.cloudinary.com/daoju0r3c/image/upload/v1782299351/final_4_epwybb.jpg"
                  width={1280}
                  height={800}
                />
              </CommonHero3DImage>
              <CommonHero3DImage index={1} className="hero-02__img">
                <Image
                  alt="Azurio Template Sample Image"
                  src="https://res.cloudinary.com/daoju0r3c/image/upload/v1782299298/FINAL_5_tmzjxs.jpg"
                  width={1280}
                  height={800}
                />
              </CommonHero3DImage>
              <CommonHero3DImage index={2} className="hero-02__img">
                <Image
                  alt="Azurio Template Sample Image"
                  src="https://res.cloudinary.com/daoju0r3c/image/upload/v1782299398/FINAL_7_vk3tto.jpg"
                  width={1280}
                  height={800}
                />
              </CommonHero3DImage>
              <CommonHero3DImage index={3} className="hero-02__img">
                <Image
                  alt="Azurio Template Sample Image"
                  src="https://res.cloudinary.com/daoju0r3c/image/upload/v1782299249/FINAL_v8_mxqqlf.jpg"
                  width={1280}
                  height={800}
                />
              </CommonHero3DImage>
              <CommonHero3DImage index={4} className="hero-02__img">
                <Image
                  alt="Azurio Template Sample Image"
                  src="https://res.cloudinary.com/daoju0r3c/image/upload/v1782306912/15771750ee3e02ecbb7f366a4dc7e02f_wtckkg.jpg"
                  width={1280}
                  height={800}
                />
              </CommonHero3DImage>
              <CommonHero3DImage index={5} className="hero-02__img">
                <Image
                  alt="Azurio Template Sample Image"
                  src="https://res.cloudinary.com/daoju0r3c/image/upload/v1782222256/Vadilal_Quick_Treat_ti5tki.jpg"
                  width={1280}
                  height={800}
                />
              </CommonHero3DImage>
              <CommonHero3DImage index={6} className="hero-02__img">
                <Image
                  alt="Azurio Template Sample Image"
                  src="https://res.cloudinary.com/daoju0r3c/image/upload/v1782222256/Travel_ijb03r.jpg"
                  width={1280}
                  height={800}
                />
              </CommonHero3DImage>
              <CommonHero3DImage index={7} className="hero-02__img">
                <Image
                  alt="Azurio Template Sample Image"
                  src="https://res.cloudinary.com/daoju0r3c/image/upload/v1782222256/Art_of_Making_Tea__A_Vibrant_Street_Scene_Street_Photography_Instagram_ce83ty.jpg"
                  width={1280}
                  height={800}
                />
              </CommonHero3DImage>
              <CommonHero3DImage index={8} className="hero-02__img">
                <Image
                  alt="Azurio Template Sample Image"
                  src="https://res.cloudinary.com/daoju0r3c/image/upload/v1782300895/home7_rdnlbl.jpg"
                  width={1280}
                  height={800}
                />
              </CommonHero3DImage>
              <CommonHero3DImage index={9} className="hero-02__img">
                <Image
                  alt="Azurio Template Sample Image"
                  src="https://res.cloudinary.com/daoju0r3c/image/upload/v1782301570/fec12b204e8734aead51c74543950f66_ve4yua.jpg"
                  width={1280}
                  height={1000}
                />
              </CommonHero3DImage>
              <CommonHero3DImage index={10} className="hero-02__img">
                <Image
                  alt="Azurio Template Sample Image"
                  src="https://res.cloudinary.com/daoju0r3c/image/upload/v1782302203/53a8511697fc59af49da68eb3a07da56_cneg1j.jpg"
                  width={1280}
                  height={800}
                />
              </CommonHero3DImage>
              <CommonHero3DImage index={11} className="hero-02__img">
                <Image
                  alt="Azurio Template Sample Image"
                  src="https://res.cloudinary.com/daoju0r3c/image/upload/v1782301119/download_1_ep7wko.jpg"
                  width={1280}
                  height={800}
                />
              </CommonHero3DImage>
              <CommonHero3DImage index={12} className="hero-02__img">
                <Image
                  alt="Azurio Template Sample Image"
                  src="https://res.cloudinary.com/daoju0r3c/image/upload/v1782302203/b3db83f72ef2432c49f2ddef22c2311d_ghrjlx.jpg"
                  width={1280}
                  height={800}
                />
              </CommonHero3DImage>
              <CommonHero3DImage index={13} className="hero-02__img">
                <Image
                  alt="Azurio Template Sample Image"
                  src="https://res.cloudinary.com/daoju0r3c/image/upload/v1782302203/7853ad3494426f63493fb6be256775f1_hfpmz1.jpg"
                  width={1280}
                  height={800}
                />
              </CommonHero3DImage>
              <CommonHero3DImage index={14} className="hero-02__img">
                <Image
                  alt="Azurio Template Sample Image"
                  src="https://res.cloudinary.com/daoju0r3c/image/upload/v1782302640/b8b4bbdb086824d7da474c337e4c6ff5_epqy4h.jpg"
                  width={1280}
                  height={800}
                />
              </CommonHero3DImage>
              <CommonHero3DImage index={15} className="hero-02__img">
                <Image
                  alt="Azurio Template Sample Image"
                  src="https://res.cloudinary.com/daoju0r3c/image/upload/v1782302807/1b398d3f6c18cf39d381820de2c48fb8_sdyhwp.jpg"
                  width={1280}
                  height={800}
                />
              </CommonHero3DImage>
              <CommonHero3DImage index={16} className="hero-02__img">
                <Image
                  alt="Azurio Template Sample Image"
                  src="https://res.cloudinary.com/daoju0r3c/image/upload/v1782304741/62330ad9a4147b2fc12774912afbf4cc_agooid.jpg"
                  width={1280}
                  height={800}
                />
              </CommonHero3DImage>
              <CommonHero3DImage index={17} className="hero-02__img">
                <Image
                  alt="Azurio Template Sample Image"
                  src="https://res.cloudinary.com/daoju0r3c/image/upload/v1782305413/43d319ae28d359ee55c029ef1a57666a_vsj76e.jpg"
                  width={1280}
                  height={800}
                />
              </CommonHero3DImage>
              <CommonHero3DImage index={18} className="hero-02__img">
                <Image
                  alt="Azurio Template Sample Image"
                  src="https://res.cloudinary.com/daoju0r3c/image/upload/v1782305048/da8d6ac6658539493c003b741e05d257_il1vmw.jpg"
                  width={1280}
                  height={800}
                />
              </CommonHero3DImage>
              <CommonHero3DImage index={19} className="hero-02__img">
                <Image
                  alt="Azurio Template Sample Image"
                  src="https://res.cloudinary.com/daoju0r3c/image/upload/v1782305234/064fb018f4fd244ca39c35d4a1179722_qe25i8.jpg"
                  width={1280}
                  height={800}
                />
              </CommonHero3DImage>
            </CommonHero3DImagesTrack>
            {/* bottom group */}
            <div className="mxd-hero-02__bottom">
              <div className="mxd-hero-02__dataline">
                <div className="mxd-hero-02__socials mxd-grid-item">
                  <ul className="mxd-socials-line">
                    <li>
                      <CommonLoadItem index={0}>
                        <a
                          className="mxd-socials-line__link permanent loading-item"
                          href="https://www.instagram.com/beyondbranding_?igsh=MTE4cTlvZWd6ZnpvNQ=="
                          target="_blank"
                        >
                          <TextScramble className="mxd-scramble">
                            Instagram
                          </TextScramble>
                        </a>
                      </CommonLoadItem>
                    </li>
                    <li>
                      <CommonLoadItem index={1}>
                        <a
                          className="mxd-socials-line__link permanent loading-item"
                          href="https://www.linkedin.com/company/beyond-branding-mumbai/"
                          target="_blank"
                        >
                          <TextScramble className="mxd-scramble">
                            LinkedIn
                          </TextScramble>
                        </a>
                      </CommonLoadItem>
                    </li>
                    
                  </ul>
                </div>
                <CommonLoadFade index={0}>
                  <div className="mxd-hero-02__controls mxd-grid-item loading-fade">
                    <SmoothAnchorLink
                      className="btn btn-line-icon btn-line-permanent slide-down"
                      targetId="about"
                    >
                      <TextScramble className="btn-caption mxd-scramble">
                        Scroll to explore
                      </TextScramble>
                      <i>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          version="1.1"
                          viewBox="0 0 18 18"
                        >
                          <path d="M18,10.8h-3.6v-3.6h3.6v3.6ZM7.2,14.4v3.6h3.6v-3.6h3.6v-3.6h-3.6V0h-3.6v10.8h-3.6v3.6s3.6,0,3.6,0ZM3.6,10.8v-3.6H0v3.6h3.6Z" />
                        </svg>
                      </i>
                    </SmoothAnchorLink>
                  </div>
                </CommonLoadFade>
              </div>
            </div>
            {/* cover image */}
            <CommonHero3DCover className="mxd-hero-02__cover-img">
              <Image
                alt="Azurio Template Sample Image"
                src="https://res.cloudinary.com/daoju0r3c/image/upload/v1782305860/hero-03_cover_kwl4x1.webp"
                width={1920}
                height={1200}
                priority
              />
            </CommonHero3DCover>
            {/* headlines */}
            <div className="mxd-hero-02__intro">
              <CommonHero3DIntroText>
                <h1 className="medium permanent">
                  Branding That Goes Beyond.
                </h1>
              </CommonHero3DIntroText>
            </div>
            <div className="mxd-hero-02__outro">
              <CommonHero3DOutroText>
                <p>Ready To Change How People See You?</p>
              </CommonHero3DOutroText>
            </div>
          </CommonHero3DImages>
        </div>
      </>
    </CommonLoadAnimation>
  );
}
