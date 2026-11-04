import Link from 'next/link';
import MainNavigation from './MainNavigation';
import PromoBanner from './PromoBanner';
import LanguageSwitcher from './LanguageSwitcher';

export default function SiteHeader({ isHomePage = false, locale = 'de' }) {
  const isEnglish = locale === 'en';
  const homeHref = isEnglish ? '/business-succession/' : '/';
  const bookingHref = isEnglish ? '/present-your-business/' : '/buchung/';

  return (
    <>
      <PromoBanner locale={locale} />
      <header className="header">
        <Link className="logo" href={isHomePage ? '#top' : homeHref} aria-label={isEnglish ? 'MERGIU – Home' : 'MERGIU – Startseite'}>
          <img src="/images/logo%20wei%C3%9F%20mergiu.png" alt="MERGIU" />
        </Link>
        <MainNavigation isHomePage={isHomePage} locale={locale} />
        <Link className="contact-pill" href={bookingHref}>
          {isEnglish ? 'Get in touch' : 'Kontakt aufnehmen'} <span aria-hidden="true">↗</span>
        </Link>
        <LanguageSwitcher />
      </header>
    </>
  );
}
