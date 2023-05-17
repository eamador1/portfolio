const hamburger = document.querySelector('.Hamburger-Image');
const menu = document.querySelector('.button-list');
const closemenu = document.querySelector('.x-close');
hamburger.addEventListener('click', () => {
  menu.classList.toggle('active');
});
closemenu.addEventListener('click', () => {
  menu.classList.remove('active');
});
document.querySelectorAll('.navlink').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  menu.classList.remove('active');
}));
