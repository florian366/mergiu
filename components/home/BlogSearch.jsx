'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function BlogSearch({ posts }) {
  const [query, setQuery] = useState('');
  const [focused, setFocused] = useState(false);
  const normalizedQuery = query.trim().toLocaleLowerCase('de-DE');
  const results = posts.filter((post) =>
    post.title.toLocaleLowerCase('de-DE').includes(normalizedQuery),
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
          placeholder="Inhalte suchen"
          aria-label="Blogbeiträge durchsuchen"
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
          <Link href={`/${post.slug}/`} key={post.slug}>
            {post.title}
          </Link>
        ))}
        {results.length === 0 && (
          <span className="no-results">Keine Beiträge gefunden.</span>
        )}
      </div>
    </div>
  );
}
