import "./index.css";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import {
  popupImage,
  initialCards,
  newPlaceForm,
  newPlaceAddButton,
  listCards,
  popupImageElem,
  popupImageElemTitle,
  config,
  popupEditProfile,
  popupNewPlace,
  profileEditButton,
  nameInput,
  jobInput,
  profileForm,
  namePlace,
  linkPlace,
} from "../utils/constants.js";

const pictureOpened = new PopupWithImage(".popup_image"); //экземпляр класса PopupWithImage
pictureOpened.setEventListeners();

export const handleCardClick = (name, image) => {
  pictureOpened.open(name, image);
};

const defaultCardList = new Section(
  {
    data: initialCards,
    renderer: (item) => {
      const card = createCard(item.name, item.link);
      defaultCardList.addItem(card);
    },
  },
  ".cards__list"
);

defaultCardList.renderItems();

//const { name, link } = cardData;

function createCard(name, link) {
  const card = new Card(
    { name: name, link: link },
    ".card-template",
    handleCardClick
  );
  const cardElement = card.addCard();
  return cardElement;
}

const popupPlace = new PopupWithForm(
  ".popup_new-place",
  newPlaceForm,
  createCardFormSubmit
); //экземпляр класса PopupWithForm

function createCardFormSubmit(inputValues) {
  const card = createCard(inputValues["place-name"], inputValues["place-link"]);
  defaultCardList.addItem(card);
}

function handleProfileFormSubmit(inputValues) {
  userInformation.setUserInfo(inputValues["name"], inputValues["myself"]);
}

const userInformation = new UserInfo({
  name: ".profile__name",
  job: ".profile__myself",
});

const popupProfile = new PopupWithForm(
  ".popup_edit-profile",
  profileForm,
  handleProfileFormSubmit
); //экземпляр класса PopupWithForm
popupProfile.setEventListeners();

profileEditButton.addEventListener("click", function () {
  editProfileValidator.resetValidation();
  const dataUser = userInformation.getUserInfo();
  nameInput.value = dataUser.name;
  jobInput.value = dataUser.job;
  popupProfile.open();
});

newPlaceAddButton.addEventListener("click", function () {
  createCardValidator.resetValidation();
  popupPlace.open();
});
popupPlace.setEventListeners();

const editProfileValidator = new FormValidator(config, profileForm);
editProfileValidator.enableValidation();
const createCardValidator = new FormValidator(config, newPlaceForm);
createCardValidator.enableValidation();
