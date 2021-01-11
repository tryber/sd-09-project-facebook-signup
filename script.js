const email = document.querySelector('#user-email-phone');
const botao = document.querySelector('#button-login');
const botaoCadastro = document.querySelector('#facebook-register');
const newUser = document.querySelector('.usuario');
botao.addEventListener('click', () => alert(email.value));
botaoCadastro.addEventListener('click', (event) => {
  const mensagemErro = document.createTextNode('Campos inválidos');
  event.preventDefault();
  // Baseado no código do Hugo Braga da turma 8
  const resultado = newUser.checkValidity();
  if (!resultado) {
    newUser.appendChild(mensagemErro);
  }
});
