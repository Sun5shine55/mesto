import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitForm) {
    super(popupSelector);
    this._submitForm = submitForm;
    this._form = this._popup.querySelector("form[name]");
    this._inputList = Array.from(this._popup.querySelectorAll(".popup__field"));
    this._buttonConfirm = this._popup.querySelector(".popup__save-button");
    this._textButton = this._buttonConfirm.textContent;
  }

  _getInputValues() {
    this._inputValues = {};
    //this._inputList = Array.from(this._popup.querySelectorAll(".popup__field"));
    this._inputList.forEach(
      (input) => (this._inputValues[input.name] = input.value)
    );

    return this._inputValues;
  }

  close() {
    super.close();
    this._form.reset();
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (event) => {
      event.preventDefault();
      this._submitForm(this._getInputValues());
    });
  }

  renderSaving(status) {
    if (status) {
      this._buttonConfirm.textContent = `Cохранение...`;
    } else {
      this._buttonConfirm.textContent = this._textButton;
    }
  }
}
