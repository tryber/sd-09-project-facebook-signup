const btnReg = document.getElementById('facebook-register');
const btnEntrar = document.getElementById('button-login');
const inputEmail = document.getElementById('user-email-phone');
const listInputRadioCad = document.getElementsByClassName('isRadio');
const listImputNoRadioCad = document.getElementsByClassName('forms-cad');
const forms = document.getElementsByClassName('form-cadastro');
const inputG = document.getElementsByClassName('input-gen');
const radioPersonalizadoO = document.getElementById('other');
const radioPersonalizadoM = document.getElementById('male');
const radioPersonalizadoF = document.getElementById('female');
let alvo;

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
      alvo = obj[index].id;
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

function createElementInput() {
  const element = document.createElement('input');
  element.placeholder = 'Gênero (opcional)';
  element.classList.add('input-personalizado');
  inputG[0].appendChild(element);
}

function verifyInputValue(event) {
  event.preventDefault();

  if (isEmpty(listImputNoRadioCad)) {
    createElementCI();
  } else if (!isCheck(listInputRadioCad)) {
    createElementCI();
  }
}

function testeIfCheckRadio() {
  isCheck(listInputRadioCad);
  if(alvo === 'other'){
    createElementInput();
  } else {
    const element = document.getElementsByClassName('input-personalizado'); 
    element[0].remove();
  }
}


addlistener(btnEntrar, () => alert(inputEmail.value));
addlistener(btnReg, verifyInputValue);
addlistener(radioPersonalizadoO, testeIfCheckRadio);
addlistener(radioPersonalizadoM, testeIfCheckRadio);
addlistener(radioPersonalizadoF, testeIfCheckRadio);
