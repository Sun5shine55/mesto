//import { handleCardClick } from "../pages/index.js";

export default class Card {
  constructor(data, userId, popupOpener, handleLikeClick, handleTrashClick) {
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

  _getTemplate() {
    const cardElement = this._templateCard.content
      .querySelector(".card")
      .cloneNode(true);
    return cardElement;
  }

  addCard() {
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

  _setEventListeners() {
    this._cardDelete.addEventListener("click", () => {
      this._handleTrashClick(this.id, this);
    });
    this._cardImage.addEventListener("click", () => {
      this._handleImageClick(this._name, this._link);
    });
    this._like.addEventListener("click", () => {
      this.handleLikeClick(this.id, this._checkLike(), this);
    });
  }

  addLike() {
    this._like.classList.add("card__like_type_color");
  }

  _checkLike() {
    if (this._likes.some((like) => like._id === this._myId)) {
      return true;
    }
    return false;
  }

  removeLike() {
    this._like.classList.remove("card__like_type_color");
  }

  setLikes(arr) {
    this._likeCounter.textContent = arr.length;
    this._likes = arr;
    if (this._checkLike()) {
      this.addLike();
    } else {
      this.removeLike();
    }
  }

  _handleImageClick() {
    this._popupOpener(this._name, this._link);
  }

  removeCard() {
    this._element.remove();
    this._element = null;
  }
}
