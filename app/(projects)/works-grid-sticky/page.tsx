import { Metadata } from "next";
import InnerHeadline from "@/components/projects/works-grid-sticky/InnerHeadline";
import ProjectsGridStickyShowcase from "@/components/projects/works-grid-sticky/ProjectsGridStickyShowcase";
import ParallaxDividerVideo from "@/components/projects/works-grid-sticky/ParallaxDividerVideo";
import ProjectsList from "@/components/projects/works-grid-sticky/ProjectsList";
import CTA from "@/components/projects/works-grid-sticky/CTA";
import Footer1 from "@/components/footers/Footer1";

export const metadata: Metadata = {
  title:
    "Beyond Branding",
  description: "Beyond Branding Official Website",
};
export default function WorksGridStickyPage() {
  return (
    <>
      <div className="mxd-page-content inner-page-content">
        <InnerHeadline /> 
        <ProjectsGridStickyShowcase />
        <ParallaxDividerVideo />
        <ProjectsList />
        <CTA />
        <Footer1 />
      </div>
    </>
  );
}
