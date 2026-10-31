const menu = document.querySelector('.menu');
const nav = document.querySelector('.header nav');
document.querySelectorAll('.logo').forEach((logo) => {
  logo.textContent = '';
  logo.innerHTML = '<img src="images/logo weiß mergiu.png" alt="MERGIU" style="width:100px;height:auto;display:block">';
});
menu?.addEventListener('click', () => nav.classList.toggle('open'));
const servicesTitle = document.querySelector('.services-title');
if (servicesTitle) servicesTitle.textContent = 'Branchenübergreifend, international vernetzt';
const servicesIntro = document.querySelector('.services-intro');
if (servicesIntro) servicesIntro.textContent = 'Wir initiieren und begleiten Unternehmensnachfolgen sowie Verkaufsprozesse in unterschiedlichen Branchen. Dabei kommt es nicht darauf an, wie groß ein Unternehmen ist, sondern darauf, die richtigen Menschen zusammenzubringen.';
const categoryBlock = [...document.querySelectorAll('.blog-sidebar-block')].find((block) => block.querySelector('h3')?.textContent.trim() === 'Kategorien');
if (categoryBlock && ![...categoryBlock.querySelectorAll('a')].some((link) => link.textContent.trim() === 'Facility Management')) {
  const facilityLink = document.createElement('a');
  facilityLink.href = 'category.html?category=Facility%20Management';
  facilityLink.textContent = 'Facility Management';
  categoryBlock.append(facilityLink);
}
document.querySelectorAll('.accordion-copy .button').forEach((button) => {
  button.textContent = 'mehr erfahren ↗';
});
const personalSectionLink = document.querySelector('.accordion-item:first-child .accordion-copy .button');
if (personalSectionLink) personalSectionLink.href = 'persönlich/';
const servicesSection = document.querySelector('.services');
const serviceRow = servicesSection?.querySelector('.service-row');
const serviceCards = [...(serviceRow?.querySelectorAll('.service-card') || [])];
let serviceSlideTimer;
let serviceResumeTimer;
let serviceSectionVisible = false;
if (servicesSection && serviceRow && serviceCards.length > 1) {
  const slideToNextService = () => {
    const currentIndex = serviceCards.reduce((closestIndex, card, index) => {
      const closestDistance = Math.abs(serviceCards[closestIndex].offsetLeft - serviceRow.scrollLeft);
      const distance = Math.abs(card.offsetLeft - serviceRow.scrollLeft);
      return distance < closestDistance ? index : closestIndex;
    }, 0);
    const nextIndex = (currentIndex + 1) % serviceCards.length;
    serviceRow.dataset.autoScrolling = 'true';
    serviceRow.scrollTo({
      left: serviceCards[nextIndex].offsetLeft,
      behavior: 'smooth'
    });
    window.setTimeout(() => delete serviceRow.dataset.autoScrolling, 800);
  };
  const startServiceSlider = () => {
    if (!serviceSlideTimer) serviceSlideTimer = window.setInterval(slideToNextService, 2000);
  };
  const stopServiceSlider = () => {
    window.clearInterval(serviceSlideTimer);
    serviceSlideTimer = undefined;
  };
  const pauseForUser = () => {
    if (serviceRow.dataset.autoScrolling) return;
    stopServiceSlider();
    window.clearTimeout(serviceResumeTimer);
    serviceResumeTimer = window.setTimeout(() => {
      if (serviceSectionVisible) startServiceSlider();
    }, 10000);
  };
  ['wheel', 'touchstart', 'pointerdown', 'keydown'].forEach((eventName) => {
    serviceRow.addEventListener(eventName, pauseForUser, { passive: true });
  });
  new IntersectionObserver(([entry]) => {
    serviceSectionVisible = entry.isIntersecting;
    if (serviceSectionVisible) startServiceSlider();
    else {
      stopServiceSlider();
      window.clearTimeout(serviceResumeTimer);
    }
  }, { threshold: 0.35 }).observe(servicesSection);
}

