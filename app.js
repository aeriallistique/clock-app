setInterval(setClock, 1000);

let hoursEl= document.querySelector('.hours')
let minutesEl= document.querySelector('.minutes')
let secondsEl= document.querySelector('.seconds')
const number = document.querySelectorAll('.number');

function setClock(){
    let day = new Date();
    let seconds = (day.getSeconds())/ 60;
    let minutes = (seconds + day.getMinutes()) / 60;
    let hours = (minutes + day.getHours()) / 12;

    setRotation(secondsEl, seconds);
    setRotation(minutesEl, minutes);
    setRotation(hoursEl, hours);
}

function setRotation(element, rotation){
    element.style.setProperty('--rotation', rotation * 360)
}
    
setClock();
