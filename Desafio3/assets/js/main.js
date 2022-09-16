const lampOn = document.querySelector('.lampOn');
const lampOff = document.querySelector('.lampOff');
const brokenLamp = document.querySelector('.brokenLamp');
const container = document.querySelector('.container');
let timeHeated = false;
// const lamp = document.getElementById('lamp');
let lampType = 'off';
let counter = 0;

function turnLampOn() {
    if(counter  <= 5){
        counter++
    } else {
        breakLamp();
        return;
    }
    lampType = 'on';
    lampOff.classList.remove('lampOff');
    lampOff.classList.add('lampOn');
    timer();
}

function timer() {
    const time = setInterval(() => {
        turnLampOff(time);
    }, 15000);
    console.log();
}

function breakLamp() {
    lampOff.classList.remove('lampOn');
    lampOff.classList.add('brokenLamp');
}

function turnLampOff() {
    lampType = 'off';

    lampOff.classList.remove('lampOn');
    lampOff.classList.add('lampOff');

}

function heated(settedTimeout = 5000) {
    timeHeated = true;
    const timeToTurnOn = setInterval(() => {
        turnLampOn();
    }, settedTimeout);

    let timeout = settedTimeout / 1000;

    if(timeout < 5) {
        const timeToBreak = setInterval(() => {
            breakLamp(timeToBreak);
        }, 10000);
        clearInterval(timeToTurnOn);
    }
}

