export default class FormValidator {
    constructor(config, searchForm, searchSubmitButton, inputList) {
        this.config = config;
        this._searchForm = searchForm;
        this._searchSubmitButton = searchSubmitButton;
        this._inputList = inputList;
    }

    _addErrorMessage (searchInput, errorMessage) {
        const errorClass = this._searchForm.querySelector(`.popup__item-error_field_${searchInput.name}`);
        searchInput.classList.add(this.config.inputErrorClass);
        errorClass.textContent = errorMessage;
    };

    _delErrorMessage (searchInput) {
        const errorClass = this._searchForm.querySelector(`.popup__item-error_field_${searchInput.name}`);
        searchInput.classList.remove(this.config.inputErrorClass);
        errorClass.textContent = '';
    };

    _checkInputValidity (searchInput) {
        if (!searchInput.validity.valid) {
            this._addErrorMessage(searchInput, searchInput.validationMessage);
        }
        else {
            this._delErrorMessage(searchInput);
        }
    };

    _setEventListeners() {
        this._searchSubmitButton = this._searchForm.querySelector(this.config.searchSubmitButton);
        this._inputList = Array.from(this._searchForm.querySelectorAll(this.config.searchInput));
        this._toggleButtonState(this._inputList, this._searchSubmitButton);
        this._inputList.forEach((input) => {
            input.addEventListener('input', () => {
                this._checkInputValidity(input);
                this._toggleButtonState(this._inputList, this._searchSubmitButton);
            });
        });
    }

    _toggleButtonState(inputList, searchSubmitButton) {
        const formIsValid = inputList.every((item) => item.validity.valid);

        if (formIsValid) {
            searchSubmitButton.classList.remove(this.config.inactiveButtonClass);
            searchSubmitButton.removeAttribute("disabled");
        } else {
            searchSubmitButton.classList.add(this.config.inactiveButtonClass);
            searchSubmitButton.setAttribute("disabled", "disabled");
        }
    }

    resetValidation() {
        this._toggleButtonState(); //<== управляем кнопкой ==
  
        this._inputList.forEach((inputElement) => {
          this._delErrorMessage(inputElement) //<==очищаем ошибки ==
        });
  
    }

    enableValidation() {
        this._setEventListeners();
    }
}

  
  
