const clue = () => {
//9. При наведении мышкой на кружки с цифрами появляется подсказка

//появление подсказки
const links = document.querySelectorAll('.formula-item')  
for (let i = 0; i < links.length; i++) {
  links[i].onmouseover = function() {
    const tooltip = document.querySelectorAll('.formula-item-popup')
    const too = tooltip[i]
    too.style.opacity = '1'
    too.style.visibility = 'visible'
  }


  links[i].onmouseout = function() {
    const tooltip = document.querySelectorAll('.formula-item-popup')
    const too = tooltip[i]
    too.style.opacity = '0'
    too.style.visibility = 'hidden'
  }
}

//меняет цвет
const linksColor = document.querySelectorAll('.formula-item__icon-inner-text')
for (let с = 0; с < linksColor.length; с++) {
  linksColor[с].onmouseover = function() {
    const circle = document.querySelectorAll('.formula-item__icon-inner')
    const too2 = circle[с]
    too2.style.opacity = '1'
    too2.style.visibility = 'visible'
  }


  linksColor[с].onmouseout = function() {
    const circle = document.querySelectorAll('.formula-item__icon-inner')
    const too2 = circle[с]
    too2.style.opacity = '0'
    too2.style.visibility = 'hidden'
  }
}



}
export default clue