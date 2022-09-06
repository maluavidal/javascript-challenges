// Crie uma função que retorne a data passada formatada de acordo com os patterns abaixo:

// DIA (DD)
// DIA/MES (DD/MM)
// DIA/MES/ANO (DD/MM/YYYY)
    // const dataFormatada = (new Date(), 'DD/MM/YYYY'); // 2022-06-07T01:01:06.336Z
    // console.log(dataFormatada); // resultado: 07/06/2022

const formatedDate = new Date();

function returnData(date){
    if( date === 'DD') {
        return formatedDate.toLocaleDateString('pt-BR', {day: '2-digit'});
    }   else if( date === 'DD/MM') {
        return formatedDate.toLocaleDateString('pt-BR', {day: '2-digit', month: '2-digit'});
    }   else if( date === 'DD/MM/YYYY') {
        return formatedDate.toLocaleDateString('pt-BR', {day: '2-digit', month:'2-digit', year: 'numeric'});
    }   
}
    console.log(returnData('DD/MM/YYYY'));

































// const date = new Date();
// function formatedDate(date, typeof) {
//     if(typeof === 'DD') return dataAtual.toLocaleDateString("pt-BR", 'numeric', '2-digits');

//     if(typeof === 'DD/MM') return dataAtual.toLocaleDateString("pt-BR", )

//     if(typeof === 'DD/MM/YYYY') return dataAtual.toLocaleDateString("pt-BR", )
// }

// console.log('DD');