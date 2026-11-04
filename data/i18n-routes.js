export const localizedRoutes = [
  { id: 'home', de: '/', en: '/business-succession/', fr: '/fr/', type: 'home', translation: 'homepage' },
  { id: 'handwerk', de: '/handwerk/', en: '/construction/', fr: '/fr/artisanat/', type: 'sector', key: 'handwerk', translation: 'handwerk' },
  { id: 'tiermedizin', de: '/tiermedizin/', en: '/veterinary-practices/', fr: '/fr/medecine-veterinaire/', type: 'sector', key: 'tiermedizin', translation: 'tiermedizin' },
  { id: 'kanzleien', de: '/kanzleien/', en: '/professional-firms/', fr: '/fr/cabinets-professionnels/', type: 'sector', key: 'kanzleien', translation: 'kanzleien' },
  { id: 'facility-management', de: '/facility-management/', en: '/facility-services-businesses/', fr: '/fr/services-aux-batiments/', type: 'sector', key: 'facility-management', translation: 'facility-management' },
  { id: 'einzelhandel', de: '/einzelhandel/', en: '/retail/', fr: '/fr/commerce-de-detail/', type: 'sector', key: 'einzelhandel', translation: 'einzelhandel' },
  { id: 'dienstleistungen', de: '/dienstleistungen/', en: '/business-services/', fr: '/fr/entreprises-de-services/', type: 'sector', key: 'dienstleistungen', translation: 'dienstleistungen' },
  { id: 'persoenlich', de: '/persönlich/', en: '/personal-approach/', fr: '/fr/approche-personnalisee/', type: 'value', key: 'persoenlich', translation: 'persoenlich' },
  { id: 'diskretion', de: '/diskretion/', en: '/confidentiality/', fr: '/fr/confidentialite/', type: 'value', key: 'diskretion', translation: 'diskretion' },
  { id: 'netzwerk', de: '/netzwerk/', en: '/network/', fr: '/fr/reseau-de-repreneurs/', type: 'value', key: 'netzwerk', translation: 'netzwerk' },
  { id: 'provisionsfrei', de: '/provisionsfrei/', en: '/commission-free/', fr: '/fr/transmission-sans-commission/', type: 'value', key: 'provisionsfrei', translation: 'provisionsfrei' },
  { id: 'betreuung', de: '/persönliche-betreuung/', en: '/personal-guidance/', fr: '/fr/accompagnement-personnalise/', type: 'value', key: 'betreuung', translation: 'persoenliche-betreuung' },
  { id: 'buchung', de: '/buchung/', en: '/present-your-business/', fr: '/fr/presenter-votre-entreprise/', type: 'booking', translation: 'booking' },
  { id: 'tippgeber', de: '/tippgeber/', en: '/referral-program/', fr: '/fr/recommandation/', type: 'referral', translation: 'tippgeber' },
  { id: 'category', de: '/category.html', en: '/insights/', fr: '/fr/articles-transmission-entreprise/', type: 'category', translation: 'category' },
  { id: 'tierarztpraxis-blog', de: '/tierarztpraxis-verkaufen-nachfolger-finden/', en: '/sell-veterinary-practice/', fr: '/fr/vendre-cabinet-veterinaire-trouver-repreneur/', type: 'article', key: 'tierarztpraxis-verkaufen-nachfolger-finden', translation: 'tierarztpraxis-verkaufen-nachfolger-finden' },
  { id: 'handwerk-blog', de: '/handwerksbetrieb-verkaufen-nachfolger-finden/', en: '/sell-construction-business/', fr: '/fr/vendre-entreprise-artisanale-trouver-repreneur/', type: 'article', key: 'handwerksbetrieb-verkaufen-nachfolger-finden', translation: 'handwerksbetrieb-verkaufen-nachfolger-finden' },
  { id: 'nachfolge-blog', de: '/unternehmensnachfolge-im-handwerk-worauf-betriebsinhaber-achten-sollten-und-wie-sie-einen-passenden-nachfolger-finden/', en: '/construction-business-succession/', fr: '/fr/transmission-entreprise-artisanale/', type: 'article', key: 'unternehmensnachfolge-im-handwerk-worauf-betriebsinhaber-achten-sollten-und-wie-sie-einen-passenden-nachfolger-finden', translation: 'unternehmensnachfolge-im-handwerk' },
  { id: 'terms', de: '/agb.html', en: '/terms-and-conditions/', fr: '/fr/conditions-generales/', type: 'legal', key: 'agb', translation: 'agb' },
  { id: 'privacy', de: '/datenschutz.html', en: '/privacy-policy/', fr: '/fr/politique-de-confidentialite/', type: 'legal', key: 'datenschutz', translation: 'datenschutz' },
  { id: 'imprint', de: '/impressum.html', en: '/legal-notice/', fr: '/fr/mentions-legales/', type: 'legal', key: 'impressum', translation: 'impressum' },
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
  let decoded = pathname;
  try {
    decoded = decodeURIComponent(pathname);
  } catch {
    // Keep malformed paths intact so the caller can fall through to a 404.
  }
  return `${decoded.replace(/\/+$/, '')}/`;
}

export function frenchPathForRoute(route) {
  return route?.fr || '/fr/';
}

export function getLocalizedRoute(pathname) {
  const normalized = normalizeLocalizedPath(pathname);
  const canonicalPath = legacyAliases[normalized] || normalized;
  return localizedRoutes.find((route) => route.de === canonicalPath || route.en === canonicalPath || frenchPathForRoute(route) === canonicalPath || `/fr${route.de}` === canonicalPath) || null;
}

export function pathForLanguage(pathname, language) {
  const route = getLocalizedRoute(pathname);
  if (language === 'fr') return frenchPathForRoute(route);
  if (!route) return language === 'en' ? '/business-succession/' : '/';
  return route[language] || '/';
}

export function isEnglishPath(pathname) {
  return Boolean(getLocalizedRoute(pathname)?.en === normalizeLocalizedPath(pathname));
}

export function isFrenchPath(pathname) {
  const route = getLocalizedRoute(pathname);
  return Boolean(route && frenchPathForRoute(route) === normalizeLocalizedPath(pathname));
}

export function localeForPath(pathname) {
  if (isFrenchPath(pathname) || pathname === '/fr' || pathname.startsWith('/fr/')) return 'fr';
  return isEnglishPath(pathname) ? 'en' : 'de';
}
