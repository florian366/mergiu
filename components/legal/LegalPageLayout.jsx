import Link from 'next/link';
import SiteFooter from '../site/SiteFooter';
import { industries } from '../../data/homepage';
import InViewMotion, { InViewSections } from '../motion/InViewMotion';
import LanguageSwitcher from '../site/LanguageSwitcher';
import styles from './LegalPageLayout.module.css';

export default function LegalPageLayout({
  title,
  kicker,
  subtitle,
  children,
}) {
  return (
    <div className={styles.page} id="top">
      <main className={styles.content}>
        <InViewMotion as="header" distance={10}>
          <LanguageSwitcher />
          <Link className={styles.homeLink} href="/">
            ← Zur Startseite
          </Link>
          {kicker ? <p className={styles.kicker}>{kicker}</p> : null}
          <h1>{title}</h1>
          {subtitle ? <p className={styles.subtitle}>{subtitle}</p> : null}
        </InViewMotion>
        <InViewSections>{children}</InViewSections>
      </main>
      <SiteFooter industries={industries} />
    </div>
  );
}
