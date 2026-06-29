import { Metadata } from "next";
import Hero from "@/components/homes/index-digital-agency/Hero";
import AboutProcess from "@/components/homes/index-digital-agency/AboutProcess";
import ProjectsShowcase from "@/components/homes/index-digital-agency/ProjectsShowcase";
import ServicesList from "@/components/homes/index-digital-agency/ServicesList";
import ParallaxDividerVideo from "@/components/homes/index-digital-agency/ParallaxDividerVideo";
import TestimonialsSticky from "@/components/homes/index-digital-agency/TestimonialsSticky";
import ParallaxDividerImage from "@/components/homes/index-digital-agency/ParallaxDividerImage";
import Partners from "@/components/homes/index-digital-agency/Partners";
// import MarqueeDivider from "@/components/homes/index-digital-agency/MarqueeDivider";
import CTA from "@/components/homes/index-digital-agency/CTA";
import Footer1 from "@/components/footers/Footer1";
export const metadata: Metadata = {
  title:
    "Beyond Branding",
  description: "Beyond Branding Official Website",
};
export default function IndexDigitalAgencyPage() {
  return (
    <>
      <>
        <Hero />
        <AboutProcess />
        <ProjectsShowcase />
        <ServicesList />
        <ParallaxDividerVideo />
        {/* <MarqueeDivider /> */}
        <Partners />
        <TestimonialsSticky />
        <ParallaxDividerImage />
        <CTA />
      </>
      <Footer1 />
    </>
  );
}
