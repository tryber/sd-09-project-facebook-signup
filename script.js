const button = document.getElementById('button-login');
button.addEventListener('click', function () {
  alert(document.getElementById('user-email-phone').value);
});

function Checked(genders) {
    for (let i = 0, length = genders.length; i < length; i += 1 ) {
    if (genders[i].checked) {
      return `${genders[i].value}`;
    }
  }
}

function FactoryFormValue() {
  const inputName = document.getElementsByName('firstname')[0].value;
  const inputLastname = document.getElementsByName('lastname')[0].value;
  const inputEmail = document.getElementsByName('phone_email')[0].value;
  const birthdate = document.getElementsByName('birthdate')[0].value;
  const gender = document.getElementsByClassName('input-gender');
  const genderValue = Checked(gender);
  return {
    InputName: inputName,
    InputLastName: inputLastname,
    InputEmail: inputEmail,
    BirthDate: birthdate,
    GenderValue: genderValue,
  }
}

function welcomeMessege() {
  const factory = FactoryFormValue()
  const rigthContent = document.getElementById('right-content');
  const text = document.createElement('p');
  text.innerHTML = `Olá, ${factory.inputName} ${factory.inputLastname}`;
  const email = document.createElement('p');
  email.innerHTML = ` e-mail ou telefone: ${factory.inputEmail}`;
  const birth = document.createElement('p');
  birth.innerHTML = `Data de nascimento: ${factory.birthdate}`;
  const gender = document.createElement('p');
  gender.innerHTML = `${factory.GenderValue}`;

  rigthContent.innerHTML = '';
  rigthContent.appendChild(text);
  rigthContent.appendChild(email);
  rigthContent.appendChild(birth);
  rigthContent.appendChild(gender);
}

function checkInput() {
  const form = document.getElementById('signup-form');
  const inputName = document.getElementsByName('firstname')[0].value;
  const inputLastname = document.getElementsByName('lastname')[0].value;
  const inputEmail = document.getElementsByName('phone_email')[0].value;
  const inputPassword = document.getElementsByName('password')[0].value;
  const birthdate = document.getElementsByName('birthdate')[0].value;
  if (inputName === '' || inputLastname === '' || inputEmail === '' || inputPassword === '' || birthdate === '') {
    form.innerHTML = 'Campos inválidos';
  } else {
    welcomeMessege();
  }
}

document.getElementById('facebook-register').addEventListener('click', checkInput);

function newGender() {
  const genderForm = document.getElementById('gender-form');
  const newInput = document.createElement('input');
  newInput.name = 'gender-custom';
  newInput.placeholder = 'Gênero (opcional)';
  genderForm.appendChild(newInput);
}

document.getElementById('personalizado').addEventListener('click', newGender);
