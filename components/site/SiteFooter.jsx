import Link from 'next/link';

export default function SiteFooter({ industries }) {
  return (
    <footer className="site-footer" id="contact">
      <div className="site-footer-main">
        <div className="site-footer-intro">
          <Link className="site-footer-logo" href="#top" aria-label="MERGIU – Startseite">
            <img src="/images/logo%20wei%C3%9F%20mergiu.png" alt="MERGIU" />
          </Link>
          <p>Persönlich, diskret und branchenübergreifend vernetzt.</p>
          <Link className="site-footer-cta" href="/buchung/">
            Unternehmen verkaufen <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <nav className="site-footer-column" aria-label="Branchen">
          <h2>Branchen</h2>
          {industries.map((industry) => (
            <Link href={industry.href} key={industry.name}>
              {industry.name}
            </Link>
          ))}
        </nav>
      </div>

      <div className="site-footer-bottom">
        <span>© 2026 MERGIU</span>
        <div>
          <Link href="/datenschutz.html">Datenschutz</Link>
          <Link href="/agb.html">AGB</Link>
          <Link href="/impressum.html">Impressum</Link>
        </div>
      </div>
    </footer>
  );
}
