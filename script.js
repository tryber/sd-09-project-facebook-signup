const button = document.getElementById('button-login');
button.addEventListener('click', function () {
  alert(document.getElementById('user-email-phone').value);
});

function welcomeMessege() {
  const rigthContent = document.getElementById('right-content');
  const inputName = document.getElementsByName('firstname')[0].value;
  const inputLastname = document.getElementsByName('lastname')[0].value;
  const text = document.createElement('p');
  text.innerHTML = `Olá, ${inputName} ${inputLastname}`;
  const inputEmail = document.getElementsByName('phone_email')[0].value;
  const email = document.createElement('p');
  email.innerHTML = ` e-mail ou telefone: ${inputEmail}`;
  const birthdate = document.getElementsByName('birthdate')[0].value;
  const birth = document.createElement('p');
  birth.innerHTML = `Data de nascimento: ${birthdate}`;
  const gender = document.getElementsByClassName('input-gender');
  const g = document.createElement('p');

  for (var i = 0, length = gender.length; i < length; i++) {
    if (gender[i].checked) {
      if(gender[i].value == 'Personalizado') {
        g.innerHTML = `Personalizado`;
         break;
      }
      g.innerHTML = `${gender[i].value}`;
      break;
    }
  }

  rigthContent.innerHTML = '';
  rigthContent.appendChild(text);
  rigthContent.appendChild(email);
  rigthContent.appendChild(birth);
  rigthContent.appendChild(g);
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
