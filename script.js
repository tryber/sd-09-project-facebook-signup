const genderCustomInput = document.querySelector('.gender-custom');

const btLogin = document.getElementById('button-login');
btLogin.addEventListener('click', () => {
  const textInput = document.getElementById('user-email-phone');
  alert(textInput.value);
});

const genderSelector = document.querySelector('.radio-gender');
genderSelector.addEventListener('click', (event) => {
  const genderSelected = event.target;
  if (genderSelected.value === 'Personalizado') {
    genderCustomInput.style.visibility = 'visible';
  } else {
    genderCustomInput.style.visibility = 'hidden';
  }
});
