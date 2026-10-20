"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** Progressive enhancement: content starts visible and never waits for JS. */
export function SiteMotion() {
  const pathname = usePathname();
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (preference.matches || !window.IntersectionObserver || !Element.prototype.animate) return;
    const animations = new Set<Animation>();
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        observer.unobserve(entry.target);
        if (preference.matches || entry.target.contains(document.activeElement)) continue;
        const animation = entry.target.animate(
          [{ opacity: 0.65, transform: "translateY(12px)" }, { opacity: 1, transform: "none" }],
          { duration: 380, easing: "cubic-bezier(0.16, 1, 0.3, 1)", id: "section-arrival" },
        );
        animations.add(animation);
        animation.onfinish = () => animations.delete(animation);
        animation.oncancel = () => animations.delete(animation);
      }
    }, { threshold: 0, rootMargin: "0px 0px -32px 0px" });
    document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((element) => {
      // Never replay the first screen, a restored scroll position, or an anchor.
      if (element.getBoundingClientRect().top >= window.innerHeight) observer.observe(element);
    });
    function stop() {
      observer.disconnect();
      animations.forEach((animation) => animation.cancel());
      animations.clear();
    }
    function focus(event: FocusEvent) {
      // Keyboard navigation should land on a stable target immediately.
      animations.forEach((animation) => {
        const target = (animation.effect as KeyframeEffect | null)?.target;
        if (event.target instanceof Node && target instanceof Element && target.contains(event.target)) animation.cancel();
      });
    }
    preference.addEventListener("change", stop);
    document.addEventListener("focusin", focus);
    return () => {
      stop();
      preference.removeEventListener("change", stop);
      document.removeEventListener("focusin", focus);
    };
  }, [pathname]);
  return null;
}
