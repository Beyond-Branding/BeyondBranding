import { Metadata } from "next";
import InnerHeadline from "@/components/other-pages/services/InnerHeadline";
import ServicesDescriptionStack from "@/components/other-pages/services/ServicesDescriptionStack";
import ParallaxDividerImage from "@/components/other-pages/services/ParallaxDividerImage";
import BlogPreview from "@/components/other-pages/services/BlogPreview";
import CTAWithMarquee from "@/components/other-pages/services/CTAWithMarquee";
import CTA from "@/components/other-pages/services/CTA";
import Footer1 from "@/components/footers/Footer1";
export const metadata: Metadata = {
  title:
    "Beyond Branding",
  description: "Beyond Branding Official Website",
};
export default function ServicesPage() {
  return (
    <>
      <>
        <InnerHeadline />
        <ServicesDescriptionStack />
        <ParallaxDividerImage />
        <BlogPreview />
        <CTAWithMarquee />
        <CTA />
      </>
      <Footer1 />
    </>
  );
}
