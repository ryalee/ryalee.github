var swiper = new Swiper('.swiper', {
    cssMode: true,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
    },
    keyboard: true,
});


// let slideIndex = 0;
// showSlides(slideIndex);

// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }

// function showSlides(n) {
//     let slides = document.getElementsByClassName("slide");
//     if (n >= slides.length) {
//         slideIndex = 0;
//     }
//     if (n < 0) {
//         slideIndex = slides.length - 1;
//     }
//     for (let i = 0; i < slides.length; i++) {
//         slides[i].classList.remove('active');
//     }
//     slides[slideIndex].classList.add('active');
// }