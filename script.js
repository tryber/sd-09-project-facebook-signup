const getInfo = () => {
  let info = [];
  const nome = document.querySelectorAll('.validation')[0].value;
  const sobrenome = document.querySelectorAll('.validation')[1].value;
  const emailPhone = document.querySelectorAll('.validation')[2].value;
  const date = document.querySelectorAll('.validation')[4].value;

  let gender = '';
  const genders = document.querySelectorAll('.gender');
  for (let i = 0; i < genders.length; i += 1) {
    if (genders[i].checked) {
      gender = genders[i].value;
    }    
  }

  info.push(nome, sobrenome, emailPhone, date, gender);
  return info;
};

// Button Alert
const buttonLogin = document.querySelector('#button-login');
buttonLogin.addEventListener('click', () => {
  const userEmailPhone = document.querySelector('#user-email-phone');
  alert(userEmailPhone.value);
});

// Validation
const inputs = document.querySelectorAll('.validation');
const functionValidation = () => {
  inputs.forEach((input) => {
    if (!input.value) {
      const message = document.querySelector('.message');
      message.style.display = 'block';
      return false;
    }
  });
  return true;
};

// Optional gender
const gender = document.querySelectorAll('.gender');
const input = document.querySelector('.optional-input');

for (let i = 0; i < gender.length; i += 1) {
  gender[i].addEventListener('click', () => {
    if (gender[2].checked) {
      input.style.display = 'block';
    } else {
      input.style.display = 'none';
    }
  });
}

// Show Infos
const buttonSubmit = document.querySelector('#facebook-register');
buttonSubmit.addEventListener('click', (event) => {
  event.preventDefault();
  if (functionValidation()) {
    const content = document.querySelector('.right-content');
    let info = getInfo();
    content.innerHTML = '';

    const salution = document.createElement('h2');
    salution.innerHTML = `Olá, ${info[0]} ${info[1]}`;
    content.appendChild(salution);
    const email = document.createElement('p');
    email.innerHTML = info[2];
    content.appendChild(email);
    const birthday = document.createElement('p');
    birthday.innerHTML = info[3];
    content.appendChild(birthday);
    const gender = document.createElement('p');
    gender.innerHTML = info[4];
    content.appendChild(gender);
  }
});
