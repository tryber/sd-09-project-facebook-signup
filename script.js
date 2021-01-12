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
    if (!inputs[index].value && !breakIf) {
      breakIf = true;
      event.preventDefault();
      invalid.innerText = 'Campos inválidos';
    }
  }
});

const per = document.querySelector('#per');
const man = document.querySelector('#man');
const fem = document.querySelector('#fem');
const inputGender = document.querySelector('#input-gender');
const fieldGender = document.createElement('input');
let breakChecked = false;

function perField(event) {
  if (event.target.id === 'per' && !breakChecked) {
    breakChecked = true;
    fieldGender.name = 'gender-custom';
    fieldGender.placeholder = 'Gênero (opcional)';
    fieldGender.type = 'text';
    inputGender.appendChild(fieldGender);
  }else if (event.target.id !== 'per') {
    breakChecked = false;
    inputGender.removeChild(fieldGender);
  }
}
per.addEventListener('click', perField);
man.addEventListener('click', perField);
fem.addEventListener('click', perField);
