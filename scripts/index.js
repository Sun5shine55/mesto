import Card from "./Card.js";
import FormValidator from "./FormValidator.js";

const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const saveButton = document.querySelector('button[name="btnSaveProfile"]');
const createButton = document.querySelector('button[name="btnCreateNewPlace"]');
const formProfile = document.forms.formProfile;
const nameInput = formProfile.querySelector('input[name="name"]');
const jobInput = formProfile.querySelector('input[name="myself"]');
const formCard = document.forms.formNewPlace;
const namePlace = formCard.querySelector('input[name="place-name"]');
const linkPlace = formCard.querySelector('input[name="place-link"]');
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
    formSelector: '.popup__form',
    inputSelector: '.popup__field',
    submitButtonSelector: '.popup__save-button',
    inactiveButtonClass: 'popup__save-button_disabled',
    inputErrorClass: 'popup__item-error_type_show',
    errorClass: '.popup__item-error',
}

const listCards = document.querySelector('.cards__list');
const createCard = (item) => {
    const card = new Card (item, '.card-template');
    const cardElement = card.addCard();
    listCards.prepend(cardElement);;
    return cardElement;
}

initialCards.forEach((item) => {
    createCard(item)
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

function closePopupByEsc (event) {  
    if (event.key === "Escape") {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
    }
};

function handleFormSubmit(event) {
    event.preventDefault();           
    profileName.textContent = nameInput.value;
    profileMyself.textContent = jobInput.value;
    closePopup(popupEditProfile);
}

editButton.addEventListener('click', function() {
    openPopup(popupEditProfile);
    saveButton.removeAttribute("disabled");
    saveButton.classList.remove('popup__save-button_disabled');
    nameInput.value = profileName.textContent;        
    jobInput.value = profileMyself.textContent;  
});
addButton.addEventListener('click', function() {
    openPopup(popupNewPlace);
    createButton.setAttribute("disabled", "disabled");
    createButton.classList.add('popup__save-button_disabled');
});

formProfile.addEventListener('submit', handleFormSubmit);

formCard.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = namePlace.value;
    const link = linkPlace.value;
    const card = createCard({name:name, link:link});
    listCards.prepend(card);
    closePopup(popupNewPlace);
    event.target.reset();
});

const editProfileValidator = new FormValidator(config, formProfile);
editProfileValidator.enableValidation();
const createCardValidator = new FormValidator(config, formCard);
createCardValidator.enableValidation();
