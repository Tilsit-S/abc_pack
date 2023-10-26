"use strict";

// Бургер меню
(function () {
  var burgerButton = document.querySelector(".burger-btn");
  var closeBurgerBtn = document.querySelector(".burger-btn-close");
  var menu = document.querySelector(".pop-up");
  var overlay = document.querySelector(".modal-overlay");
  var body = document.querySelector("body");
  function onOverlayClick(evt) {
    if (evt.target.classList.contains("modal-overlay")) {
      closeMenu();
    }
  }
  function closeMenu() {
    menu.classList.remove("show");
    overlay.classList.remove("open");
    overlay.removeEventListener("click", onOverlayClick);
    body.classList.remove("no-scroll");
  }
  function onBurgerButtonClick(evt) {
    evt.preventDefault();
    menu.classList.add("show");
    overlay.classList.add("open");
    body.classList.add("no-scroll");
    overlay.addEventListener("click", onOverlayClick);
  }
  burgerButton.addEventListener("click", onBurgerButtonClick);
  closeBurgerBtn.addEventListener("click", closeMenu);
})();