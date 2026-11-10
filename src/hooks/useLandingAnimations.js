import { useEffect } from 'react';

export function useLandingAnimations() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!prefersReducedMotion && 'IntersectionObserver' in window) {
      document.documentElement.classList.add('js-ready');
    }

    const heroItems = document.querySelectorAll('.hero-item');
    if (prefersReducedMotion) {
      heroItems.forEach((el) => el.classList.add('hero-shown'));
    } else {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => heroItems.forEach((el) => el.classList.add('hero-shown')));
      });
    }

    const heroSection = document.getElementById('hero');
    let heroObserver = null;
    if (heroSection && !prefersReducedMotion && 'IntersectionObserver' in window && heroItems.length > 0) {
      heroObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              heroItems.forEach((el) => el.classList.add('hero-shown'));
            } else {
              const exitedTop = entry.boundingClientRect.top < 0;
              heroItems.forEach((el) => {
                el.classList.toggle('from-top', exitedTop);
                el.classList.remove('hero-shown');
              });
            }
          });
        },
        { rootMargin: '40px 0px 40px 0px', threshold: 0 }
      );
      heroObserver.observe(heroSection);
    }

    const revealElements = document.querySelectorAll(
      '.reveal-element, .reveal-left, .reveal-right, .reveal-scale'
    );

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      revealElements.forEach((el) => {
        el.classList.add('is-revealed');
        el.setAttribute('data-revealed', 'true');
      });
      return () => {
        if (heroObserver) heroObserver.disconnect();
      };
    }

    const revealEnterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            entry.target.setAttribute('data-revealed', 'true');
          }
        });
      },
      { root: null, rootMargin: '-25px 0px -25px 0px', threshold: 0.06 }
    );

    const revealResetObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            const exitedTop = entry.boundingClientRect.top < 0;
            entry.target.classList.toggle('from-top', exitedTop);
            entry.target.classList.remove('is-revealed');
            entry.target.removeAttribute('data-revealed');
          }
        });
      },
      { root: null, rootMargin: '50px 0px 50px 0px', threshold: 0 }
    );

    revealElements.forEach((el) => {
      revealEnterObserver.observe(el);
      revealResetObserver.observe(el);
    });

    return () => {
      if (heroObserver) heroObserver.disconnect();
      revealEnterObserver.disconnect();
      revealResetObserver.disconnect();
    };
  }, []);
}
