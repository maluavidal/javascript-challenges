const greenLight = document.querySelector('.greenLight');
const yellowLight = document.querySelector('.yellowLight');
const redLight = document.querySelector('.redLight');
const clock = document.querySelector('.clock');
const btn = document.querySelector('.closeBtn');
let actualColor;
let closeBtnIsBlocked = false;

function pressBtn() {
    if (actualColor !== 'green' || closeBtnIsBlocked) {
        return;
    }

    btn.classList.remove('closeBtn');
    btn.classList.add('pressBtn');

    resetButton();
    setTimeout(() => {
        yellow();
    }, 3000);
};

const resetButton = () => {
    closeBtnIsBlocked = true;
    setTimeout(() => {
        btn.classList.remove('pressBtn')
        btn.classList.add('closeBtn');
        closeBtnIsBlocked = false;
    }, 60000);
}

function yellow() {
    actualColor = 'yellow';

    clearInterval(greenT);

    btn.classList.remove('closeBtn');
    btn.classList.add('pressBtn');

    yellowLight.classList.add('openYellow');

    if (yellowLight.classList.contains('openYellow')){
        greenLight.classList.remove('openGreen');
    }

    clock.innerHTML = ''

    setTimeout(() => {
        yellowLight.classList.remove('openYellow');
        red();
    }, 3000);
}

let greenT;

function green(settedTimeout = 7000) {
    actualColor = 'green';

    btn.classList.remove('pressBtn');
    btn.classList.add('closeBtn');

    let timeGreen = settedTimeout / 1000;
    clock.innerHTML = timeGreen;
    if (greenT) {
        clearInterval(greenT)     
    }

    
    greenLight.classList.add('openGreen');
    greenT = setInterval(() => {
        timeGreen--;
        clock.innerHTML = timeGreen;
        console.log(timeGreen);
        if (timeGreen === 0) {
            greenLight.classList.remove('openGreen');
            yellow();
            clearInterval(greenT)
        }
    }, 1000);
}


let redT;

function red(settedTimeout = 15000) {
    actualColor = 'red';

    let timeRed = settedTimeout / 1000;
    clock.innerHTML = timeRed;

    if (redT) {
        clearInterval(redT);
    }

    redLight.classList.add('openRed');
    redT = setInterval(() => {
        timeRed--;
        clock.innerHTML = timeRed;
        if(timeRed === 0) {
        redLight.classList.remove('openRed');
        green();
        clearInterval(redT);
        }
    }, 1000);
}

const init = () => {
    green();
}

init();