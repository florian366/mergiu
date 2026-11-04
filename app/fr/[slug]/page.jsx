import { notFound } from 'next/navigation';
import BlogArticleLayout from '../../../components/blog/BlogArticleLayout';
import FrenchInsightsPage from '../../../components/i18n/FrenchInsightsPage';
import FrenchLegalPage from '../../../components/i18n/FrenchLegalPage';
import SectorLandingPage from '../../../components/sector/SectorLandingPage';
import ValuePage from '../../../components/value/ValuePage';
import BookingPage from '../../buchung/page';
import TipsterPage from '../../tippgeber/page';
import DictionaryTranslator from '../../../components/i18n/DictionaryTranslator';
import { blogArticles } from '../../../data/blog-articles';
import { frenchCraftSaleArticle, frenchCraftSuccessionArticle, frenchVeterinaryArticle } from '../../../data/french-articles';
import { sectors } from '../../../data/sectors';
import { valuePages } from '../../../data/value-pages';
import { getTranslationDictionary, translateTree } from '../../../data/english-translation';
import { frenchBlogPosts, frenchIndustries, getFrenchSectorData } from '../../../data/french-content';
import { frenchPathForRoute, localizedRoutes } from '../../../data/i18n-routes';

function routeForSlug(slug) {
  const decodedSlug = decodeURIComponent(slug);
  return localizedRoutes.find((route) => decodeURIComponent(route.fr.split('/').filter(Boolean).at(-1) || '') === decodedSlug);
}

function metadataForRoute(route, dictionary) {
  if (route.id === 'tierarztpraxis-blog') return frenchVeterinaryArticle.metadata;
  if (route.id === 'handwerk-blog') return frenchCraftSaleArticle.metadata;
  if (route.id === 'nachfolge-blog') return frenchCraftSuccessionArticle.metadata;
  if (route.type === 'legal') {
    const title = dictionary.title || (route.key === 'agb' ? 'Conditions générales | MERGIU' : route.key === 'datenschutz' ? 'Politique de confidentialité | MERGIU' : 'Mentions légales | MERGIU');
    return { title, description: dictionary.description || title };
  }

  let source = {};
  if (route.type === 'sector') source = getFrenchSectorData(route.key, sectors[route.key])?.metadata || {};
  if (route.type === 'value') source = valuePages[route.key]?.metadata || {};
  if (route.type === 'article') source = blogArticles[route.key]?.metadata || {};
  if (route.type === 'home') {
    source = {
      title: 'Unternehmensnachfolge kostenlos beraten | MERGIU',
      description: 'Kostenlose Erstberatung zur Unternehmensnachfolge: MERGIU findet passende Nachfolger, Käufer und Investoren für Ihr Unternehmen – persönlich, diskret und provisionsfrei.',
    };
  }
  if (route.type === 'booking') {
    source = {
      title: 'Unternehmen kostenlos registrieren | MERGIU',
      description: 'Unternehmen kostenlos über die Nachfolge informieren lassen: Registrieren Sie Ihr Unternehmen bei MERGIU und finden Sie passende Nachfolger im persönlichen Netzwerk.',
    };
  }
  if (route.type === 'referral') {
    source = {
      title: '500€ Tippgeberprämie für Unternehmensnachfolge | MERGIU',
      description: 'Sie kennen ein Unternehmen, das einen Nachfolger sucht? Geben Sie MERGIU einen diskreten Hinweis und erhalten Sie 500€ bei erfolgreicher Vermittlung.',
    };
  }
  if (route.type === 'category') {
    source = {
      title: 'Unternehmensnachfolge nach Branche | MERGIU',
      description: 'Unternehmensnachfolge nach Branche: Informationen für Handwerk, Tiermedizin, Kanzleien, Facility Management, Dienstleistungen und weitere Unternehmen – kostenlos informieren.',
    };
  }

  const title = dictionary[source.title] || dictionary.title || source.title || 'MERGIU';
  const description = dictionary[source.description] || dictionary.description || source.description || '';
  return { title, description };
}

export function generateStaticParams() {
  return localizedRoutes
    .filter((route) => route.fr !== '/fr/')
    .map((route) => ({ slug: route.fr.split('/').filter(Boolean).at(-1) }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const route = routeForSlug(slug);
  if (!route) return {};

  const dictionary = {
    ...getTranslationDictionary('homepage', 'fr'),
    ...getTranslationDictionary(route.translation, 'fr'),
  };
  const translatedMetadata = metadataForRoute(route, dictionary);
  const canonical = `https://mergiu.com${frenchPathForRoute(route)}`;
  return {
    ...translatedMetadata,
    alternates: {
      canonical,
      languages: {
        de: `https://mergiu.com${route.de}`,
        en: `https://mergiu.com${route.en}`,
        fr: canonical,
      },
    },
  };
}

function renderFrenchRoute(route) {
  if (route.type === 'sector') {
    return <SectorLandingPage data={getFrenchSectorData(route.key, sectors[route.key])} locale="fr" industries={frenchIndustries} />;
  }
  if (route.type === 'value') {
    const dictionary = getTranslationDictionary(route.translation, 'fr');
    return <ValuePage page={translateTree(valuePages[route.key], dictionary)} locale="fr" posts={frenchBlogPosts} industries={frenchIndustries} />;
  }
  if (route.type === 'article') {
    if (route.id === 'tierarztpraxis-blog') return <BlogArticleLayout article={frenchVeterinaryArticle} locale="fr" industries={frenchIndustries} />;
    if (route.id === 'handwerk-blog') return <BlogArticleLayout article={frenchCraftSaleArticle} locale="fr" industries={frenchIndustries} />;
    if (route.id === 'nachfolge-blog') return <BlogArticleLayout article={frenchCraftSuccessionArticle} locale="fr" industries={frenchIndustries} />;
    const dictionary = getTranslationDictionary(route.translation, 'fr');
    const article = translateTree(blogArticles[route.key], dictionary);
    if (article.jsonLd) article.jsonLd = article.jsonLd.map((entry) => ({ ...entry, inLanguage: 'fr-FR' }));
    return <BlogArticleLayout article={article} locale="fr" industries={frenchIndustries} />;
  }
  if (route.type === 'category') return <FrenchInsightsPage />;
  if (route.type === 'booking') return <BookingPage locale="fr" industries={frenchIndustries} />;
  if (route.type === 'referral') return <TipsterPage locale="fr" industries={frenchIndustries} />;
  if (route.type === 'legal') return <FrenchLegalPage route={route} />;
  return null;
}

export default async function FrenchLocalizedPage({ params }) {
  const { slug } = await params;
  const route = routeForSlug(slug);
  if (!route) notFound();

  const dictionary = {
    ...getTranslationDictionary('homepage', 'fr'),
    ...getTranslationDictionary(route.translation, 'fr'),
  };
  const translatedMetadata = metadataForRoute(route, dictionary);
  const content = renderFrenchRoute(route);
  if (!content) notFound();

  return (
    <>
      <DictionaryTranslator
        dictionary={dictionary}
        title={translatedMetadata.title}
        description={translatedMetadata.description}
      />
      {content}
    </>
  );
}
