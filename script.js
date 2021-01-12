const btnReg = document.getElementById('facebook-register');
const btnEntrar = document.getElementById('button-login');
const inputEmail = document.getElementById('user-email-phone');
const listInputRadioCad = document.getElementsByClassName('isRadio');
const listImputNoRadioCad = document.getElementsByClassName('forms-cad');

function addlistener(obj, func) {
  obj.addEventListener('click', func);
}

function alertMsgLogIn() {
  alert(inputEmail.value);
}

function isEmpty(obj){
  for(let index = 0; index < obj.length; index +=1) {
    if(obj[index].value == "") {
      return true;
    }
  }
  return false;
}

function isCheck(obj) {
  for(let index = 0; index < obj.length; index +=1) {
    if(obj[index].checked) {
      return true;
    }
  }
  return false;
}

function verifyInputValue(event) {
  event.preventDefault();

  if(isEmpty(listImputNoRadioCad)){
    alert('Campos inválidos');
  } else if (!isCheck(listInputRadioCad)){
    alert('Campos inválidos');
  }
}


addlistener(btnEntrar, alertMsgLogIn);
addlistener(btnReg ,verifyInputValue)
