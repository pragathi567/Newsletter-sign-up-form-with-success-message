const subscribeBtn = document.querySelector('.subscribe-btn');
const dismissBtn = document.querySelector('.dismiss-btn');
const formContainer = document.querySelector('.form-container');
const submitMsg = document.querySelector('.success-message');
const errorMsg = document.querySelector('.error-msg');
const inputEl = document.getElementById('email');

subscribeBtn.addEventListener('click', () =>{
 if(inputEl.value !== ''){
    formContainer.classList.add("hide")
    submitMsg.classList.remove("hide")
    errorMsg.innerHTML = "";
    inputEl.classList.remove('active')
 }else{
    errorMsg.innerHTML = "Valid Email Input"
    inputEl.classList.add('active')
 }
})

submitMsg.addEventListener('click', ()=>{
    formContainer.classList.remove("hide");
    submitMsg.classList.add("hide");
    inputEl.value = '';
})