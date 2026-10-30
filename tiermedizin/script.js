const menu = document.querySelector('.menu');
const nav = document.querySelector('.site-header nav');
document.querySelectorAll('.logo').forEach((logo) => {
  logo.textContent = '';
  logo.innerHTML = '<img src="../images/logo weiß mergiu.png" alt="MERGIU" style="width:120px;height:auto;display:block">';
});
menu?.addEventListener('click', () => nav.classList.toggle('open'));

const heroSubline = document.querySelector('.hero-copy > p:not(.eyebrow)');
if (heroSubline) heroSubline.textContent = 'Wir helfen, provisionsfrei den passenden Nachfolger für Ihre Tierarztpraxis zu finden.';

const introHeading = document.querySelector('.intro h2');
const introCopy = document.querySelectorAll('.intro div > p:not(.eyebrow)');
if (introHeading) introHeading.innerHTML = 'Ihre Tierarztpraxis.<br><strong>Ihre Geschichte.</strong><br><em>In guten Händen.</em>';
if (introCopy[1]) introCopy[1].textContent = 'MERGIU bringt Praxisinhaber mit erfahrenen Nachfolgern, strategischen Käufern, Tierärzten und Investoren zusammen. Persönlich und diskret.';

const problemEyebrow = document.querySelector('.story-problem .eyebrow');
const problemHeading = document.querySelector('.story-problem h2');
if (problemHeading) problemHeading.textContent = 'Wir stellen den entscheidenden Kontakt her.';
const problemImage = document.querySelector('.story-problem .story-image img');
if (problemImage) {
  problemImage.src = '../images/hund mergiu.jpg';
  problemImage.alt = 'Hund in einer Tierarztpraxis';
}
if (problemEyebrow) {
  problemEyebrow.textContent = 'Mit 2000 Kontakten in der Tiermedizin kennen wir bereits den passenden Nachfolger für Ihre Praxis';
  problemEyebrow.style.fontSize = '11px';
}

const problemParagraphs = document.querySelectorAll('.story-problem .story-content > p');
if (problemParagraphs[2]) {
  const cta = document.createElement('div');
  cta.className = 'story-cta';
  cta.innerHTML = '<a class="button" href="#kontakt">Jetzt Praxis vorstellen <span>↗</span></a><small>Ihre Praxis wird nirgends öffentlich zum Verkauf gelistet. Wir aktivieren unser Netzwerk und teilen nur mit Ihrem Einverständnis Daten mit potentiellen Nachfolgern.</small>';
  problemParagraphs[2].after(cta);
}

const processSection = document.querySelector('.process');
const solutionSection = document.querySelector('.story-solution');
const processHeading = document.querySelector('.process-heading h2');
solutionSection?.remove();
if (processHeading) processHeading.textContent = 'Herausforderungen bei der Praxisnachfolge und wie MERGIU sie löst.';
const processButton = document.querySelector('.process-heading .button');
if (processButton) {
  processButton.innerHTML = 'Jetzt Praxis vorstellen <span>↗</span>';
}
const firstStepCopy = document.querySelector('.steps article:first-child p');
const firstStepTitle = document.querySelector('.steps article:first-child h3');
if (firstStepTitle) firstStepTitle.textContent = 'Diskretion';
if (firstStepCopy) firstStepCopy.textContent = 'Bei typischen Maklerplattformen wird Ihre Praxis öffentlich zum Verkauf ausgeschrieben, das bringt Unruhe in Ihr Team und Ihren Kundenstamm. Wir schreiben Ihre Praxis nicht öffentlich zum Verkauf aus, sondern arbeiten persönlich und eng mit unserem Netzwerk, um den Nachfolger auszumachen und Kontakt herzustellen.';
const secondStep = document.querySelector('.steps article:nth-child(2)');
if (secondStep) {
  secondStep.querySelector('h3').textContent = 'Provisionsfreier Verkauf';
  secondStep.querySelector('p').textContent = 'Wir berechnen Ihnen keine Provision beim Verkauf Ihrer Tierarztpraxis. Registrieren Sie Ihre Praxis einmalig bei uns und wir benachrichtigen Sie regelmäßig mit passenden Nachfolgern, bis Sie Ihre Praxis erfolgreich verkauft haben.';
}
const thirdStep = document.querySelector('.steps article:nth-child(3)');
if (thirdStep) {
  thirdStep.querySelector('h3').textContent = 'Aufwand';
  thirdStep.querySelector('p').textContent = 'Statt mit dutzenden Interessenten in den Austausch zu gehen, qualifiziert MERGIU Ihre potentiellen Nachfolger so vor, dass Sie wertvolle Zeit in dieser ohnehin stressigen Phase sparen und sich auf das Wesentliche konzentrieren können.';
}
const fourthStep = document.querySelector('.steps article:nth-child(4)');
if (fourthStep) {
  fourthStep.querySelector('h3').textContent = 'Ergebnisorientiert';
  fourthStep.querySelector('p').textContent = 'Wir haben ein klares Ziel: Einen passenden Nachfolger für Ihre Praxis finden. Hierfür aktivieren wir unser gesamtes Netzwerk. Ein exklusiver Zugriff auf einen Großteil der Branche.';
}
const feeFaq = document.querySelector('.faq-list details:nth-child(5) p');
if (feeFaq) feeFaq.innerHTML = 'Bei MERGIU zahlen Verkäufer <strong>keine erfolgsabhängige Vermittlungsprovision.</strong> Für die einmalige Registrierung und Aufbereitung Ihres Unternehmensprofils berechnen wir 184€.';
const privacyFaq = document.querySelector('.faq-list details:first-child p');
if (privacyFaq) privacyFaq.textContent = 'Genau das ist auch unser Ziel. Ihre Verkaufsabsicht wird vertraulich behandelt. Es wird kein öffentliches Unternehmensprofil Ihrer Praxis geben. Wir machen passende Nachfolger manuell ausfindig und stellen nach Ihrer Zustimmung Kontakt her.';
const largePracticesHeading = document.querySelector('.large-practices h2');
if (largePracticesHeading) largePracticesHeading.textContent = 'Unsere Erfahrung zeichnet und aus.';
const largePracticesIntro = [...document.querySelectorAll('.large-copy > p')].find((paragraph) => paragraph.textContent.includes('Deshalb beziehen wir'));
if (largePracticesIntro) largePracticesIntro.textContent += ' Unsere Erfahrung aus zahlreichen Praxisnachfolgen und der Zugang zu unserem Netzwerk macht den Prozess der Praxisnachfolge mit MERGIU so einzigartig.';
const faqHeading = document.querySelector('.faq-heading h2');
const faqEyebrow = document.querySelector('.faq-heading .eyebrow');
if (faqEyebrow) faqEyebrow.textContent = '06 · Offene Fragen';
if (faqHeading) faqHeading.innerHTML = 'Eine Nachfolge wirft viele Fragen auf. <strong>Wir nehmen sie ernst.</strong>';
const benefitsHeading = document.querySelector('.benefits h2');
if (benefitsHeading) benefitsHeading.innerHTML = '<span class="nowrap">Ihre Nachfolge. Persönlich begleitet.</span><br><em>Branchenübergreifend vernetzt.</em>';
const problemSection = document.querySelector('.story-problem');
if (processSection && problemSection) problemSection.after(processSection);
