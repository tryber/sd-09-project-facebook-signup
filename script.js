const email = document.querySelector('#user-email-phone');
const botao = document.querySelector('#button-login');
const botaoCadastro = document.querySelector('#facebook-register');
const form1 = document.querySelector('.form-register');
const paragrafoErro = document.createElement('p');
paragrafoErro.classList.add('message-error');
form1.appendChild(paragrafoErro);
const generoPersonalizado = document.querySelector('#gender-custom');
const sessaoGenero = document.querySelector('.gender');

botao.addEventListener('click', () => alert(email.value));
botaoCadastro.addEventListener('click', (event) => {
  event.preventDefault();
  if (paragrafoErro.innerHTML) paragrafoErro.innerHTML = '';
  const mensagemErro = document.createTextNode('Campos inválidos');
  // Baseado no código do Hugo Braga da turma 8
  const resultado = form1.checkValidity();
  if (!resultado) {
    paragrafoErro.appendChild(mensagemErro);
  }
});

function showOptionalGender(event) {
  if (event.target.id === 'personalizado' && event.target.checked) {
    if (generoPersonalizado.style.display === 'none') generoPersonalizado.style.display = 'block';
  } else generoPersonalizado.style.display = 'none';
}

sessaoGenero.addEventListener('click', showOptionalGender);
