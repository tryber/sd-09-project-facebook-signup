const loginButton = document.getElementById('button-login');
const registerButton = document.getElementById('facebook-register');
const loginField = document.getElementById('user-email-phone');
const customGenderInput = document.getElementById('other-gender');
const customGender = document.getElementById('custom');
const registerForm = document.querySelector('.new-account');
const maleGender = document.getElementById('male');
const femaleGender = document.getElementById('female');
const allInputs = document.querySelectorAll('.input');
const invalidMessage = document.createElement('p');

loginButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  alert(loginField.value);
});

registerButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  checkValidity();
});

customGender.addEventListener('click', () => {
  customGenderInput.style.display = 'block';
});

femaleGender.addEventListener('click', () => {
  customGenderInput.style.display = 'none';
});

maleGender.addEventListener('click', () => {
  customGenderInput.style.display = 'none';
})

function checkValidity() {
  for (let index = 0; index < allInputs.length; index += 1) {
    if (!allInputs[index].checkValidity()) {
      invalidMessage.innerText = 'Campos inválidos';
      return registerForm.appendChild(invalidMessage);
    }
  }
}
