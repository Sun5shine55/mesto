//����� ����������
let popup = document.querySelector('.popup');                   // ������� ���� ���� �������������� � DOM
let editButton = document.querySelector('.profile__edit-button');        // ������������� ������� querySelector()
let closeButton = popup.querySelector('.popup__close');
let addButton = document.querySelector('.profile__add-button');
let saveButton = popup.querySelector('.popup__save-button');                          
let formElement = popup.querySelector('.popup__form')            // ������� ������� ����� � ������ ����� "���" � "� ����"                         
let nameInput = formElement.querySelector('input[name="name"]')   // ������� ������� ���� ����� "���"
let jobInput = formElement.querySelector('input[name="myself"]')  // ������� ������� ���� ����� "� ����"
let profileName = document.querySelector('.profile__name');
let profileMyself = document.querySelector('.profile__myself');

//��������� �������
function editClickBtn() {    //���� ���� �� ������ �������������� �������
    popup.classList.add('popup_opened')              //� ������ popup ����������� ����������� popup_opened
    nameInput.value = profileName.textContent        //�������� ����� ������� �� �������� ������������ � ���� "���" � ����� ��������������
    jobInput.value = profileMyself.textContent       //�������� "� ����" ������� �� �������� ������������ � ���� "� ����" � ����� ��������������
}

function closeClickBtn() {  //���� ���� �� ������ �������� ����� �������������� �������
    popup.classList.remove('popup_opened')           //����������� popup_opened ���������
}

function handleFormSubmit(evt) {                     // ���������� ��������� �����, ���� ���� ��� ������ ������������ �� �����
    evt.preventDefault();                            // ��� ������� �������� ����������� �������� �����.
    profileName.textContent = nameInput.value        // �������� �������� ����� jobInput � nameInput �� �������� value
    profileMyself.textContent = jobInput.value       // �������� ��������, ���� ������ ���� ��������� �������� �����. ��������� ����� �������� � ������� textContent
    closeClickBtn();
}

//��������� ���������� ������� �� ������� ����� ���������� ������� 
editButton.addEventListener('click', editClickBtn)

closeButton.addEventListener('click', closeClickBtn)
                          
formElement.addEventListener('submit', handleFormSubmit);     //����������� ���������� � �����: �� ����� ������� �� �������� �submit� - ���������
