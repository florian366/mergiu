(function () {
  const consentKey = 'mergiu-analytics-consent';
  const savedConsent = localStorage.getItem(consentKey);
  const analyticsId = 'G-BMXV8GKN98';

  const loadAnalytics = () => {
    if (window.__mergiuAnalyticsLoaded) return;
    window.__mergiuAnalyticsLoaded = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', analyticsId);
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${analyticsId}`;
    document.head.appendChild(script);
  };

  const closeBanner = (value) => {
    localStorage.setItem(consentKey, value);
    document.querySelector('.consent-banner')?.remove();
    if (value === 'accepted') loadAnalytics();
  };

  if (savedConsent === 'accepted') {
    loadAnalytics();
    return;
  }
  if (savedConsent === 'rejected') return;

  const banner = document.createElement('aside');
  banner.className = 'consent-banner';
  banner.setAttribute('role', 'dialog');
  banner.setAttribute('aria-label', 'Datenschutzeinstellungen');
  banner.innerHTML = `
    <div class="consent-copy">
      <strong>Ihre Privatsphäre ist uns wichtig.</strong>
      <p>Wir verwenden Google Analytics, um die Nutzung unserer Website anonymisiert zu verstehen und zu verbessern. Sie können zustimmen oder ablehnen.</p>
    </div>
    <div class="consent-actions">
      <button type="button" class="consent-reject">Ablehnen</button>
      <button type="button" class="consent-accept">Akzeptieren</button>
    </div>`;
  document.body.appendChild(banner);
  banner.querySelector('.consent-reject').addEventListener('click', () => closeBanner('rejected'));
  banner.querySelector('.consent-accept').addEventListener('click', () => closeBanner('accepted'));
})();
