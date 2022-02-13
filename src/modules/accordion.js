const accordion = () => {
//19. Аккардион 
  const accordeon = document.querySelector('.accordion')
  const titles = document.querySelectorAll('.title_block')

  accordeon.addEventListener('click', even => {
    const target = even.target

    titles.forEach(accord => {
      if (accord === target && !accord.classList.contains('msg-active')) {
        accord.classList.add('msg-active')
      } else {
        accord.classList.remove('msg-active')
      }
    })
  })
}

export default accordion