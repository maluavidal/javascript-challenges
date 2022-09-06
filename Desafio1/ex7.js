// Junte os três arrays em um só e retorne um novo sem números duplicados:

const array1 = [0, 1, 2, 3, 4, 5, 6, 70, 8, 9];
const array2 = [0, 100, 200, 300, 4, 500, 6, 70, 88, 9];
const array3 = [00, 1, 2, 88, 9, 88, 5, 8, 0, 200, 100];

let newArray = [...array1, ...array2, ...array3];

 newArray = new Set(newArray);

console.log(newArray);