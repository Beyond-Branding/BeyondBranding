export interface MediaItem {
  type: "image" | "video";
  src: string;
  poster?: string;
  width?: number;
  height?: number;
}

export interface ExpandableProject {
  id: string;
  title: string;
  category: string;
  description: string;
  coverType: "image" | "video";
  coverSrc: string;
  coverPoster?: string;
  badgeColor?: string;
  gallery: MediaItem[];
}

export const expandableProjectsData: ExpandableProject[] = [
  {
    id: "project-01",
    title: "Mosu-design-studio",
    category: "Brand Identity",
    description:
      "Mosu-design-studio BESPOKE - crafted, not advertised.Not everything we do is explained.Want to see what we create?Scroll.",
    coverType: "image",
    coverSrc: "/img/works/showcase-sticky/pr02-01.webp",
    badgeColor: "#222222",
    gallery: [
      {
        type: "image",
        src: "/img/works/mosu.png",
        width: 1280,
        height: 722,
      },
      {
        type: "image",
        src: "/img/works/showcase-archive/500x500_pr01.webp",
        width: 500,
        height: 500,
      },
      {
        type: "image",
        src: "/img/works/showcase-sticky/pr02-01.webp",
        width: 1280,
        height: 722,
      },
      {
        type: "video",
        src: "video/640x360_stone-geometry.mp4",
        poster: "video/640x360_stone-geometry-banner.webp",
      },
      {
        type: "image",
        src: "/img/works/showcase-archive/500x500_pr02.webp",
        width: 500,
        height: 500,
      },
      {
        type: "image",
        src: "/img/works/showcase-sticky/pr01-04.webp",
        width: 1280,
        height: 722,
      },
      {
        type: "image",
        src: "/img/works/showcase-archive/500x500_pr03.webp",
        width: 500,
        height: 500,
      },
      {
        type: "image",
        src: "/img/works/showcase-grid-x3/pr02-03.webp",
        width: 1280,
        height: 843,
      },
    ],
  },
  {
    id: "project-02",
    title: "Dashboard",
    category: "UI/UX Design / Development",
    description:
      "A B2B SaaS dashboard designed to optimize business analytics and workflow productivity. Features high-performance interactive charts, drag-and-drop widgets, and real-time data sync.",
    coverType: "video",
    coverSrc: "video/640x360_stone-geometry.mp4",
    coverPoster: "video/640x360_stone-geometry-banner.webp",
    badgeColor: "#333333",
    gallery: [
      {
        type: "image",
        src: "/img/works/showcase-sticky/pr02-01.webp",
        width: 1280,
        height: 843,
      },
      {
        type: "image",
        src: "/img/works/showcase-archive/500x500_pr04.webp",
        width: 500,
        height: 500,
      },
      {
        type: "video",
        src: "video/640x360_bw-geometry.mp4",
        poster: "video/640x360_bw-geometry-banner.webp",
      },
      {
        type: "image",
        src: "/img/works/showcase-sticky/pr03-01.webp",
        width: 1280,
        height: 843,
      },
      {
        type: "image",
        src: "/img/works/showcase-archive/500x500_pr05.webp",
        width: 500,
        height: 500,
      },
      {
        type: "image",
        src: "/img/works/showcase-grid-x3/pr02-04.webp",
        width: 1280,
        height: 843,
      },
      {
        type: "image",
        src: "/img/works/showcase-archive/500x500_pr02.webp",
        width: 500,
        height: 500,
      },
      {
        type: "image",
        src: "/img/works/showcase-grid-x3/pr02-02.webp",
        width: 1280,
        height: 843,
      },
    ],
  },
  {
    id: "project-03",
    title: "Aura Brand Identity",
    category: "Identity & Strategy",
    description:
      "A comprehensive brand strategy and visual identity redesign for Aura, focusing on minimalist aesthetics, luxury textures, and sustainable packaging. We crafted a unique typographic language and materials guide that elevates their premium market position.",
    coverType: "video",
    coverSrc: "video/640x360_stone-geometry.mp4",
    coverPoster: "video/640x360_stone-geometry-banner.webp",
    badgeColor: "#333333",
    gallery: [
      {
        type: "image",
        src: "/img/works/showcase-sticky/pr01-01.webp",
        width: 1280,
        height: 722,
      },
      {
        type: "image",
        src: "/img/works/showcase-archive/500x500_pr01.webp",
        width: 500,
        height: 500,
      },
      {
        type: "image",
        src: "/img/works/showcase-sticky/pr01-02.webp",
        width: 1280,
        height: 722,
      },
      {
        type: "video",
        src: "video/640x360_stone-geometry.mp4",
        poster: "video/640x360_stone-geometry-banner.webp",
      },
      {
        type: "image",
        src: "/img/works/showcase-archive/500x500_pr02.webp",
        width: 500,
        height: 500,
      },
      {
        type: "image",
        src: "/img/works/showcase-sticky/pr01-05.webp",
        width: 1280,
        height: 722,
      },
      {
        type: "image",
        src: "/img/works/showcase-archive/500x500_pr03.webp",
        width: 500,
        height: 500,
      },
    ],
  },
  {
    id: "project-04",
    title: "Chronos E-Commerce",
    category: "Web Design / UX Design",
    description:
      "An immersive digital flagship experience for luxury Swiss timepiece watchmaker Chronos. We developed a fluid 3D interaction layer and refined typographic grid system that translates physical craftsmanship into a sophisticated digital touchpoint.",
    coverType: "image",
    coverSrc: "/img/works/showcase-sticky/pr02-01.webp",
    badgeColor: "#222222",
    gallery: [
      {
        type: "image",
        src: "/img/works/showcase-sticky/pr02-01.webp",
        width: 1500,
        height: 1000,
      },
      {
        type: "image",
        src: "/img/works/showcase-archive/500x500_pr03.webp",
        width: 500,
        height: 500,
      },
      {
        type: "video",
        src: "video/640x360_bw-geometry.mp4",
        poster: "video/640x360_bw-geometry-banner.webp",
      },
      {
        type: "image",
        src: "/img/works/showcase-grid-x3/pr02-03.webp",
        width: 1280,
        height: 843,
      },
      {
        type: "image",
        src: "/img/works/showcase-archive/500x500_pr04.webp",
        width: 500,
        height: 500,
      },
      {
        type: "image",
        src: "/img/works/showcase-grid-x3/pr02-02.webp",
        width: 1280,
        height: 843,
      },
      {
        type: "image",
        src: "/img/works/showcase-archive/500x500_pr01.webp",
        width: 500,
        height: 500,
      },
    ],
  },
  {
    id: "project-05",
    title: "Mosu-design-studio",
    category: "Brand Identity",
    description:  
      "Mosu-design-studio BESPOKE - crafted, not advertised.Not everything we do is explained.Want to see what we create?Scroll.",
    coverType: "image",
    coverSrc:"/img/works/showcase-sticky/pr02-01.webp",
    badgeColor: "#222222",
    gallery: [
      {
        type: "image",
        src: "/img/works/mosu.png",
        width: 1280,
        height: 722,
      },
      {
        type: "image",
        src: "/img/works/showcase-archive/500x500_pr01.webp",
        width: 500,
        height: 500,
      },
      {
        type: "image",
        src: "/img/works/showcase-sticky/pr01-02.webp",
        width: 1280,
        height: 722,
      },
      {
        type: "video",
        src: "video/640x360_stone-geometry.mp4",
        poster: "video/640x360_stone-geometry-banner.webp",
      },
      {
        type: "image",
        src: "/img/works/showcase-archive/500x500_pr02.webp",
        width: 500,
        height: 500,
      },
      {
        type: "image",
        src: "/img/works/showcase-sticky/pr01-04.webp",
        width: 1280,
        height: 722,
      },
      {
        type: "image",
        src: "/img/works/showcase-archive/500x500_pr03.webp",
        width: 500,
        height: 500,
      },
      {
        type: "image",
        src: "/img/works/showcase-grid-x3/pr02-03.webp",
        width: 1280,
        height: 843,
      },
    ],
  },
  {
    id: "project-06",
    title: "Aura Brand Identity",
    category: "Identity & Strategy",
    description:
      "A comprehensive brand strategy and visual identity redesign for Aura, focusing on minimalist aesthetics, luxury textures, and sustainable packaging. We crafted a unique typographic language and materials guide that elevates their premium market position.",
    coverType: "video",
    coverSrc: "video/640x360_stone-geometry.mp4",
    coverPoster: "video/640x360_stone-geometry-banner.webp",
    badgeColor: "#333333",
    gallery: [
      {
        type: "image",
        src: "/img/works/showcase-sticky/pr01-01.webp",
        width: 1280,
        height: 722,
      },
      {
        type: "image",
        src: "/img/works/showcase-archive/500x500_pr01.webp",
        width: 500,
        height: 500,
      },
      {
        type: "image",
        src: "/img/works/showcase-sticky/pr01-02.webp",
        width: 1280,
        height: 722,
      },
      {
        type: "video",
        src: "video/640x360_stone-geometry.mp4",
        poster: "video/640x360_stone-geometry-banner.webp",
      },
      {
        type: "image",
        src: "/img/works/showcase-archive/500x500_pr02.webp",
        width: 500,
        height: 500,
      },
      {
        type: "image",
        src: "/img/works/showcase-sticky/pr01-05.webp",
        width: 1280,
        height: 722,
      },
      {
        type: "image",
        src: "/img/works/showcase-archive/500x500_pr03.webp",
        width: 500,
        height: 500,
      },
    ],
  },
  {
    id: "project-07",
    title: "Aura Brand Identity",
    category: "Identity & Strategy",
    description:
      "A comprehensive brand strategy and visual identity redesign for Aura, focusing on minimalist aesthetics, luxury textures, and sustainable packaging. We crafted a unique typographic language and materials guide that elevates their premium market position.",
    coverType: "video",
    coverSrc: "video/640x360_stone-geometry.mp4",
    coverPoster: "video/640x360_stone-geometry-banner.webp",
    badgeColor: "#333333",
    gallery: [
      {
        type: "image",
        src: "/img/works/showcase-sticky/pr01-01.webp",
        width: 1280,
        height: 722,
      },
      {
        type: "image",
        src: "/img/works/showcase-archive/500x500_pr01.webp",
        width: 500,
        height: 500,
      },
      {
        type: "image",
        src: "/img/works/showcase-sticky/pr01-02.webp",
        width: 1280,
        height: 722,
      },
      {
        type: "video",
        src: "video/640x360_stone-geometry.mp4",
        poster: "video/640x360_stone-geometry-banner.webp",
      },
      {
        type: "image",
        src: "/img/works/showcase-archive/500x500_pr02.webp",
        width: 500,
        height: 500,
      },
      {
        type: "image",
        src: "/img/works/showcase-sticky/pr01-05.webp",
        width: 1280,
        height: 722,
      },
      {
        type: "image",
        src: "/img/works/showcase-archive/500x500_pr03.webp",
        width: 500,
        height: 500,
      },
    ],
  },
  {
    id: "project-08",
    title: "Aura Brand Identity",
    category: "Identity & Strategy",
    description:
      "A comprehensive brand strategy and visual identity redesign for Aura, focusing on minimalist aesthetics, luxury textures, and sustainable packaging. We crafted a unique typographic language and materials guide that elevates their premium market position.",
    coverType: "video",
    coverSrc: "video/640x360_stone-geometry.mp4",
    coverPoster: "video/640x360_stone-geometry-banner.webp",
    badgeColor: "#333333",
    gallery: [
      {
        type: "image",
        src: "/img/works/showcase-sticky/pr01-01.webp",
        width: 1280,
        height: 722,
      },
      {
        type: "image",
        src: "/img/works/showcase-archive/500x500_pr01.webp",
        width: 500,
        height: 500,
      },
      {
        type: "image",
        src: "/img/works/showcase-sticky/pr01-02.webp",
        width: 1280,
        height: 722,
      },
      {
        type: "video",
        src: "video/640x360_stone-geometry.mp4",
        poster: "video/640x360_stone-geometry-banner.webp",
      },
      {
        type: "image",
        src: "/img/works/showcase-archive/500x500_pr02.webp",
        width: 500,
        height: 500,
      },
      {
        type: "image",
        src: "/img/works/showcase-sticky/pr01-05.webp",
        width: 1280,
        height: 722,
      },
      {
        type: "image",
        src: "/img/works/showcase-archive/500x500_pr03.webp",
        width: 500,
        height: 500,
      },
    ],
  }
];
