let position = 0;
const slidesToShow = 4;
const slidesToScroll = 2;
const container = document.querySelector('.slider-container');
const track = document.querySelector('.slider-track');
const items = document.querySelectorAll('.slider-item');
const itemsCount = items.length;
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');
const itemWidth = container.clientWidth / slidesToShow;
const movePosition = slidesToScroll * itemWidth;

//Set width for each items in carousel
items.forEach((item) => {
    item.style.minWidth = `${itemWidth}px`;
});

//Set scrolling function for buttons
btnPrev.addEventListener('click', () => {
    const itemLeft = Math.abs(position) / itemWidth;
    position += itemLeft >= slidesToScroll ? movePosition : itemLeft * itemWidth;
    setPosition();
    checkBtn();
});
btnNext.addEventListener('click', () => {
    const itemLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
    position -= itemLeft >= slidesToScroll ? movePosition : itemLeft * itemWidth;
    setPosition();
    checkBtn();
});

//Initialise functions
const setPosition = () => {
    track.style.transform = `translateX(${position}px)`;
};

const checkBtn = () => {
    btnPrev.disabled = position === 0;
    btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
};


checkBtn();
