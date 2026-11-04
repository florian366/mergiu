import Link from 'next/link';
import { analysisSteps as defaultAnalysisSteps } from '../../data/homepage';

export default function AnalysisSection({ locale = 'de', steps = defaultAnalysisSteps }) {
  const isEnglish = locale === 'en';
  const isFrench = locale === 'fr';
  return (
    <section className="analysis panel">
      <div className="analysis-content">
        <div className="analysis-heading">
          <span className="eyebrow">{isEnglish ? 'NETWORK &amp; OPPORTUNITIES' : isFrench ? 'RÉSEAU &amp; OPPORTUNITÉS' : 'NETZWERK &amp; CHANCEN'}</span>
          <h2>
            {isEnglish ? 'Your business.' : isFrench ? 'Votre entreprise.' : 'Ihr Unternehmen.'}
            <br />
            {isEnglish ? 'Our network.' : isFrench ? 'Notre réseau.' : 'Unser Netzwerk.'}
            <br />
            <span>{isEnglish ? 'New opportunities.' : isFrench ? 'De nouvelles perspectives.' : 'Neue Perspektiven.'}</span>
          </h2>
          <div className="analysis-cta">
            <Link className="button" href={isEnglish ? '/present-your-business/' : isFrench ? '/fr/presenter-votre-entreprise/' : '/buchung/'}>
              {isEnglish ? 'Join our network' : isFrench ? 'Rejoindre notre réseau' : 'Netzwerk beitreten'}
            </Link>
            <small>
              {isEnglish ? 'One-time registration and profile-preparation fee: EUR 184. No success-based brokerage commission for sellers.' : isFrench ? 'Frais uniques d’inscription et de préparation du profil : 184 €. Aucune commission vendeur liée au succès.' : 'Einmalige Registrierungs- und Aufbereitungsgebühr: 184€. Keine erfolgsabhängige Vermittlungsprovision für Verkäufer.'}
            </small>
          </div>
        </div>

        <div className="analysis-details">
          <p className="analysis-intro">
            {isEnglish ? 'The first step towards the right business succession starts with a conversation.' : isFrench ? 'La première étape vers une transmission adaptée commence par une conversation.' : 'Der erste Schritt zu einer passenden Unternehmensnachfolge beginnt mit einem Gespräch.'}
          </p>
          <ol className="analysis-steps">
            {steps.map(({ title, text }) => (
              <li key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
