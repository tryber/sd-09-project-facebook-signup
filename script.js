function alertButton() {
  const buttonLogin = document.querySelector('#button-login');
  buttonLogin.addEventListener('click', function () {
    const emailField = document.querySelector('#user-email-phone');

    alert(emailField.value);
  });
}

function submitInfo() {
  const rightContent = document.querySelector('.right-content');

  while (rightContent.firstChild) {
    rightContent.removeChild(rightContent.firstChild);
  }
}

function validateField() {
  const buttonSubmit = document.querySelector('#facebook-register');
  buttonSubmit.addEventListener('click', function (event) {
    event.preventDefault();
    const fields = document.querySelectorAll('.register-form input');
    let validate = true;
    for (let index = 0; index < fields.length; index += 1) {
      const fieldValue = fields[index].value;
      if (fieldValue === '') {
        validate = false;
      }
    }

    if (validate === false) {
      const form = document.querySelector('.register-form');
      const formWarning = document.createElement('p');
      formWarning.innerText = 'Campos inválidos';
      form.appendChild(formWarning);
    } else {
      submitInfo();
    }
  });
}

function personalizeGenderField() {
  const personalizedField = document.querySelector('#per-radio');

  personalizedField.addEventListener('click', function () {
    if (personalizedField.checked === true) {
      const personalizedContainer = document.querySelector('#personalized-gender-container');
      const inputPersonalizedGender = document.createElement('input');
      inputPersonalizedGender.type = 'type="text"';
      inputPersonalizedGender.name = 'gender-custom';
      inputPersonalizedGender.placeholder = 'Gênero (opcional)';
      personalizedContainer.appendChild(inputPersonalizedGender);
    }
  });
}

personalizeGenderField();
validateField();
alertButton();
