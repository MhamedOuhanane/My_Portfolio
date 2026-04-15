import { useState, useEffect, useRef, useCallback } from "react";

export const useInView = (options = {}) => {
  const { threshold = 0.1, rootMargin = "0px", triggerOnce = true } = options;
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  const callbackFn = useCallback(
    (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setIsInView(true);
        setHasAnimated(true);
      } else if (!triggerOnce) {
        setIsInView(false);
      }
    },
    [triggerOnce]
  );

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (triggerOnce && hasAnimated) return;

    const observer = new IntersectionObserver(callbackFn, {
      threshold,
      rootMargin,
    });

    observer.observe(node);
    return () => observer.disconnect();
  }, [callbackFn, threshold, rootMargin, triggerOnce, hasAnimated]);

  return [ref, isInView];
};
