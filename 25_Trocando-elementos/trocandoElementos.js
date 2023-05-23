// criar elemento

let elemento = document.createElement('h3');

elemento.classList = 'testando-classe';

let texto = document.createTextNode('Este é o texto');

elemento.appendChild(texto);

console.log(elemento);

//selecionar elemento que quero trocar

let title = document.querySelector('#title');

console.log(title);

// seleciono o pai do elemento

let pai = title.parentNode;

//trocar o elemento
pai.replaceChild(elemento, title);
