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

export default function BookingPage({ locale = 'de', industries: pageIndustries = industries }) {
  const isEnglish = locale === 'en';
  return (
    <div className={styles.bookingPage} id="top">
      <BookingSlider locale={locale}>
        <section className={`${styles.slide} ${styles.heroSlide}`} id="slide-1">
          <div className={styles.heroImage} aria-hidden="true" />
          <div className={styles.slideShade} aria-hidden="true" />
          <InViewMotion className={styles.heroContent} distance={12}>
            <h1>{isEnglish ? <>We have your<br />business successor<br />in our <span>network.</span></> : <>Wir haben den<br />Nachfolger Ihres<br />Unternehmens in<br /><span>unserem Netzwerk.</span></>}</h1>
            <small className={styles.heroDescription}>{isEnglish ? 'The simplest way to find a successor for your business. ' : 'Der einfachste Weg zu einem Nachfolger für Ihr Unternehmen. '}<strong>{isEnglish ? 'We look forward to welcoming you to our network.' : 'Wir freuen uns, Sie in unserem Netzwerk willkommen zu heißen.'}</strong></small>
          </InViewMotion>
          <BookingRegistration locale={locale} />
        </section>
        <section className={`${styles.slide} ${styles.splitSlide}`} id="slide-2">
          <InViewMotion className={styles.darkCopy}>
            <h2>{isEnglish ? 'Your business succession deserves an experienced partner.' : 'Ihre Unternehmensnachfolge verdient einen erfahrenen Ansprechpartner.'}</h2>
            <BookingFaq locale={locale} />
          </InViewMotion>
        </section>
        <section className={`${styles.slide} ${styles.topicsSlide}`} id="slide-3">
          <div className={styles.topicGrid}>
            <InViewMotion as="article" delay={0}><h3>{isEnglish ? 'Personal support' : 'Persönliche Betreuung'}</h3><p>{isEnglish ? 'You have a dedicated MERGIU contact who guides you through the process and understands your needs.' : 'Sie haben einen direkten Ansprechpartner bei MERGIU, der Sie durch den Prozess begleitet und Ihre Anliegen kennt.'}</p></InViewMotion>
            <InViewMotion as="article" delay={0.07}><h3>{isEnglish ? 'Targeted successor search' : 'Gezielte Nachfolgersuche'}</h3><p>{isEnglish ? 'We review our network for potential buyers, investors and entrepreneurs who could be right for your business.' : 'Wir prüfen unser Netzwerk auf potenzielle Käufer, Investoren und Unternehmer, die zu Ihrem Betrieb passen könnten.'}</p></InViewMotion>
            <InViewMotion as="article" delay={0.14}><h3>{isEnglish ? 'Discreet introductions' : 'Diskrete Vermittlung'}</h3><p>{isEnglish ? 'Your business information is treated confidentially. We only share it with interested parties with your consent.' : 'Ihre Unternehmensdaten werden vertraulich behandelt. Informationen über Ihr Unternehmen geben wir nicht ohne Ihre Zustimmung an Interessenten weiter.'}</p></InViewMotion>
            <InViewMotion as="article" delay={0.21}><h3>{isEnglish ? 'No sales commission' : 'Ohne Verkaufsprovision'}</h3><p>{isEnglish ? 'You only pay the one-time processing fee of EUR 184. We charge no additional brokerage commission, even if a sale is successful.' : 'Sie zahlen lediglich die einmalige Bearbeitungsgebühr von 184€. Auch bei einem erfolgreichen Verkauf berechnen wir Ihnen keine zusätzliche Vermittlungsprovision.'}</p></InViewMotion>
          </div>
        </section>
        <section className={`${styles.slide} ${styles.imageCopySlide}`} id="slide-4">
          <div className={styles.mentorImage} aria-hidden="true" />
          <InViewMotion className={styles.darkCopy}>
            <h2>{isEnglish ? <>Find the right successor <em>for your business today.</em></> : <>Finden Sie noch heute den passenden Nachfolger <em>für Ihr Unternehmen.</em></>}</h2>
            <Link className={styles.pill} href="#slide-1">{isEnglish ? 'Get in touch ↗' : 'Kontakt aufnehmen ↗'}</Link>
          </InViewMotion>
        </section>
      </BookingSlider>
      <div className={styles.mobileFooter}><SiteFooter industries={pageIndustries} locale={locale} /></div>
    </div>
  );
}
