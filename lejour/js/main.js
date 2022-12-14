window.addEventListener('DOMContentLoaded', () => {

    const main_slider = new Swiper('.main_slider', {
        loop: true,
        speed: 3500, //넘어가는 속도, autoplay에 넣었다가 안 먹혔었음.
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            // el: ".swiper-pagination",
            clickable: false,
        },
    })


    var swiper = new Swiper(".mySwiper", {
        loop: true,
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
    });
    var swiper2 = new Swiper(".mySwiper2", {
        loop: true,
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        thumbs: {
            swiper: swiper,
        },
    });
})

$(function () {
    $('.sele_tab>li>a').on('click', function (e) {
        e.preventDefault();
        //console.log($(this).parent().index());
        var idx = $(this).parent().index();
        $('.sele_content>li').removeClass('on');
        $('.sele_content>li').eq(idx).addClass('on');
        $('.sele_tab>li').removeClass('on');
        $(this).parent().addClass('on');
    });

    $('.sele_slider').slick({
        slidesToShow: 5,
        dots: false,
        arrows: false,
        // centerMode: true,
    })



    $('.sele_content .sele_arrows i:nth-child(1)').on('click', function () {
        $('.sele_slider').slick('slickPrev')
    });
    $('.sele_content .sele_arrows i:nth-child(2)').on('click', function () {
        $('.sele_slider').slick('slickNext')
    });
})

