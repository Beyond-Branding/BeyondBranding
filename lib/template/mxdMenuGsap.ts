"use client";

import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText.js";
import type Lenis from "lenis";

gsap.registerPlugin(SplitText);

/** All DOM targets for menu GSAP — supplied via React refs (no `querySelector`). */
export type MxdMenuGsapElements = {
  nav: HTMLElement;
  toggle: HTMLElement;
  backdrop: HTMLElement;
  overlay: HTMLElement;
  content: HTMLElement;
  mediaWrapper: HTMLElement | null;
  hamburger: HTMLElement | null;
  headerSplitElements: HTMLElement[];
  mainMenuLinkSpans: HTMLElement[];
  contactAnchors: HTMLElement[];
  contactRevealTargets: HTMLElement[];
  footerSplitElements: HTMLElement[];
};

function splitAndHide(elements: HTMLElement[]): SplitText[] {
  if (!elements.length) return [];
  return elements.map((el) => {
    const split = SplitText.create(el, {
      type: "lines",
      mask: "lines",
      linesClass: "line",
      aria: "none",
    });
    gsap.set(split.lines, { y: "-114%" });
    return split;
  });
}

function flatLines(splits: SplitText[]): HTMLElement[] {
  return splits.flatMap((s) => s.lines);
}

