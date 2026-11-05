import Link from 'next/link';

const englishIndustryLabels = {
  Handwerk: 'Construction',
  Tiermedizin: 'Veterinary medicine',
  Kanzleien: 'Professional firms',
  'Facility Management': 'Facility services',
  Einzelhandel: 'Retail',
  Dienstleistungen: 'Business services',
};

export default function SiteFooter({ industries, locale = 'de' }) {
  const isEnglish = locale === 'en';
  const isFrench = locale === 'fr';
  return (
    <footer className="site-footer" id="contact">
      <div className="site-footer-main">
        <div className="site-footer-intro">
          <Link className="site-footer-logo" href="#top" aria-label={isFrench ? 'MERGIU – Accueil' : 'MERGIU – Startseite'}>
            <img src="/images/logo%20wei%C3%9F%20mergiu.png" alt="MERGIU" />
          </Link>
          <p>{isEnglish ? 'Personal, discreet and connected across industries.' : isFrench ? 'Un accompagnement personnel, discret et intersectoriel.' : 'Persönlich, diskret und branchenübergreifend vernetzt.'}</p>
          <Link className="site-footer-cta" href={isEnglish ? '/present-your-business/' : isFrench ? '/fr/presenter-votre-entreprise/' : '/buchung/'}>
            {isEnglish ? 'Present your business' : isFrench ? 'Présenter votre entreprise' : 'Unternehmen verkaufen'} <span aria-hidden="true">↗︎</span>
          </Link>
        </div>

        <nav className="site-footer-column" aria-label={isEnglish ? 'Industries' : isFrench ? 'Secteurs' : 'Branchen'}>
          <h2>{isEnglish ? 'Industries' : isFrench ? 'Secteurs' : 'Branchen'}</h2>
          {industries.map((industry) => (
            <Link href={isEnglish ? industry.englishHref || industry.href : industry.href} key={industry.name}>
              {isEnglish ? englishIndustryLabels[industry.name] || industry.name : industry.name}
            </Link>
          ))}
        </nav>
      </div>

      <div className="site-footer-bottom">
        <span>© 2026 MERGIU</span>
        <div>
          <Link href={isEnglish ? '/privacy-policy/' : isFrench ? '/fr/politique-de-confidentialite/' : '/datenschutz.html'}>{isEnglish ? 'Privacy policy' : isFrench ? 'Confidentialité' : 'Datenschutz'}</Link>
          <Link href={isEnglish ? '/terms-and-conditions/' : isFrench ? '/fr/conditions-generales/' : '/agb.html'}>{isEnglish ? 'Terms' : isFrench ? 'Conditions générales' : 'AGB'}</Link>
          <Link href={isEnglish ? '/legal-notice/' : isFrench ? '/fr/mentions-legales/' : '/impressum.html'}>{isEnglish ? 'Legal notice' : isFrench ? 'Mentions légales' : 'Impressum'}</Link>
        </div>
      </div>
    </footer>
  );
}
