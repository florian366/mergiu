import Link from 'next/link';
import SiteFooter from '../site/SiteFooter';
import SiteHeader from '../site/SiteHeader';
import InViewMotion from '../motion/InViewMotion';
import { frenchBlogPosts, frenchIndustries } from '../../data/french-content';
import styles from './EnglishInsightsPage.module.css';

export default function FrenchInsightsPage() {
  return (
    <div className={styles.page} id="top">
      <SiteHeader locale="fr" />
      <main>
        <section className={styles.hero}>
          <p>MERGIU · BLOG</p>
          <h1>Articles sur la transmission d’entreprise</h1>
          <span>Articles, conseils pratiques et perspectives sur la vente d’une entreprise et la recherche d’un repreneur adapté.</span>
        </section>
        <section className={styles.content}>
          <p className={styles.eyebrow}>DERNIERS ARTICLES</p>
          <div className={styles.posts}>
            {frenchBlogPosts.map((post, index) => {
              return (
                <InViewMotion as="article" delay={index * 0.06} key={post.slug}>
                  <Link className={styles.post} href={post.localizedHref}>
                    <img src={post.image} alt="" />
                    <div>
                      <small>{post.label}</small>
                      <h2>{post.title}</h2>
                      <span>{post.text}</span>
                      <strong>Lire l’article ↗</strong>
                    </div>
                  </Link>
                </InViewMotion>
              );
            })}
          </div>
        </section>
      </main>
      <SiteFooter industries={frenchIndustries} locale="fr" />
    </div>
  );
}
