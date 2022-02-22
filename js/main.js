/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/modules/accordion/accordion.js":
/*!***************************************************!*\
  !*** ./src/blocks/modules/accordion/accordion.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var accordionHead = document.querySelectorAll('.js-accordion__head');
  var accordionBody = document.querySelectorAll('.js-accordion__body');
  var stageHead = document.querySelectorAll('.js-stage-head');
  var stageBody = document.querySelectorAll('.js-stage-body');
  var lastElement = null;
  accordionHead.forEach(function (item, i) {
    item.addEventListener('click', function (e) {
      var target = this;
      if (target === lastElement) return;
      accordionHead.forEach(function (head) {
        return head.classList.remove('active');
      });
      accordionBody.forEach(function (body) {
        return body.classList.remove('active');
      });
      stageHead.forEach(function (head) {
        return head.classList.remove('active');
      });
      stageBody.forEach(function (body) {
        return body.classList.remove('active');
      });
      target.nextElementSibling.querySelectorAll('.js-stage-head')[0].classList.add('active');
      target.nextElementSibling.querySelectorAll('.js-stage-body')[0].classList.add('active');
      target.classList.add('active');
      target.nextElementSibling.classList.add('active');
      lastElement = target;
    });
  });
});

/***/ }),

/***/ "./src/blocks/modules/brands/brands.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/brands/brands.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var Template = function Template(scr, title, list) {
    return "\n        <div class=\"brand-modal\">\n            <button class=\"brand-modal__close js-brand-modal__close\">\n                <svg>\n                    <use xlink:href=\"./img/sprites/sprite.svg#accent-arrow\"></use>\n                </svg>\n                <span>\u043D\u0430\u0437\u0430\u0434</span>\n            </button>\n            <div class=\"brand-modal__inner\">\n                <div class=\"brand-modal__item\">\n                    <div class=\"brand-modal__logo\">\n                        <img src=\"".concat(scr, "\" alt=\"Logo\" /> \n                    </div>\n                </div>\n                <div class=\"brand-modal__item\">\n                    <div class=\"brand-modal__content\">\n                        <h3 class=\"brand-modal__title\">").concat(title, "</h3>\n                        <div class=\"brand-modal__center\">\n                            <h3 class=\"brand-modal__title\">\u0427\u0442\u043E \u0434\u0435\u043B\u0430\u0435\u043C</h3>\n                            <ul class=\"brand-modal__list\">\n                                ").concat(list.map(function (item) {
      return "\n                                    <li>\n                                        <svg>\n                                            <use xlink:href=\"./img/sprites/sprite.svg#tick\"></use>\n                                        </svg>\n                                        <span>".concat(item, "\u041A</span>\n                                    </li>\n                                ");
    }).join(' '), "\n                            </ul>\n                        </div>\n                    </div>\n                    <div class=\"brand-modal__bottom\">\n                        <a href=\"#\" class=\"brand-modal__link\">\n                            <span>\u043A\u0435\u0439\u0441\u044B</span>\n                            <svg>\n                                <use xlink:href=\"./img/sprites/sprite.svg#accent-arrow\"></use>\n                            </svg>\n                        </a>\n                        <a href=\"#\" class=\"brand-modal__link\">\n                            <span>\u043E\u0442\u0437\u044B\u0432\u044B</span>\n                            <svg>\n                                <use xlink:href=\"./img/sprites/sprite.svg#accent-arrow\"></use>\n                            </svg>\n                        </a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    ");
  };

  document.addEventListener('click', function (e) {
    var target = e.target;

    if (target.closest('.js-brand')) {
      var scr = target.dataset.src;
      var title = target.dataset.title;
      var list = target.dataset.list;
      Fancybox.show([{
        src: Template(scr, title, list.split(',')),
        type: "html"
      }], {
        closeButton: null
      });
    }
  });
  document.addEventListener('click', function (e) {
    var target = e.target;
    if (target.closest('.js-brand-modal__close')) Fancybox.close();
  });
});

/***/ }),

/***/ "./src/blocks/modules/calculation-step/calculation-step.js":
/*!*****************************************************************!*\
  !*** ./src/blocks/modules/calculation-step/calculation-step.js ***!
  \*****************************************************************/
