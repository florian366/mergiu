import Link from 'next/link';
import SiteFooter from '../site/SiteFooter';
import SiteHeader from '../site/SiteHeader';
import { industries } from '../../data/homepage';
import InViewMotion from '../motion/InViewMotion';
import styles from './SectorLandingPage.module.css';

function SectionLabel({ children, className }) {
  return <p className={`${styles.eyebrow} ${className || ''}`}>{children}</p>;
}

function ActionLink({ children }) {
  return (
    <Link className={styles.button} href="#kontakt">
      {children} <span aria-hidden="true">↗</span>
    </Link>
  );
}

function Hero({ data }) {
  const { hero } = data;

  return (
    <section className={styles.hero} aria-labelledby="sector-title">
      <img className={styles.heroImage} src={hero.image} alt={hero.imageAlt} />
      <div className={styles.heroShade} aria-hidden="true" />
      <InViewMotion className={styles.heroCopy} distance={12}>
        <SectionLabel>{hero.eyebrow}</SectionLabel>
        <h1 id="sector-title">
          {hero.before ? (
            <>
              {hero.before} <em>{hero.emphasis}</em>
            </>
          ) : (
            hero.title
          )}
        </h1>
        <p className={styles.heroLead}>{hero.text}</p>
        <ActionLink>{hero.action}</ActionLink>
        {hero.feeNote && <small>{hero.feeNote}</small>}
      </InViewMotion>
      <Link className={styles.scrollHint} href="#einleitung">
        Mehr erfahren <span aria-hidden="true">↓</span>
      </Link>
    </section>
  );
}

