import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, form, submitForm, inputList) {
        super(popupSelector);
        this._submitForm = submitForm;
        this._form = form;
        this._inputList = inputList;
    }

    _getInputValues() {
        this._inputValues = {}
        this._inputList = Array.from(this._popup.querySelectorAll('.popup__field'))
        this._inputList.forEach((input) =>
            (this._inputValues[input.name] = input.value))

        return this._inputValues;
    }

    close() {
        super.close()
        this._form.reset()
    }


    setEventListeners() {
        super.setEventListeners()
        this._form.addEventListener('submit', (event) => {
            event.preventDefault()
            this._submitForm(this._getInputValues())
            this.close()
        })
    }
}