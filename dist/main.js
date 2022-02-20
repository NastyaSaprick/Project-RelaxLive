/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_sliders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/sliders */ \"./src/modules/sliders.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modal */ \"./src/modules/modal.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n/* harmony import */ var _modules_accordion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/accordion */ \"./src/modules/accordion.js\");\n/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/scroll */ \"./src/modules/scroll.js\");\n/* harmony import */ var _modules_mask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/mask */ \"./src/modules/mask.js\");\n/* harmony import */ var _modules_clue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/clue */ \"./src/modules/clue.js\");\n/* harmony import */ var _modules_number__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/number */ \"./src/modules/number.js\");\n/* harmony import */ var _modules_sliderFormula__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/sliderFormula */ \"./src/modules/sliderFormula.js\");\n//18\r\n//5,8,17\r\n//2,3\r\n//19\r\n//4\r\n//6\r\n//9\r\n//1\r\n//10\r\n\r\n\r\n\r\n(0,_modules_sliders__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n;(0,_modules_modal__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n;(0,_modules_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n;(0,_modules_accordion__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\r\n;(0,_modules_scroll__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\r\n;(0,_modules_mask__WEBPACK_IMPORTED_MODULE_5__[\"default\"])()\r\n;(0,_modules_clue__WEBPACK_IMPORTED_MODULE_6__[\"default\"])()\r\n;(0,_modules_number__WEBPACK_IMPORTED_MODULE_7__[\"default\"])()\r\n;(0,_modules_sliderFormula__WEBPACK_IMPORTED_MODULE_8__[\"default\"])()\r\n//npm run watch\n\n//# sourceURL=webpack://relaxlive/./src/index.js?");

/***/ }),

/***/ "./src/modules/accordion.js":
/*!**********************************!*\
  !*** ./src/modules/accordion.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst accordion = () => {\r\n//19. Аккардион \r\n  const accordeon = document.querySelector('.accordion')\r\n  const titles = document.querySelectorAll('.title_block')\r\n\r\n  accordeon.addEventListener('click', even => {\r\n    const target = even.target\r\n\r\n    titles.forEach(accord => {\r\n      if (accord === target && !accord.classList.contains('msg-active')) {\r\n        accord.classList.add('msg-active')\r\n      } else {\r\n        accord.classList.remove('msg-active')\r\n      }\r\n    })\r\n  })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (accordion);\n\n//# sourceURL=webpack://relaxlive/./src/modules/accordion.js?");

/***/ }),

/***/ "./src/modules/clue.js":
/*!*****************************!*\
  !*** ./src/modules/clue.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst clue = () => {\r\n//9. При наведении мышкой на кружки с цифрами появляется подсказка\r\n\r\n//появление подсказки\r\nconst links = document.querySelectorAll('.formula-item')  \r\nfor (let i = 0; i < links.length; i++) {\r\n  links[i].onmouseover = function() {\r\n    const tooltip = document.querySelectorAll('.formula-item-popup')\r\n    const too = tooltip[i]\r\n    too.style.opacity = '1'\r\n    too.style.visibility = 'visible'\r\n  }\r\n\r\n\r\n  links[i].onmouseout = function() {\r\n    const tooltip = document.querySelectorAll('.formula-item-popup')\r\n    const too = tooltip[i]\r\n    too.style.opacity = '0'\r\n    too.style.visibility = 'hidden'\r\n  }\r\n}\r\n\r\n//меняет цвет\r\nconst linksColor = document.querySelectorAll('.formula-item__icon-inner-text')\r\nfor (let с = 0; с < linksColor.length; с++) {\r\n  linksColor[с].onmouseover = function() {\r\n    const circle = document.querySelectorAll('.formula-item__icon-inner')\r\n    const too2 = circle[с]\r\n    too2.style.opacity = '1'\r\n    too2.style.visibility = 'visible'\r\n  }\r\n\r\n\r\n  linksColor[с].onmouseout = function() {\r\n    const circle = document.querySelectorAll('.formula-item__icon-inner')\r\n    const too2 = circle[с]\r\n    too2.style.opacity = '0'\r\n    too2.style.visibility = 'hidden'\r\n  }\r\n}\r\n\r\n\r\n\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clue);\n\n//# sourceURL=webpack://relaxlive/./src/modules/clue.js?");

/***/ }),

