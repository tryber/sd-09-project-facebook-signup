const info = document.getElementById('user-email-phone');

function alertButton() {
  alert(info.value);
}
const botao = document.getElementById('button-login');
botao.addEventListener('click', alertButton);


const showPersonalyzed = () => {
  const divPlaceholderPersonalyzed = document.getElementById('personalyzedPlaceholder');
  const childrenDiv = divPlaceholderPersonalyzed.childNodes;
  if (childrenDiv.length === 0) {
    const inputPersonalyzed = document.createElement('INPUT');
    divPlaceholderPersonalyzed.appendChild(inputPersonalyzed);
    inputPersonalyzed.setAttribute('placeholder', 'Gênero (opcional)');
    inputPersonalyzed.setAttribute('name', 'gender-custom');
  }
};

const removePersonalyzed = () => {
  const divPlaceholderPersonalyzed = document.getElementById('personalyzedPlaceholder');
  const childrenDiv = divPlaceholderPersonalyzed.childNodes;
  if (childrenDiv.length > 0) {
    divPlaceholderPersonalyzed.removeChild(divPlaceholderPersonalyzed.firstChild);
  }
};

const personalizedGender = document.getElementById('personalyzed-gender');
personalizedGender.addEventListener('click', showPersonalyzed);

const otherGender = document.querySelectorAll('.other-gender');
otherGender[0].addEventListener('click', removePersonalyzed);
otherGender[1].addEventListener('click', removePersonalyzed);
