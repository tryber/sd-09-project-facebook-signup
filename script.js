const buttonLogin = document.getElementById('button-login');
// const buttonRegister = document.getElementById('facebook-register');
const genderCustom = document.getElementById('other');
const formGroup = document.querySelector('.right-content .form-group');

buttonLogin.addEventListener('click', function () {
  const userEmail = document.getElementById('user-email-phone');
  window.alert(userEmail.value);
});

// Validar form de cadastro



function validateForm() {

  const formInputs = document.querySelectorAll('#register-form input');
  console.log(formInputs)
  let hasInputEmpty = false;

  for(index = 0; index < formInputs.length; index += 1) {

    const inputs = formInputs[index].value;

    if (inputs === '') {

      hasInputEmpty = true;
    
    } 

  }
    
  // Verifica se tem input vazio e exibe mensagem de erro
  if (hasInputEmpty) {
    let form = document.querySelector('#register-form');
    let errorMessage = document.createElement('p');
    errorMessage.textContent = 'Campos inválidos';
    errorMessage.id = 'form-message';
    form.appendChild(errorMessage);
  } else {  
    // Aqui eu vou subtituir o html pelo valor do input
    const formCompleted = document.querySelector('.right-content');
    formCompleted.innerHTML = '';
    for(index = 0; index < formInputs.length; index += 1) {
      const element = document.createElement('p'); 
      let formContent = formInputs[index].value;
      element.innerHTML = formContent;
      formCompleted.appendChild(element);
    }
  }



  /*if(formInput === '') {

    let form = document.querySelector('#register-form');

    let errorMessage = document.createElement('p');

    errorMessage.textContent = 'Campos inválidos';

    errorMessage.id = 'form-message';

    form.appendChild(errorMessage);


  } else {

    let formCompleted = document.querySelector('.right-content');


    let form = [
      firstName, lastName, phoneEmail, password,
      birthdate, female, male, custom
    ];

    formCompleted.innerHTML = '';

    for (index = 0; index < form.length; index += 1) {

      let element = document.createElement('p');

      element.innerHTML = form[index]

      formCompleted.appendChild(element)
    }
    console.log(form)
  }*/
}

function btn() {
  let button = document.querySelector('#facebook-register')

  button.addEventListener('click', validateForm)
}

btn()

function createInputText() {
  const createInput = document.createElement('input');
  createInput.className = 'gender-custom';
  createInput.name = 'gender-custom';
  createInput.placeholder = 'Gênero (opcional)';

  return createInput;
};

genderCustom.addEventListener('click', function () {
  const register = document.querySelector('.form-group .gender-custom');
  if (register === null) {
    formGroup.appendChild(createInputText());
  }
});


// Capturar todos os inputs x
// Percorrer a lista x
// Acessar o valor dos inputs x
// Verificar se estão vazios x
// Se tiverem valor
// Substituir os inputs do form pelo seu valor








/*  







*/













// cria um elemento
// adiciona o valor da lista no elemento
// manda pro html

/*


let firstName = document.querySelector('.first-name').value
  let lastName = document.querySelector('.last-name').value
  let phone_email = document.querySelector('.phone_email').value
  let password = document.querySelector('.password').value
  let birthdate = document.querySelector('.birthdate').value
  let female = document.querySelector('.female').value
  let male = document.querySelector('.male').value
  let custom = document.querySelector('.custom').value

firstName === '' || lastName === '' || phone_email === '' ||
    password === '' || birthdate === '' || female === '' ||
    male === '' || custom === ''
*/
