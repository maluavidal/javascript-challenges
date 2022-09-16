// const greenLight = document.querySelector('.greenLight');
// const yellowLight = document.querySelector('.yellowLight');
// const redLight = document.querySelector('.redLight');

// function pressBtn() {
//     const btn = document.querySelector('.closeBtn');
//     btn.classList.add('pressBtn');
//     clearInterval(timer);
// };

// function yellow() {
//     yellowLight.classList.add('openYellow');
//     // clock.classList.remove('clock');
//     clock.innerHTML = '';
//     setTimeout(() => {
//         yellowLight.classList.remove('openYellow');
//         red();
//     }, 3000);
// }

// function green() {
//     greenLight.classList.add('openGreen');
//     setTimeout(() => {
//         greenLight.classList.remove('openGreen');
//         yellow()
//     }, 8000);
// }

// function red() {
//     redLight.classList.add('openRed');
//     setTimeout(() => {
//         redLight.classList.remove('openRed');
//         green();
//     }, 16000);
// }


// let s = 7;
// const timer = setInterval(() => {
// clock = document.querySelector('.clock');
// clock.innerHTML = s;
// console.log(s);
// if(s ===  0){
//     clearInterval(timer);
//     let y = 3;
//     const timer2 = setInterval(() => {
//         clock = document.querySelector('.clock2');
//         clock.innerHTML = ' ';
//         if (y === 1) {
//             clearInterval(timer2);
//             let x = 15;
//             const timer3 = setInterval(() => {
//             clock = document.querySelector('.clock3');
//             clock.innerHTML = x;
//             console.log(x);
//             if(x ===  0){
//                 clearInterval(timer3);
//             }
//             x--;
//             }, 1000)
//         }
//         y--;
//     }, 1000); 
    
// }
// s--;
// }, 1000)

// function countdown() {
// }

// const init = () => {
//     green();
//     countdown(timer);
// }

// init();

const greenLight = document.querySelector('.greenLight');
const yellowLight = document.querySelector('.yellowLight');
const redLight = document.querySelector('.redLight');
const clock = document.querySelector('.clock');
const btn = document.querySelector('.closeBtn');
const initialize = () => green.classList.add

function pressBtn() {
   const greenIsNotActive = redLight.classList.contains('openRed') || yellowLight.classList.contains('openYellow');

   if (greenIsNotActive) {
       return;
   }

   btn.classList.remove('closeBtn');
    btn.classList.add('pressBtn');

   green(3000);
};


let currentTime = 0;

const cliqueiNoFull = () => currentTime = 7;

const timer = setInterval(() => {
   currentTime++

   if (currentTime === 7) {
      greenLight.classList.add('openGreen');

      clock.innerHTML = ''
  
      setTimeout(() => {
          yellowLight.classList.remove('openYellow');
          
      }, 3000);   }

   if (currentTime === 10) {
      yellowLight.classList.add('openYellow');

      clock.innerHTML = ''
  
      setTimeout(() => {
          yellowLight.classList.remove('openYellow');
          clock.innerHTML = 15;
          redLight.classList.add('openRed');
      }, 3000);   }

   let greenT;

   if (currentTime === 25) {
      // Liga o verde e dá o start dnv
      currentTime = 0;
      greenLight.classList.add('openGreen');
    greenT = setTimeout(() => {
        greenLight.classList.remove('openGreen');
        yellowLight.classList.add('openYellow');
    }, 8000);
   }

}, 1000);

pressBtn();


// let s = 7;

// const timer = setInterval(() => {
//     clock.classList.add('clock');
//     console.log(s);

//     if (greenLight.classList.contains('openGreen')) {
//         s =7
//     }

//     if (redLight.classList.contains('openRed')) {
//         s =15
//     }

//     if (redLight.classList.contains('openYellow')) {
//         s =3
//     }
    
//     s--
//     clock.innerHTML = s;
// }, 1000);