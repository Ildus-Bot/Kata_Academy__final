import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
// import Swiper and modules styles


let slideHidden = function (visible) {
  for (let i = 0; i < slide.length; i++) {

      if (i >= visible) {
        console.log(i);
        slide[i].classList.add('hidden');
      }
      buttonOpen.textContent = "Показать все";
      buttonContainer.style.transform = 'translateY(0px)';
      buttonIcon.style.transform = 'scaleY(1)';
  }
}

let slideVisible = function () {
  for (let i = 0; i < slide.length; i++) {
    if (slide[i].classList.contains("hidden")) {
      slide[i].classList.remove('hidden');
    }
    buttonOpen.textContent = "Скрыть";
    buttonContainer.style.transform = 'translateY(10px)';
    buttonIcon.style.transform = 'scaleY(-1)';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const width = window.innerWidth;

  if (width < 768){
    const slider = new Swiper('.swiper-one-container', {

      modules: [Pagination],
      slidesPerView: 'auto',
      spaceBetween: 16,
      pagination: {
        el: '.swiper-one-pagination',
        clickable: true
      },

      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1.5,
          spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 2.5,
          spaceBetween: 40
        }
      }
    });
  }
})

let width = window.innerWidth;
let slide = document.querySelectorAll('.swiper-one');
let buttonOpen = document.querySelector('.swiper-one-button-show');
let buttonContainer = document.querySelector('.swiper-one-button-container');
let buttonIcon = document.querySelector('.swiper-one-button-icon');

if (width < 1440 && width >= 720) {
  slideHidden(6);  
}
else if (width >= 1440){
  slideHidden(8);
}
else {
  buttonOpen.style.display = "none";
}

buttonOpen.addEventListener('click', function () {

  if (width < 1440){
    if ((buttonOpen.innerText).length === 6) {
      slideHidden(6);  
    }
    else if ((buttonOpen.innerText).length === 12) {
      slideVisible();
    }
  } else {
    if ((buttonOpen.innerText).length === 6) {
      slideHidden(8);  
    }
    else if ((buttonOpen.innerText).length === 12) {
      slideVisible();
    }
  }
}); 


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


let slideHidden_two = function (visible) {
  for (let i = 0; i < slide_two.length; i++) {

      if (i >= visible) {
        console.log(i);
        slide_two[i].classList.add('hidden');
      }
      buttonOpen_two.textContent = "Показать все";
      buttonContainer_two.style.transform = 'translateY(0px)';
      buttonIcon_two.style.transform = 'scaleY(1)';
  }
}

let slideVisible_two = function () {
  for (let i = 0; i < slide_two.length; i++) {
    if (slide_two[i].classList.contains("hidden")) {
      slide_two[i].classList.remove('hidden');
    }
    buttonOpen_two.textContent = "Скрыть";
    buttonContainer_two.style.transform = 'translateY(10px)';
    buttonIcon_two.style.transform = 'scaleY(-1)';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const width_two = window.innerWidth;

  if (width_two < 768){
    const slider_two = new Swiper('.swiper-two-container', {

      modules: [Pagination],
      slidesPerView: 'auto',
      spaceBetween: 16,
      pagination: {
        el: '.swiper-two-pagination',
        clickable: true
      },

      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1.4,
          spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 2.1,
          spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 2.8,
          spaceBetween: 40
        }
      }
    });
  }
})

let width_two = window.innerWidth;
let slide_two = document.querySelectorAll('.swiper-two');
let buttonOpen_two = document.querySelector('.swiper-two-button-show');
let buttonContainer_two = document.querySelector('.swiper-two-button-container');
let buttonIcon_two = document.querySelector('.swiper-two-button-icon');

if (width_two < 1440 && width_two >= 720) {
  slideHidden_two(3);  
}
else if (width_two >= 1440){
  slideHidden_two(4);
}
else {
  buttonOpen_two.style.display = "none";
}

buttonOpen_two.addEventListener('click', function () {

  if (width_two < 1440){
    if ((buttonOpen_two.innerText).length === 6) {
      slideHidden_two(3);  
    }
    else if ((buttonOpen_two.innerText).length === 12) {
      slideVisible_two();
    }
  } else {
    if ((buttonOpen_two.innerText).length === 6) {
      slideHidden_two(4);  
    }
    else if ((buttonOpen_two.innerText).length === 12) {
      slideVisible_two();
    }
  }
}); 

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

document.addEventListener('DOMContentLoaded', () => {
  const width = window.innerWidth;

  if (width < 768){
    const slider = new Swiper('.swiper-three-container', {

      modules: [Pagination],
      slidesPerView: 'auto',
      spaceBetween: 16,
      pagination: {
        el: '.swiper-three-pagination',
        clickable: true
      },

      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1.2,
          spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 1.8,
          spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 2.4,
          spaceBetween: 40
        }
      }
    });
  }
})