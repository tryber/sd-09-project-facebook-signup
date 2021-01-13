function genderInput() {
  const gerderListner = document.querySelector('.gender-control');

  gerderListner.addEventListener('click', function () {
    let radioValue = document.querySelector('input[name="gender"]:checked').value;

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
  const dataUser = document.querySelectorAll('.input')
  let resultCheckDataUser = 0

  for (let index = 0; index < dataUser.length; index += 1) {
    if (dataUser[index].value === '') {
      resultCheckDataUser += 1
    }
  }
  return resultCheckDataUser
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
  paragraphWelcome[1].innerText = `${array[2].value}`;
  paragraphWelcome[2].innerText = `${array[4].value}`;
  paragraphWelcome[3].innerText = `${gender}`;
}

function registerUser() {
  const registerButton = document.querySelector('#facebook-register');
  const dataUser = document.querySelectorAll('.input');

  registerButton.addEventListener('click', function() {
    if (checkDataUser() > 0) {
      const errorMessageLocation = document.querySelector('#invalidFields');
      errorMessageLocation.innerText = 'Campos inválidos';
    } else {
      const selectedGender = document.querySelector('input[name="gender"]:checked')
      
      removeRightContent()
      createParagraph()
      createParagraph()
      createParagraph()
      createParagraph()
      messageWelcome(dataUser, selectedGender.value)
    }
  })
}


/*
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

function messageWelcome(array, gender) {
  const paragraphWelcome = document.querySelectorAll('.welcome');

  paragraphWelcome[0].innerText = `Olá, ${array[0].value} ${array[1].value}`;
  paragraphWelcome[1].innerText = `${array[2].value}`;
  paragraphWelcome[2].innerText = `${array[4].value}`;
  paragraphWelcome[3].innerText = `${gender}`;
}

function checkRegister() {
  const inputLocation = document.querySelectorAll('.input');
  let countInvalidFields = 0;
  const errorMessageLocation = document.querySelector('#invalidFields');
  const registerButton = document.querySelector('#facebook-register');
  let userGender = document.querySelector('input[name="gender"]:checked');
  console.log(userGender)
  registerButton.addEventListener('click', function (event) {
    userGender = document.querySelector('input[name="gender"]:checked');
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
      messageWelcome(inputLocation);
    }
  });
  //console.log(userGender)

  
}


checkRegister();

*/

genderInput();
logIn();
registerUser()
