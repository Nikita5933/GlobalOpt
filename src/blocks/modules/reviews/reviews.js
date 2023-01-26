"use strict";

const slides = document.querySelectorAll(".reviews__slider-item"),
	button = document.querySelectorAll(".button");

let current = 0,
	prev = 4,
	next = 1;

for (let i = 0; i < button.length; i++) {
	button[i].addEventListener("click", () => i == 0 ? gotoPrev() : gotoNext());
}

const gotoPrev = () => current > 0 ? gotoNum(current - 1) : gotoNum(slides.length - 1);

const gotoNext = () => current < 2 ? gotoNum(current + 1) : gotoNum(0);

const gotoNum = number => {
	
current = number;
prev = current - 1;
next = current + 1;

for (let i = 0; i < slides.length; i++) {
	slides[i].classList.remove("active");
	slides[i].classList.remove("prev");
	slides[i].classList.remove("next");
}

if (next == 3) {
	next = 0;
}

if (prev == -1) {
	prev = 2;
}

slides[current].classList.add("active");
slides[prev].classList.add("prev");
slides[next].classList.add("next");

};