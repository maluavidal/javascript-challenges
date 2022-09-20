const lamp = document.querySelector('#lamp');

let counter = 0;
let lampType = 'off';
let seconds;
let timeout;
let canProceed = true;

function turnLampOn() {
    counter++;
    lampType = 'on';
    lamp.classList.remove('lampOff');
    lamp.classList.add('lampOn');
}

function turnLampOff() {
    seconds = 0;
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
    return
}

function timer() {
    seconds = 0;

    timeTurnedOff = setInterval(() => {
        if (counter === 5 && !canProceed) {
            breakLamp();
            clearInterval(timeTurnedOff);
            return;
        }

        if (lampType === 'on' && seconds === 15) {
            clearInterval(timeTurnedOff);
            turnLampOff();
            return;
        }
        seconds++;
    }, 1000);
}

function blocked() {
    canProceed = false;

    setTimeout(() => {
        canProceed = true;
    }, 5000);
}


document.addEventListener('mousemove', (lamp) => {
    const el = lamp.target;

    if (lampType === 'broken') return;

    if (el.classList.contains('lampOff')) {
        if (!canProceed) {
            timeToBreak();
        }

        turnLampOn();
        timer();
    }

    if (!el.classList.contains('lampada')) {
        return;
    }

    if (el.classList.contains('lampOn')) {
        seconds = 0;
        return;
    }
})

