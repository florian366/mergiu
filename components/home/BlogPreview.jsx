import Link from 'next/link';
import BlogSearch from './BlogSearch';

export default function BlogPreview({ posts, categories }) {
  const newestPost = posts[0];

  return (
    <section className="blog-section panel" id="blog" aria-label="Blogbeitrag">
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
            Die Übergabe einer Tierarztpraxis betrifft nicht nur Räume und
            Ausstattung. Auch ein eingespieltes Team, langjährige
            Patientenbeziehungen und die Verantwortung für die tiermedizinische
            Versorgung sollen in gute Hände übergehen.
          </p>
          <p>
            Erfahren Sie, welche Käufergruppen für Ihre Praxis infrage kommen und
            wie MERGIU passende Nachfolger aus dem eigenen Netzwerk identifiziert.
          </p>
          <p>
            Der Beitrag zeigt, worauf es bei einer gelungenen Übergabe ankommt –
            von der fachlichen und menschlichen Passung bis zum richtigen
            Zeitpunkt für die Nachfolgesuche. Außerdem erfahren Sie, wie Sie
            mögliche Interessenten diskret ansprechen und Ihre Praxis ohne
            Maklerprovision in gute Hände übergeben können.
          </p>
          <Link className="button" href={`/${newestPost.slug}/`}>
            Beitrag lesen ↗
          </Link>
        </article>

        <aside className="blog-sidebar">
          <BlogSearch posts={posts} />

          <div className="blog-sidebar-block">
            <h3>Kategorien</h3>
            {categories.map((category) => (
              <Link
                href={`/category.html?category=${encodeURIComponent(category)}`}
                key={category}
              >
                {category}
              </Link>
            ))}
          </div>

          <div className="blog-sidebar-block">
            <h3>Weitere Beiträge</h3>
            {posts.slice(1).map((post) => (
              <Link className="latest-post" href={`/${post.slug}/`} key={post.slug}>
                <span
                  className="latest-thumb"
                  style={{ backgroundImage: `url("${post.image}")` }}
                  aria-hidden="true"
                />
                <span>
                  <small>{post.shortDate}</small>
                  {post.title}
                </span>
              </Link>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
