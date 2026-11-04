import Link from 'next/link';
import { analysisSteps as defaultAnalysisSteps } from '../../data/homepage';

export default function AnalysisSection({ locale = 'de', steps = defaultAnalysisSteps }) {
  const isEnglish = locale === 'en';
  return (
    <section className="analysis panel">
      <div className="analysis-content">
        <div className="analysis-heading">
          <span className="eyebrow">{isEnglish ? 'NETWORK &amp; OPPORTUNITIES' : 'NETZWERK &amp; CHANCEN'}</span>
          <h2>
            {isEnglish ? 'Your business.' : 'Ihr Unternehmen.'}
            <br />
            {isEnglish ? 'Our network.' : 'Unser Netzwerk.'}
            <br />
            <span>{isEnglish ? 'New opportunities.' : 'Neue Perspektiven.'}</span>
          </h2>
          <div className="analysis-cta">
            <Link className="button" href={isEnglish ? '/present-your-business/' : '/buchung/'}>
              {isEnglish ? 'Join our network' : 'Netzwerk beitreten'}
            </Link>
            <small>
              {isEnglish ? 'One-time registration and profile-preparation fee: EUR 184. No success-based brokerage commission for sellers.' : 'Einmalige Registrierungs- und Aufbereitungsgebühr: 184€. Keine erfolgsabhängige Vermittlungsprovision für Verkäufer.'}
            </small>
          </div>
        </div>

        <div className="analysis-details">
          <p className="analysis-intro">
            {isEnglish ? 'The first step towards the right business succession starts with a conversation.' : 'Der erste Schritt zu einer passenden Unternehmensnachfolge beginnt mit einem Gespräch.'}
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
