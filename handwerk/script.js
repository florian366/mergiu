const menu = document.querySelector('.menu');
const nav = document.querySelector('.site-header nav');
document.querySelectorAll('.logo').forEach((logo) => {
  logo.textContent = '';
  logo.innerHTML = '<img src="../images/logo weiß mergiu.png" alt="MERGIU" style="width:120px;height:auto;display:block">';
});
menu?.addEventListener('click', () => nav.classList.toggle('open'));
