'use client';

import { useState } from 'react';
import InViewMotion from '../../components/motion/InViewMotion';
import styles from './booking.module.css';

const STRIPE_CHECKOUT = 'https://buy.stripe.com/5kQ6oG9793YW9UscFpefC0q';

export default function BookingRegistration() {
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
          <p className={styles.introHeading}>Finden Sie noch heute den Nachfolger Ihres Unternehmens.</p>
          <h2>184€ <span>Einmalige Bearbeitungsgebühr</span></h2>
          <p className={styles.includedTitle}>Im Preis enthalten:</p>
          <ul className={styles.includedList}>
            <li>Aufnahme Ihres Unternehmens in das MERGIU-Netzwerk</li>
            <li>Prüfung und Aufbereitung Ihres Unternehmensprofils</li>
            <li>Prüfung potenziell passender Nachfolger im Netzwerk</li>
            <li>Kontaktaufnahme bei geeigneten Interessenten</li>
            <li><strong>Keine Verkäuferprovision bei erfolgreicher Übernahme</strong></li>
            <li><strong>2-Jahres-Geld-zurück-Garantie gemäß <a href="/agb.html#geld-zurueck-garantie">Bedingungen</a></strong></li>
          </ul>
          <p className={styles.disclaimer}>Die Registrierung beinhaltet keine Garantie, dass ein geeigneter Nachfolger gefunden wird. Ein Vermittlungs- oder Verkaufserfolg wird nicht geschuldet.</p>
          <label className={styles.consent}>
            <input type="checkbox" checked={consented} onChange={(event) => setConsented(event.target.checked)} />
            <span>Ich bestätige, dass ich im Namen eines Unternehmens handle, und akzeptiere die <a href="/agb.html" target="_blank" rel="noopener">AGB</a> sowie die Bedingungen der <a href="/agb.html#geld-zurueck-garantie" target="_blank" rel="noopener">2-Jahres-Geld-zurück-Garantie</a>.</span>
          </label>
          <button className={styles.submitButton} id="open-network-form" type="button" disabled={!consented} onClick={showForm}>Unternehmen registrieren <span>↗</span></button>
        </div>
      )}
      {view === 'form' && (
        <div className={styles.formView}>
          <p className={styles.eyebrow}>Unternehmen registrieren</p>
          <h2>Erzählen Sie uns von Ihrem Unternehmen.</h2>
          <form onSubmit={confirmDetails}>
            <label>Ihr Name<input id="booking-name" name="name" type="text" required placeholder="Vor- und Nachname" /></label>
            <label>Unternehmen<input name="company" type="text" required placeholder="Branche (freitext)" /></label>
            <label>E-Mail<input name="email" type="email" required placeholder="ihre@email.de" /></label>
            <label>Telefon<input name="phone" type="tel" placeholder="Ihre Telefonnummer" /></label>
            <label>Kontext<textarea name="context" rows="4" placeholder="Wie stellen Sie sich die Unternehmensnachfolge vor? Wo stehen Sie mit Ihrem Unternehmen aktuell?" /></label>
            <button className={styles.submitButton} type="submit">Angaben bestätigen <span>↗</span></button>
          </form>
        </div>
      )}
      {view === 'confirmation' && (
        <div className={styles.confirmation}>
          <p className={styles.eyebrow}>Vielen Dank</p>
          <h2>Ihre Angaben sind bestätigt.</h2>
          <p>Nur noch ein Schritt fehlt: Schließen Sie die einmalige Bearbeitungsgebühr von 184€ sicher über Stripe ab.</p>
          <a className={`${styles.submitButton} ${styles.stripeLink}`} href={STRIPE_CHECKOUT} target="_blank" rel="noopener">184€ über Stripe bezahlen <span>↗</span></a>
        </div>
      )}
    </InViewMotion>
  );
}
