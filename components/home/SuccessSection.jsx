'use client';

import Link from 'next/link';
import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import ScrollTextReveal from './ScrollTextReveal';

const headingLines = [
  'Die Zukunft Ihres Unternehmens',
  'beginnt mit uns.',
];

export default function SuccessSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 80%', 'start 10%'],
  });
  const opacity = useTransform(scrollYProgress, [0.75, 1], [0.9, 1]);
  const y = useTransform(scrollYProgress, [0.75, 1], [10, 0]);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="success panel" ref={sectionRef}>
      <div className="success-overlay">
        <ScrollTextReveal as="h2" className="success-title" lines={headingLines} />
        <motion.div
          className="success-cta-motion"
          style={{
            opacity: shouldReduceMotion ? 1 : opacity,
            y: shouldReduceMotion ? 0 : y,
          }}
        >
          <Link className="button success-button" href="/buchung/">
            Kontakt aufnehmen <span aria-hidden="true">↗</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
