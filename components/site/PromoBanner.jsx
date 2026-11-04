import Link from 'next/link';

export default function PromoBanner({ locale = 'de' }) {
  const isEnglish = locale === 'en';
  return (
    <aside className="promo-banner" aria-label={isEnglish ? 'Sell your business' : 'Unternehmen verkaufen'}>
      <span>{isEnglish ? 'Explore a commission-free business succession with MERGIU.' : 'Verkaufen Sie Ihr Unternehmen provisionsfrei mit MERGIU.'}</span>
      <Link href={isEnglish ? '/present-your-business/' : '/buchung/'}>{isEnglish ? 'Present your business.' : 'Jetzt Unternehmen vorstellen.'}</Link>
    </aside>
  );
}
