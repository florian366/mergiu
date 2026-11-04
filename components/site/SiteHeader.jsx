import Link from 'next/link';
import MainNavigation from './MainNavigation';
import PromoBanner from './PromoBanner';

export default function SiteHeader({ isHomePage = false }) {
  return (
    <>
      <PromoBanner />
      <header className="header">
        <Link className="logo" href={isHomePage ? '#top' : '/'} aria-label="MERGIU – Startseite">
          <img src="/images/logo%20wei%C3%9F%20mergiu.png" alt="MERGIU" />
        </Link>
        <MainNavigation isHomePage={isHomePage} />
        <Link className="contact-pill" href="/buchung/">
          Kontakt aufnehmen <span aria-hidden="true">↗</span>
        </Link>
      </header>
    </>
  );
}
