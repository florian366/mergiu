'use client';

import { useState } from 'react';
import InViewMotion from '../../components/motion/InViewMotion';
import styles from './booking.module.css';

const STRIPE_CHECKOUT = 'https://buy.stripe.com/5kQ6oG9793YW9UscFpefC0q';

export default function BookingRegistration({ locale = 'de' }) {
  const isEnglish = locale === 'en';
  const [consented, setConsented] = useState(false);
  const [view, setView] = useState('intro');

  const showForm = () => {
    setView('form');
    window.setTimeout(() => document.querySelector('#booking-name')?.focus(), 0);
  };

  const confirmDetails = (event) => {
    event.preventDefault();
    setView('confirmation');
  };

  return (
    <InViewMotion className={styles.networkCard}>
      {view === 'intro' && (
        <div className={styles.introView}>
          <p className={styles.introHeading}>{isEnglish ? 'Find your business successor today.' : 'Finden Sie noch heute den Nachfolger Ihres Unternehmens.'}</p>
          <h2>184€ <span>{isEnglish ? 'One-time processing fee' : 'Einmalige Bearbeitungsgebühr'}</span></h2>
          <p className={styles.includedTitle}>{isEnglish ? 'Included in the price:' : 'Im Preis enthalten:'}</p>
          <ul className={styles.includedList}>
            <li>{isEnglish ? 'Admission of your business to the MERGIU network' : 'Aufnahme Ihres Unternehmens in das MERGIU-Netzwerk'}</li>
            <li>{isEnglish ? 'Review and preparation of your business profile' : 'Prüfung und Aufbereitung Ihres Unternehmensprofils'}</li>
            <li>{isEnglish ? 'Review of potentially suitable successors in our network' : 'Prüfung potenziell passender Nachfolger im Netzwerk'}</li>
            <li>{isEnglish ? 'Contact with suitable interested parties' : 'Kontaktaufnahme bei geeigneten Interessenten'}</li>
            <li><strong>{isEnglish ? 'No seller commission upon a successful acquisition' : 'Keine Verkäuferprovision bei erfolgreicher Übernahme'}</strong></li>
            <li><strong>{isEnglish ? 'Two-year money-back guarantee under the ' : '2-Jahres-Geld-zurück-Garantie gemäß '}<a href={isEnglish ? '/terms-and-conditions/#geld-zurueck-garantie' : '/agb.html#geld-zurueck-garantie'}>{isEnglish ? 'terms' : 'Bedingungen'}</a></strong></li>
          </ul>
          <p className={styles.disclaimer}>{isEnglish ? 'Registration does not guarantee that a suitable successor will be found. A successful introduction or sale is not guaranteed.' : 'Die Registrierung beinhaltet keine Garantie, dass ein geeigneter Nachfolger gefunden wird. Ein Vermittlungs- oder Verkaufserfolg wird nicht geschuldet.'}</p>
          <label className={styles.consent}>
            <input type="checkbox" checked={consented} onChange={(event) => setConsented(event.target.checked)} />
            <span>{isEnglish ? <>I confirm that I am acting on behalf of a business and accept the <a href="/terms-and-conditions/" target="_blank" rel="noopener">terms and conditions</a> and the <a href="/terms-and-conditions/#geld-zurueck-garantie" target="_blank" rel="noopener">two-year money-back guarantee</a>.</> : <>Ich bestätige, dass ich im Namen eines Unternehmens handle, und akzeptiere die <a href="/agb.html" target="_blank" rel="noopener">AGB</a> sowie die Bedingungen der <a href="/agb.html#geld-zurueck-garantie" target="_blank" rel="noopener">2-Jahres-Geld-zurück-Garantie</a>.</>}</span>
          </label>
          <button className={styles.submitButton} id="open-network-form" type="button" disabled={!consented} onClick={showForm}>{isEnglish ? 'Register your business' : 'Unternehmen registrieren'} <span>↗</span></button>
        </div>
      )}
      {view === 'form' && (
        <div className={styles.formView}>
          <p className={styles.eyebrow}>{isEnglish ? 'Register your business' : 'Unternehmen registrieren'}</p>
          <h2>{isEnglish ? 'Tell us about your business.' : 'Erzählen Sie uns von Ihrem Unternehmen.'}</h2>
          <form onSubmit={confirmDetails}>
            <label>{isEnglish ? 'Your name' : 'Ihr Name'}<input id="booking-name" name="name" type="text" required placeholder={isEnglish ? 'First and last name' : 'Vor- und Nachname'} /></label>
            <label>{isEnglish ? 'Business' : 'Unternehmen'}<input name="company" type="text" required placeholder={isEnglish ? 'Industry or business type' : 'Branche (freitext)'} /></label>
            <label>{isEnglish ? 'Email' : 'E-Mail'}<input name="email" type="email" required placeholder={isEnglish ? 'your@email.com' : 'ihre@email.de'} /></label>
            <label>{isEnglish ? 'Phone' : 'Telefon'}<input name="phone" type="tel" placeholder={isEnglish ? 'Your phone number' : 'Ihre Telefonnummer'} /></label>
            <label>{isEnglish ? 'Context' : 'Kontext'}<textarea name="context" rows="4" placeholder={isEnglish ? 'How do you envision the succession? Where does your business stand today?' : 'Wie stellen Sie sich die Unternehmensnachfolge vor? Wo stehen Sie mit Ihrem Unternehmen aktuell?'} /></label>
            <button className={styles.submitButton} type="submit">{isEnglish ? 'Confirm details' : 'Angaben bestätigen'} <span>↗</span></button>
          </form>
        </div>
      )}
      {view === 'confirmation' && (
        <div className={styles.confirmation}>
          <p className={styles.eyebrow}>{isEnglish ? 'Thank you' : 'Vielen Dank'}</p>
          <h2>{isEnglish ? 'Your details have been confirmed.' : 'Ihre Angaben sind bestätigt.'}</h2>
          <p>{isEnglish ? 'One step remains: securely pay the one-time processing fee of EUR 184 via Stripe.' : 'Nur noch ein Schritt fehlt: Schließen Sie die einmalige Bearbeitungsgebühr von 184€ sicher über Stripe ab.'}</p>
          <a className={`${styles.submitButton} ${styles.stripeLink}`} href={STRIPE_CHECKOUT} target="_blank" rel="noopener">{isEnglish ? 'Pay EUR 184 via Stripe' : '184€ über Stripe bezahlen'} <span>↗</span></a>
        </div>
      )}
    </InViewMotion>
  );
}
