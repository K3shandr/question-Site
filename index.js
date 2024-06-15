
let dive1 = document.getElementsByClassName('button1')[0];
let mdiv = document.getElementsByClassName('maindiv')[0];
let coord = dive1.getBoundingClientRect();
let answerYes = document.getElementsByClassName('buttonYes')[0];

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}  


dive1.addEventListener('mouseover',function(){
    let tp = getRandomNumber(100,500);
    let rg = getRandomNumber(100,400);
    dive1.style.top = `${tp}px`;
    dive1.style.right=`${rg}px`;
})

dive1.addEventListener('click',function(){
    let tp = getRandomNumber(100,500);
    let rg = getRandomNumber(100,400);
    dive1.style.top = `${tp}px`;
    dive1.style.right=`${rg}px`;
})

answerYes.addEventListener('click',function(){
    mdiv.innerHTML = `<p class='pclass'>Спасибо за честный ответ</p>`
});