// Dado array abaixo, monte um novo array com apenas números (inteiros e decimais) seguindo as regras:

// Cada valor do novo array deve ser somado com o número anterior
// Se o novo valor não for par, deverá ser inserido um novo número anterior a ele somando + 0.5

const arrayNumeros = [0, '1', '1.5', 2, 3, 4, 5, 6, 7, '8', 9];
const onlyNumbers = arrayNumeros.map(str => +(str));
const newArray = [];

onlyNumbers.forEach((value, i) => {
    const isFirstItem = !i;

    if (isFirstItem) {
        newArray.push(value);
        return;
    }

    const previousValue = onlyNumbers[i - 1];
    let newValue = value + previousValue;

    if (newValue % 2 !== 0) {
        newArray.push(value + 0.5);
    }

    newArray.push(newValue);
})

console.log(newArray);