/*! exports provided: default, resetCalculator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetCalculator", function() { return resetCalculator; });
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ "./src/blocks/modules/calculation-step/components/index.js");

var count = 0;
var nextStage = [false, false, false, false];
var submitModeBtn = false;
var counterNumb = document.querySelector('.js-counter-numb');
var calculationStepItem = document.querySelectorAll('.js-calculation-step__item');
var calculationStepNext = document.querySelector('.js-calculation-step__next');
var calculationStepPrev = document.querySelector('.js-calculation-step__prev');
var calculationStepError = document.querySelector('.js-calculation-step-error');
var calculationStepRadio = document.querySelectorAll('.js-calculation-step__radio');

var calculationStepInput = function calculationStepInput() {
  return document.querySelectorAll(".js-calculation-step__input");
};

var selectRegion = document.querySelector('.js-select-region');
var otherRegion = document.querySelector('.js-form__otherRegion');
/* harmony default export */ __webpack_exports__["default"] = (function () {
  _components__WEBPACK_IMPORTED_MODULE_0__["customSelectra"].init();

  var actionStep = function actionStep(valid) {
    nextStage[count] = valid;

    if (valid) {
      count += 1;
      Object(_components__WEBPACK_IMPORTED_MODULE_0__["changeClassActive"])(calculationStepItem, count);
      calculationStepError.classList.remove('error');
      counterNumb.innerText = "0".concat(count + 1);
    }
  };

  calculationStepNext.addEventListener('click', function () {
    if (submitModeBtn) this.type = "submit";

    if (count < 3) {
      Object(_components__WEBPACK_IMPORTED_MODULE_0__["radioNextStep"])(calculationStepItem, count, actionStep);
      calculationStepError.innerText = "Пожалуйста выберите параметр";
    }

    if (count === 3) {
      Object(_components__WEBPACK_IMPORTED_MODULE_0__["regionAndSiteInput"])(calculationStepInput(), actionStep);
      calculationStepError.innerText = "Пожалуйста заполните поля";
    }

    if (!nextStage[count] && count <= 3) calculationStepError.classList.add('error');

    if (count === 4) {
      this.className = 'btn btn_spec btn_yellow js-form-btn calculation-step__submit js-calculation-step__next';
      this.children[1].innerText = "оставить заявку";
      submitModeBtn = true;
    }
  });
  calculationStepPrev.addEventListener('click', function () {
    if (count !== 0) count = --count;
    counterNumb.innerText = "0".concat(count + 1);
    calculationStepError.classList.remove('error');
    Object(_components__WEBPACK_IMPORTED_MODULE_0__["changeClassActive"])(calculationStepItem, count);
    submitModeBtn = false;

    if (count < 4) {
      calculationStepNext.className = 'calculation-step__next calculation-step__arrow js-calculation-step__next';
      calculationStepNext.children[1].innerText = "далее";
    }
  });
  Object(_components__WEBPACK_IMPORTED_MODULE_0__["changeInputs"])(calculationStepInput(), calculationStepError);
  Object(_components__WEBPACK_IMPORTED_MODULE_0__["changeRadioBtn"])(calculationStepRadio, actionStep);
  Object(_components__WEBPACK_IMPORTED_MODULE_0__["changeRegion"])(selectRegion, otherRegion);
});
var resetCalculator = function resetCalculator() {
  count = 0;
  nextStage = [false, false, false, false];
  submitModeBtn = false;
  Object(_components__WEBPACK_IMPORTED_MODULE_0__["changeClassActive"])(calculationStepItem, count);
  counterNumb.innerText = "0".concat(count + 1);
};

/***/ }),

/***/ "./src/blocks/modules/calculation-step/components/index.js":
/*!*****************************************************************!*\
  !*** ./src/blocks/modules/calculation-step/components/index.js ***!
  \*****************************************************************/
