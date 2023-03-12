export default class FormValidator {
    constructor(config, formSelector, submitButtonSelector, inputList) {
        this.config = config;
        this._formSelector = formSelector;
        this._submitButtonSelector = submitButtonSelector;
        this._inputList = inputList;
    }

    _addErrorMessage (inputSelector, errorMessage) {
        const errorClass = this._formSelector.querySelector(`.popup__item-error_field_${inputSelector.name}`);
        inputSelector.classList.add(this.config.inputErrorClass);
        errorClass.textContent = errorMessage;
    };

    _delErrorMessage (inputSelector) {
        const errorClass = this._formSelector.querySelector(`.popup__item-error_field_${inputSelector.name}`);
        inputSelector.classList.remove(this.config.inputErrorClass);
        errorClass.textContent = '';
    };

    _checkInputValidity (inputSelector) {
        if (!inputSelector.validity.valid) {
            this._addErrorMessage(inputSelector, inputSelector.validationMessage);
        }
        else {
            this._delErrorMessage(inputSelector);
        }
    };

    _setEventListeners() {
        this._submitButtonSelector = this._formSelector.querySelector(this.config.submitButtonSelector);
        this._inputList = Array.from(this._formSelector.querySelectorAll(this.config.inputSelector));
        this._toggleButtonState(this._inputList, this._submitButtonSelector);
        this._inputList.forEach((input) => {
            input.addEventListener('input', () => {
                this._checkInputValidity(input);
                this._toggleButtonState(this._inputList, this._submitButtonSelector);
            });
        });
    }

    _toggleButtonState(inputList, submitButtonSelector) {
        const formIsValid = inputList.every((item) => item.validity.valid);

        if (formIsValid) {
            submitButtonSelector.classList.remove(this.config.inactiveButtonClass);
            submitButtonSelector.removeAttribute("disabled");
        } else {
            submitButtonSelector.classList.add(this.config.inactiveButtonClass);
            submitButtonSelector.setAttribute("disabled", "disabled");
        }
    }

    enableValidation() {
        this._setEventListeners(this._formSelector, this.config);
    }
}

  
  
