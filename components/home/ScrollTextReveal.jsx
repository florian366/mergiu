'use client';

import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';

function RevealWord({ progress, index, total, word, mutedColor, activeColor }) {
  const color = useTransform(
    progress,
    [index / total, (index + 1) / total],
    [mutedColor, activeColor],
  );
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.span className="scroll-reveal-word" style={{ color: shouldReduceMotion ? activeColor : color }}>
      {word}
      {' '}
    </motion.span>
  );
}

export default function ScrollTextReveal({
  as: Tag = 'div',
  className,
  lines,
  activeColors,
  activeColor = '#f0f3f3',
  mutedColor = '#849196',
}) {
  const textRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: textRef,
    offset: ['start 80%', 'start 10%'],
  });
  const totalWords = lines.reduce((total, line) => total + line.split(/\s+/).length, 0);
  let wordIndex = 0;

  return (
    <Tag ref={textRef} className={className}>
      {lines.map((line, lineIndex) => (
        <span className="scroll-reveal-line" key={`${lineIndex}-${line}`}>
          {line.split(/\s+/).map((word) => {
            const index = wordIndex;
            wordIndex += 1;

            return (
              <RevealWord
                activeColor={activeColors?.[lineIndex] ?? activeColor}
                index={index}
                key={`${index}-${word}`}
                mutedColor={mutedColor}
                progress={scrollYProgress}
                total={totalWords}
                word={word}
              />
            );
          })}
        </span>
      ))}
    </Tag>
  );
}
