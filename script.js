const loginButton = document.getElementById('button-login');
const registerButton = document.getElementById('facebook-register');

loginButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  alert('Email ou telefone');
});

registerButton.addEventListener('click', (evt) => {
  evt.preventDefault();
});
