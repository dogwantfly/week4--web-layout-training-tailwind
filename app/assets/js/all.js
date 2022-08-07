const menuBtn = document.querySelector('[data-menu-btn]');
const mobileMenu = document.querySelector('#mobile-menu');
menuBtn.addEventListener('click', () => {
  if(mobileMenu.classList.contains('max-h-48')) {
    mobileMenu.classList.remove('max-h-48');
    mobileMenu.classList.add('max-h-0');
  } else {
    mobileMenu.classList.remove('max-h-0');
    mobileMenu.classList.add('max-h-48');
  }
})