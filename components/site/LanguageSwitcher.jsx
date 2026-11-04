'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { pathForLanguage, localeForPath } from '../../data/i18n-routes';

export default function LanguageSwitcher() {
  const pathname = usePathname() || '/';
  const activeLanguage = localeForPath(pathname);
  const languageNames = { de: 'German', en: 'English', fr: 'French' };

  return (
    <details className="language-switcher">
      <summary aria-label={`Language: ${languageNames[activeLanguage]}`}>
        {activeLanguage.toUpperCase()}
      </summary>
      <div>
        <Link href={pathForLanguage(pathname, 'de')} hrefLang="de">Deutsch</Link>
        <Link href={pathForLanguage(pathname, 'en')} hrefLang="en">English</Link>
        <Link href={pathForLanguage(pathname, 'fr')} hrefLang="fr">Français</Link>
      </div>
    </details>
  );
}
