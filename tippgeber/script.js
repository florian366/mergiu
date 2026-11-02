const tipMenu = document.querySelector('.tip-menu');
const tipNavigation = document.querySelector('.tip-header nav');
tipMenu?.addEventListener('click', () => tipNavigation?.classList.toggle('is-open'));

document.querySelectorAll('.tipster-page *').forEach((element) => {
  if (element.children.length === 0 && element.textContent.includes('500 €')) element.textContent = element.textContent.replaceAll('500 €', '500€');
});

document.querySelectorAll('.tip-header nav a').forEach((link) => link.addEventListener('click', () => tipNavigation?.classList.remove('is-open')));

const tipForm = document.querySelector('#tip-form');
const tipSuccess = document.querySelector('#tip-form-success');
tipForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const values = Object.fromEntries(new FormData(tipForm).entries());
  const body = [
    `Name: ${values.name}`,
    `E-Mail: ${values.email}`,
    `Telefon: ${values.phone || 'Nicht angegeben'}`,
    `Unternehmen: ${values.company}`,
    `Ort: ${values.location || 'Nicht angegeben'}`,
    `Woher bekannt: ${values.source || 'Nicht angegeben'}`,
    '',
    `Hinweis: ${values.message}`
  ].join('\n');
  window.location.href = `mailto:florian@viralnation.de?subject=${encodeURIComponent('Tippgeber-Hinweis zur Unternehmensnachfolge')}&body=${encodeURIComponent(body)}`;
  tipForm.hidden = true;
  tipSuccess.hidden = false;
  tipSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
});
