import { Metadata } from "next";
import InnerHeadline from "@/components/other-pages/contact/InnerHeadline";
import Socials from "@/components/other-pages/contact/Socials";
import ParallaxDividerImage from "@/components/other-pages/contact/ParallaxDividerImage";
import SectionTitle from "@/components/other-pages/contact/SectionTitle";
import CTAWithMarquee from "@/components/other-pages/contact/CTAWithMarquee";
import Footer1 from "@/components/footers/Footer1";
import CTA from "@/components/other-pages/contact/CTA";
export const metadata: Metadata = {
  title:
    "Beyond Branding",
  description: "Beyond Branding Official Website",
};
export default function ContactPage() {
  return (
    <>
      <div className="mxd-page-content inner-page-content">
        <InnerHeadline />
        <Socials />
        <ParallaxDividerImage />
        <SectionTitle />
        <CTA />
        <Footer1 />
      </div>
      
    </>
  );
}
