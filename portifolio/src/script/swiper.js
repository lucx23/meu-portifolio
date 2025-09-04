document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.swiper', {
        loop: true,
        direction: 'horizontal',
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        keyboard: {
            enabled: true,
        },
        speed: 700,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    });
});