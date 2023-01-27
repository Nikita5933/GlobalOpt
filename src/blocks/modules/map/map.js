"use strict";

const btnClose = document.querySelectorAll('[data-close]'),
      mapWindow = document.querySelector('.map__window');

btnClose[1].addEventListener('click', () => {
    mapWindow.style.display = 'none';
});