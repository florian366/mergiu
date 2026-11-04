const siteUrl = 'https://mergiu.com';

const publicPaths = [
  '/',
  '/handwerk/',
  '/tiermedizin/',
  '/kanzleien/',
  '/facility-management/',
  '/einzelhandel/',
  '/dienstleistungen/',
  '/pers%C3%B6nlich/',
  '/diskretion/',
  '/netzwerk/',
  '/provisionsfrei/',
  '/pers%C3%B6nliche-betreuung/',
  '/tierarztpraxis-verkaufen-nachfolger-finden/',
  '/handwerksbetrieb-verkaufen-nachfolger-finden/',
  '/unternehmensnachfolge-im-handwerk-worauf-betriebsinhaber-achten-sollten-und-wie-sie-einen-passenden-nachfolger-finden/',
  '/category.html',
  '/buchung/',
  '/tippgeber/',
  '/agb.html',
  '/datenschutz.html',
  '/impressum.html',
];

export default function sitemap() {
  return publicPaths.map((path) => ({ url: `${siteUrl}${path}` }));
}
