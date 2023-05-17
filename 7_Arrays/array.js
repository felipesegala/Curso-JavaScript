let arr = [5, 'Felipe', true, {teste: 1, teste: 2}];

console.log(arr);

let arr2 = [1, 2, 3, 4,5];

console.log(arr2);

//PARA ACESSAR OS ELEMENTOS DE UM ARRAY
console.log(arr[1]);
console.log(arr[3]);

//PARA INSERIR VALOR NO ARRAY, PRECISO INDICAR O INDECE INEXISTENTE, PARA NÃO ALTERAR UM JA EXISTENTE;
arr[4] = 'add'; 

console.log(arr);