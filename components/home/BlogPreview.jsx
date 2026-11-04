import Link from 'next/link';
import BlogSearch from './BlogSearch';

export default function BlogPreview({ posts, categories, locale = 'de' }) {
  const newestPost = posts[0];
  const isEnglish = locale === 'en';
  const truncateTitle = (title) =>
    title.length > 55 ? `${title.slice(0, 55).trimEnd()}...` : title;

  return (
      <section className="blog-section panel" id="blog" aria-label={isEnglish ? 'Blog post' : 'Blogbeitrag'}>
      <div className="blog-layout">
        <article className="blog-post">
          <div
            className="blog-hero-image"
            style={{ backgroundImage: `url("${newestPost.image}")` }}
            aria-hidden="true"
          />
          <div className="blog-meta">
            {newestPost.shortDate} <span>|</span> {newestPost.label}
          </div>
          <h2>{newestPost.title}</h2>
          <p>
            {isEnglish ? 'Handing over a veterinary practice is about more than premises and equipment. It also means entrusting an established team, long-standing client relationships and the continuity of animal care to the right people.' : 'Die Übergabe einer Tierarztpraxis betrifft nicht nur Räume und Ausstattung. Auch ein eingespieltes Team, langjährige Patientenbeziehungen und die Verantwortung für die tiermedizinische Versorgung sollen in gute Hände übergehen.'}
          </p>
          <p>
            {isEnglish ? 'Find out which types of buyers may be right for your practice and how MERGIU identifies suitable successors through its network.' : 'Erfahren Sie, welche Käufergruppen für Ihre Praxis infrage kommen und wie MERGIU passende Nachfolger aus dem eigenen Netzwerk identifiziert.'}
          </p>
          <p>
            {isEnglish ? 'The article explains what makes a successful handover, from professional and personal fit to timing your succession search, and how to approach interested parties discreetly without a broker commission.' : 'Der Beitrag zeigt, worauf es bei einer gelungenen Übergabe ankommt – von der fachlichen und menschlichen Passung bis zum richtigen Zeitpunkt für die Nachfolgesuche. Außerdem erfahren Sie, wie Sie mögliche Interessenten diskret ansprechen und Ihre Praxis ohne Maklerprovision in gute Hände übergeben können.'}
          </p>
          <Link className="button" href={newestPost.localizedHref || `/${newestPost.slug}/`}>
            {isEnglish ? 'Read article ↗' : 'Beitrag lesen ↗'}
          </Link>
        </article>

        <aside className="blog-sidebar">
            <BlogSearch posts={posts} locale={locale} />

          <div className="blog-sidebar-block">
            <h3>{isEnglish ? 'Categories' : 'Kategorien'}</h3>
            {categories.map((category) => (
              <Link
                href={isEnglish ? '/insights/' : `/category.html?category=${encodeURIComponent(category)}`}
                key={category}
              >
                {category}
              </Link>
            ))}
          </div>

          <div className="blog-sidebar-block">
            <h3>{isEnglish ? 'More articles' : 'Weitere Beiträge'}</h3>
            {posts.slice(1).map((post) => (
              <Link className="latest-post" href={post.localizedHref || `/${post.slug}/`} key={post.slug}>
                <span
                  className="latest-thumb"
                  style={{ backgroundImage: `url("${post.image}")` }}
                  aria-hidden="true"
                />
                <span>
                  <small>{post.shortDate}</small>
                  {truncateTitle(post.title)}
                </span>
              </Link>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
