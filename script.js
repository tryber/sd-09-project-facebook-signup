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

function messageWelcome(array, string) {
  const paragraphWelcome = document.querySelectorAll('.welcome');

  paragraphWelcome[0].innerText = `Olá, ${array[0].value} ${array[1].value}`;
  paragraphWelcome[1].innerText = `${array[2].value}`;
  paragraphWelcome[2].innerText = `${array[4].value}`;
  paragraphWelcome[3].innerText = `${string}`;
}

// function genderReturn() {
//   const selectedRadio = document.querySelector('input[name="gender"]:checked').value;
//   if (selectedRadio.length > 1) {
//     return selectedRadio;
//   } else {
//     selectedRadio = document.querySelector('input[name="gender-custom"]').value;
//     return selectedRadio;
//   }
// }
// função para pegar o valor do gênero, mas ele inicia com erro por n ter nada selecionado no radio

function checkRegister() {
  const inputLocation = document.querySelectorAll('input');
  const errorMessageLocation = document.querySelector('#invalidFields');
  const registerButton = document.querySelector('#facebook-register');
  const userGender = 'Gênero'; // aqu entraria a função genderReturn

  registerButton.addEventListener('click', function (event) {
    let countInvalidFields = 0; 
    // coloquei a variavel aqui dentro da função, pq ela estava acumulando os vazios de outros click
    for (let index = 0; index < inputLocation.length; index += 1) {
      if (inputLocation[index].value === '') {
        // me parece que aqui ele não está pegando os radios
        countInvalidFields += 1;
      }
    }
    console.log(countInvalidFields);
    if (countInvalidFields > 3) {
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
