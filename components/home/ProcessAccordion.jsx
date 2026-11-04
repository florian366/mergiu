'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ProcessAccordion({ items, locale = 'de' }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section
      className="accordion-section panel"
      id="about-work"
      aria-label={locale === 'fr' ? 'Notre approche' : locale === 'en' ? 'How we work' : 'Unsere Arbeitsweise'}
    >
      <div className="accordion-layout">
        {items.map((item, index) => {
          const isSelected = selectedIndex === index;

          return (
            <article
              className={`accordion-item ${isSelected ? 'selected' : ''}`}
              key={item.title}
            >
              <button
                className="accordion-tab"
                type="button"
                aria-expanded={isSelected}
                onClick={() => setSelectedIndex(index)}
              >
                <b>{String(index + 1).padStart(2, '0')}</b>
                <span>{item.title}</span>
              </button>

              {isSelected && (
                <div className="accordion-content">
                  <div className="accordion-copy">
                    <p>{item.summary}</p>
                    <small>{item.detail}</small>
                    <Link className="button" href={item.href}>
                      {locale === 'en' ? 'Learn more ↗' : locale === 'fr' ? 'En savoir plus ↗' : 'mehr erfahren ↗'}
                    </Link>
                  </div>
                  <div className={`accordion-image ${item.imageClass}`} aria-hidden="true" />
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
