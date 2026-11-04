'use client';

import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';

export default function HeroSection() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 0.72], [0, 220]);
  const scale = useTransform(scrollYProgress, [0, 0.72], [1, 0.88]);
  const opacity = useTransform(scrollYProgress, [0, 0.72], [1, 0]);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="hero panel" ref={heroRef}>
      <div className="hero-note">
        <img className="logo-rune" src="/images/Mergio%20M%20wei%C3%9F.png" alt="" />
        <span className="hero-note-copy">
          <strong>Persönlicher Ansprechpartner statt anonymer Verkaufsplattform.</strong>
          <span>12.400+ Unternehmen im Netzwerk.</span>
        </span>
      </div>

      <div className="hero-title">
        Provisionsfreie Nachfolge
        <br />
        <span>für Ihr Unternehmen</span>
        <br />
        finden.
      </div>

      <div className="hero-visual">
        <motion.div
          className="hero-word"
          aria-label="MERGIU"
          style={{
            y: shouldReduceMotion ? 0 : y,
            scale: shouldReduceMotion ? 1 : scale,
            opacity: shouldReduceMotion ? 1 : opacity,
          }}
        >
          {['M', 'E', 'R', 'G', 'I', 'U'].map((letter) => (
            <span className={`letter-${letter.toLowerCase()}`} key={letter}>
              {letter}
            </span>
          ))}
        </motion.div>
        <div className="orb orb-a" />
        <div className="orb orb-b" />
      </div>

      <div className="scroll">
        mehr erfahren <b aria-hidden="true">↓</b>
      </div>
    </section>
  );
}
