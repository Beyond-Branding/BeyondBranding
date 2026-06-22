"use client";

import Link from "next/link";
import { useRef } from "react";
import ThemeSwitcher from "@/components/headers/ThemeSwitcher";
import TextScramble from "@/components/animations/TextScramble";
import { useLenis } from "@/components/common/LenisContext";
import { useHeaderScrollHidden } from "@/hooks/useHeaderScrollHidden";
import CommonLoadAnimation, {
  CommonLoadFade,
} from "@/components/animations/CommonLoadAnimation";
import { usePathname } from "next/navigation";
import Image from "next/image";

type Header1Props = {
  initialTheme: "light" | "dark";
};

const isPreviewHome = (pathname: string) =>
  pathname === "/" || pathname === "/preview";

export default function Header1({ initialTheme }: Header1Props) {
  const headerRef = useRef<HTMLElement>(null);
  const lenis = useLenis();
  useHeaderScrollHidden(headerRef, lenis);
  const pathname = usePathname();
  const onPurchaseHome = isPreviewHome(pathname);
  const isPermanent =
    pathname === "/index-branding-studio" ||
    pathname === "/index-digital-agency" ||
    pathname === "/index-web-studio" ||
    pathname === "/index-freelancer-portfolio" ||
    pathname === "/index-design-studio" ||
    pathname === "/works-default" ||
    pathname === "/services" ||
    pathname === "/team" ||
    pathname === "/blog-creative";
  return (
    <CommonLoadAnimation>
      <header
        id="header"
        ref={headerRef}
        className={`mxd-header ${isPermanent ? "mxd-header-permanent" : ""}`}
      >
        <CommonLoadFade index={0}>
          <div className="mxd-header__logo loading-fade">
            <Link className="mxd-logo" href={`/`}>
              <Image
  src="/BBlogo.png"
  alt="Beyond Branding"
  width={42}
  height={42}
  className="mxd-logo__image"
/>
              <div className="mxd-logo__text">
                <TextScramble className="mxd-scramble">Beyond</TextScramble>
                <TextScramble className="mxd-scramble">Branding</TextScramble>
              </div>
            </Link>
          </div>
        </CommonLoadFade>
        <CommonLoadFade index={1}>
          <div className="mxd-header__controls loading-fade">
            <Link
  className="btn mxd-header__link slide-right"
  href="/contact"
  aria-label="Contact"
>
  <span className="btn-caption">
    <TextScramble className="mxd-scramble">
      Contact
    </TextScramble>
  </span>
</Link>
            <ThemeSwitcher
              isPermanent={isPermanent}
              initialTheme={initialTheme}
            />
          </div>
        </CommonLoadFade>
      </header>
    </CommonLoadAnimation>
  );
}
