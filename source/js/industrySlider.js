$(document).ready(function(){
    $('.industry-slider').slick({
        infinite: false,
        arrows: true,
        dots: true,
        variableWidth: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1530,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });
  });