const hero = document.querySelector('.hero');
const heroWord = document.querySelector('.hero-word');
const introSection = document.querySelector('.intro');
const scrollWords = [...document.querySelectorAll('.scroll-word')];
const successSection = document.querySelector('.success');
const successWords = [...document.querySelectorAll('.success-word')];
let ticking = false;
const updateScrollWords = () => {
  if (!introSection || !scrollWords.length) return;
  const start = introSection.offsetTop - window.innerHeight * 0.72;
  const end = introSection.offsetTop + introSection.offsetHeight * 0.35;
  const progress = Math.min(1, Math.max(0, (window.scrollY - start) / (end - start)));
  const visibleWords = Math.floor(progress * (scrollWords.length + 1));
  scrollWords.forEach((word, index) => word.classList.toggle('is-light', index < visibleWords));
};
const updateSuccessWords = () => {
  if (!successSection || !successWords.length) return;
  const start = successSection.offsetTop - window.innerHeight * 0.8;
  const end = successSection.offsetTop + successSection.offsetHeight * 0.1;
  const progress = Math.min(1, Math.max(0, (window.scrollY - start) / (end - start)));
  const visibleWords = Math.floor(progress * (successWords.length + 1));
  successWords.forEach((word, index) => word.classList.toggle('is-light', index < visibleWords));
  successSection.classList.toggle('words-complete', visibleWords >= successWords.length);
};
const updateHeroWord = () => {
  if (!hero || !heroWord) return;
  const progress = Math.min(1, Math.max(0, window.scrollY / (hero.offsetHeight * 0.72)));
  heroWord.style.transform = `translate3d(0, ${progress * 220}px, 0) scale(${1 - progress * 0.12})`;
  heroWord.style.opacity = String(1 - progress);
  updateScrollWords();
  updateSuccessWords();
  ticking = false;
};
window.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(updateHeroWord);
    ticking = true;
  }
}, { passive: true });
updateHeroWord();
updateScrollWords();
updateSuccessWords();

const accordionItems = [...document.querySelectorAll('.accordion-item')];
const accordionLinks = ['persönlich/', 'diskretion/', 'netzwerk/', 'provisionsfrei/', 'persönliche-betreuung/'];
accordionItems.forEach((item, index) => {
  const link = item.querySelector('.accordion-copy .button');
  if (link && accordionLinks[index]) link.href = accordionLinks[index];
});
accordionItems[0]?.querySelector('.accordion-tab span')?.replaceChildren('Persönlich');
accordionItems.forEach((item) => {
  item.querySelector('.accordion-tab')?.addEventListener('click', () => {
    accordionItems.forEach((panel) => {
      const active = panel === item;
      panel.classList.toggle('selected', active);
      panel.querySelector('.accordion-tab')?.setAttribute('aria-expanded', String(active));
    });
  });
});

const blogSearch = document.querySelector('.blog-search input');
blogSearch?.setAttribute('placeholder', 'Inhalte suchen');
const blogResults = [...document.querySelectorAll('.blog-search-results a')];
const blogSidebar = document.querySelector('.blog-sidebar');
if (blogSearch && blogResults.length && blogSidebar) {
  const filterBlogResults = () => {
    const query = blogSearch.value.trim().toLowerCase();
    blogSidebar.classList.add('search-open');
    [...document.querySelectorAll('.blog-search-results a')].forEach((result) => {
      result.hidden = query && !result.dataset.blogTitle.toLowerCase().includes(query);
    });
  };
  blogSearch.addEventListener('focus', filterBlogResults);
  blogSearch.addEventListener('input', filterBlogResults);
  blogResults.forEach((result) => result.addEventListener('click', (event) => {
    blogSearch.value = result.dataset.blogTitle;
    blogSidebar.classList.remove('search-open');
  }));
  document.addEventListener('click', (event) => {
    if (!blogSidebar.contains(event.target)) blogSidebar.classList.remove('search-open');
  });
}

