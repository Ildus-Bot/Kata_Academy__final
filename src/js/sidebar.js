let body = document.querySelector('.body');
let main_content = document.querySelector('.main-content');
let sidebar = document.querySelector('.menu');
let burger_button_close = document.querySelector('.menu__header-button-close');
let burger_button_open = document.querySelector('.header__button-burger');
let sidebar_background = document.querySelector('.menu__background');

document.addEventListener('DOMContentLoaded', () => {
    const width = window.innerWidth;
    if (width >= 1440) {
        body.style.maxWidth  = "1440px";
        main_content.style.width = "1120px";
    }
})

burger_button_open.addEventListener('click', function () {
    sidebar.style.transform = 'translateX(0)';
    body.style.overflowY = 'hidden';
    sidebar_background.style.display = 'block';
    sidebar_background.style.opacity = "0.8";
});

burger_button_close.addEventListener('click', function () {
    sidebar.style.transform = 'translateX(-100vw)';
    body.style.overflowY = 'visible';
    sidebar_background.style.display = 'none';
    sidebar_background.style.opacity = "0";
});

sidebar_background.addEventListener('click', function () {
    if (width < 1440) {
        sidebar.style.transform = 'translateX(-100vw)';
    }
    body.style.overflowY = 'visible';
    sidebar_background.style.display = 'none';
    sidebar_background.style.opacity = "0";
});
