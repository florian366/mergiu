'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { frenchPathForRoute, getLocalizedRoute } from '../../data/i18n-routes';

const textAttributes = ['alt', 'aria-label', 'placeholder', 'title', 'content'];
const observedAttributes = [...textAttributes, 'href'];

function localizeLinks(root) {
  if (root.nodeType !== Node.ELEMENT_NODE) return;
  const links = root.matches('a[href]') ? [root, ...root.querySelectorAll('a[href]')] : root.querySelectorAll('a[href]');
  for (const link of links) {
    if (link.closest('.language-switcher') || link.dataset.noLocale === 'true' || link.hrefLang === 'de') continue;
    const href = link.getAttribute('href');
    if (!href?.startsWith('/') || href.startsWith('//')) continue;
    const url = new URL(href, window.location.origin);
    const route = getLocalizedRoute(url.pathname);
    const pathname = route ? frenchPathForRoute(route) : (url.pathname === '/fr' ? '/fr/' : `/fr${url.pathname}`);
    const localizedHref = `${pathname}${url.search}${url.hash}`;
    if (localizedHref !== href) link.setAttribute('href', localizedHref);
  }
}

function handleLocalizedNavigation(event) {
  if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  const link = event.target instanceof Element ? event.target.closest('a[href]') : null;
  if (!link || link.closest('.language-switcher') || link.target === '_blank') return;
  const href = link.getAttribute('href');
  if (!href?.startsWith('/fr/')) return;

  event.preventDefault();
  event.stopImmediatePropagation();
  window.location.assign(href);
}

function translateSubtree(root, dictionary) {
  if (!root) return;
  const textNodes = root.nodeType === Node.TEXT_NODE ? [root] : [];
  if (root.nodeType !== Node.TEXT_NODE) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const tagName = node.parentElement?.tagName;
        return ['SCRIPT', 'STYLE', 'NOSCRIPT'].includes(tagName)
          ? NodeFilter.FILTER_REJECT
          : NodeFilter.FILTER_ACCEPT;
      },
    });
    while (walker.nextNode()) textNodes.push(walker.currentNode);
  }
  for (const node of textNodes) {
    const text = node.nodeValue;
    const source = text.trim();
    const translated = dictionary[source] ?? dictionary[source.replaceAll('\uFE0E', '')];
    if (translated) {
      const leading = text.match(/^\s*/)[0];
      const trailing = text.match(/\s*$/)[0];
      node.nodeValue = `${leading}${translated}${trailing}`;
    }
  }

  const elements = root.nodeType === Node.ELEMENT_NODE
    ? [root, ...root.querySelectorAll('*')]
    : [];
  for (const element of elements) {
    for (const attribute of textAttributes) {
      const value = element.getAttribute(attribute);
      if (value && dictionary[value]) element.setAttribute(attribute, dictionary[value]);
    }
  }
  localizeLinks(root);
}

export default function DictionaryTranslator({ dictionary, title, description }) {
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.lang = 'fr';
    document.documentElement.dataset.locale = 'fr';
    if (title) document.title = title;
    if (description) {
      document.querySelector('meta[name="description"]')?.setAttribute('content', description);
    }

    translateSubtree(document.body, dictionary);
    document.addEventListener('click', handleLocalizedNavigation, true);

    const observer = new MutationObserver((records) => {
      for (const record of records) {
        if (record.type === 'attributes') {
          const element = record.target;
          const value = element.getAttribute(record.attributeName);
          if (record.attributeName === 'href') {
            localizeLinks(element);
          } else if (value && dictionary[value]) {
            element.setAttribute(record.attributeName, dictionary[value]);
          }
          continue;
        }

        for (const node of record.addedNodes) {
          if (node.nodeType === Node.ELEMENT_NODE || node.nodeType === Node.TEXT_NODE) {
            translateSubtree(node, dictionary);
          }
        }
        if (record.type === 'characterData') translateSubtree(record.target.parentElement, dictionary);
      }
    });

    observer.observe(document.body, {
      subtree: true,
      childList: true,
      characterData: true,
      attributes: true,
      attributeFilter: observedAttributes,
    });

    return () => {
      observer.disconnect();
      document.removeEventListener('click', handleLocalizedNavigation, true);
    };
  }, [dictionary, title, description, pathname]);

  return null;
}
