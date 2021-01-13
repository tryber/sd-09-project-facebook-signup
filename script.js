const btnLogin = document.querySelector('#button-login');
btnLogin.addEventListener('click', function () {
  const userMailPhone = document.querySelector('#user-email-phone').value;
  alert(userMailPhone);
});

const fullName = document.createElement('p');
const phoneEmail = document.createElement('p');
const birthdate = document.createElement('p');
const gender2 = document.createElement('p');
function addContent() {
  fullName.innerText = `Olá, ${document.querySelector('#firstname').value} ${document.querySelector('#lastname').value}`;
  phoneEmail.innerText = `Telefone/Email: ${document.querySelector('#phone_email').value}`;
  birthdate.innerText = `Data de Nascimento: ${document.querySelector('#birthdate').value}`;
  document.querySelector('.right-content').appendChild(fullName);
  document.querySelector('.right-content').appendChild(phoneEmail);
  document.querySelector('.right-content').appendChild(birthdate);
  document.querySelector('.right-content').appendChild(gender2);
}
const btnCadastro = document.querySelector('#facebook-register');
btnCadastro.addEventListener('click', (event) => {
  const fields = document.querySelectorAll('.open-account input');
  let campos = false;
  for (let index = 0; index < fields.length - 1; index += 1) {
    if (fields[index].type === 'text') {
      if (fields[index].value === '') {
        break;
      }
    }

    if (fields[index].type === 'radio') {
      if (fields[index].checked) {
        campos = true;
        gender2.innerText = `Gênero: ${fields[index].value}`;
      }
    }
  }

  if (campos === false) {
    event.preventDefault();
    document.querySelector('#campos-invalidos').style.display = 'flex';
  }
  if (campos === true) {
    event.preventDefault();
    for (let index = 0; index <= document.querySelector('.right-content').children.length - 1; index += 1) {
      document.querySelector('.right-content').children[index].style.display = 'none';
    }
    addContent();
  }
});

const genderCustom = document.querySelector('#personalizado');
genderCustom.addEventListener('click', () => {
  document.querySelector('#personalizado-box').style.display = 'flex';
});
const genderMale = document.querySelector('#masculino');
genderMale.addEventListener('click', () => {
  if (document.querySelector('#personalizado-box').style.display === 'flex') {
    document.querySelector('#personalizado-box').style.display = 'none';
  }
});
const genderFemale = document.querySelector('#feminino');
genderFemale.addEventListener('click', () => {
  if (document.querySelector('#personalizado-box').style.display === 'flex') {
    document.querySelector('#personalizado-box').style.display = 'none';
  }
});
