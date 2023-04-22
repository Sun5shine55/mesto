/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/Api.js":
/*!*******************************!*\
  !*** ./src/components/Api.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Api)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Api = /*#__PURE__*/function () {
  function Api(_ref) {
    var url = _ref.url,
      headers = _ref.headers;
    _classCallCheck(this, Api);
    this.url = url;
    this.headers = headers;
    this._token = headers["authorization"];
  }
  _createClass(Api, [{
    key: "getCards",
    value: function getCards() {
      var _this = this;
      return fetch("".concat(this.url, "/cards"), {
        headers: this.headers
      }).then(function (res) {
        return _this._checkResult(res);
      });
    }
  }, {
    key: "_checkResult",
    value: function _checkResult(res) {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject("\u041E\u0448\u0438\u0431\u043A\u0430 ".concat(res.status));
    }
  }, {
    key: "addCard",
    value: function addCard(_ref2) {
      var _this2 = this;
      var placename = _ref2.placename,
        link = _ref2.link;
      return fetch("".concat(this.url, "/cards"), {
        method: "POST",
        headers: this.headers,
        body: JSON.stringify({
          name: placename,
          link: link
        })
      }).then(function (res) {
        return _this2._checkResult(res);
      });
    }
  }, {
    key: "getUserData",
    value: function getUserData() {
      var _this3 = this;
      return fetch("".concat(this.url, "/users/me"), {
        method: "GET",
        headers: this.headers
      }).then(function (res) {
        return _this3._checkResult(res);
      });
    }
  }, {
    key: "editUserData",
    value: function editUserData(_ref3) {
      var _this4 = this;
      var name = _ref3.name,
        job = _ref3.job;
      return fetch("".concat(this.url, "/users/me"), {
        method: "PATCH",
        headers: this.headers,
        body: JSON.stringify({
          name: name,
          about: job
        })
      }).then(function (res) {
        return _this4._checkResult(res);
      });
    }
  }, {
    key: "editAvatar",
    value: function editAvatar(_ref4) {
      var _this5 = this;
      var avatar = _ref4.avatar;
      return fetch("".concat(this.url, "/users/me/avatar"), {
        method: "PATCH",
        headers: this.headers,
        body: JSON.stringify({
          avatar: avatar
        })
      }).then(function (res) {
        return _this5._checkResult(res);
      });
    }
  }, {
    key: "putLike",
    value: function putLike(id) {
      var _this6 = this;
      return fetch("".concat(this.url, "/cards/").concat(id, "/likes"), {
        method: "PUT",
        headers: this.headers
      }).then(function (res) {
        return _this6._checkResult(res);
      });
    }
  }, {
    key: "removeLike",
    value: function removeLike(id) {
      var _this7 = this;
      return fetch("".concat(this.url, "/cards/").concat(id, "/likes"), {
        method: "DELETE",
        headers: this.headers
      }).then(function (res) {
        return _this7._checkResult(res);
      });
    }
  }, {
    key: "deleteCard",
    value: function deleteCard(id) {
      var _this8 = this;
      return fetch("".concat(this.url, "/cards/").concat(id), {
        method: "DELETE",
        headers: this.headers
      }).then(function (res) {
        return _this8._checkResult(res);
      });
    }
  }]);
  return Api;
}();


/***/ }),

/***/ "./src/components/Card.js":
/*!********************************!*\
  !*** ./src/components/Card.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Card)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
//import { handleCardClick } from "../pages/index.js";
var Card = /*#__PURE__*/function () {
  function Card(data, userId, popupOpener, handleLikeClick, handleTrashClick) {
    _classCallCheck(this, Card);
    this._name = data.name;
    this._link = data.link;
    this._ownerId = data.owner._id;
    this._likes = data.likes;
    this.id = data._id;
    this._myId = userId;
    this._alt = data.name;
    this._templateCard = document.querySelector(".card-template");
    this._popupOpener = popupOpener;
    this.handleLikeClick = handleLikeClick;
    this._handleTrashClick = handleTrashClick;
  }
  _createClass(Card, [{
    key: "_getTemplate",
    value: function _getTemplate() {
      var cardElement = this._templateCard.content.querySelector(".card").cloneNode(true);
      return cardElement;
    }
  }, {
    key: "addCard",
    value: function addCard() {
      this._element = this._getTemplate();
      this._cardImage = this._element.querySelector(".card__photo");
      this._cardTitle = this._element.querySelector(".card__title");
      this._cardImage.src = this._link;
      console.log(this._cardImage.src);
      this._cardTitle.textContent = this._name;
      this._cardImage.alt = this._name;
      this._like = this._element.querySelector(".card__like");
      this._likeCounter = this._element.querySelector(".card__likecounter");
      this._cardDelete = this._element.querySelector(".card__delete");
      if (this._myId !== this._ownerId) {
        this._cardDelete.remove();
      }
      this.setLikes(this._likes);
      this._setEventListeners();
      return this._element;
    }
  }, {
    key: "_setEventListeners",
    value: function _setEventListeners() {
      var _this = this;
      this._cardDelete.addEventListener("click", function () {
        _this._handleTrashClick(_this.id, _this);
      });
      this._cardImage.addEventListener("click", function () {
        _this._handleImageClick(_this._name, _this._link);
      });
      this._like.addEventListener("click", function () {
        _this.handleLikeClick(_this.id, _this._checkLike(), _this);
      });
    }
  }, {
    key: "addLike",
    value: function addLike() {
      this._like.classList.add("card__like_type_color");
    }
  }, {
    key: "_checkLike",
    value: function _checkLike() {
      var _this2 = this;
      if (this._likes.some(function (like) {
        return like._id === _this2._myId;
      })) {
        return true;
      }
      return false;
    }
  }, {
    key: "removeLike",
    value: function removeLike() {
      this._like.classList.remove("card__like_type_color");
    }
  }, {
    key: "setLikes",
    value: function setLikes(arr) {
      this._likeCounter.textContent = arr.length;
      this._likes = arr;
      if (this._checkLike()) {
        this.addLike();
      } else {
        this.removeLike();
      }
    }
  }, {
    key: "_handleImageClick",
    value: function _handleImageClick() {
      this._popupOpener(this._name, this._link);
    }
  }, {
    key: "removeCard",
    value: function removeCard() {
      this._element.remove();
      this._element = null;
    }
  }]);
  return Card;
}();


/***/ }),

/***/ "./src/components/FormValidator.js":
/*!*****************************************!*\
  !*** ./src/components/FormValidator.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FormValidator)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var FormValidator = /*#__PURE__*/function () {
  function FormValidator(config, searchForm) {
    var _this = this;
    _classCallCheck(this, FormValidator);
    _defineProperty(this, "enableSubmitButton", function () {
      _this._searchSubmitButton.removeAttribute("disabled");
      _this._searchSubmitButton.classList.remove(_this.config.inactiveButtonClass);
    });
    _defineProperty(this, "disableSubmitButton", function () {
      _this._searchSubmitButton.setAttribute("disabled", "disabled");
      _this._searchSubmitButton.classList.add(_this.config.inactiveButtonClass);
    });
    this.config = config;
    this._searchForm = searchForm;
  }
  _createClass(FormValidator, [{
    key: "_addErrorMessage",
    value: function _addErrorMessage(searchInput, errorMessage) {
      var errorClass = this._searchForm.querySelector(".popup__item-error_field_".concat(searchInput.name));
      searchInput.classList.add(this.config.inputErrorClass);
      errorClass.textContent = errorMessage;
    }
  }, {
    key: "_delErrorMessage",
    value: function _delErrorMessage(searchInput) {
      var errorClass = this._searchForm.querySelector(".popup__item-error_field_".concat(searchInput.name));
      searchInput.classList.remove(this.config.inputErrorClass);
      errorClass.textContent = "";
    }
  }, {
    key: "_checkInputValidity",
    value: function _checkInputValidity(searchInput) {
      if (!searchInput.validity.valid) {
        this._addErrorMessage(searchInput, searchInput.validationMessage);
      } else {
        this._delErrorMessage(searchInput);
      }
    }
  }, {
    key: "_setEventListeners",
    value: function _setEventListeners() {
      var _this2 = this;
      this._searchSubmitButton = this._searchForm.querySelector(this.config.searchSubmitButton);
      this._inputList = Array.from(this._searchForm.querySelectorAll(this.config.searchInput));
      this._toggleButtonState(this._inputList, this._searchSubmitButton);
      this._inputList.forEach(function (input) {
        input.addEventListener("input", function () {
          _this2._checkInputValidity(input);
          _this2._toggleButtonState(_this2._inputList, _this2._searchSubmitButton);
        });
      });
    }
  }, {
    key: "_toggleButtonState",
    value: function _toggleButtonState() {
      var formIsValid = this._inputList.every(function (item) {
        return item.validity.valid;
      });
      if (formIsValid) {
        this.enableSubmitButton(this._searchSubmitButton);
      } else {
        this.disableSubmitButton(this._searchSubmitButton);
      }
    }
  }, {
    key: "resetValidation",
    value: function resetValidation() {
      var _this3 = this;
      this._toggleButtonState(this._inputList, this._searchSubmitButton); //<== управляем кнопкой ==

      this._inputList.forEach(function (inputElement) {
        _this3._delErrorMessage(inputElement); //<==очищаем ошибки ==
      });
    }
  }, {
    key: "enableValidation",
    value: function enableValidation() {
      this._setEventListeners();
    }
  }]);
  return FormValidator;
}();


/***/ }),

/***/ "./src/components/Popup.js":
/*!*********************************!*\
  !*** ./src/components/Popup.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Popup)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Popup = /*#__PURE__*/function () {
  function Popup(popupSelector) {
    _classCallCheck(this, Popup);
    this._popup = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }
  _createClass(Popup, [{
    key: "open",
    value: function open() {
      this._popup.classList.add("popup_opened");
      document.addEventListener("keydown", this._handleEscClose);
    }
  }, {
    key: "_handleEscClose",
    value: function _handleEscClose(event) {
      if (event.key === "Escape") {
        this.close();
      }
    }
  }, {
    key: "close",
    value: function close() {
      this._popup.classList.remove("popup_opened");
      document.removeEventListener("keydown", this._handleEscClose);
    }
  }, {
    key: "_closePopupByArea",
    value: function _closePopupByArea() {
      var _this = this;
      this._popup.addEventListener("click", function (evt) {
        if (evt.target === _this._popup) {
          _this.close();
        }
      });
    }
  }, {
    key: "_closePopupByClosingIcon",
    value: function _closePopupByClosingIcon() {
      var _this2 = this;
      this._popup.querySelector(".popup__close").addEventListener("click", function () {
        _this2.close();
      });
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      this._closePopupByArea();
      this._closePopupByClosingIcon();
    }
  }]);
  return Popup;
}();


/***/ }),