/***/ "./src/modules/mask.js":
/*!*****************************!*\
  !*** ./src/modules/mask.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst mask = () => {\r\n//6. Во всех полях, где необходимо ввести номер телефона, нужно реализовать маску \r\n//+7 (ddd) ddd-dd-dd и запрет ввода любых символов, кроме цифр\r\n\r\nconst inputTel = document.querySelectorAll('input')\r\n\r\nfunction maskPhone(selector, masked = '+7 (___) ___-__-__') {\r\n\tconst elems = document.querySelectorAll(selector);\r\n\r\n\tfunction mask(event) {\r\n\t\tconst keyCode = event.keyCode;\r\n\t\tconst template = masked,\r\n\t\t\tdef = template.replace(/\\D/g, \"\"),\r\n\t\t\tval = this.value.replace(/\\D/g, \"\");\r\n\t\tlet i = 0,\r\n\t\t\tnewValue = template.replace(/[_\\d]/g, function (a) {\r\n\t\t\t\treturn i < val.length ? val.charAt(i++) || def.charAt(i) : a;\r\n\t\t\t});\r\n\t\ti = newValue.indexOf(\"_\");\r\n\t\tif (i !== -1) {\r\n\t\t\tnewValue = newValue.slice(0, i);\r\n\t\t}\r\n\t\tlet reg = template.substr(0, this.value.length).replace(/_+/g,\r\n\t\t\tfunction (a) {\r\n\t\t\t\treturn \"\\\\d{1,\" + a.length + \"}\";\r\n\t\t\t}).replace(/[+()]/g, \"\\\\$&\");\r\n\t\treg = new RegExp(\"^\" + reg + \"$\");\r\n\t\tif (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {\r\n\t\t\tthis.value = newValue;\r\n\t\t}\r\n\t\tif (event.type === \"blur\" && this.value.length < 5) {\r\n\t\t\tthis.value = \"\";\r\n\t\t}\r\n\r\n\t}\r\n\r\n\tfor (const elem of elems) {\r\n\t\telem.addEventListener(\"input\", mask);\r\n\t\telem.addEventListener(\"focus\", mask);\r\n\t\telem.addEventListener(\"blur\", mask);\r\n\t}\r\n\t\r\n}\r\n\r\n for (let tel of inputTel) {\r\n   if (tel.name === 'phone') {\r\n     maskPhone('#' + tel.id);\r\n   }\r\n }\r\n\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mask);\n\n//# sourceURL=webpack://relaxlive/./src/modules/mask.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n//2.3. Выпадающее Меню и Адаптация  --------------------------------------------------------------------------\r\n  const menu = document.querySelector('.popup-menu')//общий блок\r\n  const menuBlock = document.querySelector('.popup-dialog-menu')//модаьное окно\r\n  const btnOpen = document.querySelector('.menu__icon')//кнопка меню которая открывает модальное окно\r\n  const menuBtnClsoe = document.querySelector('.close-menu')//кнопка которая закрывает модальное окно\r\n  const menuBtnClsoeLink = menuBlock.querySelectorAll('.menu-link')//кнопка которая закрывает модальное окно через элемент списка\r\n  //адаптация \r\n  if (window.matchMedia(\"(min-width: 576px)\").matches) {\r\n      btnOpen.addEventListener(\"click\", () => {\r\n          if (menu.style.visibility = \"hidden\") {\r\n              menu.style.visibility = \"visible\"\r\n              menuBlock.style.transform = \"translate3d(0px,0,0)\"\r\n          }\r\n      });\r\n      menuBtnClsoe.addEventListener(\"click\", () => {\r\n          if (menu.style.visibility = \"visible\") {\r\n              menu.style.visibility = \"hidden\"\r\n              menuBlock.style.transform = \"translate3d(845px,0,0)\"\r\n          }\r\n      });\r\n      //закрывает меню через элемент списка\r\n      menuBtnClsoeLink.forEach(btn => {\r\n        btn.addEventListener('click', () => {\r\n          if (menu.style.visibility = \"visible\") {\r\n            menu.style.visibility = \"hidden\"\r\n            menuBlock.style.transform = \"translate3d(845px,0,0)\"\r\n        }\r\n        })\r\n      });\r\n    } else { //открывает меню\r\n      btnOpen.addEventListener(\"click\", () => {\r\n          if (menu.style.visibility = \"hidden\") {\r\n              menu.style.visibility = \"visible\"\r\n              menuBlock.style.transform = \"translate3d(0px,0,0)\"\r\n          }\r\n      });//закрывает меню\r\n      menuBtnClsoe.addEventListener(\"click\", () => {\r\n          if (menu.style.visibility = \"visible\") {\r\n              menu.style.visibility = \"hidden\"\r\n              menuBlock.style.transform = \"translate3d(0px, -150vh,0)\"\r\n          }\r\n      });\r\n      //закрывает меню через элемент списка\r\n      menuBtnClsoeLink.forEach(btn => {\r\n        btn.addEventListener('click', () => {\r\n          if (menu.style.visibility = \"visible\") {\r\n            menu.style.visibility = \"hidden\"\r\n            menuBlock.style.transform = \"translate3d(845px,0,0)\"\r\n        }\r\n        })\r\n      });\r\n    }\r\n\r\n//5. Полный список услуг и цен в меню --------------------------------------------------------------------------\r\n  const modalMenu = document.querySelector('.popup-repair-types')//блок с модальным окном \r\n  const closeBtnMenu = modalMenu.querySelector('.close')//крестик закрывающий модальное окно\r\n\r\n  //закрывает модальное окно\r\n  closeBtnMenu.addEventListener('click', () => {\r\n    modalMenu.style.display = 'none'\r\n  })\r\n\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack://relaxlive/./src/modules/menu.js?");

/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\r\n  const body = document.querySelector('body')\r\n  const modalTransparency = document.querySelector('.popup-transparency')\r\n  const modalMenu = document.querySelector('.popup-menu')\r\n  const modalPrivacy = document.querySelector('.popup-privacy')\r\n  const modalConsultation = document.querySelector('.popup-consultation')\r\n  const modalRepair = document.querySelector('.popup-repair-types')\r\n  const closeBtn = body.querySelectorAll('.close')\r\n\r\n  //\r\n  const modalOpen = (elem) => {\r\n    elem.style.visibility = 'visible'\r\n  }\r\n  const modalClose = (elem) => {\r\n    elem.style.visibility = ''\r\n  }\r\n\r\n  body.addEventListener('click', (e) => {\r\n    if (e.target.closest('.transparency-item')) {\r\n      modalOpen(modalTransparency)\r\n    } else if (e.target.closest('.menu')) {\r\n      modalOpen(modalMenu)\r\n    } else if (e.target.closest('.link-privacy')) {\r\n      modalOpen(modalPrivacy)\r\n    } else if (e.target.closest('.consultation-btn')) {\r\n      modalOpen(modalConsultation)\r\n    } else if (e.target.closest('.link-Repair')) {\r\n      modalOpen(modalRepair)\r\n    } \r\n  })\r\n\r\n  closeBtn.forEach(btn => {\r\n    btn.addEventListener('click', () => {\r\n      modalMenu.style.display = 'none'\r\n    })\r\n  })\r\n\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack://relaxlive/./src/modules/modal.js?");

/***/ }),

