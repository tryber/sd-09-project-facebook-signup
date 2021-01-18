window.onload = function () {
  const button = document.querySelector('#button-login');
//mudança de commit para submissão do projeto
  const input = document.querySelector('#user-email-phone');

  button.addEventListener('click', function () {
    return alert(input.value);
  });
};
