// propriedades document

// acesso todo o body no console
console.log(document.body);

console.log(document.head);

console.log(document.links[0]);

// [0], pq ele pegara o primeiro <a> q encontrar
document.links[0].textContent = 'Twitter';

console.log(document.URL);

console.log(document.title);

document.title = 'Aula 42';

console.log(document.title);