/*! exports provided: radioNextStep, changeRadioBtn, changeClassActive, regionAndSiteInput, customSelectra, changeRegion, changeInputs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "radioNextStep", function() { return radioNextStep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeRadioBtn", function() { return changeRadioBtn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeClassActive", function() { return changeClassActive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "regionAndSiteInput", function() { return regionAndSiteInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customSelectra", function() { return customSelectra; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeRegion", function() { return changeRegion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeInputs", function() { return changeInputs; });
var radioNextStep = function radioNextStep(parentElement, idx, changeState) {
  return parentElement[idx].querySelectorAll('input').forEach(function (item) {
    return item.checked ? changeState(true) : null;
  });
};
var changeRadioBtn = function changeRadioBtn(input, changeState) {
  return input.forEach(function (radio) {
    return radio.addEventListener('change', function () {
      return changeState(true);
    });
  });
};
var changeClassActive = function changeClassActive(container, idx) {
  try {
    if (container[idx].classList.contains('active')) return;
    container.forEach(function (item) {
      return item.classList.remove('active');
    });
    container[idx].classList.add('active');
  } catch (_unused) {
    console.log("error syntax");
  }
};
var regionAndSiteInput = function regionAndSiteInput(calculationStepInput, actionStep) {
  var valid = false;
  calculationStepInput.forEach(function (input) {
    return !input.value ? valid = false : valid = true;
  });
  actionStep(valid);
};
var customSelectra = new Selectra('.js-select-region', {
  search: true,
  langInputPlaceholder: "Регион"
});
var changeRegion = function changeRegion(selectRegion, otherRegion) {
  selectRegion.addEventListener('change', function (e) {
    var value = e.target.value;
    var template = "\n            <label for=\"otherRegion\" class=\"calculation-step__label calculation-step__otherRegion\">\n                <input type=\"text\" name=\"otherRegion\" id=\"otherRegion\" class=\"form__input js-calculation-step__input\" autocomplete=\"off\" placeholder=\"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0440\u0435\u0433\u0438\u043E\u043D\" >\n            </label>\n        ";

    if (value === "Другой") {
      otherRegion.style.display = "block";
      otherRegion.innerHTML = template;
      return;
    }

    otherRegion.style.display = "none";
    otherRegion.innerHTML = "";
  });
};
var changeInputs = function changeInputs(inputs, errorElement) {
  return inputs.forEach(function (element) {
    return element.addEventListener('input', function () {
      return errorElement.classList.remove('error');
    });
  });
};

/***/ }),

/***/ "./src/blocks/modules/client-category/client-category.js":
/*!***************************************************************!*\
  !*** ./src/blocks/modules/client-category/client-category.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var clientCategoryBtn = document.querySelectorAll('.js-client-category');
  var brandsItem = document.querySelectorAll('.js-brand');
  clientCategoryBtn.forEach(function (item) {
    item.addEventListener('click', function (e) {
      clientCategoryBtn.forEach(function (x) {
        return x.classList.remove('active');
      });
      var target = e.target;
      target.classList.add('active');
      var value = target.dataset.value.toLowerCase();
      brandsItem.forEach(function (category, i) {
        var name = category.dataset.category;
        if (value === 'all') return category.style.display = "flex";
        if (name === value) return category.style.display = "flex";
        category.style.display = "none";
      });
    });
  });
});

/***/ }),

/***/ "./src/blocks/modules/contacts/contacts.js":
/*!*************************************************!*\
  !*** ./src/blocks/modules/contacts/contacts.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  ymaps.ready(init);
  var newMap;

  function init() {
    var place;
    newMap = new ymaps.Map("ymaps", {
      center: [55.783245, 37.668884],
      zoom: 14,
      controls: []
    });
    place = new ymaps.Placemark([55.783245, 37.668884], {
      hintContent: "\n                <div class=\"contacts__map-mark\">\n                    <img src=\"./img/content/pop.svg\" alt=\"Baloon\"/>\n                    <span>\u0427\u0435\u0441\u0442\u043D\u044B\u0439 digital</span>\n                </div>\n            "
    }, {
      iconLayout: 'default#image',
      iconImageHref: './img/content/pin.png',
      iconImageSize: [50, 50] // iconImageOffset: [-50, -30]

    });
    newMap.geoObjects.add(place);
    var width = window.innerWidth;

    if (width < 770) {
      newMap.behaviors.disable('drag');
    }
  }

  ;
});

/***/ }),

/***/ "./src/blocks/modules/form/components/changeInputs.js":
/*!************************************************************!*\
  !*** ./src/blocks/modules/form/components/changeInputs.js ***!
  \************************************************************/
/*! exports provided: changeInputs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeInputs", function() { return changeInputs; });
/* harmony import */ var _replaceValues__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./replaceValues */ "./src/blocks/modules/form/components/replaceValues.js");

var changeInputs = function changeInputs(elements) {
  elements.forEach(function (input) {
    input.addEventListener('input', function (e) {
      var that = e.target;
      if (that.name === "name" && that.value.length > 3) that.parentElement.classList.remove('error');
      if (that.name === "phone" && Object(_replaceValues__WEBPACK_IMPORTED_MODULE_0__["phoneReplace"])(that.value).length > 11) that.parentElement.classList.remove('error');
    });
  });
};

/***/ }),

