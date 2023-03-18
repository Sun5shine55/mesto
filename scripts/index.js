import Card from "./Card.js";
import FormValidator from "./FormValidator.js";

const profileEditButton = document.querySelector('.profile__edit-button');
const newPlaceAddButton = document.querySelector('.profile__add-button');
const profileSaveButton = document.querySelector('button[name="btnSaveProfile"]');
const newPlaceCreateButton = document.querySelector('button[name="btnCreateNewPlace"]');
const profileForm = document.forms.formProfile;
const nameInput = profileForm.querySelector('input[name="name"]');
const jobInput = profileForm.querySelector('input[name="myself"]');
const newPlaceForm = document.forms.formNewPlace;
const namePlace = newPlaceForm.querySelector('input[name="place-name"]');
const linkPlace = newPlaceForm.querySelector('input[name="place-link"]');
const profileName = document.querySelector('.profile__name');
const profileMyself = document.querySelector('.profile__myself');
const popupEditProfile = document.querySelector('.popup_edit-profile');
const popupNewPlace = document.querySelector('.popup_new-place');
export const popupImage = document.querySelector('.popup_image');
export const popupImageElem = document.querySelector('.popup__image');
export const popupImageElemTitle = document.querySelector('.popup__title-image');
const popups = document.querySelectorAll('.popup');

const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];
const config = {
    searchForm: '.popup__form',
    searchInput: '.popup__field',
    searchSubmitButton: '.popup__save-button',
    inactiveButtonClass: 'popup__save-button_disabled',
    inputErrorClass: 'popup__item-error_type_show',
    errorClass: '.popup__item-error',
}

const listCards = document.querySelector('.cards__list');
const createCard = (item) => {
    const card = new Card(item, '.card-template');
    const cardElement = card.addCard();
    return cardElement;
}

initialCards.forEach((item) => {
    const card = createCard(item);
    listCards.append(card);
});

export function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closePopupByEsc);
}

popups.forEach((popup) => {
    popup.addEventListener('mousedown', (event) => {
        if (event.target.classList.contains('popup_opened')) {
            closePopup(popup)
        }
        if (event.target.classList.contains('popup__close')) {
            closePopup(popup)
        }
    })
})

function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closePopupByEsc);
}

function closePopupByEsc(event) {
    if (event.key === "Escape") {
        const popupOpened = document.querySelector('.popup_opened');
        closePopup(popupOpened);
    }
};

function createCardFormSubmit(event) {
    event.preventDefault();
    const name = namePlace.value;
    const link = linkPlace.value;
    const card = createCard({ name: name, link: link });
    listCards.prepend(card);
    closePopup(popupNewPlace);
    newPlaceForm.reset();
    //formValidators[ newPlaceForm.getAttribute('name') ].resetValidation()
}

function handleProfileFormSubmit(event) {
    event.preventDefault();
    profileName.textContent = nameInput.value;
    profileMyself.textContent = jobInput.value;
    closePopup(popupEditProfile);
    //formValidators[ profileForm.getAttribute('name') ].resetValidation()
}

profileEditButton.addEventListener('click', function () {
    openPopup(popupEditProfile);
    profileSaveButton.removeAttribute("disabled");
    profileSaveButton.classList.remove('popup__save-button_disabled');
    nameInput.value = profileName.textContent;
    jobInput.value = profileMyself.textContent;

});
newPlaceAddButton.addEventListener('click', function () {
    openPopup(popupNewPlace);
    newPlaceCreateButton.setAttribute("disabled", "disabled");
    newPlaceCreateButton.classList.add('popup__save-button_disabled');
});

profileForm.addEventListener('submit', handleProfileFormSubmit);

newPlaceForm.addEventListener('submit', createCardFormSubmit);

const editProfileValidator = new FormValidator(config, profileForm);
editProfileValidator.enableValidation();
const createCardValidator = new FormValidator(config, newPlaceForm);
createCardValidator.enableValidation();



/*const formValidators = {}
console.log(formValidators);
// Включение валидации
const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.searchForm));
  console.log(formList);
  formList.forEach((formElement) => {
    const validator = new FormValidator(formElement, config);
// получаем данные из атрибута `name` у формы
    const formName = formElement.getAttribute('name');
    console.log(validator);
   // вот тут в объект записываем под именем формы
    formValidators[formName] = validator;
   validator.enableValidation();
  });
};

enableValidation(config);*/
