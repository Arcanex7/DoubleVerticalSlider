const slidercontainer = document.querySelector('.slider-container');
const leftcontainer = document.querySelector('.left-container');
const rightcontainer = document.querySelector('.right-container');
const upbtn = document.querySelector('.up');
const downbtn = document.querySelector('.down');
const slidesLen = rightcontainer.querySelectorAll('div').length;

let activeIdx = 1;

leftcontainer.style.top = `-${(slidesLen - 1) * 100}vh`;

upbtn.addEventListener('click', () => changeSlide('up'));
downbtn.addEventListener('click', () => changeSlide('down'));

function changeSlide(direction) {
  const sliderHeight = slidercontainer.clientHeight;

  if (direction === 'up') {
    activeIdx++;
    if (activeIdx > slidesLen - 1) {
      activeIdx = 0;
    }
  } else if (direction === 'down') {
    activeIdx--;
    if (activeIdx < 0) {
      activeIdx = slidesLen - 1;
    }
  }

  rightcontainer.style.transform = `translateY(-${activeIdx * sliderHeight}px)`;
  leftcontainer.style.transform = `translateY(${activeIdx * sliderHeight}px)`;
}

