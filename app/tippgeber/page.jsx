import Link from 'next/link';
import SiteFooter from '../../components/site/SiteFooter';
import { industries } from '../../data/homepage';
import TipForm from './TipForm';
import TipHeader from './TipHeader';
import InViewMotion from '../../components/motion/InViewMotion';
import styles from './tippgeber.module.css';

export const metadata = {
  title: '500€ Tippgeberprämie für Unternehmensnachfolge | MERGIU',
  description: 'Sie kennen ein Unternehmen, das einen Nachfolger sucht? Geben Sie MERGIU einen diskreten Hinweis und erhalten Sie 500€ bei erfolgreicher Vermittlung.',
};

const steps = [
  ['Sie kennen ein Unternehmen', 'Sie wissen von einem Betrieb, bei dem eine Nachfolge, ein Verkauf oder eine Übergabe relevant sein könnte.'],
  ['Sie geben uns einen Hinweis', 'Füllen Sie das kurze Formular aus und erzählen Sie uns, worum es geht.'],
  ['Wir prüfen den Hinweis', 'Wir schauen, ob bereits ein Kontakt besteht, und melden uns diskret bei Ihnen.'],
  ['Wir klären die nächsten Schritte', 'Der Unternehmensinhaber entscheidet selbst, ob und wann er mit MERGIU sprechen möchte.'],
  ['500€ bei erfolgreicher Vermittlung', 'Kommt aufgrund Ihres Hinweises eine Nachfolgelösung zustande, erhalten Sie die Tippgeberprämie nach den vereinbarten Voraussetzungen.'],
];

const faqItems = [
  ['Muss ich selbst einen Nachfolger finden?', 'Nein. Ihre Aufgabe besteht lediglich darin, uns auf ein möglicherweise interessantes Unternehmen aufmerksam zu machen.'],
  ['Wann bekomme ich die 500€?', 'Die Tippgeberprämie wird bei einer erfolgreichen Vermittlung fällig, sofern die vorher mit Ihnen besprochenen Voraussetzungen erfüllt sind.'],
  ['Was bedeutet „erfolgreiche Vermittlung“?', 'Eine erfolgreiche Vermittlung liegt vor, wenn aufgrund Ihres Hinweises eine Nachfolgelösung zwischen dem Unternehmen und einem passenden Nachfolger, Käufer oder Investor zustande kommt. Die konkreten Voraussetzungen werden vorab mit Ihnen besprochen.'],
  ['Was passiert, wenn MERGIU das Unternehmen bereits kennt?', 'Dann prüfen wir zunächst, ob bereits ein Kontakt oder eine bestehende Anfrage vorliegt. Wir melden uns bei Ihnen und klären den weiteren Ablauf.'],
  ['Muss ich den Unternehmensinhaber persönlich kennen?', 'Nein. Entscheidend ist, dass Ihr Hinweis auf ein Unternehmen hindeutet, bei dem eine Nachfolge oder ein Verkauf relevant sein könnte.'],
  ['Muss ich das Unternehmen über meinen Tipp informieren?', 'Nein. Wir besprechen mit Ihnen, wie eine Kontaktaufnahme sinnvoll und diskret erfolgen kann.'],
  ['Was, wenn das Unternehmen noch nicht verkaufen möchte?', 'Auch das kann interessant sein. Eine Nachfolge wird häufig langfristig geplant. Wir prüfen gemeinsam, ob und wann eine Kontaktaufnahme sinnvoll ist.'],
];

