function alertButton() {
  const buttonLogin = document.querySelector('#button-login');
  buttonLogin.addEventListener('click', function () {
    const emailField = document.querySelector('#user-email-phone');

    alert(emailField.value);
  });
}

function personalizeGenderField() {
  const personalizedField = document.querySelector('#per-radio');

  personalizedField.addEventListener('click', function () {
    if (personalizedField.checked) {
      const personalizedContainer = document.querySelector('#personalized-gender-container');
      const inputPersonalizedGender = document.createElement('input');
      inputPersonalizedGender.type = 'type="text"';
      inputPersonalizedGender.name = 'gender-custom';
      inputPersonalizedGender.placeholder = 'Gênero (opcional)';
      personalizedContainer.appendChild(inputPersonalizedGender);
    }
  });
}

function submitInfo() {
  const rightContent = document.querySelector('.right-content');
  const nameValue = document.querySelector('.names-container input:nth-child(1)').value;
  const surnameValue = document.querySelector('.names-container input:nth-child(2)').value;
  const emailValue = document.querySelector('.register-form>input:nth-child(2)').value;
  const birthdateValue = document.querySelector('.register-form>input:nth-child(5)').value;
  let gender = undefined;
  if (document.querySelector('#personalized-gender-container input')) {
    gender = document.querySelector('#personalized-gender-container input').value;
  } else {
    const femaleField = document.querySelector('#fem-radio');
    const maleField = document.querySelector('#masc-radio');

    if (femaleField.checked) {
      gender = femaleField.value;
    } else if (maleField.checked) {
      gender = maleField.value;
    } 
  }
 
  const greeting = document.createElement('p');
  greeting.innerText = `Olá, ${nameValue} ${surnameValue}`

  const email = document.createElement('p');
  email.innerText = `${emailValue}`

  const birthdate = document.createElement('p');
  birthdate.innerText = `${birthdateValue}`

  const chosenGender = document.createElement('p');
  chosenGender.innerText = `${gender}`
 
  
  while (rightContent.firstChild) {
    rightContent.removeChild(rightContent.firstChild);
  }

  rightContent.appendChild(greeting);
  rightContent.appendChild(email);
  rightContent.appendChild(birthdate);
  rightContent.appendChild(chosenGender);
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

personalizeGenderField() 
validateField();
alertButton();
