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

//toLowerCase e toUpperCase

let texto = 'Esta é a frase que vamos manipular';

console.log(texto.toLocaleLowerCase());

let fraseCaixaAlta = texto.toLocaleLowerCase();

console.log(texto.toLocaleUpperCase());


// trim, remove os espaços desnecessarios da string,

let nome1 = '                Felipe                ';

let nome1Trim = nome1.trim();

console.log(nome1);
console.log(nome1Trim);

//split, mostra a frase separada em um array e cada palavra em uma string, como indece do array;

console.log(texto.split(' '));

let tags = 'PHP, JavaScript, HTML, CSS'; 

console.log(tags.split(', '));


//lastIndexOff

let fraseDois = 'Eu quero a última palavra teste desta frase de teste';

console.log(fraseDois.indexOf('teste'));

console.log(fraseDois.lastIndexOf('teste'));