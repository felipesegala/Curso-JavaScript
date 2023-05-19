let lista = ['Laranja', 'Maçã', 'Pera', 'Jaca', 'Limão'];

let listaUl = document.createElement('ul');

let body = document.getElementsByTagName('body');

//console.log(body[0]);

body[0].appendChild(listaUl);

let listaNoBody = document.getElementsByTagName('ul');

console.log(listaNoBody[0]);