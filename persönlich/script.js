const menu = document.querySelector('.menu');
const navigation = document.querySelector('.page-header nav');
menu?.addEventListener('click', () => {
  navigation?.classList.toggle('open');
});
