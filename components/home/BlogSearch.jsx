'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function BlogSearch({ posts, locale = 'de' }) {
  const [query, setQuery] = useState('');
  const [focused, setFocused] = useState(false);
  const normalizedQuery = query.trim().toLocaleLowerCase(locale === 'en' ? 'en' : 'de-DE');
  const results = posts.filter((post) =>
    post.title.toLocaleLowerCase(locale === 'en' ? 'en' : 'de-DE').includes(normalizedQuery),
  );

  return (
    <div
      className={`blog-search-panel ${focused ? 'search-open' : ''}`}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false);
      }}
    >
      <div className="blog-search">
        <input
          type="search"
          value={query}
          placeholder={locale === 'en' ? 'Search content' : 'Inhalte suchen'}
          aria-label={locale === 'en' ? 'Search blog posts' : 'Blogbeiträge durchsuchen'}
          onFocus={() => setFocused(true)}
          onChange={(event) => {
            setQuery(event.target.value);
            setFocused(true);
          }}
        />
        <span aria-hidden="true">⌕</span>
      </div>
      <div className="blog-search-results" aria-live="polite">
        {results.map((post) => (
          <Link href={post.localizedHref || `/${post.slug}/`} key={post.slug}>
            {post.title}
          </Link>
        ))}
        {results.length === 0 && (
          <span className="no-results">{locale === 'en' ? 'No articles found.' : 'Keine Beiträge gefunden.'}</span>
        )}
      </div>
    </div>
  );
}
