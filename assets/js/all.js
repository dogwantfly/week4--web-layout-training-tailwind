"use strict";

var menuBtn = document.querySelector('[data-menu-btn]');
var mobileMenu = document.querySelector('#mobile-menu');
menuBtn.addEventListener('click', function () {
  if (mobileMenu.classList.contains('max-h-48')) {
    mobileMenu.classList.remove('max-h-48');
    mobileMenu.classList.add('max-h-0');
  } else {
    mobileMenu.classList.remove('max-h-0');
    mobileMenu.classList.add('max-h-48');
  }
});
//# sourceMappingURL=all.js.map
