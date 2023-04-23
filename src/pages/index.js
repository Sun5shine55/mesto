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
  newPlaceAddButton,
  config,
  profileEditButton,
  nameInput,
  jobInput,
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
    api
      .removeLike(id)
      .then((data) => {
        card.setLikes(data.likes);
      })
      .catch((err) => {
        console.log(err.message);
      });
  } else {
    api
      .putLike(card.id)
      .then((data) => {
        card.setLikes(data.likes);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
}

let userId = null;

function handleCardFormSubmit(inputValues) {
  popupPlace.renderSaving(true);
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

const popupPlace = new PopupWithForm(".popup_new-place", handleCardFormSubmit); //экземпляр класса PopupWithForm

const popupProfile = new PopupWithForm(
  ".popup_edit-profile",
  handleProfileFormSubmit
); //экземпляр класса PopupWithForm
popupProfile.setEventListeners();

const popupChangeAvatar = new PopupWithForm(
  ".popup_avatar",
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
  formValidators["formAvatar"].resetValidation();
});

profileEditButton.addEventListener("click", function () {
  formValidators["formProfile"].resetValidation();
  const dataUser = userInformation.getUserInfo();
  nameInput.value = dataUser.name;
  jobInput.value = dataUser.job;
  popupProfile.open();
});

newPlaceAddButton.addEventListener("click", function () {
  formValidators["formNewPlace"].resetValidation();
  popupPlace.open();
});
popupPlace.setEventListeners();

const formValidators = {};

// Включение валидации
const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.searchForm));
  formList.forEach((formElement) => {
    const validator = new FormValidator(config, formElement);
    // получаем данные из атрибута `name` у формы
    const formName = formElement.getAttribute("name");
    // вот тут в объект записываем под именем формы
    formValidators[formName] = validator;
    validator.enableValidation();
  });
};

enableValidation(config);
