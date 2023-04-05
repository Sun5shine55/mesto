import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector, image, name) {
        super(popupSelector);
        this._popup = popupSelector;
        this._name = name;
        this._image = image;
    }

    open(name, image) {
        this._image.src = image;
        this._image.alt = name;
        this._name.textContent = name;
        super.open();
    }

}