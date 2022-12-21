"use strict";

const hamburger = document.querySelector('.hamburger'),
      aside = document.querySelector('.promo__wrapper-aside'),
      close = document.querySelector('[data-close]');

hamburger.addEventListener('click', () => {
    aside.classList.toggle('active');
});

close.addEventListener('click', () => {
    aside.classList.toggle('active');
});