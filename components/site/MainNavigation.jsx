'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function MainNavigation({ isHomePage, locale = 'de' }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const isEnglish = locale === 'en';
  const home = isEnglish ? '/business-succession/' : '/';
  const navigationItems = isEnglish
    ? [
        { label: 'Home', section: '#top', active: true },
        { label: 'About', section: '#about-work' },
        { label: 'Industries', section: '#work' },
        { label: 'Insights', section: '#blog' },
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
      <nav className={menuOpen ? 'open' : ''} aria-label={isEnglish ? 'Main navigation' : 'Hauptnavigation'}>
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
        <Link className="mobile-nav-link" href={isEnglish ? '/present-your-business/' : '/buchung/'} onClick={closeMenu}>
          {isEnglish ? 'Find a successor' : 'Nachfolger finden'}
        </Link>
      </nav>
      <button
        className="menu"
        type="button"
        aria-label={menuOpen ? (isEnglish ? 'Close menu' : 'Menü schließen') : (isEnglish ? 'Open menu' : 'Menü öffnen')}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((isOpen) => !isOpen)}
      >
        <i />
        <i />
      </button>
    </>
  );
}
