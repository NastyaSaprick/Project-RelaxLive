const sliders = () => {
   //18. Отзывы 
   //reviews-slider-wrap - весь блок слайдера со стрелками
   //reviews-slider - блок со слайдерами
   //reviews-slider__slide - просто отдельный слайдер
   //reviews-slider__slide-active - активный слайдер

   //стрелки:
   //reviews-arrow_right - id правой стрелки
   //reviews-arrow_left - id левой стрелки

   const sliderBlock = document.querySelector('.reviews-slider-wrap') //весь блок слайдера со стрелками
   const slides = document.querySelectorAll('.reviews-slider__slide') //просто отдельный слайдер

   //счетчик с изначальным значением 0 (первый активный слайд будет с индексем 0)
   let currentSlide = 0

   //фуекция вперед
   const prevSlide = (elems, index, strClass) =>{
    elems[index].classList.remove(strClass)
   }
   //функция назад
   const nextSlide = (elems, index, strClass) =>{
    elems[index].classList.add(strClass)
  }

   //функция автослайд
  //  const autoSlider = () => {
  //    //удалить класс активности
  //    prevSlide(slides, currentSlide, 'reviews-slider__slide-active')

  //   //увеличить на 1
  //   currentSlide++ 

  //   //проверка не вышел ли за рамки доступной длинны массива, если да то приравниваем к 0
  //   if (currentSlide >= slides.length) {
  //     currentSlide = 0
  //   }

  //   //добавить класс активности
  //   nextSlide(slides, currentSlide, 'reviews-slider__slide-active')
  //  }

   //функция старта
  //  const startSlider = () => {
  //    //запуск функции autoSlider в интервале 2с
  //   //  setInterval(autoSlider, 2000)
  // }

   //функция стоп
  //  const stopSlider = () => {

  // }

  //стрелки
  sliderBlock.addEventListener('click', (e) => {
    prevSlide(slides, currentSlide, 'reviews-slider__slide-active')

    if (e.target.matches('#reviews-arrow_right')) {
      currentSlide++ 
    } else if (e.target.matches('#reviews-arrow_left')) {
      currentSlide--
    }

    //проверка не вышел ли за рамки доступной длинны массива, если да то приравниваем к 0
    if (currentSlide >= slides.length) {
      currentSlide = 0
    }

    if (currentSlide < 0) {
      currentSlide = slides.length - 1
    }

    nextSlide(slides, currentSlide, 'reviews-slider__slide-active')
  })
  // startSlider() //вызов функции startSlider
}
export default sliders