const button = document.getElementById('button-login');
button.addEventListener('click', function () {
  alert(document.getElementById('user-email-phone').value);
});

function checkInput() {
  const form = document.getElementById('signup-form');
  const inputName = document.getElementsByName('firstname')[0].value;
  const inputLastname = document.getElementsByName('lastname')[0].value;
  const inputEmail = document.getElementsByName('phone_email')[0].value;
  const inputPassword = document.getElementsByName('password')[0].value;
  const birthdate = document.getElementsByName('birthdate')[0].value;
  if (inputName === '' || inputLastname === '' || inputEmail === '' || inputPassword === '' || birthdate === '') {
    form.innerHTML = 'Campos inválidos';
  }
}

document.getElementById('facebook-register').addEventListener('click', checkInput);