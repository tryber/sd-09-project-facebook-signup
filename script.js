const btnEntrar = document.querySelector('#button-login');

function addAlert() {
  btnEntrar.addEventListener ('click', function() {
    const valueEmail = document.querySelector('#user-email-phone');
    alert(valueEmail.value);
  });
}

addAlert();
