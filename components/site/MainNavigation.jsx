'use client';

import { useState } from 'react';
import Link from 'next/link';

const navigationItems = [
  { label: 'Home', section: '#top', active: true },
  { label: 'Über', section: '#about-work' },
  { label: 'Branchen', section: '#work' },
  { label: 'Impulse', section: '#blog' },
];

export default function MainNavigation({ isHomePage }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className={menuOpen ? 'open' : ''} aria-label="Hauptnavigation">
        {navigationItems.map(({ label, section, active }) => (
          <Link
            className={isHomePage && active ? 'active' : undefined}
            href={isHomePage ? section : `/${section}`}
            key={label}
            onClick={closeMenu}
          >
            {label}
          </Link>
        ))}
        <Link className="mobile-nav-link" href="/buchung/" onClick={closeMenu}>
          Nachfolger finden
        </Link>
      </nav>
      <button
        className="menu"
        type="button"
        aria-label={menuOpen ? 'Menü schließen' : 'Menü öffnen'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((isOpen) => !isOpen)}
      >
        <i />
        <i />
      </button>
    </>
  );
}
