// const green = document.querySelector('.greenLight');
// const yellow = document.querySelector('.yellowLight');
// const red = document.querySelector('.redLight');
// const btn = document.querySelector('.closeBtn');

// const init = () => { 
// greenTest();
// };

// const greenTest = () => {
//     green.classList.add('openGreen');

//     setTimeout(() => {
//         green.classList.remove('openGreen');
//         yellowTest()
//     }, 7000);
// };

// const yellowTest = () => {
//     yellow.classList.add('openYellow');

//     setTimeout(() => {
//         yellow.classList.remove('openYellow');
//         redTeste();
//     }, 3000);
// };

// const redTeste = () => {
//     red.classList.add('openRed');

//     setTimeout(() => {
//         red.classList.remove('openRed');
//         greenTest();
//     }, 10000);
// }

// function pressBtn() {
//         btn.classList.add('pressBtn');
//         let timeout = 0;
//         const time = setInterval(() => {
//             console.log(timeout);
//             if(timeout === 60){
//                 btn.classList.remove('pressBtn');
//                 clearInterval(time);
//             }    
//             timeout++;
//         }, 1000);
//     };

// init();

// function semaphore(color, seconds){
    

//     let s = seconds;
//     const timer = setInterval(() => {
//         clock = document.querySelector('.clock');
//         clock.innerHTML = s;
//         console.log(s);
//         s--;
//         if(color === green){
//             s = 10;
//             setTimeout(() => {
//                 greenLight.classList.remove('openGreen');
//                 yellowlight.classList.add('openYellow');
//             }, 8000);
//         }
//     }, 1000)

        
// }

// semaphore();