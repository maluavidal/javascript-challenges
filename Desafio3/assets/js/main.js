const lamp = document.querySelector('#lamp');

let counter = 0;
let lampType = 'off';
let timeout;
let canProceed = true;

function turnLampOn() {
    counter++;
    lampType = 'on';
    lamp.classList.remove('lampOff');
    lamp.classList.add('lampOn');
}

function turnLampOff() {
    lampType = 'off';
    lamp.classList.remove('lampOn');
    lamp.classList.add('lampOff');
    blocked();
}

function breakLamp() {
    lampType = 'broken';
    lamp.classList.remove('lampOn');
    lamp.classList.add('brokenLamp');
}

function blocked() {
    canProceed = false;

    setTimeout(() => {
        canProceed = true;
    }, 5000);
}

function timeToBreak() {
    timeout = 10;
    beforeBreaking = setInterval(() => {
        if (timeout > 5 && lampType === 'on') {
            setTimeout(() => {
                breakLamp();
            }, 10000);
            clearInterval(timeTurnedOff);
            return;
        }

        if (timeout <= 5 && lampType === 'off') {
            clearInterval(beforeBreaking);
            turnLampOn();
            return;
        }
        timeout--;
    }, 1000);
}


function timer() {
    let seconds = 0;

    timeTurnedOff = setInterval(() => {
        if (lampType === 'on' && seconds === 15) {
            clearInterval(timeTurnedOff);
            turnLampOff();
            return;
        }

        if (counter === 5 && !canProceed) {
            breakLamp();
            clearInterval(timeTurnedOff);
            return;
        }

        seconds++;
    }, 1000);
}

document.addEventListener('mousemove', (lamp) => {
    const el = lamp.target;

    const isLampOff = el.classList.contains('lampOff');

    if (lampType === 'broken' || !isLampOff) {
        return;
    }

    if (!canProceed) {
        timeToBreak();
    }

    turnLampOn();
    timer();
})

