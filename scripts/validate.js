const addErrorMessage = (formSelector, inputSelector, errorMessage, config) => {
  const errorClass = formSelector.querySelector(`.popup__item-error_field_${inputSelector.name}`);
  inputSelector.classList.add(config.inputErrorClass);
  errorClass.textContent = errorMessage;
};
  
const delErrorMessage = (formSelector, inputSelector, config) => {
  const errorClass = formSelector.querySelector(`.popup__item-error_field_${inputSelector.name}`);
  inputSelector.classList.remove(config.inputErrorClass);
  errorClass.textContent = '';
};
  
const checkInputValidity = (formSelector, inputSelector, config) => {
  if (!inputSelector.validity.valid) {
    addErrorMessage(formSelector, inputSelector, inputSelector.validationMessage, config);
  }
  else {
    delErrorMessage(formSelector, inputSelector, config);
  }
};
   
const setEventListeners = (formSelector, config) => {
  const submitButton = formSelector.querySelector(config.submitButtonSelector)
  const inputList = Array.from(formSelector.querySelectorAll(config.inputSelector));
  toggleButtonState(inputList, submitButton, config);
  inputList.forEach((input) => {input.addEventListener('input', () => {
      checkInputValidity(formSelector, input, config);
      toggleButtonState(inputList, submitButton, config);
    });
  });
}
  
function toggleButtonState(inputList, submitButtonSelector, config) {
  const formIsValid = inputList.every((item) => item.validity.valid);
  
  if (formIsValid) {
    submitButtonSelector.classList.remove(config.inactiveButtonClass);
    submitButtonSelector.removeAttribute("disabled");
  } else {
    submitButtonSelector.classList.add(config.inactiveButtonClass);
    submitButtonSelector.setAttribute("disabled", "disabled");
  }
};
  
function enableValidation (config) {
    
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formSelector) => {  
      setEventListeners(formSelector, config);
  });
}
  
const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__field',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__item-error_type_show',
  errorClass: '.popup__item-error',
}
  
  
enableValidation(config);