//REMOVENDO ELEMENTO FILHO

// AQUI EU SELECIONO O PAI
let container = document.querySelector('#container');

//AQUI EU SELECIONO O FILHO A SER REMOVIDO
let p = document.querySelector('#container p');

//AQUI EU REMOVO O ELEMENTO
container.removeChild(p);

///////////////////////////////////

//REMOVER O ELEMENTO EM SI

let subtitle = document.querySelector('.subtitle');

subtitle.remove();