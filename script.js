function addCustomGenderInput(event) {
  const genderInputContainer = document.getElementById('gender-input-container');
  if (event.target.value === 'Personalizado') {
    const genderInput = document.createElement('input');
    genderInput.type = 'text';
    genderInput.className = 'input';
    genderInput.placeholder = 'Gênero (opcional)';
    genderInput.name = 'gender-custom';
    genderInputContainer.appendChild(genderInput);
  } else if (genderInputContainer.childNodes.length !== 0) {
    genderInputContainer.removeChild(genderInputContainer.lastChild);
  }
}

function loginButtonAlert(event) {
  const emailOrPhoneInput = document.getElementById('user-email-phone');
  alert(emailOrPhoneInput.value);
}

window.onload = function () {
  // const signInButton = document.getElementById('facebook-register');
  const loginButton = document.getElementById('button-login')
  const customGenderOptions = document.getElementsByClassName('gender-radio');

  loginButton.addEventListener('click', loginButtonAlert);
  for (let index = 0; index < customGenderOptions.length; index += 1) {
    customGenderOptions[index].addEventListener('change', addCustomGenderInput);
  }
};
