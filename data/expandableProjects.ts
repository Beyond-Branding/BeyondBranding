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
    title: "Kho Kha",
    category: "Brand Identity",
    description:
      "Kho Kha BESPOKE - crafted, not advertised.Not everything we do is explained.Want to see what we create?Scroll.",
    coverType: "image",
    coverSrc: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789806175/hero_image_tewp37.png",
    badgeColor: "#222222",
    gallery: [
      {
        type: "image",
        src: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789820144/4_1_akpikn.png",
        width: 1280,
        height: 722,
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789820147/4a_1_retxbi.png",
        width: 500,
        height: 500,
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789820143/8_yogqky.png",
        width: 1280,
        height: 722,
      },
      {
        type: "video",
        src: "https://res.cloudinary.com/daoju0r3c/video/upload/v1789820156/create_a_small_video_with_all_phyt5q.mp4",
        poster: "video/640x360_stone-geometry-banner.webp",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789820145/8c_1_vzutcd.png",
        width: 500,
        height: 500,
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789820154/9_cover_page_cnapil.png",
        width: 1280,
        height: 722,
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789820149/4c_1_b1ldht.png",
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
    title: "Euro Decor",
    category: "UI/UX Design / Development",
    description:
      "A B2B SaaS dashboard designed to optimize business analytics and workflow productivity. Features high-performance interactive charts, drag-and-drop widgets, and real-time data sync.",
    coverType: "image",
    coverSrc: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789821426/hero_image_zokkrl.png",
    coverPoster: "video/640x360_stone-geometry-banner.webp",
    badgeColor: "#333333",
    gallery: [
      {
        type: "image",
        src: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789821428/Dyed_Veneers_qddebv.png",
        width: 1280,
        height: 843,
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789821424/7_oqnujj.jpg",
        width: 500,
        height: 500,
      },
      {
        type: "video",
        src: "https://res.cloudinary.com/daoju0r3c/video/upload/v1789821428/5_2_gv3sxf.mp4",
        poster: "video/640x360_bw-geometry-banner.webp",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789821426/12_z7k0cu.png",
        width: 1280,
        height: 843,
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789821426/Marquetry_ma9qks.png",
        width: 500,
        height: 500,
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789821424/3_imhuyz.jpg",
        width: 1280,
        height: 843,
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789821424/9_rwyesc.jpg",
        width: 500,
        height: 500,
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789821425/11_e0glvs.png",
        width: 1280,
        height: 843,
      },
    ],
  },
  {
    id: "project-03",
    title: "Mosu",
    category: "Identity & Strategy",
    description:
      "A comprehensive brand strategy and visual identity redesign for Aura, focusing on minimalist aesthetics, luxury textures, and sustainable packaging. We crafted a unique typographic language and materials guide that elevates their premium market position.",
    coverType: "image",
    coverSrc: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789822302/hero_image_eoisjb.png",
    coverPoster: "video/640x360_stone-geometry-banner.webp",
    badgeColor: "#333333",
    gallery: [
      {
        type: "image",
        src: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789822303/ChatGPT_Image_Jun_1_2026_04_52_16_PM_2_1_oa4uht.png",
        width: 1280,
        height: 722,
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789822303/ChatGPT_Image_Jun_9_2026_03_05_39_PM_1_wktn4q.png",
        width: 500,
        height: 500,
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789822301/10e_rcqcx8.png",
        width: 1280,
        height: 722,
      },
      {
        type: "video",
        src: "https://res.cloudinary.com/daoju0r3c/video/upload/v1789822303/Video-76373_qxkddg.mp4",
        poster: "video/640x360_stone-geometry-banner.webp",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789822301/6g_1_it3dni.png",
        width: 500,
        height: 500,
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789822301/6j_jvg7ba.png",
        width: 1280,
        height: 722,
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789822301/4h_y1vhjw.png",
        width: 500,
        height: 500,
      },
    ],
  },
  {
    id: "project-04",
    title: "Pro Boxing League",
    category: "Web Design / UX Design",
    description:
      "An immersive digital flagship experience for luxury Swiss timepiece watchmaker Chronos. We developed a fluid 3D interaction layer and refined typographic grid system that translates physical craftsmanship into a sophisticated digital touchpoint.",
    coverType: "image",
    coverSrc: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789822590/hero_image_ul8mjl.png",
    badgeColor: "#222222",
    gallery: [
      {
        type: "image",
        src: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789822592/Not_just_a_match._Not_just_a_league._This_is_Delhi_s_fight_night_fever_Where_every_round_br_mhrro7.webp",
        width: 1500,
        height: 1000,
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789822592/Months_of_planning.Days_of_preparation.One_night_of_pure_fight_energy.1_DAY_TO_GO._Book_now_1_tx1f0l.jpg",
        width: 500,
        height: 500,
      },
      {
        type: "video",
        src: "https://res.cloudinary.com/daoju0r3c/video/upload/v1789822593/They_climbed_for_the_moment.You_just_need_to_book_yours._viral_proposal_trend_tower_proposal_1_cjlwii.mp4",
        poster: "video/640x360_bw-geometry-banner.webp",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789822591/Speed_gets_there_before_the_guard_can_react.Power_makes_the_punch_impossible_to_ignore._In_box_1_g8tdcb.jpg",
        width: 1280,
        height: 843,
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789822590/2_days_to_go.Get_ready_for_punches_power_and_pure_action.Book_your_tickets_now._Link_in_bio._ixc2nq.jpg",
        width: 500,
        height: 500,
      },
      {
        type: "video",
        src: "https://res.cloudinary.com/daoju0r3c/video/upload/v1789822599/The_ring_came_alive_with_power_passion_and_pure_fight_energy._Every_punch_every_move_and_e_xepr5f.mp4",
        width: 1280,
        height: 843,
      },
      {
        type: "video",
        src: "https://res.cloudinary.com/daoju0r3c/video/upload/v1789822594/One_ring._Fierce_fighters._Non-stop_action.Yesterday_s_fight_night_had_it_all._Pro_Boxing_Le_ktyqdk.mp4",
        width: 500,
        height: 500,
      },
    ],
  },
  {
    id: "project-05",
    title: "Continuity Printers",
    category: "Brand Identity",
    description:  
      "Mosu-design-studio BESPOKE - crafted, not advertised.Not everything we do is explained.Want to see what we create?Scroll.",
    coverType: "image",
    coverSrc:"https://res.cloudinary.com/daoju0r3c/image/upload/v1789823046/Luxury_Skincare_Boxes_on_Red_Platforms_uqshoj.png",
    badgeColor: "#222222",
    gallery: [
      {
        type: "image",
        src: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789823042/cp3_jfywyp.jpg",
        width: 1280,
        height: 722,
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789823042/cp3_jfywyp.jpg",
        width: 500,
        height: 500,
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789823042/WhatsApp_Image_2026-08-31_at_5.27.51_PM_1_a8pe7l.jpg",
        width: 1280,
        height: 722,
      },
      {
        type: "video",
        src: "https://res.cloudinary.com/daoju0r3c/video/upload/v1789823080/Untitled_design_ktge12.mp4",
        width: 1280,
        height: 722,
      },
      {
        type: "video",
        src: "https://res.cloudinary.com/daoju0r3c/video/upload/v1789823040/create_a_small_video_of_these_vo7ekj.mp4",
        width: 500,
        height: 500,
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789823040/cp2_dbke3m.jpg",
        width: 1280,
        height: 722,
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789823040/hero_image_agewwm.jpg",
        width: 500,
        height: 500,
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789823037/cp4_laykpx.jpg",
        width: 1280,
        height: 843,
      },
    ],
  },
  {
    id: "project-06",
    title: "Saaro",
    category: "Identity & Strategy",
    description:
      "A comprehensive brand strategy and visual identity redesign for Aura, focusing on minimalist aesthetics, luxury textures, and sustainable packaging. We crafted a unique typographic language and materials guide that elevates their premium market position.",
    coverType: "image",
    coverSrc: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789823465/hero_image_vuumev.png",
    coverPoster: "video/640x360_stone-geometry-banner.webp",
    badgeColor: "#333333",
    gallery: [
      {
        type: "image",
        src: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789823472/WhatsApp_Image_2026-08-31_at_5.33.40_PM_1_wvilea.jpg",
        width: 1280,
        height: 722,
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789823474/WhatsApp_Image_2026-08-31_at_5.33.40_PM_k60kr4.jpg",
        width: 500,
        height: 500,
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789823473/WhatsApp_Image_2026-08-31_at_5.33.40_PM_4_yx5ada.jpg",
        width: 1280,
        height: 722,
      },
      
      {
        type: "video",
        src: "https://res.cloudinary.com/daoju0r3c/video/upload/v1789823478/WhatsApp_Video_2026-08-31_at_5.33.59_PM_brfuwd.mp4",
        width: 500,
        height: 500,
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789823473/WhatsApp_Image_2026-08-31_at_5.33.40_PM_2_gukqdh.jpg",
        width: 1280,
        height: 722,
      },
      {
        type: "video",
        src: "https://res.cloudinary.com/daoju0r3c/video/upload/v1789823479/WhatsApp_Video_2026-08-31_at_5.34.12_PM_wvhlgn.mp4",
        width: 500,
        height: 500,
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789823473/WhatsApp_Image_2026-08-31_at_5.33.40_PM_3_pefwmd.jpg",
        width: 1280,
        height: 722,
      },
    ],
  },
  {
    id: "project-07",
    title: "Trisha Enterprises",
    category: "Identity & Strategy",
    description:
      "A comprehensive brand strategy and visual identity redesign for Aura, focusing on minimalist aesthetics, luxury textures, and sustainable packaging. We crafted a unique typographic language and materials guide that elevates their premium market position.",
    coverType: "image",
    coverSrc: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789824099/hero_image_mrs0oh.png",
    coverPoster: "video/640x360_stone-geometry-banner.webp",
    badgeColor: "#333333",
    gallery: [
      {
        type: "image",
        src: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789824098/ChatGPT_Image_Aug_27_2026_01_38_52_PM_gjlc61.png",
        width: 1280,
        height: 722,
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789824098/ChatGPT_Image_Aug_27_2026_01_40_23_PM_bmwb0o.png",
        width: 500,
        height: 500,
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789824101/ChatGPT_Image_Aug_27_2026_01_54_44_PM_zqb3cu.png",
        width: 1280,
        height: 722,
      },
      {
        type: "video",
        src: "https://res.cloudinary.com/daoju0r3c/video/upload/v1789824100/create_a_video_of_these_profuc_pagxz0.mp4",
        poster: "video/640x360_stone-geometry-banner.webp",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789824098/ChatGPT_Image_Aug_27_2026_01_37_38_PM_fjuvhi.png",
        width: 500,
        height: 500,
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789824098/ChatGPT_Image_Aug_27_2026_01_38_52_PM_gjlc61.png",
        width: 1280,
        height: 722,
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789824098/ChatGPT_Image_Aug_27_2026_01_37_58_PM_ukidnz.png",
        width: 500,
        height: 500,
      },
    ],
  },
  {
    id: "project-08",
    title: "Palm Group",
    category: "Identity & Strategy",
    description:
      "A comprehensive brand strategy and visual identity redesign for Aura, focusing on minimalist aesthetics, luxury textures, and sustainable packaging. We crafted a unique typographic language and materials guide that elevates their premium market position.",
    coverType: "image",
    coverSrc: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789824599/hero_image_h5d5xa.png",
    coverPoster: "video/640x360_stone-geometry-banner.webp",
    badgeColor: "#333333",
    gallery: [
      {
        type: "image",
        src: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789824597/ChatGPT_Image_Sep_2_2026_10_50_12_AM_o7lrlg.png",
        width: 1280,
        height: 722,
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789824593/Copy_of_bb_website_content_38_hug52v.png",
        width: 500,
        height: 500,
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789824596/Screenshot_2026-09-02_104824_ahdsd5.png",
        width: 1280,
        height: 722,
      },
      {
        type: "video",
        src: "https://res.cloudinary.com/daoju0r3c/video/upload/v1789824600/make_one_for_this_as_well_pahe_ojpghb.mp4",
        poster: "video/640x360_stone-geometry-banner.webp",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789824593/Copy_of_bb_website_content_37_maupkk.png",
        width: 500,
        height: 500,
      },
      {
        type: "video",
        src: "https://res.cloudinary.com/daoju0r3c/video/upload/v1789824674/Palm_Group_-_Sustainable_Agriculture_Innovation_-_Google_Chrome_2026-09-02_10-39-33_imiqld.mp4",
        width: 1280,
        height: 722,
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789824599/hero_image_h5d5xa.png",
        width: 500,
        height: 500,
      },
    ],
  },
  {
    id: "project-09",
    title: "One Stop",
    category: "Identity & Strategy",
    description:
      "A comprehensive brand strategy and visual identity redesign for Aura, focusing on minimalist aesthetics, luxury textures, and sustainable packaging. We crafted a unique typographic language and materials guide that elevates their premium market position.",
    coverType: "image",
    coverSrc: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789824671/hero_image_kydgf6.png",
    coverPoster: "video/640x360_stone-geometry-banner.webp",
    badgeColor: "#333333",
    gallery: [
      {
        type: "image",
        src: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789825173/Copy_of_bb_website_content_39_iwfjen.png",
        width: 1280,
        height: 722,
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789825174/Screenshot_2026-09-02_120305_s8xmzf.png",
        width: 500,
        height: 500,
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789825173/Copy_of_bb_website_content_40_shdewi.png",
        width: 1280,
        height: 722,
      },
      {
        type: "video",
        src: "https://res.cloudinary.com/daoju0r3c/video/upload/v1789825184/create_a_video_of_this_on_a_ch_rlx3pb.mp4",
        poster: "video/640x360_stone-geometry-banner.webp",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789825174/Screenshot_2026-09-02_120820_kphqba.png",
        width: 500,
        height: 500,
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789825173/hero_image_kpplwa.png",
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
    id: "project-10",
    title: "Terraa Love",
    category: "Identity & Strategy",
    description:
      "A comprehensive brand strategy and visual identity redesign for Aura, focusing on minimalist aesthetics, luxury textures, and sustainable packaging. We crafted a unique typographic language and materials guide that elevates their premium market position.",
    coverType: "image",
    coverSrc: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789825450/hero_image_an32ee.png",
    coverPoster: "video/640x360_stone-geometry-banner.webp",
    badgeColor: "#333333",
    gallery: [
      {
        type: "image",
        src: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789825449/Copy_of_bb_website_content_29_plush9.png",
        width: 1280,
        height: 722,
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789825449/Copy_of_bb_website_content_25_s0kmmj.png",
        width: 500,
        height: 500,
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789825448/Copy_of_bb_website_content_27_rsr7uq.png",
        width: 1280,
        height: 722,
      },
      {
        type: "video",
        src: "https://res.cloudinary.com/daoju0r3c/video/upload/v1789825458/keep_thecontent_as_it_is_just_kpjzqg.mp4",
        poster: "video/640x360_stone-geometry-banner.webp",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789825448/Copy_of_bb_website_content_26_jddhdp.png",
        width: 500,
        height: 500,
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789825448/Copy_of_bb_website_content_24_xmqzx0.png",
        width: 1280,
        height: 722,
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789825448/Copy_of_bb_website_content_23_xexgli.png",
        width: 500,
        height: 500,
      },
    ],
  },

  {
    id: "project-11",
    title: "Madhuram",
    category: "Brand Identity",
    description:
      "Madhuram - crafted, not advertised.Not everything we do is explained.Want to see what we create?Scroll.",
    coverType: "image",
    coverSrc: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789825063/hero_image_1_ps8bve.png",
    badgeColor: "#222222",
    gallery: [
      {
        type: "image",
        src: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789825308/image-gen-6_20260826-094515_w1uylp.png",
        width: 1280,
        height: 722,
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789825309/image-gen-9_5_fv2tym.png",
        width: 500,
        height: 500,
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789825310/image-gen-1_20260826-094453_t86sqa.png",
        width: 1280,
        height: 722,
      },
      {
        type: "video",
        src: "https://res.cloudinary.com/daoju0r3c/video/upload/v1789825313/remove_the_gemini_logo_1_lx6nti.mp4",
        poster: "https://res.cloudinary.com/daoju0r3c/video/upload/v1789825313/remove_the_gemini_logo_1_lx6nti.mp4",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789825637/image-gen-3_20260826-094502_rl65b3.png",
        width: 500,
        height: 500,
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789825311/image-gen-2_20260826-094457_hn94wh.png",
        width: 1280,
        height: 722,
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789825639/image-gen-7_20260826-094520_mglecu.png",
        width: 500,
        height: 500,
      },
    ],
  },

  {
    id: "project-12",
    title: "Nasreen Khan Chanana",
    category: "Identity & Strategy",
    description:
      "A comprehensive brand strategy and visual identity redesign for Aura, focusing on minimalist aesthetics, luxury textures, and sustainable packaging. We crafted a unique typographic language and materials guide that elevates their premium market position.",
    coverType: "image",
    coverSrc: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789826032/hero_image_2_adxnob.png",
    badgeColor: "#333333",
    gallery: [
      {
        type: "image",
        src: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789826109/ChatGPT_Image_Sep_2_2026_12_15_34_PM_cbj8hb.png",
        width: 1280,
        height: 722,
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789826105/Copy_of_bb_website_content_42_vc6xso.png",
        width: 500,
        height: 500,
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789826106/Copy_of_bb_website_content_41_qv6uzj.png",
        width: 1280,
        height: 722,
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789826103/Screenshot_2026-09-02_123005_vc9pch.png",
        width: 1280,
        height: 722,
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789826032/hero_image_2_adxnob.png",
        width: 500,
        height: 500,
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789826032/hero_image_2_adxnob.png",
        width: 1280,
        height: 722,
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789826104/Screenshot_2026-09-02_121806_ejqrok.png",
        width: 500,
        height: 500,
      },
    ],
  },
  {
    id: "project-13",
    title: "Srvvasya",
    category: "UI/UX Design / Development",
    description:
      "A B2B SaaS dashboard designed to optimize business analytics and workflow productivity. Features high-performance interactive charts, drag-and-drop widgets, and real-time data sync.",
    coverType: "image",
    coverSrc: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789826465/Copy_of_bb_website_content_35_az2m4y.png",
    coverPoster: "video/640x360_stone-geometry-banner.webp",
    badgeColor: "#333333",
    gallery: [
      {
        type: "image",
        src: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789826464/Copy_of_bb_website_content_33_xmxudv.png",
        width: 1280,
        height: 843,
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789826998/ss1_fjfiye.png",
        width: 500,
        height: 500,
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789826466/WhatsApp_Image_2026-09-01_at_4.54.56_PM_jlhgpa.jpg",
        width: 1280,
        height: 722,
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789826470/hero_image_i8ezrj.png",
        width: 1280,
        height: 843,
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789826464/Copy_of_bb_website_content_34_egyrgp.png",
        width: 500,
        height: 500,
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789826997/ss2_fhxlfv.png",
        width: 1280,
        height: 843,
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789827092/ss3_aov7tt.png",
        width: 500,
        height: 500,
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789827092/ss3_aov7tt.png",
        width: 1280,
        height: 843,
      },
    ],
  },

  {
    id: "project-14",
    title: "Exxpression Interior",
    category: "Brand Identity",
    description:
      "Madhuram - crafted, not advertised.Not everything we do is explained.Want to see what we create?Scroll.",
    coverType: "image",
    coverSrc: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789826834/hero_image_3_grzplh.png",
    badgeColor: "#222222",
    gallery: [
      {
        type: "image",
        src: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789826952/image-gen-2_20260825-122505_qbupu6.png",
        width: 1280,
        height: 722,
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789826951/image-gen-1_20260825-122501_ysx2k0.png",
        width: 500,
        height: 500,
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789826954/39ad4487-e38e-49b2-9155-125bb8f3c063_ckadwn.png",
        width: 1280,
        height: 722,
      },
      {
        type: "video",
        src: "https://res.cloudinary.com/daoju0r3c/video/upload/v1789826952/9_yealzv.mp4",
        poster: "https://res.cloudinary.com/daoju0r3c/video/upload/v1789826952/9_yealzv.mp4",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789826952/a01c07e6-fe94-447d-8f44-45889e8d5fe7_xr6umh.png",
        width: 500,
        height: 500,
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789826949/image-gen-5_20260825-122519_jvfvqm.png",
        width: 1280,
        height: 722,
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789826834/hero_image_3_grzplh.png",
        width: 500,
        height: 500,
      },
    ],
  },
  {
    id: "project-15",
    title: "Mildas Diamonds",
    category: "Identity & Strategy",
    description:
      "A comprehensive brand strategy and visual identity redesign for Aura, focusing on minimalist aesthetics, luxury textures, and sustainable packaging. We crafted a unique typographic language and materials guide that elevates their premium market position.",
    coverType: "image",
    coverSrc: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789827318/hero_image__vuc0qt.png",
    coverPoster: "video/640x360_stone-geometry-banner.webp",
    badgeColor: "#333333",
    gallery: [
      {
        type: "image",
        src: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789827321/image-gen-4_20260826-054357_1_bwhccj.png",
        width: 1280,
        height: 722,
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789827319/image-gen-2_20260826-054350_dxfqbu.png",
        width: 500,
        height: 500,
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789827319/image-gen-3_20260826-054354_zbquxd.png",
        width: 1280,
        height: 722,
      },
      {
        type: "video",
        src: "https://res.cloudinary.com/daoju0r3c/video/upload/v1789827310/Create_a_premium_realistic_c_qrzpbp.mp4",
        poster: "video/640x360_stone-geometry-banner.webp",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789827315/image-gen-5_20260826-054401_3_pgbvsk.png",
        width: 500,
        height: 500,
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789827311/image-gen-1_20260826-054347_xtsaj9.png",
        width: 1280,
        height: 722,
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789827312/d83d0eff-a044-4150-a34b-6325c531c3ae_smflkh.png",
        width: 500,
        height: 500,
      },
    ],
  },

  {
    id: "project-16",
    title: "Pallavi Foundation",
    category: "Brand Identity",
    description:
      "Madhuram - crafted, not advertised.Not everything we do is explained.Want to see what we create?Scroll.",
    coverType: "image",
    coverSrc: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789827507/hero_image_4_iyow2p.png",
    badgeColor: "#222222",
    gallery: [
      {
        type: "image",
        src: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789827506/Copy_of_bb_website_content_10_gi8rrp.png",
        width: 1280,
        height: 722,
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789827505/Copy_of_bb_website_content_11_vmft5y.png",
        width: 500,
        height: 500,
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789827504/Copy_of_bb_website_content_12_xhwfsc.png",
        width: 1280,
        height: 722,
      },
      {
        type: "video",
        src: "https://res.cloudinary.com/daoju0r3c/video/upload/v1789827422/Create_a_smooth_premium_image_tnehaf.mp4",
        poster: "https://res.cloudinary.com/daoju0r3c/video/upload/v1789827422/Create_a_smooth_premium_image_tnehaf.mp4",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789827417/Copy_of_bb_website_content_13_ibwtk0.png",
        width: 500,
        height: 500,
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789827417/Copy_of_bb_website_content_14_knhjkp.png",
        width: 1280,
        height: 722,
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789827416/Copy_of_bb_website_content_15_xjarwp.png",
        width: 500,
        height: 500,
      },
    ],
  },
  {
    id: "project-17",
    title: "Valdaria",
    category: "Web Design / UX Design",
    description:
      "An immersive digital flagship experience for luxury Swiss timepiece watchmaker Chronos. We developed a fluid 3D interaction layer and refined typographic grid system that translates physical craftsmanship into a sophisticated digital touchpoint.",
    coverType: "image",
    coverSrc: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789827668/hero_image__pybeyx.png",
    badgeColor: "#222222",
    gallery: [
      {
        type: "image",
        src: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789828380/sv4_mqw10t.png",
        width: 1500,
        height: 1000,
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789827659/Copy_of_bb_website_content_32_a9xhys.png",
        width: 500,
        height: 500,
      },
      {
        type: "video",
        src: "https://res.cloudinary.com/daoju0r3c/video/upload/v1789827669/create_a_video_for_all_these_j_yq9zpm.mp4",
        poster: "video/640x360_bw-geometry-banner.webp",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789828489/sv3_qye5va.png",
        width: 1280,
        height: 843,
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789827659/Copy_of_bb_website_content_31_huk3zk.png",
        width: 500,
        height: 500,
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789828492/sv1_wyuqkh.png",
        width: 1280,
        height: 843,
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789828491/sv2_jlfm3e.png",
        width: 500,
        height: 500,
      },
    ],
  },
  {
    id: "project-18",
    title: "Prisha Designs",
    category: "Brand Identity",
    description:  
      "Mosu-design-studio BESPOKE - crafted, not advertised.Not everything we do is explained.Want to see what we create?Scroll.",
    coverType: "image",
    coverSrc:"https://res.cloudinary.com/daoju0r3c/image/upload/v1789828822/hero_image_kagne0.png",
    badgeColor: "#222222",
    gallery: [
      {
        type: "image",
        src: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789828719/Copy_of_bb_website_content_18_jyxwjh.png",
        width: 1280,
        height: 722,
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789828721/Copy_of_bb_website_content_19_qf9e3m.png",
        width: 500,
        height: 500,
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789828721/Copy_of_bb_website_content_20_w9alqp.png",
        width: 1280,
        height: 722,
      },
      {
        type: "video",
        src: "https://res.cloudinary.com/daoju0r3c/video/upload/v1789828824/Video-15931_zokp84.mp4",
        poster: "video/640x360_stone-geometry-banner.webp",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789828723/Copy_of_bb_website_content_21_krwcas.png",
        width: 500,
        height: 500,
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789828820/Copy_of_bb_website_content_22_blj3hu.png",
        width: 1280,
        height: 722,
      },
      {
        type: "video",
        src: "https://res.cloudinary.com/daoju0r3c/video/upload/v1789828762/19.Reel_f9qkoc.mp4",
        width: 500,
        height: 500,
      },
      {
        type: "video",
        src: "https://res.cloudinary.com/daoju0r3c/video/upload/v1789828825/Video-70649_imp9sr.mp4",
        width: 1280,
        height: 843,
      },
    ],
  },

  {
    id: "project-19",
    title: "Shivdi Cha Raja",
    category: "Brand Identity",
    description:  
      "Mosu-design-studio BESPOKE - crafted, not advertised.Not everything we do is explained.Want to see what we create?Scroll.",
    coverType: "image",
    coverSrc:"https://res.cloudinary.com/daoju0r3c/image/upload/v1789829764/hero_image__zgws70.png",
    badgeColor: "#222222",
    gallery: [
      {
        type: "image",
        src: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789829765/Static1_wfuqlo.png",
        width: 1280,
        height: 722,
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789829756/S5_gu3gb8.jpg",
        width: 500,
        height: 500,
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789829764/hero_image__zgws70.png",
        width: 1280,
        height: 722,
      },
      {
        type: "video",
        src: "https://res.cloudinary.com/daoju0r3c/video/upload/v1789829780/reel1_1_sr3soz.mp4",
        poster: "video/640x360_stone-geometry-banner.webp",
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789829762/Static3_xhc4og.png",
        width: 500,
        height: 500,
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789829756/S5_gu3gb8.jpg",
        width: 1280,
        height: 722,
      },
      {
        type: "image",
        src: "https://res.cloudinary.com/daoju0r3c/image/upload/v1789829762/Static3_xhc4og.png",
        width: 500,
        height: 500,
      },
      {
        type: "video",
        src: "https://res.cloudinary.com/daoju0r3c/video/upload/v1789829780/reel1_1_sr3soz.mp4",
        width: 1280,
        height: 843,
      },
    ],
  },

  {
    id: "project-20",
    title: "The Content Team",
    category: "Brand Identity",
    description:  
      "Mosu-design-studio BESPOKE - crafted, not advertised.Not everything we do is explained.Want to see what we create?Scroll.",
    coverType: "image",
    coverSrc:"https://res.cloudinary.com/daoju0r3c/image/upload/v1789830523/hero_image__x0d3uu.png",
    badgeColor: "#222222",
    gallery: [
      {
        type: "video",
        src: "https://res.cloudinary.com/daoju0r3c/video/upload/v1789830524/POV-_Rajeev_sir_joins_a_trend_and_instantly_makes_it_better._.._Rajeev_Khandelwal_Rajeev_Kh_s8wp1r.mp4",
        width: 1280,
        height: 722,
      },
      {
        type: "video",
        src: "https://res.cloudinary.com/daoju0r3c/video/upload/v1789830560/BTS_Music_Ka_Mahol_090626_V4_1_xtui0t.mp4",
        width: 500,
        height: 500,
      },
      {
        type: "video",
        src: "https://res.cloudinary.com/daoju0r3c/video/upload/v1789830563/IMG_8020_avpfvv.mov",
        width: 1280,
        height: 722,
      },
      {
        type: "video",
        src: "https://res.cloudinary.com/daoju0r3c/video/upload/v1789830571/Rajeev_Helping_030626_V2_rmp39k.mp4",
        poster: "video/640x360_stone-geometry-banner.webp",
      },
      {
        type: "video",
        src: "https://res.cloudinary.com/daoju0r3c/video/upload/v1789830576/TCT_BTS_Reel_Video_V2_zxb0f1.mp4",
        width: 500,
        height: 500,
      },
      {
        type: "video",
        src: "https://res.cloudinary.com/daoju0r3c/video/upload/v1789830524/POV-_Rajeev_sir_joins_a_trend_and_instantly_makes_it_better._.._Rajeev_Khandelwal_Rajeev_Kh_s8wp1r.mp4",
        width: 1280,
        height: 722,
      },
      {
        type: "video",
        src: "https://res.cloudinary.com/daoju0r3c/video/upload/v1789830560/BTS_Music_Ka_Mahol_090626_V4_1_xtui0t.mp4",
        width: 500,
        height: 500,
      },
      {
        type: "video",
        src: "https://res.cloudinary.com/daoju0r3c/video/upload/v1789830563/IMG_8020_avpfvv.mov",
        width: 1280,
        height: 722,
      },
    ],
  },
];
