const modal = () => {
//5. Полный список услуг и цен--------------------------------------------------------------------------------
  const modal = document.querySelector('.popup-repair-types')//блок с модальным окном 
  const buttons = document.querySelectorAll('.link-list-repair')//кнопка открывающая модальное окно
  const closeBtn = modal.querySelector('.close')//крестик закрывающий модальное окно

  const buttonAction = () =>{
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none'
    })
  }
  //открывает модальное окно
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      modal.style.display = 'flex'
    })
  })
  //закрывает модальное окно
  buttonAction()



//8. Политика конфедициальности--------------------------------------------------------------------------------
  const modalPrivacy = document.querySelector('.popup-privacy')//блок с модальным окном 
  const buttonsPrivacy = document.querySelectorAll('.link-privacy')//кнопка открывающая модальное окно
  const closeBtnPrivacy = modalPrivacy.querySelector('.close')//крестик закрывающий модальное окно

  //открывает модальное окно
  buttonsPrivacy.forEach(btn => {
    btn.addEventListener('click', () => {
      modalPrivacy.style.display = 'flex'
    })
  })
  //закрывает модальное окно
  closeBtnPrivacy.addEventListener('click', () => {
    modalPrivacy.style.display = 'none'
  })


  
  //17. Проконсультироваться--------------------------------------------------------------------------------
  const modalConsultation = document.querySelector('.popup-consultation')//блок с модальным окном 
  const buttonsConsultation = document.querySelectorAll('.button_wide')//кнопка открывающая модальное окно
  const closeBtnConsultation = modalConsultation.querySelector('.close')//крестик закрывающий модальное окно

  //открывает модальное окно
  buttonsConsultation.forEach(btn => {
    btn.addEventListener('click', () => {
      modalConsultation.style.display = 'flex'
    })
  })
  //закрывает модальное окно
  closeBtnConsultation.addEventListener('click', () => {
    modalConsultation.style.display = 'none'
  })
}

export default modal