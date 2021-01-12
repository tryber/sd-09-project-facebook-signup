function logIn() {
  const buttonListener = document.getElementById('button-login');

  buttonListener.addEventListener('click', function () {
    alert(document.getElementById('user-email-phone').value);
  });
}

logIn();

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

genderInput();
