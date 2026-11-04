import Link from 'next/link';
import { blogPosts } from '../../data/homepage';
import InViewMotion from '../motion/InViewMotion';
import styles from './ValuePage.module.css';

export function ValueHero({ hero }) {
  return (
    <section className={styles.hero} aria-labelledby="value-page-title">
      <div
        className={styles.heroImage}
        style={{ '--hero-image': `url("${hero.image}")` }}
        aria-hidden="true"
      />
      <div className={styles.heroShade} aria-hidden="true" />
      <InViewMotion className={styles.heroContent} distance={12}>
        <p className={styles.eyebrow}>{hero.eyebrow}</p>
        <h1 id="value-page-title">
          {hero.heading.map((line) => (
            <span className={line.emphasis ? styles.emphasis : undefined} key={line.text}>
              {line.text}
            </span>
          ))}
        </h1>
        <p className={styles.heroLead}>{hero.lead}</p>
        <Link className={styles.heroButton} href="/#contact">
          {hero.action} <span aria-hidden="true">↗</span>
        </Link>
      </InViewMotion>
      <span className={styles.heroIndex} aria-hidden="true">{hero.index}</span>
    </section>
  );
}

export function ValueIntro({ intro }) {
  return (
    <InViewMotion as="section" className={styles.intro}>
      <div className={styles.sectionLabel}>{intro.label}</div>
      <div className={styles.introCopy}>
        <h2>{intro.title}</h2>
        <p>{intro.text}</p>
      </div>
    </InViewMotion>
  );
}

export function PrinciplesGrid({ principles }) {
  return (
    <section className={styles.principles} aria-labelledby="principles-title">
      <div className={styles.principlesHeading}>
        <p className={styles.eyebrow}>{principles.eyebrow}</p>
        <h2 id="principles-title">
          {principles.title.map((line, index) => (
            <span className={index === 1 ? styles.emphasis : undefined} key={line}>
              {line}
            </span>
          ))}
        </h2>
      </div>
      <div className={styles.principlesGrid}>
        {principles.items.map((item, index) => (
          <InViewMotion as="article" className={styles.principleCard} delay={index * 0.07} key={item.title}>
            <div className={styles.principleNumber}>{String(index + 1).padStart(2, '0')}</div>
            <div
              className={`${styles.principleIcon} ${index > 0 ? styles[`icon${index + 1}`] : ''}`}
              aria-hidden="true"
            >
              {['◌', '⌖', '↗', '⌁'][index]}
            </div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </InViewMotion>
        ))}
      </div>
    </section>
  );
}

export function StoryBlock({ story }) {
  return (
    <InViewMotion as="section" className={styles.story}>
      <div
        className={styles.storyImage}
        style={{ '--story-image': `url("${story.image}")` }}
        role="img"
        aria-label={story.imageAlt}
      />
      <div className={styles.storyCopy}>
        <p className={styles.eyebrow}>{story.eyebrow}</p>
        <h2>{story.title}</h2>
        {story.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        <Link className={styles.textLink} href="/#contact">
          {story.action} <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </InViewMotion>
  );
}

function formatPostDate(date) {
  return new Intl.DateTimeFormat('de-DE', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${date}T00:00:00Z`));
}

export function BlogCardGrid() {
  return (
    <section className={styles.blog} id="blog" aria-labelledby="value-blog-title">
      <div className={styles.blogHeading}>
        <h2 id="value-blog-title">
          Impulse aus <span>unserem Netzwerk</span>
        </h2>
        <Link className={styles.textLink} href="/#blog">
          Alle Beiträge <span aria-hidden="true">↗</span>
        </Link>
      </div>
      <div className={styles.blogGrid}>
        {blogPosts.map((post, index) => (
          <InViewMotion as="div" delay={index * 0.07} key={post.slug}>
            <Link className={styles.blogCard} href={`/${post.slug}/`}>
              <div
                className={styles.blogImage}
                style={{ backgroundImage: `url("${post.image}")` }}
                aria-hidden="true"
              />
              <p className={styles.blogMeta}>
                {formatPostDate(post.date)} <span aria-hidden="true">|</span> {post.label}
              </p>
              <h3>{post.title}</h3>
              <span className={styles.blogArrow} aria-hidden="true">↗</span>
            </Link>
          </InViewMotion>
        ))}
      </div>
    </section>
  );
}
