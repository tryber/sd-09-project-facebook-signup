const loginButton = document.getElementById('button-login');
loginButton.addEventListener('click', function () {
  alert(document.getElementById('user-email-phone').value);
});


const personalizedGender = document.getElementById('gender-inputp');
personalizedGender.addEventListener('click', function () {
  if (document.getElementById('gender-input') === null) {
    const customGender = document.getElementById('custom-gender');
    const newGenderInput = document.createElement('input');
    newGenderInput.type = 'text';
    newGenderInput.name = 'gender-custom';
    newGenderInput.placeholder = 'Gênero (opcional)';
    newGenderInput.id = 'gender-input';
    customGender.appendChild(newGenderInput);
  }
});

function validateForm(event) {
  event.preventDefault();
  const requiredItems = document.querySelectorAll('.required');
  const checkedInput = document.querySelector('input[type="radio"]:checked');
  const validateMessage = document.getElementById('validate-message');
  let validate = true;
  for (let index = 0; index < requiredItems.length; index += 1) {
    if (requiredItems[index].value === null || checkedInput === null) {
      validateMessage.innerText = 'Campos inválidos';
      validate = false;
    }
  }
  return validate;
}

function changeContent(event) {
  if (validateForm(event)) {
    const name = document.querySelector('#firstname').value;
    const lastname = document.querySelector('#lastname').value;
    const email = document.querySelector('#phone_email').value;
    const birthdate = document.querySelector('#birthdate-input').value;
    const gender = document.querySelector('input[type="radio"]:checked').value;
    const rightContent = document.querySelector('.right-content');
    rightContent.innerHTML = '';
    const newtext1 = document.createElement('h2');
    newtext1.innerText = `Olá, ${name} ${lastname}`;
    const newText2 = document.createElement('p');
    newText2.innerText = `${email}
    ${birthdate}
    ${gender}`;
    rightContent.appendChild(newtext1);
    rightContent.appendChild(newText2);
  }
}

const registerBtn = document.getElementById('facebook-register');
registerBtn.addEventListener('click', changeContent);
