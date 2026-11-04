'use client';

import { useState } from 'react';
import InViewMotion from '../../components/motion/InViewMotion';
import styles from './booking.module.css';

const questionsDe = [
  ['Wie läuft die Unternehmensnachfolge ab?', 'Wir besprechen Ihre Ziele, prüfen passende Nachfolger in unserem Netzwerk und begleiten Sie persönlich durch die nächsten Schritte.'],
  ['Wie findet MERGIU passende Nachfolger?', 'Wir gleichen Ihr Unternehmen mit unserem Netzwerk aus Käufern, Investoren und Unternehmern ab, die zu Ihrem Betrieb passen können. Es wird keine öffentliche Ausschreibung Ihres Unternehmensverkaufes geben.'],
  ['Wieso ist die Vermittlung kostenlos?', 'Wir berechnen dem Verkäufer keine Vermittlungsprovision, da bei MERGIU der Käufer/Nachfolger diese Vermittlungsprovision zahlt. Für den Verkäufer des Unternehmens fällt nur die einmalige Bearbeitungsgebühr in Höhe von 184€ an.'],
];

const questionsEn = [
  ['How does business succession work?', 'We discuss your goals, review suitable successors in our network and guide you personally through the next steps.'],
  ['How does MERGIU find suitable successors?', 'We match your business with buyers, investors and entrepreneurs in our network who may be a good fit. Your business will not be publicly advertised for sale.'],
  ['Why is the introduction free of commission?', 'MERGIU does not charge sellers a brokerage commission; the buyer or successor pays it. Sellers only pay the one-time processing fee of EUR 184.'],
];

const questionsFr = [
  ['Comment se déroule une transmission ?', 'Nous échangeons sur votre projet, recherchons des repreneurs adaptés dans notre réseau et vous accompagnons personnellement.'],
  ['Comment MERGIU trouve-t-il des repreneurs ?', 'Nous étudions les profils d’acheteurs, d’investisseurs et d’entrepreneurs de notre réseau. Votre entreprise ne fait pas l’objet d’une annonce publique.'],
  ['Pourquoi la mise en relation est-elle sans commission vendeur ?', 'La commission d’intermédiation est payée par l’acheteur ou le repreneur. Le vendeur règle uniquement les frais uniques de préparation de 184 €.'],
];

export default function BookingFaq({ locale = 'de' }) {
  const questions = locale === 'en' ? questionsEn : locale === 'fr' ? questionsFr : questionsDe;
  const isEnglish = locale === 'en';
  const isFrench = locale === 'fr';
  const [openIndex, setOpenIndex] = useState(-1);
  return (
    <InViewMotion as="section" className={styles.faqSection} aria-label={isEnglish ? 'Frequently asked questions' : isFrench ? 'Questions fréquentes' : 'Häufig gestellte Fragen'}>
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
