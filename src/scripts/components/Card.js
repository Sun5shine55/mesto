import { handleCardClick } from "../../index.js"

export default class Card {
    constructor({name, link}) {
        this._name = name;
        this._link = link;
        this._alt = name;
        this._templateCard = document.querySelector('.card-template');
        this._handleCardClick = handleCardClick;
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
            this._handleCardClick(this._name, this._link);
        });
        this._toggleLikebutton();
        this._cardDelete.addEventListener('click', () => {
            this._removeCard();
        });
    }

    _toggleLikebutton() {
        this._cardLike = this._element.querySelector('.card__like');
        this._cardLike.addEventListener('click', function (event) {
            event.target.classList.toggle('card__like_type_color');
        });
    }

    _removeCard() {
        this._element.remove();
    }
}

