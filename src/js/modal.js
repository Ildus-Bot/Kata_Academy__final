let button_request = document.querySelector('.header__button-request');
let button_status = document.querySelector('.header__button-status');
let modal_request = document.querySelector('.modal-request');
let modal_status = document.querySelector('.modal-status');
let modal_request_button_close = document.querySelector('.modal-request__button-close');
let modal_status__button_close = document.querySelector('.modal-status__button-close');
let modal_request_middle = document.querySelector('.header__request');
let modal_status_middle = document.querySelector('.header__status');
let sidebar = document.querySelector('.menu');
let body = document.querySelector('.body');
let sidebar_background = document.querySelector('.menu__background');
const width = window.innerWidth;

button_request.addEventListener('click', function (evt) {
    evt.preventDefault()
    if (width >= 768) {
        sidebar_background.style.display = 'block';
        sidebar_background.style.opacity = "0.8";
    }
    modal_request.style.transform = 'translateX(0)';
    body.style.overflow = 'hidden';
    if (width < 1440) {
        sidebar.style.transform = 'translateX(-100vw)';
    }
});

button_status.addEventListener('click', function (evt) {
    evt.preventDefault()
    if (width >= 768) {
        sidebar_background.style.display = 'block';
        sidebar_background.style.opacity = "0.8";
    }
    modal_status.style.transform = 'translateX(0)';
    body.style.overflowY = 'visible';
    if (width < 1440) {
        sidebar.style.transform = 'translateX(-100vw)';
    }
});

modal_request_middle.addEventListener('click', function (evt) {
    evt.preventDefault()
    if (width >= 768) {
        sidebar_background.style.display = 'block';
        sidebar_background.style.opacity = "0.8";
    }
    modal_request.style.transform = 'translateX(0)';
    body.style.overflow = 'hidden';
    if (width < 1440) {
        sidebar.style.transform = 'translateX(-100vw)';
    }
});

modal_status_middle.addEventListener('click', function (evt) {
    evt.preventDefault()
    if (width >= 768) {
        sidebar_background.style.display = 'block';
        sidebar_background.style.opacity = "0.8";
    }
    modal_status.style.transform = 'translateX(0)';
    body.style.overflow = 'hidden';
    if (width < 1440) {
        sidebar.style.transform = 'translateX(-100vw)';
    }
});

modal_request_button_close.addEventListener('click', function () {
    sidebar_background.style.display = 'none';
    sidebar_background.style.opacity = "0";
    modal_request.style.transform = 'translateX(100vw)';
    body.style.overflowY = 'visible';
});

modal_status__button_close.addEventListener('click', function () {
    sidebar_background.style.display = 'none';
    sidebar_background.style.opacity = "0";
    modal_status.style.transform = 'translateX(100vw)';
    body.style.overflowY = 'visible';
});

sidebar_background.addEventListener('click', function () {
    modal_request.style.transform = 'translateX(100vw)';
    modal_status.style.transform = 'translateX(100vw)';
    if (width < 1440) {
        sidebar.style.transform = 'translateX(-100vw)';
    }
    body.style.overflowY = 'visible';
    sidebar_background.style.display = 'none';
    sidebar_background.style.opacity = "0";
});
