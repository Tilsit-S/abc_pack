$(document).ready(function(){
    $('.packing__tabs-wrapper').slick({
        infinite: false,
        arrows: false,
        dots: false,
        variableWidth: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    //slidesToShow: 3,
                },
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    }
    );
});