/***/ "./src/blocks/modules/form/components/fetchRequest.js":
/*!************************************************************!*\
  !*** ./src/blocks/modules/form/components/fetchRequest.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (url, data, reset) {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(function (res) {
    if (res.ok) {
      console.log('complete');
      reset();
    }
  });
});

/***/ }),

/***/ "./src/blocks/modules/form/components/replaceValues.js":
/*!*************************************************************!*\
  !*** ./src/blocks/modules/form/components/replaceValues.js ***!
  \*************************************************************/
/*! exports provided: phoneReplace */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "phoneReplace", function() { return phoneReplace; });
var phoneReplace = function phoneReplace(string) {
  return string.replace(/[^\d\+]/g, '');
};

/***/ }),

/***/ "./src/blocks/modules/form/components/validationElements.js":
/*!******************************************************************!*\
  !*** ./src/blocks/modules/form/components/validationElements.js ***!
  \******************************************************************/
/*! exports provided: validateName, validatePhone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateName", function() { return validateName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validatePhone", function() { return validatePhone; });
/* harmony import */ var _replaceValues__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./replaceValues */ "./src/blocks/modules/form/components/replaceValues.js");

var validateName = function validateName(name, minlen) {
  if (!name) return "Имя обязательно";
  if (name.length < minlen) return "\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0418\u043C\u044F \u0434\u043B\u0438\u043D\u043E\u0439 \u043D\u0435 \u043C\u0435\u043D\u0435\u0435 ".concat(minlen, " \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432");
  if (!/(^[a-zA-Z\-]+$)|(^[а-яА-Я\-]+$)/.test(name.trim())) return "Пожалуйста, вводите только буквы";
  return "";
};
var validatePhone = function validatePhone(phone, minlen) {
  if (!phone) return "Номер телефона обязательна.";
  var replace = Object(_replaceValues__WEBPACK_IMPORTED_MODULE_0__["phoneReplace"])(phone);
  if (replace.length < minlen) return "Пожалуйста, введите корректный номер телефона";
  return "";
};

/***/ }),

/***/ "./src/blocks/modules/form/components/validationInput.js":
/*!***************************************************************!*\
  !*** ./src/blocks/modules/form/components/validationInput.js ***!
  \***************************************************************/
/*! exports provided: validationInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validationInput", function() { return validationInput; });
/* harmony import */ var _validationElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validationElements */ "./src/blocks/modules/form/components/validationElements.js");

var validationInput = function validationInput(name, phone, formInput, formError) {
  var nameErrorMessage = Object(_validationElements__WEBPACK_IMPORTED_MODULE_0__["validateName"])(name, 3);
  var phoneErrorMessage = Object(_validationElements__WEBPACK_IMPORTED_MODULE_0__["validatePhone"])(phone, 12);

  if (nameErrorMessage) {
    formInput[0].classList.add('error');
    formError[0].innerText = nameErrorMessage;
    formInput[0].children[0].focus();
  }

  if (phoneErrorMessage) {
    formInput[1].classList.add('error');
    formError[1].innerText = phoneErrorMessage;
    formInput[1].children[0].focus();
  }

  if (nameErrorMessage && phoneErrorMessage) return false;
  if (!nameErrorMessage && !phoneErrorMessage) return true;
};

/***/ }),

/***/ "./src/blocks/modules/form/form.js":
/*!*****************************************!*\
  !*** ./src/blocks/modules/form/form.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _calculation_step_calculation_step__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../calculation-step/calculation-step */ "./src/blocks/modules/calculation-step/calculation-step.js");
/* harmony import */ var _components_changeInputs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/changeInputs */ "./src/blocks/modules/form/components/changeInputs.js");
/* harmony import */ var _components_fetchRequest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/fetchRequest */ "./src/blocks/modules/form/components/fetchRequest.js");
/* harmony import */ var _components_replaceValues__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/replaceValues */ "./src/blocks/modules/form/components/replaceValues.js");
/* harmony import */ var _components_validationInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/validationInput */ "./src/blocks/modules/form/components/validationInput.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }






