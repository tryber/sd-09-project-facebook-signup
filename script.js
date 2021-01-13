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

function checkRegister() {
  const inputLocation = document.querySelectorAll('.input');
  let countInvalidFields = 0;
  const errorMessageLocation = document.querySelector('#invalidFields');
  const registerButton = document.querySelector('#facebook-register');
  let userData = []

  console.log(userData)
  registerButton.addEventListener('click', function (event) {
    for (let index = 0; index < inputLocation.length; index += 1) {
      if (inputLocation[index].value === '') {
        countInvalidFields += 1;
      } else {
        userData.push(inputLocation[index].value)
      }
    }

    console.log(userData)
    if (countInvalidFields > 0) {
      event.preventDefault();
      errorMessageLocation.innerText = 'Campos inválidos';
    } else {
      const rightContentLocation = document.querySelector('.right-content')
      while (rightContentLocation.firstChild) {
        rightContentLocation.removeChild(rightContentLocation.firstChild)
      }

      let welcomeMessageLocation = document.createElement('p');
      welcomeMessageLocation.innerText = `Olá ${userData[0]} ${userData[1]}, ${userData[2]} e ${userData[4]}`
      console.log(userData)
      rightContentLocation.appendChild(welcomeMessageLocation)
    }
    console.log(userData)
  });
}


checkRegister();
genderInput();
logIn();
