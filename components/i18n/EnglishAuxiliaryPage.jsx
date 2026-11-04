import Link from 'next/link';
import SiteFooter from '../site/SiteFooter';
import SiteHeader from '../site/SiteHeader';
import { industries } from '../../data/homepage';
import TipForm from '../../app/tippgeber/TipForm';
import styles from './EnglishAuxiliaryPage.module.css';

const legalContent = {
  agb: {
    title: 'Terms and conditions',
    text: 'The German version of the registration agreement and terms and conditions is authoritative. Please review the German original before registering a business.',
    href: '/agb.html',
    label: 'Read the German original',
  },
  datenschutz: {
    title: 'Privacy policy',
    text: 'The privacy policy is currently available in German. The German version is authoritative.',
    href: '/datenschutz.html',
    label: 'Read the German privacy policy',
  },
  impressum: {
    title: 'Legal notice',
    text: 'The legal notice is currently available in German.',
    href: '/impressum.html',
    label: 'Read the German legal notice',
  },
};

export default function EnglishAuxiliaryPage({ route, industries: pageIndustries = industries }) {
  const isReferral = route.type === 'referral';
  const legal = legalContent[route.key];

  return (
    <div className={styles.page} id="top">
      <SiteHeader locale="en" />
      <main className={styles.main}>
        {isReferral ? (
          <>
            <section className={styles.hero}>
              <p className={styles.eyebrow}>MERGIU · REFERRAL REWARD</p>
              <h1>Know a business looking for a successor?</h1>
              <p>Send us a discreet tip. If it leads to a successful introduction, you may receive a EUR 500 referral reward under the agreed conditions.</p>
              <Link className={styles.button} href="#tip-form">Send us a tip ↗</Link>
            </section>
            <section className={styles.copy}>
              <h2>How it works</h2>
              <ol>
                <li>You tell us about a business that may be planning a succession or sale.</li>
                <li>We check discreetly whether the contact is already known to us.</li>
                <li>The business owner decides whether and when to speak with MERGIU.</li>
                <li>If your tip leads to a successful introduction, the agreed referral reward applies.</li>
              </ol>
              <p>You do not need to find a buyer, approach the owner or conduct negotiations. We handle each tip confidentially.</p>
            </section>
            <section className={styles.formSection} id="tip-form">
              <h2>Share a tip</h2>
              <p>Tell us briefly what you know. We will follow up discreetly.</p>
              <TipForm locale="en" />
            </section>
          </>
        ) : (
          <section className={styles.hero}>
            <p className={styles.eyebrow}>MERGIU · LEGAL</p>
            <h1>{legal.title}</h1>
            <p>{legal.text}</p>
            <Link className={styles.button} href={legal.href}>{legal.label} ↗</Link>
          </section>
        )}
      </main>
      <SiteFooter industries={pageIndustries} locale="en" />
    </div>
  );
}
