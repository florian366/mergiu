export const localizedRoutes = [
  { id: 'home', de: '/', en: '/business-succession/', type: 'home', translation: 'homepage' },
  { id: 'handwerk', de: '/handwerk/', en: '/construction/', type: 'sector', key: 'handwerk', translation: 'handwerk' },
  { id: 'tiermedizin', de: '/tiermedizin/', en: '/veterinary-practices/', type: 'sector', key: 'tiermedizin', translation: 'tiermedizin' },
  { id: 'kanzleien', de: '/kanzleien/', en: '/professional-firms/', type: 'sector', key: 'kanzleien', translation: 'kanzleien' },
  { id: 'facility-management', de: '/facility-management/', en: '/facility-services-businesses/', type: 'sector', key: 'facility-management', translation: 'facility-management' },
  { id: 'einzelhandel', de: '/einzelhandel/', en: '/retail/', type: 'sector', key: 'einzelhandel', translation: 'einzelhandel' },
  { id: 'dienstleistungen', de: '/dienstleistungen/', en: '/business-services/', type: 'sector', key: 'dienstleistungen', translation: 'dienstleistungen' },
  { id: 'persoenlich', de: '/persönlich/', en: '/personal-approach/', type: 'value', key: 'persoenlich', translation: 'persoenlich' },
  { id: 'diskretion', de: '/diskretion/', en: '/confidentiality/', type: 'value', key: 'diskretion', translation: 'diskretion' },
  { id: 'netzwerk', de: '/netzwerk/', en: '/network/', type: 'value', key: 'netzwerk', translation: 'netzwerk' },
  { id: 'provisionsfrei', de: '/provisionsfrei/', en: '/commission-free/', type: 'value', key: 'provisionsfrei', translation: 'provisionsfrei' },
  { id: 'betreuung', de: '/persönliche-betreuung/', en: '/personal-guidance/', type: 'value', key: 'betreuung', translation: 'persoenliche-betreuung' },
  { id: 'buchung', de: '/buchung/', en: '/present-your-business/', type: 'booking', translation: 'booking' },
  { id: 'tippgeber', de: '/tippgeber/', en: '/referral-program/', type: 'referral', translation: 'tippgeber' },
  { id: 'category', de: '/category.html', en: '/insights/', type: 'category', translation: 'category' },
  { id: 'tierarztpraxis-blog', de: '/tierarztpraxis-verkaufen-nachfolger-finden/', en: '/sell-veterinary-practice/', type: 'article', key: 'tierarztpraxis-verkaufen-nachfolger-finden', translation: 'tierarztpraxis-verkaufen-nachfolger-finden' },
  { id: 'handwerk-blog', de: '/handwerksbetrieb-verkaufen-nachfolger-finden/', en: '/sell-construction-business/', type: 'article', key: 'handwerksbetrieb-verkaufen-nachfolger-finden', translation: 'handwerksbetrieb-verkaufen-nachfolger-finden' },
  { id: 'nachfolge-blog', de: '/unternehmensnachfolge-im-handwerk-worauf-betriebsinhaber-achten-sollten-und-wie-sie-einen-passenden-nachfolger-finden/', en: '/construction-business-succession/', type: 'article', key: 'unternehmensnachfolge-im-handwerk-worauf-betriebsinhaber-achten-sollten-und-wie-sie-einen-passenden-nachfolger-finden', translation: 'unternehmensnachfolge-im-handwerk' },
  { id: 'terms', de: '/agb.html', en: '/terms-and-conditions/', type: 'legal', key: 'agb', translation: 'agb' },
  { id: 'privacy', de: '/datenschutz.html', en: '/privacy-policy/', type: 'legal', key: 'datenschutz', translation: 'datenschutz' },
  { id: 'imprint', de: '/impressum.html', en: '/legal-notice/', type: 'legal', key: 'impressum', translation: 'impressum' },
];

const legacyAliases = {
  '/persoenlich/': '/persönlich/',
  '/persoenliche-betreuung/': '/persönliche-betreuung/',
  '/category/': '/category.html',
  '/agb/': '/agb.html',
  '/datenschutz/': '/datenschutz.html',
  '/impressum/': '/impressum.html',
};

export function normalizeLocalizedPath(pathname) {
  if (!pathname || pathname === '/') return '/';
  const decoded = decodeURIComponent(pathname);
  return `${decoded.replace(/\/+$/, '')}/`;
}

export function getLocalizedRoute(pathname) {
  const normalized = normalizeLocalizedPath(pathname);
  const canonicalPath = legacyAliases[normalized] || normalized;
  return localizedRoutes.find((route) => route.de === canonicalPath || route.en === canonicalPath) || null;
}

export function pathForLanguage(pathname, language) {
  const route = getLocalizedRoute(pathname);
  if (!route) return language === 'en' ? '/business-succession/' : '/';
  return route[language];
}

export function isEnglishPath(pathname) {
  return Boolean(getLocalizedRoute(pathname)?.en === normalizeLocalizedPath(pathname));
}