/***/ "./src/modules/number.js":
/*!*******************************!*\
  !*** ./src/modules/number.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst number = () => {\r\n  //1.При клике на стрелочку открывается второй номер телефона \r\n  //header-contacts__phone-number - номер\r\n  //header-contacts__arrow - стрелка\r\n  let arrowBtn = document.querySelector('.header-contacts__arrow')//кнопка стрелки\r\n  let phoneContent = document.querySelector('.header-contacts__phone-number-accord .header-contacts__phone-number')//номер\r\n  let arrowImg = document.querySelector('.header-contacts__arrow img')//картинка стрелки\r\n\r\n  phoneContent.style.opacity = \"0\"\r\n\r\n  arrowBtn.addEventListener(\"click\", () => {\r\n    if (phoneContent.style.opacity === '0') {\r\n\r\n      phoneContent.style.opacity = \"1\"\r\n      phoneContent.style.marginTop = \"30px\"\r\n      arrowImg.style.transform = \"rotate(180deg)\"\r\n\r\n    } else if (phoneContent.style.opacity = '1') {\r\n\r\n        phoneContent.style.opacity = \"0\"\r\n        phoneContent.style.marginTop = \"0px\"\r\n        arrowImg.style.transform = \"rotate(0deg)\"\r\n    }\r\n  });\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (number);\n\n//# sourceURL=webpack://relaxlive/./src/modules/number.js?");

/***/ }),

