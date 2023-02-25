const addErrorMessage = (formSelector, inputSelector, errorMessage) => {
  const errorClass = formSelector.querySelector(`.popup__item-error_field_${inputSelector.name}`);
  inputSelector.classList.add(config.inputErrorClass);
  errorClass.textContent = errorMessage;
};
  
const delErrorMessage = (formSelector, inputSelector) => {
  const errorClass = formSelector.querySelector(`.popup__item-error_field_${inputSelector.name}`);
  inputSelector.classList.remove(config.inputErrorClass);
  errorClass.textContent = '';
};
  
const checkInputValidity = (formSelector, inputSelector) => {
  if (!inputSelector.validity.valid) {
    addErrorMessage(formSelector, inputSelector, inputSelector.validationMessage)
  }
  else {
    delErrorMessage(formSelector, inputSelector)
  }
};
   
const setEventListeners = (formSelector, config) => {
  const submitButton = formSelector.querySelector(config.submitButtonSelector)
  const inputList = Array.from(formSelector.querySelectorAll(config.inputSelector));
  toggleButtonState(inputList, submitButton);
  inputList.forEach((input) => {input.addEventListener('input', () => {
      checkInputValidity(formSelector, input);
      toggleButtonState(inputList, submitButton);
    });
  });
}
  
function toggleButtonState(inputList, submitButtonSelector) {
  const formIsValid = inputList.every((item) => item.validity.valid);
  
  if (formIsValid) {
    submitButtonSelector.classList.remove(config.inactiveButtonClass);
    submitButtonSelector.removeAttribute("disabled")
  } else {
    submitButtonSelector.classList.add(config.inactiveButtonClass);
    submitButtonSelector.setAttribute("disabled", "disabled");
  }
};
  
function enableValidation (config) {
    
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formSelector) => {  
      setEventListeners(formSelector, config)
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