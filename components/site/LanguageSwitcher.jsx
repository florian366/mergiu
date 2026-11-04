'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { pathForLanguage, isEnglishPath } from '../../data/i18n-routes';

export default function LanguageSwitcher() {
  const pathname = usePathname() || '/';
  const activeLanguage = isEnglishPath(pathname) ? 'en' : 'de';

  return (
    <details className="language-switcher">
      <summary aria-label={`Language: ${activeLanguage === 'en' ? 'English' : 'German'}`}>
        {activeLanguage.toUpperCase()}
      </summary>
      <div>
        <Link href={pathForLanguage(pathname, 'de')} hrefLang="de">Deutsch</Link>
        <Link href={pathForLanguage(pathname, 'en')} hrefLang="en">English</Link>
      </div>
    </details>
  );
}
