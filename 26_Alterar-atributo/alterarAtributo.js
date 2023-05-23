let title = document.querySelector('#title');

title.setAttribute('class', 'testando-atributo');

console.log(title);

///////////////////////////////////////////////////

let btn = document.querySelector('#btn');

btn.setAttribute('disabled', 'disabled');

//////////////////////////

let subtitle = document.querySelector('.subtitle');

subtitle.setAttribute('id', 'titulo-2');

console.log(subtitle);

//////////////////////////////////

let lista = document.querySelector('#lista');

lista.removeAttribute('id');

console.log(lista);