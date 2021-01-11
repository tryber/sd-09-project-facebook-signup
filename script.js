const selectBtn = document.querySelector('#button-login')

selectBtn.addEventListener('click',function(){
    const inputValor = document.querySelector('#user-email-phone');
    alert(inputValor.value)
});
