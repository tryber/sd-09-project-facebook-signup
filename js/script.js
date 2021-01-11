document.querySelector('#button-login').addEventListener('click', function(event){
  event.preventDefault();
  let userEmailPhone = document.getElementById('user-email-phone').value;
  alert(userEmailPhone);
});
