//Criar elemento no HTML, TAG;
let novoParagrafo = document.createElement('p');

//Aqui eu crio o texto que vai ser inserido no HTML
let texto = document.createTextNode('Este é o texto do parágrafo');

//Aqui eu insiro o novo conteudo na tag criada
novoParagrafo.appendChild(texto);

console.log(novoParagrafo);

//Aqui eu mapeio aonde eu quero inserir o novo elemento, no caso é o body, que seria o pai do elemento novo;
let body = document.querySelector('body');

console.log(body);

//Aqui sim eu insiro finalmente o elemento novo no HTML com appendChild
body.appendChild(novoParagrafo);

////////////////////////////////////////////
//INSERIR NO CONTAINER

//AQUI EU MAPEIO AONDE QUERO INSERIR O NOVO ELEMENTO
let novoP = document.querySelector('#container');

console.log(novoP);

//AQUI EU CRIO O ELEMENTO NOVO
let elemento = document.createElement('span');

//AQUI EU INSIRO O NOVO TEXTO NO ELEMENTO
elemento.appendChild(document.createTextNode('Texto do span'));

console.log(elemento);

//AQUI EU O INSIRO NO HTML 
novoP.appendChild(elemento);

/////////////////////////////////////////////////

let h3 = document.querySelector('.h3');

let h3Novo = document.createTextNode('Texto do H3');

h3.appendChild(h3Novo);

