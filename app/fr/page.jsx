import HomePage from '../page';
import DictionaryTranslator from '../../components/i18n/DictionaryTranslator';
import { getTranslationDictionary } from '../../data/english-translation';
import { frenchAnalysisSteps, frenchBlogCategories, frenchBlogPosts, frenchIndustries, frenchProcessItems } from '../../data/french-content';

const dictionary = getTranslationDictionary('homepage', 'fr');
const content = {
  industries: frenchIndustries,
  blogPosts: frenchBlogPosts,
  blogCategories: frenchBlogCategories,
  processItems: frenchProcessItems,
  analysisSteps: frenchAnalysisSteps,
};
const sourceTitle = 'Unternehmensnachfolge kostenlos beraten | MERGIU';
const sourceDescription = 'Kostenlose Erstberatung zur Unternehmensnachfolge: MERGIU findet passende Nachfolger, Käufer und Investoren für Ihr Unternehmen – persönlich, diskret und provisionsfrei.';

export const metadata = {
  title: dictionary[sourceTitle] || 'Conseil en transmission d’entreprise | MERGIU',
  description: dictionary[sourceDescription] || 'Conseil personnalisé et discret pour la transmission de votre entreprise.',
  alternates: {
    canonical: 'https://mergiu.com/fr/',
    languages: {
      de: 'https://mergiu.com/',
      en: 'https://mergiu.com/business-succession/',
      fr: 'https://mergiu.com/fr/',
    },
  },
};

export default function FrenchHomePage() {
  return (
    <>
      <DictionaryTranslator dictionary={dictionary} title={metadata.title} description={metadata.description} />
      <HomePage locale="fr" content={content} />
    </>
  );
}
