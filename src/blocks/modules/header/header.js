"use strict";

const hamburger = document.querySelector('.hamburger'),
      aside = document.querySelector('.promo__wrapper-aside'),
      close = document.querySelector('[data-close]'),
      body = document.querySelector('body');

hamburger.addEventListener('click', () => {
    aside.classList.toggle('active');
    body.style.overflow = 'hidden';
    if (!aside.contains(document.querySelector(".active"))) {
        body.style.overflow = 'scroll';
    }
});

close.addEventListener('click', () => {
    aside.classList.toggle('active');
    body.style.overflow = 'scroll';

});