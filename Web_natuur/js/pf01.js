$(function () {

    $('.main_control:nth-child(1)').on('click', function () {
        $('.main_slide').slick('slickPrev')
    });
    $('.main_control:nth-child(2)').on('click', function () {
        $('.main_slide').slick('slickNext')
    });


    $('.main_slide').slick({
        arrows: false,
        dots: false,
        autoplay: false,
        pauseOnHover: true,
        autoplaySpeed: 400,
    });


})

