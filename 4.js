// Crie uma função que retorna o mês por extenso de uma data qualquer passada por parâmetro, exemplo:

// const dataAtual = new Date(); // 2022-06-07T01:01:06.336Z
// const mesExtenso = retornaMesPorExtenso(dataAtual);
// console.log(mesExtenso); // Junho
// Obs.: Como exemplo o mês da data passada seria Junho.

const date = new Date();
month = date.getMonth();

const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
console.log(months[month]);

// console.log(dataAtual.toLocaleString("pt-BR", {month:long"}))