function showLogin() {
  const buttonSubmit = document.querySelector('#button-login');
  const emailPhone = document.querySelector('#user-email-phone');
  buttonSubmit.addEventListener('click', function () {
    alert(emailPhone.value);
  });
}

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

function customGender() {
  const buttonSubmit = document.querySelector('#facebook-register');
  const formSubscribe = document.querySelector('#form-subscribe');
  const radioGender = document.querySelector('#gender3')
  radioGender.addEventListener('click', function () {
    const verifyInputPlus = document.querySelectorAll('#input-gender-plus');
    if (verifyInputPlus.length === 0){
      const inputGender = document.createElement('input');
      inputGender.name = 'gender-custom';
      inputGender.id = 'input-gender-plus';
      inputGender.placeholder = 'Gênero (opcional)';
      inputGeverifyForm();der.className = 'form-subscrib-full-line';
      inputGender.required  = true;
      formSubscribe.insertBefore(inputGender, buttonSubmit);
    } else {
      formSubscribe.removeChild(buttonSubmit.previousSibling);
    }
  });
}

showLogin();
verifyForm();
customGender();
