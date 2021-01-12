const loginButton = document.getElementById('button-login');
loginButton.addEventListener('click', function () {
  alert(document.getElementById('user-email-phone').value);
});



const personalizedGender = document.getElementById('gender-inputp');
personalizedGender.addEventListener('click', function () {
  const genderForm = document.getElementById('gender');
  const newGenderInput = document.createElement('input');
  newGenderInput.type = 'text';
  newGenderInput.name = 'gender-custom';
  newGenderInput.placeholder = 'Gênero (opcional)';
  genderForm.appendChild(newGenderInput);
}) 
