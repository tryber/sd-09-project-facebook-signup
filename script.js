const buttonLogin = document.querySelector('#button-login');
const userEmailPhone = document.querySelector('#user-email-phone');
const buttonFacebookRegister = document.querySelector('.facebook-register');

buttonFacebookRegister.addEventListener('click', () => {
  const completeForm = document.querySelectorAll('#register-form input');
  for (let index = 0; index < completeForm.length; index += 1) {
    if(completeForm[index].value === '') {
      return alert('Campos inválidos');
    }
  }
});

buttonLogin.addEventListener('click', () => {
  alert(userEmailPhone.value);
});
