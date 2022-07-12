let formLogin = document.querySelector('.login-form');
let nav = document.querySelector('.navbar');

document.querySelector('#login-btn').onclick = () =>{
    formLogin.classList.toggle('active');
    nav.classList.remove('active');
}

document.querySelector('#menu').onclick = () =>{
    nav.classList.toggle('active');
    formLogin.classList.remove('active')
}

window.onscroll = () =>{
    formLogin.classList.remove('active');
    nav.classList.remove('active');

    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
}

window.onload = () =>{
    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
}

// validar se todos os inputs estão preenchidos e de forma personalizada
// tirar atrinuto disabled

let btn = document.querySelector('#btn');
function validateForm(){
    let name = document.querySelector('#name');
    let email = document.querySelector('#email');
    let number = document.querySelector('#number');
    let text = document.querySelector('#text');

    if(name.value.lenght < 2 && !['@'].includes(email.value) && email.value.lenght < 10 && number.value.lenght < 6 && text.value === ''){
        btn.setAttribute('disabled', '');
    }else{
        btn.removeAttribute('disabled');
    }
}
btn.addEventListener('click', validateForm);
