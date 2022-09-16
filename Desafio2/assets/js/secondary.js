// const greenLight = document.querySelector('.openGreen');
// const yellowLight = document.querySelector('.openYellow');
// const redlight = document.querySelector('.openRed');

// function pressBtn() {
//     const btn = document.querySelector('.closeBtn');
//     btn.classList.add('pressBtn');
    
// };

// function timer() {
//     let s = 0;
//     let timer = setInterval(function(){
//         document.querySelector('.timer').innerHTML = '0';
//         s++;
//         if(s > 25) {
//             clearInterval(timer);
//         }
//     }, 25000)
// }

// function pressBtn(lightColor, timer) {
//     const btn = document.querySelector('.closeBtn');
//     btn.classList.add('pressBtn');

//     const yellow = yellowLight.classList.add('openYellow');
//     const green = greenLight.classList.add('openGreen');
//     const red = redLight.classList.add('openRed');
//     const clock = document.querySelector('.timer')
//     clock.classList.add('clock');

// document.addEventListener('click', function(el) {
//     const el = lightColor.target;

//     if (el.classList.contains(green)) {
//         setTimeout(() => {
//             greenLight.classList.remove('openGreen');
//             yellowLight.classList.add('openYellow');
//         }, 7000);
//         clearInterval(timer)
//     } 
//     if (el.classList.contains(yellow)) {
//         setTimeout(() => {
//             yellowLight.classList.remove('openYellow');
//             redLight.classList.add('openRed');
//         }, 7000);
//         clearInterval(timer)
//     }
// })
// }
// const init = () => {
//     greenLight.classList.add('openGreen');
// }

// timer();
// pressBtn()

// function green() {
//     greenLight.classList.add('openGreen');
//     setTimeout(() => {
//         greenLight.classList.remove('openGreen');
//         yellow()
//     }, 7000);
// }

// function clock(){

//     const clock = document.querySelector('.clock');
//     let seconds = 0; 
//     let timer;

//     function startClock() {
//         timer = setInterval(function() {
//             seconds++;
//             clock.innerHTML = seconds;
//         }, 1000);
//     }

//     document.addEventListener('click', function(e) {
//         const el = e.target;
        
//         if (el.classList.contains('openYellow')) {
//             clock.classList.add('openGreen');
//             startClock();
//             clock.classList.remove('openYellow');
//             clearInterval(timer);
//         }

//         if (el.classList.contains('openGreen')) {
//             clearInterval(timer);
//             clock.classList.add('openRed');
//             clock.classList.remove('openGreen');

//         }

//         if (el.classList.contains('openRed')) {
//             clearInterval(timer);
//             clock.classList.remove('openGreen');
//             clock.classList.remove('openRed');

//             clock.innerHTML = '0';
//             seconds = 0;
//         }
//     })
// }
// clock();
// green();

const greenLight = document.querySelector('.greenLight');
const yellowLight = document.querySelector('.yellowLight');
const redLight = document.querySelector('.redLight');
const clock = document.querySelector('.clock');
const btn = document.querySelector('.closeBtn');

function pressBtn() {
    btn.classList.remove('closeBtn');
    btn.classList.add('pressBtn');
    let timeout = 0;
        const time = setInterval(() => {
            console.log(timeout);
            if(timeout === 59){
                btn.classList.remove('pressBtn')
                btn.classList.add('closeBtn');
                clearInterval(time);
            }    
            timeout++;
        }, 1000);

    if (greenLight.classList.contains('openGreen')){
        setInterval(() => {
            
        }, 3000);
    }
};


function yellow() {
    yellowLight.classList.add('openYellow');
    clock.innerHTML = ''
    setTimeout(() => {
        yellowLight.classList.remove('openYellow');
        clock.innerHTML = 15;
        red();
    }, 3000);
}

function green() {
    greenLight.classList.add('openGreen');
    setTimeout(() => {
        greenLight.classList.remove('openGreen');
        yellow()
    }, 8000);

    let x = 7;
    const greenTimer = setInterval(() => {
        clock.classList.add('clock');
        x--;
        clock.innerHTML = x;
        console.log(x);
        if (x === 0) {
            clearInterval(greenTimer);
            clock.innerHTML = ' ';
        }
    }, 1000);
}

function red() {
    redLight.classList.add('openRed');
    setTimeout(() => {
        redLight.classList.remove('openRed');
        clock.innerHTML = 7;
        green();
    }, 15000);

    let y = 15;
    const redTimer = setInterval(() => {
        clock.classList.add('clock2');
        y--;
        clock.innerHTML = y;
        console.log(y);
        if (y === 0){
            clearInterval(redTimer);
            clock.innerHTML = 7;
        }
    }, 1000);
}

const init = () => {
    green();
}

init();