/***/ "./src/components/PopupDeleteConfirm.js":
/*!**********************************************!*\
  !*** ./src/components/PopupDeleteConfirm.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PopupDeleteConfirm)
/* harmony export */ });
/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup.js */ "./src/components/Popup.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var PopupDeleteConfirm = /*#__PURE__*/function (_Popup) {
  _inherits(PopupDeleteConfirm, _Popup);
  var _super = _createSuper(PopupDeleteConfirm);
  function PopupDeleteConfirm(popupSelector) {
    var _this;
    _classCallCheck(this, PopupDeleteConfirm);
    _this = _super.call(this, popupSelector);
    _this._buttonConfirm = _this._popup.querySelector(".popup__save-button");
    return _this;
  }
  _createClass(PopupDeleteConfirm, [{
    key: "submitDelete",
    value: function submitDelete(_submitDelete) {
      this._handleSubmitDelete = _submitDelete;
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this2 = this;
      _get(_getPrototypeOf(PopupDeleteConfirm.prototype), "setEventListeners", this).call(this);
      this._buttonConfirm.addEventListener("click", function (evt) {
        evt.preventDefault();
        _this2._handleSubmitDelete(evt);
      });
    }
  }]);
  return PopupDeleteConfirm;
}(_Popup_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/components/PopupWithForm.js":
/*!*****************************************!*\
  !*** ./src/components/PopupWithForm.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PopupWithForm)
/* harmony export */ });
/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup.js */ "./src/components/Popup.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var PopupWithForm = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithForm, _Popup);
  var _super = _createSuper(PopupWithForm);
  function PopupWithForm(popupSelector, form, submitForm, inputList) {
    var _this;
    _classCallCheck(this, PopupWithForm);
    _this = _super.call(this, popupSelector);
    _this._submitForm = submitForm;
    _this._form = form;
    _this._inputList = inputList;
    _this._buttonConfirm = _this._popup.querySelector(".popup__save-button");
    _this._textButton = _this._buttonConfirm.textContent;
    return _this;
  }
  _createClass(PopupWithForm, [{
    key: "_getInputValues",
    value: function _getInputValues() {
      var _this2 = this;
      this._inputValues = {};
      this._inputList = Array.from(this._popup.querySelectorAll(".popup__field"));
      this._inputList.forEach(function (input) {
        return _this2._inputValues[input.name] = input.value;
      });
      return this._inputValues;
    }
  }, {
    key: "close",
    value: function close() {
      _get(_getPrototypeOf(PopupWithForm.prototype), "close", this).call(this);
      this._form.reset();
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this3 = this;
      _get(_getPrototypeOf(PopupWithForm.prototype), "setEventListeners", this).call(this);
      this._form.addEventListener("submit", function (event) {
        event.preventDefault();
        _this3._submitForm(_this3._getInputValues());
        _this3.close();
      });
    }
  }, {
    key: "renderSaving",
    value: function renderSaving(status) {
      if (status) {
        this._buttonConfirm.textContent = "C\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435...";
      } else {
        this._buttonConfirm.textContent = this._textButton;
      }
    }
  }]);
  return PopupWithForm;
}(_Popup_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/components/PopupWithImage.js":
/*!******************************************!*\
  !*** ./src/components/PopupWithImage.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PopupWithImage)
/* harmony export */ });
/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup.js */ "./src/components/Popup.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var PopupWithImage = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithImage, _Popup);
  var _super = _createSuper(PopupWithImage);
  function PopupWithImage(popupSelector) {
    var _this;
    _classCallCheck(this, PopupWithImage);
    _this = _super.call(this, popupSelector);
    _this._image = _this._popup.querySelector(".popup__image");
    _this._name = _this._popup.querySelector(".popup__title-image");
    return _this;
  }
  _createClass(PopupWithImage, [{
    key: "open",
    value: function open(name, image) {
      this._image.src = image;
      this._image.alt = name;
      this._name.textContent = name;
      _get(_getPrototypeOf(PopupWithImage.prototype), "open", this).call(this);
    }
  }]);
  return PopupWithImage;
}(_Popup_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/components/Section.js":
/*!***********************************!*\
  !*** ./src/components/Section.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Section)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Section = /*#__PURE__*/function () {
  function Section(_ref, containerSelector) {
    var renderer = _ref.renderer;
    _classCallCheck(this, Section);
    this._container = document.querySelector(containerSelector);
    this._renderer = renderer;
  }
  _createClass(Section, [{
    key: "addItem",
    value: function addItem(item) {
      this._container.prepend(item);
    }
  }, {
    key: "renderItems",
    value: function renderItems(cards) {
      var _this = this;
      cards.forEach(function (card) {
        _this._renderer(card);
      });
    }
  }]);
  return Section;
}();


/***/ }),

/***/ "./src/components/UserInfo.js":
/*!************************************!*\
  !*** ./src/components/UserInfo.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UserInfo)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var UserInfo = /*#__PURE__*/function () {
  function UserInfo(userInfo) {
    _classCallCheck(this, UserInfo);
    this._username = document.querySelector(userInfo.name);
    this._userjob = document.querySelector(userInfo.job);
    this._avatar = document.querySelector(userInfo.avatar);
  }
  _createClass(UserInfo, [{
    key: "getUserInfo",
    value: function getUserInfo() {
      var userData = {
        name: this._username.textContent,
        job: this._userjob.textContent
      };
      return userData;
    }
  }, {
    key: "setUserInfo",
    value: function setUserInfo(data) {
      this._username.textContent = data.name;
      this._userjob.textContent = data.about;
      this._avatar.src = data.avatar;
    }
  }]);
  return UserInfo;
}();


/***/ }),

/***/ "./src/utils/constants.js":
/*!********************************!*\
  !*** ./src/utils/constants.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "avatarEditButton": () => (/* binding */ avatarEditButton),
/* harmony export */   "avatarForm": () => (/* binding */ avatarForm),
/* harmony export */   "buttonsClosePopup": () => (/* binding */ buttonsClosePopup),
/* harmony export */   "config": () => (/* binding */ config),
/* harmony export */   "initialCards": () => (/* binding */ initialCards),
/* harmony export */   "jobInput": () => (/* binding */ jobInput),
/* harmony export */   "linkPlace": () => (/* binding */ linkPlace),
/* harmony export */   "listCards": () => (/* binding */ listCards),
/* harmony export */   "nameInput": () => (/* binding */ nameInput),
/* harmony export */   "namePlace": () => (/* binding */ namePlace),
/* harmony export */   "newPlaceAddButton": () => (/* binding */ newPlaceAddButton),
/* harmony export */   "newPlaceCreateButton": () => (/* binding */ newPlaceCreateButton),
/* harmony export */   "newPlaceForm": () => (/* binding */ newPlaceForm),
/* harmony export */   "popupAvatar": () => (/* binding */ popupAvatar),
/* harmony export */   "popupDelete": () => (/* binding */ popupDelete),
/* harmony export */   "popupEditProfile": () => (/* binding */ popupEditProfile),
/* harmony export */   "popupImage": () => (/* binding */ popupImage),
/* harmony export */   "popupImageElem": () => (/* binding */ popupImageElem),
/* harmony export */   "popupImageElemTitle": () => (/* binding */ popupImageElemTitle),
/* harmony export */   "popupNewPlace": () => (/* binding */ popupNewPlace),
/* harmony export */   "popups": () => (/* binding */ popups),
/* harmony export */   "profileEditButton": () => (/* binding */ profileEditButton),
/* harmony export */   "profileForm": () => (/* binding */ profileForm),
/* harmony export */   "profileMyself": () => (/* binding */ profileMyself),
/* harmony export */   "profileName": () => (/* binding */ profileName),
/* harmony export */   "profileSaveButton": () => (/* binding */ profileSaveButton)
/* harmony export */ });
var profileEditButton = document.querySelector(".profile__edit-button");
var avatarEditButton = document.querySelector(".profile__avatar-editbutton");
var newPlaceAddButton = document.querySelector(".profile__add-button");
var profileSaveButton = document.querySelector('button[name="btnSaveProfile"]');
var newPlaceCreateButton = document.querySelector('button[name="btnCreateNewPlace"]');
var profileForm = document.forms.formProfile;
var nameInput = profileForm.querySelector('input[name="name"]');
var jobInput = profileForm.querySelector('input[name="myself"]');
var newPlaceForm = document.forms.formNewPlace;
var namePlace = newPlaceForm.querySelector('input[name="place-name"]');
var linkPlace = newPlaceForm.querySelector('input[name="place-link"]');
var profileName = document.querySelector(".profile__name");
var profileMyself = document.querySelector(".profile__myself");
var popupAvatar = document.querySelector(".popup_avatar");
var popupEditProfile = document.querySelector(".popup_edit-profile");
var popupNewPlace = document.querySelector(".popup_new-place");
var popupImage = document.querySelector(".popup_image");
var popupImageElem = document.querySelector(".popup__image");
var popupImageElemTitle = document.querySelector(".popup__title-image");
var popups = document.querySelectorAll(".popup");
var buttonsClosePopup = document.querySelectorAll(".popup__close");
var listCards = document.querySelector(".cards__list");
var popupDelete = document.querySelector(".popup_delete-card");
var avatarForm = document.forms.formAvatar;
var initialCards = [{
  name: "Архыз",
  link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"
}, {
  name: "Челябинская область",
  link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"
}, {
  name: "Иваново",
  link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"
}, {
  name: "Камчатка",
  link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"
}, {
  name: "Холмогорский район",
  link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"
}, {
  name: "Байкал",
  link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"
}];
var config = {
  searchForm: ".popup__form",
  searchInput: ".popup__field",
  searchSubmitButton: ".popup__save-button",
  inactiveButtonClass: "popup__save-button_disabled",
  inputErrorClass: "popup__item-error_type_show",
  errorClass: ".popup__item-error"
};

/***/ }),

/***/ "./src/pages/index.css":
/*!*****************************!*\
  !*** ./src/pages/index.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handleCardClick": () => (/* binding */ handleCardClick)
/* harmony export */ });
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/pages/index.css");
/* harmony import */ var _components_Api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Api.js */ "./src/components/Api.js");
/* harmony import */ var _components_Card_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Card.js */ "./src/components/Card.js");
/* harmony import */ var _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/FormValidator.js */ "./src/components/FormValidator.js");
/* harmony import */ var _components_Section_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Section.js */ "./src/components/Section.js");
/* harmony import */ var _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/PopupWithForm.js */ "./src/components/PopupWithForm.js");
/* harmony import */ var _components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/PopupWithImage.js */ "./src/components/PopupWithImage.js");
/* harmony import */ var _components_UserInfo_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/UserInfo.js */ "./src/components/UserInfo.js");
/* harmony import */ var _components_PopupDeleteConfirm_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/PopupDeleteConfirm.js */ "./src/components/PopupDeleteConfirm.js");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/constants.js */ "./src/utils/constants.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










