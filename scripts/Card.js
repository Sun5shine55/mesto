import { popupImage, popupImageElem, popupImageElemTitle } from "./index.js"
import { openPopup } from "./index.js"

export default class Card {
    constructor(data) {
        this._name = data.name;
        this._link = data.link;
        this._alt = data.name;
        this._templateCard = document.querySelector('.card-template');
    }

    _getTemplate() {
        const cardElement = this._templateCard.content.querySelector('.card').cloneNode(true);
        return cardElement;
    }

    addCard() {
        this._element = this._getTemplate();
        this._cardImage = this._element.querySelector('.card__photo');
        this._cardTitle = this._element.querySelector('.card__title');
        this._cardImage.src = this._link;
        this._cardTitle.textContent = this._name;
        this._cardImage.alt = this._name;
        this._setEventListeners();
        return this._element;
    }

    _setEventListeners() {
        this._cardDelete = this._element.querySelector('.card__delete');
        this._cardImage.addEventListener('click', () => {
            this._handleOpenPopup();
        });
        this._toggleLikebutton();
        this._cardDelete.addEventListener('click', () => {
            this._removeCard();
        });
    }

    _handleOpenPopup() {
        popupImageElem.src = this._link;
        popupImageElem.alt = this._name;
        popupImageElemTitle.textContent = this._name;
        openPopup(popupImage);
    }

    _toggleLikebutton() {
        this._cardLike = this._element.querySelector('.card__like');
        this._cardLike.addEventListener('click', function (evt) {
            evt.target.classList.toggle('card__like_type_color');
        });
    }

    _removeCard() {
        this._element.remove();
    }
}

