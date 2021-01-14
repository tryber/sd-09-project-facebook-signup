const btnAlert = document.getElementById('button-login');

function showAlert() {
  alert(document.getElementById('user-email-phone').value);
}
btnAlert.addEventListener('click', showAlert);

const otherGender = document.getElementById('other');

function personalizedGender () {
  const father = document.getElementById('inputParent')
  const child = document.createElement('input')
  father.appendChild(child)
  child.setAttribute('name', 'gender-custom');
  child.setAttribute('placeholder', 'Gênero(opcional)')
}

otherGender.addEventListener('click',personalizedGender );