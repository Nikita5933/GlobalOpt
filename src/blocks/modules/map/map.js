"use strict";

const btnClose = document.querySelector('[data-close]'),
      mapWindow = document.querySelector('.map__window');

btnClose.addEventListener('click', () => {
    mapWindow.style.display = 'none';
});