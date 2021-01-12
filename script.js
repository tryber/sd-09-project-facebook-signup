const loginBtn = document.querySelector('#button-login');
const emailPhoneValue = document.querySelector('#user-email-phone');

loginBtn.addEventListener('click', function () {
  alert(emailPhoneValue.value);
});

const registerBtn = document.querySelector('#facebook-register');
const inputs = document.querySelectorAll('.input');

registerBtn.addEventListener('click', function (event) {
  const invalid = document.querySelector('#invalid');
  let breakIf = false;
  for (let index = 0; index < inputs.length; index += 1) {
    console.log('gabriel', breakIf, index);
    if (!inputs[index].value && !breakIf) {
      breakIf = true;
      event.preventDefault();
      invalid.innerText = 'Campos inválidos';
      console.log('jhoif', breakIf, index);
    }
  }
});
