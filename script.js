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
const rightElement = document.getElementsByClassName('right-content')[0];
let alvo;
const persona = [];

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
  element.name = 'gender-custom';
  inputG[0].appendChild(element);
}

function makePersona() {
  getGenero();
  persona.nome = `${document.getElementById('nome').value} ${document.getElementById('sobre-nome').value}`;
  persona.emailOrPhone = document.getElementById('contato').value;
  persona.DtNasc = document.getElementById('dt-nasc').value;

  return `Olá, ${persona.nome}. iremos te encontrar por aqui: ${persona.emailOrPhone} no seu anivesário no dia ${persona.DtNasc}. Você selecionou: ${persona.genero}`;
}

function makeMsg() {
  const main = document.getElementsByClassName('main-content')[0];
  const element = document.createElement('p');

  element.classList.add('right-contet');
  element.innerText = makePersona();

  rightElement.remove();
  main.appendChild(element);
}

function verifyInputValue(event) {
  event.preventDefault();

  if (isEmpty(listImputNoRadioCad)) {
    createElementCI();
  } else if (!isCheck(listInputRadioCad)) {
    createElementCI();
  } else {
    makeMsg();
  }
}

function testeIfCheckRadio() {
  isCheck(listInputRadioCad);
  if (alvo === 'other') {
    createElementInput();
  } else {
    const element = document.getElementsByClassName('input-personalizado');
    element[0].remove();
  }
}

function getGenero() {
  isCheck(listInputRadioCad);
  if (alvo === 'other') {
    persona.genero = 'Personalizado';
  } else if (alvo === 'male') {
    persona.genero = 'Masculino';
  } else {
    persona.genero = 'Feminino';
  }
}


addlistener(btnEntrar, () => alert(inputEmail.value));
addlistener(btnReg, verifyInputValue);
addlistener(radioPersonalizadoO, testeIfCheckRadio);
addlistener(radioPersonalizadoM, testeIfCheckRadio);
addlistener(radioPersonalizadoF, testeIfCheckRadio);
