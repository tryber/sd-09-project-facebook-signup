// Global variables
const getInputs = document.querySelectorAll("#register-form input");
const getRegisterBnt = document.querySelector("#facebook-register");
const getButton = document.querySelector("#button-login");
const rightContent = document.querySelector(".right-content");

// Checar campos vazios
function checkEmptyFields() {
  for (let index = 0; index < getInputs.length; index += 1) {
    if (getInputs[index].value === "") {
      alert("Campos inválidos");
      break;
    } else {
      insertWelcome();
    }
  }
}

// Cria um novo input caso a função validateGenderDiv() return true
function insertGender() {
  const radio = document.getElementById("radio-gender");
  radio.addEventListener("change", () => {
    console.log(`ok`);
    const genderDiv = document.getElementById("personalized-gender");
    genderDiv.innerHTML = null;
    const divCustom = document.createElement("input");
    divCustom.type = "text";
    divCustom.name = "gender-custom";
    divCustom.placeholder = "Gênero (opcional)";
    genderDiv.append(divCustom);
  });
}
insertGender();

// Apaga o conteiner direito e cria uma pagina de boas vindas
function insertWelcome() {
  const lastName = document.getElementsByName("lastname")[0];
  const phoneEmail = document.getElementsByName("phone_email")[0];
  const birthDate = document.getElementsByName("birthdate")[0];
  const firstName = document.querySelector('input[name="firstname"]');
  const gender = document.querySelector('input[type="radio"]:checked').value;

  if (gender == "personalizado") {
    gender = document.getElementsByName("gender-custom")[0].value;
  }

  const phrases = document.createElement("p");
  phrases.innerHTML += `Ola, ${firstName.value} ${lastName.value} !`;
  phrases.innerHTML += `<br> ${phoneEmail.value}`;
  phrases.innerHTML += `<br> ${birthDate.value}`;
  phrases.innerHTML += `<br> ${gender.value}`;
  rightContent.innerHTML = "";
  rightContent.appendChild(phrases);
}

getButton.addEventListener("click", function () {
  alert(document.querySelector("#user-email-phone").value);
});

getRegisterBnt.addEventListener("click", function (event) {
  event.preventDefault();
  checkEmptyFields();
});
