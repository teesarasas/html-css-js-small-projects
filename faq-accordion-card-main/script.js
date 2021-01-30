const faqs = document.querySelectorAll('.faq-divider')


faqs.forEach(faq => {
  faq.addEventListener('click', () => {
    faq.classList.toggle('active')
  })
})