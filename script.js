function alertEmailOrPhone() {
  const inputEmailPhone = document.querySelector('#button-login');
  const inputUserName = document.querySelector('#user-email-phone');
  inputEmailPhone.addEventListener('click', function () {
    alert(inputUserName.value);
  });
}

function validateForm() {
  const formSubscribe = document.querySelector('#form-subscribe');
  const formSubscribeSubmitButton = document.querySelector('#facebook-register');
  const paragraph = document.querySelector('#message');
  formSubscribeSubmitButton.addEventListener('click', function (event) {
    event.preventDefault();
    if (!formSubscribe.checkValidity()) {
      paragraph.innerText = 'Campos inválidos';
    } else {
      paragraph.innerText = '';
    }
  });
}

function gender() {
  const formSubscribe = document.querySelector('#form-subscribe');
  const radioGender = document.querySelector('#gender3');
  const buttonSubmitForm = document.querySelector('#facebook-register');
  radioGender.addEventListener('click', function () {
    const trigger = document.querySelectorAll('#input-gender3').length;
    if (trigger === 0) {
      const inputGender = document.createElement('input');
      inputGender.id = 'input-gender3';
      inputGender.placeholder = 'Gênero (opcional)';
      inputGender.className = 'form-subscrib-full-line';
      formSubscribe.insertBefore(inputGender, buttonSubmitForm);
    } else {
      formSubscribe.removeChild(buttonSubmitForm.previousSibling);
    }
  });
}

validateForm();
alertEmailOrPhone();
gender();
