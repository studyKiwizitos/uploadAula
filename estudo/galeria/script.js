let img = document.querySelector('#img');
let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let btn3 = document.querySelector('#btn3');
let btn4 = document.querySelector('#btn4');
let btn5 = document.querySelector('#btn5');

btn1.addEventListener('click', () => {
    img.src = 'imgs/isometric room.png';
})
btn2.addEventListener('click', () => {
    img.src = 'imgs/poço.png';
})
btn3.addEventListener('click', () => {
    img.src = 'imgs/predio.png';
})
btn4.addEventListener('click', () => {
    img.src = 'imgs/planeta.png';
})
btn5.addEventListener('click', () => {
    img.src = 'imgs/skull.png';
})