function Introduction({ intro }) {
  return (
    <InViewMotion as="section" className={styles.intro} id="einleitung">
      <SectionLabel>{intro.eyebrow}</SectionLabel>
      <div>
        <h2>
          {intro.lines
            ? intro.lines.map((line) => (
                <span key={line.text}>
                  {line.emphasis === 'strong' ? (
                    <strong>{line.text}</strong>
                  ) : line.emphasis === 'em' ? (
                    <em>{line.text}</em>
                  ) : (
                    line.text
                  )}
                </span>
              ))
            : intro.title}
        </h2>
        {intro.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </InViewMotion>
  );
}

function Story({ story, index }) {
  return (
    <InViewMotion as="section" className={styles.story}>
      <div className={styles.storyImageWrap}>
        <img className={styles.storyImage} src={story.image} alt={story.imageAlt} />
      </div>
      <div className={styles.storyContent}>
        <SectionLabel
          className={story.smallEyebrow ? styles.smallEyebrow : undefined}
        >
          {story.eyebrow}
        </SectionLabel>
        <h2>{story.title}</h2>
        {story.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        {story.cards && (
          <div className={styles.supportCards}>
            {story.cards.map((card) => (
              <article key={card.title}>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        )}
        {story.action && (
          <div className={styles.storyAction}>
            <ActionLink>{story.action}</ActionLink>
            {story.note && <small>{story.note}</small>}
          </div>
        )}
        {story.listTitle && (
          <>
            <h3>{story.listTitle}</h3>
            <ul className={styles.featureList}>
              {story.points.map((point) => (
                <li key={point.title}>
                  {point.title && <strong>{point.title}:</strong>} {point.text}
                </li>
              ))}
            </ul>
          </>
        )}
        {story.closing && <p className={styles.closing}>{story.closing}</p>}
      </div>
      <span className={styles.storyIndex} aria-hidden="true">
        {String(index + 2).padStart(2, '0')}
      </span>
    </InViewMotion>
  );
}

function Experience({ experience }) {
  return (
    <InViewMotion as="section" className={styles.experience}>
      <div className={styles.experienceHeading}>
        <SectionLabel>{experience.eyebrow}</SectionLabel>
        <h2>{experience.title}</h2>
      </div>
      <div className={styles.experienceCopy}>
        {experience.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        {experience.listTitle && <h3>{experience.listTitle}</h3>}
        {experience.points && (
          <ul>
            {experience.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        )}
        {experience.closing && <p>{experience.closing}</p>}
      </div>
    </InViewMotion>
  );
}

function Process({ process }) {
  return (
    <InViewMotion as="section" className={styles.process} id="prozess">
      <div className={styles.processHeading}>
        <SectionLabel>{process.eyebrow}</SectionLabel>
        <h2>{process.title}</h2>
        <ActionLink>{process.action}</ActionLink>
      </div>
      <div className={styles.steps}>
        {process.steps.map((step, index) => (
          <article key={step.title}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </article>
        ))}
      </div>
    </InViewMotion>
  );
}

function Questions({ faq }) {
  return (
    <InViewMotion as="section" className={styles.faq}>
      <div className={styles.faqHeading}>
        <SectionLabel>{faq.eyebrow}</SectionLabel>
        <h2>
          {faq.title}
          {faq.titleStrong && (
            <>
              {' '}
              <strong>{faq.titleStrong}</strong>
            </>
          )}
        </h2>
      </div>
      <div className={styles.faqList}>
        {faq.items.map((item, index) => (
          <details key={item.question} open={index === 0}>
            <summary>{item.question}</summary>
            <p>
              {item.answerEmphasis ? (
                <>
                  {item.answerBefore}
                  <strong>{item.answerEmphasis}</strong>
                  {item.answerAfter}
                </>
              ) : (
                item.answer
              )}
            </p>
          </details>
        ))}
      </div>
    </InViewMotion>
  );
}

function Benefits({ benefits }) {
  return (
    <InViewMotion as="section" className={styles.benefits}>
      <SectionLabel>{benefits.eyebrow}</SectionLabel>
      <h2>
        <span className={benefits.noWrap ? styles.noWrap : undefined}>
          {benefits.title}
        </span>
        {benefits.emphasis && (
          <>
            <br />
            <em>{benefits.emphasis}</em>
          </>
        )}
      </h2>
      <div className={styles.benefitGrid}>
        {benefits.items.map((item, index) => (
          <article key={item.title}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </InViewMotion>
  );
}

function Contact({ contact }) {
  const mailto = `mailto:info@mergiu.de?subject=${encodeURIComponent(contact.subject)}`;

  return (
    <InViewMotion as="section" className={styles.contact} id="kontakt">
      <div>
        <SectionLabel>Der nächste Schritt</SectionLabel>
        <h2>{contact.title}</h2>
        <p>{contact.text}</p>
        <a className={styles.button} href={mailto}>
          {contact.action} <span aria-hidden="true">↗</span>
        </a>
      </div>
      <div className={styles.fee}>
        184€
        <small>
          einmalige Registrierungs- und Aufbereitungsgebühr
          <br />
          keine erfolgsabhängige Vermittlungsprovision
        </small>
      </div>
    </InViewMotion>
  );
}

export default function SectorLandingPage({ data }) {
  return (
    <div className={styles.page}>
      <SiteHeader />
      <main id="top">
        <Hero data={data} />
        <div className={styles.registrationBanner}>
          <span>
            Sparen Sie sich 20.000€+ für die Provision einer gewöhnlichen Nachfolgesuche.
            Jetzt bei{' '}
          </span>
          <Link href={data.promoHref || '/buchung/'}>MERGIU registrieren</Link>
          <span> &amp; provisionsfrei Nachfolger finden.</span>
        </div>
        <Introduction intro={data.intro} />
        {data.stories.map((story, index) => (
          <Story key={story.title} story={story} index={index} />
        ))}
        {data.processAfterStories && <Process process={data.process} />}
        <Experience experience={data.experience} />
        {!data.processAfterStories && <Process process={data.process} />}
        <Questions faq={data.faq} />
        <Benefits benefits={data.benefits} />
        <Contact contact={data.contact} />
      </main>
      <SiteFooter industries={industries} />
    </div>
  );
}
