const sliderFormula = () => {
  //10. Формула успешности слайдер в мобильной версии

  //formula-slider-wrap - весь блок с слайдерами и стрелками

  //formula-slider - все слайдеры в блоке
  //formula-slider__slide - один слайдер
  //formula-slider__slide-active - активный слайдер

  //formula-arrow_left - id стрелки левая
  //formula-arrow_right - id стрелки правой
  const sliderBlock = document.querySelector('.formula-slider-wrap') //весь блок слайдера со стрелками
  const slides = sliderBlock.querySelectorAll('.formula-slider__slide') //просто отдельный слайдер
  let currentSlide = 0
  const prevSlide = (elems, index, strClass) =>{
      elems[index].classList.remove(strClass)
     }
     //функция назад
   const nextSlide = (elems, index, strClass) =>{
      elems[index].classList.add(strClass)
    }


  if (window.matchMedia("(min-width: 1024px)").matches) {
    

    sliderBlock.addEventListener('click', (e) => {
      prevSlide(slides, currentSlide, 'formula-slider__slide-active')
  
      if (e.target.matches('#formula-arrow_right')) {
        currentSlide++ 
      } else if (e.target.matches('#formula-arrow_left')) {
        currentSlide--
      }
  
      //проверка не вышел ли за рамки доступной длинны массива, если да то приравниваем к 0
      if (currentSlide >= slides.length) {
        currentSlide = 0
      }
  
      if (currentSlide < 0) {
        currentSlide = slides.length - 1
      }
  
      nextSlide(slides, currentSlide, 'formula-slider__slide-active')
    })
   }

   

}
export default sliderFormula