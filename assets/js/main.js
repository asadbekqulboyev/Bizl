$(document).ready(function () {
    $('.child_menu a').click(function (e) { 
    e.preventDefault();
    $(this).next('.submenu').slideToggle();
    });
    var swiper = new Swiper('.testimonial_slider', {
        loop: false,
        autoHeight: true,
    });

    $('.avatar').click(function() {
        var index = $(this).data('index');
        swiper.slideTo(index);
        $('.avatar').removeClass('active');
        $(this).addClass('active');
    });
    swiper.on('slideChange', function () {
        var activeIndex = swiper.activeIndex;
        $('.avatar').removeClass('active');
        $('.avatar[data-index="' + activeIndex + '"]').addClass('active');
    });
})