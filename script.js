const loginBtn = document.querySelector("#button-login");
const emailPhoneValue = document.querySelector("#user-email-phone");

loginBtn.addEventListener('click', function() {
  alert(emailPhoneValue.value);
});