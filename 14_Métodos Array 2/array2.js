// splice, adiciona elemento no meio do array;
let arr = [1,2,3,4,5];

/*splice recebe 3 parametros, a posição que quero adicionar na frente, nesse caso a posição 2. O segundo parâmetro é o que quero remover, nesse caso não removemos nd então coloco 0. E o último parâmetro é o que quero adicionar;*/

arr.splice(2, 0, 999);
console.log(arr);

//slice tbm permite remover como descrito no comentario acima;

arr.splice(4, 1); // removeu o elemento 4 no indice 4;
console.log(arr);

// indexOff, indica o indice de um array especificado por mim;

console.log(arr.indexOf(5)); //nesse caso o indice do elemento 5 é "4".

// join, transforma em uma string inteira
let arr2 = ['O', 'rato', 'roeu', 'a', 'ropa'];

console.log(arr2.join(' '));//aqui estou mostrando o tipo de espaço que quero entre os elementos, poderia ser virgula ou traço

//reverse

console.log(arr2.reverse());
