import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { getLocalizedRoute, normalizeLocalizedPath } from './i18n-routes';

const dictionaryCache = new Map();

function normalizeDictionary(raw) {
  if (!raw || typeof raw !== 'object') return {};
  if (raw.en && typeof raw.en === 'object') {
    const { text, ...entries } = raw.en;
    return { ...entries, ...(text || {}) };
  }

  return Object.fromEntries(
    Object.entries(raw)
      .filter(([, value]) => value && typeof value === 'object' && typeof value.en === 'string')
      .map(([source, value]) => [source, value.en]),
  );
}

export function getEnglishDictionary(moduleName) {
  if (!moduleName) return {};
  if (dictionaryCache.has(moduleName)) return dictionaryCache.get(moduleName);

  const filePath = path.join(process.cwd(), 'translations', `${moduleName}.js`);
  if (!fs.existsSync(filePath)) {
    dictionaryCache.set(moduleName, {});
    return {};
  }

  const captured = [];
  const window = {
    mergiuTranslate: (map) => captured.push(map),
    mergiuTranslationQueue: [],
  };
  const source = fs.readFileSync(filePath, 'utf8');
  new vm.Script(source, { filename: filePath }).runInNewContext({ window });
  const dictionary = normalizeDictionary(captured[0]);
  dictionaryCache.set(moduleName, dictionary);
  return dictionary;
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
