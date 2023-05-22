// length

let arr = [1,2,3,4,5];

console.log(arr.length);

// push, adiciona um elemento no final do array

arr.push(6);
arr.push('Qualquer coisa');

console.log(arr);

//pop remove um elemento do fim do array;
arr.pop();

console.log(arr);

//unshift adiciono no começo
arr.unshift(0);
arr.unshift('teste');

console.log(arr);

//shift, remove algo do começo do array
arr.shift();

console.log(arr);

//acessar o último elemento do array
console.log(arr[arr.length - 1]);

// isArray, necessita usar o objeto [Array.isArray()]

console.log(Array.isArray(5));

console.log(Array.isArray(arr));