const modal = () => {
  const body = document.querySelector('body')
  const modalTransparency = document.querySelector('.popup-transparency')
  const modalMenu = document.querySelector('.popup-menu')
  const modalPrivacy = document.querySelector('.popup-privacy')
  const modalConsultation = document.querySelector('.popup-consultation')
  const modalRepair = document.querySelector('.popup-repair-types')
  const closeBtn = body.querySelectorAll('.close')

  //
  const modalOpen = (elem) => {
    elem.style.visibility = 'visible'
  }
  const modalClose = (elem) => {
    elem.style.visibility = ''
  }

  body.addEventListener('click', (e) => {
    if (e.target.closest('.transparency-item')) {
      modalOpen(modalTransparency)
    } else if (e.target.closest('.menu')) {
      modalOpen(modalMenu)
    } else if (e.target.closest('.link-privacy')) {
      modalOpen(modalPrivacy)
    } else if (e.target.closest('.consultation-btn')) {
      modalOpen(modalConsultation)
    } else if (e.target.closest('.link-Repair')) {
      modalOpen(modalRepair)
    } 
  })

  closeBtn.forEach(btn => {
    btn.addEventListener('click', () => {
      modalMenu.style.display = 'none'
    })
  })


}

export default modal