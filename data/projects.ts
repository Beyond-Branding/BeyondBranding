import type { ProjectShowcaseItem, ProjectStackItem } from "@/types/project";

const commonTags = ["Design", "Illustrations", "Packaging", "marketing"];
const showcaseCommonTags = ["Design", "Illustrations", "Packaging", "Marketing"];

export const brandingStudioProjects: ProjectStackItem[] = [
  {
    title: "NFT project branding",
    imageSrc: "/img/works/showcase-stack/pr03.webp",
    imageAlt: "Project Preview Image",
    imageWidth: 1920,
    imageHeight: 1180,
    tags: commonTags,
  },
  {
    title: "Interactive app concept",
    imageSrc: "/img/works/showcase-stack/pr02.webp",
    imageAlt: "Project Preview Image",
    imageWidth: 2200,
    imageHeight: 1240,
    tags: commonTags,
  },
  {
    title: "Editorial illustrations set",
    imageSrc: "/img/works/showcase-stack/pr01.webp",
    imageAlt: "Project Preview Image",
    imageWidth: 1920,
    imageHeight: 1180,
    tags: commonTags,
  },
  {
    title: "Creative studio template",
    imageSrc: "/img/works/showcase-stack/pr04.webp",
    imageAlt: "Project Preview Image",
    imageWidth: 1920,
    imageHeight: 1180,
    coverClassName: "cover-darken",
    tags: commonTags,
  },
];

export const digitalDesignerProjectsShowcase: ProjectShowcaseItem[] = [
  {
    titleLines: ["Social Media &", "Digital Marketing"],
    bgImageSrc: "https://res.cloudinary.com/daoju0r3c/image/upload/v1782714326/700x700_pr01_gh0f8u.webp",
    cardImageSrc: "https://res.cloudinary.com/daoju0r3c/image/upload/v1782714326/700x700_pr01_gh0f8u.webp",
    cardImageAlt: "Editorial illustrations project preview",
    cursorText: "View Work",
    href: "/project-details",
    tags: ["Social Media Marketing", "SEO & Content Marketing", "Video Production & Editing", "Photography & Videography"],
  },
  {
    titleLines: ["Website &", "Digital Experience"],
    bgImageSrc: "https://res.cloudinary.com/daoju0r3c/image/upload/v1782714326/700x700_pr02_he1lie.webp",
    cardImageSrc: "https://res.cloudinary.com/daoju0r3c/image/upload/v1782714326/700x700_pr02_he1lie.webp",
    cardImageAlt: "Interactive concept project preview",
    cursorText: "Behance",
    href: "/project-details",
    tags: ["Website Design & Development", "UI/UX Design", "Landing Pages & Funnels", "Website Maintenance & Optimization"],
  },
  {
    titleLines: ["Branding &", "Creative Design"],
    bgImageSrc: "https://res.cloudinary.com/daoju0r3c/image/upload/v1782714327/mar_03_qih3dl.webp",
    cardImageSrc: "https://res.cloudinary.com/daoju0r3c/image/upload/v1782714327/mar_03_qih3dl.webp",
    cardImageAlt: "Creative studio template project preview",
    cursorText: "View Work",
    href: "/project-details",
    tags: ["Branding & Identity", "Graphic & Creative Design", "Packaging Design", "Print & Marketing Collateral"],
  },
];
