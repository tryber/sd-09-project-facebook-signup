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
  const paragraph = document.querySelector('#message')
  formSubscribeSubmitButton.addEventListener('click', function (event) {
    event.preventDefault();
    if (!formSubscribe.checkValidity()) {
      paragraph.innerText = 'Campos inválidos';
    } else {
      paragraph.innerText = '';
    }
  });
}

validateForm();
alertEmailOrPhone();
