import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._image = this._popup.querySelector(".popup__image");
    this._name = this._popup.querySelector(".popup__title-image");
  }

  open(name, image) {
    this._image.src = image;
    this._image.alt = name;
    this._name.textContent = name;
    super.open();
  }
}
