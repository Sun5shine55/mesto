export const profileEditButton = document.querySelector('.profile__edit-button');
export const newPlaceAddButton = document.querySelector('.profile__add-button');
export const profileSaveButton = document.querySelector('button[name="btnSaveProfile"]');
export const newPlaceCreateButton = document.querySelector('button[name="btnCreateNewPlace"]');
export const profileForm = document.forms.formProfile;
export const nameInput = profileForm.querySelector('input[name="name"]');
export const jobInput = profileForm.querySelector('input[name="myself"]');
export const newPlaceForm = document.forms.formNewPlace;
export const namePlace = newPlaceForm.querySelector('input[name="place-name"]');
export const linkPlace = newPlaceForm.querySelector('input[name="place-link"]');
export const profileName = document.querySelector('.profile__name');
export const profileMyself = document.querySelector('.profile__myself');
export const popupEditProfile = document.querySelector('.popup_edit-profile');
export const popupNewPlace = document.querySelector('.popup_new-place');
export const popupImage = document.querySelector('.popup_image');
export const popupImageElem = document.querySelector('.popup__image');
export const popupImageElemTitle = document.querySelector('.popup__title-image');
export const popups = document.querySelectorAll('.popup');
export const buttonsClosePopup = document.querySelectorAll('.popup__close');
export const listCards = document.querySelector('.cards__list');

export const initialCards = [
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
export const config = {
    searchForm: '.popup__form',
    searchInput: '.popup__field',
    searchSubmitButton: '.popup__save-button',
    inactiveButtonClass: 'popup__save-button_disabled',
    inputErrorClass: 'popup__item-error_type_show',
    errorClass: '.popup__item-error',
}