"use strict";

const calcScroll = () => {
let div = document.createElement('div');

div.style.width = '50px';
div.style.height = '50px';
div.style.overflowY = 'scroll';
div.style.visibility = 'hidden';

document.body.appendChild(div);
let scrollWidth = div.offsetWidth - div.clientWidth;

div.remove();

return scrollWidth;
};

const hamburger = document.querySelector('.hamburger'),
      aside = document.querySelector('.promo__wrapper-aside'),
      close = document.querySelector('[data-close]'),
      body = document.querySelector('body'),
      scroll = calcScroll();


hamburger.addEventListener('click', () => {
    aside.classList.toggle('active');
    body.style.overflowY = 'hidden';
    body.style.marginRight = `${scroll}px`;
    hamburger.style.marginRight = `${scroll}px`;
    if (!aside.contains(document.querySelector(".active"))) {
        body.style.overflow = 'scroll';
        body.style.marginRight = 'inherit'
        hamburger.style.marginRight = 'inherit';    
    }
});

close.addEventListener('click', () => {
    aside.classList.toggle('active');
    body.style.overflowY = 'scroll';
    body.style.marginRight = 'inherit'
    hamburger.style.marginRight = 'inherit';

});

