//Задаём переменные
let popup = document.querySelector('.popup');                   // Находим блок окна редактирования в DOM
let editButton = document.querySelector('.edit-button');        // Воспользуемся методом querySelector()
let closeButton = popup.querySelector('.popup__close');
let addButton = document.querySelector('.add-button');
let saveButton = popup.querySelector('.popup__save-button');
                          
let formElement = popup.querySelector('.popup__form')            // Находим элемент формы с полями ввода "Имя" и "О себе"
                          
let nameInput = formElement.querySelector('.popup__form-name')   // Находим элемент поля ввода "Имя"
let jobInput = formElement.querySelector('.popup__form-myself')  // Находим элемент поля ввода "О себе"

let profileName = document.querySelector('.profile-info__name');
let profileMyself = document.querySelector('.profile-info__myself');
//Описываем действия по которым будет выполнятся функция 
editButton.addEventListener('click', function() {    //Клик мыши по кнопке редактирования профиля
    popup.classList.add('popup_opened')              //К классу popup добавляется модификатор popup_opened
    nameInput.value = profileName.textContent        //Значение имени профиля на странице записывается в поле "Имя" в форме редактирования
    jobInput.value = profileMyself.textContent       //Значение "О себе" профиля на странице записывается в поле "О себе" в форме редактирования
})

closeButton.addEventListener('click', function () {  //Клик мыши по кнопке закрытия формы редактирования профиля
    popup.classList.remove('popup_opened')           //модификатор popup_opened удаляется
})

saveButton.addEventListener('click', function () {   //Клик мыши по кнопке "Сохранить" формы редактирования профиля
    popup.classList.remove('popup_opened')           //модификатор popup_opened удаляется
    profileName.textContent = nameInput.value        //Значение имени профиля из формы редактирования записывается на страницу
    profileMyself.textContent = jobInput.value
})
                          
function handleFormSubmit(evt) {                     // Обработчик «отправки» формы, хотя пока она никуда отправляться не будет
    evt.preventDefault();                            // Эта строчка отменяет стандартную отправку формы.
    profileName.textContent = nameInput.value        // Получаем значение полей jobInput и nameInput из свойства value
    profileMyself.textContent = jobInput.value       // Выбираем элементы, куда должны быть вставлены значения полей
    // Вставляем новые значения с помощью textContent
    popup.classList.remove('popup_opened')
}
// Прикрепляем обработчик к форме:
formElement.addEventListener('submit', handleFormSubmit);     // он будет следить за событием “submit” - «отправка»
