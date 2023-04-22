import "./index.css";
import Api from "../components/Api.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import PopupDeleteConfirm from "../components/PopupDeleteConfirm.js";
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
  popupDelete,
  avatarForm,
  popupAvatar,
  avatarEditButton,
} from "../utils/constants.js";

const pictureOpened = new PopupWithImage(".popup_image"); //экземпляр класса PopupWithImage
pictureOpened.setEventListeners();

export const handleCardClick = (name, image) => {
  pictureOpened.open(name, image);
};

function handleTrashClick(id, card) {
  popupDeleteConfirm.submitDelete(() => handleDeleteConfirm(id, card));
  popupDeleteConfirm.open();
}

function handleDeleteConfirm(id, card) {
  api
    .deleteCard(id)
    .then(() => {
      card.removeCard();
      popupDeleteConfirm.close();
    })
    .catch((err) => {
      console.log(err.message);
    });
}

const defaultCardList = new Section(
  {
    data: {},
    renderer: (data) => {
      const card = createCard(data, userId);
      defaultCardList.addItem(card);
    },
  },
  ".cards__list"
);

const popupDeleteConfirm = new PopupDeleteConfirm(".popup_delete-card");
popupDeleteConfirm.setEventListeners();

function createCard(data, userId) {
  const card = new Card(
    data,
    userId,
    handleCardClick,
    handleLikeClick,
    handleTrashClick
  );
  const cardElement = card.addCard();
  return cardElement;
}

function handleLikeClick(id, isLiked, card) {
  if (isLiked) {
    api.removeLike(id).then((data) => {
      card.setLikes(data.likes);
    });
  } else {
    api.putLike(card.id).then((data) => {
      card.setLikes(data.likes);
    });
  }
}

let userId = null;

function createCardFormSubmit(inputValues) {
  popupPlace.renderSaving(true);
  //const card = createCard(inputValues["place-name"], inputValues["place-link"]);
  api
    .addCard({
      placename: inputValues["place-name"],
      link: inputValues["place-link"],
    })
    .then((data) => {
      const card = createCard(data, userId);
      defaultCardList.addItem(card);
      popupPlace.close();
    })
    .catch((err) => {
      console.log(err.message);
    })
    .finally(() => {
      popupPlace.renderSaving(false);
    });
}

function handleProfileFormSubmit(inputValues) {
  //userInformation.setUserInfo(inputValues["name"], inputValues["myself"]);
  popupProfile.renderSaving(true);
  api
    .editUserData({ name: inputValues["name"], job: inputValues["myself"] })
    .then((data) => {
      userInformation.setUserInfo(data);
      popupProfile.close();
    })
    .catch((err) => {
      console.log(err.message);
    })
    .finally(() => {
      popupProfile.renderSaving(false);
    });
}

function handleChangeAvatar(inputValues) {
  popupChangeAvatar.renderSaving(true);
  api
    .editAvatar(inputValues)
    .then((data) => {
      console.log(data);
      userInformation.setUserInfo(data);
      popupChangeAvatar.close();
    })
    .catch((err) => {
      console.log(err.message);
    })
    .finally(() => {
      popupChangeAvatar.renderSaving(false);
    });
}

const userInformation = new UserInfo({
  name: ".profile__name",
  job: ".profile__myself",
  avatar: ".profile__avatar",
});

const popupPlace = new PopupWithForm(
  ".popup_new-place",
  newPlaceForm,
  createCardFormSubmit
); //экземпляр класса PopupWithForm

const popupProfile = new PopupWithForm(
  ".popup_edit-profile",
  profileForm,
  handleProfileFormSubmit
); //экземпляр класса PopupWithForm
popupProfile.setEventListeners();

const popupChangeAvatar = new PopupWithForm(
  ".popup_avatar",
  avatarForm,
  handleChangeAvatar
); //экземпляр класса PopupWithForm
popupChangeAvatar.setEventListeners();

const api = new Api({
  url: `https://mesto.nomoreparties.co/v1/cohort-63`,
  headers: {
    authorization: "c0d0c8a3-0688-47eb-8a7f-1b2c156d9522",
    "Content-Type": "application/json",
  },
});

Promise.all([api.getUserData(), api.getCards()])
  .then(([resUser, resCards]) => {
    userId = resUser._id;
    userInformation.setUserInfo(resUser);
    defaultCardList.renderItems(resCards.reverse());
  })
  .catch((err) => {
    console.log(err.message);
  });

avatarEditButton.addEventListener("click", () => {
  popupChangeAvatar.open();
  avatarValidator.disableSubmitButton();
});

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
const avatarValidator = new FormValidator(config, avatarForm);
avatarValidator.enableValidation();
