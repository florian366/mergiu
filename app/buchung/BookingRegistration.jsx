'use client';

import { useState } from 'react';
import InViewMotion from '../../components/motion/InViewMotion';
import styles from './booking.module.css';

const STRIPE_CHECKOUT = 'https://buy.stripe.com/5kQ6oG9793YW9UscFpefC0q';

export default function BookingRegistration({ locale = 'de' }) {
  const isEnglish = locale === 'en';
  const isFrench = locale === 'fr';
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
          <p className={styles.introHeading}>{isEnglish ? 'Find your business successor today.' : isFrench ? 'Trouvez le repreneur adapté à votre entreprise.' : 'Finden Sie noch heute den Nachfolger Ihres Unternehmens.'}</p>
          <h2>184 € <span>{isEnglish ? 'One-time processing fee' : isFrench ? 'Frais uniques de préparation' : 'Einmalige Bearbeitungsgebühr'}</span></h2>
          <p className={styles.includedTitle}>{isEnglish ? 'Included in the price:' : isFrench ? 'Le prix comprend :' : 'Im Preis enthalten:'}</p>
          <ul className={styles.includedList}>
            <li>{isEnglish ? 'Admission of your business to the MERGIU network' : isFrench ? 'Inscription de votre entreprise dans le réseau MERGIU' : 'Aufnahme Ihres Unternehmens in das MERGIU-Netzwerk'}</li>
            <li>{isEnglish ? 'Review and preparation of your business profile' : isFrench ? 'Examen et préparation du profil de votre entreprise' : 'Prüfung und Aufbereitung Ihres Unternehmensprofils'}</li>
            <li>{isEnglish ? 'Review of potentially suitable successors in our network' : isFrench ? 'Recherche de repreneurs potentiels dans notre réseau' : 'Prüfung potenziell passender Nachfolger im Netzwerk'}</li>
            <li>{isEnglish ? 'Contact with suitable interested parties' : isFrench ? 'Prise de contact avec les personnes intéressées adaptées' : 'Kontaktaufnahme bei geeigneten Interessenten'}</li>
            <li><strong>{isEnglish ? 'No seller commission upon a successful acquisition' : isFrench ? 'Aucune commission vendeur en cas de reprise' : 'Keine Verkäuferprovision bei erfolgreicher Übernahme'}</strong></li>
            <li><strong>{isEnglish ? 'Two-year money-back guarantee under the ' : isFrench ? 'Garantie de remboursement de deux ans selon les ' : '2-Jahres-Geld-zurück-Garantie gemäß '}<a href={isEnglish ? '/terms-and-conditions/#geld-zurueck-garantie' : isFrench ? '/fr/conditions-generales/#garantie' : '/agb.html#geld-zurueck-garantie'}>{isEnglish ? 'terms' : isFrench ? 'conditions' : 'Bedingungen'}</a></strong></li>
          </ul>
          <p className={styles.disclaimer}>{isEnglish ? 'Registration does not guarantee that a suitable successor will be found. A successful introduction or sale is not guaranteed.' : isFrench ? 'L’inscription ne garantit pas qu’un repreneur adapté sera trouvé. Aucun résultat de mise en relation ou de vente n’est garanti.' : 'Die Registrierung beinhaltet keine Garantie, dass ein geeigneter Nachfolger gefunden wird. Ein Vermittlungs- oder Verkaufserfolg wird nicht geschuldet.'}</p>
          <label className={styles.consent}>
            <input type="checkbox" checked={consented} onChange={(event) => setConsented(event.target.checked)} />
            <span>{isEnglish ? <>I confirm that I am acting on behalf of a business and accept the <a href="/terms-and-conditions/" target="_blank" rel="noopener">terms and conditions</a> and the <a href="/terms-and-conditions/#geld-zurueck-garantie" target="_blank" rel="noopener">two-year money-back guarantee</a>.</> : isFrench ? <>Je confirme agir au nom d’une entreprise et accepter les <a href="/fr/conditions-generales/" target="_blank" rel="noopener">conditions générales</a> ainsi que la <a href="/fr/conditions-generales/#garantie" target="_blank" rel="noopener">garantie de remboursement de deux ans</a>.</> : <>Ich bestätige, dass ich im Namen eines Unternehmens handle, und akzeptiere die <a href="/agb.html" target="_blank" rel="noopener">AGB</a> sowie die Bedingungen der <a href="/agb.html#geld-zurueck-garantie" target="_blank" rel="noopener">2-Jahres-Geld-zurück-Garantie</a>.</>}</span>
          </label>
          <button className={styles.submitButton} id="open-network-form" type="button" disabled={!consented} onClick={showForm}>{isEnglish ? 'Register your business' : isFrench ? 'Inscrire votre entreprise' : 'Unternehmen registrieren'} <span>↗</span></button>
        </div>
      )}
      {view === 'form' && (
        <div className={styles.formView}>
          <p className={styles.eyebrow}>{isEnglish ? 'Register your business' : isFrench ? 'Inscrire votre entreprise' : 'Unternehmen registrieren'}</p>
          <h2>{isEnglish ? 'Tell us about your business.' : isFrench ? 'Parlez-nous de votre entreprise.' : 'Erzählen Sie uns von Ihrem Unternehmen.'}</h2>
          <form onSubmit={confirmDetails}>
            <label>{isEnglish ? 'Your name' : isFrench ? 'Votre nom' : 'Ihr Name'}<input id="booking-name" name="name" type="text" required placeholder={isEnglish ? 'First and last name' : isFrench ? 'Prénom et nom' : 'Vor- und Nachname'} /></label>
            <label>{isEnglish ? 'Business' : isFrench ? 'Entreprise' : 'Unternehmen'}<input name="company" type="text" required placeholder={isEnglish ? 'Industry or business type' : isFrench ? 'Secteur ou activité' : 'Branche (freitext)'} /></label>
            <label>{isEnglish ? 'Email' : isFrench ? 'Adresse e-mail' : 'E-Mail'}<input name="email" type="email" required placeholder={isEnglish ? 'your@email.com' : isFrench ? 'vous@exemple.fr' : 'ihre@email.de'} /></label>
            <label>{isEnglish ? 'Phone' : isFrench ? 'Téléphone' : 'Telefon'}<input name="phone" type="tel" placeholder={isEnglish ? 'Your phone number' : isFrench ? 'Votre numéro de téléphone' : 'Ihre Telefonnummer'} /></label>
            <label>{isEnglish ? 'Context' : isFrench ? 'Contexte' : 'Kontext'}<textarea name="context" rows="4" placeholder={isEnglish ? 'How do you envision the succession? Where does your business stand today?' : isFrench ? 'Comment envisagez-vous la transmission ? Où en est votre entreprise aujourd’hui ?' : 'Wie stellen Sie sich die Unternehmensnachfolge vor? Wo stehen Sie mit Ihrem Unternehmen aktuell?'} /></label>
            <button className={styles.submitButton} type="submit">{isEnglish ? 'Confirm details' : isFrench ? 'Confirmer les informations' : 'Angaben bestätigen'} <span>↗</span></button>
          </form>
        </div>
      )}
      {view === 'confirmation' && (
        <div className={styles.confirmation}>
          <p className={styles.eyebrow}>{isEnglish ? 'Thank you' : isFrench ? 'Merci' : 'Vielen Dank'}</p>
          <h2>{isEnglish ? 'Your details have been confirmed.' : isFrench ? 'Vos informations sont confirmées.' : 'Ihre Angaben sind bestätigt.'}</h2>
          <p>{isEnglish ? 'One step remains: securely pay the one-time processing fee of EUR 184 via Stripe.' : isFrench ? 'Dernière étape : réglez en toute sécurité les frais uniques de 184 € via Stripe.' : 'Nur noch ein Schritt fehlt: Schließen Sie die einmalige Bearbeitungsgebühr von 184€ sicher über Stripe ab.'}</p>
          <a className={`${styles.submitButton} ${styles.stripeLink}`} href={STRIPE_CHECKOUT} target="_blank" rel="noopener">{isEnglish ? 'Pay EUR 184 via Stripe' : isFrench ? 'Payer 184 € via Stripe' : '184€ über Stripe bezahlen'} <span>↗</span></a>
        </div>
      )}
    </InViewMotion>
  );
}
