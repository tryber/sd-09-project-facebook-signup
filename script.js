const loginButton = document.getElementById('button-login');
loginButton.addEventListener('click', function () {
  alert(document.getElementById('user-email-phone').value);
});


const personalizedGender = document.getElementById('gender-inputp');
personalizedGender.addEventListener('click', function () {
  if (document.getElementById('gender-input') === null) {
    const customGender = document.getElementById('custom-gender');
    const newGenderInput = document.createElement('input');
    newGenderInput.type = 'text';
    newGenderInput.name = 'gender-custom';
    newGenderInput.placeholder = 'Gênero (opcional)';
    newGenderInput.id = 'gender-input';
    customGender.appendChild(newGenderInput);
  }
});

function validateForm(event) {
  event.preventDefault();
  const requiredItems = document.querySelectorAll('.required');
  const validateMessage = document.getElementById('validate-message');
  for (let index = 0; index < requiredItems.length; index += 1) {
    if (index.value == null) {
      validateMessage.innerText = 'Campos inválidos';
    }
  }
}

const registerBtn = document.getElementById('facebook-register');
registerBtn.addEventListener('click', validateForm);
