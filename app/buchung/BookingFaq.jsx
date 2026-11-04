'use client';

import { useState } from 'react';
import InViewMotion from '../../components/motion/InViewMotion';
import styles from './booking.module.css';

const questions = [
  ['Wie läuft die Unternehmensnachfolge ab?', 'Wir besprechen Ihre Ziele, prüfen passende Nachfolger in unserem Netzwerk und begleiten Sie persönlich durch die nächsten Schritte.'],
  ['Wie findet MERGIU passende Nachfolger?', 'Wir gleichen Ihr Unternehmen mit unserem Netzwerk aus Käufern, Investoren und Unternehmern ab, die zu Ihrem Betrieb passen können. Es wird keine öffentliche Ausschreibung Ihres Unternehmensverkaufes geben.'],
  ['Wieso ist die Vermittlung kostenlos?', 'Wir berechnen dem Verkäufer keine Vermittlungsprovision, da bei MERGIU der Käufer/Nachfolger diese Vermittlungsprovision zahlt. Für den Verkäufer des Unternehmens fällt nur die einmalige Bearbeitungsgebühr in Höhe von 184€ an.'],
];

export default function BookingFaq() {
  const [openIndex, setOpenIndex] = useState(-1);
  return (
    <InViewMotion as="section" className={styles.faqSection} aria-label="Häufig gestellte Fragen">
      <div className={styles.faqList}>
        {questions.map(([question, answer], index) => {
          const isOpen = index === openIndex;
          const answerId = `booking-faq-${index + 1}`;
          return (
            <article className={`${styles.faqItem} ${isOpen ? styles.faqOpen : ''}`} key={question}>
              <h3>
                <button className={styles.faqQuestion} type="button" aria-expanded={isOpen} aria-controls={answerId} onClick={() => setOpenIndex(isOpen ? -1 : index)}>
                  <span className={styles.faqNumber}>{String(index + 1).padStart(2, '0')}</span>
                  <span>{question}</span><span className={styles.faqArrow} aria-hidden="true" />
                </button>
              </h3>
              <div className={styles.faqAnswer} id={answerId} role="region" aria-hidden={!isOpen}>
                <p>{answer}</p>
              </div>
            </article>
          );
        })}
      </div>
    </InViewMotion>
  );
}
