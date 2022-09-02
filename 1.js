// Dado array abaixo, monte um novo array com apenas números (inteiros e decimais) seguindo as regras:

// Cada valor do novo array deve ser somado com o número anterior
// Se o novo valor não for par, deverá ser inserido um novo número anterior a ele somando + 0.5

const arrayNumeros = [0, '1', '1.5', 2, 3, 4, 5, 6, 7, '8', 9];
const onlyNumbers = arrayNumeros.map(str => Number(str));
const newArray = [];

onlyNumbers.forEach(function(value, i, array) {
//    array[i-1], `/`, value, `/`, array[i+1]
    if(value === array[0]) return newArray.push(value);
    let x = array[i - 1] + array[i];
    if(x.value % 2 !== 0) {
        newArray.push(value + 0.5);
    }
    newArray.push(x);
        
})

console.log(newArray);






// const newArray = [];
// arrayNumeros.forEach(str => {
//     newArray.push(Number(str));s
// });