/* harmony default export */ __webpack_exports__["default"] = (function () {
  var form = document.querySelectorAll('body .js-form');
  form.forEach(function (item) {
    item.addEventListener('submit', function (e) {
      e.preventDefault();
      var target = e.target;
      var formInput = target.querySelectorAll('.js-input');
      var formError = target.querySelectorAll('.js-form__error');
      var formBtn = target.querySelector('.js-form-btn');
      var formDataEntries = new FormData(target);

      var _Object$fromEntries = Object.fromEntries(formDataEntries.entries()),
          name = _Object$fromEntries.name,
          phone = _Object$fromEntries.phone;

      var dataObject = {};

      var _iterator = _createForOfIteratorHelper(formDataEntries),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _step$value = _slicedToArray(_step.value, 2),
              key = _step$value[0],
              value = _step$value[1];

          dataObject[key] = value;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      var url = target.dataset.action;
      var validation = Object(_components_validationInput__WEBPACK_IMPORTED_MODULE_4__["validationInput"])(name, phone, formInput, formError);
      if (!validation) return Object(_components_changeInputs__WEBPACK_IMPORTED_MODULE_1__["changeInputs"])(formInput);

      var dataObjectClone = _objectSpread(_objectSpread({}, dataObject), {}, {
        name: name.trim(),
        phone: Object(_components_replaceValues__WEBPACK_IMPORTED_MODULE_3__["phoneReplace"])(phone)
      });

      formBtn.setAttribute('disabled', true);
      Object(_components_fetchRequest__WEBPACK_IMPORTED_MODULE_2__["default"])(url, dataObjectClone, function () {
        formBtn.removeAttribute('disabled');
        target.reset();
        Fancybox.show([{
          src: "#success",
          type: "inline"
        }]);
        Object(_calculation_step_calculation_step__WEBPACK_IMPORTED_MODULE_0__["resetCalculator"])();
        setTimeout(function () {
          return Fancybox.close();
        }, 3000);
      });
    });
  });
});

/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {// const headerBurger = document.querySelector('.js-header__burger'),
  // 	  headerInner = document.querySelector('.js-header__inner');
  // headerBurger.addEventListener('click', function(e) {
  // 	this.classList.toggle('active');
  // 	headerInner.classList.toggle('active');
  // }, false)
  // const removeClassFn = () => setTimeout(()=> {
  // 	headerInner.classList.remove('active');
  // 	headerBurger.classList.remove('active');
  // }, 500)
  // // document.addEventListener('scroll', removeClassFn)
  // document.addEventListener('mouseup', (e)=> {
  // 	const target = e.target
  // 	if (!target.closest('.js-header__burger')) removeClassFn()
  // })
});

/***/ }),

/***/ "./src/blocks/modules/honest/honest.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/honest/honest.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var honestClose = document.querySelector('.js-honest__close');
  Fancybox.bind("[data-fancybox]", {
    dragToClose: false,
    closeButton: false,
    on: {
      init: function init() {
        var swiper = new Swiper('#honest-slider', {
          loop: true,
          speed: 500,
          slidesPerView: 3,
          spaceBetween: 24,
          autoplay: {
            delay: 5000
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        });
      }
    }
  });
  honestClose.addEventListener('click', function () {
    return Fancybox.close();
  });
  var swiper = new Swiper('#honest-slider', {
    loop: true,
    speed: 500,
    slidesPerView: 1,
    spaceBetween: 24,
    autoplay: {
      delay: 5000
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  });
});

/***/ }),

/***/ "./src/blocks/modules/intro/intro.js":
/*!*******************************************!*\
  !*** ./src/blocks/modules/intro/intro.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var swiper = new Swiper('.js-intro-swiper', {
    loop: true,
    effect: 'fade',
    speed: 500,
    autoplay: {
      delay: 5000
    },
    pagination: {
      el: '.intro-swiper-pagination',
      clickable: true
    },
    on: {
      init: function init() {}
    }
  });
});

/***/ }),

/***/ "./src/blocks/modules/results-slider/results-slider.js":
/*!*************************************************************!*\
  !*** ./src/blocks/modules/results-slider/results-slider.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var resultsSlider = new Swiper('.js-results-slider', {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: '.results-slider-pagination'
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    breakpoints: {
      769: {
        slidesPerView: 2,
        spaceBetween: 0
      }
    }
  });
});

/***/ }),

/***/ "./src/blocks/modules/stage/stage.js":
/*!*******************************************!*\
  !*** ./src/blocks/modules/stage/stage.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var stageHead = document.querySelectorAll('.js-stage-head');
  var stageBody = document.querySelectorAll('.js-stage-body');
  stageHead.forEach(function (item, i) {
    item.addEventListener('click', function () {
      var target = this;
      stageHead.forEach(function (head) {
        return head.classList.remove('active');
      });
      stageBody.forEach(function (body) {
        return body.classList.remove('active');
      });
      target.classList.add('active');
      target.nextElementSibling.classList.add('active');
    });
  });
});

/***/ }),

