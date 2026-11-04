import Link from 'next/link';
import { blogPosts, industries } from '../../data/homepage';
import SiteFooter from '../../components/site/SiteFooter';
import SiteHeader from '../../components/site/SiteHeader';
import InViewMotion from '../../components/motion/InViewMotion';
import styles from './category.module.css';

const DEFAULT_CATEGORY = 'Handwerk';

function getCategoryData(searchParams) {
  const queryValue = Array.isArray(searchParams.category)
    ? searchParams.category[0]
    : searchParams.category;
  const requestedCategory = queryValue || DEFAULT_CATEGORY;
  const posts = blogPosts
    .map((post) => ({
      ...post,
      category: post.label.split(', ')[0],
      text:
        post.slug === 'tierarztpraxis-verkaufen-nachfolger-finden'
          ? 'Wie Sie passende Käufer für Ihre Tierarztpraxis finden und die Praxisnachfolge diskret vorbereiten.'
          : 'Wie Sie die Unternehmensnachfolge vorbereiten, passende Käufer finden und die Übergabe erfolgreich gestalten.',
    }))
    .filter(
      (post) => post.category.toLowerCase() === requestedCategory.toLowerCase(),
    );

  return {
    categoryName: posts.length ? posts[0].category : requestedCategory,
    posts,
  };
}

export async function generateMetadata({ searchParams }) {
  const { categoryName } = getCategoryData(await searchParams);

  return {
    title: `${categoryName} | MERGIU`,
    description: `Aktuelle Beiträge, Einblicke und Perspektiven aus dem Bereich ${categoryName}.`,
  };
}

export default async function CategoryPage({ searchParams }) {
  const { categoryName, posts } = getCategoryData(await searchParams);

  return (
    <div className={styles.page} id="top">
      <SiteHeader />
      <main>
        <section className={styles.hero}>
          <InViewMotion className={styles.heroContent} distance={12}>
            <p>MERGIU · BLOG</p>
            <h1>{categoryName}</h1>
            <span>
              Aktuelle Beiträge, Einblicke und Perspektiven aus dem Bereich{' '}
              {categoryName}.
            </span>
          </InViewMotion>
        </section>

        <section className={styles.content}>
          <InViewMotion className={styles.intro}>
            <span>AKTUELLE BEITRÄGE</span>
            <h2>Beiträge aus {categoryName}</h2>
          </InViewMotion>

          {posts.length ? (
            <div className={styles.posts}>
              {posts.map((post, index) => (
                <InViewMotion as="div" delay={index * 0.08} key={post.slug}>
                  <Link className={styles.post} href={`/${post.slug}/`}>
                    <div className={styles.postImage}>
                      <img src={post.image} alt="" />
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString('de-DE', {
                          day: '2-digit',
                          month: 'long',
                        })}
                      </time>
                    </div>
                    <div className={styles.postCopy}>
                      <small>{post.category}</small>
                      <h3>{post.title}</h3>
                      <p>{post.text}</p>
                      <strong>Beitrag lesen ↗</strong>
                    </div>
                  </Link>
                </InViewMotion>
              ))}
            </div>
          ) : (
            <InViewMotion className={styles.empty}>
              <h3>Noch keine Beiträge</h3>
              <p>
                Für diese Kategorie sind aktuell noch keine Blogbeiträge
                veröffentlicht.
              </p>
              <Link className={styles.homeLink} href="/">
                Zurück zur Übersicht ↗
              </Link>
            </InViewMotion>
          )}
        </section>
      </main>
      <SiteFooter industries={industries} />
    </div>
  );
}
