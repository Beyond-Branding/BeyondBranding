import { Metadata } from "next";
import InnerHeadline from "@/components/other-pages/about-us/InnerHeadline";
import ParallaxDividerImage from "@/components/other-pages/about-us/ParallaxDividerImage";
import ParallaxDividerImage2 from "@/components/other-pages/about-us/ParallaxDividerImage2";
import Approach from "@/components/other-pages/about-us/Approach";
import BlogPreview from "@/components/other-pages/about-us/BlogPreview";
import HeroTeam from "@/components/other-pages/about-us/heroteam";
import SplitAboutTeam from "@/components/other-pages/about-us/SplitAboutTeam";
import TeamList from "@/components/other-pages/about-us/TeamList";
import CTA from "@/components/other-pages/about-us/CTA";
import Footer1 from "@/components/footers/Footer1";
export const metadata: Metadata = {
  title:
    "Beyond Branding",
  description: "Beyond Branding Official Website",
};
export default function AboutUsPage() {
  return (
    <>
      <>
        <InnerHeadline />
        <ParallaxDividerImage />
        <Approach />
        <HeroTeam />
        <SplitAboutTeam />
        <TeamList />
        <ParallaxDividerImage2 />
        <BlogPreview />
        <CTA />
      </>
      <Footer1 />
    </>
  );
}
