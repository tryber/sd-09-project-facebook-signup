const email = document.querySelector('#user-email-phone');
const botao = document.querySelector('#button-login');
const botaoCadastro = document.querySelector('#facebook-register');
const form1 = document.querySelector('.form-register');
const paragrafoErro = document.createElement('p');
paragrafoErro.classList.add('message-error');
form1.appendChild(paragrafoErro);
const generoPersonalizado = document.querySelector('#gender-custom');
const sessaoGenero = document.querySelector('.gender');
const rightContent = document.querySelector('.right-content');

function genereteNewRightContent() {
  rightContent.innerHTML = '';

  const name = document.createElement('p');
  name.innerHTML = `Olá, ${form1.firstname.value} ${form1.lastname.value}`;
  rightContent.appendChild(name);

  const emailTelefone = document.createElement('p');
  emailTelefone.innerHTML = `${form1.phone_email.value}`;
  rightContent.appendChild(emailTelefone);

  const dataNascimento = document.createElement('p');
  dataNascimento.innerHTML = `${form1.birthdate.value}`;
  rightContent.appendChild(dataNascimento);

  const genero = document.createElement('p');
  genero.innerHTML = `${form1.gender.value}`;
  rightContent.appendChild(genero);
}

botao.addEventListener('click', () => alert(email.value));
botaoCadastro.addEventListener('click', (event) => {
  event.preventDefault();
  if (paragrafoErro.innerHTML) paragrafoErro.innerHTML = '';
  const mensagemErro = document.createTextNode('Campos inválidos');
  // Baseado no código do Hugo Braga da turma 8
  const resultado = form1.checkValidity();
  if (!resultado) {
    paragrafoErro.appendChild(mensagemErro);
  } else if (resultado) genereteNewRightContent();
});

function showOptionalGender(event) {
  if (event.target.id === 'personalizado' && event.target.checked) {
    if (generoPersonalizado.style.display === 'none') generoPersonalizado.style.display = 'block';
  } else generoPersonalizado.style.display = 'none';
}

sessaoGenero.addEventListener('click', showOptionalGender);
