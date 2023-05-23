//ACRESCENTAR ELEMENTO A UM FILHO

//AQUI EU CRIO O ELEMENTO NOVO
let elemento = document.createElement('div');

// AQUI EU DEI UMA CLASSE PARA O ELEMENTO NOVO
elemento.classList = 'div-criada';

console.log(elemento);

// AQUI EU SELECIONO AONDE VOU INSERIR O ELEMENTO FILHO
let container = document.querySelector('#container');

// E AQUI POR FIM EU ENSIRO O ELEMENTO NO HTML
container.appendChild(elemento);

///////////////////////////////////////////

// inserBefore - insere antes

//AQUI EU CRIO O ELEMENTO NOVO
let elemento2 = document.createElement('div');

// AQUI EU ATRIBUO UMA CLASSE A ELE
elemento2.classList = 'div-before';

console.log(elemento2);

// AQUI POR GARANTIA EU SELECIONO O ELEMENTO AONDE VOU INSERIR ANTES O NOVO
let elemento3 = document.querySelector('#container .div-criada');

console.log(elemento3);

/* AQUI EU INSIRO ELE, ATENÇÃO, PRECISO INDICAR O ELEMENTO PRINCIPAL E O ELEMENTO QUE QUERO INSERIR ANTES DO PRINCIPAL*/
container.insertBefore(elemento2, elemento3);