/***/ "./src/modules/scroll.js":
/*!*******************************!*\
  !*** ./src/modules/scroll.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst scroll = () => {\r\n//4. Скролл\r\n\r\n// 1 ВАРИАНТ\r\n//   // собираем все якоря; устанавливаем время анимации и количество кадров\r\n// const anchors = [].slice.call(document.querySelectorAll('a[href*=\"#main\"],a[href*=\"#formula\"],a[href*=\"#repair-types\"],a[href*=\"#portfolio\"],a[href*=\"#transparency\"],a[href*=\"#director\"],a[href*=\"#reviews\"],a[href*=\"#faq\"],a[href*=\"#main\"]')),\r\n// animationTime = 300,\r\n// framesCount = 20;\r\n\r\n// anchors.forEach(function(item) {\r\n// // каждому якорю присваиваем обработчик события\r\n// item.addEventListener('click', function(e) {\r\n// // убираем стандартное поведение\r\n// e.preventDefault();\r\n\r\n// // для каждого якоря берем соответствующий ему элемент и определяем его координату Y\r\n// let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset;\r\n\r\n// // запускаем интервал, в котором\r\n// let scroller = setInterval(function() {\r\n// // считаем на сколько скроллить за 1 такт\r\n// let scrollBy = coordY / framesCount;\r\n\r\n// // если к-во пикселей для скролла за 1 такт больше расстояния до элемента\r\n// // и дно страницы не достигнуто\r\n// if(scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {\r\n//   // то скроллим на к-во пикселей, которое соответствует одному такту\r\n//   window.scrollBy(0, scrollBy);\r\n// } else {\r\n//   // иначе добираемся до элемента и выходим из интервала\r\n//   window.scrollTo(0, coordY);\r\n//   clearInterval(scroller);\r\n// }\r\n// // время интервала равняется частному от времени анимации и к-ва кадров\r\n// }, animationTime / framesCount);\r\n// });\r\n// });\r\n\r\n//2 Вариант\r\nconst anchors = document.querySelectorAll('a[href*=\"#main\"],a[href*=\"#formula\"],a[href*=\"#repair-types\"],a[href*=\"#portfolio\"],a[href*=\"#transparency\"],a[href*=\"#director\"],a[href*=\"#reviews\"],a[href*=\"#faq\"],a[href*=\"#main\"]')\r\n\r\nfor (let anchor of anchors) {\r\n  anchor.addEventListener('click', function (e) {\r\n    e.preventDefault()\r\n    \r\n    const blockID = anchor.getAttribute('href').substr(1)\r\n    \r\n    document.getElementById(blockID).scrollIntoView({\r\n      behavior: 'smooth',\r\n      block: 'start'\r\n    })\r\n  })\r\n}\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scroll);\n\n//# sourceURL=webpack://relaxlive/./src/modules/scroll.js?");

/***/ }),

