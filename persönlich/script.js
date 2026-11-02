const menu = document.querySelector('.menu');
const navigation = document.querySelector('.page-header nav');
menu?.addEventListener('click', () => {
  navigation?.classList.toggle('open');
});

const removedBlogSlugs = [
  'aktuelle-nachrichten-aus-der-wirtschaft',
  'besseren-service-fuer-kunden-schaffen',
  'geschaeftsplanung-und-strategie'
];
document.querySelectorAll('.blog-card[href]').forEach((card) => {
  if (removedBlogSlugs.some((slug) => card.getAttribute('href')?.includes(slug))) card.remove();
});
