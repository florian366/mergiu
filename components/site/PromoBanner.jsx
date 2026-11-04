import Link from 'next/link';

export default function PromoBanner() {
  return (
    <aside className="promo-banner" aria-label="Unternehmen verkaufen">
      <span>Verkaufen Sie Ihr Unternehmen provisionsfrei mit MERGIU.</span>
      <Link href="/buchung/">Jetzt Unternehmen vorstellen.</Link>
    </aside>
  );
}
