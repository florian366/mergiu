const categoryPosts = [
  { slug: 'unternehmensnachfolge-im-handwerk-worauf-betriebsinhaber-achten-sollten-und-wie-sie-einen-passenden-nachfolger-finden', category: 'Handwerk', date: '28. Oktober', title: 'Unternehmensnachfolge im Handwerk: Worauf Betriebsinhaber achten sollten und wie Sie einen passenden Nachfolger finden', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=85', text: 'Wie Handwerksunternehmer die Nachfolge frühzeitig planen, den Unternehmenswert einschätzen und passende Übernehmer finden.' },
  { slug: 'besseren-service-fuer-kunden-schaffen', category: 'Dienstleistungen', date: '05. Februar', title: 'Besseren Service für Kunden schaffen', image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1400&q=85', text: 'Warum persönliche Beziehungen und klare Prozesse die Grundlage für nachhaltigen Service bilden.' },
  { slug: 'geschaeftsplanung-und-strategie', category: 'Unternehmen', date: '04. Februar', title: 'Geschäftsplanung und Strategie', image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=85', text: 'Gedanken zu Planung, Zusammenarbeit und den nächsten Schritten für Unternehmen.' }
];

const params = new URLSearchParams(window.location.search);
const category = params.get('category') || 'Handwerk';
const posts = categoryPosts.filter((post) => post.category.toLowerCase() === category.toLowerCase());
const title = document.querySelector('#category-title');
const heading = document.querySelector('#category-heading');
const description = document.querySelector('#category-description');
const list = document.querySelector('#category-posts');
const categoryName = posts.length ? posts[0].category : category;

document.title = `${categoryName} | MERGIU`;
title.textContent = categoryName;
heading.textContent = `Beiträge aus ${categoryName}`;
description.textContent = `Aktuelle Beiträge, Einblicke und Perspektiven aus dem Bereich ${categoryName}.`;

if (!posts.length) {
  list.innerHTML = '<div class="category-empty"><h3>Noch keine Beiträge</h3><p>Für diese Kategorie sind aktuell noch keine Blogbeiträge veröffentlicht.</p><a class="button" href="index.html">Zurück zur Übersicht ↗</a></div>';
} else {
  list.innerHTML = posts.map((post) => `<a class="category-post" href="${post.slug}/"><div class="category-post-image" style="background-image:url('${post.image}')"><span>${post.date}</span></div><div class="category-post-copy"><small>${post.category}</small><h3>${post.title}</h3><p>${post.text}</p><strong>Beitrag lesen ↗</strong></div></a>`).join('');
}

const menu = document.querySelector('.menu');
const nav = document.querySelector('.header nav');
menu?.addEventListener('click', () => nav.classList.toggle('open'));
