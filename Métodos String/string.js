//lenght

let nome = 'Felipe';
console.log(nome.length);
// mostra o tamanho da string

let obj = 'bola';
console.log(obj.length);

//indexOff

console.log(nome[1]);

let frase = 'O rato roeu a roupa do rei de roma';

console.log(frase.indexOf('roeu'));
// indexOff mostra quando começa a palavra que eu pedi


// slice, remove uma parte da frase 
let remove = frase.slice(7, 11);

console.log(remove);

// replace, altera algo na string

let novaFrase = frase.replace('roeu', 'teste');
console.log(novaFrase);