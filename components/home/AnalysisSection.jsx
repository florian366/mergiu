import Link from 'next/link';
import { analysisSteps } from '../../data/homepage';

export default function AnalysisSection() {
  return (
    <section className="analysis panel">
      <div className="analysis-content">
        <div className="analysis-heading">
          <span className="eyebrow">NETZWERK &amp; CHANCEN</span>
          <h2>
            Ihr Unternehmen.
            <br />
            Unser Netzwerk.
            <br />
            <span>Neue Perspektiven.</span>
          </h2>
          <div className="analysis-cta">
            <Link className="button" href="/buchung/">
              Netzwerk beitreten
            </Link>
            <small>
              Einmalige Registrierungs- und Aufbereitungsgebühr: 184€. Keine
              erfolgsabhängige Vermittlungsprovision für Verkäufer.
            </small>
          </div>
        </div>

        <div className="analysis-details">
          <p className="analysis-intro">
            Der erste Schritt zu einer passenden Unternehmensnachfolge beginnt
            mit einem Gespräch.
          </p>
          <ol className="analysis-steps">
            {analysisSteps.map(({ title, text }) => (
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
