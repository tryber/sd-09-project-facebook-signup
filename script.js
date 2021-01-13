window.onload = function () {
  const signInButton = document.getElementById('facebook-register');
  const customGenderOption = document.getElementById('custom-gender-option').checked;

  customGenderOption.addEventListener('change', addCustomGenderInput);
  if (signInButton);
}

function addCustomGenderInput(event) {
  const genderInputContainer = document.getElementById('gender-input-container');

  if (event.checked === true) {
    const genderInput = document.createElement('input');
    genderInput.type = 'text';
    genderInput.className = 'input';
    genderInput.placeholder = 'Gênero (opcional)';
    genderInput.name = 'gender-custom';
    genderInputContainer.appendChild(genderInput);
  } else {
    genderInputContainer.removeChild(genderInputContainer.firstChild);
  }
}
