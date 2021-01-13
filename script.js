const buttonLogin = document.getElementById('button-login');
// const buttonRegister = document.getElementById('facebook-register');


buttonLogin.addEventListener('click', function () {
  const userEmail = document.getElementById('user-email-phone');
  window.alert(userEmail.value);
});

// Validar form de cadastro

function validateForm() {

  let firstName = document.querySelector('.first-name').value
  let lastName = document.querySelector('.last-name').value
  let phone_email = document.querySelector('.phone_email').value
  let password = document.querySelector('.password').value
  let birthdate = document.querySelector('.birthdate').value
  let female = document.querySelector('.female').value
  let male = document.querySelector('.male').value
  let custom = document.querySelector('.custom').value


  if (firstName === '' || lastName === '' || phone_email === '' ||
    password === '' || birthdate === '' || female === '' ||
    male === '' || custom === '') {

    let form = document.querySelector('#register-form')

    let errorMessage = document.createElement('p')

    errorMessage.textContent = 'Campos inválidos'

    errorMessage.id = 'form-message'

    form.appendChild(errorMessage)


  } else {
    console.log('foi')
  }

}

function btn() {
  let button = document.querySelector('#facebook-register')

  button.addEventListener('click', validateForm)
}

btn()

// Recuperar o form  x
// Percorrer o form x
// Recuperar os valores dos inputs 
// Verificar se estão vazios 
// Se estiver vazio, exibir a mensagem de erro
// Se estiver preenchido, ok

