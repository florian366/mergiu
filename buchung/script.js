const slider = document.querySelector('.slider');
const slides = [...document.querySelectorAll('.slide')];
slider.style.transition = 'none';
let current = 0;
let position = 0;
let target = 0;
let animationFrame;
const panelWidth = () => window.innerWidth - window.innerWidth * 0.079;
const maxOffset = () => (slides.length - 1) * panelWidth();
const updateCounter = () => {
  const index = Math.round(position / panelWidth());
  document.querySelector('.slide-count span').textContent = String(index + 1).padStart(2, '0');
};
const animate = () => {
  position += (target - position) * 0.095;
  if (Math.abs(target - position) < 0.1) position = target;
  slider.style.transform = `translate3d(${-position}px, 0, 0)`;
  updateCounter();
  if (position !== target) animationFrame = requestAnimationFrame(animate);
  else animationFrame = null;
};
const moveTo = (offset) => {
  if (window.innerWidth <= 900) return;
  target = Math.max(0, Math.min(maxOffset(), offset));
  if (!animationFrame) animationFrame = requestAnimationFrame(animate);
};
const goTo = (index) => {
  if (window.innerWidth <= 900) return;
  current = Math.max(0, Math.min(slides.length - 1, index));
  moveTo(current * panelWidth());
};
window.addEventListener('wheel', (event) => {
  if (window.innerWidth <= 900) return;
  event.preventDefault();
  const delta = event.deltaX || event.deltaY;
  if (Math.abs(delta) < 1) return;
  moveTo(target + delta * 1.15);
}, { passive: false });
window.addEventListener('keydown', (event) => {
  const nearestPanel = Math.round(target / panelWidth());
  if (event.key === 'ArrowRight' || event.key === 'PageDown') goTo(nearestPanel + 1);
  if (event.key === 'ArrowLeft' || event.key === 'PageUp') goTo(nearestPanel - 1);
});
window.addEventListener('resize', () => {
  position = current * panelWidth();
  target = position;
  slider.style.transform = `translate3d(${-position}px, 0, 0)`;
});
document.querySelectorAll('a[href^="#slide-"]').forEach((link) => link.addEventListener('click', (event) => {
  if (window.innerWidth <= 900) return;
  event.preventDefault();
  goTo(Number(link.getAttribute('href').replace('#slide-', '')) - 1);
}));

document.querySelectorAll('.faq-question').forEach((question) => question.addEventListener('click', () => {
  const answer = document.getElementById(question.getAttribute('aria-controls'));
  const item = question.closest('.faq-item');
  const isOpen = question.getAttribute('aria-expanded') === 'true';
  question.setAttribute('aria-expanded', String(!isOpen));
  item.classList.toggle('is-open', !isOpen);
  answer.style.maxHeight = isOpen ? '0px' : `${answer.scrollHeight}px`;
}));

const networkForm = document.querySelector('#network-form');
const networkFormView = document.querySelector('.network-form-view');
const networkConfirmation = document.querySelector('.network-confirmation');
networkFormView?.querySelector('.eyebrow')?.remove();
const networkLead = document.querySelector('.network-lead');
if (networkLead) {
  const personalIntro = document.createElement('p');
  personalIntro.className = 'network-lead';
  personalIntro.textContent = 'Wir kontaktieren Sie persönlich und schauen in unserem Netzwerk nach dem passenden Nachfolger für Ihr Unternehmen und stellen den Kontakt her.';
  networkLead.before(personalIntro);
}
networkForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  networkFormView.hidden = true;
  networkConfirmation.hidden = false;
});
