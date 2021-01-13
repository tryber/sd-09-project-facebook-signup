function genderInput() {
  const gerderListener = document.querySelector('.gender-control');

  gerderListener.addEventListener('click', function (event) {
    const radioValue = event.target;

    if (radioValue.value === 'Personalizado') {
      document.querySelector('.other-gender').style.display = 'block';
    } else {
      document.querySelector('.other-gender').style.display = 'none';
    }
  });
}

function logIn() {
  const buttonListener = document.getElementById('button-login');

  buttonListener.addEventListener('click', function () {
    alert(document.getElementById('user-email-phone').value);
  });
}

function createParagraph() {
  const welcomeMessageLocation = document.createElement('p');
  welcomeMessageLocation.classList.add('welcome');

  const rightContentLocation = document.querySelector('.right-content');

  rightContentLocation.appendChild(welcomeMessageLocation);
}

function removeRightContent() {
  const rightContentLocation = document.querySelector('.right-content');
  while (rightContentLocation.firstChild) {
    rightContentLocation.removeChild(rightContentLocation.firstChild);
  }
}

function messageWelcome(array, string) {
  const paragraphWelcome = document.querySelectorAll('.welcome');

  paragraphWelcome[0].innerText = `Olá, ${array[0].value} ${array[1].value}`;
  paragraphWelcome[1].innerText = `${array[2].value}`;
  paragraphWelcome[2].innerText = `${array[4].value}`;
  paragraphWelcome[3].innerText = `${string}`;
}

function checkRegister() {
  const inputLocation = document.querySelectorAll('.input');
  let countInvalidFields = 0;
  const errorMessageLocation = document.querySelector('#invalidFields');
  const registerButton = document.querySelector('#facebook-register');
  const userGender = document.querySelector('input[name="gender"]').value;
  // Tá dificil referenciar o valor do input, sendo que por padrão ele é radio, 
  // mas pode ter um text se for personalizado, aí o :checked não funciona bem.

  registerButton.addEventListener('click', function (event) {
    for (let index = 0; index < inputLocation.length; index += 1) {
      if (inputLocation[index].value === '') {
        countInvalidFields += 1;
      }
    }

    if (countInvalidFields > 0) {
      event.preventDefault();
      errorMessageLocation.innerText = 'Campos inválidos';
    } else {
      removeRightContent();
      createParagraph();
      createParagraph();
      createParagraph();
      createParagraph();
      messageWelcome(inputLocation, userGender);
    }
  });
}

genderInput();
checkRegister();
logIn();
