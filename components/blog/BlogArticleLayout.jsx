import Link from 'next/link';
import { industries } from '../../data/homepage';
import SiteFooter from '../site/SiteFooter';
import SiteHeader from '../site/SiteHeader';
import InViewMotion from '../motion/InViewMotion';
import { ArticleBlocks } from './ArticleBlocks';
import styles from './BlogArticleLayout.module.css';

function JsonLd({ data }) {
  if (!data) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  );
}

export default function BlogArticleLayout({ article, locale = 'de', industries: pageIndustries = industries }) {
  const isEnglish = locale === 'en';
  const isFrench = locale === 'fr';
  return (
    <div className={styles.page} id="top">
      {article.jsonLd?.map((data, index) => <JsonLd data={data} key={index} />)}
      <SiteHeader locale={locale} />
      <main className={styles.main}>
        <InViewMotion as="header" className={styles.hero} distance={12}>
          <p className={styles.eyebrow}>{article.byline}</p>
          <h1>{article.heading}</h1>
        </InViewMotion>
        <article className={styles.article}>
          <InViewMotion
            as="img"
            className={styles.heroImage}
            src={article.image.src}
            alt={article.image.alt}
            fetchPriority="high"
          />
          <ArticleBlocks blocks={article.blocks} />
        </article>
        <InViewMotion as="nav" className={styles.articleNavigation} aria-label={isEnglish ? 'More pages' : isFrench ? 'Autres pages' : 'Weitere Seiten'}>
          <Link href={isEnglish ? '/business-succession/' : isFrench ? '/fr/' : '/'}>{isEnglish ? 'Home' : isFrench ? 'Accueil' : 'Zur Startseite'}</Link>
          <Link href={isEnglish ? '/insights/' : isFrench ? '/fr/articles-transmission-entreprise/' : `/category.html?category=${encodeURIComponent(article.category)}`}>
            {isEnglish ? `More articles in ${article.category}` : isFrench ? `Autres articles · ${article.category}` : `Weitere Beiträge aus ${article.category}`}
          </Link>
        </InViewMotion>
      </main>
      <SiteFooter industries={pageIndustries} locale={locale} />
    </div>
  );
}
