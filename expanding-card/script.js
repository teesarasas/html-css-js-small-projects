const panels = document.querySelectorAll('.panel')

const removeActiveClass = () => {
  panels.forEach((panel, index) => {
    panel.classList.remove('active')
  })
}

panels.forEach(panel => {
  panel.addEventListener('click', () => {
    removeActiveClass()
    panel.classList.add('active')
  })
})