const menu = () => {
//2.3. Выпадающее Меню и Адаптация  --------------------------------------------------------------------------
  const menu = document.querySelector('.popup-menu')//общий блок
  const menuBlock = document.querySelector('.popup-dialog-menu')//модаьное окно
  const btnOpen = document.querySelector('.menu__icon')//кнопка меню которая открывает модальное окно
  const menuBtnClsoe = document.querySelector('.close-menu')//кнопка которая закрывает модальное окно
  const menuBtnClsoeLink = menuBlock.querySelectorAll('.menu-link')//кнопка которая закрывает модальное окно через элемент списка
  //адаптация 
  if (window.matchMedia("(min-width: 576px)").matches) {
      btnOpen.addEventListener("click", () => {
          if (menu.style.visibility = "hidden") {
              menu.style.visibility = "visible"
              menuBlock.style.transform = "translate3d(0px,0,0)"
          }
      });
      menuBtnClsoe.addEventListener("click", () => {
          if (menu.style.visibility = "visible") {
              menu.style.visibility = "hidden"
              menuBlock.style.transform = "translate3d(845px,0,0)"
          }
      });
      //закрывает меню через элемент списка
      menuBtnClsoeLink.forEach(btn => {
        btn.addEventListener('click', () => {
          if (menu.style.visibility = "visible") {
            menu.style.visibility = "hidden"
            menuBlock.style.transform = "translate3d(845px,0,0)"
        }
        })
      });
    } else { //открывает меню
      btnOpen.addEventListener("click", () => {
          if (menu.style.visibility = "hidden") {
              menu.style.visibility = "visible"
              menuBlock.style.transform = "translate3d(0px,0,0)"
          }
      });//закрывает меню
      menuBtnClsoe.addEventListener("click", () => {
          if (menu.style.visibility = "visible") {
              menu.style.visibility = "hidden"
              menuBlock.style.transform = "translate3d(0px, -150vh,0)"
          }
      });
      //закрывает меню через элемент списка
      menuBtnClsoeLink.forEach(btn => {
        btn.addEventListener('click', () => {
          if (menu.style.visibility = "visible") {
            menu.style.visibility = "hidden"
            menuBlock.style.transform = "translate3d(845px,0,0)"
        }
        })
      });
    }

}
export default menu