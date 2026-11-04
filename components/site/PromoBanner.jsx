import Link from 'next/link';

export default function PromoBanner({ locale = 'de' }) {
  const isEnglish = locale === 'en';
  const isFrench = locale === 'fr';
  return (
    <aside className="promo-banner" aria-label={isEnglish ? 'Sell your business' : isFrench ? 'Transmettre votre entreprise' : 'Unternehmen verkaufen'}>
      <span>{isEnglish ? 'Explore a commission-free business succession with MERGIU.' : isFrench ? 'Transmettez votre entreprise avec MERGIU, sans commission vendeur liée au succès.' : 'Verkaufen Sie Ihr Unternehmen provisionsfrei mit MERGIU.'}</span>
      <Link href={isEnglish ? '/present-your-business/' : isFrench ? '/fr/presenter-votre-entreprise/' : '/buchung/'}>{isEnglish ? 'Present your business.' : isFrench ? 'Présenter votre entreprise.' : 'Jetzt Unternehmen vorstellen.'}</Link>
    </aside>
  );
}
