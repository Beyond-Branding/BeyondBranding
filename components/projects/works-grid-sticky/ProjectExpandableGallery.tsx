"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import BlurSection from "@/components/animations/BlurSection";
import CommonLoadAnimation, {
  CommonLoadFade,
} from "@/components/animations/CommonLoadAnimation";
import AutoplayLoopVideo from "@/components/media/AutoplayLoopVideo";
import { expandableProjectsData } from "@/data/expandableProjects";

const getAspectRatioHeightWidth = (media: any) => {
  if (media.type === "video") {
    return 9 / 16; // 16:9 landscape video height/width ratio
  }
  if (media.width && media.height) {
    return media.height / media.width;
  }
  return 1.0;
};

export default function ProjectExpandableGallery() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [overlayMousePos, setOverlayMousePos] = useState({ x: 0, y: 0 });
  const [isNearCorner, setIsNearCorner] = useState(false);
  const [columnCount, setColumnCount] = useState(4);
  const cardRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const activeProject = expandableProjectsData.find((p) => p.id === activeId);

  // Disable scroll when the full-page drawer is active
  useEffect(() => {
    if (activeId) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeId]);

  // Listen for Escape key to close the drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveId(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Update columns count dynamically on window resize
  useEffect(() => {
    const updateColumns = () => {
      const w = window.innerWidth;
      if (w < 768) {
        setColumnCount(1);
      } else if (w < 1200) {
        setColumnCount(2);
      } else {
        setColumnCount(4);
      }
    };
    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, id: string) => {
    if (cardRefs.current[id]) {
      const rect = cardRefs.current[id]!.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const handleOverlayMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const x = e.clientX;
    const y = e.clientY;
    setOverlayMousePos({ x, y });

    const threshold = 200; // px corner active zone
    const w = window.innerWidth;
    const h = window.innerHeight;

    const nearTopLeft = x < threshold && y < threshold;
    const nearTopRight = x > w - threshold && y < threshold;
    const nearBottomLeft = x < threshold && y > h - threshold;
    const nearBottomRight = x > w - threshold && y > h - threshold;

    setIsNearCorner(nearTopLeft || nearTopRight || nearBottomLeft || nearBottomRight);
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isNearCorner) {
      setActiveId(null);
    }
  };

  // Split gallery items into columns dynamically based on column count
  const columns = Array.from({ length: columnCount }, () => [] as typeof expandableProjectsData[0]["gallery"]);
  if (activeProject) {
    const items = activeProject.gallery;
    if (columnCount === 4) {
      // Desktop custom layout:
      // Column 1 (2 items): index 0, 4 (equal size)
      // Column 2 (1 item): index 1 (long grid)
      // Column 3 (2 items): index 2, 5 (equal size)
      // Column 4 (2 items): index 3, 6 (equal size)
      const getMedia = (index: number) => {
        if (!items || items.length === 0) return null;
        return items[index % items.length];
      };

      const m0 = getMedia(0);
      const m4 = getMedia(4);
      const m1 = getMedia(1);
      const m2 = getMedia(2);
      const m5 = getMedia(5);
      const m3 = getMedia(3);
      const m6 = getMedia(6);

      if (m0 && m4) columns[0].push(m0, m4);
      if (m1) columns[1].push(m1);
      if (m2 && m5) columns[2].push(m2, m5);
      if (m3 && m6) columns[3].push(m3, m6);
    } else {
      // Responsive fallback (for 1 or 2 columns): distribute evenly
      items.forEach((media, idx) => {
        columns[idx % columnCount].push(media);
      });
    }
  }

  return (
    <CommonLoadAnimation>
      <>
        <BlurSection className="mxd-expandable-section-fullwidth">
          <CommonLoadFade index={0}>
            <div className="mxd-portfolio-expandable-full grid-bleed">
              <div className="mxd-portfolio-expandable-grid">
                {expandableProjectsData.map((project) => (
                  <div
                    key={project.id}
                    ref={(el) => {
                      cardRefs.current[project.id] = el;
                    }}
                    className="mxd-portfolio-grid-item"
                    onMouseEnter={() => setHoveredId(project.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    onMouseMove={(e) => handleMouseMove(e, project.id)}
                    onClick={() => setActiveId(project.id)}
                  >
                    <div className="mxd-expandable-card-bleed">
                      {/* Cover Media */}
                      <div className="mxd-expandable-card-bleed__media">
                        {project.coverType === "video" ? (
                          <AutoplayLoopVideo
                            className="mxd-expandable-card-bleed__video"
                            poster={project.coverPoster}
                            sources={[
                              {
                                src: project.coverSrc,
                                type: "video/mp4",
                              },
                            ]}
                          />
                        ) : (
                          <Image
                            className="mxd-expandable-card-bleed__img"
                            src={project.coverSrc}
                            alt={project.title}
                            width={1280}
                            height={800}
                            priority
                          />
                        )}
                        <div className="mxd-expandable-card-bleed__overlay" />
                      </div>

                      {/* Card Floating Info */}
                      <div className="mxd-expandable-card-bleed__info">
                        <h3 className="mxd-expandable-card-bleed__title">
                          {project.title}{" "}
                          <span className="mxd-expandable-card-bleed__plus">
                            +
                          </span>
                        </h3>
                        <p className="mxd-expandable-card-bleed__category">
                          {project.category}
                        </p>
                      </div>

                      {/* Hover "Expand" Follow Cursor Badge */}
                      <AnimatePresence>
                        {hoveredId === project.id && (
                          <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                            transition={{
                              type: "spring",
                              stiffness: 350,
                              damping: 25,
                            }}
                            className="mxd-expand-cursor-badge"
                            style={{
                              left: mousePos.x,
                              top: mousePos.y,
                              backgroundColor: project.badgeColor || "#2b2b2b",
                            }}
                          >
                            <span>Expand</span>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CommonLoadFade>
        </BlurSection>

        {/* Full-Page Drawer Overlay */}
        <AnimatePresence>
          {activeId && activeProject && (
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{
                type: "spring",
                damping: 38,
                stiffness: 220,
              }}
              className="mxd-fullscreen-drawer-overlay"
              style={{ cursor: isNearCorner ? "none" : "default" }}
              onMouseMove={handleOverlayMouseMove}
              onClick={handleOverlayClick}
            >
              {/* Floating Close Follow Cursor Badge (only shows up when near a corner) */}
              <AnimatePresence>
                {isNearCorner && (
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 25,
                    }}
                    className="mxd-close-cursor-badge"
                    style={{
                      position: "fixed",
                      left: overlayMousePos.x,
                      top: overlayMousePos.y,
                      pointerEvents: "none",
                      zIndex: 10000000,
                    }}
                  >
                    <span>Close</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Standard text elements for close in the top corners as a backup / visual clue */}
              <div className="mxd-fullscreen-drawer-top-bar">
                <button
                  className="mxd-fullscreen-drawer-close-text-only"
                  onClick={() => setActiveId(null)}
                >
                  <span className="close-text">CLOSE</span>
                  <span className="close-icon-wrap">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="close-svg"
                    >
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </span>
                </button>
              </div>

              <div className="mxd-fullscreen-drawer-content">
                {/* Fixed Height Grid Wrapper to fit all in one page height */}
                <div className="mxd-fullscreen-gallery-grid-wrapper">
                  <div className="mxd-fullscreen-gallery-grid">
                    {columns.map((colItems, colIdx) => (
                      <div key={colIdx} className="mxd-fullscreen-gallery-column">
                        {colItems.map((media, itemIdx) => {
                          const aspect = getAspectRatioHeightWidth(media);
                          return (
                            <div
                              key={itemIdx}
                              className="mxd-fullscreen-gallery-item"
                              style={{ flex: `${aspect} 1 0%` }}
                            >
                              {media.type === "video" ? (
                                <AutoplayLoopVideo
                                  className="mxd-fullscreen-gallery-video"
                                  poster={media.poster}
                                  sources={[
                                    {
                                      src: media.src,
                                      type: "video/mp4",
                                    },
                                  ]}
                                />
                              ) : (
                                <Image
                                  className="mxd-fullscreen-gallery-image"
                                  src={media.src}
                                  alt={`${activeProject.title} detail ${colIdx}-${itemIdx}`}
                                  width={media.width || 800}
                                  height={media.height || 600}
                                  priority={colIdx === 0 && itemIdx === 0}
                                />
                              )}
                            </div>
                          );
                        })}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Metadata block (Title left, Description right - scrollable) */}
                <div className="mxd-fullscreen-drawer-meta">
                  <div className="mxd-meta-left">
                    <h2 className="mxd-meta-title">{activeProject.title}</h2>
                    <p className="mxd-meta-category">
                      {activeProject.category}
                    </p>
                  </div>
                  <div className="mxd-meta-right">
                    <p className="mxd-meta-description">
                      {activeProject.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    </CommonLoadAnimation>
  );
}
