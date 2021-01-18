document.querySelector('#button-login').addEventListener('click', function () {
  const userEmailPhoneValue = document.querySelector('#user-email-phone').value;
  alert(userEmailPhoneValue);
});

// Adiciona input de gênero personalizado
const customGenderInput = () => {
  const inputGender = document.querySelector('#gender-custom');
  if (document.querySelector('#other').checked === true) {
    inputGender.classList.remove('hidden');
  } else {
    inputGender.classList.add('hidden');
  }
};

document.querySelector('.gender-input').addEventListener('click', customGenderInput);
