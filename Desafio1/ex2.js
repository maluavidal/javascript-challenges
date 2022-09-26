// Utilize o forEach e o filter para gerar um novo array filtrando apenas os números pares.

// Realize com o forEach
// Realize com o filter

const arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const anotherArray = [];

const isEven = value => {
    return value % 2 === 0;
}

arrayNumeros.forEach(function (value) {
    if (isEven(value)) {
        anotherArray.push(value);
    }
})

console.log(anotherArray);

const newArray = arrayNumeros.filter(value => isEven(value));
// console.log(newArray);