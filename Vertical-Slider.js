
// Vertical slider

let sliderBox = document.querySelector('.slider-box');
let slideLeft = document.querySelector('.left-slide');
let slideRight = document.querySelector('.right-slide');
let upBtn = document.querySelector('.up-btn');
let downBtn = document.querySelector('.down-btn');
let slidesLength = slideRight.querySelectorAll('div').length;

let activeSlideIndex = 0;

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

let changeSlide = (direction) => {
    let sliderHeight = sliderBox.clientHeight;
    if(direction === 'up'){
        activeSlideIndex++;
        if(activeSlideIndex > slidesLength - 1){
            activeSlideIndex = 0;
        }
    }
    else if(direction === 'down'){
        activeSlideIndex--;
        if(activeSlideIndex < 0){
            activeSlideIndex = slidesLength - 1;
        }
    }
    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`;
}

upBtn.addEventListener('click', () => changeSlide('up'));
downBtn.addEventListener('click', () => changeSlide('down'));


// Random generator

const generate = document.querySelector('.generate');

let randomChange = (random) => {
    let sliderHeight = sliderBox.clientHeight;
    if(random === 1 || random === 2 || random === 3){
        activeSlideIndex++;
        if(activeSlideIndex > slidesLength - 1){
            activeSlideIndex = 0;
        }
    }
    else if(random === 4 || random === 5 || random === 6){
        if(activeSlideIndex > slidesLength - 1){
            activeSlideIndex = 0;
        }
    }
    else if (random === 7 || random === 8 || random === 9){
        activeSlideIndex--;
        if(activeSlideIndex < 0){
            activeSlideIndex = slidesLength - 1;
        }
    }
        slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`;
    }
    
    generate.addEventListener('click', () => randomChange(Math.floor((Math.random()*9)+1)));


// Modal pop outs

const open1 = document.querySelector('.info1');
const close1 = document.querySelector('.infoclose1');
const popoutContainer1 = document.querySelector('.modal-container1');

open1.addEventListener('click', () => {
    popoutContainer1.classList.add('show');
});

close1.addEventListener('click', () => {
    popoutContainer1.classList.remove('show');
});

const open2 = document.querySelector('.info2');
const close2 = document.querySelector('.infoclose2');
const popoutContainer2 = document.querySelector('.modal-container2');

open2.addEventListener('click', () => {
    popoutContainer2.classList.add('show');
});

close2.addEventListener('click', () => {
    popoutContainer2.classList.remove('show');
});

const open3 = document.querySelector('.info3');
const close3 = document.querySelector('.infoclose3');
const popoutContainer3 = document.querySelector('.modal-container3');

open3.addEventListener('click', () => {
    popoutContainer3.classList.add('show');
});

close3.addEventListener('click', () => {
    popoutContainer3.classList.remove('show');
});


