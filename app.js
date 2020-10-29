setInterval(setClock, 1000);

let hoursEl= document.querySelector('.hours')
let minutesEl= document.querySelector('.minutes')
let secondsEl= document.querySelector('.seconds')
const number = document.querySelectorAll('.number');

function setClock(){
    let ziua = new Date();
    let seconds = (ziua.getSeconds())/ 60;
    let minutes = (seconds + ziua.getMinutes()) / 60;
    let hours = (minutes + ziua.getHours()) / 12;

    setRotation(secondsEl, seconds);
    setRotation(minutesEl, minutes);
    setRotation(hoursEl, hours);
}

function setRotation(element, rotationRatio){
    element.style.setProperty('--rotation', rotationRatio * 360)
}
    
setClock();