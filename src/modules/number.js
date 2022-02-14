const number = () => {
  //1.При клике на стрелочку открывается второй номер телефона 
  //header-contacts__phone-number - номер
  //header-contacts__arrow - стрелка
  let arrowBtn = document.querySelector('.header-contacts__arrow')//кнопка стрелки
  let phoneContent = document.querySelector('.header-contacts__phone-number-accord .header-contacts__phone-number')//номер
  let arrowImg = document.querySelector('.header-contacts__arrow img')//картинка стрелки

  phoneContent.style.opacity = "0"

  arrowBtn.addEventListener("click", () => {
    if (phoneContent.style.opacity === '0') {

      phoneContent.style.opacity = "1"
      phoneContent.style.marginTop = "30px"
      arrowImg.style.transform = "rotate(180deg)"

    } else if (phoneContent.style.opacity = '1') {

        phoneContent.style.opacity = "0"
        phoneContent.style.marginTop = "0px"
        arrowImg.style.transform = "rotate(0deg)"
    }
  });
}
export default number