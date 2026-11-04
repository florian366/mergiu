'use client';

import { useState } from 'react';
import Link from 'next/link';
import LanguageSwitcher from '../../components/site/LanguageSwitcher';
import styles from './tippgeber.module.css';

export default function TipHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={styles.header}>
      <Link className={styles.logo} href="/" aria-label="MERGIU – Startseite">
        <img src="/images/logo%20wei%C3%9F%20mergiu.png" alt="MERGIU" />
      </Link>
      <nav className={`${styles.navigation} ${menuOpen ? styles.navigationOpen : ''}`} aria-label="Hauptnavigation">
        <Link href="#ablauf" onClick={closeMenu}>So funktioniert&apos;s</Link>
        <Link href="#vorteile" onClick={closeMenu}>Ihre Vorteile</Link>
        <Link href="#faq" onClick={closeMenu}>FAQ</Link>
      </nav>
      <Link className={styles.headerCta} href="#tipp">Jetzt Tipp abgeben <span aria-hidden="true">↗</span></Link>
      <LanguageSwitcher />
      <button className={styles.menuButton} type="button" aria-label={menuOpen ? 'Menü schließen' : 'Menü öffnen'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><i /><i /></button>
    </header>
  );
}