var pictureOpened = new _components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_6__["default"](".popup_image"); //экземпляр класса PopupWithImage
pictureOpened.setEventListeners();
var handleCardClick = function handleCardClick(name, image) {
  pictureOpened.open(name, image);
};
function handleTrashClick(id, card) {
  popupDeleteConfirm.submitDelete(function () {
    return handleDeleteConfirm(id, card);
  });
  popupDeleteConfirm.open();
}
function handleDeleteConfirm(id, card) {
  api.deleteCard(id).then(function () {
    card.removeCard();
    popupDeleteConfirm.close();
  }).catch(function (err) {
    console.log(err.message);
  });
}
var defaultCardList = new _components_Section_js__WEBPACK_IMPORTED_MODULE_4__["default"]({
  data: {},
  renderer: function renderer(data) {
    var card = createCard(data, userId);
    defaultCardList.addItem(card);
  }
}, ".cards__list");
var popupDeleteConfirm = new _components_PopupDeleteConfirm_js__WEBPACK_IMPORTED_MODULE_8__["default"](".popup_delete-card");
popupDeleteConfirm.setEventListeners();
function createCard(data, userId) {
  var card = new _components_Card_js__WEBPACK_IMPORTED_MODULE_2__["default"](data, userId, handleCardClick, handleLikeClick, handleTrashClick);
  var cardElement = card.addCard();
  return cardElement;
}
function handleLikeClick(id, isLiked, card) {
  if (isLiked) {
    api.removeLike(id).then(function (data) {
      card.setLikes(data.likes);
    });
  } else {
    api.putLike(card.id).then(function (data) {
      card.setLikes(data.likes);
    });
  }
}
var userId = null;
function createCardFormSubmit(inputValues) {
  popupPlace.renderSaving(true);
  //const card = createCard(inputValues["place-name"], inputValues["place-link"]);
  api.addCard({
    placename: inputValues["place-name"],
    link: inputValues["place-link"]
  }).then(function (data) {
    var card = createCard(data, userId);
    defaultCardList.addItem(card);
    popupPlace.close();
  }).catch(function (err) {
    console.log(err.message);
  }).finally(function () {
    popupPlace.renderSaving(false);
  });
}
function handleProfileFormSubmit(inputValues) {
  //userInformation.setUserInfo(inputValues["name"], inputValues["myself"]);
  popupProfile.renderSaving(true);
  api.editUserData({
    name: inputValues["name"],
    job: inputValues["myself"]
  }).then(function (data) {
    userInformation.setUserInfo(data);
    popupProfile.close();
  }).catch(function (err) {
    console.log(err.message);
  }).finally(function () {
    popupProfile.renderSaving(false);
  });
}
function handleChangeAvatar(inputValues) {
  popupChangeAvatar.renderSaving(true);
  api.editAvatar(inputValues).then(function (data) {
    console.log(data);
    userInformation.setUserInfo(data);
    popupChangeAvatar.close();
  }).catch(function (err) {
    console.log(err.message);
  }).finally(function () {
    popupChangeAvatar.renderSaving(false);
  });
}
var userInformation = new _components_UserInfo_js__WEBPACK_IMPORTED_MODULE_7__["default"]({
  name: ".profile__name",
  job: ".profile__myself",
  avatar: ".profile__avatar"
});
var popupPlace = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_5__["default"](".popup_new-place", _utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.newPlaceForm, createCardFormSubmit); //экземпляр класса PopupWithForm