// The newest entry is used as the main article. Add future posts to this list.
const blogPosts = [
  {
    slug: 'unternehmensnachfolge-im-handwerk-worauf-betriebsinhaber-achten-sollten-und-wie-sie-einen-passenden-nachfolger-finden',
    title: 'Unternehmensnachfolge im Handwerk: Worauf Betriebsinhaber achten sollten und wie Sie einen passenden Nachfolger finden',
    date: '2026-10-28',
    label: 'Handwerk, Unternehmensnachfolge',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1800&q=85'
  },
  {
    slug: 'aktuelle-nachrichten-aus-der-wirtschaft',
    title: 'Aktuelle Nachrichten aus der Wirtschaft',
    date: '2026-02-06',
    label: 'Investment, Forschung',
    image: 'https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=1800&q=85'
  },
  {
    slug: 'besseren-service-fuer-kunden-schaffen',
    title: 'Besseren Service für Kunden schaffen',
    date: '2026-02-05',
    label: 'Dienstleistungen',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1800&q=85'
  },
  {
    slug: 'geschaeftsplanung-und-strategie',
    title: 'Geschäftsplanung und Strategie',
    date: '2026-02-04',
    label: 'Unternehmen',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1800&q=85'
  }
];
const postUrl = (post) => `${post.slug}/`;
const postByTitle = new Map(blogPosts.map((post) => [post.title, post]));
document.querySelectorAll('.blog-sidebar a, .blog-search-results a').forEach((link) => {
  const post = postByTitle.get(link.dataset.blogTitle || link.textContent.trim());
  if (post) link.href = postUrl(post);
});
const handwerkSearchResult = document.querySelector('.blog-search-results');
const handwerkPostLink = document.createElement('a');
if (handwerkSearchResult) {
  handwerkPostLink.href = postUrl(blogPosts[0]);
  handwerkPostLink.dataset.blogTitle = blogPosts[0].title;
  handwerkPostLink.textContent = blogPosts[0].title;
  handwerkSearchResult.prepend(handwerkPostLink);
  handwerkPostLink.addEventListener('click', (event) => {
    if (blogSearch) blogSearch.value = handwerkPostLink.dataset.blogTitle;
    blogSidebar?.classList.remove('search-open');
  });
}
const newestBlogPost = [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date))[0];
const blogPost = document.querySelector('.blog-post');
if (blogPost && newestBlogPost) {
  const hero = blogPost.querySelector('.blog-hero-image');
  const title = blogPost.querySelector('h2');
  const meta = blogPost.querySelector('.blog-meta');
  if (hero) hero.style.backgroundImage = `url("${newestBlogPost.image}")`;
  if (title) title.textContent = newestBlogPost.title;
  if (meta) meta.innerHTML = `${new Date(newestBlogPost.date).toLocaleDateString('de-DE', { day: '2-digit', month: 'short' })} <span>|</span> ${newestBlogPost.label}`;
}

