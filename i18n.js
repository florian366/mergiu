(function () {
  window.mergiuTranslate = function (map) {
    const locale = window.location.pathname.split('/')[1];
    const localeMap = map[locale];
    const sourceMap = Object.fromEntries(Object.entries(map).filter(([, value]) => value && typeof value === 'object' && typeof value[locale] === 'string').map(([source, value]) => [source, value[locale]]));
    const structuredMap = localeMap && typeof localeMap === 'object' && ('text' in localeMap || 'title' in localeMap || 'description' in localeMap) ? localeMap : null;
    const translations = structuredMap ? structuredMap.text || {} : Object.keys(sourceMap).length ? sourceMap : localeMap;
    if (!translations || typeof translations !== 'object') return;

    const lookup = (value) => translations[value] || translations[value.replaceAll('\uFE0E', '')];
    const replace = (value) => lookup(value) || value;
    const replaceText = (root) => {
      const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
      const nodes = [];
      while (walker.nextNode()) nodes.push(walker.currentNode);
      nodes.forEach((node) => {
        const text = node.nodeValue;
        const leading = text.match(/^\s*/)[0];
        const trailing = text.match(/\s*$/)[0];
        const translated = lookup(text.trim());
        if (translated) node.nodeValue = `${leading}${translated}${trailing}`;
      });
    };

    replaceText(document.body);
    document.querySelectorAll('title, meta[content], [alt], [aria-label], [placeholder], [title]').forEach((element) => {
      if (element.tagName === 'TITLE') element.textContent = replace(element.textContent);
      ['content', 'alt', 'aria-label', 'placeholder', 'title'].forEach((attribute) => {
        if (element.hasAttribute(attribute)) element.setAttribute(attribute, replace(element.getAttribute(attribute)));
      });
    });

    if (structuredMap?.title) document.title = structuredMap.title;
    if (structuredMap?.description) document.querySelector('meta[name="description"]')?.setAttribute('content', structuredMap.description);
  };

  (window.mergiuTranslationQueue || []).forEach((map) => window.mergiuTranslate(map));
  window.mergiuTranslationQueue = [];

  const locale = window.location.pathname.split('/')[1];
  if (!['en', 'fr', 'es'].includes(locale)) return;

  const translations = {
    en: {
      language: 'Language',
      home: 'Home',
      industries: 'Industries',
      insights: 'Insights',
      contact: 'Contact',
      privacy: 'Privacy policy',
      terms: 'Terms and conditions',
      imprint: 'Legal notice',
      footer: 'Personal, discreet and connected across industries.',
      sellBusiness: 'Sell your business',
      book: 'Present your business',
      accept: 'Accept',
      reject: 'Reject',
      privacyTitle: 'Your privacy matters to us.',
      privacyCopy: 'We use Google Analytics to understand and improve use of our website anonymously. You can accept or decline.'
    },
    fr: {
      language: 'Langue',
      home: 'Accueil',
      industries: 'Secteurs',
      insights: 'Perspectives',
      contact: 'Contact',
      privacy: 'Politique de confidentialite',
      terms: 'Conditions generales',
      imprint: 'Mentions legales',
      footer: 'Personnel, discret et connecte a tous les secteurs.',
      sellBusiness: 'Vendre votre entreprise',
      book: 'Presenter votre entreprise',
      accept: 'Accepter',
      reject: 'Refuser',
      privacyTitle: 'Votre vie privee est importante pour nous.',
      privacyCopy: 'Nous utilisons Google Analytics pour comprendre et ameliorer anonymement l utilisation de notre site. Vous pouvez accepter ou refuser.'
    },
    es: {
      language: 'Idioma',
      home: 'Inicio',
      industries: 'Sectores',
      insights: 'Ideas',
      contact: 'Contacto',
      privacy: 'Politica de privacidad',
      terms: 'Terminos y condiciones',
      imprint: 'Aviso legal',
      footer: 'Personal, discreto y conectado entre sectores.',
      sellBusiness: 'Vender su empresa',
      book: 'Presentar su empresa',
      accept: 'Aceptar',
      reject: 'Rechazar',
      privacyTitle: 'Su privacidad es importante para nosotros.',
      privacyCopy: 'Utilizamos Google Analytics para comprender y mejorar de forma anonima el uso de nuestro sitio web. Puede aceptar o rechazar.'
    }
  };
  const t = translations[locale];
  const basePath = window.location.pathname.replace(new RegExp(`^/${locale}`), '') || '/';

  document.documentElement.lang = locale;
  document.documentElement.dataset.locale = locale;

  const replaceExactText = (from, to) => {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach((node) => {
      if (node.nodeValue.trim() === from) node.nodeValue = node.nodeValue.replace(from, to);
    });
  };

  replaceExactText('Datenschutz', t.privacy);
  replaceExactText('AGB', t.terms);
  replaceExactText('Impressum', t.imprint);
  replaceExactText('Persönlich, diskret und branchenübergreifend vernetzt.', t.footer);
  replaceExactText('Unternehmen verkaufen', t.sellBusiness);
  replaceExactText('Kontakt aufnehmen', t.contact);
  replaceExactText('Ihre Privatsphäre ist uns wichtig.', t.privacyTitle);
  replaceExactText('Wir verwenden Google Analytics, um die Nutzung unserer Website anonymisiert zu verstehen und zu verbessern. Sie können zustimmen oder ablehnen.', t.privacyCopy);
  replaceExactText('Ablehnen', t.reject);
  replaceExactText('Akzeptieren', t.accept);

  document.querySelectorAll('a[href^="/"]').forEach((link) => {
    const href = link.getAttribute('href');
    if (href && !href.startsWith(`/${locale}/`) && !href.startsWith('//')) link.href = `/${locale}${href}`;
  });

  document.querySelectorAll('a[href$=".html"], a[href$="/"]').forEach((link) => {
    const href = link.getAttribute('href');
    if (!href || href.startsWith('http') || href.startsWith('#')) return;
    const target = new URL(href, window.location.href);
    target.pathname = `/${locale}${target.pathname.replace(new RegExp(`^/${locale}`), '')}`;
    link.href = target.pathname + target.search + target.hash;
  });

  const switcher = document.createElement('details');
  switcher.className = 'language-switcher';
  switcher.innerHTML = `<summary>${t.language}</summary><div><a href="${basePath}">Deutsch</a><a href="/en${basePath}">English</a><a href="/fr${basePath}">Francais</a><a href="/es${basePath}">Espanol</a></div>`;
  document.querySelector('header')?.appendChild(switcher);

  const style = document.createElement('style');
  style.textContent = '.language-switcher{position:relative;margin-left:14px;color:inherit;font:inherit}.language-switcher summary{cursor:pointer;list-style:none}.language-switcher summary::-webkit-details-marker{display:none}.language-switcher div{position:absolute;right:0;top:1.8em;z-index:20;display:grid;min-width:120px;padding:10px;background:#17201d;color:#fff;border:1px solid rgba(255,255,255,.25)}.language-switcher a{padding:4px 0;text-decoration:none;color:inherit}@media(max-width:700px){.language-switcher{margin-left:auto}}';
  document.head.appendChild(style);

  document.querySelectorAll('link[rel="canonical"], link[rel="alternate"][hreflang]').forEach((link) => link.remove());
  const canonical = document.createElement('link');
  canonical.rel = 'canonical';
  canonical.href = window.location.href;
  document.head.appendChild(canonical);
  ['de', 'en', 'fr', 'es'].forEach((language) => {
    const alternate = document.createElement('link');
    alternate.rel = 'alternate';
    alternate.hreflang = language;
    alternate.href = `${window.location.origin}${language === 'de' ? basePath : `/${language}${basePath}`}`;
    document.head.appendChild(alternate);
  });

  const page = basePath.replace(/^\//, '').replace(/\/$/, '') || 'homepage';
  const moduleByPage = {
    'index.html': 'homepage',
    'category.html': 'category',
    'handwerk': 'handwerk',
    'handwerk/index.html': 'handwerk',
    'tiermedizin': 'tiermedizin',
    'tiermedizin/index.html': 'tiermedizin',
    'kanzleien': 'kanzleien',
    'kanzleien/index.html': 'kanzleien',
    'facility-management': 'facility-management',
    'facility-management/index.html': 'facility-management',
    'einzelhandel': 'einzelhandel',
    'einzelhandel/index.html': 'einzelhandel',
    'dienstleistungen': 'dienstleistungen',
    'dienstleistungen/index.html': 'dienstleistungen',
    'persönlich': 'persoenlich',
    'persönlich/index.html': 'persoenlich',
    'persoenlich': 'persoenlich',
    'diskretion': 'diskretion',
    'diskretion/index.html': 'diskretion',
    'netzwerk': 'netzwerk',
    'netzwerk/index.html': 'netzwerk',
    'provisionsfrei': 'provisionsfrei',
    'provisionsfrei/index.html': 'provisionsfrei',
    'persönliche-betreuung': 'persoenliche-betreuung',
    'persönliche-betreuung/index.html': 'persoenliche-betreuung',
    'persoenliche-betreuung': 'persoenliche-betreuung',
    'buchung': 'booking',
    'buchung/index.html': 'booking',
    'tippgeber': 'tippgeber',
    'tippgeber/index.html': 'tippgeber',
    'agb.html': 'agb',
    'datenschutz.html': 'datenschutz',
    'impressum.html': 'impressum',
    'handwerksbetrieb-verkaufen-nachfolger-finden': 'handwerksbetrieb-verkaufen-nachfolger-finden',
    'handwerksbetrieb-verkaufen-nachfolger-finden/index.html': 'handwerksbetrieb-verkaufen-nachfolger-finden',
    'unternehmensnachfolge-im-handwerk-worauf-betriebsinhaber-achten-sollten-und-wie-sie-einen-passenden-nachfolger-finden': 'unternehmensnachfolge-im-handwerk',
    'unternehmensnachfolge-im-handwerk-worauf-betriebsinhaber-achten-sollten-und-wie-sie-einen-passenden-nachfolger-finden/index.html': 'unternehmensnachfolge-im-handwerk'
  };
  const module = moduleByPage[page];
  if (module) {
    const pageTranslations = document.createElement('script');
    pageTranslations.src = `/translations/${module}.js`;
    document.head.appendChild(pageTranslations);
  }
})();
