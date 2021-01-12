function login() {
  const btn = document.getElementById('button-login');
  btn.addEventListener('click', function () {
    alert('Email ou telefone');
  });
}

window.onload = function () {
  login();
};
