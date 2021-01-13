function genderInput() {
  const gerderListner = document.querySelector('.gender-control');

  gerderListner.addEventListener('click', function () {
    const radioValue = document.querySelector('input[name="gender"]:checked').value;

    if (radioValue === 'Personalizado') {
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

function checkDataUser() {
  const dataUser = document.querySelectorAll('.input');
  let resultCheckDataUser = 0;

  for (let index = 0; index < dataUser.length; index += 1) {
    if (dataUser[index].value === '') {
      resultCheckDataUser += 1;
    }
  }
  return resultCheckDataUser;
}

function removeRightContent() {
  const rightContentLocation = document.querySelector('.right-content');
  while (rightContentLocation.firstChild) {
    rightContentLocation.removeChild(rightContentLocation.firstChild);
  }
}

function createParagraph() {
  const welcomeMessageLocation = document.createElement('p');
  welcomeMessageLocation.classList.add('welcome');

  const rightContentLocation = document.querySelector('.right-content');

  rightContentLocation.appendChild(welcomeMessageLocation);
}

function messageWelcome(array, gender) {
  const paragraphWelcome = document.querySelectorAll('.welcome');

  paragraphWelcome[0].innerText = `Olá, ${array[0].value} ${array[1].value}`;
  paragraphWelcome[1].innerText = `E-mail: ${array[2].value}`;
  paragraphWelcome[2].innerText = `Nascimento: ${array[4].value}`;
  paragraphWelcome[3].innerText = `Gênero: ${gender}`;
}

function registerUser() {
  const registerButton = document.querySelector('#facebook-register');
  const dataUser = document.querySelectorAll('.input');
  const errorMessageLocation = document.querySelector('#invalidFields');

  registerButton.addEventListener('click', function (event) {
    if (checkDataUser() > 0) {
      event.preventDefault();
      errorMessageLocation.innerText = 'Campos inválidos';
    } else {
      const selectedGender = document.querySelector('input[name="gender"]:checked');

      removeRightContent();
      createParagraph();
      createParagraph();
      createParagraph();
      createParagraph();
      messageWelcome(dataUser, selectedGender.value);
    }
  });
}

genderInput();
logIn();
registerUser();
