function alertEmailOrPhone() {
  const inputEmailPhone = document.querySelector('#button-login');
  const inputUserName = document.querySelector('#user-email-phone');
  inputEmailPhone.addEventListener('click', function () {
    alert(inputUserName.value);
  });
}

function verifyCheckedRadioInputs(listElements) {
  let checkBoxGender = '';
  for (let index = 2; index < listElements.length; index += 1) {
    if (listElements[index].checked) {
      checkBoxGender = listElements[index].value;
      if (listElements[index].value === 'Personalizado') {
        checkBoxGender = listElements[10].value;
      }
    }
  }
  return checkBoxGender;
}

function clearRightSide(listElements) {
  for (let index = listElements[0].children.length - 1; index >= 0 ; index -= 1) {
    listElements[0].removeChild(listElements[0].children[index]);
  }
}

function createAnswerLayout() {
  const rightSideList = document.querySelectorAll('.right-content');
  const inputs = document.querySelectorAll('input');
  // create elements to the card after verified
  const greetings = document.createElement('h3');
  const email = document.createElement('p');
  const birthdate = document.createElement('p');
  const gender = document.createElement('p');
  greetings.innerText = `Olá ${inputs[2].value}, ${inputs[3].value}`;
  email.innerText = inputs[4].value;
  birthdate.innerText = inputs[6].value;
  // get the checked radio input
  gender.innerText = verifyCheckedRadioInputs(inputs);
  // clear the right side
  clearRightSide(rightSideList);
  // create answer layout
  rightSideList[0].appendChild(greetings);
  rightSideList[0].appendChild(email);
  rightSideList[0].appendChild(birthdate);
  rightSideList[0].appendChild(gender);
}

function validateForm() {
  const formSubscribe = document.querySelector('#form-subscribe');
  const formSubscribeSubmitButton = document.querySelector('#facebook-register');
  const paragraph = document.querySelector('#message');
  formSubscribeSubmitButton.addEventListener('click', function (event) {
    event.preventDefault();
    if (!formSubscribe.checkValidity()) {
      paragraph.innerText = 'Campos inválidos';
    } else {
      paragraph.innerText = '';
      createAnswerLayout();
    }
  });
}

function gender() {
  const formSubscribe = document.querySelector('#form-subscribe');
  const radioGender = document.querySelector('#gender-custom');
  const buttonSubmitForm = document.querySelector('#facebook-register');
  radioGender.addEventListener('click', function () {
    const trigger = document.querySelectorAll('#input-gender3').length;
    if (trigger === 0) {
      const inputGender = document.createElement('input');
      inputGender.id = 'input-gender3';
      inputGender.name = 'gender-custom';
      inputGender.placeholder = 'Gênero (opcional)';
      inputGender.className = 'form-subscrib-full-line';
      inputGender.required = true;
      formSubscribe.insertBefore(inputGender, buttonSubmitForm);
    } else {
      formSubscribe.removeChild(buttonSubmitForm.previousSibling);
    }
  });
}

validateForm();
alertEmailOrPhone();
gender();
