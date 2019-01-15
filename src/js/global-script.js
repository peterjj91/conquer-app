$( document ).ready(function() {

    $('.rating .star').hover(function() {
        $(this).addClass('to_rate');
        $(this).parent().find('.star:lt(' + $(this).index() + ')').addClass('to_rate');
        $(this).parent().find('.star:gt(' + $(this).index() + ')').addClass('no_to_rate');
    }).mouseout(function() {
        $(this).parent().find('.star').removeClass('to_rate');
        $(this).parent().find('.star:gt(' + $(this).index() + ')').removeClass('no_to_rate');
    }).click(function() {
        $(this).removeClass('to_rate').addClass('rated');
        $(this).parent().find('.star:lt(' + $(this).index() + ')').removeClass('to_rate').addClass('rated');
        $(this).parent().find('.star:gt(' + $(this).index() + ')').removeClass('no_to_rate').removeClass('rated');
        /*Save your rate*/
        /*TODO*/
    });

});

$(document).ready(function() {
    $('select').selectpicker();
});

//
$(document).ready(function() {
    $('.slider-card__for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        // fade: true,
        accessibility: false,
        verticalScrolling: true,
        infinite: false,
        swipeToSlide: true,
        asNavFor: '.slider-card__nav',
        responsive: [
            {
                breakpoint: 700,
                settings: {
                    adaptiveHeight: true
                }
            }
        ]
    });

    $('.slider-card__nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider-card__for',
        accessibility: false,
        dots: false,
        arrows: true,
        centerMode: false,
        focusOnSelect: false,
        infinite: false,
        vertical: true,
        responsive: [
            {
                breakpoint: 1050,
                settings: {
                    vertical: false,
                    slidesToShow: 6
                }
            },
            {
                breakpoint: 700,
                settings: {
                    vertical: false
                }
            }
        ]
    });

    $('.slider-card__nav .slick-slide').hover(function (event) {
        $('.slider-card__for').slick('slickGoTo', $(this).data('slickIndex'));
        $('.slider-card__nav .slick-slide').removeClass('slick-current');
        $(this).addClass('slick-current');
    });

    $(".slider-card__for").mousewheel(function(e) {
        e.preventDefault();
        if (e.originalEvent.deltaY < 0) {
            $(this).slick('slickNext');
        } else {
            $(this).slick('slickPrev');
        }
    });
    $(".slider-card__nav").mousewheel(function(e) {
        e.preventDefault();
        if (e.originalEvent.deltaY < 0) {
            $(this).slick('slickNext');
        } else {
            $(this).slick('slickPrev');
        }
    });
});