window.mergiuBlogPosts = [
  {
    slug: 'tierarztpraxis-verkaufen-nachfolger-finden',
    title: 'Tierarztpraxis verkaufen: Wie Sie den richtigen Nachfolger finden',
    date: '2026-11-04',
    label: 'Tiermedizin, Unternehmensnachfolge',
    image: '/images/Tierarztpraxis%20und%20Praxisteam.jpg'
  },
  {
    slug: 'handwerksbetrieb-verkaufen-nachfolger-finden',
    title: 'Handwerksbetrieb verkaufen: So finden Sie einen passenden Nachfolger',
    date: '2026-11-02',
    label: 'Handwerk, Unternehmensnachfolge',
    image: '/images/Handwerksbetrieb%20verkaufen.jpg'
  },
  {
    slug: 'unternehmensnachfolge-im-handwerk-worauf-betriebsinhaber-achten-sollten-und-wie-sie-einen-passenden-nachfolger-finden',
    title: 'Unternehmensnachfolge im Handwerk: Worauf Betriebsinhaber achten sollten und wie Sie einen passenden Nachfolger finden',
    date: '2026-10-28',
    label: 'Handwerk, Unternehmensnachfolge',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1800&q=85'
  }
];

const detailSlug = document.body.dataset.blogSlug;
const detailPost = window.mergiuBlogPosts.find((post) => post.slug === detailSlug);
if (detailPost) {
  document.querySelector('.blog-detail-content .blog-hero-image')?.style.setProperty('background-image', `url("${detailPost.image}")`);
}