export function bindMxdMenuGsap(
  el: MxdMenuGsapElements,
  lenis: Lenis | null,
): {
  resetMenu: () => void;
  closeMenuAnimated: () => void;
  dispose: () => void;
} {
  const {
    nav,
    toggle,
    backdrop: menuBackdrop,
    overlay: menuOverlay,
    content: menuOverlayContainer,
    mediaWrapper: menuMediaWrapper,
    hamburger: hamburgerIcon,
    headerSplitElements,
    mainMenuLinkSpans,
    contactAnchors,
    contactRevealTargets,
    footerSplitElements,
  } = el;

  const headerSplits = splitAndHide(headerSplitElements);
  const mainMenuSplits = splitAndHide(mainMenuLinkSpans);
  const footerSplits = splitAndHide(footerSplitElements);
  // Match legacy SplitText line-mask feel for contact column.
  gsap.set(contactAnchors, { display: "block", overflow: "hidden" });
  gsap.set(contactRevealTargets, { display: "inline-block", y: "-114%" });
  if (menuMediaWrapper) {
    gsap.set(menuMediaWrapper, { scale: 1.4 });
  }

  gsap.set(menuOverlay, {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
  });
  gsap.set(menuBackdrop, {
    background: "rgba(var(--base-rgb), 0)",
    backdropFilter: "blur(0px)",
  });
  gsap.set(menuOverlayContainer, { yPercent: -50 });

  let isMenuOpen = false;
  let isAnimating = false;
  let activeTimeline: gsap.core.Timeline | null = null;

  const killTimeline = () => {
    activeTimeline?.kill();
    activeTimeline = null;
  };

  const resetMenu = () => {
    killTimeline();
    gsap.set(menuOverlay, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
    });
    gsap.set(menuBackdrop, {
      background: "rgba(var(--base-rgb), 0)",
      backdropFilter: "blur(0px)",
    });
    gsap.set(menuOverlayContainer, { yPercent: -50 });
    if (menuMediaWrapper) {
      gsap.set(menuMediaWrapper, { scale: 1.4 });
    }

    flatLines([
      ...headerSplits,
      ...mainMenuSplits,
      ...footerSplits,
    ]).forEach((line) => gsap.set(line, { y: "-114%" }));
    gsap.set(contactRevealTargets, { display: "inline-block", y: "-114%" });

    hamburgerIcon?.classList.remove("active");

    isMenuOpen = false;
    isAnimating = false;
    lenis?.start();
  };

  const closeMenuAnimated = () => {
    if (!isMenuOpen || isAnimating) return;
    killTimeline();
    const tl = gsap.timeline({
      onStart: () => {
        isAnimating = true;
      },
      onComplete: () => {
        isAnimating = false;
        activeTimeline = null;
      },
    });
    activeTimeline = tl;

    hamburgerIcon?.classList.remove("active");
    tl.to(menuOverlay, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      duration: 1,
      ease: "hop",
    })
      .to(
        menuBackdrop,
        {
          background: "rgba(var(--base-rgb), 0)",
          backdropFilter: "blur(0px)",
          duration: 1,
          ease: "power2.in",
        },
        "<",
      )
      .to(
        menuOverlayContainer,
        {
          yPercent: -50,
          duration: 1,
          ease: "hop",
        },
        "<",
      )
      .call(() => {
        flatLines([
          ...headerSplits,
          ...mainMenuSplits,
          ...footerSplits,
        ]).forEach((line) => gsap.set(line, { y: "-114%" }));
        gsap.set(contactRevealTargets, { display: "inline-block", y: "-114%" });
        if (menuMediaWrapper) {
          gsap.set(menuMediaWrapper, { scale: 1.4 });
        }
        lenis?.start();
      });
    isMenuOpen = false;
  };

  const onToggleClick = (e: Event) => {
    e.preventDefault();
    if (isAnimating) return;

    killTimeline();
    const tl = gsap.timeline({
      onStart: () => {
        isAnimating = true;
      },
      onComplete: () => {
        isAnimating = false;
        activeTimeline = null;
      },
    });
    activeTimeline = tl;

    if (!isMenuOpen) {
      lenis?.stop();
      hamburgerIcon?.classList.add("active");
      const isMobile = window.matchMedia("(max-width: 1024px)").matches;

      tl.to(menuBackdrop, {
        background: isMobile
          ? "rgba(var(--base-rgb), 0.6)"
          : "rgba(var(--base-rgb), 0.8)",
        backdropFilter: isMobile ? "blur(6px)" : "blur(14px)",
        duration: 0.5,
        ease: "power2.out",
      })
        .to(
          menuOverlay,
          {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            duration: 1,
            ease: "hop",
          },
          "<",
        )
        .to(
          menuOverlayContainer,
          {
            yPercent: 0,
            duration: 1,
            ease: "hop",
          },
          "<",
        );

      if (menuMediaWrapper) {
        tl.to(
          menuMediaWrapper,
          {
            scale: 1,
            duration: 0.75,
            ease: "power2.out",
          },
          0.5,
        );
      }

      tl.to(
        footerSplits.flatMap((s) => s.lines),
        { y: "0%", stagger: -0.05, ease: "hop", duration: 0.75 },
        0.15,
      )
        .to(
          mainMenuSplits.flatMap((s) => s.lines),
          { y: "0%", stagger: -0.05, ease: "hop", duration: 0.75 },
          0.15,
        )
        .to(
          contactRevealTargets,
          { y: "0%", stagger: -0.05, ease: "hop", duration: 0.75 },
          0.15,
        )
        .to(
          headerSplits.flatMap((s) => s.lines),
          { y: "0%", stagger: -0.05, ease: "hop", duration: 0.75 },
          0.45,
        );

      isMenuOpen = true;
    } else {
      closeMenuAnimated();
    }
  };

  const onNavLinkClick = (e: MouseEvent) => {
    const target = e.target instanceof Element ? e.target : null;
    const anchor = target?.closest("a[href]");
    if (!anchor || !nav.contains(anchor)) return;
    const href = anchor.getAttribute("href");
    if (!href || href === "#0" || href.startsWith("#")) return;
    closeMenuAnimated();
  };

  toggle.addEventListener("click", onToggleClick);
  nav.addEventListener("click", onNavLinkClick);

  const dispose = () => {
    toggle.removeEventListener("click", onToggleClick);
    nav.removeEventListener("click", onNavLinkClick);
    killTimeline();
    [
      ...headerSplits,
      ...mainMenuSplits,
      ...footerSplits,
    ].forEach((s) => s.revert());
    lenis?.start();
  };

  return { resetMenu, closeMenuAnimated, dispose };
}
