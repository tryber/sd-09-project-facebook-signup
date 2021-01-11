const facebookRegister = document.getElementById('facebook-register');
facebookRegister.addEventListener('click', validateAndRegister);
document.querySelector('#button-login').addEventListener('click', () => {
    alert(document.querySelector('#user-mail-phone').value);
});
function validateText (formInputs) {
  console.log('validateText');
  let validate = true;
  for (let index = 0; index < formInputs.lenght; index += 1) {
    if (!formInputs[index].value) {
      validate = false;
      console.log(formInputs[index].value);
    }
  }
  return validate;
}

function validateAndRegister (event) {
  const formInputs = document.querySelectorAll('.right-content input');
  let validate = true;
  console.log('validadeAndRegister');
  validate = validateText(formInputs);
  if (validate) {
    event.preventDefault();
  }
}

const rightContent = document.querySelector('.right-content');
  rightContent.innerHTML = `
  <p>Olá, ${nome} ${sobrenome}</p>
  <p>Email: ${email}</p>
  <p>Data de nascimento: ${data}</p>
  <p>Gênero: ${genero}</p>`;
