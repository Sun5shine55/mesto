const cards = document.querySelector('.cards');
const popup = document.querySelector('.popup');
const editButton = document.querySelector('.profile__edit-button');
const cardDelete = document.querySelector('.card__delete');
const addButton = document.querySelector('.profile__add-button');
const saveButton = popup.querySelector('.popup__save-button');
const createButton = document.querySelector('.popup__create-button');
const formElement = popup.querySelector('.popup__form');
const nameInput = formElement.querySelector('input[name="name"]');
const jobInput = formElement.querySelector('input[name="myself"]');
const namePlace = document.querySelector('input[name="place-name"]');
const linkPlace = document.querySelector('input[name="place-link"]');
const profileName = document.querySelector('.profile__name');
const profileMyself = document.querySelector('.profile__myself');
const popupEditProfile = document.querySelector('.popup_edit-profile');
const popupNewPlace = document.querySelector('.popup_new-place');
const popupImage = document.querySelector('.popup_image');
const popupImageElem = document.querySelector('.popup__image'); 
const popupImageElemTitle = document.querySelector('.popup__title-image'); 
const arrPopup = document.querySelectorAll('.popup');

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

const template = document
    .querySelector('.card-template')
    .content.querySelector('.card');
const listCards = document.querySelector('.cards__list');

const close  = arrPopup.forEach(searchBtnClosePopup);
function searchBtnClosePopup (item) {
    item.addEventListener('click', function(event) {
        if (event.target.classList.contains('popup__close')||
            event.target.classList.contains('popup__save-button')||
            event.target.classList.contains('popup__create-button')) {
             item.classList.remove('popup_opened');
                namePlace.value = '';
                linkPlace.value = '';
        }
    });
}

function handleFormSubmit(event) {
    event.preventDefault();           
    profileName.textContent = nameInput.value;
    profileMyself.textContent = jobInput.value;
}

function renderCards() {
    const cards = initialCards.map((item) => {
       return createCard(item);
    });
    listCards.append(...cards);
}
renderCards();
function likeCard(event) {
    event.target.classList.toggle('card__like_type_color');
}
function deleteCard(event) {
    event.target.closest(".card").remove();
}

function createCard(item) {
    const card = template.cloneNode(true);
    card.querySelector('.card__title').textContent = item.name;
    card.querySelector('.card__photo').src = item.link;
    card.querySelector('.card__delete').addEventListener('click', deleteCard);
    card.querySelector('.card__like').addEventListener('click', likeCard);
    card.querySelector('.card__photo').addEventListener('click', openPopupImage);
    return card;
}

function openPopupImage(event) {
    popupImageElem.src = event.target.src;
    const searchTitleValue = event.target.closest('.card').querySelector('.card__title');
    popupImageElemTitle.textContent = searchTitleValue.textContent;
    popupImage.classList.add('popup_opened');
}

function openPopup(popup) {
    popup.classList.add('popup_opened');
}

createButton.addEventListener('click', (event) => {
    event.preventDefault();
    const name = namePlace.value;
    const link = linkPlace.value;
    const card = createCard({name:name, link:link});
    listCards.prepend(card);
});

editButton.addEventListener('click', function() {
    openPopup(popupEditProfile);
    nameInput.value = profileName.textContent;        
    jobInput.value = profileMyself.textContent;  
});
addButton.addEventListener('click', function() {
    openPopup(popupNewPlace);
});

formElement.addEventListener('submit', handleFormSubmit);