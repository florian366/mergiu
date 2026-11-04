'use client';

import { useEffect, useMemo, useState } from 'react';

const blogPosts = [
  { slug: 'tierarztpraxis-verkaufen-nachfolger-finden', title: 'Tierarztpraxis verkaufen: Wie Sie den richtigen Nachfolger finden', date: '2026-11-04', label: 'Tiermedizin, Unternehmensnachfolge', image: '/images/Tierarztpraxis%20und%20Praxisteam.jpg' },
  { slug: 'handwerksbetrieb-verkaufen-nachfolger-finden', title: 'Handwerksbetrieb verkaufen: So finden Sie einen passenden Nachfolger', date: '2026-11-02', label: 'Handwerk, Unternehmensnachfolge', image: '/images/Handwerksbetrieb%20verkaufen.jpg' },
  { slug: 'unternehmensnachfolge-im-handwerk-worauf-betriebsinhaber-achten-sollten-und-wie-sie-einen-passenden-nachfolger-finden', title: 'Unternehmensnachfolge im Handwerk: Worauf Betriebsinhaber achten sollten und wie Sie einen passenden Nachfolger finden', date: '2026-10-28', label: 'Handwerk, Unternehmensnachfolge', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1800&q=85' },
];

const industries = [
  ['Handwerk', '/handwerk/', 'Handwerk.jpg', 'Vom Familienbetrieb bis zum spezialisierten Handwerksunternehmen, wir bringen Inhaber mit Menschen zusammen, die einen Betrieb weiterführen und entwickeln möchten.'],
  ['Tiermedizin', '/tiermedizin/', 'Tiermedizin.jpg', 'Wir unterstützen Praxisinhaber bei der Suche nach geeigneten Nachfolgern, Partnern oder strategischen Käufern.'],
  ['Kanzleien', '/kanzleien/', 'Kanzlei.jpg', 'Für Steuerberater, Rechtsanwälte und andere Kanzleiinhaber schaffen wir Verbindungen zu möglichen Nachfolgern.'],
  ['Facility Management', '/facility-management/', 'facility management 4.jpg', 'Wir bringen Eigentümer und Betreiber von Facility-Management-Unternehmen mit passenden Nachfolgern und strategischen Partnern zusammen.'],
  ['Einzelhandel', '/einzelhandel/', 'Einzelhandel.jpg', 'Ob inhabergeführtes Geschäft oder etabliertes Handelsunternehmen: Wir helfen dabei, passende Perspektiven für die Zukunft zu finden.'],
  ['Dienstleistungen', '/dienstleistungen/', 'Dienstleistung.jpg', 'Von spezialisierten Dienstleistern bis zu etablierten Serviceunternehmen – wir vernetzen Verkäufer mit passenden Interessenten.'],
];

const processItems = [
  ['Menschlichkeit', 'Persönliche Verbindungen statt anonymer Verkaufsplattformen.', 'Wir glauben, dass erfolgreiche Unternehmensnachfolgen mit Vertrauen beginnen. Deshalb setzen wir auf ein persönliches Netzwerk und individuelle Kontakte statt auf eine öffentliche Vermarktung.', '/persönlich/'],
  ['Diskretion', 'Vertraulichkeit von Anfang an', 'Ihre Verkaufsabsicht ist eine sensible Information. Deshalb behandeln wir sämtliche Angaben vertraulich. Vor dem Austausch vertraulicher Unternehmensinformationen vereinbaren wir eine entsprechende Geheimhaltungsvereinbarung (NDA). Eine Weitergabe erfolgt ausschließlich mit Ihrer Zustimmung.', '/diskretion/'],
  ['Netzwerk', 'Passende Kontakte', 'Wir betrachten nicht nur Branche und Unternehmensgröße, sondern auch die Interessen und Möglichkeiten potenzieller Nachfolger und Käufer.', '/netzwerk/'],
  ['Keine Verkaufsprovision', 'Provisionsfrei für Verkäufer', 'Für Verkäufer fällt keine erfolgsabhängige Vermittlungsprovision an. Nur die einmalige Registrierungs- und Aufbereitungsgebühr von 184 € wird berechnet.', '/provisionsfrei/'],
  ['Persönliche Betreuung', 'Ein Ansprechpartner für Ihren Weg', 'Von der ersten Einschätzung bis zur Kontaktaufnahme begleiten wir Sie persönlich und behalten Ihre Ziele und Wünsche im Blick.', '/persönliche-betreuung/'],
];

function Header({ open, setOpen }) {
  return <>
    <aside className="promo-banner"><span>Verkaufen Sie Ihr Unternehmen provisionsfrei mit MERGIU.</span><a href="/buchung/">Jetzt Unternehmen vorstellen.</a></aside>
    <header className="header">
      <a className="logo" href="#top"><img src="/images/logo%20wei%C3%9F%20mergiu.png" alt="MERGIU" /></a>
      <nav className={open ? 'open' : ''}>
        <a className="active" href="#top" onClick={() => setOpen(false)}>Home</a><a href="#about-work" onClick={() => setOpen(false)}>Über</a><a href="#work" onClick={() => setOpen(false)}>Branchen</a><a href="#blog" onClick={() => setOpen(false)}>Impulse</a><a className="mobile-nav-link" href="/buchung/">Nachfolger finden</a>
      </nav>
      <a className="contact-pill" href="/buchung/">Kontakt aufnehmen <span>↗</span></a>
      <button className="menu" type="button" aria-label="Menü öffnen" aria-expanded={open} onClick={() => setOpen(!open)}><i></i><i></i></button>
    </header>
  </>;
}

function Hero() {
  return <section className="hero panel"><div className="hero-note"><img className="logo-rune" src="/images/Mergio%20M%20wei%C3%9F.png" alt="" /><span className="hero-note-copy"><strong>Persönlicher Ansprechpartner statt anonymer Verkaufsplattform.</strong><span>12.400+ Unternehmen im Netzwerk.</span></span></div><div className="hero-title">Provisionsfreie Nachfolge<br /><span>für Ihr Unternehmen</span><br />finden.</div><div className="hero-visual"><div className="hero-word" aria-label="MERGIU">{['M', 'E', 'R', 'G', 'I', 'U'].map((letter) => <span key={letter} className={`letter-${letter.toLowerCase()}`}>{letter}</span>)}</div><div className="orb orb-a"></div><div className="orb orb-b"></div></div><div className="scroll">mehr erfahren <b>↓</b></div></section>;
}

function Industries() {
  return <section className="services panel" id="work"><div className="services-title">Branchenübergreifend, international vernetzt</div><p className="services-intro">Wir initiieren und begleiten Unternehmensnachfolgen sowie Verkaufsprozesse in unterschiedlichen Branchen. Dabei kommt es nicht darauf an, wie groß ein Unternehmen ist, sondern darauf, die richtigen Menschen zusammenzubringen.</p><div className="service-row">{industries.map(([name, href, image, text]) => <a className="service-card" href={href} key={name}><div className="service-image" style={{ backgroundImage: `url("/images/${encodeURIComponent(image).replace(/%2F/g, '/')}")` }}></div><h3>{name}</h3><p>{text}</p></a>)}</div></section>;
}

function Stats() {
  return <section className="stats panel">{[['↗', '12,421+', 'Unternehmen im Netzwerk'], ['◎', '7+', 'Länder im Netzwerk'], ['◔', '6', 'Abgedeckte Branchen']].map(([icon, value, text]) => <div className="stat" key={text}><i aria-hidden="true">{icon}</i><strong>{value}</strong><p>{text}</p></div>)}</section>;
}

function ProcessAccordion() {
  const [selected, setSelected] = useState(0);
  return <section className="accordion-section panel" id="about-work" aria-label="Unsere Arbeitsweise"><div className="accordion-layout">{processItems.map(([title, copy, detail, href], index) => <article className={`accordion-item ${selected === index ? 'selected' : ''}`} key={title}><button className="accordion-tab" type="button" aria-expanded={selected === index} onClick={() => setSelected(index)}><b>{String(index + 1).padStart(2, '0')}</b><span>{title}</span></button>{selected === index && <div className="accordion-content"><div className="accordion-copy"><p>{copy}</p><small>{detail}</small><a className="button" href={href}>mehr erfahren ↗</a></div><div className={`accordion-image image-${['strategy', 'branding', 'marketing', 'planning', 'support'][index]}`}></div></div>}</article>)}</div></section>;
}

function BlogPreview() {
  const [query, setQuery] = useState('');
  const [focused, setFocused] = useState(false);
  const newest = blogPosts[0];
  const results = useMemo(() => blogPosts.filter((post) => post.title.toLowerCase().includes(query.toLowerCase())), [query]);
  const date = new Date(newest.date).toLocaleDateString('de-DE', { day: '2-digit', month: 'short' });
  return <section className="blog-section panel" id="blog" aria-label="Blogbeitrag"><div className="blog-layout"><article className="blog-post"><div className="blog-hero-image" style={{ backgroundImage: `url("${newest.image}")` }}></div><div className="blog-meta">{date} <span>|</span> {newest.label}</div><h2>{newest.title}</h2><p>Die Übergabe einer Tierarztpraxis betrifft nicht nur Räume und Ausstattung. Auch ein eingespieltes Team, langjährige Patientenbeziehungen und die Verantwortung für die tiermedizinische Versorgung sollen in gute Hände übergehen.</p><p>Erfahren Sie, welche Käufergruppen für Ihre Praxis infrage kommen und wie MERGIU passende Nachfolger aus dem eigenen Netzwerk identifiziert.</p><a className="button" href={`/${newest.slug}/`}>Beitrag lesen ↗</a></article><aside className={`blog-sidebar ${focused ? 'search-open' : ''}`}><div className="blog-search"><input type="search" value={query} placeholder="Inhalte suchen" aria-label="Blogbeiträge durchsuchen" onFocus={() => setFocused(true)} onChange={(event) => { setQuery(event.target.value); setFocused(true); }} /><span>⌕</span></div><div className="blog-search-results">{results.map((post) => <a href={`/${post.slug}/`} key={post.slug}>{post.title}</a>)}{!results.length && <span className="no-results">Keine Beiträge gefunden.</span>}</div><div className="blog-sidebar-block"><h3>Kategorien</h3>{['Handwerk', 'Tiermedizin', 'Dienstleistungen', 'Einzelhandel', 'Kanzleien', 'Facility Management'].map((category) => <a href={`/category.html?category=${encodeURIComponent(category)}`} key={category}>{category}</a>)}</div><div className="blog-sidebar-block"><h3>Weitere Beiträge</h3>{blogPosts.slice(1).map((post) => <a className="latest-post" href={`/${post.slug}/`} key={post.slug}><span className="latest-thumb" style={{ backgroundImage: `url("${post.image}")` }}></span><span><small>{new Date(post.date).toLocaleDateString('de-DE', { day: '2-digit', month: 'short' })}</small>{post.title}</span></a>)}</div></aside></div></section>;
}

function Footer() {
  return <footer className="site-footer" id="contact"><div className="site-footer-main"><div className="site-footer-intro"><a className="site-footer-logo" href="#top"><img src="/images/logo%20wei%C3%9F%20mergiu.png" alt="MERGIU" /></a><p>Persönlich, diskret und branchenübergreifend vernetzt.</p><a className="site-footer-cta" href="/buchung/">Unternehmen verkaufen <span>↗</span></a></div><nav className="site-footer-column" aria-label="Branchen"><h2>Branchen</h2>{industries.map(([name, href]) => <a href={href} key={name}>{name}</a>)}</nav></div><div className="site-footer-bottom"><span>© 2026 MERGIU</span><div><a href="/datenschutz.html">Datenschutz</a><a href="/agb.html">AGB</a><a href="/impressum.html">Impressum</a></div></div></footer>;
}

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => { const close = () => setMenuOpen(false); window.addEventListener('hashchange', close); return () => window.removeEventListener('hashchange', close); }, []);
  return <><Header open={menuOpen} setOpen={setMenuOpen} /><main id="top"><Hero /><section className="intro panel" id="about"><div className="intro-side"><div className="eyebrow">UNTERNEHMENSNACHFOLGE · UNTERNEHMENSVERKAUF · INVESTMENTS</div><p>Wir bringen Unternehmer, die ihr Lebenswerk in neue Hände geben möchten, mit passenden Nachfolgern, Käufern und Investoren zusammen.</p><p>Persönlich, diskret und branchenübergreifend. Für eine Unternehmensnachfolge, die das Fundament Ihres Unternehmens wertschätzt und langfristig darauf aufbaut.</p><a className="underlink" href="/buchung/">Unternehmen vermitteln lassen ↗</a></div><div className="intro-title"><span className="scroll-word">Ihr</span> <span className="scroll-word">Unternehmen</span> <span className="scroll-word">hat</span> <span className="scroll-word">eine</span> <span className="scroll-word">Zukunft.</span><br /><span className="scroll-word">Wir</span> <span className="scroll-word">helfen,</span> <span className="scroll-word">sie</span> <span className="scroll-word">zu</span> <span className="scroll-word">gestalten.</span></div></section><Industries /><Stats /><ProcessAccordion /><section className="success panel"><div className="success-overlay"><h2>{['Die', 'Zukunft', 'Ihres', 'Unternehmens'].map((word) => <span className="success-word" key={word}>{word} </span>)}<br />{['beginnt', 'mit', 'uns.'].map((word) => <span className="success-word" key={word}>{word} </span>)}</h2><a className="button success-button" href="/buchung/">Kontakt aufnehmen <span>↗</span></a></div></section><section className="analysis panel"><div className="analysis-content"><div className="analysis-heading"><span className="eyebrow">NETZWERK &amp; CHANCEN</span><h2>Ihr Unternehmen.<br />Unser Netzwerk.<br /><span>Neue Perspektiven.</span></h2><div className="analysis-cta"><a className="button" href="/buchung/">Netzwerk beitreten</a><small>Einmalige Registrierungs- und Aufbereitungsgebühr: 184€. Keine erfolgsabhängige Vermittlungsprovision für Verkäufer.</small></div></div><div className="analysis-details"><p className="analysis-intro">Der erste Schritt zu einer passenden Unternehmensnachfolge beginnt mit einem Gespräch.</p><ol className="analysis-steps">{[['Sie nehmen Kontakt auf', 'Füllen Sie unser kurzes Formular aus und geben Sie uns einen ersten Einblick.'], ['Wir lernen Ihr Unternehmen kennen', 'Wir besprechen Ihre Wünsche und bereiten die wichtigsten Informationen auf.'], ['Wir suchen passende Möglichkeiten', 'Wir gleichen Ihr Unternehmen mit geeigneten Nachfolgern, Käufern und Investoren ab.'], ['Sie entscheiden', 'Erst wenn ein passender Kontakt gefunden ist, stimmen wir mit Ihnen die nächsten Schritte ab.']].map(([title, text]) => <li key={title}><h3>{title}</h3><p>{text}</p></li>)}</ol></div></div></section><BlogPreview /></main><Footer /></>;
}
