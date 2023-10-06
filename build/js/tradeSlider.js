"use strict";

var slider = document.querySelector('.tarde-slider');
var prevButton = document.querySelector('.prev-button');
var nextButton = document.querySelector('.next-button');
var slides = Array.from(slider.querySelectorAll('.slider-item'));
var slideCount = slides.length;
var slideIndex = 0;
prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);
function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
}
function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}
function updateSlider() {
  slides.forEach(function (slide, index) {
    if (index === slideIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}
updateSlider();