const lamp = document.querySelector('#lamp');

let counter = 0;
let lampType = 'off';
let seconds;
let timeout;
let canProceed = true;
let interval15Sec; 

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
            if (timeout <= 5 && lampType === 'on') {
                breakLamp();
                clearInterval(timeTurnedOff);
                return;
            }
        
            if (timeout > 5 && lampType === 'off') {
                clearInterval(beforeBreaking);
                turnLampOn();
                return;
                }
            timeout--;
            // console.log(timeout);
        }, 1000); 
        return
}

function timer() {
    seconds = 0;

    timeTurnedOff = setInterval(() => {
        if (counter === 5 && !canProceed) {
            setTimeout(() => {
                breakLamp();
            }, 10000);
            clearInterval(timeTurnedOff);
            return;
        }

        if (lampType === 'on' && seconds === 15) {
            clearInterval(timeTurnedOff);
            turnLampOff();
        }

        seconds++;

        console.log(seconds);
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

    // console.log(el.classList)

    if (lampType === 'broken') return;

    // nao ta com o mouse na lampada
    if (!el.classList.contains('lampada')) {
        return;
    }

    // if (interval15Sec) {
    //     clearTimeout(interval15Sec);
    // }

    if (el.classList.contains('lampOn')) {
        seconds = 0;
        return;
    }

    if (el.classList.contains('lampOff')) {
        if (!canProceed) {
            timeToBreak();
        }

        turnLampOn();
        timer();
    }

})

