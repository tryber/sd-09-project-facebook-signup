const userEmailPhoneInput = document.querySelector('#user-email-phone');
const buttonLogin = document.querySelector('#button-login');

function showEmailPhoneAlert() {
  const emailPhone = userEmailPhoneInput.value;
  alert(emailPhone);
}

function setCustomGenderField () {
  const customGenderRadio = document.querySelector('#gender-container');
  const customGenderInput = document.querySelector('#gender-custom');
  customGenderRadio.addEventListener('change', (event) => {
    if (event.target.id === 'gender-personalized') {
      customGenderInput.classList.remove('hide');
    } else {
      customGenderInput.classList.add('hide');
    }
  });
}

window.onload = function () {
  buttonLogin.addEventListener('click', showEmailPhoneAlert);
  setCustomGenderField();
};
