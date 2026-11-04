import Link from 'next/link';
import SiteFooter from '../site/SiteFooter';
import SiteHeader from '../site/SiteHeader';
import InViewMotion from '../motion/InViewMotion';
import { industries } from '../../data/homepage';
import styles from './EnglishInsightsPage.module.css';

export default function EnglishInsightsPage({ posts, industries: pageIndustries = industries }) {
  return (
    <div className={styles.page} id="top">
      <SiteHeader locale="en" />
      <main>
        <section className={styles.hero}>
          <p>MERGIU · INSIGHTS</p>
          <h1>Business succession insights</h1>
          <span>Articles, practical guidance and perspectives on selling a business and finding the right successor.</span>
        </section>
        <section className={styles.content}>
          <p className={styles.eyebrow}>LATEST ARTICLES</p>
          <div className={styles.posts}>
            {posts.map((post, index) => (
              <InViewMotion as="article" delay={index * 0.06} key={post.slug}>
                <Link className={styles.post} href={post.localizedHref}>
                  <img src={post.image} alt="" />
                  <div>
                    <small>{post.label}</small>
                    <h2>{post.title}</h2>
                    <span>{post.text}</span>
                    <strong>Read article ↗</strong>
                  </div>
                </Link>
              </InViewMotion>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter industries={pageIndustries} locale="en" />
    </div>
  );
}
