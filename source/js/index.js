let offset = 0;
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.reviews__button_next').addEventListener('click', function(){
    offset = offset + 844;
    if (offset > 1688) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('.reviews__button_prev').addEventListener('click', function () {
    offset = offset - 844;
    if (offset < 0) {
        offset = 1688;
    }
    sliderLine.style.left = -offset + 'px';
});