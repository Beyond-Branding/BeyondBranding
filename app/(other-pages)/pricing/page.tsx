import { Metadata } from "next";
import InnerHeadline from "@/components/other-pages/pricing/InnerHeadline";
import PricingCards from "@/components/other-pages/pricing/PricingCards";
import Partners from "@/components/other-pages/pricing/Partners";
import ParallaxDividerVideo from "@/components/other-pages/pricing/ParallaxDividerVideo";
import CTA from "@/components/other-pages/pricing/CTA";
import CTAWithMarquee from "@/components/other-pages/pricing/CTAWithMarquee";
import FaqHero from "@/components/other-pages/pricing/Faqhero";
import Footer1 from "@/components/footers/Footer1";

export const metadata: Metadata = {
  title:
    "Beyond Branding",
  description: "Beyond Branding Official Website",
};
export default function PricingPage() {
  return (
    <>
      <div className="mxd-page-content inner-page-content">
        <InnerHeadline />
        <PricingCards />  
        <Partners />
        <ParallaxDividerVideo />
        <FaqHero />
        <CTAWithMarquee />
        <CTA />
        <Footer1 />
      </div>
    </>
  );
}
