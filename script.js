function logIn() {
  const buttonListener = document.getElementById('button-login');

  buttonListener.addEventListener('click', function () {
    alert(document.getElementById('user-email-phone').value);
  });
}

logIn();

function genderInput() {
  const flagGenderOption = document.querySelector('.gender-box');
  const otherGenderOption = document.querySelector('.other-gender');

  flagGenderOption.addEventListener('click', function() {
    otherGenderOption.style.display = "block";
  });
}

genderInput();