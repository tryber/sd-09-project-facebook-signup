const button = document.querySelector("#button-login");
const inputName = document.querySelector("#user-email-phone");

button.addEventListener("click", () => alert(inputName.value));

const custom = document.querySelector("#custom-gender");
const customGender = document.querySelector("#pers");

customGender.addEventListener("click", function () {
  if (customGender.classList.contains("checked")) {
    return;
  }
  const newGender = document.createElement("input");
  newGender.placeholder = "Gênero (opcional)";
  custom.appendChild(newGender);
  customGender.classList = "checked";
});
