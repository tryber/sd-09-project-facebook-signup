const genderCustomInput = document.querySelector('.gender-custom')

const btLogin = document.getElementById('button-login');
btLogin.addEventListener('click', () => {
  const textInput = document.getElementById('user-email-phone');
  alert(textInput.value);
});

const genderSelector = document.querySelector('.radio-gender');
genderSelector.addEventListener('click', (e) => {
  const genderSelected = e.target
  if (genderSelected.value === 'Personalizado') {
    genderCustomInput.style.display = 'inline'
  } else {
    genderCustomInput.style.display = 'none'
  }
})
