// Monte uma função que retorna HTML dinâmico que serão os elementos utilizados para uma paginação. Siga as regras:

// A função receberá dois parâmetros: total geral de itens e items por página
// O total geral de itens são 15
// Você só pode exibir 2 itens por página
// O número da página deve vir acompanhado do código dado como exemplo: Página 1/Página 2/Página 3, etc...
// Utilize o HTML <li> abaixo apenas como exemplo:

//     <li>Página 1</li>
//     <li>Página 2</li>
//     <li>Página 3</li>
//     <li>Página 4</li>
    
const pagination = (totalItems, itemsPerPage) => {
    const ulElement = document.getElementById("pagination");
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    for (let index = 0; index < totalPages; index++) {
        ulElement.innerHTML += `<li>Página ${index + 1} </li>`;
    }
};

pagination(15, 2);