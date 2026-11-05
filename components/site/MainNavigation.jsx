'use client';

import { useState } from 'react';
import Link from 'next/link';
import LanguageSwitcher from './LanguageSwitcher';

export default function MainNavigation({ isHomePage, locale = 'de' }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const isEnglish = locale === 'en';
  const isFrench = locale === 'fr';
  const home = isEnglish ? '/business-succession/' : isFrench ? '/fr/' : '/';
  const navigationItems = isEnglish
    ? [
        { label: 'Home', section: '#top', active: true },
        { label: 'About', section: '#about-work' },
        { label: 'Industries', section: '#work' },
        { label: 'Insights', section: '#blog' },
      ]
    : isFrench
      ? [
          { label: 'Accueil', section: '#top', active: true },
          { label: 'Notre approche', section: '#about-work' },
          { label: 'Secteurs', section: '#work' },
          { label: 'Articles', section: '#blog' },
        ]
      : [
        { label: 'Home', section: '#top', active: true },
        { label: 'Über', section: '#about-work' },
        { label: 'Branchen', section: '#work' },
        { label: 'Impulse', section: '#blog' },
      ];
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className={menuOpen ? 'open' : ''} aria-label={isEnglish ? 'Main navigation' : isFrench ? 'Navigation principale' : 'Hauptnavigation'}>
        {navigationItems.map(({ label, section, active }) => (
          <Link
            className={isHomePage && active ? 'active' : undefined}
            href={isHomePage ? section : `${home}${section}`}
            key={label}
            onClick={closeMenu}
          >
            {label}
          </Link>
        ))}
        <Link className="mobile-nav-link" href={isEnglish ? '/present-your-business/' : isFrench ? '/fr/presenter-votre-entreprise/' : '/buchung/'} onClick={closeMenu}>
          {isEnglish ? 'Find a successor' : isFrench ? 'Trouver un repreneur' : 'Nachfolger finden'}
        </Link>
        <LanguageSwitcher />
      </nav>
      <button
        className="menu"
        type="button"
        aria-label={menuOpen ? (isEnglish ? 'Close menu' : isFrench ? 'Fermer le menu' : 'Menü schließen') : (isEnglish ? 'Open menu' : isFrench ? 'Ouvrir le menu' : 'Menü öffnen')}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((isOpen) => !isOpen)}
      >
        <i />
        <i />
      </button>
    </>
  );
}