if (blogPost && newestBlogPost.slug === 'unternehmensnachfolge-im-handwerk-worauf-betriebsinhaber-achten-sollten-und-wie-sie-einen-passenden-nachfolger-finden') {
  blogPost.innerHTML = `
    <div class="blog-hero-image" style="background-image:url('${newestBlogPost.image}')"></div>
    <div class="blog-meta">28. Oktober <span>|</span> Handwerk, Unternehmensnachfolge</div>
    <h2>${newestBlogPost.title}</h2>
    <p>Ein Handwerksbetrieb ist häufig weit mehr als ein Unternehmen. Über viele Jahre oder sogar Jahrzehnte wurden Kundenbeziehungen aufgebaut, Mitarbeiter ausgebildet, Maschinen angeschafft und ein guter Ruf in der Region erarbeitet. Doch irgendwann stellt sich für viele Inhaber die Frage: Wie geht es mit meinem Betrieb weiter, wenn ich selbst kürzertreten oder mich zur Ruhe setzen möchte?</p>
    <p>Die Unternehmensnachfolge im Handwerk gehört zu den wichtigsten Herausforderungen für viele mittelständische Betriebe. Gleichzeitig bietet sie große Chancen: für junge Meister, erfahrene Fachkräfte und Unternehmer, die einen bestehenden Betrieb übernehmen und weiterentwickeln möchten.</p>
    <p>Doch worauf sollten Inhaber achten, wenn sie ihren Handwerksbetrieb übergeben oder verkaufen möchten? Wann ist der richtige Zeitpunkt? Und wie findet man einen geeigneten Nachfolger?</p>
    <p>In diesem Beitrag erfahren Sie, wie Sie die Unternehmensnachfolge frühzeitig planen und welche Möglichkeiten es gibt, einen passenden Übernehmer für Ihren Betrieb zu finden.</p>
    <div class="blog-image-placeholder">Bildplatzhalter</div>
    <h3>Warum die Unternehmensnachfolge im Handwerk immer wichtiger wird</h3>
    <p>Viele Handwerksunternehmen sind inhabergeführt. Der Inhaber ist häufig nicht nur Geschäftsführer, sondern auch Ansprechpartner für Kunden, Lieferanten und Mitarbeiter. Sein persönliches Wissen, seine Erfahrung und seine Kontakte sind ein wesentlicher Bestandteil des Unternehmenserfolgs.</p>
    <p>Wenn dieser Inhaber ausscheidet, muss nicht nur eine Person ersetzt werden. Oft geht es darum, ein über Jahre gewachsenes Unternehmen mit seinen Strukturen, Mitarbeitern und Kundenbeziehungen in eine neue Zukunft zu führen.</p>
    <p>Besonders herausfordernd ist dabei, dass die Suche nach einem geeigneten Nachfolger Zeit benötigt. Nicht jeder Interessent verfügt über die notwendige Qualifikation, das unternehmerische Interesse oder die finanziellen Möglichkeiten, einen bestehenden Handwerksbetrieb zu übernehmen.</p>
    <p>Umso wichtiger ist es, sich frühzeitig mit dem Thema auseinanderzusetzen.</p>
    <h3>1. Frühzeitig mit der Nachfolgeplanung beginnen</h3>
    <p>Einer der häufigsten Fehler ist es, sich erst kurz vor dem geplanten Ruhestand mit der Unternehmensnachfolge zu beschäftigen. Idealerweise beginnen Unternehmer bereits drei bis fünf Jahre vor der geplanten Übergabe mit den Vorbereitungen.</p>
    <p>Dabei sollten Sie sich zunächst einige grundlegende Fragen stellen:</p>
    <ul><li>Wann möchte ich mich aus dem operativen Geschäft zurückziehen?</li><li>Soll der Betrieb vollständig verkauft oder teilweise übergeben werden?</li><li>Kommt eine interne Nachfolge durch Mitarbeiter oder Familienangehörige infrage?</li><li>Ist ein externer Käufer oder strategischer Investor eine interessante Möglichkeit?</li><li>Welche Rolle möchte ich nach der Übergabe noch übernehmen?</li></ul>
    <p>Eine frühzeitige Planung schafft Handlungsspielraum und verhindert, dass unter Zeitdruck Entscheidungen getroffen werden müssen.</p>
    <div class="blog-image-placeholder">Bildplatzhalter</div>
    <h3>2. Den Wert des eigenen Handwerksbetriebs kennen</h3>
    <p>Wer seinen Betrieb verkaufen möchte, sollte eine realistische Vorstellung vom Unternehmenswert haben. Dabei spielen verschiedene Faktoren eine Rolle:</p>
    <ul><li>Umsatz und Ertragslage der vergangenen Jahre</li><li>Kundenstamm und bestehende Auftragsbeziehungen</li><li>Qualifikation und Erfahrung der Mitarbeiter</li><li>Maschinen, Werkzeuge und technische Ausstattung</li><li>Immobilien und Betriebsstandorte</li><li>Marktposition und regionale Bekanntheit</li><li>Abhängigkeit des Unternehmens vom bisherigen Inhaber</li><li>Entwicklungsmöglichkeiten und Zukunftsaussichten</li></ul>
    <p>Gerade im Handwerk hängt der Wert eines Unternehmens nicht allein von Maschinen, Fahrzeugen oder dem vorhandenen Auftragsbestand ab. Ein eingespieltes Team, langjährige Kundenbeziehungen und funktionierende Betriebsabläufe können für einen Nachfolger besonders attraktiv sein.</p>
    <p>Eine professionelle Unternehmensbewertung kann dabei helfen, eine realistische Preisvorstellung zu entwickeln. Der tatsächliche Verkaufspreis hängt letztlich auch von der Nachfrage und den individuellen Rahmenbedingungen ab.</p>
    <h3>3. Den Betrieb unabhängig vom bisherigen Inhaber aufstellen</h3>
    <p>Ein Unternehmen ist für potenzielle Nachfolger besonders interessant, wenn es nicht vollständig von der bisherigen Inhaberperson abhängig ist. Deshalb lohnt es sich, rechtzeitig Aufgaben und Verantwortlichkeiten zu verteilen.</p>
    <p>Achten Sie beispielsweise darauf:</p>
    <ul><li>Kundenbeziehungen auf mehrere Ansprechpartner zu verteilen.</li><li>Verantwortlichkeiten im Team klar zu definieren.</li><li>Wichtige Arbeitsabläufe zu dokumentieren.</li><li>Bestehende Verträge und Unterlagen zu ordnen.</li><li>Die betriebliche Organisation transparent zu gestalten.</li><li>Schlüsselpositionen im Unternehmen langfristig abzusichern.</li></ul>
    <p>Je unabhängiger ein Betrieb vom bisherigen Inhaber funktioniert, desto einfacher kann ein Nachfolger die vorhandenen Strukturen übernehmen und weiterentwickeln.</p>
    <h3>4. Den passenden Nachfolger finden</h3>
    <p>Für die Unternehmensnachfolge im Handwerk gibt es unterschiedliche Wege. Welche Lösung am besten geeignet ist, hängt von der Größe des Betriebs, der Branche und den persönlichen Vorstellungen des Inhabers ab.</p>
    <h4>Familieninterne Nachfolge</h4><p>In manchen Betrieben übernehmen Kinder oder andere Familienangehörige die Verantwortung. Das kann eine gute Lösung sein, setzt allerdings Interesse und geeignete Voraussetzungen innerhalb der Familie voraus.</p>
    <h4>Nachfolge durch Mitarbeiter</h4><p>Erfahrene Mitarbeiter oder langjährige Führungskräfte kennen den Betrieb bereits und können eine natürliche Nachfolgelösung darstellen. Gerade Meister oder Betriebsleiter können geeignete Kandidaten sein.</p>
    <h4>Externe Nachfolger</h4><p>Auch junge Handwerksmeister, erfahrene Fachkräfte oder bereits selbstständige Unternehmer kommen als Käufer infrage. Für sie kann die Übernahme eines bestehenden Betriebs eine attraktive Alternative zur Neugründung sein.</p>
    <h4>Strategische Käufer und andere Unternehmen</h4><p>Größere Handwerksunternehmen, Unternehmensgruppen oder Investoren suchen regelmäßig nach Möglichkeiten, bestehende Betriebe zu übernehmen und ihre Marktposition auszubauen.</p>
    <h3>5. Diskretion bei der Unternehmensnachfolge ist entscheidend</h3>
    <p>Viele Handwerksunternehmer möchten nicht, dass Mitarbeiter, Kunden, Lieferanten oder Wettbewerber frühzeitig von ihren Verkaufsabsichten erfahren. Deshalb sollte eine Nachfolgersuche möglichst diskret erfolgen.</p>
    <ul><li>Unternehmensinformationen nicht unkontrolliert veröffentlichen.</li><li>Die Identität des Betriebs zunächst schützen.</li><li>Vertrauliche Unterlagen nur an ausgewählte Interessenten weitergeben.</li><li>Vor der Weitergabe sensibler Informationen eine Geheimhaltungsvereinbarung (NDA) abschließen.</li><li>Selbst entscheiden, welche Interessenten weitere Informationen erhalten.</li></ul>
    <div class="blog-image-placeholder">Bildplatzhalter</div>
    <h3>6. Wie MERGIU Handwerksunternehmer unterstützt</h3>
    <p>Viele Betriebsinhaber wissen, dass sie irgendwann einen Nachfolger benötigen. Die eigentliche Herausforderung besteht jedoch darin, geeignete Interessenten zu finden.</p>
    <p>Genau hier setzt MERGIU an. Wir bringen Unternehmer, die ihren Betrieb übergeben oder verkaufen möchten, mit potenziellen Nachfolgern, Käufern und Investoren zusammen. Dabei setzen wir auf einen persönlichen und diskreten Ansatz.</p>
    <p><strong>Was MERGIU für Sie übernimmt:</strong></p>
    <ul><li>Aufnahme der wichtigsten Unternehmensinformationen</li><li>Strukturierte Aufbereitung Ihres Unternehmensprofils</li><li>Prüfung möglicher Verbindungen zu Nachfolgern und Käufern</li><li>Identifizierung potenziell interessierter Unternehmer und Investoren</li><li>Herstellung persönlicher Kontakte nach Ihrer Freigabe</li></ul>
    <h3>Provisionsfrei für Verkäufer</h3>
    <p>Bei MERGIU zahlen Sie als Verkäufer keine erfolgsabhängige Vermittlungsprovision. Für die einmalige Registrierung und Aufbereitung Ihres Unternehmens fällt eine Pauschale von 184 € an. Diese umfasst die Aufnahme und strukturierte Vorbereitung der Unternehmensinformationen, beinhaltet jedoch keine Garantie, einen geeigneten Nachfolger zu finden oder einen Verkauf abzuschließen.</p>
    <h3>Fazit: Die Zukunft Ihres Handwerksbetriebs frühzeitig sichern</h3>
    <p>Die Unternehmensnachfolge sollte nicht erst dann zum Thema werden, wenn der Ruhestand unmittelbar bevorsteht. Wer sich frühzeitig mit der Übergabe beschäftigt, schafft bessere Voraussetzungen für einen erfolgreichen Verkauf und eine langfristige Zukunft des eigenen Betriebs.</p>
    <p>Ob Familiennachfolge, Übernahme durch einen Mitarbeiter oder Verkauf an einen externen Käufer: Es lohnt sich, verschiedene Möglichkeiten zu prüfen und den Kreis potenzieller Nachfolger nicht unnötig einzuschränken.</p>
    <blockquote>Ein gut geführter Handwerksbetrieb verdient eine Zukunft, auch über die Zeit seines bisherigen Inhabers hinaus.</blockquote>
    <div class="blog-cta"><strong>Sie möchten Ihren Handwerksbetrieb verkaufen oder einen Nachfolger finden?</strong><span>MERGIU unterstützt Sie dabei, passende Nachfolger, Käufer und Investoren zu identifizieren und persönliche Verbindungen herzustellen.</span><a href="#contact" class="button">Jetzt Unternehmen bei MERGIU registrieren ↗</a></div>`;
}

