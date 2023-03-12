# Проект: Mesto

### Описание проекта
* Проект создан с применением технологий адаптивности с применением media запросов. 
    Размеры контента страницы меняются с учётом ширины экрана для разных устройств.
    Контрольные значения 1280, 320 пикселей.
* Реализовано 3 всплывающих модальных окна — «Редактировать профиль», «Новое место», «Просмотр картинки». 
* В  окне «Редактировать профиль» два поля: «Имя» и «О себе», а также кнопка «Сохранить». При нажатии на «Сохранить» изменяются данные в блоке профиля.
* В  окне «Новое место» два поля: «Название» и «Ссылка на картинку», а также кнопка «Создать». При нажатии на «Создать» создаётся новая карточка места. При новом вызове окна поля ввода пустые.
* Окно просмотра картинки для просмотра изображения в увеличенном виде.                     
* Для появления, сохранения, закрытия окон используется технология языка программирования JavaScript.
  Для этого подключён к html странице файл index.js
* Файл index.js содержит константы, функции и слушатели страницы.
* Файл validate.js реализует валидацию форм на странице. Проверка полей заполнения на отсутствие символов, минимальную и максимальную длину. Поле для ввода ссылки на картинку проверяет на валидность ввода ссылки.
* В проектной работе проведён рефакторинг и разбиение на модули. Созданы класс Card и FormValidator(validate.js заменён на FormValidator.js)
* Реализовано закрытие форм клавишей Escape. 
* Реализован класс Card для создания начального списка из 6 карточек из тэга template.
* Функция создания карточки createCard, также с помощью тэга template.
* Функции удаления карточек и отметки Нравится.
* При сохранении текста в элементе card__title исключается эффект переполнения,
  путём сокращения названия и появления многоточия. 
* Для построения элементов на странице использовались технологии flex и grid.
* Для интерактивных элементов используется эффект наведения.
* Для упрощения верстки используются псевдоклассы и псевдоэлементы.
* Используются семантические тэги для построения страницы.
* В проекте используются локальные шрифты Inter.
* Для построения файловой системы использовалась методология БЭМ. 


**Ссылка на проект в GitHub**

https://sun5shine55.github.io/mesto/index.html