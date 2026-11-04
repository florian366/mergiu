'use client';

import { useState } from 'react';
import { useReducedMotion } from 'motion/react';
import styles from './tippgeber.module.css';

const EMAIL_TO = 'florian@viralnation.de';
const EMAIL_SUBJECT = 'Tippgeber-Hinweis zur Unternehmensnachfolge';

export default function TipForm() {
  const [submitted, setSubmitted] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const prepareEmail = (event) => {
    event.preventDefault();
    const values = Object.fromEntries(new FormData(event.currentTarget).entries());
    const body = [
      `Name: ${values.name}`,
      `E-Mail: ${values.email}`,
      `Telefon: ${values.phone || 'Nicht angegeben'}`,
      `Unternehmen: ${values.company}`,
      `Ort: ${values.location || 'Nicht angegeben'}`,
      `Woher bekannt: ${values.source || 'Nicht angegeben'}`,
      '',
      `Hinweis: ${values.message}`,
    ].join('\n');
    window.location.href = `mailto:${EMAIL_TO}?subject=${encodeURIComponent(EMAIL_SUBJECT)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
    window.setTimeout(() => document.querySelector('#tip-form-success')?.scrollIntoView({ behavior: shouldReduceMotion ? 'auto' : 'smooth', block: 'center' }), 0);
  };

  return (
    <>
      {!submitted && (
        <form className={styles.tipForm} id="tip-form" onSubmit={prepareEmail}>
          <label>Ihr Name *<input name="name" type="text" autoComplete="name" required /></label>
          <label>Ihre E-Mail-Adresse *<input name="email" type="email" autoComplete="email" required /></label>
          <label>Ihre Telefonnummer <span>(optional)</span><input name="phone" type="tel" autoComplete="tel" /></label>
          <label>Welches Unternehmen kennen Sie? *<input name="company" type="text" placeholder="Name oder Beschreibung des Unternehmens" required /></label>
          <label>Ort des Unternehmens <span>(optional)</span><input name="location" type="text" placeholder="Ort, Region oder Bundesland" /></label>
          <label>Woher wissen Sie davon? <span>(optional)</span><textarea name="source" rows="3" placeholder="Zum Beispiel persönlicher Kontakt, Branchenumfeld oder Geschäftspartner" /></label>
          <label>Worum geht es? *<textarea name="message" rows="5" placeholder="Was wissen Sie über die geplante Nachfolge oder den möglichen Verkauf?" required /></label>
          <label className={styles.consent}><input name="consent" type="checkbox" required /><span>Ich stimme zu, dass MERGIU meine Angaben zur Bearbeitung des Hinweises und zur Kontaktaufnahme verarbeitet. Die <a href="/datenschutz.html">Datenschutzerklärung</a> habe ich gelesen. *</span></label>
          <button className={`${styles.button} ${styles.buttonDark}`} type="submit">Tipp unverbindlich abgeben <span aria-hidden="true">↗</span></button>
          <p className={styles.formNote}>Wir behandeln Ihre Angaben vertraulich. Beim Absenden wird eine vorbereitete E-Mail geöffnet. Die Prämie wird nur bei erfolgreicher Vermittlung und nach den vereinbarten Voraussetzungen gezahlt.</p>
        </form>
      )}
      {submitted && (
        <div className={styles.formSuccess} id="tip-form-success" role="status">
          <strong>Ihre Nachricht ist vorbereitet.</strong>
          <p>Ihr E-Mail-Programm wurde geöffnet. Bitte senden Sie die vorbereitete Nachricht noch ab.</p>
        </div>
      )}
    </>
  );
}
