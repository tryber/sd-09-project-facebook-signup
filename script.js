const entrarButton = document.getElementById('button-login');

function clickButton() {
  entrarButton.addEventListener('click', function () {
    const loginName = document.getElementById('user-email-phone').value;
    alert(`${loginName}`);
  });
}

clickButton();

const rightContent = document.querySelector('.right-content');
const formsContent = rightContent.querySelectorAll('input');
let verifyContent = 0;

function rightSideChange() {
  if (verifyContent >= 5) {
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const birthDate = document.getElementById('birth-date').value;
    let genderValue = '';
    const maleBtn = document.getElementById('btn-masculino');
    const femaleBtn = document.getElementById('btn-feminino');
    const otherBtn = document.getElementById('btn-personalizado');
    if (maleBtn.checked) {
      genderValue = maleBtn.value;
    } else if (femaleBtn.checked) {
      genderValue = femaleBtn.value;
    } else if (otherBtn.checked) {
      genderValue = otherBtn.value;
    }
    const rightSide = document.querySelector('.right-content');
    rightSide.innerHTML = '';
    const rightSideText = document.createElement('h2');
    const text = `Olá, ${firstName} ${lastName} Email ou Telefone: ${email} Data de Nascimento: ${birthDate} Gênero: ${genderValue}`;
    const rightSideTextContent = document.createTextNode(text);
    rightSideText.appendChild(rightSideTextContent);
    rightSide.appendChild(rightSideText);
  }
}

function formsCheck() {
  const btnSubmit = document.getElementById('facebook-register');
  btnSubmit.addEventListener('click', function (event) {
    for (let i = 0; i < 5; i += 1) {
      if (formsContent[i].value === '') {
        formsContent[0].placeholder = 'Preencha seu nome';
        formsContent[1].placeholder = 'Preencha seu sobrenome';
        formsContent[2].placeholder = 'Preencha celular ou e-mail';
        formsContent[3].placeholder = 'Preencha sua senha';
        formsContent[4].placeholder = 'Preencha seu nascimento';
        document.getElementById('mensagem-campos-invalidos').innerHTML =
          'Campos inválidos';
        document.getElementById('mensagem-campos-invalidos').style.color =
          'red';
        event.preventDefault();
      } else {
        verifyContent += 1;
      }
    }
    rightSideChange();
  });
}
formsCheck();
