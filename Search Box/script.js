<<<<<<< HEAD
const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');

btn.addEventListener('click', () => {
    if(input.classList.length === 2) {
        input.classList.remove('active');
    }else {
        input.classList.add('active');
        input.focus();
    }
    
=======
const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');

btn.addEventListener('click', () => {
    if(input.classList.length === 2) {
        input.classList.remove('active');
    }else {
        input.classList.add('active');
        input.focus();
    }
    
>>>>>>> fcf4cbe0645ffdba7af0e5cfc58e743099ac652b
});