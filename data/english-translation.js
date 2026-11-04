import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { getLocalizedRoute, normalizeLocalizedPath } from './i18n-routes';

const dictionaryCache = new Map();

const frenchWordCorrections = {
  reseau: 'réseau',
  reseaux: 'réseaux',
  discrete: 'discrète',
  discretement: 'discrètement',
  reussie: 'réussie',
  reussi: 'réussi',
  reussite: 'réussite',
  etape: 'étape',
  etapes: 'étapes',
  preparation: 'préparation',
  preparee: 'préparée',
  preparer: 'préparer',
  medical: 'médical',
  medicale: 'médicale',
  premiere: 'première',
  precis: 'précis',
  precise: 'précise',
  precisement: 'précisément',
  interesses: 'intéressés',
  interesse: 'intéressé',
  interet: 'intérêt',
  negociations: 'négociations',
  maniere: 'manière',
  differents: 'différents',
  proprietaire: 'propriétaire',
  proprietaires: 'propriétaires',
  'peut-etre': 'peut-être',
  deja: 'déjà',
  ete: 'été',
  etre: 'être',
  meme: 'même',
};

function polishFrench(value) {
  if (typeof value !== 'string') return value;
  return value.replace(/\b(reseaux?|discrete|discretement|reuss(?:ie|i|ite)|etapes?|preparation|preparee|preparer|medicale?|premiere|precis(?:e|ement)?|interesses?|interet|negociations|maniere|differents|proprietaires?|peut-etre|deja|ete|etre|meme)\b/gi, (word) => {
    const corrected = frenchWordCorrections[word.toLowerCase()];
    if (!corrected) return word;
    if (word === word.toUpperCase()) return corrected.toUpperCase();
    return word[0] === word[0].toUpperCase()
      ? `${corrected[0].toUpperCase()}${corrected.slice(1)}`
      : corrected;
  });
}

function normalizeDictionary(raw, locale = 'en') {
  if (!raw || typeof raw !== 'object') return {};
  let dictionary;
  if (raw[locale] && typeof raw[locale] === 'object') {
    const { text, ...entries } = raw[locale];
    dictionary = { ...entries, ...(text || {}) };
  } else {
    dictionary = Object.fromEntries(
      Object.entries(raw)
        .filter(([, value]) => value && typeof value === 'object' && typeof value[locale] === 'string')
        .map(([source, value]) => [source, value[locale]]),
    );
  }
  if (locale !== 'fr') return dictionary;
  return Object.fromEntries(Object.entries(dictionary).map(([source, translation]) => [source, polishFrench(translation)]));
}

export function getTranslationDictionary(moduleName, locale = 'en') {
  if (!moduleName) return {};
  const cacheKey = `${locale}:${moduleName}`;
  if (dictionaryCache.has(cacheKey)) return dictionaryCache.get(cacheKey);

  const filePath = path.join(process.cwd(), 'translations', `${moduleName}.js`);
  if (!fs.existsSync(filePath)) {
    dictionaryCache.set(cacheKey, {});
    return {};
  }

  const captured = [];
  const window = {
    mergiuTranslate: (map) => captured.push(map),
    mergiuTranslationQueue: [],
  };
  const source = fs.readFileSync(filePath, 'utf8');
  new vm.Script(source, { filename: filePath }).runInNewContext({ window });
  const dictionary = normalizeDictionary(captured[0], locale);
  dictionaryCache.set(cacheKey, dictionary);
  return dictionary;
}

export function getEnglishDictionary(moduleName) {
  return getTranslationDictionary(moduleName, 'en');
}

export function translateTree(value, dictionary) {
  if (typeof value === 'string') return dictionary[value] || value;
  if (Array.isArray(value)) return value.map((item) => translateTree(item, dictionary));
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, translateTree(item, dictionary)]));
  }
  return value;
}

export function translateText(text, dictionary) {
  return dictionary[text] || text;
}

function localizeUrl(value) {
  if (typeof value !== 'string' || (!value.startsWith('/') && !value.startsWith('https://mergiu.com/'))) return value;
  const absolute = value.startsWith('https://');
  const url = new URL(value, 'https://mergiu.com');
  const route = getLocalizedRoute(url.pathname);
  if (!route) return value;
  url.pathname = normalizeLocalizedPath(route.en);
  return absolute ? `${url.origin}${url.pathname}${url.search}${url.hash}` : `${url.pathname}${url.search}${url.hash}`;
}

export function localizeTree(value, dictionary, locale = 'en', key = '') {
  if (typeof value === 'string') {
    if (locale === 'en' && ['href', 'url', 'canonical', '@id', 'mainEntityOfPage'].includes(key)) return localizeUrl(value);
    return locale === 'en' ? (dictionary[value] || value) : value;
  }
  if (Array.isArray(value)) return value.map((item) => localizeTree(item, dictionary, locale, key));
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).map(([childKey, item]) => [childKey, localizeTree(item, dictionary, locale, childKey)]));
  }
  return value;
}
