import Popup from "./Popup.js";

export default class PopupDeleteConfirm extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._buttonConfirm = this._popup.querySelector(".popup__save-button");
  }

  submitDelete(submitDelete) {
    this._handleSubmitDelete = submitDelete;
  }

  setEventListeners() {
    super.setEventListeners();
    this._buttonConfirm.addEventListener("click", (evt) => {
      evt.preventDefault();
      this._handleSubmitDelete(evt);
    });
  }
}
