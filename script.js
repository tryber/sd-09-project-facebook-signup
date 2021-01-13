function addCustomGenderInput(event) {
  const genderInputContainer = document.getElementById('gender-input-container');
  if (event.target.value === "Personalizado") {
    const genderInput = document.createElement('input');
    genderInput.type = 'text';
    genderInput.className = 'input';
    genderInput.placeholder = 'Gênero (opcional)';
    genderInput.name = 'gender-custom';
    genderInputContainer.appendChild(genderInput);
  } else if (genderInputContainer.childNodes.length != 0) {
    while (genderInputContainer.firstChild)
      genderInputContainer.removeChild(genderInputContainer.lastChild);
  }

}

window.onload = function () {
  const signInButton = document.getElementById('facebook-register');
  const customGenderOptions = document.getElementsByClassName('gender-radio');

  for (radio of customGenderOptions) {
    radio.addEventListener('change', addCustomGenderInput);
  }

};
