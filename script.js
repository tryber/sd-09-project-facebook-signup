const buttonLogin = document.querySelector('#button-login');
const userEmailPhone = document.querySelector('#user-email-phone');
buttonLogin.addEventListener('click', function () {
  alert(userEmailPhone.value);
});

const facebookRegister = document.querySelector('#facebook-register');
const inputs = document.querySelectorAll('input');
const inputValidation = document.querySelector('#input-validation');
let valido = true;
facebookRegister.addEventListener('click', function (event) {
  event.preventDefault();
  for (let index = 2; index < inputs.length; index += 1) {
    if (inputs[index].value === '') {
      inputs[index].value = 'Campos inválidos';
      inputValidation.innerText = 'Campos inválidos';
      valido = false;
    }
  }
});

const customGender = document.querySelector('#custom-gender');
const personalizado = document.querySelector('#personalizado');
personalizado.addEventListener('click', function () {
  const input = document.createElement('input');
  input.name = 'gender-custom';
  input.placeholder = 'Gênero (opcional)';
  customGender.appendChild(input);
});

facebookRegister.addEventListener('click', function () {
  for (let index = 2; index < inputs.length; index += 1) {
    if (valido){
      const rightContent = document.querySelector('.right-content');
      const nome = inputs[2].value;
      const sobrenome = inputs[3].value;
      const emailTelefone = inputs[4].value;
      const dataNascimento = inputs[6].value;
      let genero;
      if (inputs[7].checked) {
        genero = inputs[7].value;
      } else if (inputs[8].checked) {
        genero = inputs[8].value;
      } else {
        genero = inputs[9].value
      } 
      rightContent.innerText = `Olá, ${nome} ${sobrenome}\n${emailTelefone}\n${dataNascimento}\n${genero}`;
    }
  }
});
