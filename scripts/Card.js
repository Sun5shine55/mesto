import {popupImage, popupImageElem, popupImageElemTitle } from "./index.js"
import {openPopup} from "./index.js"

export default class Card {
    constructor(data, templateSelector) {
        this._title = data.title;
        this._link = data.link;
        this._templateSelector = templateSelector;
    }
  
    _getTemplate() {
        const cardElement = document.querySelector('.card-template').content.querySelector('.card').cloneNode(true);
        return cardElement;
    }
  
    addCard() {
        this._element = this._getTemplate();
        this._setEventListeners();
        this._element.querySelector('.card__photo').src = this._link;
        this._element.querySelector('.card__title').textContent = this._title;
        return this._element;
    }
  
    _setEventListeners() {
        this._element.querySelector('.card__photo').addEventListener('click', () => {
        this._handleOpenPopup();
        });
        this._toggleLikebutton();
        this._element.querySelector('.card__delete').addEventListener('click', () => {
        this._removeCard (); 
        });
    }
    
  
    _handleOpenPopup() {
        popupImageElem.src = this._link;
        popupImageElemTitle.textContent = this._title;
        openPopup(popupImage);
    }
  
    _handleClosePopup() {
        closePopup(popupImage);
    }
  
    _toggleLikebutton() {
        this._element.querySelector('.card__like').addEventListener('click', function (evt) {
        evt.target.classList.toggle('card__like_type_color');
        });
    }
  
    _removeCard () {
        this._element.remove();
    }
}

