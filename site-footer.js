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
        <a class="site-footer-cta" href="${root}index.html#contact">Unternehmen verkaufen <span aria-hidden="true">↗</span></a>
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
      <div><a href="${root}datenschutz.html">Datenschutz</a><a href="${root}impressum.html">Impressum</a></div>
    </div>`;
  document.body.appendChild(element);

  const stylesheet = document.createElement('link');
  stylesheet.rel = 'stylesheet';
  stylesheet.href = `${root}footer.css`;
  document.head.appendChild(stylesheet);
})();