/***/ "./src/modules/sliderFormula.js":
/*!**************************************!*\
  !*** ./src/modules/sliderFormula.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sliderFormula = () => {\r\n  //10. Формула успешности слайдер в мобильной версии\r\n\r\n  //formula-slider-wrap - весь блок с слайдерами и стрелками\r\n\r\n  //formula-slider - все слайдеры в блоке\r\n  //formula-slider__slide - один слайдер\r\n  //formula-slider__slide-active - активный слайдер\r\n\r\n  //formula-arrow_left - id стрелки левая\r\n  //formula-arrow_right - id стрелки правой\r\n  \r\n  // if (window.matchMedia(\"(min-width: 1024px)\").matches) {\r\n    \r\n  //  }\r\n\r\n   \r\n\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sliderFormula);\n\n//# sourceURL=webpack://relaxlive/./src/modules/sliderFormula.js?");

/***/ }),

/***/ "./src/modules/sliders.js":
/*!********************************!*\
  !*** ./src/modules/sliders.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sliders = () => {\r\n   //18. Отзывы \r\n   //reviews-slider-wrap - весь блок слайдера со стрелками\r\n   //reviews-slider - блок со слайдерами\r\n   //reviews-slider__slide - просто отдельный слайдер\r\n   //reviews-slider__slide-active - активный слайдер\r\n\r\n   //стрелки:\r\n   //reviews-arrow_right - id правой стрелки\r\n   //reviews-arrow_left - id левой стрелки\r\n\r\n   const sliderBlock = document.querySelector('.reviews-slider-wrap') //весь блок слайдера со стрелками\r\n   const slides = document.querySelectorAll('.reviews-slider__slide') //просто отдельный слайдер\r\n\r\n   //счетчик с изначальным значением 0 (первый активный слайд будет с индексем 0)\r\n   let currentSlide = 0\r\n\r\n   //фуекция вперед\r\n   const prevSlide = (elems, index, strClass) =>{\r\n    elems[index].classList.remove(strClass)\r\n   }\r\n   //функция назад\r\n   const nextSlide = (elems, index, strClass) =>{\r\n    elems[index].classList.add(strClass)\r\n  }\r\n\r\n   //функция автослайд\r\n  //  const autoSlider = () => {\r\n  //    //удалить класс активности\r\n  //    prevSlide(slides, currentSlide, 'reviews-slider__slide-active')\r\n\r\n  //   //увеличить на 1\r\n  //   currentSlide++ \r\n\r\n  //   //проверка не вышел ли за рамки доступной длинны массива, если да то приравниваем к 0\r\n  //   if (currentSlide >= slides.length) {\r\n  //     currentSlide = 0\r\n  //   }\r\n\r\n  //   //добавить класс активности\r\n  //   nextSlide(slides, currentSlide, 'reviews-slider__slide-active')\r\n  //  }\r\n\r\n   //функция старта\r\n  //  const startSlider = () => {\r\n  //    //запуск функции autoSlider в интервале 2с\r\n  //   //  setInterval(autoSlider, 2000)\r\n  // }\r\n\r\n   //функция стоп\r\n  //  const stopSlider = () => {\r\n\r\n  // }\r\n\r\n  //стрелки\r\n  sliderBlock.addEventListener('click', (e) => {\r\n    prevSlide(slides, currentSlide, 'reviews-slider__slide-active')\r\n\r\n    if (e.target.matches('#reviews-arrow_right')) {\r\n      currentSlide++ \r\n    } else if (e.target.matches('#reviews-arrow_left')) {\r\n      currentSlide--\r\n    }\r\n\r\n    //проверка не вышел ли за рамки доступной длинны массива, если да то приравниваем к 0\r\n    if (currentSlide >= slides.length) {\r\n      currentSlide = 0\r\n    }\r\n\r\n    if (currentSlide < 0) {\r\n      currentSlide = slides.length - 1\r\n    }\r\n\r\n    nextSlide(slides, currentSlide, 'reviews-slider__slide-active')\r\n  })\r\n  // startSlider() //вызов функции startSlider\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sliders);\n\n//# sourceURL=webpack://relaxlive/./src/modules/sliders.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;