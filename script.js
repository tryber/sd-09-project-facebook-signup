const email = document.querySelector('#user-email-phone');
const botao = document.querySelector('#button-login');
const botaoCadastro = document.querySelector('#facebook-register');
const form1 = document.querySelector('.form-register');
const errorParagraph = document.createElement('p');
errorParagraph.classList.add('message-error');
form1.appendChild(errorParagraph);

botao.addEventListener('click', () => alert(email.value));
botaoCadastro.addEventListener('click', (event) => {
  event.preventDefault();
  if (errorParagraph.innerHTML) errorParagraph.innerHTML = '';
    const mensagemErro = document.createTextNode('Campos inválidos');
    // Baseado no código do Hugo Braga da turma 8
    const resultado = form1.checkValidity();
    if (!resultado) {
      errorParagraph.appendChild(mensagemErro);
    }
});
