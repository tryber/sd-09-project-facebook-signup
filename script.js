const btnEntrar = document.querySelector('#button-login');                                      // Botao de Login
const btnSubmit = document.querySelector('#facebook-register');                                 // Botao de Cadastro
const valueEmail = document.querySelector('#user-email-phone');                                 // Capturando campo Email de Entrada
const paragraphInvalidation = document.querySelector('#invalid');                               // Capturando paragrafo que irá entrar o texto de invalidação do cadastro
const content = document.querySelector('.right-content');                                       // Capturando o container direito que esta o formulário
const containerGender = document.querySelector('#container-gender-id');                         // DIV container dos Labels e Radio Buttons
const genderCustom = document.querySelector('#personalizado');                                  // Radio button do personalizado
const divGenderCustom = document.querySelector('#input-gender');                                // DIV para colocar o input do personalizado
const inputText = document.querySelectorAll('.input-text-inscription');                         // Capturando todos os inputs do tipo Texto
const text = document.querySelectorAll('.text');                                                // Capturando todos os inputs do tipo Texto mas sem o Input da Senha
const inputRadio = document.querySelectorAll('.input-radio-inscription');                       // Capturando todos os inputs do tio Radio
const inputGenderCamp = document.createElement('input');                                        // Criando o input do personalizado
const h2 = document.createElement('h2');                                                        // Criando título que terá o nome do inscrito

function congratulations() {
  const radio = document.querySelector('.input-radio-inscription[type="radio"]:checked').value;
  content.innerHTML = '';
  h2.innerText = `Olá, ${text[0].value} ${text[1].value}`;
  content.appendChild(h2);
  for (let index = 2; index < text.length; index += 1) {
    const p = document.createElement('p');
    p.innerText = text[index].value;
    content.appendChild(p);
  }
  const p = document.createElement('p');
  p.innerText = radio;
  content.appendChild(p);
}

function validationText() {
  for (let index = 0; index < inputText.length; index += 1) {
    if (inputText[index].value === '') {
      return false;
    }
  }
  return true;
}

function validationRadio() {
  for (let index = 0; index < inputRadio.length; index += 1) {
    if (inputRadio[index].checked) {
      return true;
    }
  }
  return false;
}

function validation(event) {
  event.preventDefault();
  if (!validationText() || !validationRadio()) {
    paragraphInvalidation.innerText = 'Campos inválidos';
  }
  if (validationText() && validationRadio()) {
    congratulations();
  }
}

function inputGender(event) {
  if (event.target === genderCustom) {
    inputGenderCamp.name = 'gender-custom';
    inputGenderCamp.placeholder = 'Gênero (opicional)';
    divGenderCustom.appendChild(inputGenderCamp);
  }
}

btnSubmit.addEventListener('click', validation);
btnEntrar.addEventListener('click', () => alert(valueEmail.value));
containerGender.addEventListener('click', inputGender);
