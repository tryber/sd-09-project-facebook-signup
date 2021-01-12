function showLogin() {
  const buttonSubmit = document.querySelector('#button-login');
  const emailPhone = document.querySelector('#user-email-phone');
  buttonSubmit.addEventListener('click', function () {
    alert(emailPhone.value);
  });
}

showLogin();

function verifyForm() {
  const formSubscribe = document.querySelector('#form-subscribe');
  const buttonSubmit = document.querySelector('#facebook-register');
  const verifyMsg = document.querySelector('#verify-msg');
  buttonSubmit.addEventListener('click', function (event) {
    event.preventDefault();
    if (!formSubscribe.checkValidity()) {
      verifyMsg.innerText = 'Campos inválidos';
    }
  });
}

verifyForm();
