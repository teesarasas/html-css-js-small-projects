const shareBtn = document.querySelector('.container__footer__btn')
const social = document.querySelector('.container__social')

shareBtn.addEventListener('click', () => {
  social.classList.toggle('active')
  shareBtn.classList.toggle('dark')
})

