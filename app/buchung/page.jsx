import Link from 'next/link';
import BookingFaq from './BookingFaq';
import BookingRegistration from './BookingRegistration';
import BookingSlider from './BookingSlider';
import styles from './booking.module.css';
import SiteFooter from '../../components/site/SiteFooter';
import { industries } from '../../data/homepage';
import InViewMotion from '../../components/motion/InViewMotion';

export const metadata = {
  title: 'Unternehmen kostenlos registrieren | MERGIU',
  description: 'Unternehmen kostenlos über die Nachfolge informieren lassen: Registrieren Sie Ihr Unternehmen bei MERGIU und finden Sie passende Nachfolger im persönlichen Netzwerk.',
};

export default function BookingPage() {
  return (
    <div className={styles.bookingPage} id="top">
      <BookingSlider>
        <section className={`${styles.slide} ${styles.heroSlide}`} id="slide-1">
          <div className={styles.heroImage} aria-hidden="true" />
          <div className={styles.slideShade} aria-hidden="true" />
          <InViewMotion className={styles.heroContent} distance={12}>
            <h1>Wir haben den<br />Nachfolger Ihres<br />Unternehmens in<br /><span>unserem Netzwerk.</span></h1>
            <small className={styles.heroDescription}>Der einfachste Weg zu einem Nachfolger für Ihr Unternehmen. <strong>Wir freuen uns, Sie in unserem Netzwerk willkommen zu heißen.</strong></small>
          </InViewMotion>
          <BookingRegistration />
        </section>
        <section className={`${styles.slide} ${styles.splitSlide}`} id="slide-2">
          <InViewMotion className={styles.darkCopy}>
            <h2>Ihre Unternehmensnachfolge verdient einen erfahrenen Ansprechpartner.</h2>
            <BookingFaq />
          </InViewMotion>
        </section>
        <section className={`${styles.slide} ${styles.topicsSlide}`} id="slide-3">
          <div className={styles.topicGrid}>
            <InViewMotion as="article" delay={0}><h3>Persönliche Betreuung</h3><p>Sie haben einen direkten Ansprechpartner bei MERGIU, der Sie durch den Prozess begleitet und Ihre Anliegen kennt.</p></InViewMotion>
            <InViewMotion as="article" delay={0.07}><h3>Gezielte Nachfolgersuche</h3><p>Wir prüfen unser Netzwerk auf potenzielle Käufer, Investoren und Unternehmer, die zu Ihrem Betrieb passen könnten.</p></InViewMotion>
            <InViewMotion as="article" delay={0.14}><h3>Diskrete Vermittlung</h3><p>Ihre Unternehmensdaten werden vertraulich behandelt. Informationen über Ihr Unternehmen geben wir nicht ohne Ihre Zustimmung an Interessenten weiter.</p></InViewMotion>
            <InViewMotion as="article" delay={0.21}><h3>Ohne Verkaufsprovision</h3><p>Sie zahlen lediglich die einmalige Bearbeitungsgebühr von 184€. Auch bei einem erfolgreichen Verkauf berechnen wir Ihnen keine zusätzliche Vermittlungsprovision.</p></InViewMotion>
          </div>
        </section>
        <section className={`${styles.slide} ${styles.imageCopySlide}`} id="slide-4">
          <div className={styles.mentorImage} aria-hidden="true" />
          <InViewMotion className={styles.darkCopy}>
            <h2>Finden Sie noch heute den passenden Nachfolger <em>für Ihr Unternehmen.</em></h2>
            <Link className={styles.pill} href="#slide-1">Kontakt aufnehmen ↗</Link>
          </InViewMotion>
        </section>
      </BookingSlider>
      <div className={styles.mobileFooter}><SiteFooter industries={industries} /></div>
    </div>
  );
}
