(function () {
  if (!document.body) {
    const src = document.currentScript?.src;
    document.addEventListener('DOMContentLoaded', () => {
      const deferredScript = document.createElement('script');
      deferredScript.src = src;
      document.body.appendChild(deferredScript);
    }, { once: true });
    return;
  }
  const scriptUrl = document.currentScript?.src || window.location.href;
  const root = new URL('.', scriptUrl).href;
  const footer = document.querySelector('footer');

  footer?.remove();

  const element = document.createElement('footer');
  element.className = 'site-footer';
  element.innerHTML = `
    <div class="site-footer-main">
      <div class="site-footer-intro">
        <a class="site-footer-logo" href="${root}index.html"><img src="${root}images/logo weiß mergiu.png" alt="MERGIU"></a>
        <p>Persönlich, diskret und branchenübergreifend vernetzt.</p>
        <a class="site-footer-cta" href="https://mergiu.com/buchung/">Unternehmen verkaufen <span aria-hidden="true">↗</span></a>
      </div>
      <nav class="site-footer-column" aria-label="Branchen">
        <h2>Branchen</h2>
        <a href="${root}handwerk/">Handwerk</a>
        <a href="${root}tiermedizin/">Tiermedizin</a>
        <a href="${root}kanzleien/">Kanzleien</a>
        <a href="${root}facility-management/">Facility Management</a>
        <a href="${root}einzelhandel/">Einzelhandel</a>
        <a href="${root}dienstleistungen/">Dienstleistungen</a>
      </nav>
    </div>
    <div class="site-footer-bottom">
      <span>© 2026 MERGIU</span>
      <div><a href="${root}datenschutz.html">Datenschutz</a><a href="${root}agb.html">AGB</a><a href="${root}impressum.html">Impressum</a></div>
    </div>`;
  document.body.appendChild(element);

  const favicon = document.querySelector('link[rel="icon"]') || document.createElement('link');
  favicon.rel = 'icon';
  favicon.type = 'image/svg+xml';
  favicon.href = `${root}images/mergiu-favicon.svg`;
  document.head.appendChild(favicon);

  document.querySelectorAll('a[href*="#contact"], a[href*="#kontakt"]').forEach((link) => {
    link.href = 'https://mergiu.com/buchung/';
  });

  // Keep arrow glyphs in text presentation, including text inserted by translation scripts.
  const normalizeArrowText = (node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      node.nodeValue = node.nodeValue.replace(/↗(?!\uFE0E)/g, '↗\uFE0E');
    }
  };
  const normalizeArrows = (rootNode) => {
    normalizeArrowText(rootNode);
    const textWalker = document.createTreeWalker(rootNode, NodeFilter.SHOW_TEXT);
    while (textWalker.nextNode()) normalizeArrowText(textWalker.currentNode);
  };
  normalizeArrows(document.body);
  const arrowObserver = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === 'characterData') normalizeArrowText(mutation.target);
      mutation.addedNodes?.forEach(normalizeArrows);
    });
  });
  arrowObserver.observe(document.body, { childList: true, characterData: true, subtree: true });

  const stylesheet = document.createElement('link');
  stylesheet.rel = 'stylesheet';
  stylesheet.href = `${root}footer.css`;
  document.head.appendChild(stylesheet);

  const locale = window.location.pathname.split('/')[1];
  if (['en', 'fr', 'es'].includes(locale)) {
    const translations = document.createElement('script');
    translations.src = '/i18n.js';
    translations.defer = true;
    document.head.appendChild(translations);
  }
})();