const categoryNames = new Set(['Handwerk', 'Tiermedizin', 'Dienstleistungen', 'Einzelhandel', 'Kanzleien', 'Facility Management']);
document.querySelectorAll('.blog-sidebar-block a').forEach((link) => {
  const category = link.textContent.trim();
  if (categoryNames.has(category)) link.href = `category.html?category=${encodeURIComponent(category)}`;
});
const accordionSection = document.querySelector('.accordion-section');
const blogSection = document.querySelector('.blog-section');

if (accordionSection) accordionSection.id = 'about-work';
if (blogSection) blogSection.id = 'blog';

document.querySelectorAll('.service-card').forEach((card) => {
  if (card.querySelector('h3')?.textContent.trim() === 'Tiermedizin') card.href = 'tiermedizin/';
  if (card.querySelector('h3')?.textContent.trim() === 'Handwerk') card.href = 'handwerk/';
  if (card.querySelector('h3')?.textContent.trim() === 'Kanzleien') card.href = 'kanzleien/';
  if (card.querySelector('h3')?.textContent.trim() === 'Facility Management') card.href = 'facility-management/';
  if (card.querySelector('h3')?.textContent.trim() === 'Einzelhandel') card.href = 'einzelhandel/';
  if (card.querySelector('h3')?.textContent.trim() === 'Dienstleistungen') card.href = 'dienstleistungen/';
});
