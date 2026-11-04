import { localizedRoutes } from '../data/i18n-routes';

const siteUrl = 'https://mergiu.com';

export default function sitemap() {
  return localizedRoutes.flatMap(({ de, en }) => {
    const languages = { de: `${siteUrl}${de}`, en: `${siteUrl}${en}` };
    return [
      { url: languages.de, alternates: { languages } },
      { url: languages.en, alternates: { languages } },
    ];
  });
}
