'use client';

import { useState } from 'react';
import { useReducedMotion } from 'motion/react';
import styles from './tippgeber.module.css';

const EMAIL_TO = 'florian@viralnation.de';
const EMAIL_SUBJECT = 'Tippgeber-Hinweis zur Unternehmensnachfolge';

export default function TipForm({ locale = 'de' }) {
  const isEnglish = locale === 'en';
  const [submitted, setSubmitted] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const prepareEmail = (event) => {
    event.preventDefault();
    const values = Object.fromEntries(new FormData(event.currentTarget).entries());
    const body = [
      `${isEnglish ? 'Name' : 'Name'}: ${values.name}`,
      `${isEnglish ? 'Email' : 'E-Mail'}: ${values.email}`,
      `${isEnglish ? 'Phone' : 'Telefon'}: ${values.phone || (isEnglish ? 'Not provided' : 'Nicht angegeben')}`,
      `${isEnglish ? 'Business' : 'Unternehmen'}: ${values.company}`,
      `${isEnglish ? 'Location' : 'Ort'}: ${values.location || (isEnglish ? 'Not provided' : 'Nicht angegeben')}`,
      `${isEnglish ? 'How you know about it' : 'Woher bekannt'}: ${values.source || (isEnglish ? 'Not provided' : 'Nicht angegeben')}`,
      '',
      `${isEnglish ? 'Tip' : 'Hinweis'}: ${values.message}`,
    ].join('\n');
    const subject = isEnglish ? 'Business succession referral' : EMAIL_SUBJECT;
    window.location.href = `mailto:${EMAIL_TO}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
    window.setTimeout(() => document.querySelector('#tip-form-success')?.scrollIntoView({ behavior: shouldReduceMotion ? 'auto' : 'smooth', block: 'center' }), 0);
  };

  return (
    <>
      {!submitted && (
        <form className={styles.tipForm} id="tip-form" onSubmit={prepareEmail}>
          <label>{isEnglish ? 'Your name *' : 'Ihr Name *'}<input name="name" type="text" autoComplete="name" required /></label>
          <label>{isEnglish ? 'Your email address *' : 'Ihre E-Mail-Adresse *'}<input name="email" type="email" autoComplete="email" required /></label>
          <label>{isEnglish ? 'Your phone number' : 'Ihre Telefonnummer'} <span>({isEnglish ? 'optional' : 'optional'})</span><input name="phone" type="tel" autoComplete="tel" /></label>
          <label>{isEnglish ? 'Which business do you know? *' : 'Welches Unternehmen kennen Sie? *'}<input name="company" type="text" placeholder={isEnglish ? 'Business name or description' : 'Name oder Beschreibung des Unternehmens'} required /></label>
          <label>{isEnglish ? 'Business location' : 'Ort des Unternehmens'} <span>({isEnglish ? 'optional' : 'optional'})</span><input name="location" type="text" placeholder={isEnglish ? 'City, region or state' : 'Ort, Region oder Bundesland'} /></label>
          <label>{isEnglish ? 'How do you know about it?' : 'Woher wissen Sie davon?'} <span>({isEnglish ? 'optional' : 'optional'})</span><textarea name="source" rows="3" placeholder={isEnglish ? 'For example, personal contact, industry connections or a business partner' : 'Zum Beispiel persönlicher Kontakt, Branchenumfeld oder Geschäftspartner'} /></label>
          <label>{isEnglish ? 'What is it about? *' : 'Worum geht es? *'}<textarea name="message" rows="5" placeholder={isEnglish ? 'What do you know about the planned succession or possible sale?' : 'Was wissen Sie über die geplante Nachfolge oder den möglichen Verkauf?'} required /></label>
          <label className={styles.consent}><input name="consent" type="checkbox" required /><span>{isEnglish ? <>I agree that MERGIU may process my details to review this tip and contact me. I have read the <a href="/privacy-policy/">privacy policy</a>. *</> : <>Ich stimme zu, dass MERGIU meine Angaben zur Bearbeitung des Hinweises und zur Kontaktaufnahme verarbeitet. Die <a href="/datenschutz.html">Datenschutzerklärung</a> habe ich gelesen. *</>}</span></label>
          <button className={`${styles.button} ${styles.buttonDark}`} type="submit">{isEnglish ? 'Send your tip' : 'Tipp unverbindlich abgeben'} <span aria-hidden="true">↗︎</span></button>
          <p className={styles.formNote}>{isEnglish ? 'We treat your information confidentially. Submitting opens a prepared email. The reward is paid only if a successful introduction results and the agreed conditions are met.' : 'Wir behandeln Ihre Angaben vertraulich. Beim Absenden wird eine vorbereitete E-Mail geöffnet. Die Prämie wird nur bei erfolgreicher Vermittlung und nach den vereinbarten Voraussetzungen gezahlt.'}</p>
        </form>
      )}
      {submitted && (
        <div className={styles.formSuccess} id="tip-form-success" role="status">
          <strong>{isEnglish ? 'Your message is ready.' : 'Ihre Nachricht ist vorbereitet.'}</strong>
          <p>{isEnglish ? 'Your email app has opened. Please send the prepared message.' : 'Ihr E-Mail-Programm wurde geöffnet. Bitte senden Sie die vorbereitete Nachricht noch ab.'}</p>
        </div>
      )}
    </>
  );
}
