'use client';

import { createContext, useContext, useEffect, useRef, ReactNode } from 'react';

interface SmoothScrollContextType {
  lenis: unknown;
}

const SmoothScrollContext = createContext<SmoothScrollContextType>({ lenis: null });

export function useLenis() {
  return useContext(SmoothScrollContext);
}

interface Props {
  children: ReactNode;
}

export default function SmoothScrollProvider({ children }: Props) {
  const lenisRef = useRef<unknown>(null);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let lenis: any = null;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let gsapInstance: any = null;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let tickFn: ((time: number) => void) | null = null;

    const init = async () => {
      const LenisModule = await import('@studio-freight/lenis');
      const LenisClass = LenisModule.default;
      const gsapModule = await import('gsap');
      const ScrollTriggerModule = await import('gsap/ScrollTrigger');
      gsapInstance = gsapModule.default;
      const ScrollTrigger = ScrollTriggerModule.ScrollTrigger;

      gsapInstance.registerPlugin(ScrollTrigger);

      lenis = new LenisClass({
        duration: 0.8,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        wheelMultiplier: 1.4,
        touchMultiplier: 2,
      });

      lenisRef.current = lenis;

      lenis.on('scroll', ScrollTrigger.update);

      tickFn = (time: number) => {
        lenis?.raf(time * 1000);
      };
      gsapInstance.ticker.add(tickFn);
      gsapInstance.ticker.lagSmoothing(0);
    };

    init();

    return () => {
      if (gsapInstance && tickFn) gsapInstance.ticker.remove(tickFn);
      if (lenis) lenis.destroy();
    };
  }, []);

  return (
    <SmoothScrollContext.Provider value={{ lenis: lenisRef.current }}>
      {children}
    </SmoothScrollContext.Provider>
  );
}