/***/ "./src/blocks/modules/team/team.js":
/*!*****************************************!*\
  !*** ./src/blocks/modules/team/team.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var swiper = new Swiper('.js-team__slider', {
    loop: true,
    slidesPerView: 1.3,
    spaceBetween: 10,
    pagination: {
      el: '.swiper-pagination'
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    breakpoints: {
      // when window width is >= 320px
      769: {
        slidesPerView: 5
      }
    }
  });
  var questions = new Swiper('.js-team__questions', {
    direction: 'vertical',
    loop: true,
    speed: 2000,
    nested: true,
    autoplay: {
      delay: 3000
    }
  });
});

/***/ }),

/***/ "./src/js/import/global.js":
/*!*********************************!*\
  !*** ./src/js/import/global.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var phoneMask = Inputmask({
    "mask": "+ 7 (999) 999 - 99 - 99"
  });
  phoneMask.mask('.js-phone');
  var modalClose = document.querySelectorAll('.js-modal-close');
  var formInput = document.querySelectorAll('.js-input');
  var formError = document.querySelectorAll('.js-form__error');
  modalClose.forEach(function (item) {
    item.addEventListener('click', function () {
      Fancybox.close();
      formInput.forEach(function (item) {
        return item.classList.remove('error');
      });
      formError.forEach(function (item) {
        return item.classList.remove('error');
      });
    });
  });
  var formBtn = document.querySelectorAll('.js-form-btn');
  formBtn.forEach(function (btn) {
    return btn.type = "submit";
  });
});

/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global */ "./src/js/import/global.js");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_intro_intro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/intro/intro */ "./src/blocks/modules/intro/intro.js");
/* harmony import */ var _modules_form_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/form/form */ "./src/blocks/modules/form/form.js");
/* harmony import */ var _modules_results_slider_results_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/results-slider/results-slider */ "./src/blocks/modules/results-slider/results-slider.js");
/* harmony import */ var _modules_accordion_accordion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! %modules%/accordion/accordion */ "./src/blocks/modules/accordion/accordion.js");
/* harmony import */ var _modules_stage_stage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! %modules%/stage/stage */ "./src/blocks/modules/stage/stage.js");
/* harmony import */ var _modules_calculation_step_calculation_step__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! %modules%/calculation-step/calculation-step */ "./src/blocks/modules/calculation-step/calculation-step.js");
/* harmony import */ var _modules_honest_honest__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! %modules%/honest/honest */ "./src/blocks/modules/honest/honest.js");
/* harmony import */ var _modules_brands_brands__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! %modules%/brands/brands */ "./src/blocks/modules/brands/brands.js");
/* harmony import */ var _modules_client_category_client_category__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! %modules%/client-category/client-category */ "./src/blocks/modules/client-category/client-category.js");
/* harmony import */ var _modules_team_team__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! %modules%/team/team */ "./src/blocks/modules/team/team.js");
/* harmony import */ var _modules_contacts_contacts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! %modules%/contacts/contacts */ "./src/blocks/modules/contacts/contacts.js");













setTimeout(function () {
  Object(_global__WEBPACK_IMPORTED_MODULE_0__["default"])();
  Object(_modules_intro_intro__WEBPACK_IMPORTED_MODULE_2__["default"])();
  Object(_modules_form_form__WEBPACK_IMPORTED_MODULE_3__["default"])();
  Object(_modules_results_slider_results_slider__WEBPACK_IMPORTED_MODULE_4__["default"])();
  Object(_modules_accordion_accordion__WEBPACK_IMPORTED_MODULE_5__["default"])();
  Object(_modules_stage_stage__WEBPACK_IMPORTED_MODULE_6__["default"])();
  Object(_modules_calculation_step_calculation_step__WEBPACK_IMPORTED_MODULE_7__["default"])();
  Object(_modules_honest_honest__WEBPACK_IMPORTED_MODULE_8__["default"])();
  Object(_modules_brands_brands__WEBPACK_IMPORTED_MODULE_9__["default"])();
  Object(_modules_client_category_client_category__WEBPACK_IMPORTED_MODULE_10__["default"])();
  Object(_modules_team_team__WEBPACK_IMPORTED_MODULE_11__["default"])();
  Object(_modules_contacts_contacts__WEBPACK_IMPORTED_MODULE_12__["default"])();
  Object(_modules_header_header__WEBPACK_IMPORTED_MODULE_1__["default"])();
}, 500);

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");


/***/ })

/******/ });
//# sourceMappingURL=main.js.map