function showLoginData(evt) {
  evt.preventDefault();
  const loginEmailPhone = document.getElementById('user-email-phone').value;
  alert(loginEmailPhone);
}

const btnEntrar = document.getElementById('button-login');
btnEntrar.addEventListener('click', showLoginData);


const registerButton = document.getElementById('facebook-register');

registerButton.addEventListener('click', () => {
  const rightContent = document.querySelector('.right-content');
  alert('clickou')
})
