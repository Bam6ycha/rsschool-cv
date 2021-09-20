"use strict";
//! -----------------menuBurger
const icon = document.querySelector(".menu__ico");
const menuBody = document.querySelector(".menu__body");
if (icon) {
  icon.addEventListener("click", function (event) {
    document.body.classList.toggle("_lock");
    icon.classList.toggle("_active");
    menuBody.classList.toggle("_active");
  });
}

const link = document.querySelectorAll(".header-navigation-link");
function onMenuListClock(event) {
  if (icon.classList.contains("_active")) {
    document.body.classList.remove("_lock");
    icon.classList.remove("_active");
    menuBody.classList.remove("_active");
  }
}
link.forEach((links) => links.addEventListener("click", onMenuListClock));

console.log("Верстка валидная +10");
console.log('Верстка семантическая+20');
console.log("для оформления СV используются css-стили +10");
console.log("контент размещается в блоке, который горизонтально центрируется на странице. Фоновый цвет, если он есть, тянется во всю ширину страницы +10");
console.log("вёрстка адаптивная: ни на одном из разрешений экрана до 320px включительно не появляется горизонтальная полоса прокрутки, при этом всё содержание страницы сохраняется +10");
console.log("есть адаптивное бургер-меню.+10 max-width 767px");
console.log("на странице СV присутствует изображение - фото или аватарка автора CV+10");
console.log("контакты для связи и перечень навыков оформлены в виде списка ul > li +10");
console.log("CV содержит контакты для связи, краткую информацию о себе, перечень навыков, информацию об образовании и уровне английского +10");
console.log("CV содержит пример вашего кода (например, решение задачи с сайта codewars) с подсветкой кода");
console.log("CV содержит изображения-ссылки на выполненные вами проекты.");
console.log("CV выполнено на английском языке +10");
console.log("выполнены требования к Pull Request +10");
console.log("дизайн, оформление, качество выполнения CV не ниже чем в примерах CV +10");
console.log("итого 150");