export default function TipsterPage({ locale = 'de', industries: pageIndustries = industries } = {}) {
  return (
    <div className={styles.tipsterPage} id="top">
      <TipHeader locale={locale} />
      <main>
        <section className={styles.hero}>
          <InViewMotion className={styles.heroCopy} distance={12}>
            <p className={styles.eyebrow}>FÜR AUFMERKSAME UNTERNEHMER UND MENSCHEN IM NETZWERK</p>
            <h1>Kennen Sie ein Unternehmen, das einen <em>Nachfolger sucht?</em></h1>
            <p className={styles.lead}>Geben Sie uns einen diskreten Hinweis und erhalten Sie <strong>500€ Tippgeberprämie</strong> bei erfolgreicher Vermittlung.</p>
            <div className={styles.heroActions}><Link className={`${styles.button} ${styles.buttonLight}`} href="#tipp">Jetzt Tipp abgeben <span aria-hidden="true">↗</span></Link><Link className={styles.textLink} href="#ablauf">Mehr erfahren <span aria-hidden="true">↓</span></Link></div>
          </InViewMotion>
          <InViewMotion className={styles.heroNote} delay={0.08}><strong>500€</strong><span>Tippgeberprämie<br />bei erfolgreicher Vermittlung</span></InViewMotion>
        </section>

        <InViewMotion as="section" className={styles.intro} id="ablauf">
          <div className={styles.sectionLabel}>01 / KURZ ERKLÄRT</div>
          <div className={styles.introCopy}><h2>Manchmal beginnt eine Unternehmensnachfolge mit einem <em>offenen Gespräch.</em></h2><p>Vielleicht wissen Sie von einem Handwerksbetrieb, einer Arztpraxis, einem Dienstleistungsunternehmen, einem Einzelhändler oder einem anderen Betrieb, dessen Inhaber über die Zukunft nachdenkt.</p><p>Sie müssen den Inhaber nicht überzeugen und keinen Käufer suchen. Ihr Hinweis genügt. MERGIU prüft diskret, ob Unterstützung bei der Nachfolge sinnvoll sein könnte.</p></div>
        </InViewMotion>

        <InViewMotion as="section" className={styles.process}>
          <div className={styles.sectionLabel}>02 / SO FUNKTIONIERT IHR TIPP</div>
          <div className={styles.processHeading}><h2>Sie kennen das Unternehmen<br /><em>wir kümmern uns um den Rest.</em></h2><p>Sie müssen selbst keine Vermittlung durchführen und keine Verhandlungen führen.</p></div>
          <div className={styles.steps}>{steps.map(([title, description], index) => <InViewMotion as="article" delay={index * 0.06} key={title}><b>{String(index + 1).padStart(2, '0')}</b><h3>{title}</h3><p>{description}</p></InViewMotion>)}</div>
        </InViewMotion>

        <InViewMotion as="section" className={styles.benefits} id="vorteile">
          <div className={styles.sectionLabel}>03 / IHR VORTEIL</div>
          <div className={styles.benefitsLayout}><div><h2>Sie müssen kein Experte für <em>Unternehmensverkäufe</em> sein.</h2><p>Ein guter Hinweis ist oft der erste Schritt. Sie brauchen weder genaue Unternehmenszahlen noch einen fertigen Nachfolgeplan.</p></div><div className={styles.benefitList}><div><b>01</b><span>Keinen Käufer suchen</span></div><div><b>02</b><span>Keine Verhandlungen führen</span></div><div><b>03</b><span>Keine Unterlagen zusammenstellen</span></div><div><b>04</b><span>Keine öffentliche Empfehlung aussprechen</span></div></div></div>
        </InViewMotion>

        <InViewMotion as="section" className={styles.trust}><div className={styles.sectionLabel}>04 / WARUM MERGIU?</div><div className={styles.trustGrid}><article><b>Diskret</b><p>Wir behandeln Ihren Hinweis und die Situation des Unternehmens vertraulich.</p></article><article><b>Unverbindlich</b><p>Sie geben zunächst nur eine Information weiter. Die weiteren Schritte werden gemeinsam besprochen.</p></article><article><b>Persönlich</b><p>Wir prüfen jeden Hinweis individuell und klären den passenden Weg für die Kontaktaufnahme.</p></article><article><b>Branchenübergreifend</b><p>Wir suchen Nachfolgelösungen für Unternehmen aus vielen verschiedenen Branchen.</p></article></div></InViewMotion>

        <InViewMotion as="section" className={styles.reward}><div className={styles.rewardCopy}><div className={styles.sectionLabel}>05 / DIE TIPPgeberPRÄMIE</div><h2>500€ bei <em>erfolgreicher Vermittlung.</em></h2><p>Die Prämie wird fällig, wenn aus Ihrem Hinweis tatsächlich eine erfolgreiche Vermittlung einer Nachfolgelösung entsteht.</p><p className={styles.small}>Vor einer möglichen Kontaktaufnahme klären wir mit Ihnen den konkreten Ablauf und die Voraussetzungen. Kein Anspruch besteht insbesondere für bereits bekannte Kontakte oder Kontakte, die unabhängig von Ihrem Hinweis bereits in einem laufenden Prozess stehen.</p></div><div className={styles.rewardNumber}><strong>500€</strong><span>Tippgeberprämie<br />bei erfolgreicher Vermittlung</span></div></InViewMotion>

        <InViewMotion as="section" className={styles.note}><div><span className={styles.noteMark}>✦</span><h2>Sie müssen den Unternehmensinhaber <em>nicht selbst kontaktieren.</em></h2><p>Wenn Sie unsicher sind, ob Ihre Information bereits bekannt ist oder wie eine Kontaktaufnahme sinnvoll wäre: Kein Problem. Geben Sie uns zunächst einfach Ihren Hinweis. Wir prüfen den Kontakt und besprechen anschließend mit Ihnen, wie es weitergehen kann.</p></div></InViewMotion>

        <InViewMotion as="section" className={styles.faq} id="faq"><div className={styles.sectionLabel}>06 / HÄUFIGE FRAGEN</div><h2>Was Sie noch <em>wissen möchten.</em></h2><div className={styles.faqList}>{faqItems.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></InViewMotion>

        <InViewMotion as="section" className={styles.formSection} id="tipp"><div className={styles.formIntro}><div className={styles.sectionLabel}>07 / IHR TIPP</div><h2>Kennen Sie ein Unternehmen, das einen <em>Nachfolger sucht?</em></h2><p>Erzählen Sie uns kurz, worum es geht. Wir melden uns diskret bei Ihnen.</p></div><TipForm locale={locale} /></InViewMotion>
      </main>
      <SiteFooter industries={pageIndustries} locale={locale} />
    </div>
  );
}