var popupProfile = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_5__["default"](".popup_edit-profile", _utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.profileForm, handleProfileFormSubmit); //экземпляр класса PopupWithForm
popupProfile.setEventListeners();
var popupChangeAvatar = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_5__["default"](".popup_avatar", _utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.avatarForm, handleChangeAvatar); //экземпляр класса PopupWithForm
popupChangeAvatar.setEventListeners();
var api = new _components_Api_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
  url: "https://mesto.nomoreparties.co/v1/cohort-63",
  headers: {
    authorization: "c0d0c8a3-0688-47eb-8a7f-1b2c156d9522",
    "Content-Type": "application/json"
  }
});
Promise.all([api.getUserData(), api.getCards()]).then(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
    resUser = _ref2[0],
    resCards = _ref2[1];
  userId = resUser._id;
  userInformation.setUserInfo(resUser);
  defaultCardList.renderItems(resCards.reverse());
}).catch(function (err) {
  console.log(err.message);
});
_utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.avatarEditButton.addEventListener("click", function () {
  popupChangeAvatar.open();
  avatarValidator.disableSubmitButton();
});
_utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.profileEditButton.addEventListener("click", function () {
  editProfileValidator.resetValidation();
  var dataUser = userInformation.getUserInfo();
  _utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.nameInput.value = dataUser.name;
  _utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.jobInput.value = dataUser.job;
  popupProfile.open();
});
_utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.newPlaceAddButton.addEventListener("click", function () {
  createCardValidator.resetValidation();
  popupPlace.open();
});
popupPlace.setEventListeners();
var editProfileValidator = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_3__["default"](_utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.config, _utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.profileForm);
editProfileValidator.enableValidation();
var createCardValidator = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_3__["default"](_utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.config, _utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.newPlaceForm);
createCardValidator.enableValidation();
var avatarValidator = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_3__["default"](_utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.config, _utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.avatarForm);
avatarValidator.enableValidation();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixFQUFFO0FBQ3RDLElBQU1tSCxlQUFlLEdBQUcsSUFBSXJKLG9FQUFhLENBQUNDLHVEQUFNLEVBQUV1SCwyREFBVSxDQUFDO0FBQzdENkIsZUFBZSxDQUFDbkgsZ0JBQWdCLEVBQUUsQyIsInNvdXJjZXMiOlsid2VicGFjazovL21lc3RvLy4vc3JjL2NvbXBvbmVudHMvQXBpLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL2NvbXBvbmVudHMvQ2FyZC5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9jb21wb25lbnRzL0Zvcm1WYWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvY29tcG9uZW50cy9Qb3B1cC5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9jb21wb25lbnRzL1BvcHVwRGVsZXRlQ29uZmlybS5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9jb21wb25lbnRzL1BvcHVwV2l0aEZvcm0uanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvY29tcG9uZW50cy9Qb3B1cFdpdGhJbWFnZS5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9jb21wb25lbnRzL1NlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvY29tcG9uZW50cy9Vc2VySW5mby5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy91dGlscy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvcGFnZXMvaW5kZXguY3NzIiwid2VicGFjazovL21lc3RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL21lc3RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9tZXN0by93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL21lc3RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvcGFnZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBpIHtcclxuICBjb25zdHJ1Y3Rvcih7IHVybCwgaGVhZGVycyB9KSB7XHJcbiAgICB0aGlzLnVybCA9IHVybDtcclxuICAgIHRoaXMuaGVhZGVycyA9IGhlYWRlcnM7XHJcbiAgICB0aGlzLl90b2tlbiA9IGhlYWRlcnNbXCJhdXRob3JpemF0aW9uXCJdO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q2FyZHMoKSB7XHJcbiAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy51cmx9L2NhcmRzYCwge1xyXG4gICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlcnMsXHJcbiAgICB9KS50aGVuKChyZXMpID0+IHtcclxuICAgICAgcmV0dXJuIHRoaXMuX2NoZWNrUmVzdWx0KHJlcyk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIF9jaGVja1Jlc3VsdChyZXMpIHtcclxuICAgIGlmIChyZXMub2spIHtcclxuICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoYNCe0YjQuNCx0LrQsCAke3Jlcy5zdGF0dXN9YCk7XHJcbiAgfVxyXG5cclxuICBhZGRDYXJkKHsgcGxhY2VuYW1lLCBsaW5rIH0pIHtcclxuICAgIHJldHVybiBmZXRjaChgJHt0aGlzLnVybH0vY2FyZHNgLCB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVycyxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBuYW1lOiBwbGFjZW5hbWUsIGxpbms6IGxpbmsgfSksXHJcbiAgICB9KS50aGVuKChyZXMpID0+IHtcclxuICAgICAgcmV0dXJuIHRoaXMuX2NoZWNrUmVzdWx0KHJlcyk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldFVzZXJEYXRhKCkge1xyXG4gICAgcmV0dXJuIGZldGNoKGAke3RoaXMudXJsfS91c2Vycy9tZWAsIHtcclxuICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlcnMsXHJcbiAgICB9KS50aGVuKChyZXMpID0+IHtcclxuICAgICAgcmV0dXJuIHRoaXMuX2NoZWNrUmVzdWx0KHJlcyk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGVkaXRVc2VyRGF0YSh7IG5hbWUsIGpvYiB9KSB7XHJcbiAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy51cmx9L3VzZXJzL21lYCwge1xyXG4gICAgICBtZXRob2Q6IFwiUEFUQ0hcIixcclxuICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJzLFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IG5hbWU6IG5hbWUsIGFib3V0OiBqb2IgfSksXHJcbiAgICB9KS50aGVuKChyZXMpID0+IHtcclxuICAgICAgcmV0dXJuIHRoaXMuX2NoZWNrUmVzdWx0KHJlcyk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGVkaXRBdmF0YXIoeyBhdmF0YXIgfSkge1xyXG4gICAgcmV0dXJuIGZldGNoKGAke3RoaXMudXJsfS91c2Vycy9tZS9hdmF0YXJgLCB7XHJcbiAgICAgIG1ldGhvZDogXCJQQVRDSFwiLFxyXG4gICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlcnMsXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBhdmF0YXI6IGF2YXRhcixcclxuICAgICAgfSksXHJcbiAgICB9KS50aGVuKChyZXMpID0+IHtcclxuICAgICAgcmV0dXJuIHRoaXMuX2NoZWNrUmVzdWx0KHJlcyk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1dExpa2UoaWQpIHtcclxuICAgIHJldHVybiBmZXRjaChgJHt0aGlzLnVybH0vY2FyZHMvJHtpZH0vbGlrZXNgLCB7XHJcbiAgICAgIG1ldGhvZDogXCJQVVRcIixcclxuICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJzLFxyXG4gICAgfSkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9jaGVja1Jlc3VsdChyZXMpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVMaWtlKGlkKSB7XHJcbiAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy51cmx9L2NhcmRzLyR7aWR9L2xpa2VzYCwge1xyXG4gICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXHJcbiAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVycyxcclxuICAgIH0pLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICByZXR1cm4gdGhpcy5fY2hlY2tSZXN1bHQocmVzKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlQ2FyZChpZCkge1xyXG4gICAgcmV0dXJuIGZldGNoKGAke3RoaXMudXJsfS9jYXJkcy8ke2lkfWAsIHtcclxuICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxyXG4gICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlcnMsXHJcbiAgICB9KS50aGVuKChyZXMpID0+IHtcclxuICAgICAgcmV0dXJuIHRoaXMuX2NoZWNrUmVzdWx0KHJlcyk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiLy9pbXBvcnQgeyBoYW5kbGVDYXJkQ2xpY2sgfSBmcm9tIFwiLi4vcGFnZXMvaW5kZXguanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZCB7XG4gIGNvbnN0cnVjdG9yKGRhdGEsIHVzZXJJZCwgcG9wdXBPcGVuZXIsIGhhbmRsZUxpa2VDbGljaywgaGFuZGxlVHJhc2hDbGljaykge1xuICAgIHRoaXMuX25hbWUgPSBkYXRhLm5hbWU7XG4gICAgdGhpcy5fbGluayA9IGRhdGEubGluaztcbiAgICB0aGlzLl9vd25lcklkID0gZGF0YS5vd25lci5faWQ7XG4gICAgdGhpcy5fbGlrZXMgPSBkYXRhLmxpa2VzO1xuICAgIHRoaXMuaWQgPSBkYXRhLl9pZDtcbiAgICB0aGlzLl9teUlkID0gdXNlcklkO1xuICAgIHRoaXMuX2FsdCA9IGRhdGEubmFtZTtcbiAgICB0aGlzLl90ZW1wbGF0ZUNhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmQtdGVtcGxhdGVcIik7XG4gICAgdGhpcy5fcG9wdXBPcGVuZXIgPSBwb3B1cE9wZW5lcjtcbiAgICB0aGlzLmhhbmRsZUxpa2VDbGljayA9IGhhbmRsZUxpa2VDbGljaztcbiAgICB0aGlzLl9oYW5kbGVUcmFzaENsaWNrID0gaGFuZGxlVHJhc2hDbGljaztcbiAgfVxuXG4gIF9nZXRUZW1wbGF0ZSgpIHtcbiAgICBjb25zdCBjYXJkRWxlbWVudCA9IHRoaXMuX3RlbXBsYXRlQ2FyZC5jb250ZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIi5jYXJkXCIpXG4gICAgICAuY2xvbmVOb2RlKHRydWUpO1xuICAgIHJldHVybiBjYXJkRWxlbWVudDtcbiAgfVxuXG4gIGFkZENhcmQoKSB7XG4gICAgdGhpcy5fZWxlbWVudCA9IHRoaXMuX2dldFRlbXBsYXRlKCk7XG4gICAgdGhpcy5fY2FyZEltYWdlID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX3Bob3RvXCIpO1xuICAgIHRoaXMuX2NhcmRUaXRsZSA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkX190aXRsZVwiKTtcbiAgICB0aGlzLl9jYXJkSW1hZ2Uuc3JjID0gdGhpcy5fbGluaztcbiAgICBjb25zb2xlLmxvZyh0aGlzLl9jYXJkSW1hZ2Uuc3JjKTtcbiAgICB0aGlzLl9jYXJkVGl0bGUudGV4dENvbnRlbnQgPSB0aGlzLl9uYW1lO1xuICAgIHRoaXMuX2NhcmRJbWFnZS5hbHQgPSB0aGlzLl9uYW1lO1xuICAgIHRoaXMuX2xpa2UgPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9fbGlrZVwiKTtcbiAgICB0aGlzLl9saWtlQ291bnRlciA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkX19saWtlY291bnRlclwiKTtcbiAgICB0aGlzLl9jYXJkRGVsZXRlID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX2RlbGV0ZVwiKTtcbiAgICBpZiAodGhpcy5fbXlJZCAhPT0gdGhpcy5fb3duZXJJZCkge1xuICAgICAgdGhpcy5fY2FyZERlbGV0ZS5yZW1vdmUoKTtcbiAgICB9XG4gICAgdGhpcy5zZXRMaWtlcyh0aGlzLl9saWtlcyk7XG5cbiAgICB0aGlzLl9zZXRFdmVudExpc3RlbmVycygpO1xuICAgIHJldHVybiB0aGlzLl9lbGVtZW50O1xuICB9XG5cbiAgX3NldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHRoaXMuX2NhcmREZWxldGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHRoaXMuX2hhbmRsZVRyYXNoQ2xpY2sodGhpcy5pZCwgdGhpcyk7XG4gICAgfSk7XG4gICAgdGhpcy5fY2FyZEltYWdlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICB0aGlzLl9oYW5kbGVJbWFnZUNsaWNrKHRoaXMuX25hbWUsIHRoaXMuX2xpbmspO1xuICAgIH0pO1xuICAgIHRoaXMuX2xpa2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHRoaXMuaGFuZGxlTGlrZUNsaWNrKHRoaXMuaWQsIHRoaXMuX2NoZWNrTGlrZSgpLCB0aGlzKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFkZExpa2UoKSB7XG4gICAgdGhpcy5fbGlrZS5jbGFzc0xpc3QuYWRkKFwiY2FyZF9fbGlrZV90eXBlX2NvbG9yXCIpO1xuICB9XG5cbiAgX2NoZWNrTGlrZSgpIHtcbiAgICBpZiAodGhpcy5fbGlrZXMuc29tZSgobGlrZSkgPT4gbGlrZS5faWQgPT09IHRoaXMuX215SWQpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmVtb3ZlTGlrZSgpIHtcbiAgICB0aGlzLl9saWtlLmNsYXNzTGlzdC5yZW1vdmUoXCJjYXJkX19saWtlX3R5cGVfY29sb3JcIik7XG4gIH1cblxuICBzZXRMaWtlcyhhcnIpIHtcbiAgICB0aGlzLl9saWtlQ291bnRlci50ZXh0Q29udGVudCA9IGFyci5sZW5ndGg7XG4gICAgdGhpcy5fbGlrZXMgPSBhcnI7XG4gICAgaWYgKHRoaXMuX2NoZWNrTGlrZSgpKSB7XG4gICAgICB0aGlzLmFkZExpa2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW1vdmVMaWtlKCk7XG4gICAgfVxuICB9XG5cbiAgX2hhbmRsZUltYWdlQ2xpY2soKSB7XG4gICAgdGhpcy5fcG9wdXBPcGVuZXIodGhpcy5fbmFtZSwgdGhpcy5fbGluayk7XG4gIH1cblxuICByZW1vdmVDYXJkKCkge1xuICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlKCk7XG4gICAgdGhpcy5fZWxlbWVudCA9IG51bGw7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm1WYWxpZGF0b3Ige1xuICBjb25zdHJ1Y3Rvcihjb25maWcsIHNlYXJjaEZvcm0pIHtcbiAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcbiAgICB0aGlzLl9zZWFyY2hGb3JtID0gc2VhcmNoRm9ybTtcbiAgfVxuXG4gIF9hZGRFcnJvck1lc3NhZ2Uoc2VhcmNoSW5wdXQsIGVycm9yTWVzc2FnZSkge1xuICAgIGNvbnN0IGVycm9yQ2xhc3MgPSB0aGlzLl9zZWFyY2hGb3JtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgLnBvcHVwX19pdGVtLWVycm9yX2ZpZWxkXyR7c2VhcmNoSW5wdXQubmFtZX1gXG4gICAgKTtcbiAgICBzZWFyY2hJbnB1dC5jbGFzc0xpc3QuYWRkKHRoaXMuY29uZmlnLmlucHV0RXJyb3JDbGFzcyk7XG4gICAgZXJyb3JDbGFzcy50ZXh0Q29udGVudCA9IGVycm9yTWVzc2FnZTtcbiAgfVxuXG4gIF9kZWxFcnJvck1lc3NhZ2Uoc2VhcmNoSW5wdXQpIHtcbiAgICBjb25zdCBlcnJvckNsYXNzID0gdGhpcy5fc2VhcmNoRm9ybS5xdWVyeVNlbGVjdG9yKFxuICAgICAgYC5wb3B1cF9faXRlbS1lcnJvcl9maWVsZF8ke3NlYXJjaElucHV0Lm5hbWV9YFxuICAgICk7XG4gICAgc2VhcmNoSW5wdXQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNvbmZpZy5pbnB1dEVycm9yQ2xhc3MpO1xuICAgIGVycm9yQ2xhc3MudGV4dENvbnRlbnQgPSBcIlwiO1xuICB9XG5cbiAgX2NoZWNrSW5wdXRWYWxpZGl0eShzZWFyY2hJbnB1dCkge1xuICAgIGlmICghc2VhcmNoSW5wdXQudmFsaWRpdHkudmFsaWQpIHtcbiAgICAgIHRoaXMuX2FkZEVycm9yTWVzc2FnZShzZWFyY2hJbnB1dCwgc2VhcmNoSW5wdXQudmFsaWRhdGlvbk1lc3NhZ2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9kZWxFcnJvck1lc3NhZ2Uoc2VhcmNoSW5wdXQpO1xuICAgIH1cbiAgfVxuXG4gIF9zZXRFdmVudExpc3RlbmVycygpIHtcbiAgICB0aGlzLl9zZWFyY2hTdWJtaXRCdXR0b24gPSB0aGlzLl9zZWFyY2hGb3JtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICB0aGlzLmNvbmZpZy5zZWFyY2hTdWJtaXRCdXR0b25cbiAgICApO1xuICAgIHRoaXMuX2lucHV0TGlzdCA9IEFycmF5LmZyb20oXG4gICAgICB0aGlzLl9zZWFyY2hGb3JtLnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5jb25maWcuc2VhcmNoSW5wdXQpXG4gICAgKTtcbiAgICB0aGlzLl90b2dnbGVCdXR0b25TdGF0ZSh0aGlzLl9pbnB1dExpc3QsIHRoaXMuX3NlYXJjaFN1Ym1pdEJ1dHRvbik7XG4gICAgdGhpcy5faW5wdXRMaXN0LmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xuICAgICAgICB0aGlzLl9jaGVja0lucHV0VmFsaWRpdHkoaW5wdXQpO1xuICAgICAgICB0aGlzLl90b2dnbGVCdXR0b25TdGF0ZSh0aGlzLl9pbnB1dExpc3QsIHRoaXMuX3NlYXJjaFN1Ym1pdEJ1dHRvbik7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIF90b2dnbGVCdXR0b25TdGF0ZSgpIHtcbiAgICBjb25zdCBmb3JtSXNWYWxpZCA9IHRoaXMuX2lucHV0TGlzdC5ldmVyeSgoaXRlbSkgPT4gaXRlbS52YWxpZGl0eS52YWxpZCk7XG5cbiAgICBpZiAoZm9ybUlzVmFsaWQpIHtcbiAgICAgIHRoaXMuZW5hYmxlU3VibWl0QnV0dG9uKHRoaXMuX3NlYXJjaFN1Ym1pdEJ1dHRvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGlzYWJsZVN1Ym1pdEJ1dHRvbih0aGlzLl9zZWFyY2hTdWJtaXRCdXR0b24pO1xuICAgIH1cbiAgfVxuXG4gIGVuYWJsZVN1Ym1pdEJ1dHRvbiA9ICgpID0+IHtcbiAgICB0aGlzLl9zZWFyY2hTdWJtaXRCdXR0b24ucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XG4gICAgdGhpcy5fc2VhcmNoU3VibWl0QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jb25maWcuaW5hY3RpdmVCdXR0b25DbGFzcyk7XG4gIH07XG5cbiAgZGlzYWJsZVN1Ym1pdEJ1dHRvbiA9ICgpID0+IHtcbiAgICB0aGlzLl9zZWFyY2hTdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJkaXNhYmxlZFwiKTtcbiAgICB0aGlzLl9zZWFyY2hTdWJtaXRCdXR0b24uY2xhc3NMaXN0LmFkZCh0aGlzLmNvbmZpZy5pbmFjdGl2ZUJ1dHRvbkNsYXNzKTtcbiAgfTtcblxuICByZXNldFZhbGlkYXRpb24oKSB7XG4gICAgdGhpcy5fdG9nZ2xlQnV0dG9uU3RhdGUodGhpcy5faW5wdXRMaXN0LCB0aGlzLl9zZWFyY2hTdWJtaXRCdXR0b24pOyAvLzw9PSDRg9C/0YDQsNCy0LvRj9C10Lwg0LrQvdC+0L/QutC+0LkgPT1cblxuICAgIHRoaXMuX2lucHV0TGlzdC5mb3JFYWNoKChpbnB1dEVsZW1lbnQpID0+IHtcbiAgICAgIHRoaXMuX2RlbEVycm9yTWVzc2FnZShpbnB1dEVsZW1lbnQpOyAvLzw9PdC+0YfQuNGJ0LDQtdC8INC+0YjQuNCx0LrQuCA9PVxuICAgIH0pO1xuICB9XG5cbiAgZW5hYmxlVmFsaWRhdGlvbigpIHtcbiAgICB0aGlzLl9zZXRFdmVudExpc3RlbmVycygpO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cCB7XHJcbiAgY29uc3RydWN0b3IocG9wdXBTZWxlY3Rvcikge1xyXG4gICAgdGhpcy5fcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHBvcHVwU2VsZWN0b3IpO1xyXG4gICAgdGhpcy5faGFuZGxlRXNjQ2xvc2UgPSB0aGlzLl9oYW5kbGVFc2NDbG9zZS5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgb3BlbigpIHtcclxuICAgIHRoaXMuX3BvcHVwLmNsYXNzTGlzdC5hZGQoXCJwb3B1cF9vcGVuZWRcIik7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLl9oYW5kbGVFc2NDbG9zZSk7XHJcbiAgfVxyXG5cclxuICBfaGFuZGxlRXNjQ2xvc2UoZXZlbnQpIHtcclxuICAgIGlmIChldmVudC5rZXkgPT09IFwiRXNjYXBlXCIpIHtcclxuICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2xvc2UoKSB7XHJcbiAgICB0aGlzLl9wb3B1cC5jbGFzc0xpc3QucmVtb3ZlKFwicG9wdXBfb3BlbmVkXCIpO1xyXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5faGFuZGxlRXNjQ2xvc2UpO1xyXG4gIH1cclxuXHJcbiAgX2Nsb3NlUG9wdXBCeUFyZWEoKSB7XHJcbiAgICB0aGlzLl9wb3B1cC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2dCkgPT4ge1xyXG4gICAgICBpZiAoZXZ0LnRhcmdldCA9PT0gdGhpcy5fcG9wdXApIHtcclxuICAgICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgX2Nsb3NlUG9wdXBCeUNsb3NpbmdJY29uKCkge1xyXG4gICAgdGhpcy5fcG9wdXAucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9fY2xvc2VcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzZXRFdmVudExpc3RlbmVycygpIHtcclxuICAgIHRoaXMuX2Nsb3NlUG9wdXBCeUFyZWEoKTtcclxuICAgIHRoaXMuX2Nsb3NlUG9wdXBCeUNsb3NpbmdJY29uKCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBQb3B1cCBmcm9tIFwiLi9Qb3B1cC5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXBEZWxldGVDb25maXJtIGV4dGVuZHMgUG9wdXAge1xyXG4gIGNvbnN0cnVjdG9yKHBvcHVwU2VsZWN0b3IpIHtcclxuICAgIHN1cGVyKHBvcHVwU2VsZWN0b3IpO1xyXG4gICAgdGhpcy5fYnV0dG9uQ29uZmlybSA9IHRoaXMuX3BvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX3NhdmUtYnV0dG9uXCIpO1xyXG4gIH1cclxuXHJcbiAgc3VibWl0RGVsZXRlKHN1Ym1pdERlbGV0ZSkge1xyXG4gICAgdGhpcy5faGFuZGxlU3VibWl0RGVsZXRlID0gc3VibWl0RGVsZXRlO1xyXG4gIH1cclxuXHJcbiAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICBzdXBlci5zZXRFdmVudExpc3RlbmVycygpO1xyXG4gICAgdGhpcy5fYnV0dG9uQ29uZmlybS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2dCkgPT4ge1xyXG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgdGhpcy5faGFuZGxlU3VibWl0RGVsZXRlKGV2dCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFBvcHVwIGZyb20gXCIuL1BvcHVwLmpzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cFdpdGhGb3JtIGV4dGVuZHMgUG9wdXAge1xyXG4gIGNvbnN0cnVjdG9yKHBvcHVwU2VsZWN0b3IsIGZvcm0sIHN1Ym1pdEZvcm0sIGlucHV0TGlzdCkge1xyXG4gICAgc3VwZXIocG9wdXBTZWxlY3Rvcik7XHJcbiAgICB0aGlzLl9zdWJtaXRGb3JtID0gc3VibWl0Rm9ybTtcclxuICAgIHRoaXMuX2Zvcm0gPSBmb3JtO1xyXG4gICAgdGhpcy5faW5wdXRMaXN0ID0gaW5wdXRMaXN0O1xyXG4gICAgdGhpcy5fYnV0dG9uQ29uZmlybSA9IHRoaXMuX3BvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX3NhdmUtYnV0dG9uXCIpO1xyXG4gICAgdGhpcy5fdGV4dEJ1dHRvbiA9IHRoaXMuX2J1dHRvbkNvbmZpcm0udGV4dENvbnRlbnQ7XHJcbiAgfVxyXG5cclxuICBfZ2V0SW5wdXRWYWx1ZXMoKSB7XHJcbiAgICB0aGlzLl9pbnB1dFZhbHVlcyA9IHt9O1xyXG4gICAgdGhpcy5faW5wdXRMaXN0ID0gQXJyYXkuZnJvbSh0aGlzLl9wb3B1cC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBvcHVwX19maWVsZFwiKSk7XHJcbiAgICB0aGlzLl9pbnB1dExpc3QuZm9yRWFjaChcclxuICAgICAgKGlucHV0KSA9PiAodGhpcy5faW5wdXRWYWx1ZXNbaW5wdXQubmFtZV0gPSBpbnB1dC52YWx1ZSlcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuX2lucHV0VmFsdWVzO1xyXG4gIH1cclxuXHJcbiAgY2xvc2UoKSB7XHJcbiAgICBzdXBlci5jbG9zZSgpO1xyXG4gICAgdGhpcy5fZm9ybS5yZXNldCgpO1xyXG4gIH1cclxuXHJcbiAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICBzdXBlci5zZXRFdmVudExpc3RlbmVycygpO1xyXG4gICAgdGhpcy5fZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChldmVudCkgPT4ge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB0aGlzLl9zdWJtaXRGb3JtKHRoaXMuX2dldElucHV0VmFsdWVzKCkpO1xyXG4gICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlbmRlclNhdmluZyhzdGF0dXMpIHtcclxuICAgIGlmIChzdGF0dXMpIHtcclxuICAgICAgdGhpcy5fYnV0dG9uQ29uZmlybS50ZXh0Q29udGVudCA9IGBD0L7RhdGA0LDQvdC10L3QuNC1Li4uYDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2J1dHRvbkNvbmZpcm0udGV4dENvbnRlbnQgPSB0aGlzLl90ZXh0QnV0dG9uO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUG9wdXAgZnJvbSBcIi4vUG9wdXAuanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwV2l0aEltYWdlIGV4dGVuZHMgUG9wdXAge1xyXG4gIGNvbnN0cnVjdG9yKHBvcHVwU2VsZWN0b3IpIHtcclxuICAgIHN1cGVyKHBvcHVwU2VsZWN0b3IpO1xyXG4gICAgdGhpcy5faW1hZ2UgPSB0aGlzLl9wb3B1cC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19pbWFnZVwiKTtcclxuICAgIHRoaXMuX25hbWUgPSB0aGlzLl9wb3B1cC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX190aXRsZS1pbWFnZVwiKTtcclxuICB9XHJcblxyXG4gIG9wZW4obmFtZSwgaW1hZ2UpIHtcclxuICAgIHRoaXMuX2ltYWdlLnNyYyA9IGltYWdlO1xyXG4gICAgdGhpcy5faW1hZ2UuYWx0ID0gbmFtZTtcclxuICAgIHRoaXMuX25hbWUudGV4dENvbnRlbnQgPSBuYW1lO1xyXG4gICAgc3VwZXIub3BlbigpO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTZWN0aW9uIHtcclxuICBjb25zdHJ1Y3Rvcih7IHJlbmRlcmVyIH0sIGNvbnRhaW5lclNlbGVjdG9yKSB7XHJcbiAgICB0aGlzLl9jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbnRhaW5lclNlbGVjdG9yKTtcclxuICAgIHRoaXMuX3JlbmRlcmVyID0gcmVuZGVyZXI7XHJcbiAgfVxyXG5cclxuICBhZGRJdGVtKGl0ZW0pIHtcclxuICAgIHRoaXMuX2NvbnRhaW5lci5wcmVwZW5kKGl0ZW0pO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVySXRlbXMoY2FyZHMpIHtcclxuICAgIGNhcmRzLmZvckVhY2goKGNhcmQpID0+IHtcclxuICAgICAgdGhpcy5fcmVuZGVyZXIoY2FyZCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlckluZm8ge1xyXG4gIGNvbnN0cnVjdG9yKHVzZXJJbmZvKSB7XHJcbiAgICB0aGlzLl91c2VybmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodXNlckluZm8ubmFtZSk7XHJcbiAgICB0aGlzLl91c2Vyam9iID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih1c2VySW5mby5qb2IpO1xyXG4gICAgdGhpcy5fYXZhdGFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih1c2VySW5mby5hdmF0YXIpO1xyXG4gIH1cclxuXHJcbiAgZ2V0VXNlckluZm8oKSB7XHJcbiAgICBjb25zdCB1c2VyRGF0YSA9IHtcclxuICAgICAgbmFtZTogdGhpcy5fdXNlcm5hbWUudGV4dENvbnRlbnQsXHJcbiAgICAgIGpvYjogdGhpcy5fdXNlcmpvYi50ZXh0Q29udGVudCxcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHVzZXJEYXRhO1xyXG4gIH1cclxuXHJcbiAgc2V0VXNlckluZm8oZGF0YSkge1xyXG4gICAgdGhpcy5fdXNlcm5hbWUudGV4dENvbnRlbnQgPSBkYXRhLm5hbWU7XHJcbiAgICB0aGlzLl91c2Vyam9iLnRleHRDb250ZW50ID0gZGF0YS5hYm91dDtcclxuICAgIHRoaXMuX2F2YXRhci5zcmMgPSBkYXRhLmF2YXRhcjtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IHByb2ZpbGVFZGl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICBcIi5wcm9maWxlX19lZGl0LWJ1dHRvblwiXHJcbik7XHJcbmV4cG9ydCBjb25zdCBhdmF0YXJFZGl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICBcIi5wcm9maWxlX19hdmF0YXItZWRpdGJ1dHRvblwiXHJcbik7XHJcbmV4cG9ydCBjb25zdCBuZXdQbGFjZUFkZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fYWRkLWJ1dHRvblwiKTtcclxuZXhwb3J0IGNvbnN0IHByb2ZpbGVTYXZlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAnYnV0dG9uW25hbWU9XCJidG5TYXZlUHJvZmlsZVwiXSdcclxuKTtcclxuZXhwb3J0IGNvbnN0IG5ld1BsYWNlQ3JlYXRlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAnYnV0dG9uW25hbWU9XCJidG5DcmVhdGVOZXdQbGFjZVwiXSdcclxuKTtcclxuZXhwb3J0IGNvbnN0IHByb2ZpbGVGb3JtID0gZG9jdW1lbnQuZm9ybXMuZm9ybVByb2ZpbGU7XHJcbmV4cG9ydCBjb25zdCBuYW1lSW5wdXQgPSBwcm9maWxlRm9ybS5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwibmFtZVwiXScpO1xyXG5leHBvcnQgY29uc3Qgam9iSW5wdXQgPSBwcm9maWxlRm9ybS5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwibXlzZWxmXCJdJyk7XHJcbmV4cG9ydCBjb25zdCBuZXdQbGFjZUZvcm0gPSBkb2N1bWVudC5mb3Jtcy5mb3JtTmV3UGxhY2U7XHJcbmV4cG9ydCBjb25zdCBuYW1lUGxhY2UgPSBuZXdQbGFjZUZvcm0ucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInBsYWNlLW5hbWVcIl0nKTtcclxuZXhwb3J0IGNvbnN0IGxpbmtQbGFjZSA9IG5ld1BsYWNlRm9ybS5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwicGxhY2UtbGlua1wiXScpO1xyXG5leHBvcnQgY29uc3QgcHJvZmlsZU5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX25hbWVcIik7XHJcbmV4cG9ydCBjb25zdCBwcm9maWxlTXlzZWxmID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19teXNlbGZcIik7XHJcbmV4cG9ydCBjb25zdCBwb3B1cEF2YXRhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfYXZhdGFyXCIpO1xyXG5leHBvcnQgY29uc3QgcG9wdXBFZGl0UHJvZmlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfZWRpdC1wcm9maWxlXCIpO1xyXG5leHBvcnQgY29uc3QgcG9wdXBOZXdQbGFjZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfbmV3LXBsYWNlXCIpO1xyXG5leHBvcnQgY29uc3QgcG9wdXBJbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfaW1hZ2VcIik7XHJcbmV4cG9ydCBjb25zdCBwb3B1cEltYWdlRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX2ltYWdlXCIpO1xyXG5leHBvcnQgY29uc3QgcG9wdXBJbWFnZUVsZW1UaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgXCIucG9wdXBfX3RpdGxlLWltYWdlXCJcclxuKTtcclxuZXhwb3J0IGNvbnN0IHBvcHVwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucG9wdXBcIik7XHJcbmV4cG9ydCBjb25zdCBidXR0b25zQ2xvc2VQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucG9wdXBfX2Nsb3NlXCIpO1xyXG5leHBvcnQgY29uc3QgbGlzdENhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkc19fbGlzdFwiKTtcclxuZXhwb3J0IGNvbnN0IHBvcHVwRGVsZXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9kZWxldGUtY2FyZFwiKTtcclxuZXhwb3J0IGNvbnN0IGF2YXRhckZvcm0gPSBkb2N1bWVudC5mb3Jtcy5mb3JtQXZhdGFyO1xyXG5leHBvcnQgY29uc3QgaW5pdGlhbENhcmRzID0gW1xyXG4gIHtcclxuICAgIG5hbWU6IFwi0JDRgNGF0YvQt1wiLFxyXG4gICAgbGluazogXCJodHRwczovL3BpY3R1cmVzLnMzLnlhbmRleC5uZXQvZnJvbnRlbmQtZGV2ZWxvcGVyL2NhcmRzLWNvbXByZXNzZWQvYXJraHl6LmpwZ1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCLQp9C10LvRj9Cx0LjQvdGB0LrQsNGPINC+0LHQu9Cw0YHRgtGMXCIsXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vcGljdHVyZXMuczMueWFuZGV4Lm5ldC9mcm9udGVuZC1kZXZlbG9wZXIvY2FyZHMtY29tcHJlc3NlZC9jaGVseWFiaW5zay1vYmxhc3QuanBnXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcItCY0LLQsNC90L7QstC+XCIsXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vcGljdHVyZXMuczMueWFuZGV4Lm5ldC9mcm9udGVuZC1kZXZlbG9wZXIvY2FyZHMtY29tcHJlc3NlZC9pdmFub3ZvLmpwZ1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCLQmtCw0LzRh9Cw0YLQutCwXCIsXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vcGljdHVyZXMuczMueWFuZGV4Lm5ldC9mcm9udGVuZC1kZXZlbG9wZXIvY2FyZHMtY29tcHJlc3NlZC9rYW1jaGF0a2EuanBnXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcItCl0L7Qu9C80L7Qs9C+0YDRgdC60LjQuSDRgNCw0LnQvtC9XCIsXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vcGljdHVyZXMuczMueWFuZGV4Lm5ldC9mcm9udGVuZC1kZXZlbG9wZXIvY2FyZHMtY29tcHJlc3NlZC9raG9sbW9nb3Jza3ktcmF5b24uanBnXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcItCR0LDQudC60LDQu1wiLFxyXG4gICAgbGluazogXCJodHRwczovL3BpY3R1cmVzLnMzLnlhbmRleC5uZXQvZnJvbnRlbmQtZGV2ZWxvcGVyL2NhcmRzLWNvbXByZXNzZWQvYmFpa2FsLmpwZ1wiLFxyXG4gIH0sXHJcbl07XHJcbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XHJcbiAgc2VhcmNoRm9ybTogXCIucG9wdXBfX2Zvcm1cIixcclxuICBzZWFyY2hJbnB1dDogXCIucG9wdXBfX2ZpZWxkXCIsXHJcbiAgc2VhcmNoU3VibWl0QnV0dG9uOiBcIi5wb3B1cF9fc2F2ZS1idXR0b25cIixcclxuICBpbmFjdGl2ZUJ1dHRvbkNsYXNzOiBcInBvcHVwX19zYXZlLWJ1dHRvbl9kaXNhYmxlZFwiLFxyXG4gIGlucHV0RXJyb3JDbGFzczogXCJwb3B1cF9faXRlbS1lcnJvcl90eXBlX3Nob3dcIixcclxuICBlcnJvckNsYXNzOiBcIi5wb3B1cF9faXRlbS1lcnJvclwiLFxyXG59O1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4vaW5kZXguY3NzXCI7XG5pbXBvcnQgQXBpIGZyb20gXCIuLi9jb21wb25lbnRzL0FwaS5qc1wiO1xuaW1wb3J0IENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FyZC5qc1wiO1xuaW1wb3J0IEZvcm1WYWxpZGF0b3IgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9ybVZhbGlkYXRvci5qc1wiO1xuaW1wb3J0IFNlY3Rpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VjdGlvbi5qc1wiO1xuaW1wb3J0IFBvcHVwV2l0aEZvcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9wdXBXaXRoRm9ybS5qc1wiO1xuaW1wb3J0IFBvcHVwV2l0aEltYWdlIGZyb20gXCIuLi9jb21wb25lbnRzL1BvcHVwV2l0aEltYWdlLmpzXCI7XG5pbXBvcnQgVXNlckluZm8gZnJvbSBcIi4uL2NvbXBvbmVudHMvVXNlckluZm8uanNcIjtcbmltcG9ydCBQb3B1cERlbGV0ZUNvbmZpcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9wdXBEZWxldGVDb25maXJtLmpzXCI7XG5pbXBvcnQge1xuICBwb3B1cEltYWdlLFxuICBpbml0aWFsQ2FyZHMsXG4gIG5ld1BsYWNlRm9ybSxcbiAgbmV3UGxhY2VBZGRCdXR0b24sXG4gIGxpc3RDYXJkcyxcbiAgcG9wdXBJbWFnZUVsZW0sXG4gIHBvcHVwSW1hZ2VFbGVtVGl0bGUsXG4gIGNvbmZpZyxcbiAgcG9wdXBFZGl0UHJvZmlsZSxcbiAgcG9wdXBOZXdQbGFjZSxcbiAgcHJvZmlsZUVkaXRCdXR0b24sXG4gIG5hbWVJbnB1dCxcbiAgam9iSW5wdXQsXG4gIHByb2ZpbGVGb3JtLFxuICBuYW1lUGxhY2UsXG4gIGxpbmtQbGFjZSxcbiAgcG9wdXBEZWxldGUsXG4gIGF2YXRhckZvcm0sXG4gIHBvcHVwQXZhdGFyLFxuICBhdmF0YXJFZGl0QnV0dG9uLFxufSBmcm9tIFwiLi4vdXRpbHMvY29uc3RhbnRzLmpzXCI7XG5cbmNvbnN0IHBpY3R1cmVPcGVuZWQgPSBuZXcgUG9wdXBXaXRoSW1hZ2UoXCIucG9wdXBfaW1hZ2VcIik7IC8v0Y3QutC30LXQvNC/0LvRj9GAINC60LvQsNGB0YHQsCBQb3B1cFdpdGhJbWFnZVxucGljdHVyZU9wZW5lZC5zZXRFdmVudExpc3RlbmVycygpO1xuXG5leHBvcnQgY29uc3QgaGFuZGxlQ2FyZENsaWNrID0gKG5hbWUsIGltYWdlKSA9PiB7XG4gIHBpY3R1cmVPcGVuZWQub3BlbihuYW1lLCBpbWFnZSk7XG59O1xuXG5mdW5jdGlvbiBoYW5kbGVUcmFzaENsaWNrKGlkLCBjYXJkKSB7XG4gIHBvcHVwRGVsZXRlQ29uZmlybS5zdWJtaXREZWxldGUoKCkgPT4gaGFuZGxlRGVsZXRlQ29uZmlybShpZCwgY2FyZCkpO1xuICBwb3B1cERlbGV0ZUNvbmZpcm0ub3BlbigpO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVEZWxldGVDb25maXJtKGlkLCBjYXJkKSB7XG4gIGFwaVxuICAgIC5kZWxldGVDYXJkKGlkKVxuICAgIC50aGVuKCgpID0+IHtcbiAgICAgIGNhcmQucmVtb3ZlQ2FyZCgpO1xuICAgICAgcG9wdXBEZWxldGVDb25maXJtLmNsb3NlKCk7XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpO1xuICAgIH0pO1xufVxuXG5jb25zdCBkZWZhdWx0Q2FyZExpc3QgPSBuZXcgU2VjdGlvbihcbiAge1xuICAgIGRhdGE6IHt9LFxuICAgIHJlbmRlcmVyOiAoZGF0YSkgPT4ge1xuICAgICAgY29uc3QgY2FyZCA9IGNyZWF0ZUNhcmQoZGF0YSwgdXNlcklkKTtcbiAgICAgIGRlZmF1bHRDYXJkTGlzdC5hZGRJdGVtKGNhcmQpO1xuICAgIH0sXG4gIH0sXG4gIFwiLmNhcmRzX19saXN0XCJcbik7XG5cbmNvbnN0IHBvcHVwRGVsZXRlQ29uZmlybSA9IG5ldyBQb3B1cERlbGV0ZUNvbmZpcm0oXCIucG9wdXBfZGVsZXRlLWNhcmRcIik7XG5wb3B1cERlbGV0ZUNvbmZpcm0uc2V0RXZlbnRMaXN0ZW5lcnMoKTtcblxuZnVuY3Rpb24gY3JlYXRlQ2FyZChkYXRhLCB1c2VySWQpIHtcbiAgY29uc3QgY2FyZCA9IG5ldyBDYXJkKFxuICAgIGRhdGEsXG4gICAgdXNlcklkLFxuICAgIGhhbmRsZUNhcmRDbGljayxcbiAgICBoYW5kbGVMaWtlQ2xpY2ssXG4gICAgaGFuZGxlVHJhc2hDbGlja1xuICApO1xuICBjb25zdCBjYXJkRWxlbWVudCA9IGNhcmQuYWRkQ2FyZCgpO1xuICByZXR1cm4gY2FyZEVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUxpa2VDbGljayhpZCwgaXNMaWtlZCwgY2FyZCkge1xuICBpZiAoaXNMaWtlZCkge1xuICAgIGFwaS5yZW1vdmVMaWtlKGlkKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBjYXJkLnNldExpa2VzKGRhdGEubGlrZXMpO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIGFwaS5wdXRMaWtlKGNhcmQuaWQpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGNhcmQuc2V0TGlrZXMoZGF0YS5saWtlcyk7XG4gICAgfSk7XG4gIH1cbn1cblxubGV0IHVzZXJJZCA9IG51bGw7XG5cbmZ1bmN0aW9uIGNyZWF0ZUNhcmRGb3JtU3VibWl0KGlucHV0VmFsdWVzKSB7XG4gIHBvcHVwUGxhY2UucmVuZGVyU2F2aW5nKHRydWUpO1xuICAvL2NvbnN0IGNhcmQgPSBjcmVhdGVDYXJkKGlucHV0VmFsdWVzW1wicGxhY2UtbmFtZVwiXSwgaW5wdXRWYWx1ZXNbXCJwbGFjZS1saW5rXCJdKTtcbiAgYXBpXG4gICAgLmFkZENhcmQoe1xuICAgICAgcGxhY2VuYW1lOiBpbnB1dFZhbHVlc1tcInBsYWNlLW5hbWVcIl0sXG4gICAgICBsaW5rOiBpbnB1dFZhbHVlc1tcInBsYWNlLWxpbmtcIl0sXG4gICAgfSlcbiAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgY29uc3QgY2FyZCA9IGNyZWF0ZUNhcmQoZGF0YSwgdXNlcklkKTtcbiAgICAgIGRlZmF1bHRDYXJkTGlzdC5hZGRJdGVtKGNhcmQpO1xuICAgICAgcG9wdXBQbGFjZS5jbG9zZSgpO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGVyci5tZXNzYWdlKTtcbiAgICB9KVxuICAgIC5maW5hbGx5KCgpID0+IHtcbiAgICAgIHBvcHVwUGxhY2UucmVuZGVyU2F2aW5nKGZhbHNlKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlUHJvZmlsZUZvcm1TdWJtaXQoaW5wdXRWYWx1ZXMpIHtcbiAgLy91c2VySW5mb3JtYXRpb24uc2V0VXNlckluZm8oaW5wdXRWYWx1ZXNbXCJuYW1lXCJdLCBpbnB1dFZhbHVlc1tcIm15c2VsZlwiXSk7XG4gIHBvcHVwUHJvZmlsZS5yZW5kZXJTYXZpbmcodHJ1ZSk7XG4gIGFwaVxuICAgIC5lZGl0VXNlckRhdGEoeyBuYW1lOiBpbnB1dFZhbHVlc1tcIm5hbWVcIl0sIGpvYjogaW5wdXRWYWx1ZXNbXCJteXNlbGZcIl0gfSlcbiAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgdXNlckluZm9ybWF0aW9uLnNldFVzZXJJbmZvKGRhdGEpO1xuICAgICAgcG9wdXBQcm9maWxlLmNsb3NlKCk7XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpO1xuICAgIH0pXG4gICAgLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgcG9wdXBQcm9maWxlLnJlbmRlclNhdmluZyhmYWxzZSk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUNoYW5nZUF2YXRhcihpbnB1dFZhbHVlcykge1xuICBwb3B1cENoYW5nZUF2YXRhci5yZW5kZXJTYXZpbmcodHJ1ZSk7XG4gIGFwaVxuICAgIC5lZGl0QXZhdGFyKGlucHV0VmFsdWVzKVxuICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgIHVzZXJJbmZvcm1hdGlvbi5zZXRVc2VySW5mbyhkYXRhKTtcbiAgICAgIHBvcHVwQ2hhbmdlQXZhdGFyLmNsb3NlKCk7XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpO1xuICAgIH0pXG4gICAgLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgcG9wdXBDaGFuZ2VBdmF0YXIucmVuZGVyU2F2aW5nKGZhbHNlKTtcbiAgICB9KTtcbn1cblxuY29uc3QgdXNlckluZm9ybWF0aW9uID0gbmV3IFVzZXJJbmZvKHtcbiAgbmFtZTogXCIucHJvZmlsZV9fbmFtZVwiLFxuICBqb2I6IFwiLnByb2ZpbGVfX215c2VsZlwiLFxuICBhdmF0YXI6IFwiLnByb2ZpbGVfX2F2YXRhclwiLFxufSk7XG5cbmNvbnN0IHBvcHVwUGxhY2UgPSBuZXcgUG9wdXBXaXRoRm9ybShcbiAgXCIucG9wdXBfbmV3LXBsYWNlXCIsXG4gIG5ld1BsYWNlRm9ybSxcbiAgY3JlYXRlQ2FyZEZvcm1TdWJtaXRcbik7IC8v0Y3QutC30LXQvNC/0LvRj9GAINC60LvQsNGB0YHQsCBQb3B1cFdpdGhGb3JtXG5cbmNvbnN0IHBvcHVwUHJvZmlsZSA9IG5ldyBQb3B1cFdpdGhGb3JtKFxuICBcIi5wb3B1cF9lZGl0LXByb2ZpbGVcIixcbiAgcHJvZmlsZUZvcm0sXG4gIGhhbmRsZVByb2ZpbGVGb3JtU3VibWl0XG4pOyAvL9GN0LrQt9C10LzQv9C70Y/RgCDQutC70LDRgdGB0LAgUG9wdXBXaXRoRm9ybVxucG9wdXBQcm9maWxlLnNldEV2ZW50TGlzdGVuZXJzKCk7XG5cbmNvbnN0IHBvcHVwQ2hhbmdlQXZhdGFyID0gbmV3IFBvcHVwV2l0aEZvcm0oXG4gIFwiLnBvcHVwX2F2YXRhclwiLFxuICBhdmF0YXJGb3JtLFxuICBoYW5kbGVDaGFuZ2VBdmF0YXJcbik7IC8v0Y3QutC30LXQvNC/0LvRj9GAINC60LvQsNGB0YHQsCBQb3B1cFdpdGhGb3JtXG5wb3B1cENoYW5nZUF2YXRhci5zZXRFdmVudExpc3RlbmVycygpO1xuXG5jb25zdCBhcGkgPSBuZXcgQXBpKHtcbiAgdXJsOiBgaHR0cHM6Ly9tZXN0by5ub21vcmVwYXJ0aWVzLmNvL3YxL2NvaG9ydC02M2AsXG4gIGhlYWRlcnM6IHtcbiAgICBhdXRob3JpemF0aW9uOiBcImMwZDBjOGEzLTA2ODgtNDdlYi04YTdmLTFiMmMxNTZkOTUyMlwiLFxuICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICB9LFxufSk7XG5cblByb21pc2UuYWxsKFthcGkuZ2V0VXNlckRhdGEoKSwgYXBpLmdldENhcmRzKCldKVxuICAudGhlbigoW3Jlc1VzZXIsIHJlc0NhcmRzXSkgPT4ge1xuICAgIHVzZXJJZCA9IHJlc1VzZXIuX2lkO1xuICAgIHVzZXJJbmZvcm1hdGlvbi5zZXRVc2VySW5mbyhyZXNVc2VyKTtcbiAgICBkZWZhdWx0Q2FyZExpc3QucmVuZGVySXRlbXMocmVzQ2FyZHMucmV2ZXJzZSgpKTtcbiAgfSlcbiAgLmNhdGNoKChlcnIpID0+IHtcbiAgICBjb25zb2xlLmxvZyhlcnIubWVzc2FnZSk7XG4gIH0pO1xuXG5hdmF0YXJFZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIHBvcHVwQ2hhbmdlQXZhdGFyLm9wZW4oKTtcbiAgYXZhdGFyVmFsaWRhdG9yLmRpc2FibGVTdWJtaXRCdXR0b24oKTtcbn0pO1xuXG5wcm9maWxlRWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICBlZGl0UHJvZmlsZVZhbGlkYXRvci5yZXNldFZhbGlkYXRpb24oKTtcbiAgY29uc3QgZGF0YVVzZXIgPSB1c2VySW5mb3JtYXRpb24uZ2V0VXNlckluZm8oKTtcbiAgbmFtZUlucHV0LnZhbHVlID0gZGF0YVVzZXIubmFtZTtcbiAgam9iSW5wdXQudmFsdWUgPSBkYXRhVXNlci5qb2I7XG4gIHBvcHVwUHJvZmlsZS5vcGVuKCk7XG59KTtcblxubmV3UGxhY2VBZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgY3JlYXRlQ2FyZFZhbGlkYXRvci5yZXNldFZhbGlkYXRpb24oKTtcbiAgcG9wdXBQbGFjZS5vcGVuKCk7XG59KTtcbnBvcHVwUGxhY2Uuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcblxuY29uc3QgZWRpdFByb2ZpbGVWYWxpZGF0b3IgPSBuZXcgRm9ybVZhbGlkYXRvcihjb25maWcsIHByb2ZpbGVGb3JtKTtcbmVkaXRQcm9maWxlVmFsaWRhdG9yLmVuYWJsZVZhbGlkYXRpb24oKTtcbmNvbnN0IGNyZWF0ZUNhcmRWYWxpZGF0b3IgPSBuZXcgRm9ybVZhbGlkYXRvcihjb25maWcsIG5ld1BsYWNlRm9ybSk7XG5jcmVhdGVDYXJkVmFsaWRhdG9yLmVuYWJsZVZhbGlkYXRpb24oKTtcbmNvbnN0IGF2YXRhclZhbGlkYXRvciA9IG5ldyBGb3JtVmFsaWRhdG9yKGNvbmZpZywgYXZhdGFyRm9ybSk7XG5hdmF0YXJWYWxpZGF0b3IuZW5hYmxlVmFsaWRhdGlvbigpO1xuIl0sIm5hbWVzIjpbIkFwaSIsIl9yZWYiLCJ1cmwiLCJoZWFkZXJzIiwiX2NsYXNzQ2FsbENoZWNrIiwiX3Rva2VuIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJnZXRDYXJkcyIsIl90aGlzIiwiZmV0Y2giLCJjb25jYXQiLCJ0aGVuIiwicmVzIiwiX2NoZWNrUmVzdWx0Iiwib2siLCJqc29uIiwiUHJvbWlzZSIsInJlamVjdCIsInN0YXR1cyIsImFkZENhcmQiLCJfcmVmMiIsIl90aGlzMiIsInBsYWNlbmFtZSIsImxpbmsiLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm5hbWUiLCJnZXRVc2VyRGF0YSIsIl90aGlzMyIsImVkaXRVc2VyRGF0YSIsIl9yZWYzIiwiX3RoaXM0Iiwiam9iIiwiYWJvdXQiLCJlZGl0QXZhdGFyIiwiX3JlZjQiLCJfdGhpczUiLCJhdmF0YXIiLCJwdXRMaWtlIiwiaWQiLCJfdGhpczYiLCJyZW1vdmVMaWtlIiwiX3RoaXM3IiwiZGVsZXRlQ2FyZCIsIl90aGlzOCIsImRlZmF1bHQiLCJDYXJkIiwiZGF0YSIsInVzZXJJZCIsInBvcHVwT3BlbmVyIiwiaGFuZGxlTGlrZUNsaWNrIiwiaGFuZGxlVHJhc2hDbGljayIsIl9uYW1lIiwiX2xpbmsiLCJfb3duZXJJZCIsIm93bmVyIiwiX2lkIiwiX2xpa2VzIiwibGlrZXMiLCJfbXlJZCIsIl9hbHQiLCJfdGVtcGxhdGVDYXJkIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiX3BvcHVwT3BlbmVyIiwiX2hhbmRsZVRyYXNoQ2xpY2siLCJfZ2V0VGVtcGxhdGUiLCJjYXJkRWxlbWVudCIsImNvbnRlbnQiLCJjbG9uZU5vZGUiLCJfZWxlbWVudCIsIl9jYXJkSW1hZ2UiLCJfY2FyZFRpdGxlIiwic3JjIiwiY29uc29sZSIsImxvZyIsInRleHRDb250ZW50IiwiYWx0IiwiX2xpa2UiLCJfbGlrZUNvdW50ZXIiLCJfY2FyZERlbGV0ZSIsInJlbW92ZSIsInNldExpa2VzIiwiX3NldEV2ZW50TGlzdGVuZXJzIiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9oYW5kbGVJbWFnZUNsaWNrIiwiX2NoZWNrTGlrZSIsImFkZExpa2UiLCJjbGFzc0xpc3QiLCJhZGQiLCJzb21lIiwibGlrZSIsImFyciIsImxlbmd0aCIsInJlbW92ZUNhcmQiLCJGb3JtVmFsaWRhdG9yIiwiY29uZmlnIiwic2VhcmNoRm9ybSIsIl9kZWZpbmVQcm9wZXJ0eSIsIl9zZWFyY2hTdWJtaXRCdXR0b24iLCJyZW1vdmVBdHRyaWJ1dGUiLCJpbmFjdGl2ZUJ1dHRvbkNsYXNzIiwic2V0QXR0cmlidXRlIiwiX3NlYXJjaEZvcm0iLCJfYWRkRXJyb3JNZXNzYWdlIiwic2VhcmNoSW5wdXQiLCJlcnJvck1lc3NhZ2UiLCJlcnJvckNsYXNzIiwiaW5wdXRFcnJvckNsYXNzIiwiX2RlbEVycm9yTWVzc2FnZSIsIl9jaGVja0lucHV0VmFsaWRpdHkiLCJ2YWxpZGl0eSIsInZhbGlkIiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJzZWFyY2hTdWJtaXRCdXR0b24iLCJfaW5wdXRMaXN0IiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsIl90b2dnbGVCdXR0b25TdGF0ZSIsImZvckVhY2giLCJpbnB1dCIsImZvcm1Jc1ZhbGlkIiwiZXZlcnkiLCJpdGVtIiwiZW5hYmxlU3VibWl0QnV0dG9uIiwiZGlzYWJsZVN1Ym1pdEJ1dHRvbiIsInJlc2V0VmFsaWRhdGlvbiIsImlucHV0RWxlbWVudCIsImVuYWJsZVZhbGlkYXRpb24iLCJQb3B1cCIsInBvcHVwU2VsZWN0b3IiLCJfcG9wdXAiLCJfaGFuZGxlRXNjQ2xvc2UiLCJiaW5kIiwib3BlbiIsImV2ZW50IiwiY2xvc2UiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiX2Nsb3NlUG9wdXBCeUFyZWEiLCJldnQiLCJ0YXJnZXQiLCJfY2xvc2VQb3B1cEJ5Q2xvc2luZ0ljb24iLCJzZXRFdmVudExpc3RlbmVycyIsIlBvcHVwRGVsZXRlQ29uZmlybSIsIl9Qb3B1cCIsIl9pbmhlcml0cyIsIl9zdXBlciIsIl9jcmVhdGVTdXBlciIsImNhbGwiLCJfYnV0dG9uQ29uZmlybSIsInN1Ym1pdERlbGV0ZSIsIl9oYW5kbGVTdWJtaXREZWxldGUiLCJfZ2V0IiwiX2dldFByb3RvdHlwZU9mIiwicHJvdG90eXBlIiwicHJldmVudERlZmF1bHQiLCJQb3B1cFdpdGhGb3JtIiwiZm9ybSIsInN1Ym1pdEZvcm0iLCJpbnB1dExpc3QiLCJfc3VibWl0Rm9ybSIsIl9mb3JtIiwiX3RleHRCdXR0b24iLCJfZ2V0SW5wdXRWYWx1ZXMiLCJfaW5wdXRWYWx1ZXMiLCJyZXNldCIsInJlbmRlclNhdmluZyIsIlBvcHVwV2l0aEltYWdlIiwiX2ltYWdlIiwiaW1hZ2UiLCJTZWN0aW9uIiwiY29udGFpbmVyU2VsZWN0b3IiLCJyZW5kZXJlciIsIl9jb250YWluZXIiLCJfcmVuZGVyZXIiLCJhZGRJdGVtIiwicHJlcGVuZCIsInJlbmRlckl0ZW1zIiwiY2FyZHMiLCJjYXJkIiwiVXNlckluZm8iLCJ1c2VySW5mbyIsIl91c2VybmFtZSIsIl91c2Vyam9iIiwiX2F2YXRhciIsImdldFVzZXJJbmZvIiwidXNlckRhdGEiLCJzZXRVc2VySW5mbyIsInByb2ZpbGVFZGl0QnV0dG9uIiwiYXZhdGFyRWRpdEJ1dHRvbiIsIm5ld1BsYWNlQWRkQnV0dG9uIiwicHJvZmlsZVNhdmVCdXR0b24iLCJuZXdQbGFjZUNyZWF0ZUJ1dHRvbiIsInByb2ZpbGVGb3JtIiwiZm9ybXMiLCJmb3JtUHJvZmlsZSIsIm5hbWVJbnB1dCIsImpvYklucHV0IiwibmV3UGxhY2VGb3JtIiwiZm9ybU5ld1BsYWNlIiwibmFtZVBsYWNlIiwibGlua1BsYWNlIiwicHJvZmlsZU5hbWUiLCJwcm9maWxlTXlzZWxmIiwicG9wdXBBdmF0YXIiLCJwb3B1cEVkaXRQcm9maWxlIiwicG9wdXBOZXdQbGFjZSIsInBvcHVwSW1hZ2UiLCJwb3B1cEltYWdlRWxlbSIsInBvcHVwSW1hZ2VFbGVtVGl0bGUiLCJwb3B1cHMiLCJidXR0b25zQ2xvc2VQb3B1cCIsImxpc3RDYXJkcyIsInBvcHVwRGVsZXRlIiwiYXZhdGFyRm9ybSIsImZvcm1BdmF0YXIiLCJpbml0aWFsQ2FyZHMiLCJwaWN0dXJlT3BlbmVkIiwiaGFuZGxlQ2FyZENsaWNrIiwicG9wdXBEZWxldGVDb25maXJtIiwiaGFuZGxlRGVsZXRlQ29uZmlybSIsImFwaSIsImNhdGNoIiwiZXJyIiwibWVzc2FnZSIsImRlZmF1bHRDYXJkTGlzdCIsImNyZWF0ZUNhcmQiLCJpc0xpa2VkIiwiY3JlYXRlQ2FyZEZvcm1TdWJtaXQiLCJpbnB1dFZhbHVlcyIsInBvcHVwUGxhY2UiLCJmaW5hbGx5IiwiaGFuZGxlUHJvZmlsZUZvcm1TdWJtaXQiLCJwb3B1cFByb2ZpbGUiLCJ1c2VySW5mb3JtYXRpb24iLCJoYW5kbGVDaGFuZ2VBdmF0YXIiLCJwb3B1cENoYW5nZUF2YXRhciIsImF1dGhvcml6YXRpb24iLCJhbGwiLCJfc2xpY2VkVG9BcnJheSIsInJlc1VzZXIiLCJyZXNDYXJkcyIsInJldmVyc2UiLCJhdmF0YXJWYWxpZGF0b3IiLCJlZGl0UHJvZmlsZVZhbGlkYXRvciIsImRhdGFVc2VyIiwiY3JlYXRlQ2FyZFZhbGlkYXRvciJdLCJzb3VyY2VSb290IjoiIn0=