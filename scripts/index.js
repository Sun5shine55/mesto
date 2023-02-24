const cards = document.querySelector('.cards');
const editButton = document.querySelector('.profile__edit-button');
const cardDelete = document.querySelector('.card__delete');
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
const popupImage = document.querySelector('.popup_image');
const popupImageElem = document.querySelector('.popup__image'); 
const popupImageElemTitle = document.querySelector('.popup__title-image'); 
const closeButtons = document.querySelectorAll('.popup__close');





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

const template = document.querySelector('.card-template').content.querySelector('.card');
const listCards = document.querySelector('.cards__list');

function renderCards() {
    const cards = initialCards.map((item) => {
       return createCard(item);
    });
    listCards.append(...cards);
}
renderCards();

function createCard(item) {
    const card = template.cloneNode(true);
    card.querySelector('.card__title').textContent = item.name;
    card.querySelector('.card__photo').src = item.link;
    card.querySelector('.card__photo').alt = item.name;
    card.querySelector('.card__delete').addEventListener('click', deleteCard);
    card.querySelector('.card__like').addEventListener('click', likeCard);
    card.querySelector('.card__photo').addEventListener('click', openPopupImage);
    return card;
}

function likeCard(event) {
    event.target.classList.toggle('card__like_type_color');
}
function deleteCard(event) {
    event.target.closest(".card").remove();
}

function openPopupImage(event) {
    popupImageElem.src = event.target.src;
    popupImageElem.alt = event.target.alt;
    const searchTitleValue = event.target.closest('.card').querySelector('.card__title');
    popupImageElemTitle.textContent = searchTitleValue.textContent;
    openPopup(popupImage);
}

function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closePopupByEsc);
}

closeButtons.forEach((button) => {
    const popup = button.closest('.popup');
    button.addEventListener('click', () => closePopup(popup));
  });

function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closePopupByEsc);
}

function handleFormSubmit(event) {
    event.preventDefault();           
    profileName.textContent = nameInput.value;
    profileMyself.textContent = jobInput.value;
    closePopup(popupEditProfile);
}

function closePopupByEsc (event) {  
    if (event.key === "Escape") {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  }
  };

editButton.addEventListener('click', function() {
    openPopup(popupEditProfile);
    saveButton.removeAttribute("disabled");
    saveButton.classList.remove('popup__save-button_inactive');
    nameInput.value = profileName.textContent;        
    jobInput.value = profileMyself.textContent;  
});
addButton.addEventListener('click', function() {
    openPopup(popupNewPlace);
    createButton.setAttribute("disabled", "disabled");
    createButton.classList.add('popup__save-button_inactive');
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
