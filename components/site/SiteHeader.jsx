import Link from 'next/link';
import MainNavigation from './MainNavigation';
import PromoBanner from './PromoBanner';
import LanguageSwitcher from './LanguageSwitcher';

export default function SiteHeader({ isHomePage = false, locale = 'de' }) {
  const isEnglish = locale === 'en';
  const isFrench = locale === 'fr';
  const homeHref = isEnglish ? '/business-succession/' : isFrench ? '/fr/' : '/';
  const bookingHref = isEnglish ? '/present-your-business/' : isFrench ? '/fr/presenter-votre-entreprise/' : '/buchung/';

  return (
    <>
      <PromoBanner locale={locale} />
      <header className="header">
        <Link className="logo" href={isHomePage ? '#top' : homeHref} aria-label={isEnglish ? 'MERGIU – Home' : isFrench ? 'MERGIU – Accueil' : 'MERGIU – Startseite'}>
          <img src="/images/logo%20wei%C3%9F%20mergiu.png" alt="MERGIU" />
        </Link>
        <MainNavigation isHomePage={isHomePage} locale={locale} />
        <Link className="contact-pill" href={bookingHref}>
          {isEnglish ? 'Get in touch' : isFrench ? 'Nous contacter' : 'Kontakt aufnehmen'} <span aria-hidden="true">↗</span>
        </Link>
        <LanguageSwitcher />
      </header>
    </>
  );
}
