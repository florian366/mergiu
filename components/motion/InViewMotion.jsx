'use client';

import { Children, isValidElement, useEffect, useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'motion/react';

const hidden = (distance) => ({ opacity: 0, y: distance });
const visible = { opacity: 1, y: 0 };

/**
 * Progressive in-view motion for server-rendered content. The server and the
 * first client render are visible; animation is only armed after hydration.
 */
export default function InViewMotion({
  as = 'div',
  children,
  delay = 0,
  distance = 18,
  duration = 0.55,
  viewportAmount = 0.18,
  className,
  onFocusCapture,
  ...props
}) {
  const [ready, setReady] = useState(false);
  const [hasFocus, setHasFocus] = useState(false);
  const ref = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const MotionTag = motion[as] || motion.div;
  const isInView = useInView(ref, { once: true, amount: viewportAmount });
  const motionEnabled = ready && !shouldReduceMotion && !hasFocus;

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') setHasFocus(true);
    setReady(true);
  }, []);

  const revealOnFocus = (event) => {
    setHasFocus(true);
    onFocusCapture?.(event);
  };

  return (
    <MotionTag
      {...props}
      ref={ref}
      className={className}
      initial={false}
      variants={{ hidden: hidden(distance), visible }}
      animate={motionEnabled ? (isInView ? 'visible' : 'hidden') : 'visible'}
      transition={motionEnabled ? { duration, delay, ease: [0.22, 1, 0.36, 1] } : { duration: 0 }}
      onFocusCapture={revealOnFocus}
    >
      {children}
    </MotionTag>
  );
}

/** Adds a reveal only to top-level section blocks, leaving inline text alone. */
export function InViewSections({ children }) {
  return Children.map(children, (child, index) => {
    if (!isValidElement(child) || child.type !== 'section') return child;

    return (
      <InViewMotion key={child.key ?? index} as="div">
        {child}
      </InViewMotion>
    );
  });
}
