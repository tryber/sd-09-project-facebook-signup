const loginButton = document.getElementById('button-login');
loginButton.addEventListener('click', function () {
  alert(document.getElementById('user-email-phone').value);
});


const personalizedGender = document.getElementById('gender-inputp');
personalizedGender.addEventListener('click', function () {
  const customGender = document.getElementById('custom-gender');
  const newGenderInput = document.createElement('input');
  newGenderInput.type = 'text';
  newGenderInput.name = 'gender-custom';
  newGenderInput.placeholder = 'Gênero (opcional)';
  newGenderInput.display = 'block';
  customGender.appendChild(newGenderInput);
});
