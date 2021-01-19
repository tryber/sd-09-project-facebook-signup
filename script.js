const btnReg = document.getElementById('facebook-register');
const btnEntrar = document.getElementById('button-login');
const inputEmail = document.getElementById('user-email-phone');
const listInputRadioCad = document.getElementsByClassName('isRadio');
const listImputNoRadioCad = document.getElementsByClassName('forms-cad');
const forms = document.getElementsByClassName('form-cadastro');

function addlistener(obj, func) {
  obj.addEventListener('click', func);
}


function isEmpty(obj) {
  for (let index = 0; index < obj.length; index += 1) {
    if (obj[index].value === '') {
      return true;
    }
  }
  return false;
}

function isCheck(obj) {
  for (let index = 0; index < obj.length; index += 1) {
    if (obj[index].checked) {
      return true;
    }
  }
  return false;
}

function createElementCI() {
  const element = document.createElement('p');
  element.innerText = 'Campos inválidos';
  element.classList.add('msg-erro');
  forms[0].appendChild(element);
}

function verifyInputValue(event) {
  event.preventDefault();

  if (isEmpty(listImputNoRadioCad)) {
    createElementCI();
  } else if (!isCheck(listInputRadioCad)) {
    createElementCI();
  }
}


addlistener(btnEntrar, () => alert(inputEmail.value));
addlistener(btnReg, verifyInputValue);
