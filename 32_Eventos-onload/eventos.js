// onload funciona bem colocando o script acima do title no HTML
/*
window.onload = function () {
    console.log('Carregou o DOM');


}

console.log('Carregou o JS');
// AQUI PRIMEIRO MOSTRA O JS, PQ N CARREGOU TODA A PAGINA AINDA
*/

//////////////////////////////////////////

window.onload = function () {
    console.log('Carregou o DOM');
let titl = document.querySelector('.titl');

    console.log(titl);
}

console.log('Carregou o JS');

let title = document.querySelector('#title');
// Aqui aparece como null pq ainda não existe dentro do codigo, pra resolver isso posso colocar o codigo dentro do onload;
