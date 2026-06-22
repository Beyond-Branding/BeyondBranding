"use client";

import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useMemo, useRef } from "react";
import type React from "react";

import { useLenis } from "@/components/common/LenisContext";
import {
  bindMxdMenuGsap,
  type MxdMenuGsapElements,
} from "@/lib/template/mxdMenuGsap";

const N_HEADER = 3;
const N_MAIN_SPANS = 12;
const N_CONTACT = 8;
const N_FOOTER = 4;

function compact<T>(arr: (T | null | undefined)[]): T[] {
  return arr.filter((x): x is T => x != null);
}

function collectElements(
  nav: HTMLElement,
  toggle: HTMLElement,
  hamburger: HTMLElement | null,
  refs: UseMxdMenuGsapRefs,
): MxdMenuGsapElements | null {
  const {
    backdrop,
    overlay,
    content,
    mediaWrapper,
    headerSplitTargets,
    mainMenuLinkSpans,
    contactAnchors,
    contactRevealTargets,
    footerSplitTargets,
  } = refs;

  if (!backdrop.current || !overlay.current || !content.current) {
    return null;
  }

  const headerEls = compact(headerSplitTargets.current);
  const mainSpans = compact(mainMenuLinkSpans.current);
  const contacts = compact(contactAnchors.current);
  const contactRevealEls = compact(contactRevealTargets.current);
  const footers = compact(footerSplitTargets.current);

  return {
    nav,
    toggle,
    backdrop: backdrop.current,
    overlay: overlay.current,
    content: content.current,
    mediaWrapper: mediaWrapper.current,
    hamburger,
    headerSplitElements: headerEls,
    mainMenuLinkSpans: mainSpans,
    contactAnchors: contacts,
    contactRevealTargets: contactRevealEls,
    footerSplitElements: footers,
  };
}

export type UseMxdMenuGsapRefs = {
  backdrop: React.RefObject<HTMLDivElement | null>;
  overlay: React.RefObject<HTMLDivElement | null>;
  content: React.RefObject<HTMLDivElement | null>;
  mediaWrapper: React.RefObject<HTMLDivElement | null>;
  headerSplitTargets: React.MutableRefObject<(HTMLElement | null)[]>;
  mainMenuLinkSpans: React.MutableRefObject<(HTMLElement | null)[]>;
  contactAnchors: React.MutableRefObject<(HTMLElement | null)[]>;
  contactRevealTargets: React.MutableRefObject<(HTMLElement | null)[]>;
  footerSplitTargets: React.MutableRefObject<(HTMLElement | null)[]>;
};

export function useMxdMenuGsapRefs(): UseMxdMenuGsapRefs {
  const backdrop = useRef<HTMLDivElement | null>(null);
  const overlay = useRef<HTMLDivElement | null>(null);
  const content = useRef<HTMLDivElement | null>(null);
  const mediaWrapper = useRef<HTMLDivElement | null>(null);
  const headerSplitTargets = useRef<(HTMLElement | null)[]>([]);
  const mainMenuLinkSpans = useRef<(HTMLElement | null)[]>([]);
  const contactAnchors = useRef<(HTMLElement | null)[]>([]);
  const contactRevealTargets = useRef<(HTMLElement | null)[]>([]);
  const footerSplitTargets = useRef<(HTMLElement | null)[]>([]);

  return useMemo(
    () => ({
      backdrop,
      overlay,
      content,
      mediaWrapper,
      headerSplitTargets,
      mainMenuLinkSpans,
      contactAnchors,
      contactRevealTargets,
      footerSplitTargets,
    }),
    [
      backdrop,
      overlay,
      content,
      mediaWrapper,
      headerSplitTargets,
      mainMenuLinkSpans,
      contactAnchors,
      contactRevealTargets,
      footerSplitTargets,
    ],
  );
}

/**
 * Binds GSAP menu using explicit refs from `Nav` plus `navNode` / `toggleNode` /
 * `hamburgerNode`. Closes the menu when the route changes.
 */
export function useMxdMenuGsap(
  navNode: HTMLElement | null,
  toggleNode: HTMLElement | null,
  hamburgerNode: HTMLElement | null,
  registerMenuReset: (fn: (() => void) | null) => void,
  refs: UseMxdMenuGsapRefs,
): void {
  const lenis = useLenis();
  const pathname = usePathname();
  const resetMenuRef = useRef<(() => void) | null>(null);
  const closeMenuAnimatedRef = useRef<(() => void) | null>(null);

  useLayoutEffect(() => {
    registerMenuReset(null);
    if (!navNode || !toggleNode) return;

    const collected = collectElements(navNode, toggleNode, hamburgerNode, refs);
    if (!collected) return;
    let disposed = false;
    let disposeFn: (() => void) | null = null;

    const bindWhenFontsReady = async () => {
      try {
        if (typeof document !== "undefined" && "fonts" in document) {
          await document.fonts.ready;
        }
      } catch {
        // If the browser does not support the Font Loading API, continue safely.
      }
      if (disposed) return;

      const { dispose, resetMenu, closeMenuAnimated } = bindMxdMenuGsap(
        collected,
        lenis,
      );
      disposeFn = dispose;
      resetMenuRef.current = resetMenu;
      closeMenuAnimatedRef.current = closeMenuAnimated;
      registerMenuReset(resetMenu);
    };
    void bindWhenFontsReady();

    return () => {
      disposed = true;
      disposeFn?.();
      resetMenuRef.current = null;
      closeMenuAnimatedRef.current = null;
      registerMenuReset(null);
      lenis?.start();
    };
  }, [navNode, toggleNode, hamburgerNode, lenis, registerMenuReset, refs]);

  const isFirstPathRef = useRef(true);
  useEffect(() => {
    if (isFirstPathRef.current) {
      isFirstPathRef.current = false;
      return;
    }
    closeMenuAnimatedRef.current?.();
  }, [pathname]);
}
