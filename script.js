const info = document.getElementById('user-email-phone');

function alertButton() {
  alert(info.value);
}
const botao = document.getElementById('button-login');
botao.addEventListener('click', alertButton);


const showPersonalyzed = () => {
  let divPlaceholderPersonalyzed = document.getElementById("personalyzedPlaceholder");
  let childrenDiv = divPlaceholderPersonalyzed.childNodes;
  if (childrenDiv.length > 0){
  } else {
  let inputPersonalyzed = document.createElement("INPUT");
  divPlaceholderPersonalyzed.appendChild(inputPersonalyzed);
  inputPersonalyzed.setAttribute('placeholder', 'Gênero (opcional)');
  inputPersonalyzed.setAttribute('name', 'gender-custom');
  }  
}

const removePersonalyzed = () => {
  let divPlaceholderPersonalyzed = document.getElementById("personalyzedPlaceholder");
  let childrenDiv = divPlaceholderPersonalyzed.childNodes;
  if (childrenDiv.length > 0){
    divPlaceholderPersonalyzed.removeChild(divPlaceholderPersonalyzed.firstChild);
  } else {
  }
}

const personalizedGender = document.getElementById("personalyzed-gender");
personalizedGender.addEventListener('click', showPersonalyzed);

const otherGender = document.querySelectorAll(".other-gender");
otherGender[0].addEventListener("click", removePersonalyzed);
otherGender[1].addEventListener("click", removePersonalyzed);