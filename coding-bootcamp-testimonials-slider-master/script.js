const nexts = document.querySelectorAll('#next-btn');
const prevs = document.querySelectorAll('#prev-btn');
const slides = document.querySelectorAll('.main__container__slide');


function slideRight() {
  slides.forEach(slide => slide.style.transform = 'translateX(-100%)')
}

function slideLeft() {
  slides.forEach(slide => slide.style.transform = 'translateX(0)')
}
prevs.forEach(prev => prev.addEventListener('click', slideLeft))
nexts.forEach(next => next.addEventListener('click', slideRight))
