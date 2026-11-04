'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useReducedMotion } from 'motion/react';
import styles from './booking.module.css';

const PANEL_COUNT = 4;
const panelWidth = () => window.innerWidth - window.innerWidth * 0.079;

export default function BookingSlider({ children }) {
  const sliderRef = useRef(null);
  const currentRef = useRef(0);
  const positionRef = useRef(0);
  const targetRef = useRef(0);
  const frameRef = useRef(null);
  const [activePanel, setActivePanel] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return undefined;

    const animate = () => {
      positionRef.current += (targetRef.current - positionRef.current) * 0.095;
      if (Math.abs(targetRef.current - positionRef.current) < 0.1) {
        positionRef.current = targetRef.current;
      }
      slider.style.transform = `translate3d(${-positionRef.current}px, 0, 0)`;
      setActivePanel(Math.round(positionRef.current / panelWidth()));
      if (positionRef.current !== targetRef.current) {
        frameRef.current = requestAnimationFrame(animate);
      } else {
        frameRef.current = null;
      }
    };

    const moveTo = (offset) => {
      if (window.innerWidth <= 900) return;
      targetRef.current = Math.max(0, Math.min((PANEL_COUNT - 1) * panelWidth(), offset));
      if (shouldReduceMotion) {
        positionRef.current = targetRef.current;
        currentRef.current = Math.round(positionRef.current / panelWidth());
        slider.style.transform = `translate3d(${-positionRef.current}px, 0, 0)`;
        setActivePanel(currentRef.current);
        return;
      }
      if (!frameRef.current) frameRef.current = requestAnimationFrame(animate);
    };

    const goTo = (index) => {
      if (window.innerWidth <= 900) return;
      currentRef.current = Math.max(0, Math.min(PANEL_COUNT - 1, index));
      moveTo(currentRef.current * panelWidth());
    };

    const onWheel = (event) => {
      if (window.innerWidth <= 900) return;
      event.preventDefault();
      const delta = event.deltaX || event.deltaY;
      if (Math.abs(delta) >= 1) moveTo(targetRef.current + delta * 1.15);
    };

    const onKeyDown = (event) => {
      if (event.target instanceof HTMLElement && event.target.closest('input, textarea, button, select')) return;
      const nearestPanel = Math.round(targetRef.current / panelWidth());
      if (event.key === 'ArrowRight' || event.key === 'PageDown') goTo(nearestPanel + 1);
      if (event.key === 'ArrowLeft' || event.key === 'PageUp') goTo(nearestPanel - 1);
    };

    const onAnchorClick = (event) => {
      const link = event.target instanceof Element ? event.target.closest('a[href^="#slide-"]') : null;
      if (!link || window.innerWidth <= 900) return;
      event.preventDefault();
      goTo(Number(link.getAttribute('href').replace('#slide-', '')) - 1);
    };

    const onResize = () => {
      if (window.innerWidth <= 900) {
        currentRef.current = 0;
        positionRef.current = 0;
        targetRef.current = 0;
        if (frameRef.current) cancelAnimationFrame(frameRef.current);
        frameRef.current = null;
        slider.style.transform = 'none';
        setActivePanel(0);
        return;
      }
      positionRef.current = currentRef.current * panelWidth();
      targetRef.current = positionRef.current;
      slider.style.transform = `translate3d(${-positionRef.current}px, 0, 0)`;
    };

    slider.style.transition = 'none';
    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('resize', onResize);
    slider.addEventListener('click', onAnchorClick);
    return () => {
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('resize', onResize);
      slider.removeEventListener('click', onAnchorClick);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [shouldReduceMotion]);

  return (
    <div className={styles.experience}>
      <aside className={styles.rail}>
        <Link className={styles.railLogo} href="/" aria-label="MERGIU – Startseite">
          <img src="/images/logo%20wei%C3%9F%20mergiu.png" alt="MERGIU" />
        </Link>
        <div className={styles.railMark} aria-hidden="true">
          <img src="/images/Mergio%20M%20wei%C3%9F.png" alt="" />
        </div>
        <p>Finden Sie noch heute den Nachfolger Ihres Unternehmens.</p>
      </aside>
      <main className={styles.slider} ref={sliderRef}>{children}</main>
      <div className={styles.slideCount} aria-label={`Seite ${activePanel + 1} von ${PANEL_COUNT}`}>
        <span>{String(activePanel + 1).padStart(2, '0')}</span><i /><span>04</span>
      </div>
    </div>
  );
}
