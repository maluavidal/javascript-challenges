// Retorne a data abaixo (no formato ISO) nos seguintes padrões:

// DIA/MÊS/ANO
// DIA/MÊS/ANO HORA:MINUTO

const data = new Date('2022-06-12T01:01:06.336Z');

function addZero(num) {
    return num >= 10 ? num : `0${num}`;
}

function formatDate(data) {
    const day = data.getDate();
    const month = data.getMonth();
    const year = data.getFullYear();
    
    return `${day}/${month}/${year}`;
}

const newDate = formatDate(data);
// console.log(newDate);

function formatDateTime(data) {
    const day = addZero(data.getDate());
    const month = addZero(data.getMonth() + 1);
    const year = data.getFullYear();
    const hour = addZero(data.getHours());
    const min = addZero(data.getMinutes());
    
    return `${day}/${month}/${year} ${hour}:${min}`;
}

const DateTime = formatDateTime(data);
console.log(DateTime);

