
// navbar
let lastScrollTop = 0;
const navbar = document.querySelector('#mainNavbar');

window.addEventListener('scroll', function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // เลื่อนลง — ซ่อน navbar
        navbar.classList.add('hide-navbar');
    } else {
        // เลื่อนขึ้น — แสดง navbar
        navbar.classList.remove('hide-navbar');
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// libary AOS
AOS.init();

// swiper
const swiper = new Swiper('.mySwiper', {
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    speed: 1000,
    slidesPerView: 1,
    spaceBetween: 20,
    freeMode: true,
    breakpoints: {
        1024: {
            slidesPerView: 2,
        },
        1025: {
            slidesPerView: 3,
        },
    }
});