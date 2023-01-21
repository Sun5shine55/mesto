//����� ����������
let popup = document.querySelector('.popup');                   // ������� ���� ���� �������������� � DOM
let editButton = document.querySelector('.edit-button');        // ������������� ������� querySelector()
let closeButton = popup.querySelector('.popup__close');
let addButton = document.querySelector('.add-button');
let saveButton = popup.querySelector('.popup__save-button');
                          
let formElement = popup.querySelector('.popup__form')            // ������� ������� ����� � ������ ����� "���" � "� ����"
                          
let nameInput = formElement.querySelector('.popup__form-name')   // ������� ������� ���� ����� "���"
let jobInput = formElement.querySelector('.popup__form-myself')  // ������� ������� ���� ����� "� ����"

let profileName = document.querySelector('.profile-info__name');
let profileMyself = document.querySelector('.profile-info__myself');
//��������� �������� �� ������� ����� ���������� ������� 
editButton.addEventListener('click', function() {    //���� ���� �� ������ �������������� �������
    popup.classList.add('popup_opened')              //� ������ popup ����������� ����������� popup_opened
    nameInput.value = profileName.textContent        //�������� ����� ������� �� �������� ������������ � ���� "���" � ����� ��������������
    jobInput.value = profileMyself.textContent       //�������� "� ����" ������� �� �������� ������������ � ���� "� ����" � ����� ��������������
})

closeButton.addEventListener('click', function () {  //���� ���� �� ������ �������� ����� �������������� �������
    popup.classList.remove('popup_opened')           //����������� popup_opened ���������
})

saveButton.addEventListener('click', function () {   //���� ���� �� ������ "���������" ����� �������������� �������
    popup.classList.remove('popup_opened')           //����������� popup_opened ���������
    profileName.textContent = nameInput.value        //�������� ����� ������� �� ����� �������������� ������������ �� ��������
    profileMyself.textContent = jobInput.value
})
                          
function handleFormSubmit(evt) {                     // ���������� ��������� �����, ���� ���� ��� ������ ������������ �� �����
    evt.preventDefault();                            // ��� ������� �������� ����������� �������� �����.
    profileName.textContent = nameInput.value        // �������� �������� ����� jobInput � nameInput �� �������� value
    profileMyself.textContent = jobInput.value       // �������� ��������, ���� ������ ���� ��������� �������� �����
    // ��������� ����� �������� � ������� textContent
    popup.classList.remove('popup_opened')
}
// ����������� ���������� � �����:
formElement.addEventListener('submit', handleFormSubmit);     // �� ����� ������� �� �������� �submit� - ���������
