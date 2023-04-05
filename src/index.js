import './pages/index.css';
import Card from "./scripts/components/Card.js";
import FormValidator from "./scripts/components/FormValidator.js";
import Section from "./scripts/components/Section.js"
import PopupWithForm from "./scripts/components/PopupWithForm.js";
import PopupWithImage from "./scripts/components/PopupWithImage.js";
import UserInfo from "./scripts/components/UserInfo.js";
import {
    popupImage, initialCards, newPlaceForm, newPlaceAddButton, listCards,
    popupImageElem, popupImageElemTitle, config, popupEditProfile, popupNewPlace,
    profileEditButton, nameInput, jobInput, profileForm, namePlace, linkPlace
  } from "./scripts/utils/constants.js"
import btnCloseImg from "./images/close.svg";
import btnDeleteImg from "./images/delete.svg";
import btnLikeImg from "./images/like.svg";
import btnLikeColorImg from "./images/like-color.svg";

const pictureOpened = new PopupWithImage(popupImage, popupImageElem, popupImageElemTitle)//экземпляр класса PopupWithImage
pictureOpened.setEventListeners()

export const handleCardClick = (name, image) => {
    pictureOpened.open(name, image)
}

const defaultCardList = new Section({
    data: initialCards,
    renderer: (item) => {
      const card = createCard(item.name, item.link)
      defaultCardList.addItem(card)
    }
  }, '.cards__list');

defaultCardList.renderItems()

function createCard(name, link) {
    const card = new Card({ name: name, link: link }, '.card-template', handleCardClick)
    const cardElement = card.addCard()
    return cardElement
  }

const newCard = (item) => {
    listCards.prepend(createCard(item.name, item.link));
  }

const popupPlace = new PopupWithForm(popupNewPlace, newPlaceForm, createCardFormSubmit);//экземпляр класса PopupWithForm

function createCardFormSubmit() {
    //event.preventDefault();
    const name = namePlace.value;
    const link = linkPlace.value;
    createCard({ name: name, link: link });
    newCard({ name: name, link: link });
}

function handleProfileFormSubmit() {
    userInformation.setUserInfo();
}

const userInformation = new UserInfo(nameInput, jobInput)

const popupProfile = new PopupWithForm(popupEditProfile, profileForm, handleProfileFormSubmit);//экземпляр класса PopupWithForm
popupProfile.setEventListeners();

profileEditButton.addEventListener('click', function () {
    userInformation.getUserInfo();
    editProfileValidator.resetValidation();
    popupProfile.open();
});


newPlaceAddButton.addEventListener('click', function () {
    newPlaceForm.reset(); // обязательно очищаем форму, чтобы потом очистить ошибки и деактивировать кнопку
    createCardValidator.resetValidation();
    popupPlace.open();
});
popupPlace.setEventListeners();

const editProfileValidator = new FormValidator(config, profileForm);
editProfileValidator.enableValidation();
const createCardValidator = new FormValidator(config, newPlaceForm);
createCardValidator.enableValidation();

